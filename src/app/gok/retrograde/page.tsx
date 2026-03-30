"use client";

import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";
import { GOK_ONERILERI, BURC_ONERILERI } from "@/components/related-cards-data";

const RETROGRADE_GEZEGENLERI = [
  {
    gezegen: "Merkur Rückläufig",
    emoji: "☿️",
    sure: "3-4 Mal pro Jahr, je ~3 Wochen",
    etki: "Kommunikation, Technologie, Reisen, Verträge",
    yapma: ["Neue Verträge unterzeichnen", "Große Technikkäufe", "Wichtige Entscheidungen", "Neuen Job beginnen"],
    yap: ["Alte Projekte abschließen", "Alte Freunde kontaktieren", "Überprüfen und korrigieren", "Backups erstellen"]
  },
  {
    gezegen: "Venus Rückläufig",
    emoji: "♀️",
    sure: "Alle 18 Monate, ~40 Tage",
    etki: "Liebe, Beziehungen, Geld, Werte, Schönheit",
    yapma: ["Neue Beziehung beginnen", "Heiraten", "Schönheits-OPs", "Große Ausgaben"],
    yap: ["Alte Beziehungen bewerten", "Werte hinterfragen", "Selbstliebe entwickeln", "Finanzcheck"]
  },
  {
    gezegen: "Mars Rückläufig",
    emoji: "♂️",
    sure: "Alle 2 Jahre, ~2,5 Monate",
    etki: "Energie, Motivation, Wut, Sexualität, Wettbewerb",
    yapma: ["Neue Sportroutine", "Aggressive Entscheidungen", "Streitigkeiten", "Riskante Unternehmungen"],
    yap: ["Energiemanagement überprüfen", "Wutmanagement üben", "Strategien neu bewerten", "Ausruhen"]
  },
  {
    gezegen: "Jupiter Rückläufig",
    emoji: "♃",
    sure: "~4 Monate pro Jahr",
    etki: "Wachstum, Glück, Philosophie, Ausland, Bildung",
    yapma: ["Übermäßige Expansion", "Riskante Investitionen", "Übertriebene Pläne"],
    yap: ["Auf inneres Wachstum fokussieren", "Glaubenssätze hinterfragen", "Dankbarkeitspraxis", "Weiterlernen"]
  },
  {
    gezegen: "Saturn Rückläufig",
    emoji: "♄",
    sure: "~4,5 Monate pro Jahr",
    etki: "Verantwortung, Disziplin, Grenzen, Karma, Struktur",
    yapma: ["Verantwortung meiden", "Strukturen zerstören", "Mit Autorität kollidieren"],
    yap: ["Verantwortlichkeiten bewerten", "Grenzen überprüfen", "Karmische Lektionen verstehen", "Disziplin entwickeln"]
  },
];

const GUNCEL_RETROGRADELER = [
  { gezegen: "Merkur", durum: "Direkt", sonrakiRetro: "18. Juli 2026" },
  { gezegen: "Venus", durum: "Direkt", sonrakiRetro: "27. November 2026" },
  { gezegen: "Mars", durum: "Direkt", sonrakiRetro: "7. Juni 2027" },
  { gezegen: "Jupiter", durum: "Direkt", sonrakiRetro: "10. November 2026" },
  { gezegen: "Saturn", durum: "Direkt", sonrakiRetro: "14. Juli 2026" },
];

export default function RetrogradePage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 40%, #a78bfa 100%)",
          padding: "5rem 1rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(167,139,250,0.3)", filter: "blur(100px)" }} />
          {["↩️", "🪐", "✨", "💫", "🌟", "⭐"].map((item, i) => (
            <div key={i} style={{ position: "absolute", top: `${15 + (i * 14) % 70}%`, left: `${8 + (i * 16) % 84}%`, fontSize: `${1.5 + (i % 3) * 0.5}rem`, opacity: 0.4, animation: `float ${4 + i * 0.7}s ease-in-out infinite` }}>{item}</div>
          ))}
        </div>
        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/gok-gundemi" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Kosmischer Kalender
          </Link>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
            <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", filter: "blur(30px)" }} />
            <div style={{ fontSize: "5rem", position: "relative", filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))" }}>↩️</div>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", textShadow: "0 4px 30px rgba(0,0,0,0.2)", letterSpacing: "-0.02em" }}>
            Rückläufige Phasen
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Auswirkungen rückläufiger Planeten und Überlebensguide
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* Güncel Durum */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Aktueller Rückläufigkeits-Status
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
            {GUNCEL_RETROGRADELER.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderTop: `4px solid ${item.durum === "Retrograde" ? "#ef4444" : "#22c55e"}`,
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>{item.gezegen}</h3>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    background: item.durum === "Retrograde" ? "#1a0b2e" : "#1a0b2e",
                    color: item.durum === "Retrograde" ? "#991b1b" : "#166534",
                  }}
                >
                  {item.durum}
                </span>
                <p style={{ fontSize: "0.8rem", color: "#ffffff", marginTop: "0.5rem" }}>Nächste: {item.sonrakiRetro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retrograde Rehberi */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Rückläufigkeits-Guide
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {RETROGRADE_GEZEGENLERI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.gezegen}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>{item.sure}</p>
                  </div>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", marginBottom: "1rem" }}>
                  <strong>Betroffene Bereiche:</strong> {item.etki}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px" }}>
                    <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#991b1b", marginBottom: "0.5rem" }}>❌ Vermeide</h4>
                    <ul style={{ fontSize: "0.8rem", color: "#7f1d1d", paddingLeft: "1rem", lineHeight: 1.6 }}>
                      {item.yapma.map((y, j) => <li key={j}>{y}</li>)}
                    </ul>
                  </div>
                  <div style={{ padding: "1rem", background: "#1a0b2e", borderRadius: "12px" }}>
                    <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>✓ Tue dies</h4>
                    <ul style={{ fontSize: "0.8rem", color: "#ffffff", paddingLeft: "1rem", lineHeight: 1.6 }}>
                      {item.yap.map((y, j) => <li key={j}>{y}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="Das könnte dich interessieren"
        items={[
          ...GOK_ONERILERI.filter(item => item.href !== "/gok/retrograde"),
          BURC_ONERILERI[0]
        ].slice(0, 4)}
      />
    </div>
  );
}
