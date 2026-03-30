import Link from "next/link";

const RUYA_SOZLUGU = [
  {
    harf: "A", kelimeler: [
      { kelime: "Auto", aciklama: "Lebensweg und Kontrolle über dein Schicksal" },
      { kelime: "Pferd", aciklama: "Stärke, Freiheit und sexuelle Energie" },
      { kelime: "Spiegel", aciklama: "Selbstreflexion und innere Wahrheit" },
      { kelime: "Baum", aciklama: "Wachstum, Wurzeln und Lebensstabilität" },
      { kelime: "Gold", aciklama: "Wert, Erfolg und spiritueller Reichtum" },
      { kelime: "Mutter", aciklama: "Nährung, Schutz und emotionale Unterstützung" },
      { kelime: "Liebe", aciklama: "Emotionale Erfüllung und Herzenswünsche" },
      { kelime: "Mond", aciklama: "Weibliche Energie und Unterbewusstsein" }
    ]
  },
  {
    harf: "B", kelimeler: [
      { kelime: "Baby", aciklama: "Neubeginn, Unschuld und neue Projekte" },
      { kelime: "Fisch", aciklama: "Unterbewusste Gefühle und Intuition" },
      { kelime: "Garten", aciklama: "Persönliches Wachstum und Pflege" },
      { kelime: "Messer", aciklama: "Trennung, Konflikt oder Entscheidung" },
      { kelime: "Insekt", aciklama: "Kleine Störungen oder Ängste" },
      { kelime: "Wolke", aciklama: "Unklarheit oder spirituelle Höhe" },
      { kelime: "Vater", aciklama: "Autorität, Schutz und Führung" }
    ]
  },
  { harf: "C", kelimeler: [] },
  {
    harf: "D", kelimeler: [
      { kelime: "Blume", aciklama: "Schönheit, Wachstum und Romantik" },
      { kelime: "Kind", aciklama: "Inneres Kind und Unschuld" },
      { kelime: "Schlamm", aciklama: "Festgefahrene Situation oder Unreinheit" },
      { kelime: "Nackt", aciklama: "Verletzlichkeit und Authentizität" }
    ]
  },
  {
    harf: "E", kelimeler: [
      { kelime: "Meer", aciklama: "Emotionale Tiefe und Unbewusstes" },
      { kelime: "Berg", aciklama: "Herausforderungen und Ziele" },
      { kelime: "Zahn", aciklama: "Selbstvertrauen und Kommunikation" },
      { kelime: "Hochzeit", aciklama: "Vereinigung und neue Verpflichtungen" },
      { kelime: "Fallen", aciklama: "Kontrollverlust und Ängste" },
      { kelime: "Kamel", aciklama: "Ausdauer und Geduld" }
    ]
  },
  {
    harf: "F", kelimeler: [
      { kelime: "Haus", aciklama: "Selbst, Sicherheit und Familie" },
      { kelime: "Brot", aciklama: "Grundbedürfnisse und Nährung" },
      { kelime: "Hand", aciklama: "Handlungsfähigkeit und Kontrolle" },
      { kelime: "Ex-Partner", aciklama: "Unverarbeitete Gefühle" },
      { kelime: "Kleid", aciklama: "Identität und Selbstdarstellung" }
    ]
  },
  {
    harf: "G", kelimeler: [
      { kelime: "Maus", aciklama: "Kleine Probleme oder Schüchternheit" },
      { kelime: "Sturm", aciklama: "Emotionale Turbulenzen" },
      { kelime: "Fußball", aciklama: "Teamarbeit und Wettbewerb" }
    ]
  },
  {
    harf: "H", kelimeler: [
      { kelime: "Schiff", aciklama: "Lebensreise und emotionale Navigation" },
      { kelime: "See", aciklama: "Innere Ruhe oder verborgene Tiefen" },
      { kelime: "Rose", aciklama: "Liebe, Schönheit und Leidenschaft" },
      { kelime: "Sonne", aciklama: "Lebenskraft und Bewusstsein" },
      { kelime: "Nacht", aciklama: "Unbewusstes und Geheimnisse" }
    ]
  },
  {
    harf: "I", kelimeler: [
      { kelime: "Schwanger", aciklama: "Neue Ideen oder Projekte" },
      { kelime: "Krankenhaus", aciklama: "Heilung und Transformation" },
      { kelime: "Tier", aciklama: "Instinkte und natürliche Impulse" },
      { kelime: "Dieb", aciklama: "Verlust oder Vertrauensbruch" }
    ]
  },
  {
    harf: "K", kelimeler: [
      { kelime: "Licht", aciklama: "Erleuchtung und Klarheit" },
      { kelime: "Fluss", aciklama: "Lebensfluss und Veränderung" },
      { kelime: "Kuh", aciklama: "Fülle und Mütterlichkeit" },
      { kelime: "Nadel", aciklama: "Heilung oder kleine Schmerzen" }
    ]
  },
  {
    harf: "L", kelimeler: [
      { kelime: "Blut", aciklama: "Lebenskraft und Opfer" },
      { kelime: "Tür", aciklama: "Möglichkeiten und Übergänge" },
      { kelime: "Katze", aciklama: "Unabhängigkeit und Weiblichkeit" },
      { kelime: "Hund", aciklama: "Treue und Freundschaft" },
      { kelime: "Vogel", aciklama: "Freiheit und Spiritualität" },
      { kelime: "Verfolgt werden", aciklama: "Vermeidung und Ängste" }
    ]
  },
  {
    harf: "M", kelimeler: [
      { kelime: "Lampe", aciklama: "Erleuchtung und Hoffnung" },
      { kelime: "Labyrinth", aciklama: "Verwirrung und Suche" }
    ]
  },
  {
    harf: "N", kelimeler: [
      { kelime: "Treppe", aciklama: "Fortschritt und Entwicklung" },
      { kelime: "Grab", aciklama: "Ende und Transformation" },
      { kelime: "Engel", aciklama: "Schutz und spirituelle Führung" },
      { kelime: "Kerze", aciklama: "Hoffnung und Erleuchtung" }
    ]
  },
  { harf: "O", kelimeler: [] },
  {
    harf: "P", kelimeler: [
      { kelime: "Schule", aciklama: "Lernen und Lebenslektionen" },
      { kelime: "Wald", aciklama: "Unbewusstes und Geheimnisse" },
      { kelime: "Bus", aciklama: "Gemeinsame Reise und Richtung" }
    ]
  },
  { harf: "Q", kelimeler: [] },
  {
    harf: "R", kelimeler: [
      { kelime: "Geld", aciklama: "Wert und Selbstwert" },
      { kelime: "Polizei", aciklama: "Autorität und Regeln" },
      { kelime: "Fenster", aciklama: "Perspektive und Möglichkeiten" }
    ]
  },
  {
    harf: "S", kelimeler: [
      { kelime: "Wind", aciklama: "Veränderung und Kommunikation" },
      { kelime: "Bild", aciklama: "Erinnerungen und Selbstbild" },
      { kelime: "Tod", aciklama: "Ende und Neuanfang" },
      { kelime: "Toter", aciklama: "Vergangenheit und Transformation" },
      { kelime: "Kuss", aciklama: "Zuneigung und Verbindung" }
    ]
  },
  {
    harf: "T", kelimeler: [
      { kelime: "Wasser", aciklama: "Emotionen und Unterbewusstsein" },
      { kelime: "Haar", aciklama: "Stärke und Identität" },
      { kelime: "Waffe", aciklama: "Aggression oder Verteidigung" },
      { kelime: "Gelb", aciklama: "Freude und Intellekt" },
      { kelime: "Schwarz", aciklama: "Geheimnis und Unbewusstes" }
    ]
  },
  { harf: "U", kelimeler: [] },
  {
    harf: "V", kelimeler: [
      { kelime: "Zug", aciklama: "Lebensreise und Schicksal" },
      { kelime: "Huhn", aciklama: "Fruchtbarkeit und Angst" },
      { kelime: "Erde", aciklama: "Stabilität und Grundlage" }
    ]
  },
  {
    harf: "W", kelimeler: [
      { kelime: "Flugzeug", aciklama: "Hohe Ziele und Ambitionen" },
      { kelime: "Fliegen", aciklama: "Freiheit und Transzendenz" },
      { kelime: "Schlafen", aciklama: "Ruhe und Vermeidung" }
    ]
  },
  { harf: "X", kelimeler: [] },
  { harf: "Y", kelimeler: [] },
  {
    harf: "Z", kelimeler: [
      { kelime: "Schlange", aciklama: "Transformation und verborgene Feinde" },
      { kelime: "Regen", aciklama: "Reinigung und emotionale Befreiung" },
      { kelime: "Feuer", aciklama: "Leidenschaft und Zerstörung" },
      { kelime: "Weg", aciklama: "Lebensrichtung und Entscheidungen" },
      { kelime: "Schwimmen", aciklama: "Emotionale Bewältigung" },
      { kelime: "Zucker", aciklama: "Süße und Vergnügen" },
      { kelime: "Teufel", aciklama: "Versuchung und Schatten" },
      { kelime: "Traube", aciklama: "Fülle und Genuss" },
      { kelime: "Dampfer", aciklama: "Emotionale Reise" },
      { kelime: "Abschied", aciklama: "Ende und Loslassen" }
    ]
  }
];

export default function RuyaSozlukPage() {
  return (
    <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/ruya-tabirleri" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Traumdeutung
          </Link>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            📖 Traumlexikon
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>
            Alle Traumsymbole und Bedeutungen von A bis Z
          </p>
        </div>
      </section>

      {/* Harf Navigasyonu */}
      <section style={{ padding: "1.5rem 1rem", background: "#1a0b2e", position: "sticky", top: "64px", zIndex: 10, borderBottom: "none" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {RUYA_SOZLUGU.map((item) => (
              <a
                key={item.harf}
                href={`#harf-${item.harf}`}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(26, 11, 46, 0.8)",
                  borderRadius: "8px",
                  color: "#a855f7",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 1px 3px rgba(168,85,247,0.2)",
                  border: "none",
                }}
              >
                {item.harf}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sözlük İçeriği */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          {RUYA_SOZLUGU.map((item) => (
            <div key={item.harf} id={`harf-${item.harf}`} style={{ marginBottom: "2rem" }}>
              <h2 style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#a855f7",
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                borderBottom: "none",
              }}>
                {item.harf}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
                {item.kelimeler.map((item) => (
                  <Link
                    key={item.kelime}
                    href={`/ruya/${item.kelime.toLowerCase().replace(/ /g, '-')}`}
                    style={{
                      padding: "1.25rem",
                      background: "rgba(168, 85, 247, 0.1)",
                      borderRadius: "16px",
                      color: "#ffffff",
                      textDecoration: "none",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      transition: "all 0.2s ease",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#a855f7" }}>
                      {item.kelime}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                      {item.aciklama}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#a855f7", marginTop: "auto" }}>
                      Mehr erfahren →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
