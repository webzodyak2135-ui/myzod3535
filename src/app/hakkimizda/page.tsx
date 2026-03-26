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
            Hakkımızda
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
            Zodyaklı, astroloji ve mistisizm dünyasına açılan kapınız
          </p>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🌟 Misyonumuz
            </h2>
            <p style={{ fontSize: "1rem", color: "#ffffff", lineHeight: 1.8 }}>
              Zodyaklı olarak amacımız, astroloji ve mistisizm bilgisini herkes için erişilebilir ve anlaşılır kılmaktır. 
              Günlük burç yorumlarından rüya tabirlerine, numerolojiden gezegen hareketlerine kadar geniş bir yelpazede 
              içerik sunarak, kozmik bilgeliği hayatınıza entegre etmenize yardımcı oluyoruz.
            </p>
          </div>

          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🔮 Ne Sunuyoruz?
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>♈</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Burç Yorumları</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Günlük, haftalık ve aylık detaylı burç yorumları</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>🌙</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Rüya Tabirleri</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Binlerce rüya sembolü ve anlamları</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>✨</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Astroloji Testleri</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Kişiliğinizi keşfetmeniz için eğlenceli testler</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>🌌</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Gök Gündemi</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Gezegen hareketleri ve retrogradlar</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>💕</span>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>İlişki Rehberi</h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>Burç uyumları ve aşk tavsiyeleri</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              💫 Değerlerimiz
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🎯</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>Doğruluk</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Güvenilir astroloji bilgisi</p>
              </div>
              <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🌱</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>Gelişim</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Sürekli öğrenme ve büyüme</p>
              </div>
              <div style={{ padding: "1rem", background: "#fef3c7", borderRadius: "12px", textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>✨</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>İlham</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Pozitif enerji ve motivasyon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            Kozmik Yolculuğa Başla
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
              ♈ Günlük Yorumlar
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
              ✨ Testleri Keşfet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
