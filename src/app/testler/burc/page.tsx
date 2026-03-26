"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Bir partide genellikle nasıl davranırsın?",
    secenekler: [
      { text: "Herkesin dikkatini çekerim, merkezdeyimdir", burclar: ["aslan", "koc"] },
      { text: "Küçük gruplarla derin sohbetler ederim", burclar: ["akrep", "balik"] },
      { text: "Herkesle konuşurum, sosyalleşmeyi severim", burclar: ["ikizler", "terazi"] },
      { text: "Köşede oturup gözlem yaparım", burclar: ["basak", "oglak"] },
    ]
  },
  {
    soru: "Stresli bir durumda ilk tepkin ne olur?",
    secenekler: [
      { text: "Hemen harekete geçerim", burclar: ["koc", "yay"] },
      { text: "Sakin kalıp analiz ederim", burclar: ["basak", "oglak"] },
      { text: "Duygusal tepki veririm", burclar: ["yengec", "balik"] },
      { text: "Başkalarıyla konuşup fikir alırım", burclar: ["terazi", "ikizler"] },
    ]
  },
  {
    soru: "İdeal tatil planın hangisi?",
    secenekler: [
      { text: "Macera dolu bir safari veya dağcılık", burclar: ["yay", "koc"] },
      { text: "Lüks bir spa ve dinlenme", burclar: ["boga", "terazi"] },
      { text: "Tarihi yerler ve müzeler", burclar: ["basak", "oglak"] },
      { text: "Deniz kenarında huzurlu bir kaçış", burclar: ["yengec", "balik"] },
    ]
  },
  {
    soru: "Bir projede en çok hangi rolü üstlenirsin?",
    secenekler: [
      { text: "Lider - yönlendiren", burclar: ["aslan", "koc"] },
      { text: "Detaycı - planlayan", burclar: ["basak", "oglak"] },
      { text: "Yaratıcı - fikir üreten", burclar: ["kova", "balik"] },
      { text: "Arabulucu - uyum sağlayan", burclar: ["terazi", "ikizler"] },
    ]
  },
  {
    soru: "Para konusunda nasılsın?",
    secenekler: [
      { text: "Biriktirmeyi severim, güvenlik önemli", burclar: ["boga", "oglak"] },
      { text: "Anı yaşarım, harcamaktan çekinmem", burclar: ["aslan", "yay"] },
      { text: "Dengeli olmaya çalışırım", burclar: ["terazi", "basak"] },
      { text: "Başkalarına harcamayı severim", burclar: ["balik", "yengec"] },
    ]
  },
];

const BURC_BILGILERI: Record<string, { name: string; emoji: string; color: string }> = {
  koc: { name: "Koç", emoji: "♈", color: "#ef4444" },
  boga: { name: "Boğa", emoji: "♉", color: "#ffffff" },
  ikizler: { name: "İkizler", emoji: "♊", color: "#eab308" },
  yengec: { name: "Yengeç", emoji: "♋", color: "#3b82f6" },
  aslan: { name: "Aslan", emoji: "♌", color: "#f97316" },
  basak: { name: "Başak", emoji: "♍", color: "#84cc16" },
  terazi: { name: "Terazi", emoji: "♎", color: "#ec4899" },
  akrep: { name: "Akrep", emoji: "♏", color: "#8b5cf6" },
  yay: { name: "Yay", emoji: "♐", color: "#f43f5e" },
  oglak: { name: "Oğlak", emoji: "♑", color: "#6366f1" },
  kova: { name: "Kova", emoji: "♒", color: "#ffffff" },
  balik: { name: "Balık", emoji: "♓", color: "#a855f7" },
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
              {burc.name} Burcu
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", marginBottom: "2rem" }}>
              Kişilik özelliklerine göre en uyumlu olduğun burç!
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
                Burcunu Keşfet →
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
                Tekrar Dene
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
            ← Testler
          </Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            ♈ Burç Testi
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>
            Kişiliğine en uygun burcu keşfet
          </p>
        </div>
      </section>

      {/* Progress */}
      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>Soru {currentSoru + 1} / {SORULAR.length}</span>
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
