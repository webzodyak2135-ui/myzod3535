import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Share2, MessageCircle, Instagram } from "lucide-react";
import { getArticleBySlug } from "@/lib/article-data";

export const runtime = "edge";
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sternenfeed.de";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const canonicalUrl = `${BASE_URL}/article/${slug}`;

  if (!article) {
    return {
      title: "Artikel nicht gefunden | SternenFeed",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${article.title} | SternenFeed`,
    description: article.description,
    alternates: {
      canonical: canonicalUrl,
      languages: { "de-DE": canonicalUrl },
    },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: canonicalUrl,
      title: article.title,
      description: article.description,
      images: [{ url: article.heroImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.heroImage],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero Image with Overlay */}
      <div className="article-hero">
        <Image
          src={article.heroImage}
          alt={article.title}
          width={1920}
          height={1080}
          priority
          className="article-hero-image"
        />
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <Link
            href={article.categoryHref}
            className="article-category-badge"
            style={{ color: article.categoryColor }}
          >
            {article.category}
          </Link>
          <h1 className="article-hero-title">{article.title}</h1>
        </div>
      </div>

      {/* Article Meta */}
      <div className="article-meta-bar">
        <div className="article-meta-container">
          <span className="article-meta-item">{article.author}</span>
          <span className="article-meta-divider">•</span>
          <span className="article-meta-item">{article.date}</span>
          <span className="article-meta-divider">•</span>
          <span className="article-meta-item">{article.readTime} Lesezeit</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="article-content">
        {article.content.map((block, i) => {
          if (block.type === "paragraph") {
            return (
              <p key={i} className="article-paragraph">
                {block.text}
              </p>
            );
          }
          if (block.type === "heading") {
            return (
              <h2 key={i} className="article-heading">
                {block.text}
              </h2>
            );
          }
          if (block.type === "image" && block.src && block.alt) {
            return (
              <div key={i} className="article-image-wrapper">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={768}
                  height={512}
                  className="article-image"
                />
              </div>
            );
          }
          if (block.type === "quote") {
            return (
              <blockquote key={i} className="article-quote">
                <p className="article-quote-text">{block.text}</p>
                {block.author && <cite className="article-quote-author">— {block.author}</cite>}
              </blockquote>
            );
          }
          return null;
        })}
      </article>

      {/* Share Bar */}
      <div className="article-share-bar">
        <p className="article-share-title">Bu yazıyı paylaş</p>
        <div className="article-share-buttons">
          <button className="article-share-btn article-share-btn--whatsapp">
            <MessageCircle size={18} />
            WhatsApp
          </button>
          <button className="article-share-btn article-share-btn--twitter">
            <Share2 size={18} />
            Twitter
          </button>
          <button className="article-share-btn article-share-btn--instagram">
            <Instagram size={18} />
            Instagram
          </button>
        </div>
      </div>

      {/* Reactions */}
      <div className="article-reactions">
        <p className="article-reactions-title">Bu yazı hoşuna gitti mi?</p>
        <div className="article-reactions-emojis">
          {["😍", "🤔", "😮", "🔥", "✨"].map((emoji) => (
            <button key={emoji} className="article-reaction-btn">
              {emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Next Article */}
      {article.nextArticle ? (
        <div className="article-next-section">
          <h3 className="article-next-label">Sıradaki Yazı</h3>
          <Link href={article.nextArticle.href} className="article-next-card">
            <div className="article-next-image-wrapper">
              <Image
                src={article.nextArticle.image}
                alt={article.nextArticle.title}
                width={600}
                height={400}
                className="article-next-image"
              />
            </div>
            <div className="article-next-content">
              <span className="article-next-category">{article.nextArticle.category}</span>
              <h4 className="article-next-title">{article.nextArticle.title}</h4>
              <span className="article-next-cta">Okumaya Başla →</span>
            </div>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
