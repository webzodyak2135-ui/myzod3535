"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Tartışmalarda nasıl davranırsınız?",
    secenekler: [
      { text: "Hemen çözüm ararım", puan: 3 },
      { text: "Biraz soğumak için zaman isterim", puan: 2 },
      { text: "Duygularımı açıkça ifade ederim", puan: 2 },
      { text: "Konuyu değiştirmeye çalışırım", puan: 1 },
    ]
  },
  {
    soru: "İlişkide en önemli şey nedir?",
    secenekler: [
      { text: "Güven ve sadakat", puan: 3 },
      { text: "Tutku ve heyecan", puan: 2 },
      { text: "Özgürlük ve bağımsızlık", puan: 2 },
      { text: "Maddi güvence", puan: 1 },
    ]
  },
  {
    soru: "Partnerinizle ne sıklıkla vakit geçirmek istersiniz?",
    secenekler: [
      { text: "Her gün, mümkün olduğunca çok", puan: 2 },
      { text: "Dengeli, kendi zamanım da olsun", puan: 3 },
      { text: "Hafta sonları yeterli", puan: 2 },
      { text: "Çok sık değil, kalite önemli", puan: 2 },
    ]
  },
  {
    soru: "Sevgilinize sürpriz yapar mısınız?",
    secenekler: [
      { text: "Evet, sık sık!", puan: 3 },
      { text: "Özel günlerde", puan: 2 },
      { text: "Nadiren", puan: 1 },
      { text: "Sürprizleri sevmem", puan: 1 },
    ]
  },
  {
    soru: "İlişkide iletişim tarzınız nasıl?",
    secenekler: [
      { text: "Açık ve doğrudan", puan: 3 },
      { text: "Nazik ve dolaylı", puan: 2 },
      { text: "Duygusal ve yoğun", puan: 2 },
      { text: "Sessiz, davranışlarla gösteririm", puan: 1 },
    ]
  },
  {
    soru: "Partnerinizin arkadaşlarıyla ilişkiniz nasıl?",
    secenekler: [
      { text: "Çok iyi, hepsiyle arkadaşım", puan: 3 },
      { text: "İyi, sosyal ortamlarda görüşürüz", puan: 2 },
      { text: "Mesafeli, kendi arkadaşlarımı tercih ederim", puan: 1 },
      { text: "Tanışmak istemem", puan: 0 },
    ]
  },
];

export default function AskUyumuTestiPage() {
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
    if (yuzde >= 85) return { baslik: "Mükemmel Uyum!", emoji: "💕", yorum: "İlişkiniz harika bir uyum içinde! Birbirinizi anlıyor ve destekliyorsunuz." };
    if (yuzde >= 70) return { baslik: "Güçlü Uyum", emoji: "💖", yorum: "İlişkiniz sağlam temeller üzerine kurulu. Küçük iyileştirmelerle mükemmele ulaşabilirsiniz." };
    if (yuzde >= 55) return { baslik: "İyi Uyum", emoji: "💗", yorum: "İlişkiniz iyi gidiyor. İletişimi güçlendirerek daha da iyileştirebilirsiniz." };
    if (yuzde >= 40) return { baslik: "Gelişime Açık", emoji: "💛", yorum: "İlişkinizde çalışılması gereken alanlar var. Açık iletişim önemli." };
    return { baslik: "Dikkat Gerekli", emoji: "🧡", yorum: "İlişkinizde önemli konuları konuşmanız gerekebilir. Profesyonel destek düşünebilirsiniz." };
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
                Tekrar Dene
              </button>
              <Link href="/iliskiler/burc-uyumu" style={{ padding: "0.75rem 1.5rem", background: "rgba(255,255,255,0.2)", color: "#ffffff", borderRadius: "9999px", fontWeight: 600, textDecoration: "none" }}>
                Burç Uyumu
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
