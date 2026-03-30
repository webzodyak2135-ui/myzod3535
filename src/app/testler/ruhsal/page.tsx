"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Wie ist deine Beziehung zu Meditation oder inneren Praktiken?",
    secenekler: [
      { text: "Ich praktiziere regelmäßig", puan: 4 },
      { text: "Ich probiere es gelegentlich", puan: 3 },
      { text: "Es interessiert mich, aber ich mache es nicht", puan: 2 },
      { text: "Ich interessiere mich nicht dafür", puan: 1 },
    ]
  },
  {
    soru: "Wie sehr vertraust du deiner Intuition?",
    secenekler: [
      { text: "Vollständig, ich höre immer darauf", puan: 4 },
      { text: "Meistens vertraue ich ihr", puan: 3 },
      { text: "Manchmal berücksichtige ich sie", puan: 2 },
      { text: "Ich vertraue mehr der Logik", puan: 1 },
    ]
  },
  {
    soru: "Wie ist deine Verbindung zur Natur?",
    secenekler: [
      { text: "Sehr tief, ich finde Frieden in der Natur", puan: 4 },
      { text: "Ich liebe die Natur, gehe oft raus", puan: 3 },
      { text: "Gelegentlich gehe ich in die Natur", puan: 2 },
      { text: "Ich bevorzuge das Stadtleben", puan: 1 },
    ]
  },
  {
    soru: "Spürst du die Gefühle anderer?",
    secenekler: [
      { text: "Ja, ich spüre sie sehr stark (empathisch)", puan: 4 },
      { text: "Normalerweise bemerke ich sie", puan: 3 },
      { text: "Manchmal bemerke ich sie", puan: 2 },
      { text: "Ich bemerke sie kaum", puan: 1 },
    ]
  },
  {
    soru: "Wie ist deine Beziehung zu deinen Träumen?",
    secenekler: [
      { text: "Sehr lebhaft, ich habe bedeutungsvolle Träume", puan: 4 },
      { text: "Ich erinnere und deute meine Träume", puan: 3 },
      { text: "Manchmal erinnere ich mich", puan: 2 },
      { text: "Ich erinnere mich selten", puan: 1 },
    ]
  },
  {
    soru: "Was denkst du über den Sinn des Lebens?",
    secenekler: [
      { text: "Wir haben einen tiefen spirituellen Zweck", puan: 4 },
      { text: "Ich bin auf der Suche nach Bedeutung", puan: 3 },
      { text: "Manchmal denke ich darüber nach", puan: 2 },
      { text: "Ich konzentriere mich auf das praktische Leben", puan: 1 },
    ]
  },
  {
    soru: "Wie siehst du Zufälle?",
    secenekler: [
      { text: "Botschaften des Universums, Synchronizität", puan: 4 },
      { text: "Ich denke, sie könnten bedeutungsvoll sein", puan: 3 },
      { text: "Manchmal fallen sie mir auf", puan: 2 },
      { text: "Nur Zufall", puan: 1 },
    ]
  },
];

const getSeviye = (puan: number) => {
  const yuzde = Math.round((puan / (SORULAR.length * 4)) * 100);
  if (yuzde >= 85) return { seviye: "Erwachte Seele", emoji: "🌟", renk: "#a855f7", aciklama: "Dein spirituelles Bewusstsein ist sehr hoch. Du besitzt tiefe innere Weisheit." };
  if (yuzde >= 70) return { seviye: "Suchende Seele", emoji: "✨", renk: "#8b5cf6", aciklama: "Du machst Fortschritte auf deiner spirituellen Reise. Deine Intuition wird stärker." };
  if (yuzde >= 55) return { seviye: "Entdeckende Seele", emoji: "🔮", renk: "#6366f1", aciklama: "Du interessierst dich für die spirituelle Welt. Dein Potenzial ist groß." };
  if (yuzde >= 40) return { seviye: "Erwachende Seele", emoji: "🌙", renk: "#818cf8", aciklama: "Du bist am Anfang des spirituellen Erwachens. Bleib neugierig." };
  return { seviye: "Geerdete Seele", emoji: "🌍", renk: "#ffffff", aciklama: "Du hast eine praktische und realistische Perspektive. Das ist auch wertvoll." };
};

export default function RuhsalOlgunlukTestiPage() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [toplam, setToplam] = useState(0);
  const [sonuc, setSonuc] = useState<number | null>(null);

  const handleCevap = (puan: number) => {
    const yeniToplam = toplam + puan;
    setToplam(yeniToplam);

    if (currentSoru < SORULAR.length - 1) {
      setCurrentSoru(currentSoru + 1);
    } else {
      setSonuc(yeniToplam);
    }
  };

  const resetTest = () => {
    setCurrentSoru(0);
    setToplam(0);
    setSonuc(null);
  };

  if (sonuc !== null) {
    const seviyeBilgi = getSeviye(sonuc);
    const yuzde = Math.round((sonuc / (SORULAR.length * 4)) * 100);

    return (
      <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
        <section style={{ background: `linear-gradient(135deg, ${seviyeBilgi.renk}dd, ${seviyeBilgi.renk}99)`, padding: "4rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{seviyeBilgi.emoji}</div>
            <div style={{ width: "140px", height: "140px", borderRadius: "50%", background: `conic-gradient(#ffffff ${yuzde}%, rgba(255,255,255,0.2) 0%)`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
              <div style={{ width: "110px", height: "110px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <span style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff" }}>{yuzde}%</span>
              </div>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>{seviyeBilgi.seviye}</h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>{seviyeBilgi.aciklama}</p>

            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>🧘 Entwicklungsempfehlungen</h3>
              <ul style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
                <li>Beginne mit täglicher Meditationspraxis</li>
                <li>Führe ein Traumtagebuch</li>
                <li>Verbringe mehr Zeit in der Natur</li>
                <li>Versuche auf deine Intuition zu hören</li>
              </ul>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", color: seviyeBilgi.renk, borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
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
      <section style={{ background: "linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Tests</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>🧘 Spirituelle Reife Test</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Ihr spirituelles Entwicklungsniveau</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ height: "8px", background: "#ffffff", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${((currentSoru + 1) / SORULAR.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #a855f7, #8b5cf6)", transition: "width 0.3s ease" }} />
          </div>
        </div>
      </div>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>{soru.soru}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {soru.secenekler.map((secenek, i) => (
              <button key={i} onClick={() => handleCevap(secenek.puan)} style={{ padding: "1.25rem", background: "#1a0b2e", border: "2px solid #ffffff", borderRadius: "16px", fontSize: "1rem", color: "#ffffff", cursor: "pointer", textAlign: "left" }}>
                {secenek.text}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
