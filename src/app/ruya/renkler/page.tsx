import Link from "next/link";

const RENKLER = [
  { renk: "Weiß", anlam: "Reinheit, Unschuld, Neuanfang, spirituelle Reinigung", hex: "#1a0b2e", textColor: "#ffffff" },
  { renk: "Schwarz", anlam: "Das Unbekannte, Mysterium, Unterbewusstsein, Transformation", hex: "#ffffff", textColor: "#ffffff" },
  { renk: "Rot", anlam: "Leidenschaft, Energie, Wut, Kraft, Gefahr", hex: "#ef4444", textColor: "#ffffff" },
  { renk: "Blau", anlam: "Frieden, Kommunikation, Loyalität, Melancholie", hex: "#3b82f6", textColor: "#ffffff" },
  { renk: "Grün", anlam: "Natur, Heilung, Wachstum, Hoffnung, Eifersucht", hex: "#22c55e", textColor: "#ffffff" },
  { renk: "Gelb", anlam: "Glück, Intelligenz, Warnung, Erleuchtung", hex: "#eab308", textColor: "#ffffff" },
  { renk: "Orange", anlam: "Kreativität, Begeisterung, Wärme, Abenteuer", hex: "#f97316", textColor: "#ffffff" },
  { renk: "Lila", anlam: "Spiritualität, Luxus, Mysterium, Transformation", hex: "#a855f7", textColor: "#ffffff" },
  { renk: "Rosa", anlam: "Liebe, Mitgefühl, feminine Energie, Romantik", hex: "#ec4899", textColor: "#ffffff" },
  { renk: "Braun", anlam: "Erdung, Stabilität, Sicherheit, Natur", hex: "#92400e", textColor: "#ffffff" },
  { renk: "Grau", anlam: "Neutralität, Unsicherheit, Balance, Reife", hex: "#6b7280", textColor: "#ffffff" },
  { renk: "Gold", anlam: "Reichtum, Erfolg, Weisheit, göttliche Energie", hex: "#d4af37", textColor: "#ffffff" },
];

const RENK_KOMBINASYONLARI = [
  { kombinasyon: "Schwarz & Weiß", anlam: "Dualität, Balance, Einheit der Gegensätze, Yin-Yang" },
  { kombinasyon: "Rot & Schwarz", anlam: "Kraft, Leidenschaft, geheime Wünsche, intensive Emotionen" },
  { kombinasyon: "Blau & Grün", anlam: "Harmonie mit der Natur, Frieden, Heilenergie" },
  { kombinasyon: "Gold & Lila", anlam: "Spiritueller Reichtum, höheres Bewusstsein, Luxus" },
];

export default function RenkSembolleriPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #f43f5e 0%, #ec4899 25%, #a855f7 50%, #6366f1 75%, #3b82f6 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/ruya-tabirleri" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Traumdeutung
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>🎨</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Farbsymbole
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Die Sprache der Farben im Traum - die Bedeutung jeder Farbe
          </p>
        </div>
      </section>

      {/* Renkler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Bedeutungen der Farben
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {RENKLER.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    background: item.hex,
                    padding: "1.5rem",
                    color: item.textColor,
                  }}
                >
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{item.renk}</h3>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{item.anlam}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kombinasyonlar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Renk Kombinasyonları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {RENK_KOMBINASYONLARI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>{item.kombinasyon}</h3>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{item.anlam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "transparent", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🎨 Rüyalarda Renkleri Yorumlamak
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Rüyalardaki renkler, duygusal durumunuzu ve bilinçaltı mesajlarını güçlü bir şekilde iletir.
              Canlı renkler genellikle yoğun duyguları, soluk renkler ise bastırılmış veya zayıflamış
              duyguları temsil eder.
            </p>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Rüyanızda öne çıkan rengi hatırlamaya çalışın. O rengin size ne hissettirdiği,
              genel anlamından daha önemli olabilir. Kişisel çağrışımlarınız evrensel anlamlardan
              önce gelir.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
