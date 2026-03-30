import Link from "next/link";

const RUYA_KATEGORILERI = [
  { title: "Traumlexikon", desc: "Alle Traumsymbole von A bis Z", href: "/ruya/sozluk", icon: "📖", color: "#818cf8" },
  { title: "Wasserträume", desc: "Träume von Meer, Fluss und Regen", href: "/ruya/su", icon: "💧", color: "#3b82f6" },
  { title: "Flugträume", desc: "Die Bedeutung des Fliegens im Traum", href: "/ruya/ucma", icon: "🦋", color: "#8b5cf6" },
  { title: "Liebesträume", desc: "Deutung romantischer Träume", href: "/ruya/ask", icon: "❤️", color: "#ec4899" },
  { title: "Albträume", desc: "Die Bedeutung erschreckender Träume", href: "/ruya/kabus", icon: "�️", color: "#ffffff" },
  { title: "Farbsymbole", desc: "Die Sprache der Farben im Traum", href: "/ruya/renkler", icon: "�", color: "#f97316" },
];

const POPULER_RUYALAR = [
  { title: "Eine Schlange sehen", meaning: "Schutz vor Feinden, verborgene Gefahren", icon: "🐍" },
  { title: "Zähne fallen aus", meaning: "Neuigkeiten zur Familie, Veränderung", icon: "🦷" },
  { title: "Fallen", meaning: "Kontrollverlust, Gefühl der Unsicherheit", icon: "⬇️" },
  { title: "Verfolgt werden", meaning: "Vermeidete Probleme, Stress", icon: "🏃" },
  { title: "Fliegen", meaning: "Freiheit, Erfolg, Aufstieg", icon: "✈️" },
  { title: "Wasser sehen", meaning: "Gefühlslage, Unterbewusstsein", icon: "🌊" },
  { title: "Ein Baby sehen", meaning: "Neubeginn, Unschuld", icon: "👶" },
  { title: "Ein Haus sehen", meaning: "Innere Welt, Familie, Sicherheit", icon: "🏠" },
];

export default function RuyaTabirleriPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #ffffff 50%, #ffffff 100%)",
          padding: "4rem 1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 30% 50%, rgba(129,140,248,0.15) 0%, transparent 50%)",
        }} />
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center" }}>
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
                background: "rgba(129,140,248,0.3)",
              }}
            >
              <span>🌙</span> Traumdeutung
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
              Entdecke die verborgene Bedeutung deiner Träume
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
              Tausende Traumsymbole und Bedeutungen. Entschlüssele die Botschaften deiner Träume und höre auf dein Unterbewusstsein.
            </p>
          </div>
        </div>
      </section>

      {/* Arama */}
      <section style={{ padding: "2rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem 1.5rem",
            background: "#1a0b2e",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <span style={{ fontSize: "1.5rem" }}>🔍</span>
            <input
              type="text"
              placeholder="Was hast du geträumt? (z.B. Schlange, Wasser, Fliegen...)"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "1rem",
                color: "#ffffff",
                background: "transparent",
              }}
            />
            <button
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #818cf8, #6366f1)",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Suchen
            </button>
          </div>
        </div>
      </section>

      {/* Kategoriler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Traumkategorien
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {RUYA_KATEGORILERI.map((item) => (
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
                  border: `2px solid transparent`,
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

      {/* Popüler Rüyalar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Am häufigsten gesuchte Träume
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {POPULER_RUYALAR.map((ruya, i) => (
              <Link
                key={i}
                href={`/ruya/${ruya.title.toLowerCase().replace(/ /g, '-')}`}
                style={{
                  padding: "1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{ruya.icon}</span>
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>{ruya.title}</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{ruya.meaning}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rüya Yorumu Nasıl Yapılır */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #818cf815, #6366f115)",
            borderRadius: "24px",
            padding: "2rem",
          }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", textAlign: "center" }}>
              🌟 Wie deutet man Träume?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📝</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>1. Traum notieren</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Direkt nach dem Aufwachen aufschreiben</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔍</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>2. Symbole finden</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Wichtige Symbole herausfiltern</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💭</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>3. Gefühle erinnern</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Welche Emotionen waren präsent?</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✨</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>4. Deuten</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Mit deinem Leben verknüpfen</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
