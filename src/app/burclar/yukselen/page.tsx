"use client";

import { useState } from "react";
import Link from "next/link";
import RelatedCards, { BURC_ONERILERI, GENEL_ONERILERI } from "@/components/RelatedCards";

const YUKSELEN_BURCLAR = [
  { name: "Koç", emoji: "♈", ozellik: "Enerjik, cesur ve doğrudan bir ilk izlenim bırakırsın. İnsanlar seni dinamik ve lider ruhlu görür." },
  { name: "Boğa", emoji: "♉", ozellik: "Sakin, güvenilir ve zarif bir görünüm sergilersin. İnsanlar seni istikrarlı ve rahatlatıcı bulur." },
  { name: "İkizler", emoji: "♊", ozellik: "Meraklı, konuşkan ve çok yönlü görünürsün. İnsanlar seni eğlenceli ve zeki bulur." },
  { name: "Yengeç", emoji: "♋", ozellik: "Şefkatli, koruyucu ve duygusal bir aura yayarsın. İnsanlar seni sıcak ve güvenilir bulur." },
  { name: "Aslan", emoji: "♌", ozellik: "Karizmatik, kendine güvenen ve dikkat çekici bir görünümün var. İnsanlar seni etkileyici bulur." },
  { name: "Başak", emoji: "♍", ozellik: "Düzenli, analitik ve mütevazı bir izlenim bırakırsın. İnsanlar seni güvenilir ve zeki bulur." },
  { name: "Terazi", emoji: "♎", ozellik: "Zarif, diplomatik ve çekici bir görünüm sergilersin. İnsanlar seni uyumlu ve hoş bulur." },
  { name: "Akrep", emoji: "♏", ozellik: "Gizemli, yoğun ve manyetik bir aura yayarsın. İnsanlar seni güçlü ve etkileyici bulur." },
  { name: "Yay", emoji: "♐", ozellik: "İyimser, maceraperest ve özgür ruhlu görünürsün. İnsanlar seni eğlenceli ve ilham verici bulur." },
  { name: "Oğlak", emoji: "♑", ozellik: "Ciddi, sorumlu ve profesyonel bir izlenim bırakırsın. İnsanlar seni güvenilir ve olgun bulur." },
  { name: "Kova", emoji: "♒", ozellik: "Özgün, bağımsız ve entelektüel görünürsün. İnsanlar seni ilginç ve farklı bulur." },
  { name: "Balık", emoji: "♓", ozellik: "Hassas, hayalperest ve empatik bir aura yayarsın. İnsanlar seni gizemli ve çekici bulur." },
];

type AiYorum = { yorum: string; gucluYonler: string[]; iliski: string; kariyer: string };

export default function YukselenBurcPage() {
  const [dogumSaati, setDogumSaati] = useState("");
  const [dogumYeri, setDogumYeri] = useState("");
  const [seciliYukselen, setSeciliYukselen] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiYorum, setAiYorum] = useState<AiYorum | null>(null);

  const handleHesapla = async () => {
    if (!dogumSaati || !dogumYeri) return;
    const saat = parseInt(dogumSaati.split(":")[0]);
    const index = Math.floor(saat / 2) % 12;
    const burcAdi = YUKSELEN_BURCLAR[index].name;
    setSeciliYukselen(burcAdi);
    setAiYorum(null);
    setLoading(true);
    try {
      const res = await fetch("/api/ai/rising-sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ risingSign: burcAdi, birthTime: dogumSaati }),
      });
      const payload = await res.json() as { ok?: boolean; data?: AiYorum };
      if (payload.ok && payload.data) setAiYorum(payload.data);
    } catch { /* fallback to static */ } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/burclar" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Burçlar
          </Link>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            ⬆️ Yükselen Burç Hesaplama
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.5rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
            Yükselen burcun, dünyaya nasıl göründüğünü ve ilk izlenimini belirler
          </p>
        </div>
      </section>

      {/* Hesaplama */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
              Yükselen Burcunu Hesapla
            </h2>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Doğum Saatin
              </label>
              <input
                type="time"
                value={dogumSaati}
                onChange={(e) => setDogumSaati(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  borderRadius: "12px",
                  border: "2px solid rgba(168, 85, 247, 0.5)",
                  background: "rgba(45, 27, 78, 0.5)",
                  color: "#ffffff",
                  fontSize: "1rem"
                }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Doğum Yerin
              </label>
              <input
                type="text"
                placeholder="Örn: İstanbul"
                value={dogumYeri}
                onChange={(e) => setDogumYeri(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  borderRadius: "12px",
                  border: "2px solid rgba(168, 85, 247, 0.5)",
                  background: "rgba(45, 27, 78, 0.5)",
                  color: "#ffffff",
                  fontSize: "1rem"
                }}
              />
            </div>

            <button
              onClick={handleHesapla}
              disabled={!dogumSaati || !dogumYeri || loading}
              style={{
                width: "100%",
                padding: "1rem",
                background: dogumSaati && dogumYeri && !loading ? "linear-gradient(135deg, #14b8a6, #0d9488)" : "rgba(45, 27, 78, 0.5)",
                color: dogumSaati && dogumYeri && !loading ? "#ffffff" : "rgba(255,255,255,0.5)",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: dogumSaati && dogumYeri && !loading ? "pointer" : "not-allowed",
              }}
            >
              {loading ? "✨ SternenFeed AI ile analiz ediliyor..." : "🔮 Yükselen Burçumu Hesapla"}
            </button>

            {loading && (
              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                {/* Loading Animation */}
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
                      border: "4px solid rgba(20, 184, 166, 0.2)",
                      borderTopColor: "#14b8a6",
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
                    ⬆️
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "16px",
                    background: "rgba(20, 184, 166, 0.1)",
                    border: "1px solid rgba(20, 184, 166, 0.3)",
                  }}
                >
                  <p style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600, marginBottom: "0.5rem" }}>
                    🌟 Die Sterne Sprechen...
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>
                    SternenFeed AI analysiert deine Geburtszeit und deinen Geburtsort, um deinen Aszendenten zu berechnen.
                    Deine persönliche Interpretation wird vorbereitet...
                  </p>
                </div>
              </div>
            )}

            {seciliYukselen && (
              <div style={{ marginTop: "2rem" }}>
                <div style={{ textAlign: "center", padding: "1.5rem", background: "#1a0b2e", borderRadius: "16px", marginBottom: "1rem" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>
                    {YUKSELEN_BURCLAR.find(b => b.name === seciliYukselen)?.emoji}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff" }}>
                    Yükselen: {seciliYukselen}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#ffffff", marginTop: "0.75rem", lineHeight: 1.7 }}>
                    {aiYorum?.yorum ?? YUKSELEN_BURCLAR.find(b => b.name === seciliYukselen)?.ozellik}
                  </p>
                </div>
                {aiYorum && (
                  <>
                    {aiYorum.gucluYonler.length > 0 && (
                      <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem", marginBottom: "0.75rem" }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>✨ GÜÇLÜ YÖNLER</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                          {aiYorum.gucluYonler.map((g, i) => (
                            <span key={i} style={{ padding: "0.3rem 0.75rem", background: "#1a0b2e", borderRadius: "99px", fontSize: "0.82rem", color: "#ffffff" }}>{g}</span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                      <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem" }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ec4899", marginBottom: "0.4rem" }}>❤️ AŞK & İLİŞKİ</div>
                        <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.6 }}>{aiYorum.iliski}</p>
                      </div>
                      <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem" }}>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>💼 KARİYER</div>
                        <p style={{ fontSize: "0.85rem", color: "#ffffff", lineHeight: 1.6 }}>{aiYorum.kariyer}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tüm Yükselen Burçlar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Yükselen Burç Özellikleri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {YUKSELEN_BURCLAR.map((burc) => (
              <div
                key={burc.name}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "1.75rem" }}>{burc.emoji}</span>
                  <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>Yükselen {burc.name}</span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{burc.ozellik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #14b8a615, #0d948815)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🌅 Yükselen Burç Nedir?
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Yükselen burç (Ascendant), doğduğun anda doğu ufkunda yükselen burçtur. Güneş burcun iç benliğini
              temsil ederken, yükselen burcun dış dünyadaki görünümünü, ilk izlenimini ve sosyal maskeni belirler.
            </p>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Yükselen burcunu doğru hesaplamak için doğum saatinin ve yerinin bilinmesi gerekir.
              Yaklaşık her 2 saatte bir yükselen burç değişir.
            </p>
          </div>
        </div>
      </section>

      <RelatedCards
        title="İlgini Çekebilir"
        items={[BURC_ONERILERI[0], BURC_ONERILERI[1], BURC_ONERILERI[2], BURC_ONERILERI[3]]}
      />
    </div>
  );
}
