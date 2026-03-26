"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Meditasyon veya içsel pratiklerle ilişkin nasıl?",
    secenekler: [
      { text: "Düzenli pratik yapıyorum", puan: 4 },
      { text: "Ara sıra deniyorum", puan: 3 },
      { text: "İlgimi çekiyor ama yapmıyorum", puan: 2 },
      { text: "Hiç ilgilenmiyorum", puan: 1 },
    ]
  },
  {
    soru: "Sezgilerine ne kadar güvenirsin?",
    secenekler: [
      { text: "Tamamen, her zaman dinlerim", puan: 4 },
      { text: "Çoğunlukla güvenirim", puan: 3 },
      { text: "Bazen dikkate alırım", puan: 2 },
      { text: "Mantığa daha çok güvenirim", puan: 1 },
    ]
  },
  {
    soru: "Doğayla bağlantın nasıl?",
    secenekler: [
      { text: "Çok derin, doğada huzur bulurum", puan: 4 },
      { text: "Doğayı severim, sık sık çıkarım", puan: 3 },
      { text: "Ara sıra doğaya çıkarım", puan: 2 },
      { text: "Şehir hayatını tercih ederim", puan: 1 },
    ]
  },
  {
    soru: "Başkalarının duygularını hisseder misin?",
    secenekler: [
      { text: "Evet, çok güçlü hissederim (empatik)", puan: 4 },
      { text: "Genellikle fark ederim", puan: 3 },
      { text: "Bazen fark ederim", puan: 2 },
      { text: "Pek fark etmem", puan: 1 },
    ]
  },
  {
    soru: "Rüyalarınla ilişkin nasıl?",
    secenekler: [
      { text: "Çok canlı, anlamlı rüyalar görürüm", puan: 4 },
      { text: "Rüyalarımı hatırlar, yorumlarım", puan: 3 },
      { text: "Bazen hatırlarım", puan: 2 },
      { text: "Nadiren hatırlarım", puan: 1 },
    ]
  },
  {
    soru: "Hayatın anlamı hakkında ne düşünürsün?",
    secenekler: [
      { text: "Derin spiritüel bir amacımız var", puan: 4 },
      { text: "Bir anlam arayışı içindeyim", puan: 3 },
      { text: "Bazen düşünürüm", puan: 2 },
      { text: "Pratik yaşama odaklanırım", puan: 1 },
    ]
  },
  {
    soru: "Tesadüflere nasıl bakarsın?",
    secenekler: [
      { text: "Evrenin mesajları, senkronisite", puan: 4 },
      { text: "Anlamlı olabilir diye düşünürüm", puan: 3 },
      { text: "Bazen dikkat çeker", puan: 2 },
      { text: "Sadece tesadüf", puan: 1 },
    ]
  },
];

const getSeviye = (puan: number) => {
  const yuzde = Math.round((puan / (SORULAR.length * 4)) * 100);
  if (yuzde >= 85) return { seviye: "Uyanmış Ruh", emoji: "🌟", renk: "#a855f7", aciklama: "Spiritüel farkındalığın çok yüksek. Derin bir içsel bilgeliğe sahipsin." };
  if (yuzde >= 70) return { seviye: "Arayan Ruh", emoji: "✨", renk: "#8b5cf6", aciklama: "Spiritüel yolculuğunda ilerliyorsun. Sezgilerin güçleniyor." };
  if (yuzde >= 55) return { seviye: "Keşfeden Ruh", emoji: "🔮", renk: "#6366f1", aciklama: "Spiritüel dünyaya ilgi duyuyorsun. Potansiyelin büyük." };
  if (yuzde >= 40) return { seviye: "Uyanan Ruh", emoji: "🌙", renk: "#818cf8", aciklama: "Spiritüel uyanış sürecinin başındasın. Merak etmeye devam et." };
  return { seviye: "Topraklanmış Ruh", emoji: "🌍", renk: "#ffffff", aciklama: "Pratik ve gerçekçi bir bakış açısına sahipsin. Bu da değerli." };
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
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>🧘 Gelişim Önerileri</h3>
              <ul style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
                <li>Günlük meditasyon pratiği başlat</li>
                <li>Rüya günlüğü tut</li>
                <li>Doğada daha fazla vakit geçir</li>
                <li>Sezgilerini dinlemeye çalış</li>
              </ul>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", color: seviyeBilgi.renk, borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
                Tekrar Dene
              </button>
              <Link href="/testler" style={{ padding: "0.75rem 1.5rem", background: "rgba(255,255,255,0.2)", color: "#ffffff", borderRadius: "9999px", fontWeight: 600, textDecoration: "none" }}>
                Diğer Testler
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
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Testler</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>🧘 Ruhsal Olgunluk Testi</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Spiritüel gelişim seviyeniz</p>
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
