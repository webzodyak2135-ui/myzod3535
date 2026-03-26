import Link from "next/link";

const RUYA_KATEGORILERI = [
  { title: "Rüya Sözlüğü", desc: "A'dan Z'ye tüm rüya sembolleri", href: "/ruya/sozluk", icon: "📖", color: "#818cf8" },
  { title: "Su Rüyaları", desc: "Deniz, nehir, yağmur rüyaları", href: "/ruya/su", icon: "💧", color: "#3b82f6" },
  { title: "Uçma Rüyaları", desc: "Havada uçmanın anlamı", href: "/ruya/ucma", icon: "🦋", color: "#8b5cf6" },
  { title: "Aşk Rüyaları", desc: "Romantik rüyaların yorumu", href: "/ruya/ask", icon: "❤️", color: "#ec4899" },
  { title: "Kâbus Yorumları", desc: "Korkutucu rüyaların anlamı", href: "/ruya/kabus", icon: "�️", color: "#ffffff" },
  { title: "Renk Sembolleri", desc: "Rüyâdaki renklerin dili", href: "/ruya/renkler", icon: "�", color: "#f97316" },
];

const POPULER_RUYALAR = [
  { title: "Yılan Görmek", meaning: "Düşmanlardan korunma, gizli tehlikeler", icon: "🐍" },
  { title: "Diş Dökülmesi", meaning: "Aile ile ilgili haberler, değişim", icon: "🦷" },
  { title: "Düşmek", meaning: "Kontrol kaybı, güvensizlik hissi", icon: "⬇️" },
  { title: "Kovalanmak", meaning: "Kaçınılan sorunlar, stres", icon: "🏃" },
  { title: "Uçmak", meaning: "Özgürlük, başarı, yükseliş", icon: "✈️" },
  { title: "Su Görmek", meaning: "Duygusal durum, bilinçaltı", icon: "🌊" },
  { title: "Bebek Görmek", meaning: "Yeni başlangıçlar, masumiyet", icon: "👶" },
  { title: "Ev Görmek", meaning: "İç dünya, aile, güvenlik", icon: "🏠" },
];

export default function RuyaTabirleriPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #ffffff 50%, #ffffff 100%)",
          padding: "4rem 1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 30% 50%, rgba(129,140,248,0.15) 0%, transparent 50%)",
        }} />
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center" }}>
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
                background: "rgba(129,140,248,0.3)",
              }}
            >
              <span>🌙</span> Rüya Tabirleri
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
              Rüyalarının Gizli Anlamını Keşfet
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
              Binlerce rüya sembolü ve anlamı. Rüyalarındaki mesajları çöz, bilinçaltının sesini dinle.
            </p>
          </div>
        </div>
      </section>

      {/* Arama */}
      <section style={{ padding: "2rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1rem 1.5rem",
            background: "#1a0b2e",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}>
            <span style={{ fontSize: "1.5rem" }}>🔍</span>
            <input
              type="text"
              placeholder="Rüyanda ne gördün? (örn: yılan, su, uçmak...)"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "1rem",
                color: "#ffffff",
                background: "transparent",
              }}
            />
            <button
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #818cf8, #6366f1)",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Ara
            </button>
          </div>
        </div>
      </section>

      {/* Kategoriler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Rüya Kategorileri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {RUYA_KATEGORILERI.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  transition: "all 0.2s ease",
                  border: `2px solid transparent`,
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: `${item.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff" }}>{item.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popüler Rüyalar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            En Çok Aranan Rüyalar
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {POPULER_RUYALAR.map((ruya, i) => (
              <Link
                key={i}
                href={`/ruya/${ruya.title.toLowerCase().replace(/ /g, '-')}`}
                style={{
                  padding: "1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "1.5rem" }}>{ruya.icon}</span>
                  <span style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>{ruya.title}</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{ruya.meaning}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Rüya Yorumu Nasıl Yapılır */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #818cf815, #6366f115)",
            borderRadius: "24px",
            padding: "2rem",
          }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", textAlign: "center" }}>
              🌟 Rüya Yorumu Nasıl Yapılır?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem", marginTop: "1.5rem" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📝</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>1. Rüyanı Yaz</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Uyandığında hemen not al</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔍</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>2. Sembolleri Bul</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Öne çıkan sembolleri belirle</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💭</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>3. Duygularını Hatırla</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Rüyadaki hislerini düşün</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✨</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>4. Yorumla</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Hayatınla bağlantı kur</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
