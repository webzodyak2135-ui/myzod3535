"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Wie verhältst du dich normalerweise auf einer Party?",
    secenekler: [
      { text: "Ich ziehe die Aufmerksamkeit aller auf mich, ich bin im Mittelpunkt", burclar: ["aslan", "koc"] },
      { text: "Ich führe tiefe Gespräche mit kleinen Gruppen", burclar: ["akrep", "balik"] },
      { text: "Ich rede mit allen, ich liebe es zu sozialisieren", burclar: ["ikizler", "terazi"] },
      { text: "Ich sitze in der Ecke und beobachte", burclar: ["basak", "oglak"] },
    ]
  },
  {
    soru: "Was ist deine erste Reaktion in einer stressigen Situation?",
    secenekler: [
      { text: "Ich handle sofort", burclar: ["koc", "yay"] },
      { text: "Ich bleibe ruhig und analysiere", burclar: ["basak", "oglak"] },
      { text: "Ich reagiere emotional", burclar: ["yengec", "balik"] },
      { text: "Ich spreche mit anderen und hole mir Rat", burclar: ["terazi", "ikizler"] },
    ]
  },
  {
    soru: "Was ist dein idealer Urlaubsplan?",
    secenekler: [
      { text: "Eine abenteuerliche Safari oder Bergsteigen", burclar: ["yay", "koc"] },
      { text: "Ein luxuriöses Spa und Entspannung", burclar: ["boga", "terazi"] },
      { text: "Historische Orte und Museen", burclar: ["basak", "oglak"] },
      { text: "Ein friedlicher Rückzug am Meer", burclar: ["yengec", "balik"] },
    ]
  },
  {
    soru: "Welche Rolle übernimmst du am liebsten in einem Projekt?",
    secenekler: [
      { text: "Führer - der Leitende", burclar: ["aslan", "koc"] },
      { text: "Detailorientiert - der Planer", burclar: ["basak", "oglak"] },
      { text: "Kreativ - der Ideengeber", burclar: ["kova", "balik"] },
      { text: "Vermittler - der Harmonisierer", burclar: ["terazi", "ikizler"] },
    ]
  },
  {
    soru: "Wie gehst du mit Geld um?",
    secenekler: [
      { text: "Ich spare gerne, Sicherheit ist wichtig", burclar: ["boga", "oglak"] },
      { text: "Ich lebe im Moment, ich scheue mich nicht auszugeben", burclar: ["aslan", "yay"] },
      { text: "Ich versuche ausgeglichen zu sein", burclar: ["terazi", "basak"] },
      { text: "Ich gebe gerne für andere aus", burclar: ["balik", "yengec"] },
    ]
  },
];

const BURC_BILGILERI: Record<string, { name: string; emoji: string; color: string }> = {
  koc: { name: "Widder", emoji: "♈", color: "#ef4444" },
  boga: { name: "Stier", emoji: "♉", color: "#ffffff" },
  ikizler: { name: "Zwillinge", emoji: "♊", color: "#eab308" },
  yengec: { name: "Krebs", emoji: "♋", color: "#3b82f6" },
  aslan: { name: "Löwe", emoji: "♌", color: "#f97316" },
  basak: { name: "Jungfrau", emoji: "♍", color: "#84cc16" },
  terazi: { name: "Waage", emoji: "♎", color: "#ec4899" },
  akrep: { name: "Skorpion", emoji: "♏", color: "#8b5cf6" },
  yay: { name: "Schütze", emoji: "♐", color: "#f43f5e" },
  oglak: { name: "Steinbock", emoji: "♑", color: "#6366f1" },
  kova: { name: "Wassermann", emoji: "♒", color: "#ffffff" },
  balik: { name: "Fische", emoji: "♓", color: "#a855f7" },
};

export default function BurcTestiPage() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [puanlar, setPuanlar] = useState<Record<string, number>>({});
  const [sonuc, setSonuc] = useState<string | null>(null);

  const handleCevap = (burclar: string[]) => {
    const yeniPuanlar = { ...puanlar };
    burclar.forEach((burc) => {
      yeniPuanlar[burc] = (yeniPuanlar[burc] || 0) + 1;
    });
    setPuanlar(yeniPuanlar);

    if (currentSoru < SORULAR.length - 1) {
      setCurrentSoru(currentSoru + 1);
    } else {
      // Sonucu hesapla
      const enYuksek = Object.entries(yeniPuanlar).sort((a, b) => b[1] - a[1])[0];
      setSonuc(enYuksek[0]);
    }
  };

  const resetTest = () => {
    setCurrentSoru(0);
    setPuanlar({});
    setSonuc(null);
  };

  if (sonuc) {
    const burc = BURC_BILGILERI[sonuc];
    return (
      <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
        <section
          style={{
            background: `linear-gradient(135deg, ${burc.color}dd, ${burc.color}99)`,
            padding: "4rem 1rem",
            textAlign: "center",
            minHeight: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: "500px" }}>
            <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>{burc.emoji}</div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
              {burc.name}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2rem" }}>
              Das Sternzeichen, das am besten zu deiner Persönlichkeit passt!
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href={`/burclar/${sonuc}`}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "#1a0b2e",
                  color: burc.color,
                  borderRadius: "9999px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Dein Sternzeichen entdecken →
              </Link>
              <button
                onClick={resetTest}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Nochmal versuchen
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const soru = SORULAR[currentSoru];

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Tests
          </Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            ♈ Sternzeichen-Test
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>
            Entdecke das Sternzeichen, das am besten zu dir passt
          </p>
        </div>
      </section>

      {/* Progress */}
      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>Frage {currentSoru + 1} / {SORULAR.length}</span>
            <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>{Math.round(((currentSoru + 1) / SORULAR.length) * 100)}%</span>
          </div>
          <div style={{ height: "8px", background: "#ffffff", borderRadius: "4px", overflow: "hidden" }}>
            <div
              style={{
                width: `${((currentSoru + 1) / SORULAR.length) * 100}%`,
                height: "100%",
                background: "linear-gradient(90deg, #a855f7, #7c3aed)",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Soru */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            {soru.soru}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {soru.secenekler.map((secenek, i) => (
              <button
                key={i}
                onClick={() => handleCevap(secenek.burclar)}
                style={{
                  padding: "1.25rem",
                  background: "#1a0b2e",
                  border: "2px solid #ffffff",
                  borderRadius: "16px",
                  fontSize: "1rem",
                  color: "#ffffff",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                {secenek.text}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
