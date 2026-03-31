"use client";

import { useState } from "react";
import Link from "next/link";

const BURCLAR = [
  { name: "Koç", emoji: "♈", slug: "koc", element: "Ateş" },
  { name: "Boğa", emoji: "♉", slug: "boga", element: "Toprak" },
  { name: "İkizler", emoji: "♊", slug: "ikizler", element: "Hava" },
  { name: "Yengeç", emoji: "♋", slug: "yengec", element: "Su" },
  { name: "Aslan", emoji: "♌", slug: "aslan", element: "Ateş" },
  { name: "Başak", emoji: "♍", slug: "basak", element: "Toprak" },
  { name: "Terazi", emoji: "♎", slug: "terazi", element: "Hava" },
  { name: "Akrep", emoji: "♏", slug: "akrep", element: "Su" },
  { name: "Yay", emoji: "♐", slug: "yay", element: "Ateş" },
  { name: "Oğlak", emoji: "♑", slug: "oglak", element: "Toprak" },
  { name: "Kova", emoji: "♒", slug: "kova", element: "Hava" },
  { name: "Balık", emoji: "♓", slug: "balik", element: "Su" },
];

const UYUM_TABLOSU: Record<string, Record<string, number>> = {
  koc: { koc: 70, boga: 55, ikizler: 83, yengec: 42, aslan: 95, basak: 50, terazi: 65, akrep: 60, yay: 93, oglak: 47, kova: 78, balik: 67 },
  boga: { koc: 55, boga: 75, ikizler: 58, yengec: 88, aslan: 50, basak: 92, terazi: 72, akrep: 85, yay: 45, oglak: 95, kova: 48, balik: 87 },
  ikizler: { koc: 83, boga: 58, ikizler: 72, yengec: 55, aslan: 80, basak: 62, terazi: 93, akrep: 48, yay: 78, oglak: 52, kova: 95, balik: 50 },
  yengec: { koc: 42, boga: 88, ikizler: 55, yengec: 75, aslan: 65, basak: 82, terazi: 48, akrep: 95, yay: 45, oglak: 58, kova: 42, balik: 93 },
  aslan: { koc: 95, boga: 50, ikizler: 80, yengec: 65, aslan: 75, basak: 55, terazi: 88, akrep: 58, yay: 93, oglak: 52, kova: 70, balik: 62 },
  basak: { koc: 50, boga: 92, ikizler: 62, yengec: 82, aslan: 55, basak: 75, terazi: 68, akrep: 85, yay: 48, oglak: 93, kova: 52, balik: 58 },
  terazi: { koc: 65, boga: 72, ikizler: 93, yengec: 48, aslan: 88, basak: 68, terazi: 75, akrep: 62, yay: 85, oglak: 55, kova: 92, balik: 58 },
  akrep: { koc: 60, boga: 85, ikizler: 48, yengec: 95, aslan: 58, basak: 85, terazi: 62, akrep: 78, yay: 52, oglak: 88, kova: 45, balik: 93 },
  yay: { koc: 93, boga: 45, ikizler: 78, yengec: 45, aslan: 93, basak: 48, terazi: 85, akrep: 52, yay: 75, oglak: 55, kova: 88, balik: 58 },
  oglak: { koc: 47, boga: 95, ikizler: 52, yengec: 58, aslan: 52, basak: 93, terazi: 55, akrep: 88, yay: 55, oglak: 78, kova: 62, balik: 82 },
  kova: { koc: 78, boga: 48, ikizler: 95, yengec: 42, aslan: 70, basak: 52, terazi: 92, akrep: 45, yay: 88, oglak: 62, kova: 75, balik: 65 },
  balik: { koc: 67, boga: 87, ikizler: 50, yengec: 93, aslan: 62, basak: 58, terazi: 58, akrep: 93, yay: 58, oglak: 82, kova: 65, balik: 78 },
};

export default function BurcUyumuPage() {
  const [burc1, setBurc1] = useState("");
  const [burc2, setBurc2] = useState("");
  const [tonePreset, setTonePreset] = useState<"magazin" | "wissenschaftlich" | "soft">("wissenschaftlich");
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [aiError, setAiError] = useState("");
  const [aiAnaliz, setAiAnaliz] = useState<{
    genelUyum: number;
    askUyumu: number;
    arkadaslikUyumu: number;
    isUyumu: number;
    gucluYonler: string[];
    dikkatEdilecekler: string[];
    ozet: string;
  } | null>(null);

  const getUyum = () => {
    if (burc1 && burc2) {
      return UYUM_TABLOSU[burc1]?.[burc2] || 50;
    }
    return null;
  };

  const uyum = getUyum();

  const analyzeWithAi = async () => {
    if (!burc1 || !burc2) return;

    setIsLoadingAi(true);
    setAiError("");

    try {
      const response = await fetch("/api/ai/compatibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sign1: burc1, sign2: burc2, tonePreset }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        data?: {
          genelUyum: number;
          askUyumu: number;
          arkadaslikUyumu: number;
          isUyumu: number;
          gucluYonler: string[];
          dikkatEdilecekler: string[];
          ozet: string;
        };
        message?: string;
      };

      if (!response.ok || !payload.ok || !payload.data) {
        setAiAnaliz(null);
        setAiError(payload.message ?? "AI analizi su an olusturulamadi.");
        return;
      }

      setAiAnaliz(payload.data);
    } catch {
      setAiAnaliz(null);
      setAiError("Sunucuya baglanirken bir hata olustu.");
    } finally {
      setIsLoadingAi(false);
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
          <Link href="/burclar" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Burçlar
          </Link>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            💕 Burç Uyumu Analizi
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.5rem" }}>
            İki burç arasındaki uyumu keşfet
          </p>
        </div>
      </section>

      {/* Hesaplama */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <select
                value={burc1}
                onChange={(e) => setBurc1(e.target.value)}
                style={{
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  border: "2px solid rgba(168, 85, 247, 0.5)",
                  background: "rgba(45, 27, 78, 0.5)",
                  color: "#ffffff",
                  fontSize: "1rem",
                  minWidth: "150px"
                }}
              >
                <option value="" style={{ background: "#1a0b2e", color: "#ffffff" }}>Birinci Burç</option>
                {BURCLAR.map((b) => (
                  <option key={b.slug} value={b.slug} style={{ background: "#1a0b2e", color: "#ffffff" }}>{b.emoji} {b.name}</option>
                ))}
              </select>

              <span style={{ fontSize: "2rem" }}>❤️</span>

              <select
                value={burc2}
                onChange={(e) => setBurc2(e.target.value)}
                style={{
                  padding: "1rem 1.5rem",
                  borderRadius: "12px",
                  border: "2px solid rgba(168, 85, 247, 0.5)",
                  background: "rgba(45, 27, 78, 0.5)",
                  color: "#ffffff",
                  fontSize: "1rem",
                  minWidth: "150px"
                }}
              >
                <option value="" style={{ background: "#1a0b2e", color: "#ffffff" }}>İkinci Burç</option>
                {BURCLAR.map((b) => (
                  <option key={b.slug} value={b.slug} style={{ background: "#1a0b2e", color: "#ffffff" }}>{b.emoji} {b.name}</option>
                ))}
              </select>
            </div>

            <label style={{ display: "block", marginBottom: "0.45rem", color: "#ffffff", fontSize: "0.9rem", fontWeight: 600 }}>
              Yorum Tarzı
            </label>
            <select
              value={tonePreset}
              onChange={(e) => setTonePreset(e.target.value as "magazin" | "wissenschaftlich" | "soft")}
              style={{
                width: "100%",
                marginBottom: "0.9rem",
                padding: "0.85rem 1rem",
                borderRadius: "12px",
                border: "2px solid rgba(168, 85, 247, 0.5)",
                background: "rgba(45, 27, 78, 0.5)",
                color: "#ffffff",
                fontSize: "0.95rem"
              }}
            >
              <option value="magazin" style={{ background: "#1a0b2e", color: "#ffffff" }}>Magazin (canli/akici)</option>
              <option value="wissenschaftlich" style={{ background: "#1a0b2e", color: "#ffffff" }}>Wissenschaftlich (editorial)</option>
              <option value="soft" style={{ background: "#1a0b2e", color: "#ffffff" }}>Soft (sakin/destekleyici)</option>
            </select>

            <button
              type="button"
              onClick={analyzeWithAi}
              disabled={!burc1 || !burc2 || isLoadingAi}
              style={{
                width: "100%",
                border: "none",
                borderRadius: "12px",
                padding: "0.85rem 1rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                background: !burc1 || !burc2 || isLoadingAi ? "rgba(45, 27, 78, 0.5)" : "linear-gradient(135deg, #7c3aed, #ec4899)",
                color: !burc1 || !burc2 || isLoadingAi ? "rgba(255,255,255,0.5)" : "#ffffff",
                cursor: !burc1 || !burc2 || isLoadingAi ? "not-allowed" : "pointer",
              }}
            >
              {isLoadingAi ? "✨ SternenFeed AI ile analiz ediliyor..." : "🔮 SternenFeed ile Detaylı Uyum Analizi"}
            </button>

            {isLoadingAi && (
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
                      border: "4px solid rgba(168, 85, 247, 0.2)",
                      borderTopColor: "#a855f7",
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
                    💕
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "16px",
                    background: "rgba(168, 85, 247, 0.1)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                  }}
                >
                  <p style={{ fontSize: "1rem", color: "#a855f7", fontWeight: 600, marginBottom: "0.5rem" }}>
                    🌟 Die Sterne Sprechen...
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>
                    SternenFeed AI analysiert die ausgewählten Sternzeichen. Eure detaillierte Kompatibilitätsinterpretation wird vorbereitet...
                  </p>
                </div>
              </div>
            )}

            {aiError && (
              <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#b91c1c", textAlign: "center" }}>
                {aiError}
              </p>
            )}

            {uyum !== null && (
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background: `conic-gradient(${uyum >= 80 ? '#22c55e' : uyum >= 60 ? '#eab308' : '#ef4444'} ${uyum}%, #1a0b2e 0%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                  }}
                >
                  <div style={{ width: "110px", height: "110px", borderRadius: "50%", background: "#1a0b2e", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <span style={{ fontSize: "2rem", fontWeight: 800, color: uyum >= 80 ? '#22c55e' : uyum >= 60 ? '#eab308' : '#ef4444' }}>{uyum}%</span>
                    <span style={{ fontSize: "0.75rem", color: "#ffffff" }}>Uyum</span>
                  </div>
                </div>
                <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "#ffffff" }}>
                  {uyum >= 90 ? "Perfekte Harmonie! 💕" : uyum >= 80 ? "Wunderbare Harmonie! 💖" : uyum >= 70 ? "Gute Harmonie 💗" : uyum >= 60 ? "Mittlere Harmonie 💛" : uyum >= 50 ? "Herausfordernde Harmonie 🧡" : "Schwierige Harmonie ❤️‍🩹"}
                </p>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", marginTop: "0.5rem" }}>
                  {uyum >= 80 ? "Diese beiden Sternzeichen ergänzen sich perfekt!" : uyum >= 60 ? "Mit Verständnis und Geduld kann eine schöne Beziehung aufgebaut werden." : "Unterschiede können Schwierigkeiten bereiten, aber es ist nicht unmöglich."}
                </p>

                {aiAnaliz && (
                  <div style={{ marginTop: "1.5rem", textAlign: "left" }}>
                    {/* Ozet Karti */}
                    <div
                      style={{
                        padding: "1.25rem",
                        borderRadius: "16px",
                        background: "rgba(124, 58, 237, 0.15)",
                        border: "1px solid rgba(168, 85, 247, 0.4)",
                        marginBottom: "1rem",
                      }}
                    >
                      <h3 style={{ fontSize: "1.1rem", color: "#a855f7", marginBottom: "0.75rem", fontWeight: 700 }}>
                        🔮 SternenFeed Yorumu
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: "1.6" }}>
                        {aiAnaliz.ozet}
                      </p>
                    </div>

                    {/* Uyum Skorlari Karti */}
                    <div
                      style={{
                        padding: "1.25rem",
                        borderRadius: "16px",
                        background: "rgba(45, 27, 78, 0.5)",
                        border: "1px solid rgba(168, 85, 247, 0.3)",
                        marginBottom: "1rem",
                      }}
                    >
                      <h3 style={{ fontSize: "1rem", color: "#ec4899", marginBottom: "0.75rem", fontWeight: 700 }}>
                        💕 Detaylı Uyum Skorları
                      </h3>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                        <div style={{ textAlign: "center", padding: "0.75rem", borderRadius: "12px", background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.3)" }}>
                          <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ec4899" }}>%{aiAnaliz.askUyumu}</div>
                          <div style={{ fontSize: "0.85rem", color: "#ffffff", marginTop: "0.25rem" }}>Aşk</div>
                        </div>
                        <div style={{ textAlign: "center", padding: "0.75rem", borderRadius: "12px", background: "rgba(124, 58, 237, 0.1)", border: "1px solid rgba(124, 58, 237, 0.3)" }}>
                          <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#7c3aed" }}>%{aiAnaliz.arkadaslikUyumu}</div>
                          <div style={{ fontSize: "0.85rem", color: "#ffffff", marginTop: "0.25rem" }}>Arkadaşlık</div>
                        </div>
                        <div style={{ textAlign: "center", padding: "0.75rem", borderRadius: "12px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)" }}>
                          <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#a855f7" }}>%{aiAnaliz.isUyumu}</div>
                          <div style={{ fontSize: "0.85rem", color: "#ffffff", marginTop: "0.25rem" }}>İş</div>
                        </div>
                      </div>
                    </div>

                    {/* Guclu Yonler Karti */}
                    <div
                      style={{
                        padding: "1.25rem",
                        borderRadius: "16px",
                        background: "rgba(34, 197, 94, 0.1)",
                        border: "1px solid rgba(34, 197, 94, 0.3)",
                        marginBottom: "1rem",
                      }}
                    >
                      <h3 style={{ fontSize: "1rem", color: "#ffffff", marginBottom: "0.75rem", fontWeight: 700 }}>
                        ✨ Güçlü Yönler
                      </h3>
                      <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                        {aiAnaliz.gucluYonler.map((yön, i) => (
                          <li key={i} style={{ fontSize: "0.9rem", color: "#ffffff", marginBottom: "0.5rem", lineHeight: "1.5" }}>
                            {yön}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dikkat Edilecekler Karti */}
                    <div
                      style={{
                        padding: "1.25rem",
                        borderRadius: "16px",
                        background: "rgba(239, 68, 68, 0.1)",
                        border: "1px solid rgba(239, 68, 68, 0.3)",
                      }}
                    >
                      <h3 style={{ fontSize: "1rem", color: "#ef4444", marginBottom: "0.75rem", fontWeight: 700 }}>
                        ⚠️ Dikkat Edilecekler
                      </h3>
                      <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                        {aiAnaliz.dikkatEdilecekler.map((nokta, i) => (
                          <li key={i} style={{ fontSize: "0.9rem", color: "#ffffff", marginBottom: "0.5rem", lineHeight: "1.5" }}>
                            {nokta}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Uyum Tablosu */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Burç Uyum Tablosu
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#1a0b2e", borderRadius: "16px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <thead>
                <tr style={{ background: "#1a0b2e" }}>
                  <th style={{ padding: "0.75rem", fontSize: "0.8rem", fontWeight: 600, color: "#ffffff" }}></th>
                  {BURCLAR.map((b) => (
                    <th key={b.slug} style={{ padding: "0.5rem", fontSize: "1.25rem" }}>{b.emoji}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BURCLAR.map((b1) => (
                  <tr key={b1.slug}>
                    <td style={{ padding: "0.5rem", fontSize: "1.25rem", textAlign: "center" }}>{b1.emoji}</td>
                    {BURCLAR.map((b2) => {
                      const u = UYUM_TABLOSU[b1.slug]?.[b2.slug] || 50;
                      return (
                        <td
                          key={b2.slug}
                          style={{
                            padding: "0.5rem",
                            textAlign: "center",
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: "#ffffff",
                            background: u >= 80 ? '#1a0b2e' : u >= 60 ? '#1a0b2e' : '#1a0b2e',
                          }}
                        >
                          {u}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Element Uyumu */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Element Uyumları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            <div style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#991b1b", marginBottom: "0.5rem" }}>🔥 Ateş + Ateş</h3>
              <p style={{ fontSize: "0.85rem", color: "#7f1d1d" }}>Koç, Aslan, Yay - Tutkulu ve enerjik ama ego çatışması olabilir</p>
            </div>
            <div style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>🌍 Toprak + Toprak</h3>
              <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Boğa, Başak, Oğlak - İstikrarlı ve güvenilir, pratik ilişki</p>
            </div>
            <div style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#854d0e", marginBottom: "0.5rem" }}>💨 Hava + Hava</h3>
              <p style={{ fontSize: "0.85rem", color: "#713f12" }}>İkizler, Terazi, Kova - Entelektüel ve sosyal, iletişim güçlü</p>
            </div>
            <div style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>💧 Su + Su</h3>
              <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>Yengeç, Akrep, Balık - Derin duygusal bağ, sezgisel anlayış</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
