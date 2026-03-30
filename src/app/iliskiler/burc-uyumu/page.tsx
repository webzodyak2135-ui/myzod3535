"use client";

import { useState } from "react";
import Link from "next/link";

const BURCLAR = [
  { name: "Koç", emoji: "♈", slug: "koc" },
  { name: "Boğa", emoji: "♉", slug: "boga" },
  { name: "İkizler", emoji: "♊", slug: "ikizler" },
  { name: "Yengeç", emoji: "♋", slug: "yengec" },
  { name: "Aslan", emoji: "♌", slug: "aslan" },
  { name: "Başak", emoji: "♍", slug: "basak" },
  { name: "Terazi", emoji: "♎", slug: "terazi" },
  { name: "Akrep", emoji: "♏", slug: "akrep" },
  { name: "Yay", emoji: "♐", slug: "yay" },
  { name: "Oğlak", emoji: "♑", slug: "oglak" },
  { name: "Kova", emoji: "♒", slug: "kova" },
  { name: "Balık", emoji: "♓", slug: "balik" },
];

const UYUM_MATRISI: Record<string, Record<string, { uyum: number; yorum: string }>> = {
  koc: {
    koc: { uyum: 70, yorum: "Zwei Feuer zusammen! Leidenschaft ist da, aber Ego-Konflikte können auftreten." },
    boga: { uyum: 55, yorum: "Unterschiedliche Tempi. Erfordert Geduld, kann aber ergänzend sein." },
    ikizler: { uyum: 83, yorum: "Unterhaltsame und dynamische Beziehung. Starke Kommunikation." },
    yengec: { uyum: 42, yorum: "Schwierige Kombination. Emotionale Bedürfnisse unterscheiden sich." },
    aslan: { uyum: 95, yorum: "Perfekte Harmonie! Zwei Feuerzeichen strahlen zusammen." },
    basak: { uyum: 50, yorum: "Kritik und Ungeduld können problematisch sein." },
    terazi: { uyum: 65, yorum: "Anziehung ist da, aber langfristig können Schwierigkeiten auftreten." },
    akrep: { uyum: 60, yorum: "Leidenschaftlich, aber Machtkämpfe können entstehen." },
    yay: { uyum: 93, yorum: "Wunderbare abenteuerliche Beziehung! Feuer trifft Feuer." },
    oglak: { uyum: 47, yorum: "Unterschiedliche Prioritäten. Erfordert Kompromisse." },
    kova: { uyum: 78, yorum: "Zwei unabhängigkeitsliebende Zeichen. Freie Beziehung." },
    balik: { uyum: 67, yorum: "Kann ergänzend sein, erfordert aber Verständnis." },
  },
  aslan: {
    koc: { uyum: 95, yorum: "Perfekte Harmonie! Zwei Feuerzeichen strahlen zusammen." },
    boga: { uyum: 50, yorum: "Zwei stur Zeichen. Machtkämpfe können auftreten." },
    ikizler: { uyum: 80, yorum: "Ein soziales und unterhaltsames Paar." },
    yengec: { uyum: 65, yorum: "Beschützend und loyal, aber unterschiedliche Bedürfnisse." },
    aslan: { uyum: 75, yorum: "Zwei Könige zusammen! Ego-Management ist wichtig." },
    basak: { uyum: 55, yorum: "Kritik kann den Löwen verletzen." },
    terazi: { uyum: 88, yorum: "Ein wunderbares soziales Paar. Hohe Harmonie." },
    akrep: { uyum: 58, yorum: "Leidenschaftlich, aber es gibt Machtkämpfe." },
    yay: { uyum: 93, yorum: "Feuer mit Feuer! Voller Abenteuer und Leidenschaft." },
    oglak: { uyum: 52, yorum: "Unterschiedliche Ansätze. Erfordert Geduld." },
    kova: { uyum: 70, yorum: "Anziehend, aber gegensätzliche Pole." },
    balik: { uyum: 62, yorum: "Romantisch, aber unterschiedliche Welten." },
  },
};

// Diğer burçlar için basit uyum hesaplama
function getUyum(burc1: string, burc2: string): { uyum: number; yorum: string } {
  if (UYUM_MATRISI[burc1]?.[burc2]) {
    return UYUM_MATRISI[burc1][burc2];
  }
  if (UYUM_MATRISI[burc2]?.[burc1]) {
    return UYUM_MATRISI[burc2][burc1];
  }

  // Basit element bazlı uyum
  const ates = ["koc", "aslan", "yay"];
  const toprak = ["boga", "basak", "oglak"];
  const hava = ["ikizler", "terazi", "kova"];

  const getElement = (b: string) => {
    if (ates.includes(b)) return "ates";
    if (toprak.includes(b)) return "toprak";
    if (hava.includes(b)) return "hava";
    return "su";
  };

  const e1 = getElement(burc1);
  const e2 = getElement(burc2);

  if (e1 === e2) return { uyum: 85, yorum: "Gleiches Element! Natürliche Harmonie vorhanden." };
  if ((e1 === "ates" && e2 === "hava") || (e1 === "hava" && e2 === "ates")) {
    return { uyum: 80, yorum: "Feuer und Luft nähren einander. Starke Harmonie." };
  }
  if ((e1 === "toprak" && e2 === "su") || (e1 === "su" && e2 === "toprak")) {
    return { uyum: 82, yorum: "Toprak ve su birbirini tamamlar. Derin bağ." };
  }
  return { uyum: 60, yorum: "Farklı elementler. Anlayış ve sabır gerektirir." };
}

export default function BurcUyumuPage() {
  const [burc1, setBurc1] = useState("");
  const [burc2, setBurc2] = useState("");
  const [sonuc, setSonuc] = useState<{ uyum: number; yorum: string } | null>(null);

  const handleHesapla = () => {
    if (burc1 && burc2) {
      setSonuc(getUyum(burc1, burc2));
    }
  };

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Beziehungen
          </Link>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            💑 Sternzeichen-Kompatibilität Berechnen
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.5rem" }}>
            Entdecke die Kompatibilität zwischen zwei Sternzeichen
          </p>
        </div>
      </section>

      {/* Hesaplama */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div
            style={{
              background: "#1a0b2e",
              borderRadius: "24px",
              padding: "2rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <select
                value={burc1}
                onChange={(e) => { setBurc1(e.target.value); setSonuc(null); }}
                style={{
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  border: "2px solid #1a0b2e",
                  fontSize: "1rem",
                  minWidth: "150px",
                }}
              >
                <option value="">Senin Burcun</option>
                {BURCLAR.map((b) => (
                  <option key={b.slug} value={b.slug}>{b.emoji} {b.name}</option>
                ))}
              </select>

              <span style={{ fontSize: "2rem" }}>❤️</span>

              <select
                value={burc2}
                onChange={(e) => { setBurc2(e.target.value); setSonuc(null); }}
                style={{
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  border: "2px solid #1a0b2e",
                  fontSize: "1rem",
                  minWidth: "150px",
                }}
              >
                <option value="">Partner Burcu</option>
                {BURCLAR.map((b) => (
                  <option key={b.slug} value={b.slug}>{b.emoji} {b.name}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleHesapla}
              disabled={!burc1 || !burc2}
              style={{
                width: "100%",
                padding: "1rem",
                background: burc1 && burc2 ? "linear-gradient(135deg, #ec4899, #f43f5e)" : "#1a0b2e",
                color: burc1 && burc2 ? "#ffffff" : "#ffffff",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: burc1 && burc2 ? "pointer" : "not-allowed",
              }}
            >
              Uyumu Hesapla
            </button>

            {/* Sonuç */}
            {sonuc && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `conic-gradient(#ec4899 ${sonuc.uyum}%, #1a0b2e 0%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      background: "#1a0b2e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <span style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ec4899" }}>{sonuc.uyum}%</span>
                    <span style={{ fontSize: "0.7rem", color: "#ffffff" }}>Uyum</span>
                  </div>
                </div>
                <p style={{ fontSize: "1rem", color: "#ffffff", lineHeight: 1.6 }}>{sonuc.yorum}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tüm Burçlar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Burç Seç ve Uyumları Gör
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "0.75rem" }}>
            {BURCLAR.map((b) => (
              <Link
                key={b.slug}
                href={`/burclar/${b.slug}`}
                style={{
                  padding: "1rem",
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  textAlign: "center",
                  textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>{b.emoji}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#ffffff" }}>{b.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
