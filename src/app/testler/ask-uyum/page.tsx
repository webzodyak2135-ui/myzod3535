"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Wie verhältst du dich bei Streitigkeiten?",
    secenekler: [
      { text: "Ich suche sofort nach einer Lösung", puan: 3 },
      { text: "Ich brauche Zeit zum Abkühlen", puan: 2 },
      { text: "Ich drücke meine Gefühle offen aus", puan: 2 },
      { text: "Ich versuche das Thema zu wechseln", puan: 1 },
    ]
  },
  {
    soru: "Was ist das Wichtigste in einer Beziehung?",
    secenekler: [
      { text: "Vertrauen und Loyalität", puan: 3 },
      { text: "Leidenschaft und Aufregung", puan: 2 },
      { text: "Freiheit und Unabhängigkeit", puan: 2 },
      { text: "Finanzielle Sicherheit", puan: 1 },
    ]
  },
  {
    soru: "Wie oft möchtest du Zeit mit deinem Partner verbringen?",
    secenekler: [
      { text: "Jeden Tag, so viel wie möglich", puan: 2 },
      { text: "Ausgewogen, ich brauche auch meine Zeit", puan: 3 },
      { text: "Wochenenden reichen", puan: 2 },
      { text: "Nicht zu oft, Qualität ist wichtig", puan: 2 },
    ]
  },
  {
    soru: "Machst du deinem Partner Überraschungen?",
    secenekler: [
      { text: "Ja, oft!", puan: 3 },
      { text: "An besonderen Tagen", puan: 2 },
      { text: "Selten", puan: 1 },
      { text: "Ich mag keine Überraschungen", puan: 1 },
    ]
  },
  {
    soru: "Wie ist dein Kommunikationsstil in der Beziehung?",
    secenekler: [
      { text: "Offen und direkt", puan: 3 },
      { text: "Sanft und indirekt", puan: 2 },
      { text: "Emotional und intensiv", puan: 2 },
      { text: "Still, ich zeige es durch Handlungen", puan: 1 },
    ]
  },
  {
    soru: "Wie ist deine Beziehung zu den Freunden deines Partners?",
    secenekler: [
      { text: "Sehr gut, ich bin mit allen befreundet", puan: 3 },
      { text: "Gut, wir treffen uns in sozialen Umgebungen", puan: 2 },
      { text: "Distanziert, ich bevorzuge meine eigenen Freunde", puan: 1 },
      { text: "Ich möchte sie nicht kennenlernen", puan: 0 },
    ]
  },
];

export default function AskUyumTestiPage() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [toplam, setToplam] = useState(0);
  const [sonuc, setSonuc] = useState<number | null>(null);

  const handleCevap = (puan: number) => {
    const yeniToplam = toplam + puan;
    setToplam(yeniToplam);

    if (currentSoru < SORULAR.length - 1) {
      setCurrentSoru(currentSoru + 1);
    } else {
      const yuzde = Math.round((yeniToplam / (SORULAR.length * 3)) * 100);
      setSonuc(yuzde);
    }
  };

  const resetTest = () => {
    setCurrentSoru(0);
    setToplam(0);
    setSonuc(null);
  };

  const getSonucYorum = (yuzde: number) => {
    if (yuzde >= 85) return { baslik: "Perfekte Harmonie!", emoji: "💕", yorum: "Eure Beziehung ist in wunderbarer Harmonie! Ihr versteht und unterstützt einander." };
    if (yuzde >= 70) return { baslik: "Starke Harmonie", emoji: "💖", yorum: "Eure Beziehung ist auf soliden Grundlagen aufgebaut. Mit kleinen Verbesserungen könnt ihr Perfektion erreichen." };
    if (yuzde >= 55) return { baslik: "Gute Harmonie", emoji: "💗", yorum: "Eure Beziehung läuft gut. Durch Stärkung der Kommunikation könnt ihr sie noch verbessern." };
    if (yuzde >= 40) return { baslik: "Entwicklungsfähig", emoji: "💛", yorum: "Es gibt Bereiche in eurer Beziehung, an denen gearbeitet werden sollte. Offene Kommunikation ist wichtig." };
    return { baslik: "Aufmerksamkeit Erforderlich", emoji: "🧡", yorum: "Ihr solltet wichtige Themen in eurer Beziehung besprechen. Professionelle Unterstützung könnte hilfreich sein." };
  };

  if (sonuc !== null) {
    const yorum = getSonucYorum(sonuc);
    return (
      <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)", padding: "4rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{yorum.emoji}</div>
            <div style={{ width: "140px", height: "140px", borderRadius: "50%", background: `conic-gradient(#ffffff ${sonuc}%, rgba(255,255,255,0.2) 0%)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
              <div style={{ width: "110px", height: "110px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff" }}>{sonuc}%</span>
              </div>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>{yorum.baslik}</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2rem" }}>{yorum.yorum}</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", color: "#ec4899", borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
                Erneut Versuchen
              </button>
              <Link href="/iliskiler/burc-uyumu" style={{ padding: "0.75rem 1.5rem", background: "rgba(255,255,255,0.2)", color: "#ffffff", borderRadius: "9999px", fontWeight: 600, textDecoration: "none" }}>
                Sternzeichen-Kompatibilität
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
      <section style={{ background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Testler</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>💕 Aşk Uyum Testi</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Sevgilinizle uyumunuzu ölçün</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>Soru {currentSoru + 1} / {SORULAR.length}</span>
            <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>{Math.round(((currentSoru + 1) / SORULAR.length) * 100)}%</span>
          </div>
          <div style={{ height: "8px", background: "#ffffff", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${((currentSoru + 1) / SORULAR.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #ec4899, #f43f5e)", transition: "width 0.3s ease" }} />
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
                onClick={() => handleCevap(secenek.puan)}
                style={{ padding: "1.25rem", background: "#1a0b2e", border: "2px solid #ffffff", borderRadius: "16px", fontSize: "1rem", color: "#ffffff", cursor: "pointer", textAlign: "left", transition: "all 0.2s ease" }}
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
