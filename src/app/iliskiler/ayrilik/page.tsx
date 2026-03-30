"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import ayrilikAnim from "../../../../public/lottie/ayrilik.json";
import RelatedCards, { ILISKI_ONERILERI, BURC_ONERILERI } from "@/components/RelatedCards";

const AYRILIK_BURCLARI = [
  { burc: "Koç", emoji: "♈", tepki: "Erholt sich schnell, stürzt sich in neue Abenteuer", iyilesme: "Sport und körperliche Aktivität", tavsiye: "Überstürze nichts, verarbeite deine Gefühle" },
  { burc: "Boğa", emoji: "♉", tepki: "Akzeptiert schwer, trauert lange", iyilesme: "Suche nach Komfort und Sicherheit", tavsiye: "Akzeptiere Veränderung, lerne loszulassen" },
  { burc: "İkizler", emoji: "♊", tepki: "Versucht durch Sozialisierung zu vergessen", iyilesme: "Neue Menschen und Erfahrungen", tavsiye: "Fliehe nicht vor deinen Gefühlen, stelle dich ihnen" },
  { burc: "Yengeç", emoji: "♋", tepki: "Tiefe Trauer, Rückzug", iyilesme: "Familie und enge Freunde", tavsiye: "Sei mitfühlend mit dir selbst, gib dir Zeit" },
  { burc: "Aslan", emoji: "♌", tepki: "Ego verletzt, wirkt nach außen stark", iyilesme: "Selbstfokus, Erfolg", tavsiye: "Akzeptiere deine Verletzlichkeit" },
  { burc: "Başak", emoji: "♍", tepki: "Analysiert, sucht nach Fehlern", iyilesme: "Ordnung und Routine", tavsiye: "Hör auf, dich selbst zu beschuldigen" },
  { burc: "Terazi", emoji: "♎", tepki: "Fühlt sich unausgeglichen, sucht sofort neue Beziehung", iyilesme: "Soziale Unterstützung und Schönheit", tavsiye: "Lerne, allein zu sein" },
  { burc: "Akrep", emoji: "♏", tepki: "Tiefer Schmerz, Rachegedanken", iyilesme: "Transformation und Erneuerung", tavsiye: "Lerne zu vergeben, lass los" },
  { burc: "Yay", emoji: "♐", tepki: "Flucht, Reisen, neue Abenteuer", iyilesme: "Freiheit und Entdeckung", tavsiye: "Fliehe nicht vor deinen Gefühlen" },
  { burc: "Oğlak", emoji: "♑", tepki: "Vergräbt sich in Arbeit, unterdrückt Gefühle", iyilesme: "Erfolg und Ziele", tavsiye: "Gib deinen Gefühlen Raum" },
  { burc: "Kova", emoji: "♒", tepki: "Rationalisiert, schafft Distanz", iyilesme: "Freunde und soziale Aktivitäten", tavsiye: "Erlaube emotionale Verbindung" },
  { burc: "Balık", emoji: "♓", tepki: "Tiefe Trauer, Flucht in Traumwelt", iyilesme: "Kunst und Spiritualität", tavsiye: "Behalte den Bezug zur Realität" },
];

const IYILESME_ADIMLARI = [
  { adim: "1. Akzeptanz", aciklama: "Akzeptiere die Trennung. Überspringe die Verleugnung.", icon: "🤍" },
  { adim: "2. Trauern", aciklama: "Erlaube dir zu trauern. Unterdrücke deine Gefühle nicht.", icon: "💔" },
  { adim: "3. Unterstützung", aciklama: "Sprich mit Nahestehenden, bleib nicht allein.", icon: "🤗" },
  { adim: "4. Selbstfokus", aciklama: "Kehre zu deinen eigenen Bedürfnissen und Zielen zurück.", icon: "🎯" },
  { adim: "5. Lernen", aciklama: "Überlege, was du aus dieser Erfahrung lernen kannst.", icon: "📚" },
  { adim: "6. Weitergehen", aciklama: "Sei bereit für neue Anfänge.", icon: "🌱" },
];

export default function AyrilikPage() {
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
          @keyframes ayrilikFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-14px) scale(1.03); }
          }
          @keyframes ayrilikGlow {
            0%, 100% { box-shadow: 0 0 30px rgba(100,116,139,0.5), 0 0 70px rgba(71,85,105,0.25), 0 16px 50px rgba(0,0,0,0.6); }
            50% { box-shadow: 0 0 60px rgba(100,116,139,0.85), 0 0 110px rgba(71,85,105,0.45), 0 16px 50px rgba(0,0,0,0.6); }
          }
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.8; }
          }
        `}</style>

        {/* Lottie Animation Background */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.5, zIndex: 0 }}>
          <Lottie animationData={ayrilikAnim} loop autoplay style={{ width: "100%", height: "100%", maxWidth: "450px", maxHeight: "450px" }} />
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
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(100,116,139,0.12)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(71,85,105,0.1)", filter: "blur(80px)" }} />
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Beziehungen
          </Link>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 40px rgba(100,116,139,0.6)", letterSpacing: "-0.02em" }}>
            Trennungsratgeber
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Heilungs- und Erholungsreise - Trennungsratgeber nach deinem Sternzeichen
          </p>

          {/* Hero Görsel - Animasyonlu */}
          <img
            src="/img/iliskiler-aytutulmas%C4%B1.jpg"
            alt="Trennungsratgeber"
            style={{
              width: "clamp(150px, 18vw, 210px)",
              height: "clamp(150px, 18vw, 210px)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(100,116,139,0.55)",
              display: "block",
              margin: "0 auto",
              animation: "ayrilikFloat 5s ease-in-out infinite, ayrilikGlow 3s ease-in-out infinite",
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

      {/* İyileşme Adımları */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Heilungsreise
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
            {IYILESME_ADIMLARI.map((item, i) => (
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
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>{item.adim}</h3>
                <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.5 }}>{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nach Sternzeichen */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Trennungsratgeber nach Sternzeichen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {AYRILIK_BURCLARI.map((item) => (
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
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.burc}</h3>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong>Tepki:</strong> {item.tepki}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong>İyileşme:</strong> {item.iyilesme}
                </div>
                <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", marginTop: "0.75rem" }}>
                  <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>💚 {item.tavsiye}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivasyon */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #22c55e15, #10b98115)", borderRadius: "24px", padding: "2rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🌟 Hatırla
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#ffffff", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto" }}>
              &quot;Her son, yeni bir başlangıcın kapısıdır. Bu acı geçici, ama öğrendiklerin kalıcı olacak.
              Kendine zaman ver, şefkat göster ve unutma: En güzel günlerin henüz yaşanmadı.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          ...ILISKI_ONERILERI.filter(item => item.href !== "/iliskiler/ayrilik"),
          BURC_ONERILERI[3]
        ].slice(0, 4)}
      />
    </div>
  );
}
