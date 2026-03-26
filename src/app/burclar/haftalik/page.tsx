import Link from "next/link";
import { generateWeeklyHoroscopeBatch } from "@/lib/ai-content";
import RelatedCards, { BURC_ONERILERI, ILISKI_ONERILERI } from "@/components/RelatedCards";

export const revalidate = 604800;

const BURCLAR = [
  { name: "Koç", emoji: "♈", slug: "koc", color: "#ef4444", haftalik: "Bu hafta Mars'ın etkisiyle aksiyona geçme zamanı. Ertelediğin projeler için harekete geç. Hafta ortasında beklenmedik fırsatlar kapını çalabilir." },
  { name: "Boğa", emoji: "♉", slug: "boga", color: "#ffffff", haftalik: "Venüs'ün desteğiyle bu hafta estetik ve güzellik konularında şanslısın. Finansal yatırımlar için uygun bir dönem." },
  { name: "İkizler", emoji: "♊", slug: "ikizler", color: "#eab308", haftalik: "Merkür retrosu etkisini azaltıyor, iletişim sorunları çözülüyor. Kısa yolculuklar ve yeni öğrenmeler için ideal hafta." },
  { name: "Yengeç", emoji: "♋", slug: "yengec", color: "#3b82f6", haftalik: "Ay'ın hareketleriyle duygusal iniş çıkışlar yaşayabilirsin. Ev dekorasyonu veya taşınma planları gündemde olabilir." },
  { name: "Aslan", emoji: "♌", slug: "aslan", color: "#f97316", haftalik: "Güneş'in gücüyle bu hafta merkez sahnedesin. Tanınma ve takdir alacağın bir dönem. Romantik ilişkilerde tutkulu anlar." },
  { name: "Başak", emoji: "♍", slug: "basak", color: "#84cc16", haftalik: "Merkür'ün etkisiyle analitik yeteneklerin parlıyor. İş yerinde düzenleme ve iyileştirme projeleri için ideal hafta." },
  { name: "Terazi", emoji: "♎", slug: "terazi", color: "#ec4899", haftalik: "Venüs'ün desteğiyle romantik ilişkiler canlanıyor. İş ortaklıkları için görüşmeler yapabilirsin." },
  { name: "Akrep", emoji: "♏", slug: "akrep", color: "#8b5cf6", haftalik: "Plüton'un etkisiyle dönüşüm süreci devam ediyor. Eski alışkanlıklardan kurtulma zamanı." },
  { name: "Yay", emoji: "♐", slug: "yay", color: "#f43f5e", haftalik: "Jüpiter'in şansıyla bu hafta fırsatlar kapını çalıyor. Yurtdışı bağlantıları ve eğitim konuları ön planda." },
  { name: "Oğlak", emoji: "♑", slug: "oglak", color: "#6366f1", haftalik: "Satürn'ün etkisiyle sorumluluklar artıyor ama ödüller de yakın. Kariyer atılımları için uygun hafta." },
  { name: "Kova", emoji: "♒", slug: "kova", color: "#ffffff", haftalik: "Uranüs'ün etkisiyle beklenmedik değişimler olabilir. Arkadaş grupları ve sosyal aktiviteler yoğun." },
  { name: "Balık", emoji: "♓", slug: "balik", color: "#a855f7", haftalik: "Neptün'ün etkisiyle hayal gücün sınırsız. Sanatsal projeler için ilham dolu bir hafta." },
];

export default async function HaftalikBurclarPage() {
  const now = new Date();
  const day = now.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() + mondayOffset);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);

  const todayISO = now.toISOString().slice(0, 10);

  const aiWeekly = await generateWeeklyHoroscopeBatch({
    weekStartISO: todayISO,
    signs: BURCLAR.map((burc) => burc.slug),
  });

  const burclar = BURCLAR.map((burc) => {
    const ai = aiWeekly?.[burc.slug];
    if (!ai) return { ...burc, ask: "", kariyer: "", saglik: "" };
    return {
      ...burc,
      haftalik: ai.haftalik,
      ask: ai.ask,
      kariyer: ai.kariyer,
      saglik: ai.saglik,
    };
  });

  const weekLabel = `${weekStart.toLocaleDateString("tr-TR", { day: "2-digit", month: "long" })} - ${weekEnd.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" })}`;

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
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
            📅 Haftalık Burç Yorumları
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
            Bu Hafta Yıldızlar Ne Diyor?
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)" }}>{weekLabel}</p>
        </div>
      </section>

      {/* Burç Kartları */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
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
                  <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
                    {burc.haftalik}
                  </p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem", marginBottom: "1rem" }}>
                    {burc.ask && (
                      <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ef4444", marginBottom: "0.3rem" }}>❤️ AŞK</div>
                        <div style={{ fontSize: "0.82rem", color: "#7f1d1d", lineHeight: 1.5 }}>{burc.ask}</div>
                      </div>
                    )}
                    {burc.kariyer && (
                      <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.3rem" }}>💼 KARİYER</div>
                        <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.kariyer}</div>
                      </div>
                    )}
                    {burc.saglik && (
                      <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", gridColumn: "1 / -1" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.3rem" }}>🌿 SAĞLIK</div>
                        <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.saglik}</div>
                      </div>
                    )}
                  </div>
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
            <Link href="/burclar/aylik" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              🗓️ Aylık Yorumlar
            </Link>
            <Link href="/burclar" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              ♈ Tüm Burçlar
            </Link>
          </div>
        </div>
      </section>

      <RelatedCards
        title="İlgini Çekebilir"
        items={[BURC_ONERILERI[0], BURC_ONERILERI[2], ILISKI_ONERILERI[0], BURC_ONERILERI[3]]}
      />
    </div>
  );
}
