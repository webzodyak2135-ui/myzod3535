import Link from "next/link";

const AY_FAZLARI = [
  { faz: "Neumond", emoji: "🌑", tarih: "Monatsbeginn", anlam: "Neue Anfänge, Absichten setzen, Samen säen", aktivite: "Setze Absichten, starte neue Projekte" },
  { faz: "Zunehmende Sichel", emoji: "🌒", tarih: "3-4 Tage nach Neumond", anlam: "Wachstum, Fortschritt, Momentum gewinnen", aktivite: "Setze Pläne um, handle" },
  { faz: "Erstes Viertel", emoji: "🌓", tarih: "7 Tage nach Neumond", anlam: "Entscheidungszeit, Hindernisse überwinden, Entschlossenheit", aktivite: "Löse Herausforderungen, sei entschlossen" },
  { faz: "Zunehmender Mond", emoji: "🌔", tarih: "3-4 Tage vor Vollmond", anlam: "Reifung, Geduld, letzte Vorbereitungen", aktivite: "Schließe Details ab, sei geduldig" },
  { faz: "Vollmond", emoji: "🌕", tarih: "Monatsmitte", anlam: "Höhepunkt, Ernte, Erleuchtung, emotionale Intensität", aktivite: "Siehe Ergebnisse, feiere, lass los" },
  { faz: "Abnehmender Mond", emoji: "🌖", tarih: "3-4 Tage nach Vollmond", anlam: "Teilen, Lehren, Dankbarkeit", aktivite: "Teile Gelerntes" },
  { faz: "Letztes Viertel", emoji: "🌗", tarih: "7 Tage nach Vollmond", anlam: "Loslassen, Reinigung, Bewertung", aktivite: "Lass Unnötiges los, reinige" },
  { faz: "Abnehmende Sichel", emoji: "🌘", tarih: "3-4 Tage vor Neumond", anlam: "Ruhe, Innenschau, Vorbereitung", aktivite: "Ruhe dich aus, meditiere" },
];

const YAKLASAN_AYLAR = [
  { tarih: "1. April 2026", tip: "Vollmond", burc: "Waage", ozellik: "-" },
  { tarih: "17. April 2026", tip: "Neumond", burc: "Widder", ozellik: "-" },
  { tarih: "1. Mai 2026", tip: "Vollmond", burc: "Skorpion", ozellik: "Mondfinsternis" },
  { tarih: "16. Mai 2026", tip: "Neumond", burc: "Stier", ozellik: "Sonnenfinsternis" },
  { tarih: "31. Mai 2026", tip: "Vollmond", burc: "Schütze", ozellik: "-" },
  { tarih: "14. Juni 2026", tip: "Neumond", burc: "Zwillinge", ozellik: "-" },
  { tarih: "30. Juni 2026", tip: "Vollmond", burc: "Steinbock", ozellik: "-" },
  { tarih: "13. Juli 2026", tip: "Neumond", burc: "Krebs", ozellik: "-" },
];

export default function AyTakvimiPage() {
  return (
    <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Kosmischer Kalender
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>🌕</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Mondkalender
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Neumond- und Vollmonddaten - Der kosmische Rhythmus des Mondes
          </p>
        </div>
      </section>

      {/* Ay Fazları */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Mondphasen und ihre Bedeutungen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {AY_FAZLARI.map((faz, i) => (
              <div
                key={i}
                style={{
                  background: "transparent",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(168,85,247,0.2)",
                  border: "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2.5rem" }}>{faz.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{faz.faz}</h3>
                    <p style={{ fontSize: "0.8rem", color: "#e0d4ff" }}>{faz.tarih}</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#e0d4ff", marginBottom: "0.75rem", lineHeight: 1.6 }}>{faz.anlam}</p>
                <div style={{ padding: "0.5rem 0.75rem", background: "#eef2ff", borderRadius: "8px" }}>
                  <p style={{ fontSize: "0.8rem", color: "#4338ca" }}>✨ {faz.aktivite}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yaklaşan Aylar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Yaklaşan Yeni Ay ve Dolunaylar
          </h2>
          <div style={{ background: "transparent", borderRadius: "20px", overflow: "hidden", boxShadow: "none", border: "none" }}>
            {YAKLASAN_AYLAR.map((ay, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  borderBottom: "none",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{ay.tip === "Dolunay" ? "🌕" : "🌑"}</span>
                  <div>
                    <p style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>{ay.tarih}</p>
                    <p style={{ fontSize: "0.85rem", color: "#e0d4ff" }}>{ay.tip} - {ay.burc} burcunda</p>
                  </div>
                </div>
                {ay.ozellik !== "-" && (
                  <span style={{ padding: "0.25rem 0.75rem", background: "#fef3c7", color: "#92400e", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600 }}>
                    {ay.ozellik}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #1e1b4b15, #4338ca15)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🌙 Ay Enerjisiyle Çalışmak
            </h2>
            <p style={{ color: "#e0d4ff", lineHeight: 1.8 }}>
              Ay&apos;ın fazları, doğanın ve yaşamın döngüsel ritmini yansıtır. Yeni ay&apos;da niyet koyarak,
              dolunay&apos;da hasat yaparak bu kozmik ritimle uyum içinde yaşayabilirsiniz.
              Her ay fazının kendine özgü enerjisi vardır ve bu enerjiyi bilinçli kullanmak
              hayatınıza akış ve denge getirir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
