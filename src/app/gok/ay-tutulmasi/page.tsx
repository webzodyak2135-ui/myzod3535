import Link from "next/link";

const AY_TUTULMA_ETKILERI = [
  { alan: "Duygular", etki: "Yoğun duygusal dalgalanmalar, bastırılmış duyguların yüzeye çıkması", icon: "💭" },
  { alan: "İlişkiler", etki: "İlişkilerde krizler veya dönüm noktaları, gerçeklerin ortaya çıkması", icon: "💔" },
  { alan: "Bitiş/Kapanış", etki: "Döngülerin tamamlanması, vedalar, bırakma zamanı", icon: "🚪" },
  { alan: "Farkındalık", etki: "Ani aydınlanmalar, gizli bilgilerin açığa çıkması", icon: "💡" },
  { alan: "Sağlık", etki: "Fiziksel ve duygusal sağlık konularına dikkat", icon: "🏥" },
  { alan: "Karma", etki: "Geçmiş eylemlerinin sonuçları, karmik hesaplaşmalar", icon: "⚖️" },
];

const YAKLASAN_AY_TUTULMALARI = [
  { tarih: "1 Mayıs 2026", tur: "Tam Ay Tutulması", burc: "Akrep", etki: "Derin dönüşüm, gizli duyguların yüzeye çıkması" },
  { tarih: "25 Ekim 2026", tur: "Kısmi Ay Tutulması", burc: "Boğa", etki: "Maddi dönüşümler, değer yargılarında değişim" },
  { tarih: "20 Mart 2027", tur: "Tam Ay Tutulması", burc: "Başak", etki: "Sağlık ve düzen alanında köklü dönüşüm" },
];

const BURC_ETKILERI = [
  { burc: "Koç", etki: "Kimlik krizi, yeni benlik keşfi" },
  { burc: "Boğa", etki: "Maddi değerler, güvenlik konuları" },
  { burc: "İkizler", etki: "İletişim, kardeşler, kısa yolculuklar" },
  { burc: "Yengeç", etki: "Ev, aile, duygusal kökler" },
  { burc: "Aslan", etki: "Yaratıcılık, aşk, çocuklar" },
  { burc: "Başak", etki: "Sağlık, iş, günlük rutinler" },
  { burc: "Terazi", etki: "İlişkiler, ortaklıklar, denge" },
  { burc: "Akrep", etki: "Dönüşüm, paylaşılan kaynaklar, cinsellik" },
  { burc: "Yay", etki: "Yurtdışı, eğitim, felsefe" },
  { burc: "Oğlak", etki: "Kariyer, statü, toplumsal konum" },
  { burc: "Kova", etki: "Arkadaşlıklar, gruplar, gelecek vizyonu" },
  { burc: "Balık", etki: "Spiritüellik, bilinçaltı, izolasyon" },
];

export default function AyTutulmasiPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Gök Gündemi
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>🌑</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Ay Tutulması
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Ay tutulmalarının anlamı ve duygusal etkileri
          </p>
        </div>
      </section>

      {/* Etkiler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Ay Tutulmasının Etkileri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {AY_TUTULMA_ETKILERI.map((item, i) => (
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
                  <span style={{ fontSize: "2rem" }}>{item.icon}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.alan}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{item.etki}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yaklaşan Tutulmalar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Yaklaşan Ay Tutulmaları
          </h2>
          <div style={{ background: "#1a0b2e", borderRadius: "20px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {YAKLASAN_AY_TUTULMALARI.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  borderBottom: i < YAKLASAN_AY_TUTULMALARI.length - 1 ? "1px solid #1a0b2e" : "none",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.tarih}</p>
                    <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>{item.tur}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "1rem", fontWeight: 600, color: "#7c3aed" }}>{item.burc} burcunda</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", marginTop: "0.75rem" }}>✨ {item.etki}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Burç Etkileri */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Burçlara Göre Ay Tutulması Etkileri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {BURC_ETKILERI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "12px",
                  padding: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#7c3aed", marginBottom: "0.25rem" }}>{item.burc}</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{item.etki}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
