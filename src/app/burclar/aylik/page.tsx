import Link from "next/link";
import { generateMonthlyHoroscopeBatch } from "@/lib/ai-content";
import RelatedCards, { BURC_ONERILERI, ILISKI_ONERILERI } from "@/components/RelatedCards";

const BURCLAR = [
  { name: "Koç", emoji: "♈", slug: "koc", color: "#ef4444", aylik: "Bu ay kariyer odaklı bir dönem seni bekliyor. Yeni iş fırsatları veya terfi haberleri alabilirsin. Ay sonuna doğru ilişkilerde olumlu gelişmeler var. Sağlık konusunda egzersize ağırlık ver." },
  { name: "Boğa", emoji: "♉", slug: "boga", color: "#ffffff", aylik: "Bu ay maddi kazançlar ve konfor ön planda. Ev veya araç alımı düşünüyorsan değerlendir. Sağlık açısından boğaz ve boyun bölgesine dikkat et." },
  { name: "İkizler", emoji: "♊", slug: "ikizler", color: "#eab308", aylik: "Bu ay zihinsel aktivite yoğun. Yeni kurslar, eğitimler veya sertifikalar için harika bir dönem. Sosyal medyada aktifliğin artabilir." },
  { name: "Yengeç", emoji: "♋", slug: "yengec", color: "#3b82f6", aylik: "Bu ay aile ve kök konuları ön planda. Geçmişle ilgili kapanışlar yaşanabilir. Gayrimenkul yatırımları için uygun dönem." },
  { name: "Aslan", emoji: "♌", slug: "aslan", color: "#f97316", aylik: "Bu ay yaratıcı projeler ve eğlence ön planda. Çocuklarla ilgili güzel haberler alabilirsin. Kalp sağlığına dikkat et." },
  { name: "Başak", emoji: "♍", slug: "basak", color: "#84cc16", aylik: "Bu ay sağlık ve günlük rutinler ön planda. Diyet veya egzersiz programı başlatmak için uygun. İş yerinde verimlilik artıyor." },
  { name: "Terazi", emoji: "♎", slug: "terazi", color: "#ec4899", aylik: "Bu ay ilişkiler ve ortaklıklar ön planda. Evlilik veya nişan haberleri alabilirsin. Hukuki konularda olumlu gelişmeler var." },
  { name: "Akrep", emoji: "♏", slug: "akrep", color: "#8b5cf6", aylik: "Bu ay dönüşüm ve yenilenme ön planda. Psikolojik derinleşme ve terapi için uygun dönem. Miras veya ortak finanslar gündemde." },
  { name: "Yay", emoji: "♐", slug: "yay", color: "#f43f5e", aylik: "Bu ay yolculuklar ve yükseköğrenim ön planda. Yayın veya medya projeleri için uygun dönem. Felsefi ve spiritüel arayışlar yoğunlaşıyor." },
  { name: "Oğlak", emoji: "♑", slug: "oglak", color: "#6366f1", aylik: "Bu ay kariyer ve toplumsal statü ön planda. Terfi veya tanınma haberleri alabilirsin. Kemik ve diş sağlığına dikkat." },
  { name: "Kova", emoji: "♒", slug: "kova", color: "#ffffff", aylik: "Bu ay arkadaşlıklar ve topluluk çalışmaları ön planda. Sosyal medya projeleri parlıyor. Gelecek planları netleşiyor." },
  { name: "Balık", emoji: "♓", slug: "balik", color: "#a855f7", aylik: "Bu ay spiritüel gelişim ve içsel yolculuk ön planda. Sanatsal projeler meyvelerini veriyor. Ayak sağlığına dikkat et." },
];

export default async function AylikBurclarPage() {
  const ay = new Date().toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' });
  const monthISO = new Date().toISOString().slice(0, 7);
  const aiData = await generateMonthlyHoroscopeBatch({ monthISO });

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
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
              color: "#ffffff",
              background: "rgba(255,255,255,0.2)",
            }}
          >
            🗓️ Aylık Burç Yorumları
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
            Bu Ay Seni Neler Bekliyor?
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", textTransform: "capitalize" }}>{ay}</p>
        </div>
      </section>

      {/* Burç Kartları */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {BURCLAR.map((burc) => (
              <div
                key={burc.slug}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(135deg, ${burc.color}20, ${burc.color}40)`,
                    padding: "1.25rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
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
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>{burc.name}</h3>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.8, marginBottom: "0.75rem" }}>
                    {aiData?.[burc.slug]?.aylik ?? burc.aylik}
                  </p>
                  {aiData?.[burc.slug] && (
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1rem" }}>
                      <div style={{ background: `${burc.color}10`, borderRadius: "10px", padding: "0.6rem" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: burc.color, marginBottom: "0.25rem" }}>❤️ AŞK</div>
                        <p style={{ fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.5 }}>{aiData[burc.slug].ask}</p>
                      </div>
                      <div style={{ background: `${burc.color}10`, borderRadius: "10px", padding: "0.6rem" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: burc.color, marginBottom: "0.25rem" }}>💼 KARİYER</div>
                        <p style={{ fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.5 }}>{aiData[burc.slug].kariyer}</p>
                      </div>
                      <div style={{ background: `${burc.color}10`, borderRadius: "10px", padding: "0.6rem", gridColumn: "1 / -1" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: burc.color, marginBottom: "0.25rem" }}>🌿 SAĞLIK</div>
                        <p style={{ fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.5 }}>{aiData[burc.slug].saglik}</p>
                      </div>
                    </div>
                  )}
                  <Link
                    href={`/burclar/${burc.slug}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "0.75rem",
                      background: `${burc.color}10`,
                      color: burc.color,
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textDecoration: "none",
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
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/burclar/gunluk" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              🌅 Günlük Yorumlar
            </Link>
            <Link href="/burclar/haftalik" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              📅 Haftalık Yorumlar
            </Link>
            <Link href="/burclar" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              ♈ Tüm Burçlar
            </Link>
          </div>
        </div>
      </section>

      <RelatedCards
        title="İlgini Çekebilir"
        items={[BURC_ONERILERI[0], BURC_ONERILERI[1], ILISKI_ONERILERI[0], BURC_ONERILERI[3]]}
      />
    </div>
  );
}
