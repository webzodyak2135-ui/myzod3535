import Link from "next/link";

const UCMA_TURLERI = [
  { baslik: "Frei fliegen", anlam: "Erfolg, Freiheit, Hindernisse überwinden, Aufstieg", icon: "🦅", durum: "Positiv", slug: "frei-fliegen" },
  { baslik: "Mühsam fliegen", anlam: "Hindernisse, Schwierigkeiten, Kampf, anstrengende Ziele", icon: "💨", durum: "Achtung", slug: "muhhsam-fliegen" },
  { baslik: "Hoch fliegen", anlam: "Große Ziele, Ehrgeiz, weite Perspektive", icon: "☁️", durum: "Positiv", slug: "hoch-fliegen" },
  { baslik: "Tief fliegen", anlam: "Vorsichtiger Fortschritt, realistische Ziele", icon: "🌿", durum: "Neutral", slug: "tief-fliegen" },
  { baslik: "Fallen (beim Fliegen)", anlam: "Kontrollverlust, Versagensangst, Unsicherheit", icon: "⬇️", durum: "Warnung", slug: "fallen-beim-fliegen" },
  { baslik: "Mit Flügeln fliegen", anlam: "Spiritueller Aufstieg, Engelsenergie, Schutz", icon: "👼", durum: "Positiv", slug: "mit-flugeln-fliegen" },
];

const DETAYLI_ANLAMLAR = [
  {
    baslik: "Allgemeine Bedeutung von Flugträumen",
    icerik: "Flugträume sind eine der häufigsten und positivsten Traumarten. Sie symbolisieren meist Freiheit, Erfolg, das Überwinden von Hindernissen und den Wunsch nach Aufstieg. Diese Träume zeigen, dass du die Kontrolle in deinem Leben übernommen hast oder übernehmen möchtest."
  },
  {
    baslik: "Psychologische Deutung",
    icerik: "Psychologen verbinden Flugträume mit dem Wunsch, sich von Einschränkungen im Leben zu befreien. Sie treten häufig in stressigen Zeiten auf und spiegeln das Verlangen des Unterbewusstseins nach Befreiung wider."
  },
  {
    baslik: "Spirituelle Deutung",
    icerik: "Aus spiritueller Sicht werden Flugträume als Zeichen für die Trennung der Seele vom Körper (Astralprojektion), das Erreichen höherer Bewusstseinsebenen und spirituelles Erwachen interpretiert."
  },
];

export default function UcmaRuyalariPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 40%, #c4b5fd 100%)",
          padding: "5rem 1rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(196,181,253,0.3)", filter: "blur(100px)" }} />
          {/* Floating Elements */}
          {["🦋", "✨", "☁️", "🌟", "🕊️", "💫"].map((item, i) => (
            <div key={i} style={{ position: "absolute", top: `${15 + (i * 14) % 70}%`, left: `${8 + (i * 16) % 84}%`, fontSize: `${1.5 + (i % 3) * 0.5}rem`, opacity: 0.4, animation: `float ${4 + i * 0.7}s ease-in-out infinite` }}>{item}</div>
          ))}
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/ruya-tabirleri" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.2)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Traumdeutung
          </Link>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
            <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", filter: "blur(30px)" }} />
            <div style={{ fontSize: "5rem", position: "relative", filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))" }}>🦋</div>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", textShadow: "0 4px 30px rgba(0,0,0,0.2)", letterSpacing: "-0.02em" }}>
            Flugträume
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Die mystische Bedeutung des Fliegens - Freiheit, Aufstieg und Grenzen überschreiten
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* Uçma Türleri */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Arten von Flugträumen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {UCMA_TURLERI.map((ruya, i) => (
              <Link
                key={i}
                href={`/ruya/${ruya.slug}`}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderTop: `4px solid ${ruya.durum === "Olumlu" ? "#22c55e" : ruya.durum === "Uyarı" ? "#ef4444" : ruya.durum === "Dikkat" ? "#f59e0b" : "#6366f1"}`,
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{ruya.icon}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{ruya.baslik}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{ruya.anlam}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.75rem" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      background: ruya.durum === "Olumlu" ? "#1a0b2e" : ruya.durum === "Uyarı" ? "#1a0b2e" : ruya.durum === "Dikkat" ? "#fef3c7" : "#e0e7ff",
                      color: ruya.durum === "Olumlu" ? "#166534" : ruya.durum === "Uyarı" ? "#991b1b" : ruya.durum === "Dikkat" ? "#92400e" : "#4338ca",
                    }}
                  >
                    {ruya.durum}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#8b5cf6", fontWeight: 500 }}>Detaylı Yorum →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detaylı Anlamlar */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Detaylı Yorumlar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {DETAYLI_ANLAMLAR.map((anlam, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#7c3aed", marginBottom: "0.75rem" }}>{anlam.baslik}</h3>
                <p style={{ fontSize: "0.95rem", color: "#ffffff", lineHeight: 1.8 }}>{anlam.icerik}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tavsiyeler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #7c3aed15, #a78bfa15)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              ✨ Uçma Rüyası Gördüğünüzde
            </h2>
            <ul style={{ color: "#ffffff", lineHeight: 2, paddingLeft: "1.5rem" }}>
              <li>Rüyadaki duygularınızı not edin (mutluluk, korku, heyecan)</li>
              <li>Uçuşun kolaylığı veya zorluğunu hatırlayın</li>
              <li>Nereye doğru uçtuğunuzu düşünün</li>
              <li>Hayatınızda özgürleşmek istediğiniz alanları değerlendirin</li>
              <li>Bu rüyayı bir motivasyon kaynağı olarak kullanın</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
