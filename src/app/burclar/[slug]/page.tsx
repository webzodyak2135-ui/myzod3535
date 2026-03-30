import Link from "next/link";
import { notFound } from "next/navigation";
import { generateBurcFullContent } from "@/lib/ai-content";

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    { slug: 'koc' },
    { slug: 'boga' },
    { slug: 'ikizler' },
    { slug: 'yengec' },
    { slug: 'aslan' },
    { slug: 'basak' },
    { slug: 'terazi' },
    { slug: 'akrep' },
    { slug: 'yay' },
    { slug: 'oglak' },
    { slug: 'kova' },
    { slug: 'balik' },
  ];
}

const BURCLAR_DATA: Record<string, {
  name: string;
  emoji: string;
  date: string;
  element: string;
  gezegen: string;
  color: string;
  ozet: string;
  kisilik: string[];
  uyumlu: string[];
  uyumsuz: string[];
  gunluk: string;
  haftalik: string;
  aylik: string;
}> = {
  koc: {
    name: "Widder",
    emoji: "♈",
    date: "21. März - 19. April",
    element: "Feuer",
    gezegen: "Mars",
    color: "#ef4444",
    ozet: "Der Widder ist als erstes Sternzeichen des Tierkreises ein Pionier mit mutigem Charakter. Er ist bekannt für seine natürlichen Führungsqualitäten und grenzenlose Energie.",
    kisilik: ["Mutig und entschlossen", "Natürlicher Anführer", "Energisch und dynamisch", "Wettbewerbsorientiert", "Ehrlich und direkt"],
    uyumlu: ["Löwe", "Schütze", "Zwillinge", "Wassermann"],
    uyumsuz: ["Krebs", "Waage", "Steinbock"],
    gunluk: "Heute ist deine Energie hoch und deine Motivation auf dem Höhepunkt! Ein idealer Tag für Neuanfänge. Scheue dich nicht, mutige Schritte zu gehen, die Sterne unterstützen dich. Im Berufsleben werden deine Führungsqualitäten hervortreten.",
    haftalik: "Diese Woche ist es Zeit für Aktion unter dem Einfluss von Mars. Geh die Projekte an, die du aufgeschoben hast. Mitte der Woche können unerwartete Chancen anklopfen. Sei vorsichtig in finanziellen Angelegenheiten.",
    aylik: "Dieser Monat bringt dir eine karriereorientierte Phase. Du könntest neue Jobchancen oder Beförderungsnachrichten erhalten. Gegen Ende des Monats gibt es positive Entwicklungen in Beziehungen. Lege beim Thema Gesundheit Wert auf Bewegung."
  },
  boga: {
    name: "Stier",
    emoji: "♉",
    date: "20. April - 20. Mai",
    element: "Erde",
    gezegen: "Venus",
    color: "#ffffff",
    ozet: "Der Stier ist bekannt für sein Streben nach Stabilität und Sicherheit. Mit seiner geduldigen, entschlossenen und zuverlässigen Natur bringt er seiner Umgebung Frieden.",
    kisilik: ["Geduldig und entschlossen", "Zuverlässig", "Praktisch denkend", "Kunstliebend", "Loyal und treu"],
    uyumlu: ["Jungfrau", "Steinbock", "Krebs", "Fische"],
    uyumsuz: ["Löwe", "Skorpion", "Wassermann"],
    gunluk: "Es gibt positive Entwicklungen in materiellen Angelegenheiten. Sei geduldig, du wirst die Früchte deiner Arbeit ernten. Heute möchtest du vielleicht in deiner Komfortzone bleiben, aber selbst kleine Schritte machen einen Unterschied.",
    haftalik: "Mit der Unterstützung von Venus hast du diese Woche Glück in Ästhetik- und Schönheitsangelegenheiten. Eine günstige Zeit für finanzielle Investitionen. Vertrauen wird in Beziehungen im Vordergrund stehen.",
    aylik: "Dieser Monat steht im Zeichen materieller Gewinne und Komfort. Wenn du überlegst, ein Haus oder Auto zu kaufen, prüfe dies. Achte gesundheitlich auf Hals und Nacken."
  },
  ikizler: {
    name: "Zwillinge",
    emoji: "♊",
    date: "21. Mai - 20. Juni",
    element: "Luft",
    gezegen: "Merkur",
    color: "#eab308",
    ozet: "Die Zwillinge sind das neugierigste und kommunikativste Sternzeichen des Tierkreises. Sie fallen durch ihre vielseitige Intelligenz und sozialen Fähigkeiten auf.",
    kisilik: ["Neugierig und lernbereit", "Kommunikationsmeister", "Vielseitig", "Witzig", "Anpassungsfähig und flexibel"],
    uyumlu: ["Waage", "Wassermann", "Widder", "Löwe"],
    uyumsuz: ["Jungfrau", "Fische", "Schütze"],
    gunluk: "Deine Kommunikationsfähigkeiten erreichen ihren Höhepunkt. Dein sozialer Kreis erweitert sich, knüpfe neue Verbindungen. Ein Tag des Lernens und Teilens, gib dein Wissen an dein Umfeld weiter.",
    haftalik: "Der Merkur-Rückläufig lässt nach, Kommunikationsprobleme lösen sich. Ideale Woche für Kurzreisen und neues Lernen. Du könntest Nachrichten bezüglich Geschwistern oder Nachbarn erhalten.",
    aylik: "Dieser Monat ist mental sehr aktiv. Eine großartige Zeit für neue Kurse, Ausbildungen oder Zertifikate. Deine Social-Media-Aktivität könnte zunehmen."
  },
  yengec: {
    name: "Krebs",
    emoji: "♋",
    date: "21. Juni - 22. Juli",
    element: "Wasser",
    gezegen: "Mond",
    color: "#3b82f6",
    ozet: "Der Krebs ist bekannt für seine emotionale Tiefe und beschützende Natur. Familie und Heim stehen im Mittelpunkt seines Lebens.",
    kisilik: ["Emotional und intuitiv", "Beschützend", "Familienorientiert", "Kreativ", "Loyal"],
    uyumlu: ["Skorpion", "Fische", "Stier", "Jungfrau"],
    uyumsuz: ["Widder", "Waage", "Steinbock"],
    gunluk: "Familie und Zuhause stehen im Vordergrund. Kehre zu deiner inneren Welt zurück, höre auf deine emotionalen Bedürfnisse. Zeit mit deinen Lieben zu verbringen wird dich aufladen.",
    haftalik: "Mit den Bewegungen des Mondes könntest du emotionale Höhen und Tiefen erleben. Heimdekoration oder Umzugspläne könnten auf der Tagesordnung stehen. Du könntest Nachrichten bezüglich deiner Mutter erhalten.",
    aylik: "Dieser Monat steht im Zeichen von Familie und Wurzeln. Es können Abschlüsse mit der Vergangenheit stattfinden. Günstige Zeit für Immobilieninvestitionen."
  },
  aslan: {
    name: "Löwe",
    emoji: "♌",
    date: "23. Juli - 22. August",
    element: "Feuer",
    gezegen: "Sonne",
    color: "#f97316",
    ozet: "Der Löwe ist das charismatischste und kreativste Sternzeichen des Tierkreises. Er fällt durch seine natürliche Führung und Bühnenpräsenz auf.",
    kisilik: ["Charismatisch", "Kreativ", "Großzügig", "Loyal", "Selbstbewusst"],
    uyumlu: ["Widder", "Schütze", "Zwillinge", "Waage"],
    uyumsuz: ["Stier", "Skorpion", "Wassermann"],
    gunluk: "Deine Kreativität ist auf dem Höhepunkt! Zeit, auf der Bühne zu glänzen. Scheue dich nicht, dich auszudrücken, alle Augen werden auf dir sein.",
    haftalik: "Mit der Kraft der Sonne stehst du diese Woche im Mittelpunkt. Eine Phase der Anerkennung und Wertschätzung. In romantischen Beziehungen erwarten dich leidenschaftliche Momente.",
    aylik: "Dieser Monat steht im Zeichen kreativer Projekte und Unterhaltung. Du könntest schöne Nachrichten bezüglich Kindern erhalten. Achte auf deine Herzgesundheit."
  },
  basak: {
    name: "Jungfrau",
    emoji: "♍",
    date: "23. August - 22. September",
    element: "Erde",
    gezegen: "Merkur",
    color: "#84cc16",
    ozet: "Die Jungfrau ist bekannt für ihre analytische Intelligenz und perfektionistische Natur. Sie zeichnet sich durch ihre Beherrschung von Details und Hilfsbereitschaft aus.",
    kisilik: ["Analytisch", "Perfektionistisch", "Hilfsbereit", "Praktisch", "Fleißig"],
    uyumlu: ["Stier", "Steinbock", "Krebs", "Skorpion"],
    uyumsuz: ["Zwillinge", "Schütze", "Fische"],
    gunluk: "Konzentriere dich auf Details, dein Perfektionismus wird sich auszahlen. Ein Tag für Organisation und Planung. Überprüfe deine Gesundheitsroutinen.",
    haftalik: "Unter dem Einfluss von Merkur glänzen deine analytischen Fähigkeiten. Ideale Woche für Organisations- und Verbesserungsprojekte am Arbeitsplatz.",
    aylik: "Dieser Monat steht im Zeichen von Gesundheit und täglichen Routinen. Günstig, um eine Diät oder ein Trainingsprogramm zu starten. Die Produktivität am Arbeitsplatz steigt."
  },
  terazi: {
    name: "Waage",
    emoji: "♎",
    date: "23. September - 22. Oktober",
    element: "Luft",
    gezegen: "Venus",
    color: "#ec4899",
    ozet: "Die Waage ist bekannt für ihr Streben nach Balance und Harmonie. Sie zeichnet sich durch ihr ästhetisches Verständnis und diplomatische Fähigkeiten aus.",
    kisilik: ["Diplomatisch", "Fair", "Ästhetisch", "Sozial", "Romantisch"],
    uyumlu: ["Zwillinge", "Wassermann", "Löwe", "Schütze"],
    uyumsuz: ["Widder", "Krebs", "Steinbock"],
    gunluk: "Beziehungen und Partnerschaften stehen auf der Tagesordnung. Dein Streben nach Balance und Harmonie wird Früchte tragen. Du könntest Entscheidungen in ästhetischen Angelegenheiten treffen.",
    haftalik: "Mit der Unterstützung von Venus beleben sich romantische Beziehungen. Du könntest Gespräche für Geschäftspartnerschaften führen. Du hast Glück in Kunst- und Schönheitsangelegenheiten.",
    aylik: "Dieser Monat steht im Zeichen von Beziehungen und Partnerschaften. Du könntest Hochzeits- oder Verlobungsnachrichten erhalten. Es gibt positive Entwicklungen in rechtlichen Angelegenheiten."
  },
  akrep: {
    name: "Skorpion",
    emoji: "♏",
    date: "23. Oktober - 21. November",
    element: "Wasser",
    gezegen: "Pluto",
    color: "#8b5cf6",
    ozet: "Der Skorpion ist bekannt für seine tiefe Emotionalität und transformative Kraft. Er fällt durch seine intuitiven Fähigkeiten und Entschlossenheit auf.",
    kisilik: ["Leidenschaftlich", "Entschlossen", "Intuitiv", "Geheimnisvoll", "Loyal"],
    uyumlu: ["Krebs", "Fische", "Jungfrau", "Steinbock"],
    uyumsuz: ["Stier", "Löwe", "Wassermann"],
    gunluk: "Tiefe Transformationen finden statt. Deine Intuition ist stark, höre auf deine innere Stimme. Verborgene Themen könnten ans Licht kommen.",
    haftalik: "Unter dem Einfluss von Pluto setzt sich der Transformationsprozess fort. Zeit, alte Gewohnheiten abzulegen. Partnerschaften in finanziellen Angelegenheiten stehen auf der Tagesordnung.",
    aylik: "Dieser Monat steht im Zeichen von Transformation und Erneuerung. Günstige Zeit für psychologische Vertiefung und Therapie. Erbschaft oder gemeinsame Finanzen stehen auf der Tagesordnung."
  },
  yay: {
    name: "Schütze",
    emoji: "♐",
    date: "22. November - 21. Dezember",
    element: "Feuer",
    gezegen: "Jupiter",
    color: "#f43f5e",
    ozet: "Der Schütze ist bekannt für seine Freiheitsliebe und philosophische Tiefe. Mit seinem Abenteuergeist und Optimismus inspiriert er sein Umfeld.",
    kisilik: ["Freiheitsliebend", "Optimistisch", "Philosophisch", "Abenteuerlustig", "Ehrlich"],
    uyumlu: ["Widder", "Löwe", "Waage", "Wassermann"],
    uyumsuz: ["Zwillinge", "Jungfrau", "Fische"],
    gunluk: "Dein Abenteuergeist erwacht! Sei offen für neue Erfahrungen, erweitere deinen Horizont. Du könntest Verbindungen zu fremden Kulturen und fernen Orten knüpfen.",
    haftalik: "Mit dem Glück von Jupiter klopfen diese Woche Chancen an deine Tür. Auslandsverbindungen und Bildungsthemen stehen im Vordergrund. Positive Entwicklungen in rechtlichen Angelegenheiten.",
    aylik: "Dieser Monat steht im Zeichen von Reisen und Hochschulbildung. Günstige Zeit für Verlags- oder Medienprojekte. Philosophische und spirituelle Suchen intensivieren sich."
  },
  oglak: {
    name: "Steinbock",
    emoji: "♑",
    date: "22. Dezember - 19. Januar",
    element: "Erde",
    gezegen: "Saturn",
    color: "#6366f1",
    ozet: "Der Steinbock ist bekannt für seine Disziplin und zielorientierte Natur. Er zeichnet sich durch seine Karriereleidenschaft und sein Verantwortungsbewusstsein aus.",
    kisilik: ["Diszipliniert", "Ehrgeizig", "Verantwortungsbewusst", "Praktisch", "Geduldig"],
    uyumlu: ["Stier", "Jungfrau", "Skorpion", "Fische"],
    uyumsuz: ["Widder", "Krebs", "Waage"],
    gunluk: "Deine Karriereziele werden klarer. Deine disziplinierte Arbeit wird belohnt werden. Es gibt positive Interaktionen mit Autoritätsfiguren.",
    haftalik: "Unter dem Einfluss von Saturn nehmen die Verantwortlichkeiten zu, aber auch die Belohnungen sind nah. Günstige Woche für Karrieredurchbrüche. Mache langfristige Pläne.",
    aylik: "Dieser Monat steht im Zeichen von Karriere und sozialem Status. Du könntest Beförderungs- oder Anerkennungsnachrichten erhalten. Achte auf deine Knochen- und Zahngesundheit."
  },
  kova: {
    name: "Wassermann",
    emoji: "♒",
    date: "20. Januar - 18. Februar",
    element: "Luft",
    gezegen: "Uranus",
    color: "#ffffff",
    ozet: "Der Wassermann ist bekannt für sein innovatives Denken und seine humanitäre Einstellung. Er fällt durch seine Unabhängigkeitsliebe und Originalität auf.",
    kisilik: ["Innovativ", "Unabhängig", "Humanitär", "Original", "Intellektuell"],
    uyumlu: ["Zwillinge", "Waage", "Widder", "Schütze"],
    uyumsuz: ["Stier", "Löwe", "Skorpion"],
    gunluk: "Du hast innovative Ideen! Gemeinschaftsarbeiten und Freundschaften stehen im Vordergrund. Ein großartiger Tag für Technologieprojekte.",
    haftalik: "Unter dem Einfluss von Uranus könnte es unerwartete Veränderungen geben. Freundesgruppen und soziale Aktivitäten sind intensiv. Günstige Woche für digitale Projekte.",
    aylik: "Dieser Monat steht im Zeichen von Freundschaften und Gemeinschaftsarbeiten. Social-Media-Projekte glänzen. Zukunftspläne werden klarer."
  },
  balik: {
    name: "Fische",
    emoji: "♓",
    date: "19. Februar - 20. März",
    element: "Wasser",
    gezegen: "Neptun",
    color: "#a855f7",
    ozet: "Die Fische sind bekannt für ihre intuitive Tiefe und empathische Natur. Sie zeichnen sich durch ihre künstlerischen Fähigkeiten und spirituelle Verbindung aus.",
    kisilik: ["Intuitiv", "Empathisch", "Kreativ", "Romantisch", "Spirituell"],
    uyumlu: ["Krebs", "Skorpion", "Stier", "Steinbock"],
    uyumsuz: ["Zwillinge", "Jungfrau", "Schütze"],
    gunluk: "Deine intuitiven Kräfte sind hoch. Achte auf deine Träume, du könntest Botschaften erhalten. Idealer Tag für künstlerische und spirituelle Aktivitäten.",
    haftalik: "Unter dem Einfluss von Neptun ist deine Vorstellungskraft grenzenlos. Eine inspirationsreiche Woche für künstlerische Projekte. Günstig für Meditation und innere Reisen.",
    aylik: "Dieser Monat steht im Zeichen spiritueller Entwicklung und innerer Reisen. Künstlerische Projekte tragen Früchte. Achte auf deine Fußgesundheit."
  }
};

export default async function BurcDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const burc = BURCLAR_DATA[slug];

  if (!burc) {
    notFound();
  }

  const aiContent = await generateBurcFullContent({
    slug,
    name: burc.name,
    dateISO: new Date().toISOString().slice(0, 10),
  });

  const gunluk = aiContent?.gunluk ?? burc.gunluk;
  const ask = aiContent?.ask ?? burc.gunluk;
  const kariyer = aiContent?.kariyer ?? burc.gunluk;
  const saglik = aiContent?.saglik ?? burc.gunluk;
  const sans = aiContent?.sans ?? 7;
  const haftalik = aiContent?.haftalik ?? burc.haftalik;
  const aylik = aiContent?.aylik ?? burc.aylik;

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: `linear-gradient(135deg, ${burc.color} 0%, ${burc.color}cc 50%, ${burc.color}99 100%)`,
          padding: "5rem 1rem 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Background Elements */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "10%", left: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)` }} />
          {/* Floating Stars */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${15 + i * 15}%`,
                left: `${10 + i * 15}%`,
                fontSize: "1.5rem",
                opacity: 0.3,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link
            href="/burclar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.9rem",
              marginBottom: "2rem",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            ← Alle Sternzeichen
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            {/* Glowing Icon */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  filter: "blur(20px)",
                }}
              />
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  position: "relative",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2), inset 0 0 30px rgba(255,255,255,0.1)",
                }}
              >
                {burc.emoji}
              </div>
            </div>

            <div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.75rem",
                textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                letterSpacing: "-0.02em",
              }}>
                {burc.name}
              </h1>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontSize: "1.1rem" }}>📅</span> {burc.date}
                </span>
                <span style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontSize: "1.1rem" }}>🔥</span> {burc.element}
                </span>
                <span style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontSize: "1.1rem" }}>🪐</span> {burc.gezegen}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>

            {/* Özet */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>✨</span> Allgemeine Merkmale
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.7 }}>{burc.ozet}</p>
            </div>

            {/* Kişilik */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🎭</span> Persönlichkeitsmerkmale
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {burc.kisilik.map((ozellik, i) => (
                  <span key={i} style={{ padding: "0.4rem 0.8rem", background: `${burc.color}15`, color: burc.color, borderRadius: "9999px", fontSize: "0.85rem", fontWeight: 500 }}>
                    {ozellik}
                  </span>
                ))}
              </div>
            </div>

            {/* Günlük Yorum */}
            <div style={{ background: `linear-gradient(135deg, ${burc.color}10, ${burc.color}20)`, borderRadius: "20px", padding: "1.5rem", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🌅</span> Tageshoroskop
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "1.05rem" }}>{gunluk}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1.25rem" }}>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>❤️ LIEBE</div>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{ask}</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>💼 KARRIERE</div>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{kariyer}</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>🌿 GESUNDHEIT</div>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{saglik}</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>🍀 GLÜCK</div>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: burc.color }}>{sans}</div>
                  <div style={{ fontSize: "0.75rem", color: "#ffffff" }}>/10</div>
                </div>
              </div>
            </div>

            {/* Haftalık Yorum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span> Wochenhoroskop
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8 }}>{haftalik}</p>
            </div>

            {/* Aylık Yorum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🗓️</span> Monatshoroskop
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8 }}>{aylik}</p>
            </div>

            {/* Uyum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>💑</span> Kompatibilität
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>✓ Kompatible Sternzeichen</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {burc.uyumlu.map((b, i) => (
                      <span key={i} style={{ padding: "0.3rem 0.7rem", background: "#1a0b2e", color: "#ffffff", borderRadius: "9999px", fontSize: "0.85rem" }}>{b}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ef4444", marginBottom: "0.5rem" }}>✗ Inkompatible Sternzeichen</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {burc.uyumsuz.map((b, i) => (
                      <span key={i} style={{ padding: "0.3rem 0.7rem", background: "#1a0b2e", color: "#991b1b", borderRadius: "9999px", fontSize: "0.85rem" }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Diğer Burçlar - Yatay Scroll */}
      <section style={{ padding: "2rem 0", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            🔮 Andere Sternzeichen entdecken
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            padding: "0.5rem 1rem 1.5rem",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
          {Object.entries(BURCLAR_DATA)
            .filter(([key]) => key !== slug)
            .map(([key, data]) => (
              <Link
                key={key}
                href={`/burclar/${key}`}
                style={{
                  minWidth: "160px",
                  padding: "1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: `${data.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {data.emoji}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>
                  {data.name}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#ffffff" }}>{data.date}</p>
                <div style={{ display: "flex", gap: "0.25rem", marginTop: "0.5rem" }}>
                  <span style={{ fontSize: "0.7rem", padding: "0.15rem 0.4rem", background: `${data.color}15`, color: data.color, borderRadius: "4px" }}>
                    {data.element}
                  </span>
                </div>
              </Link>
            ))}
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
        </div>
      </section>
    </div>
  );
}
