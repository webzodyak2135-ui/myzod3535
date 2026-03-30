import Link from "next/link";

const TESTLER = [
  {
    title: "Sternzeichen-Test",
    desc: "Entdecke dein wahres Sternzeichen! Passt es zu deinem Geburtsdatum?",
    href: "/testler/burc",
    icon: "♈",
    color: "#a855f7",
    sorular: 12,
    sure: "3 Min."
  },
  {
    title: "Numerologie-Test",
    desc: "Berechne deine Schicksalszahl anhand deines Namens und Geburtsdatums",
    href: "/testler/numeroloji",
    icon: "🔢",
    color: "#6366f1",
    sorular: 8,
    sure: "2 Min."
  },
  {
    title: "Element-Test",
    desc: "Feuer, Wasser, Erde, Luft – zu welchem Element gehörst du?",
    href: "/testler/element",
    icon: "🔥",
    color: "#f97316",
    sorular: 15,
    sure: "4 Min."
  },
  {
    title: "Liebes-Kompatibilitätstest",
    desc: "Wie gut passen du und dein Partner zusammen?",
    href: "/testler/ask-uyumu",
    icon: "💕",
    color: "#ec4899",
    sorular: 10,
    sure: "3 Min."
  },
  {
    title: "Aszendent-Test",
    desc: "Finde deinen Aszendenten und seine Wirkung",
    href: "/testler/yukselen",
    icon: "⬆️",
    color: "#ffffff",
    sorular: 10,
    sure: "3 Min."
  },
  {
    title: "Mondzeichen-Test",
    desc: "Finde dein Mondzeichen, das deine Gefühlswelt lenkt",
    href: "/testler/ay-burcu",
    icon: "🌙",
    color: "#818cf8",
    sorular: 12,
    sure: "4 Min."
  },
  {
    title: "Persönlichkeitsarchetyp",
    desc: "Welcher von 12 Archetypen beschreibt dich am besten?",
    href: "/testler/arketip",
    icon: "🎭",
    color: "#8b5cf6",
    sorular: 20,
    sure: "5 Min."
  },
  {
    title: "Chakra-Test",
    desc: "Welche deiner 7 Chakren sind blockiert, welche aktiv?",
    href: "/testler/cakra",
    icon: "🧘",
    color: "#ffffff",
    sorular: 14,
    sure: "4 Min."
  },
];

export default function TestlerPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c084fc 100%)",
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
            <span>✨</span> Astrologie-Tests
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
            Bereit, dich selbst zu entdecken?
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto" }}>
            Entdecke mit unterhaltsamen und aufschlussreichen Tests deine Persönlichkeit, dein Sternzeichen und deine kosmische Energie
          </p>
        </div>
      </section>

      {/* Testler Grid */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {TESTLER.map((test) => (
              <Link
                key={test.href}
                href={test.href}
                style={{
                  display: "block",
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${test.color}20, ${test.color}40)`,
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: "#1a0b2e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {test.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>{test.title}</h3>
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
                      <span style={{ fontSize: "0.8rem", color: "#ffffff" }}>📝 {test.sorular} Fragen</span>
                      <span style={{ fontSize: "0.8rem", color: "#ffffff" }}>⏱️ {test.sure}</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.6, marginBottom: "1rem" }}>
                    {test.desc}
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.25rem",
                      background: `${test.color}15`,
                      color: test.color,
                      borderRadius: "9999px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    Test starten →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #1e1b4b, #312e81)",
              borderRadius: "24px",
              padding: "3rem 2rem",
              color: "#ffffff",
            }}
          >
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "1rem" }}>
              🌟 Hast du dein Tageshoroskop schon gelesen?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginBottom: "1.5rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
              Nachdem du dich mit Tests entdeckt hast, lies auch dein Tageshoroskop!
            </p>
            <Link
              href="/burclar/gunluk"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                color: "#ffffff",
                borderRadius: "9999px",
                fontSize: "1rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              ♈ Tageshoroskop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
