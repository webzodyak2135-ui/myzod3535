import Link from "next/link";

const HABERLER = [
  {
    tarih: "20 Mart 2026",
    baslik: "Güneş Koç Burcuna Geçiyor — Astrolojik Yeni Yıl",
    ozet: "Güneş Koç burcuna adım attı! Yeni bir astrolojik yıl başlarken enerji yükseliyor. Cesaret, kararlılık ve yeni başlangıçlar için mükemmel bir dönem.",
    kategori: "Burç Geçişi",
    icon: "☀️"
  },
  {
    tarih: "25 Mart 2026",
    baslik: "Merkür Koç'ta Güçlü İletişim Dönemi",
    ozet: "Merkür Koç burcunda cesur ve doğrudan iletişimi destekliyor. Önemli konuşmalar, müzakereler ve yaratıcı fikirler için elverişli bir dönem.",
    kategori: "Gezegen",
    icon: "☿️"
  },
  {
    tarih: "1 Nisan 2026",
    baslik: "Terazi Dolunayı — İlişkilerde Denge",
    ozet: "Terazi burcundaki bu dolunay, tüm ilişkilerde denge ve adalet temalarını ön plana çıkarıyor. Ortaklıklar, anlaşmalar ve karşılıklı anlayış önem kazanıyor.",
    kategori: "Dolunay",
    icon: "🌕"
  },
  {
    tarih: "17 Nisan 2026",
    baslik: "Koç Yeni Ayı — Güçlü Başlangıçlar",
    ozet: "Koç burcundaki yeni ay, cesur adımlar atmak ve uzun süredir ertelenen projeleri başlatmak için muhteşem bir enerji sunuyor.",
    kategori: "Yeni Ay",
    icon: "🌑"
  },
  {
    tarih: "1 Mayıs 2026",
    baslik: "Tam Ay Tutulması — Akrep Burcunda",
    ozet: "Akrep burcundaki bu güçlü ay tutulması derin dönüşümleri tetikleyecek. Gizli kalan gerçekler yüzeye çıkıyor, eski döngüler kapanıyor.",
    kategori: "Tutulma",
    icon: "🌑"
  },
  {
    tarih: "16 Mayıs 2026",
    baslik: "Halkalı Güneş Tutulması — Boğa Burcunda",
    ozet: "Boğa burcundaki bu özel güneş tutulması maddi konular, güvenlik ve değer yargılarında köklü dönüşümler için güçlü bir portal açıyor.",
    kategori: "Tutulma",
    icon: "🌗"
  },
];

const ONEMLI_TARIHLER = [
  { tarih: "1 Mayıs 2026", olay: "Tam Ay Tutulması — Akrep", onem: "Çok Önemli" },
  { tarih: "16 Mayıs 2026", olay: "Halkalı Güneş Tutulması — Boğa", onem: "Çok Önemli" },
  { tarih: "14 Temmuz 2026", olay: "Satürn Retrograde Başlangıcı", onem: "Önemli" },
  { tarih: "18 Temmuz 2026", olay: "Merkür Retrograde Başlangıcı", onem: "Önemli" },
  { tarih: "11 Kasım 2026", olay: "Tam Güneş Tutulması — Akrep", onem: "Çok Önemli" },
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
            ← Gök Gündemi
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>📡</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Kozmik Haberler
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Son kozmik gelişmeler ve astrolojik gündem
          </p>
        </div>
      </section>

      {/* Önemli Tarihler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            📅 Yaklaşan Önemli Tarihler
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
                    background: item.onem === "Çok Önemli" ? "#1a0b2e" : item.onem === "Önemli" ? "#fef3c7" : "#e0f2fe",
                    color: item.onem === "Çok Önemli" ? "#991b1b" : item.onem === "Önemli" ? "#92400e" : "#0369a1",
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
            Son Kozmik Gelişmeler
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
              🔔 Kozmik Güncellemelerden Haberdar Olun
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
              Önemli gezegen geçişleri, tutulmalar ve astrolojik olaylar hakkında
              güncel bilgiler için sayfamızı düzenli takip edin.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
