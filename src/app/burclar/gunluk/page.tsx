import Link from "next/link";
import { unstable_cache } from "next/cache";
import { generateDailyHoroscopeBatch } from "@/lib/ai-content";
import RelatedCards from "@/components/RelatedCards";
import { BURC_ONERILERI, ILISKI_ONERILERI } from "@/components/related-cards-data";

export const runtime = "edge";
export const dynamic = "force-dynamic";

function getBerlinDateISO(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

const getCachedDailyHoroscopeBatch = unstable_cache(
  async (dateISO: string, signs: string[]) =>
    generateDailyHoroscopeBatch({
      dateISO,
      signs,
    }),
  ["daily-horoscope-batch"],
  {
    revalidate: 86400,
  }
);

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
    name: "Widder",
    emoji: "♈",
    slug: "koc",
    color: "#ef4444",
    gunluk: "Heute ist deine Energie hoch! Ein idealer Tag, um neue Projekte zu starten. Geh mutig voran.",
    ask: "Sei offen für romantische Überraschungen",
    kariyer: "Deine Führungsqualitäten treten in den Vordergrund",
    saglik: "Ein großartiger Tag für körperliche Aktivität",
    sans: 8
  },
  {
    name: "Stier",
    emoji: "♉",
    slug: "boga",
    color: "#ffffff",
    gunluk: "In finanziellen Dingen gibt es positive Entwicklungen. Bleib geduldig – deine Mühe zahlt sich aus.",
    ask: "Vertrauen steht im Mittelpunkt",
    kariyer: "Finanzielle Chancen stehen vor der Tür",
    saglik: "Achte auf eine ausgewogene Ernährung",
    sans: 7
  },
  {
    name: "Zwillinge",
    emoji: "♊",
    slug: "ikizler",
    color: "#eab308",
    gunluk: "Deine Kommunikationsfähigkeit ist auf dem Höhepunkt. Dein Umfeld erweitert sich – knüpfe neue Kontakte.",
    ask: "Gespräche können romantisch werden",
    kariyer: "Ein idealer Tag fürs Networking",
    saglik: "Du brauchst mentale Erholung",
    sans: 9
  },
  {
    name: "Krebs",
    emoji: "♋",
    slug: "yengec",
    color: "#3b82f6",
    gunluk: "Familie und Zuhause stehen im Vordergrund. Kehr nach innen zurück und höre auf deine emotionalen Bedürfnisse.",
    ask: "Emotionale Bindungen werden stärker",
    kariyer: "Homeoffice läuft besonders effizient",
    saglik: "Achte auf emotionales Gleichgewicht",
    sans: 6
  },
  {
    name: "Löwe",
    emoji: "♌",
    slug: "aslan",
    color: "#f97316",
    gunluk: "Deine Kreativität ist auf dem Höhepunkt! Zeit zu glänzen. Zögere nicht, dich zu zeigen.",
    ask: "Leidenschaftliche Momente erwarten dich",
    kariyer: "Anerkennung und Wertschätzung sind möglich",
    saglik: "Achte auf deine Herzgesundheit",
    sans: 9
  },
  {
    name: "Jungfrau",
    emoji: "♍",
    slug: "basak",
    color: "#84cc16",
    gunluk: "Fokussiere dich auf Details – dein Perfektionismus zahlt sich aus. Ein Tag für Ordnung und Struktur.",
    ask: "Kleine Gesten können viel bedeuten",
    kariyer: "Deine analytischen Stärken glänzen",
    saglik: "Schaffe gesunde Routinen",
    sans: 7
  },
  {
    name: "Waage",
    emoji: "♎",
    slug: "terazi",
    color: "#ec4899",
    gunluk: "Beziehungen und Partnerschaften stehen im Fokus. Deine Suche nach Balance und Harmonie trägt Früchte.",
    ask: "Die romantische Stimmung ist intensiv",
    kariyer: "Gut für Kooperationen und Partnerschaften",
    saglik: "Ästhetische Aktivitäten tun dir gut",
    sans: 8
  },
  {
    name: "Skorpion",
    emoji: "♏",
    slug: "akrep",
    color: "#8b5cf6",
    gunluk: "Tiefe Veränderungen sind im Gange. Deine Intuition ist stark – höre auf deine innere Stimme.",
    ask: "Intensive emotionale Verbindungen",
    kariyer: "Ein Tag für Recherche und Analyse",
    saglik: "Gute Zeit für Detox",
    sans: 7
  },
  {
    name: "Schütze",
    emoji: "♐",
    slug: "yay",
    color: "#f43f5e",
    gunluk: "Dein Abenteuergeist erwacht! Sei offen für neue Erfahrungen und erweitere deinen Horizont.",
    ask: "Fernbeziehungen können ein Thema sein",
    kariyer: "Chancen für Bildung und Weiterentwicklung",
    saglik: "Verbringe Zeit an der frischen Luft",
    sans: 9
  },
  {
    name: "Steinbock",
    emoji: "♑",
    slug: "oglak",
    color: "#6366f1",
    gunluk: "Deine Karriereziele werden klarer. Diszipliniertes Arbeiten wird belohnt.",
    ask: "Ernste Beziehungen stehen im Vordergrund",
    kariyer: "Chance auf Beförderung und Anerkennung",
    saglik: "Achte auf Knochen und Gelenke",
    sans: 8
  },
  {
    name: "Wassermann",
    emoji: "♒",
    slug: "kova",
    color: "#ffffff",
    gunluk: "Du hast innovative Ideen! Community-Themen und Freundschaften stehen im Fokus.",
    ask: "Von Freundschaft zu Liebe",
    kariyer: "Technologie-Projekte glänzen",
    saglik: "Achte auf Knöchel und Kreislauf",
    sans: 8
  },
  {
    name: "Fische",
    emoji: "♓",
    slug: "balik",
    color: "#a855f7",
    gunluk: "Deine intuitive Kraft ist hoch. Achte auf deine Träume – sie können Botschaften enthalten.",
    ask: "Starke Seelenpartner-Energie",
    kariyer: "Ideal für künstlerische Projekte",
    saglik: "Meditation und Ruhe",
    sans: 7
  },
];

export default async function GunlukBurclarPage() {
  const now = new Date();
  const todayISO = getBerlinDateISO(now);
  const aiHoroscopes = await getCachedDailyHoroscopeBatch(
    todayISO,
    BURCLAR.map((burc) => burc.slug)
  );

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

  const today = now.toLocaleDateString('de-DE', {
    timeZone: 'Europe/Berlin',
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
            <span style={{ fontSize: "1.1rem" }}>🌅</span> Tageshoroskope
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
            Was sagen die Sterne heute?
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
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>❤️ LIEBE</div>
                      <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.ask}</div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>💼 KARRIERE</div>
                      <div style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.5 }}>{burc.kariyer}</div>
                    </div>
                    <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", gridColumn: "1 / -1" }}>
                      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>🌿 GESUNDHEIT</div>
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
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            Weitere Horoskop-Arten
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/burclar/haftalik" style={{ padding: "0.75rem 1.5rem", background: "rgba(168, 85, 247, 0.15)", borderRadius: "9999px", color: "#ffffff", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
              📅 Wochenhoroskop
            </Link>
            <Link href="/burclar/aylik" style={{ padding: "0.75rem 1.5rem", background: "rgba(168, 85, 247, 0.15)", borderRadius: "9999px", color: "#ffffff", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
              🗓️ Monatshoroskop
            </Link>
            <Link href="/burclar" style={{ padding: "0.75rem 1.5rem", background: "rgba(168, 85, 247, 0.15)", borderRadius: "9999px", color: "#ffffff", fontWeight: 600, textDecoration: "none", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
              ♈ Alle Sternzeichen
            </Link>
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="Das könnte dich interessieren"
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
