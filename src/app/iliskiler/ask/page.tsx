import Link from "next/link";

const ASK_BURCLARI = [
  {
    burc: "Koç",
    emoji: "♈",
    color: "#ef4444",
    askTarzi: "Tutkulu ve heyecanlı",
    sevgiDili: "Fiziksel yakınlık ve macera",
    uyumlu: ["Aslan", "Yay", "İkizler"],
    dikkat: "Sabırsızlık ve baskınlık",
    tavsiye: "Partnerine alan ver, sabırlı ol"
  },
  {
    burc: "Boğa",
    emoji: "♉",
    color: "#ffffff",
    askTarzi: "Sadık ve romantik",
    sevgiDili: "Hediyeler ve fiziksel dokunuş",
    uyumlu: ["Başak", "Oğlak", "Yengeç"],
    dikkat: "İnatçılık ve kıskançlık",
    tavsiye: "Değişime açık ol, güvensizliği bırak"
  },
  {
    burc: "İkizler",
    emoji: "♊",
    color: "#eab308",
    askTarzi: "Eğlenceli ve entelektüel",
    sevgiDili: "Sohbet ve zihinsel uyum",
    uyumlu: ["Terazi", "Kova", "Koç"],
    dikkat: "Kararsızlık ve yüzeysellik",
    tavsiye: "Duygusal derinlik geliştir"
  },
  {
    burc: "Yengeç",
    emoji: "♋",
    color: "#3b82f6",
    askTarzi: "Koruyucu ve duygusal",
    sevgiDili: "Bakım ve ev ortamı",
    uyumlu: ["Akrep", "Balık", "Boğa"],
    dikkat: "Aşırı hassasiyet ve bağımlılık",
    tavsiye: "Bağımsızlığını koru, geçmişi bırak"
  },
  {
    burc: "Aslan",
    emoji: "♌",
    color: "#f97316",
    askTarzi: "Cömert ve gösterişli",
    sevgiDili: "Övgü ve dikkat",
    uyumlu: ["Koç", "Yay", "Terazi"],
    dikkat: "Ego ve dikkat ihtiyacı",
    tavsiye: "Partnerin ihtiyaçlarını da gör"
  },
  {
    burc: "Başak",
    emoji: "♍",
    color: "#84cc16",
    askTarzi: "Özenli ve destekleyici",
    sevgiDili: "Hizmet ve pratik yardım",
    uyumlu: ["Boğa", "Oğlak", "Yengeç"],
    dikkat: "Eleştirellik ve mükemmeliyetçilik",
    tavsiye: "Kusurları kabul et, rahatla"
  },
  {
    burc: "Terazi",
    emoji: "♎",
    color: "#ec4899",
    askTarzi: "Romantik ve uyumlu",
    sevgiDili: "Estetik ve birliktelik",
    uyumlu: ["İkizler", "Kova", "Aslan"],
    dikkat: "Kararsızlık ve çatışmadan kaçınma",
    tavsiye: "Kendi ihtiyaçlarını da ifade et"
  },
  {
    burc: "Akrep",
    emoji: "♏",
    color: "#8b5cf6",
    askTarzi: "Yoğun ve tutkulu",
    sevgiDili: "Derin bağ ve sadakat",
    uyumlu: ["Yengeç", "Balık", "Oğlak"],
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
            ← İlişkiler
          </Link>
          <div style={{ fontSize: "4rem", marginTop: "1rem" }}>💕</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginTop: "0.5rem" }}>
            Aşk Burçları
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.9)", maxWidth: "600px", margin: "1rem auto 0" }}>
            Her burcun aşk tarzı, sevgi dili ve ilişki dinamikleri
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
