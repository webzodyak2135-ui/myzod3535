"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import flortAnim from "../../../../public/lottie/flort.json";
import RelatedCards, { ILISKI_ONERILERI, BURC_ONERILERI } from "@/components/RelatedCards";

const FLORT_BURCLARI = [
  { burc: "Koç", emoji: "♈", tarzi: "Doğrudan ve cesur", etkileme: "Meydan oku, rekabet et", kacirma: "Pasif ve sıkıcı olmak", ipucu: "İlk adımı at, çekinme" },
  { burc: "Boğa", emoji: "♉", tarzi: "Yavaş ve romantik", etkileme: "Güzel yemekler, hediyeler", kacirma: "Acele etmek, baskı yapmak", ipucu: "Sabırlı ol, güven inşa et" },
  { burc: "İkizler", emoji: "♊", tarzi: "Esprili ve entelektüel", etkileme: "İlginç sohbetler, espri", kacirma: "Sıkıcı ve monoton olmak", ipucu: "Zekice flört et, şaşırt" },
  { burc: "Yengeç", emoji: "♋", tarzi: "Duygusal ve koruyucu", etkileme: "Samimi ilgi, güvenlik", kacirma: "Soğuk ve mesafeli olmak", ipucu: "Duygusal bağ kur, dinle" },
  { burc: "Aslan", emoji: "♌", tarzi: "Gösterişli ve tutkulu", etkileme: "Övgü, dikkat, hayranlık", kacirma: "Görmezden gelmek", ipucu: "Onu özel hissettir" },
  { burc: "Başak", emoji: "♍", tarzi: "Nazik ve düşünceli", etkileme: "Detaylara dikkat, yardım", kacirma: "Dağınık ve plansız olmak", ipucu: "Küçük jestler yap" },
  { burc: "Terazi", emoji: "♎", tarzi: "Zarif ve romantik", etkileme: "Estetik, güzellik, uyum", kacirma: "Kaba ve çirkin davranmak", ipucu: "Romantik ortamlar yarat" },
  { burc: "Akrep", emoji: "♏", tarzi: "Yoğun ve gizemli", etkileme: "Gizem, derinlik, tutku", kacirma: "Yüzeysel ve sahte olmak", ipucu: "Gizemini koru, derin ol" },
  { burc: "Yay", emoji: "♐", tarzi: "Eğlenceli ve maceraperest", etkileme: "Macera, spontanlık, eğlence", kacirma: "Kısıtlayıcı ve ciddi olmak", ipucu: "Eğlenceli planlar yap" },
  { burc: "Oğlak", emoji: "♑", tarzi: "Ciddi ve geleneksel", etkileme: "Başarı, güvenilirlik, statü", kacirma: "Güvenilmez görünmek", ipucu: "Ciddi niyetini göster" },
  { burc: "Kova", emoji: "♒", tarzi: "Özgün ve arkadaşça", etkileme: "Farklılık, entelektüellik", kacirma: "Sıradan ve baskıcı olmak", ipucu: "Arkadaş gibi yaklaş" },
  { burc: "Balık", emoji: "♓", tarzi: "Romantik ve hayalperest", etkileme: "Romantizm, sanat, hayal", kacirma: "Kaba ve gerçekçi olmak", ipucu: "Romantik jestler yap" },
];

const FLORT_IPUCLARI = [
  { baslik: "Göz Teması", aciklama: "Göz teması güven ve ilgi gösterir. Ama abartma!", icon: "👀" },
  { baslik: "Gülümseme", aciklama: "Samimi bir gülümseme kapıları açar.", icon: "😊" },
  { baslik: "Aktif Dinleme", aciklama: "Karşındakini gerçekten dinle, sorular sor.", icon: "👂" },
  { baslik: "Hafif Dokunuş", aciklama: "Uygun anlarda hafif dokunuşlar yakınlık kurar.", icon: "✋" },
  { baslik: "Özgüven", aciklama: "Kendine güven çekicidir. Ama kibirli olma.", icon: "💪" },
  { baslik: "Mizah", aciklama: "Güldürmek bağ kurar. Ama aşırıya kaçma.", icon: "😄" },
];

export default function FlortPage() {
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
          @keyframes flortFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-14px) scale(1.03); }
          }
          @keyframes flortGlow {
            0%, 100% { box-shadow: 0 0 30px rgba(249,115,22,0.5), 0 0 70px rgba(251,191,36,0.25), 0 16px 50px rgba(0,0,0,0.6); }
            50% { box-shadow: 0 0 60px rgba(249,115,22,0.85), 0 0 110px rgba(251,191,36,0.45), 0 16px 50px rgba(0,0,0,0.6); }
          }
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.8; }
          }
        `}</style>

        {/* Lottie Animation Background */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.5, zIndex: 0 }}>
          <Lottie animationData={flortAnim} loop autoplay style={{ width: "100%", height: "100%", maxWidth: "450px", maxHeight: "450px" }} />
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
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(249,115,22,0.12)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(251,191,36,0.1)", filter: "blur(80px)" }} />
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← İlişkiler
          </Link>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 40px rgba(249,115,22,0.6)", letterSpacing: "-0.02em" }}>
            Flört Taktikleri
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Burcuna göre flört tavsiyeleri - Nasıl etkilenir, nasıl etkilersin?
          </p>

          {/* Hero Görsel - Animasyonlu */}
          <img
            src="/img/iliskiler-fl%C3%B6rt.jpg"
            alt="Flört Taktikleri"
            style={{
              width: "clamp(150px, 18vw, 210px)",
              height: "clamp(150px, 18vw, 210px)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid rgba(249,115,22,0.55)",
              display: "block",
              margin: "0 auto",
              animation: "flortFloat 5s ease-in-out infinite, flortGlow 3s ease-in-out infinite",
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

      {/* Genel İpuçları */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Flört İpuçları
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }}>
            {FLORT_IPUCLARI.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  padding: "1.25rem",
                  textAlign: "center",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>{item.baslik}</h3>
                <p style={{ fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.5 }}>{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Burçlara Göre */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Burcuna Göre Flört Rehberi
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {FLORT_BURCLARI.map((item) => (
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
                  <div>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.burc}</h3>
                    <p style={{ fontSize: "0.85rem", color: "#f97316" }}>{item.tarzi}</p>
                  </div>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#ffffff" }}>✓ Etkileme:</strong> {item.etkileme}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong style={{ color: "#ef4444" }}>✗ Kaçırma:</strong> {item.kacirma}
                </div>
                <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", marginTop: "0.75rem" }}>
                  <p style={{ fontSize: "0.85rem", color: "#c2410c" }}>💡 {item.ipucu}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Önerilen İçerikler */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          ...ILISKI_ONERILERI.filter(item => item.href !== "/iliskiler/flort"),
          BURC_ONERILERI[3]
        ].slice(0, 4)}
      />
    </div>
  );
}
