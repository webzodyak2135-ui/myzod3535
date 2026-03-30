"use client";

import Link from "next/link";

type CardItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  gradient: string;
};

type RelatedCardsProps = {
  title?: string;
  items: CardItem[];
};

export default function RelatedCards({ title = "Das Könnte Dich Interessieren", items }: RelatedCardsProps) {
  return (
    <section style={{
      padding: "3rem 1rem",
      background: "#1a0b2e",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Star particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {[[8, 15], [20, 75], [35, 40], [50, 85], [65, 20], [80, 60], [92, 35]].map(([top, left], i) => (
          <div key={i} style={{ position: "absolute", top: `${top}%`, left: `${left}%`, width: "2px", height: "2px", borderRadius: "50%", background: "#ffffff", opacity: 0.5 }} />
        ))}
      </div>
      <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span style={{
            display: "inline-block",
            padding: "0.5rem 1.25rem",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            borderRadius: "9999px",
            color: "#ffffff",
            fontSize: "0.85rem",
            fontWeight: 600,
            marginBottom: "1rem",
            boxShadow: "0 4px 15px rgba(168,85,247,0.4)",
          }}>
            ✨ Entdecken
          </span>
          <h2 style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-0.02em",
          }}>
            {title}
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem"
        }}>
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              style={{
                display: "block",
                background: "rgba(168,85,247,0.1)",
                borderRadius: "20px",
                padding: "1.5rem",
                textDecoration: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                border: "1px solid rgba(168,85,247,0.2)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(168,85,247,0.3)";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)";
              }}
            >
              {/* Gradient accent */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: item.gradient,
              }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: item.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#f1f5f9",
                    marginBottom: "0.5rem",
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: "0.9rem",
                    color: "#94a3b8",
                    lineHeight: 1.5,
                    margin: 0,
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Arrow indicator */}
              <div style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(168,85,247,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#c4b5fd",
                fontSize: "1rem",
              }}>
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Preset card collections for different categories
export const BURC_ONERILERI: CardItem[] = [
  { title: "Tageshoroskop", description: "Was erwartet dich heute?", href: "/burclar/gunluk", icon: "☀️", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
  { title: "Wochenhoroskop", description: "Wie ist deine Energie diese Woche?", href: "/burclar/haftalik", icon: "📅", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
  { title: "Monatshoroskop", description: "Was bringt dir dieser Monat?", href: "/burclar/aylik", icon: "🌙", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Kompatibilität", description: "Mit welchen Sternzeichen passt du zusammen?", href: "/burclar/uyum", icon: "💕", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
];

export const ILISKI_ONERILERI: CardItem[] = [
  { title: "Paar-Kompatibilitätsanalyse", description: "Detaillierte, KI-gestützte Analyse", href: "/iliskiler/cift-uyumu", icon: "💑", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Flirt-Tipps", description: "Flirt-Guide nach Sternzeichen", href: "/iliskiler/flort", icon: "😊", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
  { title: "Ehe-Tipps", description: "Was sagen die Sterne zur Ehe?", href: "/iliskiler/evlilik", icon: "💍", gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)" },
  { title: "Seelenverwandtschaft", description: "Wie du deine Seelenverbindung erkennst", href: "/iliskiler/soulmate", icon: "✨", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
];

export const RUYA_ONERILERI: CardItem[] = [
  { title: "Traum analysieren", description: "Analysiere deinen Traum mit KI", href: "/ruya/yorumla", icon: "🔮", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Liebesträume", description: "Die Bedeutung romantischer Träume", href: "/ruya/ask", icon: "💕", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Albträume", description: "Das Geheimnis erschreckender Träume", href: "/ruya/kabus", icon: "👻", gradient: "linear-gradient(135deg, #64748b 0%, #475569 100%)" },
  { title: "Traumlexikon", description: "Traumsymbole von A bis Z", href: "/ruya/sozluk", icon: "📖", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
];

export const GOK_ONERILERI: CardItem[] = [
  { title: "Retrograde-Tracker", description: "Behalte Retrograden im Blick", href: "/gok/retrograde", icon: "🔄", gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)" },
  { title: "Mondkalender", description: "Mondphasen und ihre Wirkung", href: "/gok/ay-takvimi", icon: "🌙", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
  { title: "Sonnenfinsternis", description: "Bevorstehende Sonnenfinsternisse", href: "/gok/gunes-tutulmasi", icon: "🌑", gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" },
  { title: "Planetenpositionen", description: "Aktuelle Planetenstände", href: "/gok/gezegenler", icon: "🪐", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
];

export const TEST_ONERILERI: CardItem[] = [
  { title: "Liebes-Kompatibilitätstest", description: "Wie gut passt ihr zusammen?", href: "/testler/ask-uyumu", icon: "💕", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Persönlichkeitstest", description: "Astrologische Persönlichkeitsanalyse", href: "/testler/kisilik", icon: "🧠", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Karriere-Test", description: "Welcher Beruf passt zu dir?", href: "/testler/kariyer", icon: "💼", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
  { title: "Numerologie-Test", description: "Das Geheimnis der Zahlen", href: "/testler/numeroloji", icon: "🔢", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
];

export const GENEL_ONERILERI: CardItem[] = [
  { title: "Tageshoroskop", description: "Was erwartet dich heute?", href: "/burclar/gunluk", icon: "☀️", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
  { title: "Traum analysieren", description: "Analysiere deinen Traum mit KI", href: "/ruya/yorumla", icon: "🔮", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Paar-Kompatibilität", description: "Analysiere eure Beziehung", href: "/iliskiler/cift-uyumu", icon: "💑", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Geburtshoroskop", description: "Entdecke deine persönliche Karte", href: "/burclar/dogum-haritasi", icon: "🗺️", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
];
