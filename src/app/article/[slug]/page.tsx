import Image from "next/image";
import Link from "next/link";
import { Share2, MessageCircle, Instagram } from "lucide-react";

export const runtime = "edge";

const ARTICLE_DATA = {
  title: "Flugträume: Freiheit oder Flucht?",
  category: "Traumdeutung",
  categoryColor: "#818cf8",
  categoryHref: "/ruya",
  author: "SternenFeed Editör",
  date: "22. März 2025",
  readTime: "5 Min.",
  heroImage: "/img/hero-default.jpg",
  content: [
    {
      type: "paragraph",
      text: "Vom Fliegen zu träumen ist eines der ältesten und universellsten Traumthemen der Menschheit. Interkulturelle Forschungen zeigen, dass Menschen auf der ganzen Welt ähnliche Flugerfahrungen erleben. Aber was bedeutet dieser Traum?",
    },
    {
      type: "heading",
      text: "Freiheit und Kontrolle",
    },
    {
      type: "paragraph",
      text: "Flugträume werden meist mit dem Wunsch nach Freiheit, der Befreiung von Grenzen und dem Gewinn einer höheren Perspektive in Verbindung gebracht. Wenn du in deinem Traum leicht und mit Freude fliegst, zeigt dies normalerweise, dass du die Kontrolle über dein Leben hast und auf deine Ziele zusteuerst.",
    },
    {
      type: "image",
      src: "/img/hero-default.jpg",
      alt: "Mystisches Symbol",
    },
    {
      type: "heading",
      text: "Flucht und Angst",
    },
    {
      type: "paragraph",
      text: "Wenn du andererseits Schwierigkeiten beim Fliegen hast oder Angst vor dem Fallen verspürst, könnte dein Unterbewusstsein dir sagen, dass du versuchst, vor etwas zu fliehen. Höhenangst, Kontrollverlust oder die Last der Verantwortung zeigen sich in solchen Träumen.",
    },
    {
      type: "quote",
      text: "Im Traum zu fliegen ist die reinste Form des Wunsches der Seele, physische Grenzen zu überschreiten.",
      author: "Carl Jung",
    },
    {
      type: "paragraph",
      text: "Laut Jung ist der Flugtraum eine Reflexion des Versuchs des Individuums, sein unbewusstes Potenzial zu entdecken und Ego-Grenzen zu überschreiten. Diese Träume treten oft in kreativen Phasen oder vor großen Veränderungen auf.",
    },
  ],
  nextArticle: {
    title: "Wasserträume: Spiegel deiner Emotionen",
    category: "Traumdeutung",
    href: "/article/su-ruyasi",
    image: "/img/hero-default.jpg",
  },
};

export default function ArticlePage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero Image with Overlay */}
      <div className="article-hero">
        <Image
          src={ARTICLE_DATA.heroImage}
          alt={ARTICLE_DATA.title}
          width={1920}
          height={1080}
          priority
          className="article-hero-image"
        />
        <div className="article-hero-overlay" />
        <div className="article-hero-content">
          <Link
            href={ARTICLE_DATA.categoryHref}
            className="article-category-badge"
            style={{ color: ARTICLE_DATA.categoryColor }}
          >
            {ARTICLE_DATA.category}
          </Link>
          <h1 className="article-hero-title">{ARTICLE_DATA.title}</h1>
        </div>
      </div>

      {/* Article Meta */}
      <div className="article-meta-bar">
        <div className="article-meta-container">
          <span className="article-meta-item">{ARTICLE_DATA.author}</span>
          <span className="article-meta-divider">•</span>
          <span className="article-meta-item">{ARTICLE_DATA.date}</span>
          <span className="article-meta-divider">•</span>
          <span className="article-meta-item">{ARTICLE_DATA.readTime} Lesezeit</span>
        </div>
      </div>

      {/* Article Content */}
      <article className="article-content">
        {ARTICLE_DATA.content.map((block, i) => {
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
      <div className="article-next-section">
        <h3 className="article-next-label">Sıradaki Yazı</h3>
        <Link href={ARTICLE_DATA.nextArticle.href} className="article-next-card">
          <div className="article-next-image-wrapper">
            <Image
              src={ARTICLE_DATA.nextArticle.image}
              alt={ARTICLE_DATA.nextArticle.title}
              width={600}
              height={400}
              className="article-next-image"
            />
          </div>
          <div className="article-next-content">
            <span className="article-next-category">{ARTICLE_DATA.nextArticle.category}</span>
            <h4 className="article-next-title">{ARTICLE_DATA.nextArticle.title}</h4>
            <span className="article-next-cta">Okumaya Başla →</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
