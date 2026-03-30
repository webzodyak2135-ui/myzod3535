"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Welche historische Epoche zieht dich am meisten an?",
    secenekler: [
      { text: "Altes Ägypten - Pyramiden, Pharaonen", donem: "misir" },
      { text: "Mittelalter - Ritter, Burgen", donem: "ortacag" },
      { text: "Renaissance - Kunst, Wissenschaft, Entdeckung", donem: "ronesans" },
      { text: "Viktorianische Ära - Eleganz, Industrie", donem: "viktorya" },
    ]
  },
  {
    soru: "Hast du eine unerklarliche Angst oder Phobie?",
    secenekler: [
      { text: "Angst vor Wasser oder Ertrinken", donem: "denizci" },
      { text: "Höhenangst oder Angst vor dem Fallen", donem: "savasci" },
      { text: "Angst vor Dunkelheit oder geschlossenen Räumen", donem: "mahkum" },
      { text: "Angst vor Feuer", donem: "cadi" },
    ]
  },
  {
    soru: "Welche Geografie zieht dich mehr an?",
    secenekler: [
      { text: "Wüsten und Pyramiden", donem: "misir" },
      { text: "Wälder und Burgen", donem: "ortacag" },
      { text: "Meere und Schiffe", donem: "denizci" },
      { text: "Berge und Tempel", donem: "tibet" },
    ]
  },
  {
    soru: "Welches Thema siehst du häufig in deinen Träumen?",
    secenekler: [
      { text: "Krieg, Kampfszenen", donem: "savasci" },
      { text: "Paläste, königliche Umgebungen", donem: "viktorya" },
      { text: "Natur, Tiere, Heilung", donem: "saman" },
      { text: "Mysterien, Rituale, Magie", donem: "cadi" },
    ]
  },
  {
    soru: "Welches Talent fühlt sich für dich natürlich an?",
    secenekler: [
      { text: "Heilung, Menschen helfen", donem: "saman" },
      { text: "Führung, Strategie", donem: "savasci" },
      { text: "Kunst, Kreativität", donem: "ronesans" },
      { text: "Intuition, Spiritualität", donem: "tibet" },
    ]
  },
];

const GECMIS_YASAM_SONUCLARI: Record<string, { baslik: string; donem: string; hikaye: string; ders: string }> = {
  misir: {
    baslik: "Altägyptischer Priester/Priesterin",
    donem: "Altes Ägypten, 2000 v. Chr.",
    hikaye: "Du warst ein Priester/eine Priesterin, der/die in den großen Tempeln am Nil diente. Du hattest Zugang zu geheimem Wissen und lasest die Sterne.",
    ders: "Die Lektion aus diesem Leben: Weisheit teilen und spirituelle Führung."
  },
  ortacag: {
    baslik: "Mittelalterlicher Ritter",
    donem: "Mittelalterliches Europa, 1200er",
    hikaye: "Du warst ein Ritter, der mit Ehre und Mut kämpfte. Treu zu deinem König, ein Krieger, der sein Volk beschützte.",
    ders: "Die Lektion aus diesem Leben: Ehre, Loyalität und Schutzinstinkt."
  },
  ronesans: {
    baslik: "Renaissance-Künstler",
    donem: "Italien, 1500er",
    hikaye: "Du warst ein talentierter Künstler, der in Florenz lebte. Du beschäftigtest dich mit Malerei, Bildhauerei oder Musik.",
    ders: "Die Lektion aus diesem Leben: Kreativität und Schönheit in die Welt bringen."
  },
  viktorya: {
    baslik: "Viktorianischer Aristokrat",
    donem: "England, 1800er",
    hikaye: "Du lebtest in einem eleganten Herrenhaus und hattest eine angesehene Position in der Gesellschaft.",
    ders: "Die Lektion aus diesem Leben: Eleganz, Etikette und soziale Verantwortung."
  },
  denizci: {
    baslik: "Entdecker-Seemann",
    donem: "Zeitalter der Entdeckungen, 1500er",
    hikaye: "Du warst ein mutiger Seemann, der in unbekannte Meere segelte. Du entdecktest neue Welten.",
    ders: "Die Lektion aus diesem Leben: Abenteurergeist und Mut, sich dem Unbekannten zu öffnen."
  },
  savasci: {
    baslik: "Antiker Krieger",
    donem: "Antikes Rom/Griechenland",
    hikaye: "Du warst ein Krieger, der an großen Schlachten teilnahm und für seinen Mut und seine Stärke bekannt war.",
    ders: "Die Lektion aus diesem Leben: Mut, Stärke und Schutzinstinkt."
  },
  saman: {
    baslik: "Schamane/Heiler",
    donem: "Alte Stämme",
    hikaye: "Du warst der Heiler und spirituelle Führer des Stammes. Du hattest eine tiefe Verbindung zur Natur.",
    ders: "Die Lektion aus diesem Leben: Heilkraft und Harmonie mit der Natur."
  },
  tibet: {
    baslik: "Tibetischer Mönch",
    donem: "Tibet, 1000er",
    hikaye: "Du warst ein Mönch, der in einem Kloster auf dem Berggipfel lebte und sich mit Meditation und Weisheit beschäftigte.",
    ders: "Die Lektion aus diesem Leben: Innerer Frieden, Meditation und spirituelle Erleuchtung."
  },
  cadi: {
    baslik: "Weise Frau/Heilerin",
    donem: "Mittelalterliches Europa",
    hikaye: "Du warst eine weise Frau, die mit Kräutern heilte und die Geheimnisse der Natur kannte.",
    ders: "Die Lektion aus diesem Leben: Intuition, natürliche Heilung und innere Stärke."
  },
  mahkum: {
    baslik: "Freiheitskämpfer",
    donem: "Verschiedene Epochen",
    hikaye: "Du warst eine starke Seele, die für die Freiheit kämpfte und unter schwierigen Bedingungen überlebte.",
    ders: "Die Lektion aus diesem Leben: Widerstandsfähigkeit und Liebe zur Freiheit."
  },
};

export default function GecmisYasamTestiPage() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState<string[]>([]);
  const [sonuc, setSonuc] = useState<string | null>(null);

  const handleCevap = (donem: string) => {
    const yeniCevaplar = [...cevaplar, donem];
    setCevaplar(yeniCevaplar);

    if (currentSoru < SORULAR.length - 1) {
      setCurrentSoru(currentSoru + 1);
    } else {
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
    const yasam = GECMIS_YASAM_SONUCLARI[sonuc];
    return (
      <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", padding: "4rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔮</div>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem" }}>{yasam.donem}</p>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>{yasam.baslik}</h1>

            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#a78bfa", marginBottom: "0.75rem" }}>📜 Ihre frühere Lebensgeschichte</h3>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.7 }}>{yasam.hikaye}</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fbbf24", marginBottom: "0.75rem" }}>✨ Karmische Lektion</h3>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.7 }}>{yasam.ders}</p>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", color: "#312e81", borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
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
      <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Tests</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>🔮 Früheres Leben Test</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Entdecken Sie Ihr früheres Leben</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ height: "8px", background: "#ffffff", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${((currentSoru + 1) / SORULAR.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #1e1b4b, #312e81)", transition: "width 0.3s ease" }} />
          </div>
        </div>
      </div>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>{soru.soru}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {soru.secenekler.map((secenek, i) => (
              <button key={i} onClick={() => handleCevap(secenek.donem)} style={{ padding: "1.25rem", background: "#1a0b2e", border: "2px solid #ffffff", borderRadius: "16px", fontSize: "1rem", color: "#ffffff", cursor: "pointer", textAlign: "left" }}>
                {secenek.text}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
