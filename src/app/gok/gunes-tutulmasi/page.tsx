import Link from "next/link";

const TUTULMA_TURLERI = [
  { tur: "Totale Sonnenfinsternis", emoji: "🌑", aciklama: "Der Mond bedeckt die Sonne vollständig. Stärkste Wirkung.", etki: "Große Transformationen, Neubegìnne, Schicksalsmomente" },
  { tur: "Ringförmige Sonnenfinsternis", emoji: "💫", aciklama: "Der Mond bedeckt die Mitte der Sonne, Ränder bleiben sichtbar.", etki: "Fokussierung, Klarheit, Rückkehr zum Zentrum" },
  { tur: "Partielle Sonnenfinsternis", emoji: "🌗", aciklama: "Der Mond bedeckt einen Teil der Sonne.", etki: "Teilweise Veränderungen, Bewusstsein, Warnungen" },
  { tur: "Hybride Finsternis", emoji: "✨", aciklama: "Erscheint in verschiedenen Regionen unterschiedlich.", etki: "Vielschichtige Wirkungen, komplexe Transformationen" },
];

const YAKLASAN_TUTULMALAR = [
  { tarih: "16. Mai 2026", tur: "Ringförmige Sonnenfinsternis", burc: "Stier", gorunur: "Nordafrika, Naher Osten" },
  { tarih: "11. November 2026", tur: "Totale Sonnenfinsternis", burc: "Skorpion", gorunur: "Atlantik, Europa" },
  { tarih: "1. Oktober 2027", tur: "Ringförmige Sonnenfinsternis", burc: "Waage", gorunur: "Afrika, Indischer Ozean" },
];

export default function GunesTutulmasiPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Kosmischer Kalender
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>☀️</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Sonnenfinsternis
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Kraft und kosmische Auswirkungen von Sonnenfinsternissen
          </p>
        </div>
      </section>

      {/* Tutulma Türleri */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Arten von Sonnenfinsternissen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {TUTULMA_TURLERI.map((item, i) => (
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
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.tur}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", marginBottom: "0.75rem", lineHeight: 1.6 }}>{item.aciklama}</p>
                <div style={{ padding: "0.75rem", background: "#fff7ed", borderRadius: "12px" }}>
                  <p style={{ fontSize: "0.85rem", color: "#c2410c" }}>✨ {item.etki}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yaklaşan Tutulmalar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Bevorstehende Sonnenfinsternisse
          </h2>
          <div style={{ background: "#1a0b2e", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {YAKLASAN_TUTULMALAR.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  borderBottom: i < YAKLASAN_TUTULMALAR.length - 1 ? "1px solid #1a0b2e" : "none",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div>
                  <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.tarih}</p>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>{item.tur}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "1rem", fontWeight: 600, color: "#f97316" }}>Im {item.burc}</p>
                  <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Sichtbar: {item.gorunur}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #f59e0b15, #ea580c15)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              ☀️ Güneş Tutulmasında Yapılması Gerekenler
            </h2>
            <ul style={{ color: "#ffffff", lineHeight: 2, paddingLeft: "1.5rem" }}>
              <li>Büyük kararlar almaktan kaçının</li>
              <li>Yeni başlangıçlar için niyet koyun</li>
              <li>Meditasyon ve içe dönüş yapın</li>
              <li>Eski kalıpları bırakmaya hazırlanın</li>
              <li>Tutulma enerjisinin yerleşmesi için 2 hafta bekleyin</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
