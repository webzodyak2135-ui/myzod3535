import Link from "next/link";

const AY_TUTULMA_ETKILERI = [
  { alan: "Emotionen", etki: "Intensive emotionale Schwankungen, verdrängte Gefühle kommen an die Oberfläche", icon: "💭" },
  { alan: "Beziehungen", etki: "Krisen oder Wendepunkte in Beziehungen, Wahrheiten kommen ans Licht", icon: "💔" },
  { alan: "Abschluss/Ende", etki: "Vollendung von Zyklen, Abschied, Zeit loszulassen", icon: "🚪" },
  { alan: "Bewusstsein", etki: "Plötzliche Erleuchtungen, verborgene Informationen werden offenbart", icon: "💡" },
  { alan: "Gesundheit", etki: "Aufmerksamkeit auf physische und emotionale Gesundheit", icon: "🏥" },
  { alan: "Karma", etki: "Konsequenzen vergangener Handlungen, karmische Abrechnungen", icon: "⚖️" },
];

const YAKLASAN_AY_TUTULMALARI = [
  { tarih: "1. Mai 2026", tur: "Totale Mondfinsternis", burc: "Skorpion", etki: "Tiefe Transformation, verborgene Gefühle kommen an die Oberfläche" },
  { tarih: "25. Oktober 2026", tur: "Partielle Mondfinsternis", burc: "Stier", etki: "Materielle Transformationen, Veränderung in Werten" },
  { tarih: "20. März 2027", tur: "Totale Mondfinsternis", burc: "Jungfrau", etki: "Grundlegende Transformation in Gesundheit und Ordnung" },
];

const BURC_ETKILERI = [
  { burc: "Widder", etki: "Identitätskrise, Entdeckung des neuen Selbst" },
  { burc: "Stier", etki: "Materielle Werte, Sicherheitsthemen" },
  { burc: "Zwillinge", etki: "Kommunikation, Geschwister, Kurzreisen" },
  { burc: "Krebs", etki: "Heim, Familie, emotionale Wurzeln" },
  { burc: "Löwe", etki: "Kreativität, Liebe, Kinder" },
  { burc: "Jungfrau", etki: "Gesundheit, Arbeit, tägliche Routinen" },
  { burc: "Waage", etki: "Beziehungen, Partnerschaften, Balance" },
  { burc: "Skorpion", etki: "Transformation, geteilte Ressourcen, Sexualität" },
  { burc: "Schütze", etki: "Ausland, Bildung, Philosophie" },
  { burc: "Steinbock", etki: "Karriere, Status, gesellschaftliche Position" },
  { burc: "Wassermann", etki: "Freundschaften, Gruppen, Zukunftsvision" },
  { burc: "Fische", etki: "Spiritualität, Unterbewusstsein, Isolation" },
];

export default function AyTutulmasiPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Kosmischer Kalender
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>🌑</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Mondfinsternis
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Bedeutung und emotionale Auswirkungen von Mondfinsternissen
          </p>
        </div>
      </section>

      {/* Etkiler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Auswirkungen der Mondfinsternis
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {AY_TUTULMA_ETKILERI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.alan}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{item.etki}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yaklaşan Tutulmalar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Bevorstehende Mondfinsternisse
          </h2>
          <div style={{ background: "#1a0b2e", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {YAKLASAN_AY_TUTULMALARI.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  borderBottom: i < YAKLASAN_AY_TUTULMALARI.length - 1 ? "1px solid #1a0b2e" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.tarih}</p>
                    <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>{item.tur}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "1rem", fontWeight: 600, color: "#7c3aed" }}>{item.burc} burcunda</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", marginTop: "0.75rem" }}>✨ {item.etki}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Burç Etkileri */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Mondfinsternis-Auswirkungen nach Sternzeichen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {BURC_ETKILERI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "12px",
                  padding: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#7c3aed", marginBottom: "0.25rem" }}>{item.burc}</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{item.etki}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
