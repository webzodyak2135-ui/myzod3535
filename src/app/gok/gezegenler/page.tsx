import Link from "next/link";

const GEZEGENLER = [
  { gezegen: "Sonne", emoji: "☀️", sure: "1 Monat", etki: "Identität, Ego, Lebenskraft, Führung", gecis: "Wechselt jeden Monat das Sternzeichen" },
  { gezegen: "Mond", emoji: "🌙", sure: "2,5 Tage", etki: "Emotionen, Instinkte, Heim, Mutter", gecis: "Wechselt alle 2,5 Tage das Sternzeichen" },
  { gezegen: "Merkur", emoji: "☿️", sure: "3-4 Wochen", etki: "Kommunikation, Denken, Reisen, Handel", gecis: "Wird 3-4 Mal pro Jahr rückläufig" },
  { gezegen: "Venus", emoji: "♀️", sure: "4-5 Wochen", etki: "Liebe, Schönheit, Geld, Werte", gecis: "Wird alle 18 Monate rückläufig" },
  { gezegen: "Mars", emoji: "♂️", sure: "6-7 Wochen", etki: "Energie, Leidenschaft, Konflikt, Sexualität", gecis: "Wird alle 2 Jahre rückläufig" },
  { gezegen: "Jupiter", emoji: "♃", sure: "1 Jahr", etki: "Glück, Expansion, Philosophie, Ausland", gecis: "Wechselt jedes Jahr das Sternzeichen" },
  { gezegen: "Saturn", emoji: "♄", sure: "2,5 Jahre", etki: "Disziplin, Verantwortung, Grenzen, Karma", gecis: "Wechselt alle 2,5 Jahre das Sternzeichen" },
  { gezegen: "Uranus", emoji: "⛢", sure: "7 Jahre", etki: "Revolution, Freiheit, Technologie, Überraschung", gecis: "Generationsplanet, langfristige Wirkung" },
  { gezegen: "Neptun", emoji: "♆", sure: "14 Jahre", etki: "Träume, Spiritualität, Illusion, Kunst", gecis: "Generationsplanet, kollektive Wirkung" },
  { gezegen: "Pluto", emoji: "♇", sure: "12-31 Jahre", etki: "Transformation, Macht, Wiedergeburt, Verborgenes", gecis: "Am langsamsten, tiefste Transformation" },
];

const GUNCEL_KONUMLAR = [
  { gezegen: "Sonne", burc: "Widder", tarih: "20. März - 19. April 2026" },
  { gezegen: "Merkur", burc: "Widder", tarih: "Direkt, starke Kommunikationsenergie" },
  { gezegen: "Venus", burc: "Stier", tarih: "Bis Juni 2026" },
  { gezegen: "Mars", burc: "Krebs", tarih: "Emotionale Motivation" },
  { gezegen: "Jupiter", burc: "Krebs", tarih: "Bis Juni 2026" },
  { gezegen: "Saturn", burc: "Widder", tarih: "Bis 2028" },
];

export default function GezegenlerPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #ffffff 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Kosmischer Kalender
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>🪐</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Planetenübergänge
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Einflussreiche Bewegungen und Sternzeichenwechsel der Planeten
          </p>
        </div>
      </section>

      {/* Güncel Konumlar */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Aktuelle Planetenpositionen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {GUNCEL_KONUMLAR.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>{item.gezegen}</h3>
                <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#6366f1", marginBottom: "0.25rem" }}>{item.burc}</p>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>{item.tarih}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gezegenler */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Planeten-Guide
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {GEZEGENLER.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.gezegen}</h3>
                    <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Verweildauer im Zeichen: {item.sure}</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                  <strong>Einfluss:</strong> {item.etki}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{item.gecis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
