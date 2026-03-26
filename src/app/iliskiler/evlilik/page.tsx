"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import evlilikAnim from "../../../../public/lottie/evlilik.json";
import RelatedCards, { ILISKI_ONERILERI, BURC_ONERILERI } from "@/components/RelatedCards";

const EVLILIK_BURCLARI = [
  { burc: "Koç", emoji: "♈", evlilikYasi: "Geç evlilik tercih eder", idealPartner: "Sabırlı ve destekleyici", tavsiye: "Bağımsızlığını koruyacak bir partner seç" },
  { burc: "Boğa", emoji: "♉", evlilikYasi: "Hazır hissettiğinde", idealPartner: "Sadık ve güvenilir", tavsiye: "Maddi güvenlik önemli ama tek kriter olmasın" },
  { burc: "İkizler", emoji: "♊", evlilikYasi: "Zihinsel olgunlaştığında", idealPartner: "Entelektüel ve eğlenceli", tavsiye: "Sıkılmayacağın biriyle evlen" },
  { burc: "Yengeç", emoji: "♋", evlilikYasi: "Erken evlilik eğilimi", idealPartner: "Aile odaklı ve koruyucu", tavsiye: "Duygusal güvenlik sağlayan biriyle" },
  { burc: "Aslan", emoji: "♌", evlilikYasi: "Doğru kişiyi bulduğunda", idealPartner: "Takdir eden ve destekleyen", tavsiye: "Seni olduğun gibi seven biriyle" },
  { burc: "Başak", emoji: "♍", evlilikYasi: "Her şey mükemmel olduğunda", idealPartner: "Düzenli ve güvenilir", tavsiye: "Mükemmeliyetçiliği bırak, kusurları kabul et" },
  { burc: "Terazi", emoji: "♎", evlilikYasi: "İlişki odaklı, erken olabilir", idealPartner: "Uyumlu ve zarif", tavsiye: "Kendi kimliğini kaybetme" },
  { burc: "Akrep", emoji: "♏", evlilikYasi: "Güvendiğinde", idealPartner: "Sadık ve derin", tavsiye: "Kontrol ihtiyacını bırak" },
  { burc: "Yay", emoji: "♐", evlilikYasi: "Geç, özgürlüğü sevdiği için", idealPartner: "Maceraperest ve özgür", tavsiye: "Seni kısıtlamayan biriyle" },
  { burc: "Oğlak", emoji: "♑", evlilikYasi: "Kariyer oturduktan sonra", idealPartner: "Hırslı ve destekleyici", tavsiye: "İş-yaşam dengesini kur" },
  { burc: "Kova", emoji: "♒", evlilikYasi: "Geleneksel evliliğe mesafeli", idealPartner: "Bağımsız ve entelektüel", tavsiye: "Farklı bir ilişki modeli düşün" },
  { burc: "Balık", emoji: "♓", evlilikYasi: "Aşık olduğunda hemen", idealPartner: "Romantik ve anlayışlı", tavsiye: "Gerçekçi beklentiler koy" },
];

const EVLILIK_ZAMANLARI = [
  { donem: "İlkbahar Evlilikleri", aciklama: "Yeni başlangıçlar, umut dolu. Koç, Boğa, İkizler dönemleri için ideal." },
  { donem: "Yaz Evlilikleri", aciklama: "Tutku ve enerji dolu. Yengeç, Aslan, Başak dönemleri için uygun." },
  { donem: "Sonbahar Evlilikleri", aciklama: "Denge ve uyum. Terazi, Akrep, Yay dönemleri için şanslı." },
  { donem: "Kış Evlilikleri", aciklama: "Ciddi ve kalıcı. Oğlak, Kova, Balık dönemleri için anlamlı." },
];

export default function EvlilikPage() {
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
          @keyframes evlilikFloat {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-14px) scale(1.03); }
          }
          @keyframes evlilikGlow {
            0%, 100% { box-shadow: 0 0 30px rgba(168,85,247,0.5), 0 0 70px rgba(236,72,153,0.25), 0 16px 50px rgba(0,0,0,0.6); }
            50% { box-shadow: 0 0 60px rgba(168,85,247,0.85), 0 0 110px rgba(236,72,153,0.45), 0 16px 50px rgba(0,0,0,0.6); }
          }
          @keyframes starTwinkle {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.8; }
          }
        `}</style>

        {/* Lottie Animation Background */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", opacity: 0.5, zIndex: 0 }}>
          <Lottie animationData={evlilikAnim} loop autoplay style={{ width: "100%", height: "100%", maxWidth: "450px", maxHeight: "450px" }} />
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
          <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(168,85,247,0.12)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(99,102,241,0.1)", filter: "blur(80px)" }} />
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link href="/iliskiler" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", textDecoration: "none", padding: "0.5rem 1rem", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.12)", display: "inline-block", marginBottom: "1.5rem" }}>
            ← İlişkiler
          </Link>

          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#ffffff", marginBottom: "0.5rem", textShadow: "0 0 40px rgba(168,85,247,0.6)", letterSpacing: "-0.02em" }}>
            Evlilik Önerileri
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "500px", margin: "0 auto 2.5rem" }}>
            Yıldızlar evlilik için ne diyor? Burcuna göre evlilik rehberi
          </p>

          {/* Hero Görsel - Animasyonlu */}
          <img
            src="/img/iliskiler-evlilikonerileri%20(1).jpg"
            alt="Evlilik Önerileri"
            style={{
              width: "clamp(150px, 18vw, 210px)",
              height: "clamp(150px, 18vw, 210px)",
              borderRadius: "50%",
              objectFit: "cover",
              border: "none",
              display: "block",
              margin: "0 auto",
              animation: "evlilikFloat 5s ease-in-out infinite, evlilikGlow 3s ease-in-out infinite",
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

      {/* Burçlara Göre Evlilik */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Burcuna Göre Evlilik Rehberi
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {EVLILIK_BURCLARI.map((item) => (
              <div key={item.burc} style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{item.burc}</h3>
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong>Evlilik Zamanı:</strong> {item.evlilikYasi}
                </div>
                <div style={{ fontSize: "0.85rem", color: "#ffffff", marginBottom: "0.5rem" }}>
                  <strong>İdeal Partner:</strong> {item.idealPartner}
                </div>
                <div style={{ padding: "0.75rem", background: "#1a0b2e", borderRadius: "12px", marginTop: "0.75rem" }}>
                  <p style={{ fontSize: "0.85rem", color: "#7c3aed" }}>💡 {item.tavsiye}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evlilik Zamanları */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            🗓️ Evlilik İçin Şanslı Dönemler
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {EVLILIK_ZAMANLARI.map((item, i) => (
              <div key={i} style={{ background: "#1a0b2e", borderRadius: "16px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#a855f7", marginBottom: "0.5rem" }}>{item.donem}</h3>
                <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tavsiyeler */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ background: "linear-gradient(135deg, #a855f715, #ec489915)", borderRadius: "24px", padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
              💕 Mutlu Evlilik İçin Astrolojik Tavsiyeler
            </h2>
            <ul style={{ color: "#ffffff", lineHeight: 2, paddingLeft: "1.5rem" }}>
              <li>Sadece Güneş burcuna değil, Ay ve Venüs uyumuna da bakın</li>
              <li>Venüs retrosu dönemlerinde evlilik kararı almaktan kaçının</li>
              <li>Merkür retrosu dönemlerinde nikah tarihi belirlemeyin</li>
              <li>Dolunay dönemleri duygusal yoğunluk getirir, dikkatli olun</li>
              <li>Jüpiter&apos;in burcunuza geçişi evlilik için şanslı dönemdir</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Önerilen İçerikler */}
      <RelatedCards
        title="İlgini Çekebilir"
        items={[
          ...ILISKI_ONERILERI.filter(item => item.href !== "/iliskiler/evlilik"),
          BURC_ONERILERI[3]
        ].slice(0, 4)}
      />
    </div>
  );
}

