import Link from "next/link";

const BURCLAR = [
  { name: "Widder", emoji: "♈", date: "21. März - 19. April", element: "Feuer", slug: "koc", color: "#ef4444" },
  { name: "Stier", emoji: "♉", date: "20. April - 20. Mai", element: "Erde", slug: "boga", color: "#ffffff" },
  { name: "Zwillinge", emoji: "♊", date: "21. Mai - 20. Juni", element: "Luft", slug: "ikizler", color: "#eab308" },
  { name: "Krebs", emoji: "♋", date: "21. Juni - 22. Juli", element: "Wasser", slug: "yengec", color: "#3b82f6" },
  { name: "Löwe", emoji: "♌", date: "23. Juli - 22. August", element: "Feuer", slug: "aslan", color: "#f97316" },
  { name: "Jungfrau", emoji: "♍", date: "23. August - 22. September", element: "Erde", slug: "basak", color: "#84cc16" },
  { name: "Waage", emoji: "♎", date: "23. September - 22. Oktober", element: "Luft", slug: "terazi", color: "#ec4899" },
  { name: "Skorpion", emoji: "♏", date: "23. Oktober - 21. November", element: "Wasser", slug: "akrep", color: "#8b5cf6" },
  { name: "Schütze", emoji: "♐", date: "22. November - 21. Dezember", element: "Feuer", slug: "yay", color: "#f43f5e" },
  { name: "Steinbock", emoji: "♑", date: "22. Dezember - 19. Januar", element: "Erde", slug: "oglak", color: "#6366f1" },
  { name: "Wassermann", emoji: "♒", date: "20. Januar - 18. Februar", element: "Luft", slug: "kova", color: "#ffffff" },
  { name: "Fische", emoji: "♓", date: "19. Februar - 20. März", element: "Wasser", slug: "balik", color: "#a855f7" },
];

const YORUM_TURLERI = [
  { title: "Tageshoroskop", desc: "Was erwartet dich heute?", href: "/burclar/gunluk", icon: "🌅" },
  { title: "Wochenhoroskop", desc: "Die kosmische Energie dieser Woche", href: "/burclar/haftalik", icon: "📅" },
  { title: "Monatshoroskop", desc: "Dein astrologischer Monatsausblick", href: "/burclar/aylik", icon: "🗓️" },
  { title: "Aszendent", desc: "Entdecke deinen Aszendenten", href: "/burclar/yukselen", icon: "⬆️" },
  { title: "Kompatibilität", desc: "Kompatibilitätsanalyse zwischen Sternzeichen", href: "/burclar/uyum", icon: "💑" },
  { title: "Geburtshoroskop", desc: "Detaillierte Deutung des Geburtshoroskops", href: "/burclar/dogum-haritasi", icon: "🌐" },
];

export default function BurclarPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
          padding: "4rem 1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          background: "url('/img/stars-bg.png') center/cover",
          opacity: 0.1,
        }} />
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 1rem",
                borderRadius: "9999px",
                marginBottom: "1rem",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffffff",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span>♈</span> Horoskope
            </div>
            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              Astrologie-Guide für 12 Sternzeichen
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Entdecke, was die Sterne dir sagen — mit täglichen, wöchentlichen und monatlichen Horoskopen
            </p>
          </div>
        </div>
      </section>

      {/* Yorum Türleri */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Horoskop-Arten
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {YORUM_TURLERI.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #7c3aed15, #a855f725)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>{item.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 12 Burç Grid */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Wähle dein Sternzeichen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
            {BURCLAR.map((burc) => (
              <Link
                key={burc.slug}
                href={`/burclar/${burc.slug}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "1.5rem 1rem",
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                  border: `2px solid transparent`,
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${burc.color}20, ${burc.color}40)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {burc.emoji}
                </div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>
                  {burc.name}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#ffffff", textAlign: "center" }}>
                  {burc.date}
                </div>
                <div
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "0.2rem 0.6rem",
                    borderRadius: "9999px",
                    background: `${burc.color}15`,
                    color: burc.color,
                  }}
                >
                  {burc.element}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Günün Burcu */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              background: "#1a0b2e",
              borderRadius: "24px",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(124,58,237,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                }}
              >
                ✨
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>Sternzeichen des Tages</h3>
                <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Wem lächeln die Sterne heute zu?</p>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #ef444420, #ef444440)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                }}
              >
                ♈
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <h4 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>Widder</h4>
                <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.6 }}>
                  Heute ist deine Energie hoch und deine Motivation auf dem Höhepunkt! Ein idealer Tag für Neuanfänge.
                  Hab keine Angst vor mutigen Schritten — die Sterne unterstützen dich.
                </p>
                <Link
                  href="/burclar/koc"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "1rem",
                    padding: "0.6rem 1.25rem",
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    color: "#ffffff",
                    borderRadius: "9999px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Mehr lesen →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
