"use client";

import { useState } from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import ciftAnim from "../../../../public/lottie/cift-uyumu.json";
import RelatedCards, { ILISKI_ONERILERI, BURC_ONERILERI } from "@/components/RelatedCards";

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

type AiSonuc = {
  genelUyum: number;
  askUyumu: number;
  arkadaslikUyumu: number;
  isUyumu: number;
  gucluYonler: string[];
  dikkatEdilecekler: string[];
  ozet: string;
};

export default function CiftUyumuPage() {
  const [burc1, setBurc1] = useState("");
  const [burc2, setBurc2] = useState("");
  const [loading, setLoading] = useState(false);
  const [hata, setHata] = useState("");
  const [sonuc, setSonuc] = useState<AiSonuc | null>(null);

  const handleHesapla = async () => {
    if (!burc1 || !burc2) return;
    setLoading(true);
    setHata("");
    setSonuc(null);
    try {
      const res = await fetch("/api/ai/compatibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sign1: burc1, sign2: burc2, tonePreset: "uzman" }),
      });
      const payload = await res.json() as { ok?: boolean; data?: AiSonuc; message?: string };
      if (!res.ok || !payload.ok || !payload.data) {
        setHata(payload.message ?? "Die Analyse konnte momentan nicht durchgeführt werden, bitte versuche es erneut.");
      } else {
        setSonuc(payload.data);
      }
    } catch {
      setHata("Verbindung zum Server konnte nicht hergestellt werden.");
    } finally {
      setLoading(false);
    }
  };

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
          @keyframes ciftFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-14px) scale(1.03); }
          }
          @keyframes ciftGlow {
            0%, 100% { box-shadow: 0 0 30px rgba(236,72,153,0.5), 0 0 70px rgba(244,63,94,0.25), 0 16px 50px rgba(0,0,0,0.6); }
            50% { box-shadow: 0 0 60px rgba(236,72,153,0.85), 0 0 110px rgba(244,63,94,0.45), 0 16px 50px rgba(0,0,0,0.6); }
          }
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.8; }
          }
        `}</style>

        {/* Lottie Animation Background */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.5, zIndex: 0 }}>
          <Lottie animationData={ciftAnim} loop autoplay style={{ width: "100%", height: "100%", maxWidth: "450px", maxHeight: "450px" }} />
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
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(236,72,153,0.12)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(244,63,94,0.1)", filter: "blur(80px)" }} />
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Beziehungen
          </Link>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 40px rgba(236,72,153,0.6)", letterSpacing: "-0.02em" }}>
            Paarkompatibilitätsanalyse
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Analyse der Kompatibilität zwischen zwei Menschen
          </p>

          {/* Hero Görsel - Animasyonlu */}
          <img
            src="/img/iliskilerciftuyumu.jpg"
            alt="Çift Uyumu"
            style={{
              width: "clamp(150px, 18vw, 210px)",
              height: "clamp(150px, 18vw, 210px)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(236,72,153,0.55)",
              display: "block",
              margin: "0 auto",
              animation: "ciftFloat 5s ease-in-out infinite, ciftGlow 3s ease-in-out infinite",
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

      {/* Form */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
              {/* Partner 1 */}
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ec4899", marginBottom: "1rem", textAlign: "center" }}>👤 Sen</h3>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>Burcun</label>
                  <select
                    value={burc1}
                    onChange={(e) => setBurc1(e.target.value)}
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "12px", border: "2px solid #1a0b2e", fontSize: "1rem" }}
                  >
                    <option value="">Seç</option>
                    {BURCLAR.map((b) => (
                      <option key={b.name} value={b.name}>{b.emoji} {b.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Partner 2 */}
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#f43f5e", marginBottom: "1rem", textAlign: "center" }}>💕 Partnerin</h3>
                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>Burcu</label>
                  <select
                    value={burc2}
                    onChange={(e) => setBurc2(e.target.value)}
                    style={{ width: "100%", padding: "0.75rem", borderRadius: "12px", border: "2px solid #1a0b2e", fontSize: "1rem" }}
                  >
                    <option value="">Seç</option>
                    {BURCLAR.map((b) => (
                      <option key={b.name} value={b.name}>{b.emoji} {b.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={handleHesapla}
              disabled={!burc1 || !burc2 || loading}
              style={{
                width: "100%",
                marginTop: "1.5rem",
                padding: "1rem",
                background: burc1 && burc2 && !loading ? "linear-gradient(135deg, #ec4899, #f43f5e)" : "rgba(45, 27, 78, 0.5)",
                color: burc1 && burc2 && !loading ? "#ffffff" : "rgba(255,255,255,0.5)",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: burc1 && burc2 && !loading ? "pointer" : "not-allowed",
              }}
            >
              {loading ? "✨ SternenFeed AI ile analiz ediliyor..." : "🔮 SternenFeed ile Uyum Analizi"}
            </button>

            {loading && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 1rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "4px solid rgba(236, 72, 153, 0.2)",
                      borderTopColor: "#ec4899",
                      animation: "spin 1s linear infinite",
                    }}
                  />
                  <style>{`
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                  `}</style>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      fontSize: "2rem",
                    }}
                  >
                    💑
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "16px",
                    background: "rgba(236, 72, 153, 0.1)",
                    border: "1px solid rgba(236, 72, 153, 0.3)",
                  }}
                >
                  <p style={{ fontSize: "1rem", color: "#ec4899", fontWeight: 600, marginBottom: "0.5rem" }}>
                    🌟 Herzen Werden Analysiert...
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>
                    SternenFeed AI analysiert die ausgewählten Sternzeichen. Eure Paarkompatibilität wird vorbereitet...
                  </p>
                </div>
              </div>
            )}
            {hata && <p style={{ marginTop: "0.75rem", color: "#b91c1c", fontSize: "0.9rem", textAlign: "center" }}>{hata}</p>}

            {/* Sonuç */}
            {sonuc && (
              <div style={{ marginTop: "2rem" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
                  {burc1} &amp; {burc2} Uyum Analizi
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "1.25rem" }}>
                  {[
                    { label: "Genel Uyum", value: sonuc.genelUyum, color: "#ec4899", icon: "💕" },
                    { label: "Aşk", value: sonuc.askUyumu, color: "#ef4444", icon: "❤️" },
                    { label: "Arkadaşlık", value: sonuc.arkadaslikUyumu, color: "#3b82f6", icon: "�" },
                    { label: "İş Uyumu", value: sonuc.isUyumu, color: "#ffffff", icon: "💼" },
                  ].map((item) => (
                    <div key={item.label} style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1rem", textAlign: "center" }}>
                      <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{item.icon}</div>
                      <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>{item.label}</div>
                      <div style={{ fontSize: "1.5rem", fontWeight: 800, color: item.color }}>{Math.min(item.value, 100)}%</div>
                      <div style={{ height: "6px", background: "#1a0b2e", borderRadius: "3px", marginTop: "0.5rem", overflow: "hidden" }}>
                        <div style={{ width: `${Math.min(item.value, 100)}%`, height: "100%", background: item.color, borderRadius: "3px" }} />
                      </div>
                    </div>
                  ))}
                </div>
                {sonuc.ozet && (
                  <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem", marginBottom: "1rem" }}>
                    <p style={{ fontSize: "0.92rem", color: "#ffffff", lineHeight: 1.7 }}>{sonuc.ozet}</p>
                  </div>
                )}
                {sonuc.gucluYonler?.length > 0 && (
                  <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "0.9rem", marginBottom: "0.75rem" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>✅ Güçlü Yönler</div>
                    {sonuc.gucluYonler.map((g, i) => <p key={i} style={{ fontSize: "0.85rem", color: "#ffffff", margin: "0.15rem 0" }}>• {g}</p>)}
                  </div>
                )}
                {sonuc.dikkatEdilecekler?.length > 0 && (
                  <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "0.9rem" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ea580c", marginBottom: "0.4rem" }}>⚠️ Dikkat Edilecekler</div>
                    {sonuc.dikkatEdilecekler.map((d, i) => <p key={i} style={{ fontSize: "0.85rem", color: "#9a3412", margin: "0.15rem 0" }}>• {d}</p>)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              💡 Çift Uyumu Hakkında
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Çift uyumu analizi, iki kişinin astrolojik profillerini karşılaştırarak ilişki dinamiklerini
              değerlendirir. Güneş burçları temel bir gösterge olsa da, gerçek uyum Ay burçları,
              Venüs ve Mars konumları gibi birçok faktöre bağlıdır. Bu analiz genel bir rehber niteliğindedir.
            </p>
          </div>
        </div>
      </section>

      {/* Empfohlene Inhalte */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          ...ILISKI_ONERILERI.filter(item => item.href !== "/iliskiler/cift-uyumu"),
          BURC_ONERILERI[3]
        ].slice(0, 4)}
      />
    </div>
  );
}
