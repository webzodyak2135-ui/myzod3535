"use client";

import { useState } from "react";
import Link from "next/link";
import RelatedCards, { BURC_ONERILERI, GENEL_ONERILERI } from "@/components/RelatedCards";

const GEZEGENLER = [
  { name: "Güneş", icon: "☀️", anlam: "Benlik, ego, yaşam enerjisi" },
  { name: "Ay", icon: "🌙", anlam: "Duygular, içgüdüler, bilinçaltı" },
  { name: "Merkür", icon: "☿️", anlam: "İletişim, düşünce, öğrenme" },
  { name: "Venüs", icon: "♀️", anlam: "Aşk, güzellik, değerler" },
  { name: "Mars", icon: "♂️", anlam: "Enerji, tutku, eylem" },
  { name: "Jüpiter", icon: "♃", anlam: "Şans, genişleme, bilgelik" },
  { name: "Satürn", icon: "♄", anlam: "Disiplin, sorumluluk, sınırlar" },
  { name: "Uranüs", icon: "⛢", anlam: "Yenilik, özgürlük, değişim" },
  { name: "Neptün", icon: "♆", anlam: "Hayal gücü, spiritüellik, illüzyon" },
  { name: "Plüton", icon: "♇", anlam: "Dönüşüm, güç, yeniden doğuş" },
];

const EVLER = [
  { no: 1, anlam: "Benlik ve görünüm" },
  { no: 2, anlam: "Para ve değerler" },
  { no: 3, anlam: "İletişim ve kardeşler" },
  { no: 4, anlam: "Ev ve aile" },
  { no: 5, anlam: "Yaratıcılık ve aşk" },
  { no: 6, anlam: "Sağlık ve iş" },
  { no: 7, anlam: "İlişkiler ve ortaklıklar" },
  { no: 8, anlam: "Dönüşüm ve miras" },
  { no: 9, anlam: "Felsefe ve yolculuk" },
  { no: 10, anlam: "Kariyer ve statü" },
  { no: 11, anlam: "Arkadaşlık ve idealler" },
  { no: 12, anlam: "Bilinçaltı ve spiritüellik" },
];

type NatalResult = {
  genelYorum: string;
  kisilik: string;
  ask: string;
  kariyer: string;
  saglik: string;
  oneriler: string[];
};

export default function DogumHaritasiPage() {
  const [formData, setFormData] = useState({ tarih: "", saat: "", yer: "" });
  const [loading, setLoading] = useState(false);
  const [hata, setHata] = useState("");
  const [sonuc, setSonuc] = useState<NatalResult | null>(null);

  const handleOlustur = async () => {
    if (!formData.tarih) return;
    setLoading(true);
    setHata("");
    setSonuc(null);
    try {
      const res = await fetch("/api/ai/natal-chart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          birthDate: formData.tarih,
          birthTime: formData.saat || undefined,
          birthPlace: formData.yer || undefined,
        }),
      });
      const payload = await res.json() as { ok?: boolean; data?: NatalResult; message?: string };
      if (!res.ok || !payload.ok || !payload.data) {
        setHata(payload.message ?? "Die Horoskop-Interpretation konnte momentan nicht erstellt werden.");
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
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/burclar" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Burçlar
          </Link>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>
            🌐 Doğum Haritası (Natal Chart)
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginTop: "0.5rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
            Doğum anındaki gezegen konumlarını keşfet ve kozmik haritanı oku
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
              Doğum Bilgilerini Gir
            </h2>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Doğum Tarihi
              </label>
              <input
                type="date"
                value={formData.tarih}
                onChange={(e) => setFormData({ ...formData, tarih: e.target.value })}
                style={{ width: "100%", padding: "0.875rem", borderRadius: "12px", border: "2px solid #ffffff", fontSize: "1rem" }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Doğum Saati
              </label>
              <input
                type="time"
                value={formData.saat}
                onChange={(e) => setFormData({ ...formData, saat: e.target.value })}
                style={{ width: "100%", padding: "0.875rem", borderRadius: "12px", border: "2px solid #ffffff", fontSize: "1rem" }}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Doğum Yeri
              </label>
              <input
                type="text"
                placeholder="Örn: İstanbul, Türkiye"
                value={formData.yer}
                onChange={(e) => setFormData({ ...formData, yer: e.target.value })}
                style={{ width: "100%", padding: "0.875rem", borderRadius: "12px", border: "2px solid #ffffff", fontSize: "1rem" }}
              />
            </div>

            <button
              onClick={handleOlustur}
              disabled={!formData.tarih || loading}
              style={{
                width: "100%",
                padding: "1rem",
                background: formData.tarih && !loading ? "linear-gradient(135deg, #7c3aed, #a855f7)" : "rgba(45, 27, 78, 0.5)",
                color: formData.tarih && !loading ? "#ffffff" : "rgba(255,255,255,0.5)",
                border: "none",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: formData.tarih && !loading ? "pointer" : "not-allowed",
              }}
            >
              {loading ? "✨ SternenFeed AI ile analiz ediliyor..." : "🔮 SternenFeed ile Haritamı Oluştur"}
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
                      border: "4px solid rgba(124, 58, 237, 0.2)",
                      borderTopColor: "#7c3aed",
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
                    🌌
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: "16px",
                    background: "rgba(124, 58, 237, 0.1)",
                    border: "1px solid rgba(124, 58, 237, 0.3)",
                  }}
                >
                  <p style={{ fontSize: "1rem", color: "#7c3aed", fontWeight: 600, marginBottom: "0.5rem" }}>
                    🌟 Kozmik Haritanız Oluşturuluyor...
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>
                    SternenFeed AI doğum bilgilerinizi analiz ederek kişisel natal haritanızı hazırlıyor...
                  </p>
                </div>
              </div>
            )}

            {hata && <p style={{ marginTop: "0.75rem", color: "#b91c1c", fontSize: "0.9rem", textAlign: "center" }}>{hata}</p>}
            <p style={{ fontSize: "0.8rem", color: "#ffffff", textAlign: "center", marginTop: "1rem" }}>
              * Doğum saati bilinmiyorsa öğlen 12:00 kullanılır
            </p>

            {sonuc && (
              <div style={{ marginTop: "2rem" }}>
                <div style={{ background: "linear-gradient(135deg, #7c3aed15, #a855f715)", borderRadius: "16px", padding: "1.25rem", marginBottom: "1rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#7c3aed", marginBottom: "0.5rem" }}>🌌 GENEL KOzmİK PROFİL</div>
                  <p style={{ fontSize: "0.92rem", color: "#ffffff", lineHeight: 1.8 }}>{sonuc.genelYorum}</p>
                </div>
                <div style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1.25rem", marginBottom: "1rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>🧠 KİŞİLİK</div>
                  <p style={{ fontSize: "0.88rem", color: "#ffffff", lineHeight: 1.7 }}>{sonuc.kisilik}</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ec4899", marginBottom: "0.4rem" }}>❤️ AŞK</div>
                    <p style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.6 }}>{sonuc.ask}</p>
                  </div>
                  <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>💼 KARİYER</div>
                    <p style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.6 }}>{sonuc.kariyer}</p>
                  </div>
                  <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem", gridColumn: "1 / -1" }}>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>🌿 SAĞLIK</div>
                    <p style={{ fontSize: "0.82rem", color: "#ffffff", lineHeight: 1.6 }}>{sonuc.saglik}</p>
                  </div>
                </div>
                {sonuc.oneriler.length > 0 && (
                  <div style={{ background: "#1a0b2e", borderRadius: "14px", padding: "1rem" }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#d97706", marginBottom: "0.5rem" }}>⭐ YASAM ÖNERİLERİ</div>
                    {sonuc.oneriler.map((o, i) => (
                      <p key={i} style={{ fontSize: "0.85rem", color: "#92400e", margin: "0.2rem 0" }}>• {o}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gezegenler */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            🪐 Gezegenler ve Anlamları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {GEZEGENLER.map((g) => (
              <div
                key={g.name}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{g.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>{g.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff" }}>{g.anlam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            🏠 12 Ev ve Anlamları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
            {EVLER.map((ev) => (
              <div
                key={ev.no}
                style={{
                  background: "linear-gradient(135deg, #7c3aed15, #a855f715)",
                  borderRadius: "16px",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#7c3aed", marginBottom: "0.25rem" }}>{ev.no}. Ev</div>
                <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>{ev.anlam}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "24px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              📖 Doğum Haritası Nedir?
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Doğum haritası (natal chart), doğduğunuz anda gökyüzündeki gezegenlerin konumlarını gösteren
              astrolojik bir haritadır. Bu harita, kişiliğinizi, yeteneklerinizi, zorluklarınızı ve
              yaşam yolunuzu anlamak için kullanılır.
            </p>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Haritanızda her gezegen bir burçta ve bir evde yer alır. Güneş burcunuz (genel kişilik),
              Ay burcunuz (duygusal yapı) ve Yükselen burcunuz (dış görünüm) en önemli üç faktördür.
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
