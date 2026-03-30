"use client";

import { useState } from "react";
import Link from "next/link";

const SAYI_ANLAMLARI: Record<number, { baslik: string; anlam: string; ozellikler: string[] }> = {
  1: {
    baslik: "Führer",
    anlam: "Du hast eine unabhängige, kreative und pionierhafte Seele. Deine natürlichen Führungsqualitäten heben dich hervor.",
    ozellikler: ["Unabhängig", "Kreativ", "Entschlossen", "Pionier"]
  },
  2: {
    baslik: "Diplomat",
    anlam: "Du hast eine harmonische, sensible und kooperative Natur. Du bist ein Meister darin, Balance in Beziehungen zu schaffen.",
    ozellikler: ["Harmonisch", "Sensibel", "Geduldig", "Kooperativ"]
  },
  3: {
    baslik: "Kreativer",
    anlam: "Du hast eine ausdrucksstarke, soziale und optimistische Seele. Du glänzt in Kunst und Kommunikation.",
    ozellikler: ["Kreativ", "Sozial", "Optimistisch", "Witzig"]
  },
  4: {
    baslik: "Erbauer",
    anlam: "Du hast eine praktische, fleißige und zuverlässige Natur. Du liebst es, auf soliden Fundamenten aufzubauen.",
    ozellikler: ["Praktisch", "Fleißig", "Zuverlässig", "Diszipliniert"]
  },
  5: {
    baslik: "Freigeist",
    anlam: "Du hast eine abenteuerlustige, flexible und neugierige Seele. Veränderung und Freiheit sind für dich unverzichtbar.",
    ozellikler: ["Abenteuerlustig", "Flexibel", "Neugierig", "Dynamisch"]
  },
  6: {
    baslik: "Beschützer",
    anlam: "Du hast eine liebevolle, verantwortungsvolle und beschützende Natur. Du opferst dich für Familie und Gemeinschaft.",
    ozellikler: ["Liebevoll", "Verantwortungsvoll", "Beschützend", "Harmonisch"]
  },
  7: {
    baslik: "Sucher",
    anlam: "Du hast eine analytische, spirituelle und introvertierte Seele. Tiefes Denken und Forschen ist dein Bereich.",
    ozellikler: ["Analytisch", "Spirituell", "Intuitiv", "Weise"]
  },
  8: {
    baslik: "Machtinhaber",
    anlam: "Du hast eine ehrgeizige, praktische und erfolgsorientierte Natur. Du bist geboren, um in der materiellen Welt Erfolg zu haben.",
    ozellikler: ["Ehrgeizig", "Praktisch", "Stark", "Erfolgsorientiert"]
  },
  9: {
    baslik: "Humanitär",
    anlam: "Du hast eine idealistische, mitfühlende und universelle Perspektive. Der Menschheit zu dienen ist deine Mission.",
    ozellikler: ["Idealistisch", "Mitfühlend", "Großzügig", "Visionär"]
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
              Deine Schicksalszahl: {sonuc}
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
                Neu berechnen
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
                Andere Tests
              </Link>
            </div>
          </div>
        </section>

        {/* Alle Zahlen */}
        <section style={{ padding: "3rem 1rem" }}>
          <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
              Alle Schicksalszahlen
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
            ← Tests
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            🔢 Numerologie-Test
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.5rem", maxWidth: "500px", margin: "0.5rem auto 0" }}>
            Berechne deine Schicksalszahl aus deinem Geburtsdatum und entdecke deinen Lebensweg
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
              Gib dein Geburtsdatum ein
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
              Schicksalszahl berechnen
            </button>
          </div>

          {/* Bilgi */}
          <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#1a0b2e", borderRadius: "16px" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.75rem" }}>
              📖 Was ist Numerologie?
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>
              Numerologie ist eine alte Wissenschaft, die die mystischen Bedeutungen von Zahlen untersucht.
              Deine Schicksalszahl wird aus der Summe aller Ziffern deines Geburtsdatums berechnet und
              offenbart deinen Lebensweg, Persönlichkeitsmerkmale und Potenzial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
