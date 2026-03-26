import Link from "next/link";

const GOK_OLAYLARI = [
  {
    title: "Güneş Koç'ta — Astrolojik Yeni Yıl",
    tarih: "20 Mart - 19 Nisan 2026",
    durum: "Aktif",
    desc: "Astrolojik yeni yıl başladı! Koç enerjisi cesaret, kararlılık ve yeni başlangıçlar için güçlü bir zemin hazırlıyor.",
    icon: "☀️",
    color: "#ef4444",
    href: "/gok/gezegenler"
  },
  {
    title: "Merkür Koç'ta",
    tarih: "Mart - Nisan 2026",
    durum: "Aktif",
    desc: "Merkür Koç burcunda sözler keskin, fikirler hızlı. İletişimde doğrudan yaklaşım ve yaratıcılık ön planda.",
    icon: "☿️",
    color: "#f97316",
    href: "/gok/gezegenler"
  },
  {
    title: "Terazi Dolunayı",
    tarih: "1 Nisan 2026",
    durum: "Yaklaşıyor",
    desc: "Terazi burcundaki dolunay ilişkilerde denge ve adaleti ön plana çıkarıyor. Ortaklıklar ve anlaşmalar için önemli bir an.",
    icon: "🌕",
    color: "#fbbf24",
    href: "/gok/ay-takvimi"
  },
  {
    title: "Tam Ay Tutulması — Akrep",
    tarih: "1 Mayıs 2026",
    durum: "Yakında",
    desc: "Yılın en güçlü astrolojik olayı! Akrep burcundaki bu tam ay tutulması derin dönüşümleri ve gizli gerçekleri tetikleyecek.",
    icon: "🌑",
    color: "#8b5cf6",
    href: "/gok/ay-tutulmasi"
  },
];

const AY_EVRELERI = [
  { evre: "Dolunay", tarih: "1 Nisan", burc: "Terazi", icon: "�" },
  { evre: "Son Dördün", tarih: "8 Nisan", burc: "Oğlak", icon: "�" },
  { evre: "Yeni Ay", tarih: "17 Nisan", burc: "Koç", icon: "�" },
  { evre: "İlk Dördün", tarih: "24 Nisan", burc: "Aslan", icon: "�" },
];

const GEZEGEN_KONUMLARI = [
  { gezegen: "Güneş", burc: "Koç", icon: "☀️" },
  { gezegen: "Ay", burc: "Yengeç", icon: "🌙" },
  { gezegen: "Merkür", burc: "Koç", icon: "☿️" },
  { gezegen: "Venüs", burc: "Boğa", icon: "♀️" },
  { gezegen: "Mars", burc: "Yengeç", icon: "♂️" },
  { gezegen: "Jüpiter", burc: "Yengeç", icon: "♃" },
  { gezegen: "Satürn", burc: "Koç", icon: "♄" },
  { gezegen: "Uranüs", burc: "Boğa", icon: "⛢" },
  { gezegen: "Neptün", burc: "Koç", icon: "♆" },
  { gezegen: "Plüton", burc: "Kova", icon: "♇" },
];

export default function GokGundemiPage() {
  return (
    <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
          padding: "4rem 1rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 70% 30%, rgba(139,92,246,0.2) 0%, transparent 50%)",
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
                background: "transparent",
              }}
            >
              <span>🌌</span> Gök Gündemi
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
              Kozmik Takvim
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", maxWidth: "600px", margin: "0 auto" }}>
              Gezegen hareketleri, retrogradlar, tutulmalar ve önemli astrolojik olaylar
            </p>
          </div>
        </div>
      </section>

      {/* Aktif Olaylar */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
            🔴 Aktif Gök Olayları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {GOK_OLAYLARI.map((olay) => (
              <Link
                key={olay.href}
                href={olay.href}
                style={{
                  display: "block",
                  background: "transparent",
                  borderRadius: "20px",
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(168,85,247,0.2)",
                  border: "none",
                }}
              >
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ fontSize: "1.75rem" }}>{olay.icon}</span>
                      <div>
                        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{olay.title}</h3>
                        <span style={{ fontSize: "0.8rem", color: "#e0d4ff" }}>{olay.tarih}</span>
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "0.25rem 0.6rem",
                        borderRadius: "9999px",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        background: olay.durum === "Aktif" ? "#1a0b2e" : "#1a0b2e",
                        color: olay.durum === "Aktif" ? "#166534" : "#92400e",
                      }}
                    >
                      {olay.durum}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#e0d4ff", lineHeight: 1.6 }}>{olay.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ay Evreleri */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
            🌙 Ay Evreleri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {AY_EVRELERI.map((ay, i) => (
              <div
                key={i}
                style={{
                  background: "transparent",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(168,85,247,0.2)",
                  border: "none",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{ay.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff" }}>{ay.evre}</h3>
                <p style={{ fontSize: "0.85rem", color: "#e0d4ff", marginTop: "0.25rem" }}>{ay.tarih}</p>
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "0.5rem",
                    padding: "0.2rem 0.6rem",
                    background: "#1a0b2e",
                    color: "#7c3aed",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  {ay.burc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gezegen Konumları */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
            🪐 Güncel Gezegen Konumları
          </h2>
          <div
            style={{
              background: "linear-gradient(135deg, #1e1b4b, #312e81)",
              borderRadius: "24px",
              padding: "2rem",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem" }}>
              {GEZEGEN_KONUMLARI.map((g, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    padding: "1rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{g.icon}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#ffffff" }}>{g.gezegen}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "0.25rem" }}>{g.burc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Retrograd Rehberi */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div
            style={{
              background: "transparent",
              borderRadius: "24px",
              padding: "2rem",
              boxShadow: "none",
              border: "none",
            }}
          >
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              ⚠️ Retrograd Nedir?
            </h2>
            <p style={{ fontSize: "1rem", color: "#e0d4ff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Retrograd, bir gezegenin Dünya&apos;dan bakıldığında geriye doğru hareket ediyormuş gibi görünmesidir.
              Bu dönemlerde gezegenin temsil ettiği alanlarda aksaklıklar, gecikmeler ve yeniden değerlendirmeler yaşanabilir.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
              <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px" }}>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#92400e", marginBottom: "0.5rem" }}>☿️ Merkür Retrosu</h4>
                <p style={{ fontSize: "0.8rem", color: "#78350f" }}>İletişim, teknoloji, seyahat</p>
              </div>
              <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px" }}>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#9d174d", marginBottom: "0.5rem" }}>♀️ Venüs Retrosu</h4>
                <p style={{ fontSize: "0.8rem", color: "#831843" }}>Aşk, para, değerler</p>
              </div>
              <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px" }}>
                <h4 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#991b1b", marginBottom: "0.5rem" }}>♂️ Mars Retrosu</h4>
                <p style={{ fontSize: "0.8rem", color: "#7f1d1d" }}>Enerji, motivasyon, çatışma</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
