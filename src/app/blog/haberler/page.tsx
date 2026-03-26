import Link from "next/link";
import RelatedCards, { BURC_ONERILERI } from "@/components/RelatedCards";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "2026 Yılının En Etkili Gezegen Geçişleri",
    date: "27 Mart 2026",
    category: "Kozmik Olaylar",
    excerpt: "Bu yıl Jüpiter'in Yay burcuna geçişi ve Satürn'ün Kova burcundaki etkisi öne çıkıyor. Uzmanlar bu dönemin büyük dönüşümlere gebe olduğunu söylüyor.",
    image: "🌌",
    readTime: "5 dk",
  },
  {
    id: 2,
    title: "Mart Ayının Dolunayı: Burçlara Özel Etkileri",
    date: "26 Mart 2026",
    category: "Ay Takvimleri",
    excerpt: "Terazi burcundaki dolunay, ilişkiler ve dengeyle ilgili önemli mesajlar getiriyor. Her burç için özel etkileri inceledik.",
    image: "🌕",
    readTime: "4 dk",
  },
  {
    id: 3,
    title: "Retrograde Merkür Dönemi Başlıyor",
    date: "25 Mart 2026",
    category: "Retrograde",
    excerpt: "Nisan ayında başlayacak Merkür retrograde'i için hazırlıklı olun. İletişim ve teknoloji konularında dikkatli olmanız gereken dönem yaklaşıyor.",
    image: "⚡",
    readTime: "6 dk",
  },
  {
    id: 4,
    title: "Astrolojinin Bilimsel Temelleri Araştırılıyor",
    date: "24 Mart 2026",
    category: "Araştırma",
    excerpt: "Yeni bir çalışma, astrolojik etkilerin psikolojik boyutlarını inceliyor. Bulgular oldukça ilginç sonuçlar ortaya koyuyor.",
    image: "🔬",
    readTime: "7 dk",
  },
  {
    id: 5,
    title: "2026 Yılının En Şanslı Burçları Açıklandı",
    date: "23 Mart 2026",
    category: "Burç Analizleri",
    excerpt: "Astrologlar, bu yılın hangi burçlar için daha şanslı geçeceğini değerlendirdi. Siz de listenizde misiniz?",
    image: "🍀",
    readTime: "5 dk",
  },
  {
    id: 6,
    title: "Ay Tutulması Hazırlık Rehberi",
    date: "22 Mart 2026",
    category: "Tutulmalar",
    excerpt: "Yaklaşan ay tutulması için manevi ve astrolojik açıdan nasıl hazırlanabileceğinizi anlattık.",
    image: "🌑",
    readTime: "8 dk",
  },
];

export default function HaberlerPage() {
  return (
    <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #fbbf24 60%, #f59e0b 100%)",
          padding: "4rem 1rem 5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "9999px",
              marginBottom: "1rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#ffffff",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>📰</span> Astroloji Haberleri
          </div>

          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "0.75rem",
            textShadow: "0 4px 30px rgba(0,0,0,0.2)",
            letterSpacing: "-0.02em",
          }}>
            Son Gelişmeler
          </h1>

          <p style={{
            fontSize: "1.05rem",
            color: "#ffffff",
            maxWidth: "40rem",
            margin: "0 auto",
            lineHeight: 1.7,
            opacity: 0.95,
          }}>
            Astroloji dünyasından güncel haberler ve önemli gök olayları
          </p>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="#1a0b2e" />
          </svg>
        </div>
      </section>

      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {NEWS_ITEMS.map((news) => (
              <article
                key={news.id}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "1px solid rgba(168, 85, 247, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "16px",
                      background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(168,85,247,0.2))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {news.image}
                  </div>

                  <div style={{ flex: 1, minWidth: "250px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          padding: "0.35rem 0.85rem",
                          background: "rgba(168, 85, 247, 0.2)",
                          color: "#ffffff",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          border: "1px solid rgba(168, 85, 247, 0.3)",
                        }}
                      >
                        {news.category}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "#ffffff", opacity: 0.7 }}>
                        {news.date}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "#ffffff", opacity: 0.7 }}>
                        📖 {news.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                      {news.title}
                    </h3>

                    <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.7, opacity: 0.85, marginBottom: "1rem" }}>
                      {news.excerpt}
                    </p>

                    <Link
                      href={`/blog/haberler/${news.id}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.65rem 1.25rem",
                        background: "rgba(168, 85, 247, 0.15)",
                        color: "#ffffff",
                        borderRadius: "12px",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      Devamını Oku →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          BURC_ONERILERI[0],
          BURC_ONERILERI[1],
          BURC_ONERILERI[2],
        ]}
      />
    </div>
  );
}
