"use client";

import { useState } from "react";
import Link from "next/link";

const SAYI_ANLAMLARI: Record<number, { baslik: string; anlam: string; ozellikler: string[] }> = {
  1: {
    baslik: "Lider",
    anlam: "Bağımsız, yaratıcı ve öncü bir ruhun var. Doğal liderlik özelliklerin seni öne çıkarıyor.",
    ozellikler: ["Bağımsız", "Yaratıcı", "Kararlı", "Öncü"]
  },
  2: {
    baslik: "Diplomat",
    anlam: "Uyumlu, hassas ve işbirlikçi bir yapın var. İlişkilerde denge kurmakta ustasın.",
    ozellikler: ["Uyumlu", "Hassas", "Sabırlı", "İşbirlikçi"]
  },
  3: {
    baslik: "Yaratıcı",
    anlam: "İfade gücü yüksek, sosyal ve iyimser bir ruhun var. Sanat ve iletişim alanlarında parlıyorsun.",
    ozellikler: ["Yaratıcı", "Sosyal", "İyimser", "Esprili"]
  },
  4: {
    baslik: "İnşaatçı",
    anlam: "Pratik, çalışkan ve güvenilir bir yapın var. Sağlam temeller üzerine inşa etmeyi seversin.",
    ozellikler: ["Pratik", "Çalışkan", "Güvenilir", "Disiplinli"]
  },
  5: {
    baslik: "Özgür Ruh",
    anlam: "Maceraperest, esnek ve meraklı bir ruhun var. Değişim ve özgürlük senin için vazgeçilmez.",
    ozellikler: ["Maceraperest", "Esnek", "Meraklı", "Dinamik"]
  },
  6: {
    baslik: "Bakıcı",
    anlam: "Sevgi dolu, sorumlu ve koruyucu bir yapın var. Aile ve toplum için fedakarlık yaparsın.",
    ozellikler: ["Sevgi dolu", "Sorumlu", "Koruyucu", "Uyumlu"]
  },
  7: {
    baslik: "Arayışçı",
    anlam: "Analitik, spiritüel ve içe dönük bir ruhun var. Derin düşünce ve araştırma senin alanın.",
    ozellikler: ["Analitik", "Spiritüel", "Sezgisel", "Bilge"]
  },
  8: {
    baslik: "Güç Sahibi",
    anlam: "Hırslı, pratik ve başarı odaklı bir yapın var. Maddi dünyada başarıya ulaşmak için doğmuşsun.",
    ozellikler: ["Hırslı", "Pratik", "Güçlü", "Başarı odaklı"]
  },
  9: {
    baslik: "İnsancıl",
    anlam: "İdealist, şefkatli ve evrensel bir bakış açın var. İnsanlığa hizmet etmek senin misyonun.",
    ozellikler: ["İdealist", "Şefkatli", "Cömert", "Vizyoner"]
  },
};

function hesaplaKaderSayisi(tarih: string): number {
  const rakamlar = tarih.replace(/\D/g, '').split('').map(Number);
  let toplam = rakamlar.reduce((a, b) => a + b, 0);
  
  while (toplam > 9) {
    toplam = toplam.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  
  return toplam || 1;
}

export default function NumerolojiTestiPage() {
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [sonuc, setSonuc] = useState<number | null>(null);

  const handleHesapla = () => {
    if (dogumTarihi) {
      const sayi = hesaplaKaderSayisi(dogumTarihi);
      setSonuc(sayi);
    }
  };

  const resetTest = () => {
    setDogumTarihi("");
    setSonuc(null);
  };

  if (sonuc) {
    const bilgi = SAYI_ANLAMLARI[sonuc];
    return (
      <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
        <section
          style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            padding: "4rem 1rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3.5rem",
                fontWeight: 800,
                color: "#ffffff",
                margin: "0 auto 1.5rem",
              }}
            >
              {sonuc}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem" }}>
              Kader Sayın: {sonuc}
            </h1>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "1rem" }}>
              {bilgi.baslik}
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              {bilgi.anlam}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center", marginBottom: "2rem" }}>
              {bilgi.ozellikler.map((ozellik, i) => (
                <span
                  key={i}
                  style={{
                    padding: "0.4rem 1rem",
                    background: "rgba(255,255,255,0.2)",
                    borderRadius: "9999px",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                  }}
                >
                  {ozellik}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={resetTest}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "#1a0b2e",
                  color: "#6366f1",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Tekrar Hesapla
              </button>
              <Link
                href="/testler"
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "rgba(255,255,255,0.2)",
                  color: "#ffffff",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Diğer Testler
              </Link>
            </div>
          </div>
        </section>

        {/* Tüm Sayılar */}
        <section style={{ padding: "3rem 1rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
              Tüm Kader Sayıları
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
              {Object.entries(SAYI_ANLAMLARI).map(([sayi, bilgi]) => (
                <div
                  key={sayi}
                  style={{
                    padding: "1.25rem",
                    background: sonuc === Number(sayi) ? "#ede9fe" : "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    border: sonuc === Number(sayi) ? "2px solid #8b5cf6" : "2px solid transparent",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1.5rem", fontWeight: 700, color: "#6366f1" }}>{sayi}</span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff" }}>{bilgi.baslik}</span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{bilgi.anlam}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Testler
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            🔢 Numeroloji Testi
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.5rem", maxWidth: "500px", margin: "0.5rem auto 0" }}>
            Doğum tarihinden kader sayını hesapla ve hayat yolunu keşfet
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
          <div
            style={{
              background: "#1a0b2e",
              borderRadius: "24px",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
              Doğum Tarihini Gir
            </h2>
            <input
              type="date"
              value={dogumTarihi}
              onChange={(e) => setDogumTarihi(e.target.value)}
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                border: "2px solid #ffffff",
                fontSize: "1rem",
                marginBottom: "1rem",
              }}
            />
            <button
              onClick={handleHesapla}
              disabled={!dogumTarihi}
              style={{
                width: "100%",
                padding: "1rem",
                background: dogumTarihi ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#ffffff",
                color: dogumTarihi ? "#ffffff" : "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: dogumTarihi ? "pointer" : "not-allowed",
              }}
            >
              Kader Sayımı Hesapla
            </button>
          </div>

          {/* Bilgi */}
          <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#1a0b2e", borderRadius: "16px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>
              📖 Numeroloji Nedir?
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>
              Numeroloji, sayıların mistik anlamlarını inceleyen kadim bir bilimdir. 
              Kader sayın, doğum tarihindeki tüm rakamların toplamından elde edilir ve 
              hayat yolunu, kişilik özelliklerini ve potansiyelini ortaya koyar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
