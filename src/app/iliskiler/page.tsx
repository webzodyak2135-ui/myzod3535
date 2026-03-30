import Link from "next/link";

const ILISKI_KATEGORILERI = [
  {
    title: "Sternzeichen-Kompatibilität",
    desc: "Entdecke die Harmonie zwischen zwei Sternzeichen",
    href: "/iliskiler/burc-uyumu",
    icon: "💑",
    color: "#ec4899"
  },
  {
    title: "Paar-Kompatibilität",
    desc: "Detaillierte Analyse für dich und deinen Partner",
    href: "/iliskiler/cift-uyumu",
    icon: "👫",
    color: "#f43f5e"
  },
  {
    title: "Ehe-Tipps",
    desc: "Was sagen die Sterne zur Ehe?",
    href: "/iliskiler/evlilik",
    icon: "💍",
    color: "#a855f7"
  },
  {
    title: "Trennungsratgeber",
    desc: "Heilung und Neustart nach der Trennung",
    href: "/iliskiler/ayrilik",
    icon: "🌱",
    color: "#ffffff"
  },
  {
    title: "Flirt-Tipps",
    desc: "Flirt-Ratschläge nach Sternzeichen",
    href: "/iliskiler/flort",
    icon: "😊",
    color: "#f97316"
  },
  {
    title: "Seelenverwandtschaft",
    desc: "Wie du deine Seelenverbindung erkennst",
    href: "/iliskiler/soulmate",
    icon: "✨",
    color: "#6366f1"
  },
];

const BURC_UYUMLARI = [
  { burc1: "Widder", burc2: "Löwe", uyum: 95, emoji1: "♈", emoji2: "♌" },
  { burc1: "Stier", burc2: "Jungfrau", uyum: 90, emoji1: "♉", emoji2: "♍" },
  { burc1: "Zwillinge", burc2: "Waage", uyum: 88, emoji1: "♊", emoji2: "♎" },
  { burc1: "Krebs", burc2: "Skorpion", uyum: 92, emoji1: "♋", emoji2: "♏" },
  { burc1: "Löwe", burc2: "Schütze", uyum: 93, emoji1: "♌", emoji2: "♐" },
  { burc1: "Fische", burc2: "Krebs", uyum: 91, emoji1: "♓", emoji2: "♋" },
];

export default function IliskilerPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb7185 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
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
              background: "rgba(255,255,255,0.2)",
            }}
          >
            <span>💕</span> Beziehungen & Kompatibilität
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
            Sternen-Guide für die Liebe
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "0 auto" }}>
            Sternzeichen-Kompatibilität, Beziehungsanalysen und astrologische Liebestipps
          </p>
        </div>
      </section>

      {/* Kategoriler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Beziehungs-Guides
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {ILISKI_KATEGORILERI.map((item) => (
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
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff" }}>{item.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Uyum Hesaplama */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              background: "#1a0b2e",
              borderRadius: "24px",
              padding: "2rem",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", textAlign: "center" }}>
              💕 Kompatibilität berechnen
            </h2>
            <p style={{ textAlign: "center", color: "#ffffff", marginBottom: "1.5rem" }}>
              Wähle zwei Sternzeichen und sieh eure Kompatibilität
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
              <select
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  border: "2px solid #ec489930",
                  background: "#1a0b2e",
                  fontSize: "1rem",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <option>Dein Sternzeichen</option>
                <option>♈ Widder</option>
                <option>♉ Stier</option>
                <option>♊ Zwillinge</option>
                <option>♋ Krebs</option>
                <option>♌ Löwe</option>
                <option>♍ Jungfrau</option>
                <option>♎ Waage</option>
                <option>♏ Skorpion</option>
                <option>♐ Schütze</option>
                <option>♑ Steinbock</option>
                <option>♒ Wassermann</option>
                <option>♓ Fische</option>
              </select>
              <span style={{ fontSize: "1.5rem" }}>❤️</span>
              <select
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "12px",
                  border: "2px solid #ec489930",
                  background: "#1a0b2e",
                  fontSize: "1rem",
                  color: "#ffffff",
                  cursor: "pointer",
                }}
              >
                <option>Sternzeichen deines Partners</option>
                <option>♈ Widder</option>
                <option>♉ Stier</option>
                <option>♊ Zwillinge</option>
                <option>♋ Krebs</option>
                <option>♌ Löwe</option>
                <option>♍ Jungfrau</option>
                <option>♎ Waage</option>
                <option>♏ Skorpion</option>
                <option>♐ Schütze</option>
                <option>♑ Steinbock</option>
                <option>♒ Wassermann</option>
                <option>♓ Fische</option>
              </select>
              <button
                style={{
                  padding: "0.75rem 2rem",
                  background: "linear-gradient(135deg, #ec4899, #f43f5e)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Berechnen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* En Uyumlu Çiftler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            🔥 Die kompatibelsten Sternzeichen-Paare
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {BURC_UYUMLARI.map((cift, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.75rem" }}>{cift.emoji1}</span>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ffffff" }}>{cift.burc1}</span>
                  </div>
                  <span style={{ fontSize: "1.25rem" }}>❤️</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ffffff" }}>{cift.burc2}</span>
                    <span style={{ fontSize: "1.75rem" }}>{cift.emoji2}</span>
                  </div>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#ffffff" }}>Kompatibilität</span>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#ec4899" }}>{cift.uyum}%</span>
                  </div>
                  <div style={{ height: "8px", background: "#1a0b2e", borderRadius: "4px", overflow: "hidden" }}>
                    <div
                      style={{
                        width: `${cift.uyum}%`,
                        height: "100%",
                        background: "linear-gradient(90deg, #ec4899, #f43f5e)",
                        borderRadius: "4px",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aşk Tavsiyeleri */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #1e1b4b, #312e81)",
              borderRadius: "24px",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              💫 Dein Liebeshoroskop für heute
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem" }}>
              Was passiert heute in deinem Liebesleben? Romantische Prognosen nach Sternzeichen
            </p>
            <Link
              href="/burclar/gunluk"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #ec4899, #f43f5e)",
                color: "#ffffff",
                borderRadius: "9999px",
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Tageshoroskop lesen →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
