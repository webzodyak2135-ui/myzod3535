import Link from "next/link";

export default function HakkimizdaPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✨</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
            Über uns
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            SternenFeed, dein Portal zur Welt der Astrologie und Mystik
          </p>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🌟 Unsere Mission
            </h2>
            <p style={{ fontSize: "1rem", color: "#ffffff", lineHeight: 1.8 }}>
              Als SternenFeed ist es unser Ziel, astrologisches Wissen und Mystik für alle zugänglich und verständlich zu machen.
              Von täglichen Horoskopen über Traumdeutung bis hin zu Numerologie und Planetenbewegungen bieten wir ein breites Spektrum an
              Inhalten, um dir zu helfen, kosmische Weisheit in dein Leben zu integrieren.
            </p>
          </div>

          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🔮 Was bieten wir?
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>♈</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Horoskope</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Detaillierte tägliche, wöchentliche und monatliche Horoskope</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>🌙</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Traumdeutung</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Tausende Traumsymbole und ihre Bedeutungen</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>✨</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Astrologie-Tests</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Unterhaltsame Tests zur Entdeckung deiner Persönlichkeit</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>🌌</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Kosmischer Kalender</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Planetenbewegungen und Retrograde-Phasen</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>💕</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Beziehungs-Guide</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Sternzeichen-Kompatibilität und Liebestipps</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              💫 Unsere Werte
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🎯</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>Wahrhaftigkeit</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Verlässliches astrologisches Wissen</p>
              </div>
              <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🌱</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>Entwicklung</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Kontinuierliches Lernen und Wachstum</p>
              </div>
              <div style={{ padding: "1rem", background: "#fef3c7", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>✨</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>Inspiration</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Positive Energie und Motivation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            Beginne deine kosmische Reise
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/burclar/gunluk"
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                color: "#ffffff",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              ♈ Tageshoroskope
            </Link>
            <Link
              href="/testler"
              style={{
                padding: "0.75rem 1.5rem",
                background: "#1a0b2e",
                color: "#7c3aed",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              ✨ Tests entdecken
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
