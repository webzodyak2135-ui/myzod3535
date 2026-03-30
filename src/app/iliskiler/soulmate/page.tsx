"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import soulmateAnim from "../../../../public/lottie/soulmate.json";
import RelatedCards, { ILISKI_ONERILERI, BURC_ONERILERI } from "@/components/RelatedCards";

const SOULMATE_ISARETLERI = [
  { isaret: "Sofortige Erkennung", aciklama: "Vertrautheitsgefühl auf den ersten Blick, als hättet ihr euch schon mal getroffen", icon: "👀" },
  { isaret: "Tiefes Verständnis", aciklama: "Ihr versteht euch ohne Worte", icon: "🧠" },
  { isaret: "Synchronizität", aciklama: "Ihr denkt gleichzeitig dasselbe, erlebt Zufälle", icon: "✨" },
  { isaret: "Bedingungslose Akzeptanz", aciklama: "Ihr akzeptiert euch gegenseitig so wie ihr seid", icon: "💕" },
  { isaret: "Wachstum", aciklama: "Ihr inspiriert euch gegenseitig, bessere Menschen zu werden", icon: "🌱" },
  { isaret: "Zeitlosigkeit", aciklama: "Zeit vergeht anders zusammen, Stunden fühlen sich wie Minuten an", icon: "⏰" },
  { isaret: "Sicherheit", aciklama: "Du kannst du selbst sein, keine Angst vor Verurteilung", icon: "🛡️" },
  { isaret: "Telepathie", aciklama: "Ihr spürt die Gedanken des anderen", icon: "🔮" },
];

const SOULMATE_BURCLARI = [
  { burc: "Koç", emoji: "♈", soulmate: ["Löwe", "Schütze"], aciklama: "Seelenverwandte vom Feuerelement, teilen Leidenschaft und Abenteuer" },
  { burc: "Boğa", emoji: "♉", soulmate: ["Jungfrau", "Steinbock"], aciklama: "Tiefe Bindungen vom Erdelement, Stabilität und Vertrauen" },
  { burc: "İkizler", emoji: "♊", soulmate: ["Waage", "Wassermann"], aciklama: "Geistige Harmonie vom Luftelement, intellektuelle Bindung" },
  { burc: "Yengeç", emoji: "♋", soulmate: ["Skorpion", "Fische"], aciklama: "Emotionale Tiefe vom Wasserelement, intuitives Verständnis" },
  { burc: "Aslan", emoji: "♌", soulmate: ["Koç", "Yay"], aciklama: "Ateş elementinden karşılıklı hayranlık ve tutku" },
  { burc: "Başak", emoji: "♍", soulmate: ["Boğa", "Oğlak"], aciklama: "Toprak elementinden pratik uyum, güvenilir bağ" },
  { burc: "Terazi", emoji: "♎", soulmate: ["İkizler", "Kova"], aciklama: "Hava elementinden uyum ve denge, estetik paylaşım" },
  { burc: "Akrep", emoji: "♏", soulmate: ["Yengeç", "Balık"], aciklama: "Su elementinden yoğun duygusal bağ, dönüşüm" },
  { burc: "Yay", emoji: "♐", soulmate: ["Koç", "Aslan"], aciklama: "Ateş elementinden macera ve özgürlük paylaşımı" },
  { burc: "Oğlak", emoji: "♑", soulmate: ["Boğa", "Başak"], aciklama: "Toprak elementinden hedef odaklı, kalıcı bağ" },
  { burc: "Kova", emoji: "♒", soulmate: ["İkizler", "Terazi"], aciklama: "Hava elementinden entelektüel ve özgür bağ" },
  { burc: "Balık", emoji: "♓", soulmate: ["Yengeç", "Akrep"], aciklama: "Su elementinden spiritüel ve duygusal birlik" },
];

const SOULMATE_TURLERI = [
  { tur: "Romantischer Seelenverwandter", aciklama: "Lebenspartner, tiefe romantische Bindung", icon: "💑" },
  { tur: "Karmischer Seelenverwandter", aciklama: "Aus vergangenen Leben, lehrreiche Verbindung", icon: "🔄" },
  { tur: "Zwillingsflamme", aciklama: "Die andere Hälfte deiner Seele, intensiv und transformierend", icon: "🔥" },
  { tur: "Seelenfreund", aciklama: "Tiefe Freundschaft, lebenslange Unterstützung", icon: "🤝" },
];

export default function SoulmatePage() {
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
          @keyframes soulmateFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-14px) scale(1.03); }
          }
          @keyframes soulmateGlow {
            0%, 100% { box-shadow: 0 0 30px rgba(99,102,241,0.5), 0 0 70px rgba(139,92,246,0.25), 0 16px 50px rgba(0,0,0,0.6); }
            50% { box-shadow: 0 0 60px rgba(99,102,241,0.85), 0 0 110px rgba(139,92,246,0.45), 0 16px 50px rgba(0,0,0,0.6); }
          }
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.8; }
          }
        `}</style>

        {/* Lottie Animation Background */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.5, zIndex: 0 }}>
          <Lottie animationData={soulmateAnim} loop autoplay style={{ width: "100%", height: "100%", maxWidth: "450px", maxHeight: "450px" }} />
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
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(99,102,241,0.12)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(139,92,246,0.1)", filter: "blur(80px)" }} />
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Beziehungen
          </Link>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 40px rgba(99,102,241,0.6)", letterSpacing: "-0.02em" }}>
            Seelenverwandte Verbindung
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Wege deine Seelenverwandten zu erkennen - Kosmische Verbindungen und Zeichen
          </p>

          {/* Hero Görsel - Animasyonlu */}
          <img
            src="/img/iliskiler-soulmate.jpg"
            alt="Soulmate Bağı"
            style={{
              width: "clamp(150px, 18vw, 210px)",
              height: "clamp(150px, 18vw, 210px)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(99,102,241,0.55)",
              display: "block",
              margin: "0 auto",
              animation: "soulmateFloat 5s ease-in-out infinite, soulmateGlow 3s ease-in-out infinite",
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

      {/* Arten von Seelenverwandten */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Arten von Seelenverwandten
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {SOULMATE_TURLERI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#6366f1", marginBottom: "0.5rem" }}>{item.tur}</h3>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İşaretler */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Zeichen, um deine Seelenverwandten zu Erkennen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {SOULMATE_ISARETLERI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <div style={{ fontSize: "1.75rem", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>{item.isaret}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{item.aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nach Sternzeichen */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Deine potenziellen Seelenverwandten nach Sternzeichen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {SOULMATE_BURCLARI.map((item) => (
              <div
                key={item.burc}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.burc}</h3>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "#ffffff" }}>Ruh Eşleri: </span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#6366f1" }}>{item.soulmate.join(", ")}</span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #6366f115, #a855f715)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              💫 Was du über Seelenverwandte Wissen Solltest
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Das Konzept der Seelenverwandten beschreibt besondere Menschen, die tiefe Bedeutung und Verbindung in unser Leben bringen.
              Aber denk daran, dass das Finden einer Seelenverwandten keine Garantie für eine perfekte Beziehung ist.
              Jede Beziehung erfordert Anstrengung, Verständnis und Wachstum.
            </p>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Während du nach deiner Seelenverwandten suchst, konzentriere dich auf deine eigene Entwicklung. Denn die besten Beziehungen
              entstehen durch das Zusammenkommen zweier ganzer Menschen, nicht zweier Hälften.
            </p>
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          ...ILISKI_ONERILERI.filter(item => item.href !== "/iliskiler/soulmate"),
          BURC_ONERILERI[3]
        ].slice(0, 4)}
      />
    </div>
  );
}
