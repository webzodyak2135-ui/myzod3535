import Link from "next/link";

const HABERLER = [
  {
    tarih: "20. März 2026",
    baslik: "Die Sonne wechselt in den Widder — Astrologisches Neujahr",
    ozet: "Die Sonne betritt den Widder! Mit dem Beginn eines neuen astrologischen Jahres steigt die Energie. Eine perfekte Zeit für Mut, Entschlossenheit und Neubegìnne.",
    kategori: "Sternzeichen-Übergang",
    icon: "☀️"
  },
  {
    tarih: "25. März 2026",
    baslik: "Merkur im Widder - Starke Kommunikationsphase",
    ozet: "Merkur im Widder unterstützt mutige und direkte Kommunikation. Eine günstige Zeit für wichtige Gespräche, Verhandlungen und kreative Ideen.",
    kategori: "Planet",
    icon: "☿️"
  },
  {
    tarih: "1. April 2026",
    baslik: "Waage-Vollmond — Balance in Beziehungen",
    ozet: "Dieser Vollmond in der Waage bringt Themen wie Balance und Gerechtigkeit in allen Beziehungen in den Vordergrund. Partnerschaften, Vereinbarungen und gegenseitiges Verständnis gewinnen an Bedeutung.",
    kategori: "Vollmond",
    icon: "🌕"
  },
  {
    tarih: "17. April 2026",
    baslik: "Widder-Neumond — Kraftvolle Anfänge",
    ozet: "Der Neumond im Widder bietet eine fantastische Energie, um mutige Schritte zu wagen und lange aufgeschobene Projekte zu starten.",
    kategori: "Neumond",
    icon: "🌑"
  },
  {
    tarih: "1. Mai 2026",
    baslik: "Totale Mondfinsternis — im Skorpion",
    ozet: "Diese kraftvolle Mondfinsternis im Skorpion wird tiefe Transformationen auslösen. Verborgene Wahrheiten kommen ans Licht, alte Zyklen schließen sich.",
    kategori: "Finsternis",
    icon: "🌑"
  },
  {
    tarih: "16. Mai 2026",
    baslik: "Ringförmige Sonnenfinsternis — im Stier",
    ozet: "Diese besondere Sonnenfinsternis im Stier öffnet ein kraftvolles Portal für grundlegende Transformationen in materiellen Angelegenheiten, Sicherheit und Werten.",
    kategori: "Finsternis",
    icon: "🌗"
  },
];

const ONEMLI_TARIHLER = [
  { tarih: "1. Mai 2026", olay: "Totale Mondfinsternis — Skorpion", onem: "Sehr wichtig" },
  { tarih: "16. Mai 2026", olay: "Ringförmige Sonnenfinsternis — Stier", onem: "Sehr wichtig" },
  { tarih: "14. Juli 2026", olay: "Saturn wird rückläufig", onem: "Wichtig" },
  { tarih: "18. Juli 2026", olay: "Merkur wird rückläufig", onem: "Wichtig" },
  { tarih: "11. November 2026", olay: "Totale Sonnenfinsternis — Skorpion", onem: "Sehr wichtig" },
];

export default function KozmikHaberlerPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #14b8a6 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Kosmischer Kalender
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>📡</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Kosmische Nachrichten
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Neueste kosmische Entwicklungen und astrologische Agenda
          </p>
        </div>
      </section>

      {/* Önemli Tarihler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            📅 Bevorstehende wichtige Daten
          </h2>
          <div style={{ background: "#1a0b2e", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {ONEMLI_TARIHLER.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  borderBottom: i < ONEMLI_TARIHLER.length - 1 ? "1px solid #1a0b2e" : "none",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ffffff" }}>{item.tarih}</p>
                  <p style={{ fontSize: "1rem", color: "#ffffff" }}>{item.olay}</p>
                </div>
                <span
                  style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    background: item.onem === "Sehr wichtig" ? "#1a0b2e" : item.onem === "Wichtig" ? "#fef3c7" : "#e0f2fe",
                    color: item.onem === "Sehr wichtig" ? "#991b1b" : item.onem === "Wichtig" ? "#92400e" : "#0369a1",
                  }}
                >
                  {item.onem}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Haberler */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Neueste kosmische Entwicklungen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {HABERLER.map((haber, i) => (
              <article
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.8rem", color: "#ffffff" }}>{haber.tarih}</span>
                    <span
                      style={{
                        padding: "0.2rem 0.6rem",
                        background: "#e0f2fe",
                        color: "#ffffff",
                        borderRadius: "9999px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                      }}
                    >
                      {haber.kategori}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ fontSize: "2rem" }}>{haber.icon}</span>
                    <div>
                      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>{haber.baslik}</h3>
                      <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{haber.ozet}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #0ea5e915, #14b8a615)", borderRadius: "24px", padding: "2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🔔 Bleib auf dem Laufenden über kosmische Updates
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
              Folge unserer Seite regelmäßig für aktuelle Informationen über wichtige
              Planetenübergänge, Finsternisse und astrologische Ereignisse.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
