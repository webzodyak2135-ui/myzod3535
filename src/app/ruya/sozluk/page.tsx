import Link from "next/link";

const RUYA_SOZLUGU = [
  { harf: "A", kelimeler: ["Araba", "At", "Ayna", "Ağaç", "Altın", "Anne", "Aşk", "Ay"] },
  { harf: "B", kelimeler: ["Bebek", "Balık", "Bahçe", "Bıçak", "Böcek", "Bulut", "Baba"] },
  { harf: "C", kelimeler: ["Cami", "Cenaze", "Cadde", "Cüzdan"] },
  { harf: "Ç", kelimeler: ["Çiçek", "Çocuk", "Çamur", "Çıplak"] },
  { harf: "D", kelimeler: ["Deniz", "Dağ", "Diş", "Düğün", "Düşmek", "Deve"] },
  { harf: "E", kelimeler: ["Ev", "Ekmek", "El", "Eski sevgili", "Elbise"] },
  { harf: "F", kelimeler: ["Fare", "Fırtına", "Futbol"] },
  { harf: "G", kelimeler: ["Gemi", "Göl", "Gül", "Güneş", "Gece"] },
  { harf: "H", kelimeler: ["Hamile", "Hastane", "Hayvan", "Hırsız"] },
  { harf: "I", kelimeler: ["Işık", "Irmak"] },
  { harf: "İ", kelimeler: ["İnek", "İğne"] },
  { harf: "K", kelimeler: ["Kan", "Kapı", "Kedi", "Köpek", "Kuş", "Kovalanmak"] },
  { harf: "L", kelimeler: ["Lamba", "Labirent"] },
  { harf: "M", kelimeler: ["Merdiven", "Mezar", "Melek", "Mum"] },
  { harf: "N", kelimeler: ["Nehir", "Nişan"] },
  { harf: "O", kelimeler: ["Okul", "Orman", "Otobüs"] },
  { harf: "Ö", kelimeler: ["Ölüm", "Ölü", "Öpücük"] },
  { harf: "P", kelimeler: ["Para", "Polis", "Pencere"] },
  { harf: "R", kelimeler: ["Rüzgar", "Resim"] },
  { harf: "S", kelimeler: ["Su", "Saç", "Silah", "Sarı", "Siyah"] },
  { harf: "Ş", kelimeler: ["Şeker", "Şeytan"] },
  { harf: "T", kelimeler: ["Tren", "Tavuk", "Toprak"] },
  { harf: "U", kelimeler: ["Uçak", "Uçmak", "Uyumak"] },
  { harf: "Ü", kelimeler: ["Üzüm"] },
  { harf: "V", kelimeler: ["Vapur", "Veda"] },
  { harf: "Y", kelimeler: ["Yılan", "Yağmur", "Yangın", "Yol", "Yüzmek"] },
  { harf: "Z", kelimeler: ["Ziyaret", "Zehir"] },
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
            ← Rüya Tabirleri
          </Link>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            📖 Rüya Sözlüğü
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>
            A&apos;dan Z&apos;ye tüm rüya sembolleri ve anlamları
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
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {item.kelimeler.map((kelime) => (
                  <Link
                    key={kelime}
                    href={`/ruya/${kelime.toLowerCase().replace(/ /g, '-')}`}
                    style={{
                      padding: "0.6rem 1.2rem",
                      background: "transparent",
                      borderRadius: "12px",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      boxShadow: "0 1px 3px rgba(168,85,247,0.2)",
                      transition: "all 0.2s ease",
                      border: "none",
                    }}
                  >
                    {kelime}
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
