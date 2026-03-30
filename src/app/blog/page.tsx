import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";
import { BURC_ONERILERI, ILISKI_ONERILERI } from "@/components/related-cards-data";

const DISCOVER_CATEGORIES = [
  {
    title: "Astrologie-News",
    slug: "haberler",
    desc: "Neueste astrologische Entwicklungen und wichtige Himmelsereignisse",
    icon: "📰",
    color: "#fbbf24",
  },
  {
    title: "Sternzeichen-Trends",
    slug: "trendler",
    desc: "Beliebte Sternzeichen-Analysen und aktuelle Kommentare",
    icon: "📈",
    color: "#a855f7",
  },
  {
    title: "Sternengeschichten",
    slug: "oykuler",
    desc: "Die zauberhafte Welt der Mythologie und Astrologie-Geschichten",
    icon: "✨",
    color: "#ec4899",
  },
  {
    title: "Expertenmeinungen",
    slug: "uzmanlar",
    desc: "Besondere Texte und Analysen von professionellen Astrologen",
    icon: "🔮",
    color: "#8b5cf6",
  },
  {
    title: "Kosmischer Kalender",
    slug: "takvim",
    desc: "Wichtige astrologische Daten und Planetenbewegungen",
    icon: "📅",
    color: "#34d399",
  },
  {
    title: "Sternzeichen-Statistiken",
    slug: "istatistik",
    desc: "Interessante Daten und Forschungen zu Sternzeichen",
    icon: "📊",
    color: "#fb923c",
  },
];

export default function DiscoverPage() {
  return (
    <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #fbbf24 60%, #f59e0b 100%)",
          padding: "5rem 1rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(251,191,36,0.2)", filter: "blur(100px)" }} />
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#ffffff",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>🌟</span> Astro Blog
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "1rem",
            textShadow: "0 4px 30px rgba(0,0,0,0.2)",
            letterSpacing: "-0.02em",
          }}>
            Kozmik Dünyayı Keşfet
          </h1>

          <p style={{
            fontSize: "1.15rem",
            color: "#ffffff",
            maxWidth: "42rem",
            margin: "0 auto",
            lineHeight: 1.7,
            opacity: 0.95,
          }}>
            Haberler, trendler ve uzman görüşleriyle astrolojinin büyülü dünyasına dalın
          </p>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="#1a0b2e" />
          </svg>
        </div>
      </section>

      {/* Kategori Kartları */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {DISCOVER_CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                style={{
                  display: "block",
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "16px",
                    background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {category.icon}
                </div>

                <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
                  {category.title}
                </h3>

                <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.7, opacity: 0.85 }}>
                  {category.desc}
                </p>

                <div style={{
                  marginTop: "1.5rem",
                  fontSize: "0.9rem",
                  color: category.color,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  Keşfet <span style={{ fontSize: "1.2rem" }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          BURC_ONERILERI[0],
          BURC_ONERILERI[1],
          ILISKI_ONERILERI[1],
          BURC_ONERILERI[2]
        ]}
      />
    </div>
  );
}
