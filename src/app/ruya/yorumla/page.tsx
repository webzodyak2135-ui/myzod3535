"use client";

import { FormEvent, useState } from "react";
import RelatedCards, { RUYA_ONERILERI, BURC_ONERILERI } from "@/components/RelatedCards";

type DreamResponse = {
  genelAnlam: string;
  semboller: string[];
  duygusalMesaj: string;
  hayataYansima: string;
  tavsiyeler: string[];
};

export default function RuyaYorumlaPage() {
  const [dreamText, setDreamText] = useState("");
  const [zodiacSign, setZodiacSign] = useState("");
  const [tonePreset, setTonePreset] = useState<"kanka" | "uzman" | "soft">("soft");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<DreamResponse | null>(null);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setResult(null);

    if (dreamText.trim().length < 10) {
      setError("Lutfen ruyanizi en az 10 karakter olacak sekilde yazin.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/ai/dream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dreamText, zodiacSign: zodiacSign || undefined, tonePreset }),
      });

      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        data?: DreamResponse;
      };

      if (!response.ok || !payload.ok || !payload.data) {
        setError(payload.message ?? "Yorum su an uretilemedi.");
        return;
      }

      setResult(payload.data);
    } catch {
      setError("Sunucu ile baglanti kurulurken hata olustu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#1a0b2e", minHeight: "100vh", padding: "2rem 1rem 4rem" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>
        <section
          style={{
            background: "linear-gradient(135deg, #0f766e 0%, #0ea5e9 100%)",
            borderRadius: "20px",
            padding: "2rem",
            color: "#ffffff",
            marginBottom: "1.25rem",
          }}
        >
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "0.5rem" }}>
            Zodyaklı ile Ruyani Yorumla
          </h1>
          <p style={{ color: "rgba(255,255,255,0.88)" }}>
            Ruyani detayli yaz, Zodyaklı sana derin bir psikolojik ve sembolik yorum uretsin.
          </p>
        </section>

        <form onSubmit={submit} style={{ background: "transparent", borderRadius: "16px", padding: "1rem", boxShadow: "0 6px 22px rgba(168,85,247,0.2)", border: "none" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", color: "#ffffff", fontWeight: 600 }}>
            Burcun (opsiyonel)
          </label>
          <input
            value={zodiacSign}
            onChange={(e) => setZodiacSign(e.target.value)}
            placeholder="Orn: koc, boga, yay"
            style={{ width: "100%", marginBottom: "0.75rem", border: "none", borderRadius: "10px", padding: "0.7rem 0.8rem", fontSize: "0.95rem", background: "#1a0b2e", color: "#ffffff" }}
          />

          <label style={{ display: "block", marginBottom: "0.5rem", color: "#ffffff", fontWeight: 600 }}>
            Yorum Tarzi
          </label>
          <select
            value={tonePreset}
            onChange={(e) => setTonePreset(e.target.value as "kanka" | "uzman" | "soft")}
            style={{ width: "100%", marginBottom: "0.75rem", border: "none", borderRadius: "10px", padding: "0.7rem 0.8rem", fontSize: "0.95rem", background: "#1a0b2e", color: "#ffffff" }}
          >
            <option value="kanka">Kanka (samimi)</option>
            <option value="uzman">Uzman (profesyonel)</option>
            <option value="soft">Soft (sakin/destekleyici)</option>
          </select>

          <label style={{ display: "block", marginBottom: "0.5rem", color: "#ffffff", fontWeight: 600 }}>
            Ruyan
          </label>
          <textarea
            value={dreamText}
            onChange={(e) => setDreamText(e.target.value)}
            rows={7}
            placeholder="Ruyani tum detaylariyla anlat..."
            style={{ width: "100%", border: "none", borderRadius: "10px", padding: "0.7rem 0.8rem", fontSize: "0.95rem", resize: "vertical", background: "rgba(26, 11, 46, 0.6)", color: "#ffffff" }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "0.9rem",
              width: "100%",
              border: "none",
              borderRadius: "10px",
              padding: "0.8rem",
              color: loading ? "rgba(255,255,255,0.5)" : "#ffffff",
              fontWeight: 600,
              background: loading ? "rgba(45, 27, 78, 0.5)" : "linear-gradient(135deg, #0f766e, #0891b2)",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "✨ Zodyaklı AI ile analiz ediliyor..." : "🔮 Zodyaklı ile Yorumla"}
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
                    border: "4px solid rgba(15, 118, 110, 0.2)",
                    borderTopColor: "#ffffff",
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
                  💭
                </div>
              </div>
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "16px",
                  background: "rgba(15, 118, 110, 0.1)",
                  border: "1px solid rgba(15, 118, 110, 0.3)",
                }}
              >
                <p style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600, marginBottom: "0.5rem" }}>
                  🌟 Rüyanız Yorumlanıyor...
                </p>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>
                  Zodyaklı AI rüyanızı analiz ediyor. Detaylı yorumunuz hazırlanıyor...
                </p>
              </div>
            </div>
          )}

          {error && <p style={{ marginTop: "0.75rem", color: "#b91c1c", fontSize: "0.9rem" }}>{error}</p>}
        </form>

        {result && (
          <section style={{ marginTop: "1rem", background: "transparent", borderRadius: "16px", padding: "1rem", boxShadow: "0 6px 22px rgba(168,85,247,0.2)", border: "none" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "0.6rem", color: "#ffffff" }}>Genel Anlam</h2>
            <p style={{ marginBottom: "0.8rem", color: "#e0d4ff" }}>{result.genelAnlam}</p>

            <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem", color: "#ffffff" }}>Semboller</h3>
            <p style={{ marginBottom: "0.8rem", color: "#e0d4ff" }}>{result.semboller.join(", ") || "-"}</p>

            <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem", color: "#ffffff" }}>Duygusal Mesaj</h3>
            <p style={{ marginBottom: "0.8rem", color: "#e0d4ff" }}>{result.duygusalMesaj}</p>

            <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem", color: "#ffffff" }}>Hayata Yansimasi</h3>
            <p style={{ marginBottom: "0.8rem", color: "#e0d4ff" }}>{result.hayataYansima}</p>

            <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem", color: "#ffffff" }}>Tavsiyeler</h3>
            <ul style={{ marginLeft: "1rem", color: "#e0d4ff" }}>
              {result.tavsiyeler.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Önerilen İçerikler */}
        <RelatedCards
          title="İlgini Çekebilir"
          items={[
            ...RUYA_ONERILERI.filter(item => item.href !== "/ruya/yorumla"),
            BURC_ONERILERI[0]
          ].slice(0, 4)}
        />
      </div>
    </div>
  );
}
