"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import flortAnim from "../../../../public/lottie/flort.json";
import RelatedCards from "@/components/RelatedCards";
import { ILISKI_ONERILERI, BURC_ONERILERI } from "@/components/related-cards-data";

const FLORT_BURCLARI = [
  { burc: "Koç", emoji: "♈", tarzi: "Direkt und mutig", etkileme: "Fordere heraus, konkurriere", kacirma: "Passiv und langweilig sein", ipucu: "Mach den ersten Schritt, sei nicht schüchtern" },
  { burc: "Boğa", emoji: "♉", tarzi: "Langsam und romantisch", etkileme: "Gutes Essen, Geschenke", kacirma: "Eilen, Druck machen", ipucu: "Sei geduldig, baue Vertrauen auf" },
  { burc: "İkizler", emoji: "♊", tarzi: "Witzig und intellektuell", etkileme: "Interessante Gespräche, Humor", kacirma: "Langweilig und monoton sein", ipucu: "Flirte clever, überrasche" },
  { burc: "Yengeç", emoji: "♋", tarzi: "Emotional und beschützend", etkileme: "Aufrichtiges Interesse, Sicherheit", kacirma: "Kalt und distanziert sein", ipucu: "Baue emotionale Bindung auf, höre zu" },
  { burc: "Aslan", emoji: "♌", tarzi: "Auffällig und leidenschaftlich", etkileme: "Lob, Aufmerksamkeit, Bewunderung", kacirma: "Ignorieren", ipucu: "Lass ihn sich besonders fühlen" },
  { burc: "Başak", emoji: "♍", tarzi: "Sanft und aufmerksam", etkileme: "Auf Details achten, helfen", kacirma: "Unordentlich und planlos sein", ipucu: "Mache kleine Gesten" },
  { burc: "Terazi", emoji: "♎", tarzi: "Elegant und romantisch", etkileme: "Ästhetik, Schönheit, Harmonie", kacirma: "Unhöflich und unschön verhalten", ipucu: "Schaffe romantische Atmosphäre" },
  { burc: "Akrep", emoji: "♏", tarzi: "Intensiv und geheimnisvoll", etkileme: "Mysterium, Tiefe, Leidenschaft", kacirma: "Oberflächlich und falsch sein", ipucu: "Bewahre dein Geheimnis, sei tiefgründig" },
  { burc: "Yay", emoji: "♐", tarzi: "Spaßig und abenteuerlustig", etkileme: "Abenteuer, Spontanität, Spaß", kacirma: "Einschränkend und ernst sein", ipucu: "Plane lustige Aktivitäten" },
  { burc: "Oğlak", emoji: "♑", tarzi: "Ernst und traditionell", etkileme: "Erfolg, Zuverlässigkeit, Status", kacirma: "Unzuverlässig wirken", ipucu: "Zeige ernste Absichten" },
  { burc: "Kova", emoji: "♒", tarzi: "Originell und freundschaftlich", etkileme: "Andersartigkeit, Intellektualität", kacirma: "Gewöhnlich und aufdringlich sein", ipucu: "Nähere dich freundschaftlich" },
  { burc: "Balık", emoji: "♓", tarzi: "Romantisch und verträumt", etkileme: "Romantik, Kunst, Fantasie", kacirma: "Grob und realistisch sein", ipucu: "Mache romantische Gesten" },
];

const FLORT_IPUCLARI = [
  { baslik: "Blickkontakt", aciklama: "Blickkontakt zeigt Vertrauen und Interesse. Aber übertreib's nicht!", icon: "👀" },
  { baslik: "Lächeln", aciklama: "Ein aufrichtiges Lächeln öffnet Türen.", icon: "😊" },
  { baslik: "Aktives Zuhören", aciklama: "Höre wirklich zu, stelle Fragen.", icon: "👂" },
  { baslik: "Leichte Berührung", aciklama: "Sanfte Berührungen im richtigen Moment schaffen Nähe.", icon: "✋" },
  { baslik: "Selbstvertrauen", aciklama: "Selbstvertrauen ist attraktiv. Aber sei nicht arrogant.", icon: "💪" },
  { baslik: "Humor", aciklama: "Zum Lachen bringen schafft Verbindung. Aber übertreib's nicht.", icon: "😄" },
];

export default function FlortPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1a0b2e 0%, #1a0b2e 40%, #1a0b2e 100%)",
          padding: "calc(64px + 3rem) 1rem 5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes flortFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-14px) scale(1.03); }
          }
          @keyframes flortGlow {
            0%, 100% { box-shadow: 0 0 30px rgba(249,115,22,0.5), 0 0 70px rgba(251,191,36,0.25), 0 16px 50px rgba(0,0,0,0.6); }
            50% { box-shadow: 0 0 60px rgba(249,115,22,0.85), 0 0 110px rgba(251,191,36,0.45), 0 16px 50px rgba(0,0,0,0.6); }
          }
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.8; }
          }
        `}</style>

        {/* Lottie Animation Background */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.5, zIndex: 0 }}>
          <Lottie animationData={flortAnim} loop autoplay style={{ width: "100%", height: "100%", maxWidth: "450px", maxHeight: "450px" }} />
        </div>

        {/* Star particles */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[
            [8, 12], [18, 68], [28, 35], [38, 80], [48, 22], [58, 55], [68, 10], [78, 72], [88, 40], [95, 90],
            [12, 48], [22, 5], [32, 62], [42, 28], [52, 88], [62, 15], [72, 50], [82, 78], [90, 25], [5, 95],
          ].map(([top, left], i) => (
            <div key={i} style={{
              position: "absolute", top: `${top}%`, left: `${left}%`,
              width: i % 3 === 0 ? "2px" : "1.5px", height: i % 3 === 0 ? "2px" : "1.5px",
              borderRadius: "50%", background: "#1a0b2e",
              animation: `starTwinkle ${2 + (i % 4) * 0.8}s ease-in-out infinite`,
              animationDelay: `${(i * 0.3) % 3}s`,
            }} />
          ))}
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(249,115,22,0.12)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(251,191,36,0.1)", filter: "blur(80px)" }} />
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Beziehungen
          </Link>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 40px rgba(249,115,22,0.6)", letterSpacing: "-0.02em" }}>
            Flirttaktiken
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Flirttipps nach deinem Sternzeichen - Wie wirst du beeinflusst, wie beeinflusst du?
          </p>

          {/* Hero Görsel - Animasyonlu */}
          <img
            src="/img/iliskiler-fl%C3%B6rt.jpg"
            alt="Flirttaktiken"
            style={{
              width: "clamp(150px, 18vw, 210px)",
              height: "clamp(150px, 18vw, 210px)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(249,115,22,0.55)",
              display: "block",
              margin: "0 auto",
              animation: "flortFloat 5s ease-in-out infinite, flortGlow 3s ease-in-out infinite",
            }}
          />
        </div>

        {/* Bottom Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* Genel İpuçları */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Flört İpuçları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
            {FLORT_IPUCLARI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>{item.baslik}</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.5 }}>{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nach Sternzeichen */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Flirtratgeber nach Sternzeichen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {FLORT_BURCLARI.map((item) => (
              <div
                key={item.burc}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.burc}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#f97316" }}>{item.tarzi}</p>
                  </div>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#ffffff" }}>✓ Etkileme:</strong> {item.etkileme}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#ef4444" }}>✗ Kaçırma:</strong> {item.kacirma}
                </div>
                <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", marginTop: "0.75rem" }}>
                  <p style={{ fontSize: "0.85rem", color: "#c2410c" }}>💡 {item.ipucu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          ...ILISKI_ONERILERI.filter(item => item.href !== "/iliskiler/flort"),
          BURC_ONERILERI[3]
        ].slice(0, 4)}
      />
    </div>
  );
}
