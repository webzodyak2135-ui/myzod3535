import Link from "next/link";

const SU_RUYALARI = [
  { baslik: "Deniz Görmek", anlam: "Bilinçaltı, duygusal derinlik, sonsuzluk hissi", icon: "🌊", slug: "deniz-gormek" },
  { baslik: "Nehir Görmek", anlam: "Hayatın akışı, değişim, yolculuk", icon: "🏞️", slug: "nehir-gormek" },
  { baslik: "Göl Görmek", anlam: "İç huzur, durgunluk, yansıma", icon: "🏔️", slug: "gol-gormek" },
  { baslik: "Yağmur Görmek", anlam: "Arınma, bereket, duygusal boşalma", icon: "🌧️", slug: "yagmur-gormek" },
  { baslik: "Sel Görmek", anlam: "Kontrolsüz duygular, baskı, temizlenme", icon: "🌊", slug: "sel-gormek" },
  { baslik: "Havuz Görmek", anlam: "Sınırlı duygular, kontrollü ortam", icon: "🏊", slug: "havuz-gormek" },
];

const DETAYLI_YORUMLAR = [
  {
    durum: "Berrak Su",
    yorum: "Berrak ve temiz su görmek, zihinsel netlik, duygusal arınma ve olumlu gelişmelerin habercisidir. Hayatınızda şeffaflık ve dürüstlük ön plandadır.",
    anlam: "Olumlu"
  },
  {
    durum: "Bulanık Su",
    yorum: "Bulanık veya kirli su, karışıklık, belirsizlik ve çözülmemiş duygusal sorunları temsil eder. Hayatınızda netlik kazanmanız gerekebilir.",
    anlam: "Dikkat"
  },
  {
    durum: "Suda Yüzmek",
    yorum: "Rahatça yüzmek duygusal özgürlüğü, zorlanarak yüzmek ise duygusal mücadeleyi simgeler. Yüzme şekliniz duygusal durumunuzu yansıtır.",
    anlam: "Nötr"
  },
  {
    durum: "Suda Boğulmak",
    yorum: "Duygusal baskı, bunaltı ve kontrolü kaybetme hissi. Hayatınızda sizi boğan durumları gözden geçirmeniz gerekebilir.",
    anlam: "Uyarı"
  },
  {
    durum: "Su İçmek",
    yorum: "Bilgi edinme, spiritüel beslenme ve yenilenme. Temiz su içmek olumlu, kirli su içmek olumsuz haberlere işaret eder.",
    anlam: "Olumlu"
  },
];

export default function SuRuyalariPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0369a1 0%, #0284c7 40%, #06b6d4 100%)",
          padding: "5rem 1rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(6,182,212,0.3)", filter: "blur(100px)" }} />
          {/* Water Bubbles */}
          {["💧", "🫧", "💦", "🌊", "✨"].map((bubble, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${20 + (i * 15) % 60}%`,
                left: `${10 + (i * 18) % 80}%`,
                fontSize: `${1.5 + (i % 3) * 0.5}rem`,
                opacity: 0.4,
                animation: `float ${4 + i * 0.8}s ease-in-out infinite`,
              }}
            >
              {bubble}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link
            href="/ruya-tabirleri"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.9rem",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.2)",
              display: "inline-block",
              marginBottom: "1.5rem",
            }}
          >
            ← Rüya Tabirleri
          </Link>

          {/* Glowing Icon */}
          <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
            <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", filter: "blur(30px)" }} />
            <div style={{
              fontSize: "5rem",
              position: "relative",
              filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))",
            }}>💧</div>
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginTop: "0.5rem",
            textShadow: "0 4px 30px rgba(0,0,0,0.2)",
            letterSpacing: "-0.02em",
          }}>
            Su Rüyaları
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Su, rüyalarda duygusal durumunuzu ve bilinçaltınızı temsil eder. Suyun şekli ve durumu yorumu etkiler.
          </p>
        </div>
      </section>

      {/* Su Türleri */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Su Rüyası Türleri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {SU_RUYALARI.map((ruya, i) => (
              <Link
                key={i}
                href={`/ruya/${ruya.slug}`}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{ruya.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>{ruya.baslik}</h3>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{ruya.anlam}</p>
                <span style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "0.8rem", color: "#ffffff", fontWeight: 500 }}>Detaylı Yorum →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detaylı Yorumlar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Detaylı Su Rüyası Yorumları
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {DETAYLI_YORUMLAR.map((yorum, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  borderLeft: `4px solid ${yorum.anlam === "Olumlu" ? "#22c55e" : yorum.anlam === "Uyarı" ? "#ef4444" : yorum.anlam === "Dikkat" ? "#f59e0b" : "#6366f1"}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{yorum.durum}</h3>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      background: yorum.anlam === "Olumlu" ? "#1a0b2e" : yorum.anlam === "Uyarı" ? "#1a0b2e" : yorum.anlam === "Dikkat" ? "#1a0b2e" : "#e0e7ff",
                      color: yorum.anlam === "Olumlu" ? "#166534" : yorum.anlam === "Uyarı" ? "#991b1b" : yorum.anlam === "Dikkat" ? "#92400e" : "#4338ca",
                    }}
                  >
                    {yorum.anlam}
                  </span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.7 }}>{yorum.yorum}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #0369a115, #0ea5e915)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              💡 Su Rüyalarını Yorumlarken Dikkat Edilecekler
            </h2>
            <ul style={{ color: "#ffffff", lineHeight: 2, paddingLeft: "1.5rem" }}>
              <li>Suyun rengi ve berraklığı duygusal netliğinizi gösterir</li>
              <li>Suyun hareketi (durgun/dalgalı) duygusal durumunuzu yansıtır</li>
              <li>Suyla etkileşiminiz (yüzmek, içmek, boğulmak) önemlidir</li>
              <li>Suyun kaynağı (deniz, nehir, yağmur) farklı anlamlar taşır</li>
              <li>Rüyadaki duygularınız yorumu etkiler</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
