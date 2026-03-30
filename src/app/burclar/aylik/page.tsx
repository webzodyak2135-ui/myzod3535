import Link from "next/link";
import { generateMonthlyHoroscopeBatch } from "@/lib/ai-content";
import RelatedCards, { BURC_ONERILERI, ILISKI_ONERILERI } from "@/components/RelatedCards";

const BURCLAR = [
  { name: "Widder", emoji: "♈", slug: "koc", color: "#ef4444", aylik: "Diesen Monat stehen Karriere und Ziele im Vordergrund. Neue Jobchancen oder Beförderungsnachrichten sind möglich. Gegen Monatsende gibt es positive Entwicklungen in Beziehungen. Achte auf mehr Bewegung." },
  { name: "Stier", emoji: "♉", slug: "boga", color: "#ffffff", aylik: "Finanzen und Komfort sind diesen Monat besonders wichtig. Wenn du über Haus oder Auto nachdenkst, ist es eine gute Zeit zum Planen. Achte auf Hals- und Nackenbereich." },
  { name: "Zwillinge", emoji: "♊", slug: "ikizler", color: "#eab308", aylik: "Hohe mentale Aktivität: ideal für Kurse, Weiterbildung oder Zertifikate. Deine Präsenz in sozialen Netzwerken kann steigen." },
  { name: "Krebs", emoji: "♋", slug: "yengec", color: "#3b82f6", aylik: "Familie und Wurzeln stehen im Fokus. Abschlüsse mit der Vergangenheit sind möglich. Gute Phase für Immobilien-Themen." },
  { name: "Löwe", emoji: "♌", slug: "aslan", color: "#f97316", aylik: "Kreative Projekte und Spaß stehen im Vordergrund. Gute Nachrichten rund um Kinder sind möglich. Achte auf deine Herzgesundheit." },
  { name: "Jungfrau", emoji: "♍", slug: "basak", color: "#84cc16", aylik: "Gesundheit und Routinen sind zentral. Guter Monat für Ernährung und Sport. Im Job steigt deine Effizienz." },
  { name: "Waage", emoji: "♎", slug: "terazi", color: "#ec4899", aylik: "Beziehungen und Partnerschaften stehen im Vordergrund. Nachrichten zu Verlobung oder Hochzeit sind möglich. In rechtlichen Themen gibt es positive Entwicklungen." },
  { name: "Skorpion", emoji: "♏", slug: "akrep", color: "#8b5cf6", aylik: "Transformation und Erneuerung: gute Zeit für innere Arbeit und Therapie. Erbschaft oder gemeinsame Finanzen können Thema sein." },
  { name: "Schütze", emoji: "♐", slug: "yay", color: "#f43f5e", aylik: "Reisen und Bildung stehen im Fokus. Gute Phase für Publishing- oder Medienprojekte. Philosophische und spirituelle Fragen werden intensiver." },
  { name: "Steinbock", emoji: "♑", slug: "oglak", color: "#6366f1", aylik: "Karriere und Status rücken nach vorn. Beförderung oder Anerkennung sind möglich. Achte auf Knochen und Zähne." },
  { name: "Wassermann", emoji: "♒", slug: "kova", color: "#ffffff", aylik: "Freundschaften und Community-Arbeit stehen im Vordergrund. Social-Media-Projekte glänzen. Zukunftspläne werden klarer." },
  { name: "Fische", emoji: "♓", slug: "balik", color: "#a855f7", aylik: "Spirituelles Wachstum und innere Reise. Kreative Projekte tragen Früchte. Achte auf deine Füße und gönn dir Ruhe." },
];

export default async function AylikBurclarPage() {
  const ay = new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });
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
            🗓️ Monatshoroskop
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
            Was erwartet dich diesen Monat?
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
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: burc.color, marginBottom: "0.25rem" }}>❤️ LIEBE</div>
                        <p style={{ fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.5 }}>{aiData[burc.slug].ask}</p>
                      </div>
                      <div style={{ background: `${burc.color}10`, borderRadius: "10px", padding: "0.6rem" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: burc.color, marginBottom: "0.25rem" }}>💼 KARRIERE</div>
                        <p style={{ fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.5 }}>{aiData[burc.slug].kariyer}</p>
                      </div>
                      <div style={{ background: `${burc.color}10`, borderRadius: "10px", padding: "0.6rem", gridColumn: "1 / -1" }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: burc.color, marginBottom: "0.25rem" }}>🌿 GESUNDHEIT</div>
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
            <Link href="/burclar/haftalik" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              📅 Wochenhoroskop
            </Link>
            <Link href="/burclar" style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", borderRadius: "9999px", color: "#7c3aed", fontWeight: 600, textDecoration: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
              ♈ Alle Sternzeichen
            </Link>
          </div>
        </div>
      </section>

      <RelatedCards
        title="Das könnte dich interessieren"
        items={[BURC_ONERILERI[0], BURC_ONERILERI[1], ILISKI_ONERILERI[0], BURC_ONERILERI[3]]}
      />
    </div>
  );
}
