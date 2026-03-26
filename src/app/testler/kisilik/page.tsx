"use client";

import { useState } from "react";
import Link from "next/link";
import RelatedCards, { TEST_ONERILERI, BURC_ONERILERI } from "@/components/RelatedCards";

const SORULAR = [
  {
    soru: "Sosyal ortamlarda nasıl hissedersin?",
    secenekler: [
      { text: "Enerji dolu, herkesle konuşmak isterim", tip: "E" },
      { text: "Yorucu buluyorum, küçük grupları tercih ederim", tip: "I" },
    ]
  },
  {
    soru: "Karar verirken neye güvenirsin?",
    secenekler: [
      { text: "Mantık ve analiz", tip: "T" },
      { text: "Duygular ve değerler", tip: "F" },
    ]
  },
  {
    soru: "Bilgiyi nasıl işlersin?",
    secenekler: [
      { text: "Somut gerçekler ve detaylar", tip: "S" },
      { text: "Sezgiler ve olasılıklar", tip: "N" },
    ]
  },
  {
    soru: "Hayatını nasıl organize edersin?",
    secenekler: [
      { text: "Planlı ve düzenli", tip: "J" },
      { text: "Esnek ve spontan", tip: "P" },
    ]
  },
  {
    soru: "Stresli durumlarla nasıl başa çıkarsın?",
    secenekler: [
      { text: "Problemi analiz eder, çözüm ararım", tip: "T" },
      { text: "Duygularımı paylaşır, destek ararım", tip: "F" },
    ]
  },
  {
    soru: "Yeni bir şey öğrenirken...",
    secenekler: [
      { text: "Adım adım, pratik uygulamalarla", tip: "S" },
      { text: "Büyük resmi görerek, teorik olarak", tip: "N" },
    ]
  },
  {
    soru: "Boş zamanlarında ne yaparsın?",
    secenekler: [
      { text: "Arkadaşlarla dışarıda vakit geçiririm", tip: "E" },
      { text: "Evde kitap okur veya hobi yaparım", tip: "I" },
    ]
  },
  {
    soru: "Bir proje üzerinde çalışırken...",
    secenekler: [
      { text: "Son tarihe kadar beklemeden bitiririm", tip: "J" },
      { text: "Son dakikaya kadar seçenekleri açık tutarım", tip: "P" },
    ]
  },
];

const KISILIK_TIPLERI: Record<string, { baslik: string; aciklama: string; ozellikler: string[] }> = {
  "INTJ": { baslik: "Stratejist", aciklama: "Bağımsız, stratejik düşünen, vizyoner", ozellikler: ["Analitik", "Kararlı", "Bağımsız", "Vizyoner"] },
  "INTP": { baslik: "Mantıkçı", aciklama: "Meraklı, mantıksal, yaratıcı düşünür", ozellikler: ["Analitik", "Yaratıcı", "Objektif", "Meraklı"] },
  "ENTJ": { baslik: "Komutan", aciklama: "Cesur, güçlü iradeli lider", ozellikler: ["Lider", "Stratejik", "Kararlı", "Verimli"] },
  "ENTP": { baslik: "Tartışmacı", aciklama: "Zeki, meraklı, entelektüel", ozellikler: ["Yenilikçi", "Stratejik", "Girişimci", "Dürüst"] },
  "INFJ": { baslik: "Savunucu", aciklama: "Sessiz, mistik, ilham verici idealist", ozellikler: ["Sezgisel", "İlkeli", "Tutkulu", "Özverili"] },
  "INFP": { baslik: "Arabulucu", aciklama: "Şiirsel, nazik, özgecil", ozellikler: ["İdealist", "Empatik", "Yaratıcı", "Tutkulu"] },
  "ENFJ": { baslik: "Protagonist", aciklama: "Karizmatik, ilham veren lider", ozellikler: ["Karizmatik", "Empatik", "Güvenilir", "Özverili"] },
  "ENFP": { baslik: "Aktivist", aciklama: "Coşkulu, yaratıcı, sosyal", ozellikler: ["Coşkulu", "Yaratıcı", "Sosyal", "Özgür ruhlu"] },
  "ISTJ": { baslik: "Lojistikçi", aciklama: "Pratik, gerçekçi, güvenilir", ozellikler: ["Güvenilir", "Pratik", "Gerçekçi", "Sorumlu"] },
  "ISFJ": { baslik: "Savunucu", aciklama: "Koruyucu, adanmış, sıcak", ozellikler: ["Destekleyici", "Güvenilir", "Sabırlı", "Gözlemci"] },
  "ESTJ": { baslik: "Yönetici", aciklama: "Mükemmel yönetici, düzen sever", ozellikler: ["Organize", "Mantıklı", "Kararlı", "Güvenilir"] },
  "ESFJ": { baslik: "Konsül", aciklama: "İlgili, sosyal, popüler", ozellikler: ["İlgili", "Sadık", "Hassas", "Sosyal"] },
  "ISTP": { baslik: "Virtüöz", aciklama: "Cesur, pratik deneyci", ozellikler: ["Cesur", "Pratik", "Gözlemci", "Doğrudan"] },
  "ISFP": { baslik: "Maceracı", aciklama: "Esnek, çekici sanatçı", ozellikler: ["Çekici", "Hassas", "Meraklı", "Sanatsal"] },
  "ESTP": { baslik: "Girişimci", aciklama: "Zeki, enerjik, algılayıcı", ozellikler: ["Enerjik", "Algılayıcı", "Doğrudan", "Sosyal"] },
  "ESFP": { baslik: "Eğlendirici", aciklama: "Spontan, enerjik, eğlenceli", ozellikler: ["Spontan", "Enerjik", "Eğlenceli", "Pratik"] },
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
    const kisilik = KISILIK_TIPLERI[sonuc] || { baslik: "Benzersiz", aciklama: "Eşsiz bir kişilik kombinasyonu", ozellikler: [] };
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
    <div style={{ background: "#1a0b2e", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Testler</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>🎭 Kişilik Analizi</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Ruhsal kişilik haritanız</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.85rem", color: "#e0d4ff" }}>Soru {currentSoru + 1} / {SORULAR.length}</span>
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

      {/* Önerilen İçerikler */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          ...TEST_ONERILERI.filter(item => item.href !== "/testler/kisilik"),
          BURC_ONERILERI[0]
        ].slice(0, 4)}
      />
    </div>
  );
}
