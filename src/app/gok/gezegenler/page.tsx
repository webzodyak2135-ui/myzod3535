import Link from "next/link";

const GEZEGENLER = [
  { gezegen: "Güneş", emoji: "☀️", sure: "1 ay", etki: "Kimlik, ego, yaşam gücü, liderlik", gecis: "Her ay yeni bir burca geçer" },
  { gezegen: "Ay", emoji: "🌙", sure: "2.5 gün", etki: "Duygular, içgüdüler, ev, anne", gecis: "Her 2.5 günde bir burç değiştirir" },
  { gezegen: "Merkür", emoji: "☿️", sure: "3-4 hafta", etki: "İletişim, düşünce, seyahat, ticaret", gecis: "Yılda 3-4 kez retrograde olur" },
  { gezegen: "Venüs", emoji: "♀️", sure: "4-5 hafta", etki: "Aşk, güzellik, para, değerler", gecis: "Her 18 ayda bir retrograde" },
  { gezegen: "Mars", emoji: "♂️", sure: "6-7 hafta", etki: "Enerji, tutku, savaş, cinsellik", gecis: "Her 2 yılda bir retrograde" },
  { gezegen: "Jüpiter", emoji: "♃", sure: "1 yıl", etki: "Şans, genişleme, felsefe, yurtdışı", gecis: "Her yıl yeni bir burca geçer" },
  { gezegen: "Satürn", emoji: "♄", sure: "2.5 yıl", etki: "Disiplin, sorumluluk, sınırlar, karma", gecis: "Her 2.5 yılda bir burç değiştirir" },
  { gezegen: "Uranüs", emoji: "⛢", sure: "7 yıl", etki: "Devrim, özgürlük, teknoloji, sürpriz", gecis: "Nesil gezegeni, uzun süreli etki" },
  { gezegen: "Neptün", emoji: "♆", sure: "14 yıl", etki: "Hayal, spiritüellik, illüzyon, sanat", gecis: "Nesil gezegeni, kolektif etki" },
  { gezegen: "Plüton", emoji: "♇", sure: "12-31 yıl", etki: "Dönüşüm, güç, yeniden doğuş, gizli", gecis: "En yavaş, en derin dönüşüm" },
];

const GUNCEL_KONUMLAR = [
  { gezegen: "Güneş", burc: "Koç", tarih: "20 Mart - 19 Nisan 2026" },
  { gezegen: "Merkür", burc: "Koç", tarih: "Direkt, güçlü iletisim enerjisi" },
  { gezegen: "Venüs", burc: "Boga", tarih: "Haziran 2026'ya kadar" },
  { gezegen: "Mars", burc: "Yengeç", tarih: "Duygusal motivasyon" },
  { gezegen: "Jüpiter", burc: "Yengeç", tarih: "Haziran 2026'ya kadar" },
  { gezegen: "Satürn", burc: "Koç", tarih: "2028'e kadar" },
];

export default function GezegenlerPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #ffffff 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Gök Gündemi
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>🪐</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Gezegen Geçişleri
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Gezegenlerin etkili hareketleri ve burç geçişleri
          </p>
        </div>
      </section>

      {/* Güncel Konumlar */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Güncel Gezegen Konumları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {GUNCEL_KONUMLAR.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>{item.gezegen}</h3>
                <p style={{ fontSize: "1.25rem", fontWeight: 800, color: "#6366f1", marginBottom: "0.25rem" }}>{item.burc}</p>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>{item.tarih}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gezegenler */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Gezegen Rehberi
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {GEZEGENLER.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.gezegen}</h3>
                    <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>Burçta kalış: {item.sure}</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", marginBottom: "0.5rem", lineHeight: 1.6 }}>
                  <strong>Etki:</strong> {item.etki}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{item.gecis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
