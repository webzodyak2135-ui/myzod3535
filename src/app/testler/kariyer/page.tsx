"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Was ist deine bevorzugte Arbeitsumgebung?",
    secenekler: [
      { text: "Büro, regelmäßige Arbeitszeiten", tip: "geleneksel" },
      { text: "Homeoffice, flexible Zeiten", tip: "bagimsiz" },
      { text: "Ständige Bewegung, Außendienst", tip: "maceraci" },
      { text: "Kreatives Studio, künstlerische Umgebung", tip: "yaratici" },
    ]
  },
  {
    soru: "Welche Rolle bevorzugst du in einem Projekt?",
    secenekler: [
      { text: "Führer, Leitender", tip: "lider" },
      { text: "Analyst, Forscher", tip: "analist" },
      { text: "Kreativer, Ideengeber", tip: "yaratici" },
      { text: "Unterstützer, Harmonisierer", tip: "destekci" },
    ]
  },
  {
    soru: "Was bedeutet Erfolg für dich?",
    secenekler: [
      { text: "Finanzielle Sicherheit und Status", tip: "geleneksel" },
      { text: "Freiheit und Unabhängigkeit", tip: "bagimsiz" },
      { text: "Kreative Erfüllung und Ausdruck", tip: "yaratici" },
      { text: "Menschen helfen", tip: "destekci" },
    ]
  },
  {
    soru: "Wie gehst du mit stressigen Situationen um?",
    secenekler: [
      { text: "Planung und Organisation", tip: "analist" },
      { text: "Handeln, Lösungen finden", tip: "lider" },
      { text: "Kreative Lösungen denken", tip: "yaratici" },
      { text: "Unterstützung suchen, teilen", tip: "destekci" },
    ]
  },
  {
    soru: "Was machst du an einem idealen Arbeitstag?",
    secenekler: [
      { text: "Meetings, Entscheidungen, Management", tip: "lider" },
      { text: "Forschung, Analyse, Berichterstattung", tip: "analist" },
      { text: "Design, Schreiben, Kunst", tip: "yaratici" },
      { text: "Kommunikation mit Menschen, Hilfe", tip: "destekci" },
    ]
  },
];

const KARIYER_SONUCLARI: Record<string, { baslik: string; aciklama: string; meslekler: string[]; burclar: string[] }> = {
  lider: {
    baslik: "Führer-Seele",
    aciklama: "Du hast natürliche Führungsqualitäten. Menschen zu leiten und große Entscheidungen zu treffen liegt dir.",
    meslekler: ["CEO / Manager", "Unternehmer", "Projektmanager", "Politiker", "Anwalt"],
    burclar: ["Widder", "Löwe", "Steinbock"]
  },
  analist: {
    baslik: "Analytischer Verstand",
    aciklama: "Du beherrschst Details und hast starke analytische Denkfähigkeiten. Daten und Forschung sind dein Bereich.",
    meslekler: ["Datenanalyst", "Forscher", "Ingenieur", "Finanzexperte", "Wissenschaftler"],
    burclar: ["Jungfrau", "Skorpion", "Wassermann"]
  },
  yaratici: {
    baslik: "Kreative Seele",
    aciklama: "Deine künstlerischen Talente und Kreativität stehen im Vordergrund. Dich auszudrücken ist dir wichtig.",
    meslekler: ["Designer", "Autor", "Musiker", "Fotograf", "Werbefachmann"],
    burclar: ["Fische", "Waage", "Löwe"]
  },
  destekci: {
    baslik: "Hilfsbereite Seele",
    aciklama: "Menschen zu helfen macht dich glücklich. Deine Empathie- und Kommunikationsfähigkeiten sind stark.",
    meslekler: ["Psychologe", "Lehrer", "Krankenschwester", "Sozialarbeiter", "HR-Spezialist"],
    burclar: ["Krebs", "Fische", "Waage"]
  },
  bagimsiz: {
    baslik: "Freie Seele",
    aciklama: "Unabhängigkeit und Freiheit sind für dich unverzichtbar. Du möchtest nach deinen eigenen Regeln arbeiten.",
    meslekler: ["Freelancer", "Berater", "Digitaler Nomade", "Investor", "Content Creator"],
    burclar: ["Schütze", "Wassermann", "Zwillinge"]
  },
  geleneksel: {
    baslik: "Stabilitätssuchend",
    aciklama: "Sicherheit und Stabilität sind dir wichtig. Du liebst regelmäßiges und geplantes Arbeiten.",
    meslekler: ["Banker", "Beamter", "Buchhalter", "Jurist", "Assistenz der Geschäftsführung"],
    burclar: ["Stier", "Steinbock", "Jungfrau"]
  },
  maceraci: {
    baslik: "Abenteurer-Seele",
    aciklama: "Monotonie ist nichts für dich. Du suchst ständige Bewegung und neue Erfahrungen.",
    meslekler: ["Pilot", "Reiseleiter", "Journalist", "Vertriebsmitarbeiter", "Eventorganisator"],
    burclar: ["Schütze", "Widder", "Zwillinge"]
  },
};

export default function KariyerTestiPage() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState<string[]>([]);
  const [sonuc, setSonuc] = useState<string | null>(null);

  const handleCevap = (tip: string) => {
    const yeniCevaplar = [...cevaplar, tip];
    setCevaplar(yeniCevaplar);

    if (currentSoru < SORULAR.length - 1) {
      setCurrentSoru(currentSoru + 1);
    } else {
      // En çok seçilen tipi bul
      const sayim: Record<string, number> = {};
      yeniCevaplar.forEach(c => { sayim[c] = (sayim[c] || 0) + 1; });
      const enCok = Object.entries(sayim).sort((a, b) => b[1] - a[1])[0][0];
      setSonuc(enCok);
    }
  };

  const resetTest = () => {
    setCurrentSoru(0);
    setCevaplar([]);
    setSonuc(null);
  };

  if (sonuc) {
    const kariyer = KARIYER_SONUCLARI[sonuc];
    return (
      <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)", padding: "4rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>💼</div>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>{kariyer.baslik}</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>{kariyer.aciklama}</p>

            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>🎯 Empfohlene Berufe</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {kariyer.meslekler.map((m, i) => (
                  <span key={i} style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.2)", borderRadius: "9999px", color: "#ffffff", fontSize: "0.85rem" }}>{m}</span>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>♈ Kompatible Sternzeichen</h3>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem" }}>{kariyer.burclar.join(", ")}</p>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", color: "#ffffff", borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
                Nochmal versuchen
              </button>
              <Link href="/testler" style={{ padding: "0.75rem 1.5rem", background: "rgba(255,255,255,0.2)", color: "#ffffff", borderRadius: "9999px", fontWeight: 600, textDecoration: "none" }}>
                Andere Tests
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const soru = SORULAR[currentSoru];

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Tests</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>💼 Karriere-Test</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Welche Karriere zeigen die Sterne für dich?</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>Frage {currentSoru + 1} / {SORULAR.length}</span>
          </div>
          <div style={{ height: "8px", background: "#ffffff", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${((currentSoru + 1) / SORULAR.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #0891b2, #06b6d4)", transition: "width 0.3s ease" }} />
          </div>
        </div>
      </div>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>{soru.soru}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {soru.secenekler.map((secenek, i) => (
              <button
                key={i}
                onClick={() => handleCevap(secenek.tip)}
                style={{ padding: "1.25rem", background: "#1a0b2e", border: "2px solid #ffffff", borderRadius: "16px", fontSize: "1rem", color: "#ffffff", cursor: "pointer", textAlign: "left" }}
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
