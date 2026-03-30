import Link from "next/link";
import { generateWeeklyHoroscopeBatch } from "@/lib/ai-content";
import RelatedCards from "@/components/RelatedCards";
import { BURC_ONERILERI, ILISKI_ONERILERI } from "@/components/related-cards-data";

export const revalidate = 604800;

const BURCLAR = [
  { name: "Widder", emoji: "♈", slug: "koc", color: "#ef4444", haftalik: "Diese Woche bringt dich Mars in Bewegung. Starte endlich die Projekte, die du aufgeschoben hast. Mitte der Woche könnten überraschende Chancen auftauchen." },
  { name: "Stier", emoji: "♉", slug: "boga", color: "#ffffff", haftalik: "Mit der Unterstützung von Venus hast du diese Woche Glück in Themen wie Ästhetik und Genuss. Eine gute Phase für finanzielle Entscheidungen." },
  { name: "Zwillinge", emoji: "♊", slug: "ikizler", color: "#eab308", haftalik: "Der Einfluss der Merkur-Retrograde lässt nach, Kommunikationsprobleme lösen sich. Ideal für kurze Reisen und neues Lernen." },
  { name: "Krebs", emoji: "♋", slug: "yengec", color: "#3b82f6", haftalik: "Durch die Mondbewegungen kannst du emotionale Schwankungen spüren. Themen rund um Zuhause, Deko oder Umzug können aufkommen." },
  { name: "Löwe", emoji: "♌", slug: "aslan", color: "#f97316", haftalik: "Mit der Kraft der Sonne stehst du diese Woche im Mittelpunkt. Anerkennung ist möglich. In der Liebe: leidenschaftliche Momente." },
  { name: "Jungfrau", emoji: "♍", slug: "basak", color: "#84cc16", haftalik: "Deine analytischen Fähigkeiten glänzen. Perfekt für Ordnung, Optimierung und Verbesserungsprojekte im Job." },
  { name: "Waage", emoji: "♎", slug: "terazi", color: "#ec4899", haftalik: "Venus belebt deine Beziehungen. Gute Woche für Gespräche, Kooperationen und Partnerschaften." },
  { name: "Skorpion", emoji: "♏", slug: "akrep", color: "#8b5cf6", haftalik: "Der Transformationsprozess geht weiter. Zeit, alte Gewohnheiten loszulassen und dich neu auszurichten." },
  { name: "Schütze", emoji: "♐", slug: "yay", color: "#f43f5e", haftalik: "Mit Jupiters Glück klopfen diese Woche Chancen an. Auslandskontakte, Bildung und Wachstumsthemen stehen im Fokus." },
  { name: "Steinbock", emoji: "♑", slug: "oglak", color: "#6366f1", haftalik: "Verantwortung steigt, aber auch die Belohnung ist nah. Gute Woche für Karriereschritte und langfristige Planung." },
  { name: "Wassermann", emoji: "♒", slug: "kova", color: "#ffffff", haftalik: "Uranus kann unerwartete Veränderungen bringen. Freunde, Community und soziale Aktivitäten sind besonders präsent." },
  { name: "Fische", emoji: "♓", slug: "balik", color: "#a855f7", haftalik: "Neptun stärkt deine Vorstellungskraft. Eine inspirierende Woche für Kunst, Spiritualität und kreative Projekte." },
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

  const weekLabel = `${weekStart.toLocaleDateString("de-DE", { day: "2-digit", month: "long" })} - ${weekEnd.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })}`;

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
            📅 Wochenhoroskop
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
            Was sagen die Sterne diese Woche?
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
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ef4444", marginBottom: "0.3rem" }}>❤️ LIEBE</div>
                        <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.ask}</div>
                      </div>
                    )}
                    {burc.kariyer && (
                      <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.3rem" }}>💼 KARRIERE</div>
                        <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.kariyer}</div>
                      </div>
                    )}
                    {burc.saglik && (
                      <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", gridColumn: "1 / -1" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.3rem" }}>🌿 GESUNDHEIT</div>
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
                    Details lesen →
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
              🌅 Tageshoroskop
            </Link>
            <Link href="/burclar/aylik" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              🗓️ Monatshoroskop
            </Link>
            <Link href="/burclar" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              ♈ Alle Sternzeichen
            </Link>
          </div>
        </div>
      </section>

      <RelatedCards
        title="Das könnte dich interessieren"
        items={[BURC_ONERILERI[0], BURC_ONERILERI[2], ILISKI_ONERILERI[0], BURC_ONERILERI[3]]}
      />
    </div>
  );
}
