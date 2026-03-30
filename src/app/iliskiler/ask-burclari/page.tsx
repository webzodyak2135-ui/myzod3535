import Link from "next/link";

const ASK_BURCLARI = [
  {
    burc: "Koç",
    emoji: "♈",
    color: "#ef4444",
    askTarzi: "Leidenschaftlich und aufregend",
    sevgiDili: "Körperliche Nähe und Abenteuer",
    uyumlu: ["Löwe", "Schütze", "Zwillinge"],
    dikkat: "Ungeduld und Dominanz",
    tavsiye: "Gib deinem Partner Raum, sei geduldig"
  },
  {
    burc: "Boğa",
    emoji: "♉",
    color: "#ffffff",
    askTarzi: "Treu und romantisch",
    sevgiDili: "Geschenke und körperliche Berührung",
    uyumlu: ["Jungfrau", "Steinbock", "Krebs"],
    dikkat: "Sturheit und Eifersucht",
    tavsiye: "Sei offen für Veränderungen, lass Misstrauen los"
  },
  {
    burc: "İkizler",
    emoji: "♊",
    color: "#eab308",
    askTarzi: "Spaßig und intellektuell",
    sevgiDili: "Gespräche und geistige Harmonie",
    uyumlu: ["Waage", "Wassermann", "Widder"],
    dikkat: "Unentschlossenheit und Oberflächlichkeit",
    tavsiye: "Entwickle emotionale Tiefe"
  },
  {
    burc: "Yengeç",
    emoji: "♋",
    color: "#3b82f6",
    askTarzi: "Beschützend und emotional",
    sevgiDili: "Fürsorge und häusliche Umgebung",
    uyumlu: ["Skorpion", "Fische", "Stier"],
    dikkat: "Überempfindlichkeit und Abhängigkeit",
    tavsiye: "Bewahre deine Unabhängigkeit, lass die Vergangenheit los"
  },
  {
    burc: "Aslan",
    emoji: "♌",
    color: "#f97316",
    askTarzi: "Großzügig und auffällig",
    sevgiDili: "Lob und Aufmerksamkeit",
    uyumlu: ["Widder", "Schütze", "Waage"],
    dikkat: "Ego und Aufmerksamkeitsbedarf",
    tavsiye: "Sieh auch die Bedürfnisse deines Partners"
  },
  {
    burc: "Jungfrau",
    emoji: "♍",
    color: "#84cc16",
    askTarzi: "Sorgfältig und unterstützend",
    sevgiDili: "Dienst und praktische Hilfe",
    uyumlu: ["Stier", "Steinbock", "Krebs"],
    dikkat: "Kritik und Perfektionismus",
    tavsiye: "Akzeptiere Fehler, entspann dich"
  },
  {
    burc: "Waage",
    emoji: "♎",
    color: "#ec4899",
    askTarzi: "Romantisch und harmonisch",
    sevgiDili: "Ästhetik und Zusammensein",
    uyumlu: ["Zwillinge", "Wassermann", "Löwe"],
    dikkat: "Unentschlossenheit und Konfliktvermeidung",
    tavsiye: "Drücke auch deine eigenen Bedürfnisse aus"
  },
  {
    burc: "Akrep",
    emoji: "♏",
    color: "#8b5cf6",
    askTarzi: "Intensiv und leidenschaftlich",
    sevgiDili: "Tiefe Bindung und Loyalität",
    uyumlu: ["Krebs", "Fische", "Steinbock"],
    dikkat: "Kıskançlık ve kontrol",
    tavsiye: "Güven geliştir, bırakmayı öğren"
  },
  {
    burc: "Yay",
    emoji: "♐",
    color: "#f43f5e",
    askTarzi: "Özgür ve maceraperest",
    sevgiDili: "Macera ve büyüme",
    uyumlu: ["Koç", "Aslan", "Kova"],
    dikkat: "Bağlanma korkusu ve dikkatsizlik",
    tavsiye: "Taahhütten korkma, derinleş"
  },
  {
    burc: "Oğlak",
    emoji: "♑",
    color: "#6366f1",
    askTarzi: "Ciddi ve sadık",
    sevgiDili: "Güvenlik ve gelecek planları",
    uyumlu: ["Boğa", "Başak", "Akrep"],
    dikkat: "İş odaklılık ve duygusal mesafe",
    tavsiye: "Duygularını ifade et, rahatla"
  },
  {
    burc: "Kova",
    emoji: "♒",
    color: "#ffffff",
    askTarzi: "Bağımsız ve arkadaşça",
    sevgiDili: "Entelektüel bağ ve özgürlük",
    uyumlu: ["İkizler", "Terazi", "Yay"],
    dikkat: "Duygusal mesafe ve öngörülemezlik",
    tavsiye: "Duygusal yakınlığa izin ver"
  },
  {
    burc: "Balık",
    emoji: "♓",
    color: "#a855f7",
    askTarzi: "Romantik ve fedakar",
    sevgiDili: "Duygusal bağ ve hayal gücü",
    uyumlu: ["Yengeç", "Akrep", "Boğa"],
    dikkat: "Gerçeklikten kaçış ve sınır eksikliği",
    tavsiye: "Sınırlarını koru, ayakların yere bassın"
  },
];

export default function AskBurclariPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #fb7185 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>
            ← Beziehungen
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>💕</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Liebessternzeichen
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Liebesstil, Liebessprache und Beziehungsdynamik jedes Sternzeichens
          </p>
        </div>
      </section>

      {/* Burç Kartları */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {ASK_BURCLARI.map((burc) => (
              <div
                key={burc.burc}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ background: `linear-gradient(135deg, ${burc.color}20, ${burc.color}40)`, padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "2.5rem" }}>{burc.emoji}</span>
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>{burc.burc}</h3>
                    <p style={{ fontSize: "0.85rem", color: burc.color, fontWeight: 600 }}>{burc.askTarzi}</p>
                  </div>
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <div style={{ marginBottom: "1rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>💝 Sevgi Dili</p>
                    <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>{burc.sevgiDili}</p>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>✓ Uyumlu Burçlar</p>
                    <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>{burc.uyumlu.join(", ")}</p>
                  </div>
                  <div style={{ marginBottom: "1rem" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>⚠️ Dikkat</p>
                    <p style={{ fontSize: "0.9rem", color: "#f59e0b" }}>{burc.dikkat}</p>
                  </div>
                  <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px" }}>
                    <p style={{ fontSize: "0.85rem", color: "#ffffff" }}>💡 {burc.tavsiye}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
