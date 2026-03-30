"use client";

import { useState } from "react";
import Link from "next/link";
import RelatedCards from "@/components/RelatedCards";
import { TEST_ONERILERI, BURC_ONERILERI } from "@/components/related-cards-data";

const SORULAR = [
  {
    soru: "Wie fühlst du dich in sozialen Umgebungen?",
    secenekler: [
      { text: "Voller Energie, ich möchte mit allen reden", tip: "E" },
      { text: "Anstrengend, ich bevorzuge kleine Gruppen", tip: "I" },
    ]
  },
  {
    soru: "Worauf vertraust du bei Entscheidungen?",
    secenekler: [
      { text: "Logik und Analyse", tip: "T" },
      { text: "Gefühle und Werte", tip: "F" },
    ]
  },
  {
    soru: "Wie verarbeitest du Informationen?",
    secenekler: [
      { text: "Konkrete Fakten und Details", tip: "S" },
      { text: "Intuition und Möglichkeiten", tip: "N" },
    ]
  },
  {
    soru: "Wie organisierst du dein Leben?",
    secenekler: [
      { text: "Geplant und geordnet", tip: "J" },
      { text: "Flexibel und spontan", tip: "P" },
    ]
  },
  {
    soru: "Wie gehst du mit stressigen Situationen um?",
    secenekler: [
      { text: "Ich analysiere das Problem und suche Lösungen", tip: "T" },
      { text: "Ich teile meine Gefühle und suche Unterstützung", tip: "F" },
    ]
  },
  {
    soru: "Wenn du etwas Neues lernst...",
    secenekler: [
      { text: "Schritt für Schritt, mit praktischen Anwendungen", tip: "S" },
      { text: "Das große Ganze sehen, theoretisch", tip: "N" },
    ]
  },
  {
    soru: "Was machst du in deiner Freizeit?",
    secenekler: [
      { text: "Zeit mit Freunden draußen verbringen", tip: "E" },
      { text: "Zu Hause lesen oder Hobbys nachgehen", tip: "I" },
    ]
  },
  {
    soru: "Wenn du an einem Projekt arbeitest...",
    secenekler: [
      { text: "Ich beende es vor der Deadline", tip: "J" },
      { text: "Ich halte Optionen bis zur letzten Minute offen", tip: "P" },
    ]
  },
];

const KISILIK_TIPLERI: Record<string, { baslik: string; aciklama: string; ozellikler: string[] }> = {
  "INTJ": { baslik: "Stratege", aciklama: "Unabhängig, strategisch denkend, visionär", ozellikler: ["Analytisch", "Entschlossen", "Unabhängig", "Visionär"] },
  "INTP": { baslik: "Logiker", aciklama: "Neugierig, logisch, kreativer Denker", ozellikler: ["Analytisch", "Kreativ", "Objektiv", "Neugierig"] },
  "ENTJ": { baslik: "Kommandeur", aciklama: "Mutig, willensstarker Führer", ozellikler: ["Führer", "Strategisch", "Entschlossen", "Effizient"] },
  "ENTP": { baslik: "Debattierer", aciklama: "Intelligent, neugierig, intellektuell", ozellikler: ["Innovativ", "Strategisch", "Unternehmerisch", "Ehrlich"] },
  "INFJ": { baslik: "Advokat", aciklama: "Ruhig, mystisch, inspirierender Idealist", ozellikler: ["Intuitiv", "Prinzipientreu", "Leidenschaftlich", "Selbstlos"] },
  "INFP": { baslik: "Vermittler", aciklama: "Poetisch, sanft, altruistisch", ozellikler: ["Idealistisch", "Empathisch", "Kreativ", "Leidenschaftlich"] },
  "ENFJ": { baslik: "Protagonist", aciklama: "Charismatisch, inspirierender Führer", ozellikler: ["Charismatisch", "Empathisch", "Zuverlässig", "Selbstlos"] },
  "ENFP": { baslik: "Aktivist", aciklama: "Enthusiastisch, kreativ, sozial", ozellikler: ["Enthusiastisch", "Kreativ", "Sozial", "Freigeist"] },
  "ISTJ": { baslik: "Logistiker", aciklama: "Praktisch, realistisch, zuverlässig", ozellikler: ["Zuverlässig", "Praktisch", "Realistisch", "Verantwortungsvoll"] },
  "ISFJ": { baslik: "Verteidiger", aciklama: "Beschützend, hingebungsvoll, warmherzig", ozellikler: ["Unterstützend", "Zuverlässig", "Geduldig", "Beobachtend"] },
  "ESTJ": { baslik: "Exekutive", aciklama: "Ausgezeichneter Manager, ordnungsliebend", ozellikler: ["Organisiert", "Logisch", "Entschlossen", "Zuverlässig"] },
  "ESFJ": { baslik: "Konsul", aciklama: "Fürsorglich, sozial, beliebt", ozellikler: ["Fürsorglich", "Loyal", "Sensibel", "Sozial"] },
  "ISTP": { baslik: "Virtuose", aciklama: "Mutig, praktischer Experimentator", ozellikler: ["Mutig", "Praktisch", "Beobachtend", "Direkt"] },
  "ISFP": { baslik: "Abenteurer", aciklama: "Flexibel, charmanter Künstler", ozellikler: ["Charmant", "Sensibel", "Neugierig", "Künstlerisch"] },
  "ESTP": { baslik: "Unternehmer", aciklama: "Intelligent, energisch, wahrnehmend", ozellikler: ["Energisch", "Wahrnehmend", "Direkt", "Sozial"] },
  "ESFP": { baslik: "Entertainer", aciklama: "Spontan, energisch, unterhaltsam", ozellikler: ["Spontan", "Energisch", "Unterhaltsam", "Praktisch"] },
};

export default function KisilikTestiPage() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState<string[]>([]);
  const [sonuc, setSonuc] = useState<string | null>(null);

  const handleCevap = (tip: string) => {
    const yeniCevaplar = [...cevaplar, tip];
    setCevaplar(yeniCevaplar);

    if (currentSoru < SORULAR.length - 1) {
      setCurrentSoru(currentSoru + 1);
    } else {
      // Sonucu hesapla
      const E = yeniCevaplar.filter(c => c === "E").length;
      const I = yeniCevaplar.filter(c => c === "I").length;
      const S = yeniCevaplar.filter(c => c === "S").length;
      const N = yeniCevaplar.filter(c => c === "N").length;
      const T = yeniCevaplar.filter(c => c === "T").length;
      const F = yeniCevaplar.filter(c => c === "F").length;
      const J = yeniCevaplar.filter(c => c === "J").length;
      const P = yeniCevaplar.filter(c => c === "P").length;

      const tip = `${E >= I ? "E" : "I"}${N >= S ? "N" : "S"}${T >= F ? "T" : "F"}${J >= P ? "J" : "P"}`;
      setSonuc(tip);
    }
  };

  const resetTest = () => {
    setCurrentSoru(0);
    setCevaplar([]);
    setSonuc(null);
  };

  if (sonuc) {
    const kisilik = KISILIK_TIPLERI[sonuc] || { baslik: "Einzigartig", aciklama: "Eine einzigartige Persönlichkeitskombination", ozellikler: [] };
    return (
      <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)", padding: "4rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "rgba(255,255,255,0.9)", marginBottom: "0.5rem" }}>{sonuc}</div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>{kisilik.baslik}</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>{kisilik.aciklama}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
              {kisilik.ozellikler.map((o, i) => (
                <span key={i} style={{ padding: "0.4rem 1rem", background: "rgba(255,255,255,0.2)", borderRadius: "9999px", color: "#ffffff", fontSize: "0.9rem" }}>{o}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#ffffff", color: "#8b5cf6", borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
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
    <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Tests</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>🎭 Persönlichkeitsanalyse</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Ihre spirituelle Persönlichkeitskarte</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#e0d4ff" }}>Frage {currentSoru + 1} / {SORULAR.length}</span>
            <span style={{ fontSize: "0.85rem", color: "#e0d4ff" }}>{Math.round(((currentSoru + 1) / SORULAR.length) * 100)}%</span>
          </div>
          <div style={{ height: "8px", background: "transparent", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${((currentSoru + 1) / SORULAR.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #8b5cf6, #a855f7)", transition: "width 0.3s ease" }} />
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
                style={{ padding: "1.25rem", background: "transparent", border: "none", borderRadius: "16px", fontSize: "1rem", color: "#ffffff", cursor: "pointer", textAlign: "left", transition: "all 0.2s ease" }}
              >
                {secenek.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="Das könnte dich interessieren"
        items={[
          ...TEST_ONERILERI.filter(item => item.href !== "/testler/kisilik"),
          BURC_ONERILERI[0]
        ].slice(0, 4)}
      />
    </div>
  );
}
