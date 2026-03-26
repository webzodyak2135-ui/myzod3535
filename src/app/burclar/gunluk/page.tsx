import Link from "next/link";
import { generateDailyHoroscopeBatch } from "@/lib/ai-content";
import RelatedCards, { BURC_ONERILERI, ILISKI_ONERILERI } from "@/components/RelatedCards";

export const revalidate = 86400;

type BurcCard = {
  name: string;
  emoji: string;
  slug: string;
  color: string;
  gunluk: string;
  ask: string;
  kariyer: string;
  saglik: string;
  sans: number;
};

const BURCLAR: BurcCard[] = [
  {
    name: "Koç",
    emoji: "♈",
    slug: "koc",
    color: "#ef4444",
    gunluk: "Bugün enerjin yüksek! Yeni projelere başlamak için ideal bir gün. Cesur adımlar at.",
    ask: "Romantik sürprizlere açık ol",
    kariyer: "Liderlik özelliklerin ön plana çıkıyor",
    saglik: "Fiziksel aktivite için harika bir gün",
    sans: 8
  },
  {
    name: "Boğa",
    emoji: "♉",
    slug: "boga",
    color: "#ffffff",
    gunluk: "Maddi konularda olumlu gelişmeler var. Sabırlı ol, emeklerin karşılığını alacaksın.",
    ask: "Güven duygusu ön planda",
    kariyer: "Finansal fırsatlar kapıda",
    saglik: "Dengeli beslenmeye dikkat",
    sans: 7
  },
  {
    name: "İkizler",
    emoji: "♊",
    slug: "ikizler",
    color: "#eab308",
    gunluk: "İletişim yeteneklerin zirve yapıyor. Sosyal çevren genişliyor, yeni bağlantılar kur.",
    ask: "Sohbetler romantizme dönüşebilir",
    kariyer: "Networking için ideal gün",
    saglik: "Zihinsel dinlenmeye ihtiyacın var",
    sans: 9
  },
  {
    name: "Yengeç",
    emoji: "♋",
    slug: "yengec",
    color: "#3b82f6",
    gunluk: "Aile ve ev konuları ön planda. İç dünyana dön, duygusal ihtiyaçlarını dinle.",
    ask: "Duygusal bağlar güçleniyor",
    kariyer: "Ev ofis çalışması verimli",
    saglik: "Duygusal dengeye önem ver",
    sans: 6
  },
  {
    name: "Aslan",
    emoji: "♌",
    slug: "aslan",
    color: "#f97316",
    gunluk: "Yaratıcılığın dorukta! Sahnede parlama zamanı. Kendini ifade etmekten çekinme.",
    ask: "Tutkulu anlar seni bekliyor",
    kariyer: "Tanınma ve takdir alacaksın",
    saglik: "Kalp sağlığına dikkat",
    sans: 9
  },
  {
    name: "Başak",
    emoji: "♍",
    slug: "basak",
    color: "#84cc16",
    gunluk: "Detaylara odaklan, mükemmeliyetçiliğin işe yarayacak. Organizasyon günü.",
    ask: "Küçük jestler büyük anlam taşır",
    kariyer: "Analitik yeteneklerin parlıyor",
    saglik: "Sağlıklı rutinler oluştur",
    sans: 7
  },
  {
    name: "Terazi",
    emoji: "♎",
    slug: "terazi",
    color: "#ec4899",
    gunluk: "İlişkiler ve ortaklıklar gündemde. Denge ve uyum arayışın meyvelerini verecek.",
    ask: "Romantik atmosfer yoğun",
    kariyer: "İş ortaklıkları için uygun",
    saglik: "Estetik aktiviteler iyi gelir",
    sans: 8
  },
  {
    name: "Akrep",
    emoji: "♏",
    slug: "akrep",
    color: "#8b5cf6",
    gunluk: "Derin dönüşümler yaşanıyor. Sezgilerin güçlü, iç sesin dinle.",
    ask: "Yoğun duygusal bağlar",
    kariyer: "Araştırma ve analiz günü",
    saglik: "Detoks için uygun zaman",
    sans: 7
  },
  {
    name: "Yay",
    emoji: "♐",
    slug: "yay",
    color: "#f43f5e",
    gunluk: "Macera ruhu uyanıyor! Yeni deneyimlere açık ol, ufkunu genişlet.",
    ask: "Uzak mesafe ilişkiler gündemde",
    kariyer: "Eğitim ve gelişim fırsatları",
    saglik: "Açık havada vakit geçir",
    sans: 9
  },
  {
    name: "Oğlak",
    emoji: "♑",
    slug: "oglak",
    color: "#6366f1",
    gunluk: "Kariyer hedeflerin netleşiyor. Disiplinli çalışman ödüllendirilecek.",
    ask: "Ciddi ilişkiler ön planda",
    kariyer: "Terfi ve tanınma fırsatı",
    saglik: "Kemik ve eklem sağlığı",
    sans: 8
  },
  {
    name: "Kova",
    emoji: "♒",
    slug: "kova",
    color: "#ffffff",
    gunluk: "Yenilikçi fikirlerin var! Topluluk çalışmaları ve arkadaşlıklar ön planda.",
    ask: "Arkadaşlıktan aşka geçiş",
    kariyer: "Teknoloji projeleri parlıyor",
    saglik: "Ayak bilekleri ve dolaşım",
    sans: 8
  },
  {
    name: "Balık",
    emoji: "♓",
    slug: "balik",
    color: "#a855f7",
    gunluk: "Sezgisel güçlerin yüksek. Rüyalarına dikkat et, mesajlar alabilirsin.",
    ask: "Ruh eşi enerjisi güçlü",
    kariyer: "Sanatsal projeler için ideal",
    saglik: "Meditasyon ve dinlenme",
    sans: 7
  },
];

export default async function GunlukBurclarPage() {
  const todayISO = new Date().toISOString().slice(0, 10);
  const aiHoroscopes = await generateDailyHoroscopeBatch({
    dateISO: todayISO,
    signs: BURCLAR.map((burc) => burc.slug),
  });

  const burclar = BURCLAR.map((burc) => {
    const ai = aiHoroscopes?.[burc.slug];
    if (!ai) return burc;

    return {
      ...burc,
      gunluk: ai.gunluk,
      ask: ai.ask,
      kariyer: ai.kariyer,
      saglik: ai.saglik,
      sans: ai.sans,
    };
  });

  const today = new Date().toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 40%, #ec4899 100%)",
          padding: "5rem 1rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(236,72,153,0.2)", filter: "blur(100px)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />
          {/* Floating Elements */}
          {["✨", "⭐", "🌟", "💫", "✦", "★"].map((star, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${10 + (i * 15) % 80}%`,
                left: `${5 + (i * 17) % 90}%`,
                fontSize: `${1 + (i % 3) * 0.5}rem`,
                opacity: 0.4,
                animation: `float ${3 + i * 0.7}s ease-in-out infinite`,
              }}
            >
              {star}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#ffffff",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>🌅</span> Günlük Burç Yorumları
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 800,
            color: "#ffffff",
            marginBottom: "1rem",
            textShadow: "0 4px 30px rgba(0,0,0,0.2)",
            letterSpacing: "-0.02em",
          }}>
            Bugün Yıldızlar Ne Diyor?
          </h1>

          {/* Date Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1.5rem",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>📅</span>
            <span style={{ fontSize: "1.1rem", color: "#ffffff", fontWeight: 500 }}>{today}</span>
          </div>
        </div>

        {/* Bottom Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* Burç Kartları */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {burclar.map((burc) => (
              <div
                key={burc.slug}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                {/* Kart Header */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${burc.color}15, ${burc.color}30)`,
                    padding: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "#1a0b2e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.75rem",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      }}
                    >
                      {burc.emoji}
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>{burc.name}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        {[...Array(5)].map((_, i) => (
                          <span key={i} style={{ color: i < Math.round(burc.sans / 2) ? "#fbbf24" : "#ffffff", fontSize: "0.9rem" }}>★</span>
                        ))}
                        <span style={{ fontSize: "0.75rem", color: "#ffffff", marginLeft: "0.25rem" }}>{burc.sans}/10</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kart Body */}
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.7, marginBottom: "1rem" }}>
                    {burc.gunluk}
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                    <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>❤️ AŞK</div>
                      <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.ask}</div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>💼 KARİYER</div>
                      <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.kariyer}</div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", gridColumn: "1 / -1" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>🌿 SAĞLIK</div>
                      <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.saglik}</div>
                    </div>
                  </div>

                  <Link
                    href={`/burclar/${burc.slug}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "0.75rem",
                      background: "rgba(168, 85, 247, 0.15)",
                      color: "#ffffff",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                    }}
                  >
                    Detaylı Yorum →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diğer Yorumlar */}
      <section style={{ padding: "2rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            Diğer Yorum Türleri
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/burclar/haftalik" style={{ padding: "0.75rem 1.5rem", background: "rgba(168, 85, 247, 0.15)", borderRadius: "9999px", color: "#ffffff", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
              📅 Haftalık Yorumlar
            </Link>
            <Link href="/burclar/aylik" style={{ padding: "0.75rem 1.5rem", background: "rgba(168, 85, 247, 0.15)", borderRadius: "9999px", color: "#ffffff", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
              🗓️ Aylık Yorumlar
            </Link>
            <Link href="/burclar" style={{ padding: "0.75rem 1.5rem", background: "rgba(168, 85, 247, 0.15)", borderRadius: "9999px", color: "#ffffff", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
              ♈ Tüm Burçlar
            </Link>
          </div>
        </div>
      </section>

      {/* Önerilen İçerikler */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          BURC_ONERILERI[1],
          BURC_ONERILERI[2],
          ILISKI_ONERILERI[0],
          BURC_ONERILERI[3]
        ]}
      />
    </div>
  );
}
