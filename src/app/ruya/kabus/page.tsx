import Link from "next/link";

const KABUS_TURLERI = [
  { baslik: "Verfolgt werden", anlam: "Vermiedene Probleme, unterdrückte Ängste, Stress", icon: "🏃", cozum: "Konfrontiere das, vor dem du fliehst", slug: "kovalanmak-kabus" },
  { baslik: "Ersticken", anlam: "Emotionaler Druck, Beklemmung, Unfähigkeit sich auszudrücken", icon: "😰", cozum: "Drücke deine Gefühle aus", slug: "bogulmak" },
  { baslik: "Sich verirren", anlam: "Orientierungsverlust, Unsicherheit, Identitätssuche", icon: "🌫️", cozum: "Kläre deine Ziele", slug: "kaybolmak" },
  { baslik: "Tod sehen", anlam: "Transformation, Ende, Neuanfang", icon: "💀", cozum: "Akzeptiere Veränderung", slug: "olum-gormek" },
  { baslik: "Gelähmt sein", anlam: "Hilflosigkeit, Bewegungsunfähigkeit, Entscheidungsunfähigkeit", icon: "🧊", cozum: "Beginne mit kleinen Schritten", slug: "felc-olmak" },
  { baslik: "Monster/Kreatur", anlam: "Unterdrückte Wut, Ängste, Schattenselbst", icon: "👹", cozum: "Akzeptiere deine dunklen Seiten", slug: "canavar-gormek" },
  { baslik: "Naturkatastrophe", anlam: "Unkontrollierte Veränderung, Chaos, Gefühl der Machtlosigkeit", icon: "🌪️", cozum: "Passe dich der Veränderung an", slug: "dogal-afet" },
];

const KABUS_NEDENLERI = [
  { neden: "Stress und Angst", aciklama: "Täglicher Stress und Sorgen können sich in Albträume verwandeln" },
  { neden: "Traumatische Erfahrungen", aciklama: "Vergangene Traumata können in Träumen wiedererlebt werden" },
  { neden: "Schlafstörungen", aciklama: "Unregelmäßiger Schlaf kann Albträume auslösen" },
  { neden: "Essen und Medikamente", aciklama: "Spätes Essen oder bestimmte Medikamente können Einfluss haben" },
  { neden: "Unterdrückte Emotionen", aciklama: "Nicht ausgedrückte Gefühle treten in Träumen auf" },
];

export default function KabusYorumlariPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)",
          padding: "5rem 1rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(76,29,149,0.4)", filter: "blur(100px)" }} />
          {["👁️", "🌙", "✨", "💫", "🌑", "⭐"].map((item, i) => (
            <div key={i} style={{ position: "absolute", top: `${15 + (i * 14) % 70}%`, left: `${8 + (i * 16) % 84}%`, fontSize: `${1.5 + (i % 3) * 0.5}rem`, opacity: 0.3, animation: `float ${4 + i * 0.7}s ease-in-out infinite` }}>{item}</div>
          ))}
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/ruya-tabirleri" style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.15)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← Traumdeutung
          </Link>
          <div style={{ position: "relative", display: "inline-block", marginBottom: "1rem" }}>
            <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(30px)" }} />
            <div style={{ fontSize: "5rem", position: "relative", filter: "drop-shadow(0 0 30px rgba(255,255,255,0.3))" }}>�️</div>
          </div>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem", textShadow: "0 4px 30px rgba(0,0,0,0.3)", letterSpacing: "-0.02em" }}>
            Albtraum-Deutungen
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Die Bedeutung erschreckender Träume - Warnbotschaften des Unterbewusstseins
          </p>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* Kabus Türleri */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Yaygın Kabus Türleri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {KABUS_TURLERI.map((kabus, i) => (
              <Link
                key={i}
                href={`/ruya/${kabus.slug}`}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  borderLeft: "4px solid #6366f1",
                  textDecoration: "none",
                  display: "block",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "2rem" }}>{kabus.icon}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{kabus.baslik}</h3>
                </div>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6, marginBottom: "0.75rem" }}>{kabus.anlam}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ padding: "0.5rem 0.75rem", background: "#eef2ff", borderRadius: "8px" }}>
                    <p style={{ fontSize: "0.8rem", color: "#4338ca", fontWeight: 500 }}>💡 {kabus.cozum}</p>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "#6366f1", fontWeight: 500 }}>Detaylı Yorum →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kabus Nedenleri */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Kabus Nedenleri
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {KABUS_NEDENLERI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>{item.neden}</h3>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Başa Çıkma */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #1e1b4b15, #312e8115)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              🌙 Kabuslarla Başa Çıkma
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#4338ca", marginBottom: "0.5rem" }}>Uyandığınızda</h3>
                <ul style={{ color: "#ffffff", fontSize: "0.9rem", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
                  <li>Derin nefes alın</li>
                  <li>Işığı açın</li>
                  <li>Rüyayı yazın</li>
                  <li>Kendinize güvende olduğunuzu hatırlatın</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#4338ca", marginBottom: "0.5rem" }}>Uzun Vadede</h3>
                <ul style={{ color: "#ffffff", fontSize: "0.9rem", lineHeight: 1.8, paddingLeft: "1.25rem" }}>
                  <li>Uyku düzeninizi iyileştirin</li>
                  <li>Stresi azaltın</li>
                  <li>Rüya günlüğü tutun</li>
                  <li>Gerekirse profesyonel destek alın</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilgi */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              📖 Kabuslar Hakkında Bilmeniz Gerekenler
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Kabuslar, bilinçaltımızın bize gönderdiği önemli mesajlardır. Korkutucu olsalar da,
              aslında işlenmemiş duyguları, bastırılmış korkuları ve çözülmemiş sorunları yüzeye çıkarırlar.
            </p>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Kabusları anlamak ve yorumlamak, kişisel gelişim için güçlü bir araç olabilir.
              Tekrarlayan kabuslar, özellikle dikkat edilmesi gereken konulara işaret eder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
