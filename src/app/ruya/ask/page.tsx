import Link from "next/link";

const ASK_RUYALARI = [
  { baslik: "Eski Sevgiliyi Görmek", anlam: "Kapanmamış duygular, geçmişle yüzleşme, özlem veya pişmanlık", icon: "💔", slug: "eski-sevgili-gormek" },
  { baslik: "Öpüşmek", anlam: "Yakınlık isteği, kabul görme, duygusal bağ kurma arzusu", icon: "💋", slug: "opusmek" },
  { baslik: "Evlenmek", anlam: "Bağlanma, yeni başlangıç, birleşme, taahhüt", icon: "💒", slug: "evlenmek-ruya" },
  { baslik: "Aldatılmak", anlam: "Güvensizlik, terk edilme korkusu, öz değer sorunları", icon: "💢", slug: "aldatilmak" },
  { baslik: "Tanımadık Biriyle Aşk", anlam: "Keşfedilmemiş yönler, ideal partner arayışı", icon: "❓", slug: "tanımadik-asik-olmak" },
  { baslik: "Ayrılık Yaşamak", anlam: "Değişim korkusu, kayıp endişesi, bağımsızlık isteği", icon: "🚶", slug: "ayrilik-yasama" },
];

const DETAYLI_YORUMLAR = [
  {
    baslik: "Eski Sevgili Rüyaları",
    icerik: "Eski sevgiliyi rüyada görmek, mutlaka o kişiyi özlediğiniz anlamına gelmez. Genellikle o ilişkiden öğrendiğiniz dersleri, kapanmamış duyguları veya o dönemdeki kendinizi temsil eder. Bu rüyalar, geçmişle barışmanız gerektiğinin işareti olabilir.",
    tavsiye: "Geçmişte kalan duyguları işleyin ve bırakın."
  },
  {
    baslik: "Evlilik Rüyaları",
    icerik: "Evlilik rüyaları, sadece romantik ilişkilerle ilgili değildir. İki farklı yönünüzün birleşmesini, yeni bir projeye bağlanmayı veya hayatınızdaki önemli bir taahhüdü simgeleyebilir.",
    tavsiye: "Hayatınızda neye bağlanmak istediğinizi düşünün."
  },
  {
    baslik: "Aldatılma Rüyaları",
    icerik: "Aldatılma rüyaları çok yaygındır ve genellikle gerçek bir aldatmayı değil, güvensizlik duygularını, terk edilme korkusunu veya ilişkideki iletişim eksikliğini yansıtır.",
    tavsiye: "Güvensizlik duygularınızın kaynağını araştırın."
  },
];

export default function AskRuyalariPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 40%, #fb7185 100%)",
          padding: "5rem 1rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(251,113,133,0.3)", filter: "blur(100px)" }} />
          {["❤️", "💕", "✨", "💖", "💫", "💗"].map((item, i) => (
            <div key={i} style={{ position: "absolute", top: `${15 + (i * 14) % 70}%`, left: `${8 + (i * 16) % 84}%`, fontSize: `${1.5 + (i % 3) * 0.5}rem`, opacity: 0.4, animation: `float ${4 + i * 0.7}s ease-in-out infinite` }}>{item}</div>
          ))}
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/ruya-tabirleri" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Rüya Tabirleri
          </Link>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
            <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", filter: "blur(30px)" }} />
            <div style={{ fontSize: "5rem", position: "relative", filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))" }}>❤️</div>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", textShadow: "0 4px 30px rgba(0,0,0,0.2)", letterSpacing: "-0.02em" }}>
            Aşk Rüyaları
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Romantik rüyaların yorumu - duygusal dünyamızın yansımaları
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* Aşk Rüyası Türleri */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Aşk Rüyası Türleri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {ASK_RUYALARI.map((ruya, i) => (
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
                <span style={{ display: "inline-block", marginTop: "0.75rem", fontSize: "0.8rem", color: "#ec4899", fontWeight: 500 }}>Detaylı Yorum →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detaylı Yorumlar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Detaylı Yorumlar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {DETAYLI_YORUMLAR.map((yorum, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ec4899", marginBottom: "0.75rem" }}>{yorum.baslik}</h3>
                <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>{yorum.icerik}</p>
                <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                  <p style={{ fontSize: "0.85rem", color: "#ffffff", fontWeight: 500 }}>💡 Tavsiye: {yorum.tavsiye}</p>
                </div>
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
              💕 Aşk Rüyalarını Anlamak
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Aşk rüyaları, duygusal ihtiyaçlarımızı, ilişki dinamiklerimizi ve içsel arzularımızı yansıtır.
              Bu rüyalar her zaman gerçek bir kişiyle ilgili değildir - bazen kendi içimizdeki
              erkeksi/kadınsı enerjilerin birleşimini temsil eder.
            </p>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Rüyanızdaki kişi tanıdık biri olsa bile, o kişinin sizin için neyi temsil ettiğini düşünün.
              Belki onun bir özelliği, sizin de geliştirmek istediğiniz bir yönünüzdür.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
