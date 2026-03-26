"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Çalışma ortamı tercihin hangisi?",
    secenekler: [
      { text: "Ofis, düzenli çalışma saatleri", tip: "geleneksel" },
      { text: "Evden çalışma, esnek saatler", tip: "bagimsiz" },
      { text: "Sürekli hareket, saha çalışması", tip: "maceraci" },
      { text: "Yaratıcı stüdyo, sanatsal ortam", tip: "yaratici" },
    ]
  },
  {
    soru: "Bir projede hangi rolü tercih edersin?",
    secenekler: [
      { text: "Lider, yönlendiren", tip: "lider" },
      { text: "Analist, araştıran", tip: "analist" },
      { text: "Yaratıcı, fikir üreten", tip: "yaratici" },
      { text: "Destekçi, uyum sağlayan", tip: "destekci" },
    ]
  },
  {
    soru: "Başarı senin için ne demek?",
    secenekler: [
      { text: "Maddi güvence ve statü", tip: "geleneksel" },
      { text: "Özgürlük ve bağımsızlık", tip: "bagimsiz" },
      { text: "Yaratıcı tatmin ve ifade", tip: "yaratici" },
      { text: "İnsanlara yardım etmek", tip: "destekci" },
    ]
  },
  {
    soru: "Stresli durumlarla nasıl başa çıkarsın?",
    secenekler: [
      { text: "Planlama ve organize olma", tip: "analist" },
      { text: "Harekete geçme, çözüm bulma", tip: "lider" },
      { text: "Yaratıcı çözümler düşünme", tip: "yaratici" },
      { text: "Destek alma, paylaşma", tip: "destekci" },
    ]
  },
  {
    soru: "İdeal iş gününde ne yaparsın?",
    secenekler: [
      { text: "Toplantılar, kararlar, yönetim", tip: "lider" },
      { text: "Araştırma, analiz, raporlama", tip: "analist" },
      { text: "Tasarım, yazı, sanat", tip: "yaratici" },
      { text: "İnsanlarla iletişim, yardım", tip: "destekci" },
    ]
  },
];

const KARIYER_SONUCLARI: Record<string, { baslik: string; aciklama: string; meslekler: string[]; burclar: string[] }> = {
  lider: {
    baslik: "Lider Ruh",
    aciklama: "Doğal liderlik özelliklerine sahipsin. İnsanları yönlendirmek ve büyük kararlar almak sana göre.",
    meslekler: ["CEO / Yönetici", "Girişimci", "Proje Yöneticisi", "Politikacı", "Avukat"],
    burclar: ["Koç", "Aslan", "Oğlak"]
  },
  analist: {
    baslik: "Analitik Zeka",
    aciklama: "Detaylara hakimsin ve analitik düşünme yeteneğin güçlü. Veri ve araştırma senin alanın.",
    meslekler: ["Veri Analisti", "Araştırmacı", "Mühendis", "Finansçı", "Bilim İnsanı"],
    burclar: ["Başak", "Akrep", "Kova"]
  },
  yaratici: {
    baslik: "Yaratıcı Ruh",
    aciklama: "Sanatsal yeteneklerin ve yaratıcılığın ön planda. Kendini ifade etmek senin için önemli.",
    meslekler: ["Tasarımcı", "Yazar", "Müzisyen", "Fotoğrafçı", "Reklamcı"],
    burclar: ["Balık", "Terazi", "Aslan"]
  },
  destekci: {
    baslik: "Yardımsever Ruh",
    aciklama: "İnsanlara yardım etmek seni mutlu ediyor. Empati ve iletişim yeteneklerin güçlü.",
    meslekler: ["Psikolog", "Öğretmen", "Hemşire", "Sosyal Hizmet Uzmanı", "İK Uzmanı"],
    burclar: ["Yengeç", "Balık", "Terazi"]
  },
  bagimsiz: {
    baslik: "Özgür Ruh",
    aciklama: "Bağımsızlık ve özgürlük senin için vazgeçilmez. Kendi kurallarınla çalışmak istiyorsun.",
    meslekler: ["Freelancer", "Danışman", "Dijital Göçebe", "Yatırımcı", "İçerik Üretici"],
    burclar: ["Yay", "Kova", "İkizler"]
  },
  geleneksel: {
    baslik: "İstikrar Arayan",
    aciklama: "Güvenlik ve istikrar senin için önemli. Düzenli ve planlı çalışmayı seviyorsun.",
    meslekler: ["Bankacı", "Devlet Memuru", "Muhasebeci", "Hukukçu", "Yönetici Asistanı"],
    burclar: ["Boğa", "Oğlak", "Başak"]
  },
  maceraci: {
    baslik: "Maceracı Ruh",
    aciklama: "Monotonluk sana göre değil. Sürekli hareket ve yeni deneyimler arıyorsun.",
    meslekler: ["Pilot", "Turizm Rehberi", "Gazeteci", "Satış Temsilcisi", "Etkinlik Organizatörü"],
    burclar: ["Yay", "Koç", "İkizler"]
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
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>🎯 Önerilen Meslekler</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {kariyer.meslekler.map((m, i) => (
                  <span key={i} style={{ padding: "0.4rem 0.8rem", background: "rgba(255,255,255,0.2)", borderRadius: "9999px", color: "#ffffff", fontSize: "0.85rem" }}>{m}</span>
                ))}
              </div>
            </div>
            
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>♈ Uyumlu Burçlar</h3>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem" }}>{kariyer.burclar.join(", ")}</p>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", color: "#ffffff", borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
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
      <section style={{ background: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Testler</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>💼 Kariyer Testi</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Yıldızlar hangi kariyeri işaret ediyor?</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>Soru {currentSoru + 1} / {SORULAR.length}</span>
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
