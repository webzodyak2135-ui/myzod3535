"use client";

import { useState } from "react";
import Link from "next/link";

const SORULAR = [
  {
    soru: "Hangi tarihsel dönem seni en çok çekiyor?",
    secenekler: [
      { text: "Antik Mısır - Piramitler, firavunlar", donem: "misir" },
      { text: "Orta Çağ - Şövalyeler, kaleler", donem: "ortacag" },
      { text: "Rönesans - Sanat, bilim, keşif", donem: "ronesans" },
      { text: "Viktorya Dönemi - Zarafet, endüstri", donem: "viktorya" },
    ]
  },
  {
    soru: "Açıklayamadığın bir korku veya fobin var mı?",
    secenekler: [
      { text: "Su veya boğulma korkusu", donem: "denizci" },
      { text: "Yükseklik veya düşme korkusu", donem: "savasci" },
      { text: "Karanlık veya kapalı alan korkusu", donem: "mahkum" },
      { text: "Ateş korkusu", donem: "cadi" },
    ]
  },
  {
    soru: "Hangi coğrafya seni daha çok çekiyor?",
    secenekler: [
      { text: "Çöller ve piramitler", donem: "misir" },
      { text: "Ormanlar ve kaleler", donem: "ortacag" },
      { text: "Denizler ve gemiler", donem: "denizci" },
      { text: "Dağlar ve tapınaklar", donem: "tibet" },
    ]
  },
  {
    soru: "Rüyalarında sık gördüğün tema hangisi?",
    secenekler: [
      { text: "Savaş, mücadele sahneleri", donem: "savasci" },
      { text: "Saray, kraliyet ortamları", donem: "viktorya" },
      { text: "Doğa, hayvanlar, şifa", donem: "saman" },
      { text: "Gizem, ritüeller, büyü", donem: "cadi" },
    ]
  },
  {
    soru: "Hangi yetenek sana doğal geliyor?",
    secenekler: [
      { text: "Şifa, insanlara yardım", donem: "saman" },
      { text: "Liderlik, strateji", donem: "savasci" },
      { text: "Sanat, yaratıcılık", donem: "ronesans" },
      { text: "Sezgi, spiritüellik", donem: "tibet" },
    ]
  },
];

const GECMIS_YASAM_SONUCLARI: Record<string, { baslik: string; donem: string; hikaye: string; ders: string }> = {
  misir: {
    baslik: "Antik Mısır Rahibi/Rahibesi",
    donem: "Antik Mısır, M.Ö. 2000",
    hikaye: "Nil kıyısındaki büyük tapınaklarda hizmet eden bir rahip/rahibeydin. Gizli bilgilere erişimin vardı ve yıldızları okuyordun.",
    ders: "Bu yaşamdan getirdiğin ders: Bilgeliği paylaşmak ve spiritüel rehberlik."
  },
  ortacag: {
    baslik: "Orta Çağ Şövalyesi",
    donem: "Orta Çağ Avrupası, 1200'ler",
    hikaye: "Onur ve cesaretle savaşan bir şövalyeydin. Kralına sadık, halkını koruyan bir savaşçıydın.",
    ders: "Bu yaşamdan getirdiğin ders: Onur, sadakat ve koruma içgüdüsü."
  },
  ronesans: {
    baslik: "Rönesans Sanatçısı",
    donem: "İtalya, 1500'ler",
    hikaye: "Floransa'da yaşayan yetenekli bir sanatçıydın. Resim, heykel veya müzikle uğraşıyordun.",
    ders: "Bu yaşamdan getirdiğin ders: Yaratıcılık ve güzelliği dünyaya getirmek."
  },
  viktorya: {
    baslik: "Viktorya Dönemi Aristokratı",
    donem: "İngiltere, 1800'ler",
    hikaye: "Zarif bir konakta yaşayan, toplumda saygın bir konuma sahip biriydin.",
    ders: "Bu yaşamdan getirdiğin ders: Zarafet, görgü ve sosyal sorumluluk."
  },
  denizci: {
    baslik: "Kaşif Denizci",
    donem: "Keşif Çağı, 1500'ler",
    hikaye: "Bilinmeyen denizlere yelken açan cesur bir denizciydin. Yeni dünyalar keşfettin.",
    ders: "Bu yaşamdan getirdiğin ders: Macera ruhu ve bilinmeyene açılma cesareti."
  },
  savasci: {
    baslik: "Antik Savaşçı",
    donem: "Antik Roma/Yunan",
    hikaye: "Büyük savaşlarda yer almış, cesareti ve gücüyle tanınan bir savaşçıydın.",
    ders: "Bu yaşamdan getirdiğin ders: Cesaret, güç ve koruma içgüdüsü."
  },
  saman: {
    baslik: "Şaman/Şifacı",
    donem: "Kadim Kabileler",
    hikaye: "Kabilenin şifacısı ve spiritüel rehberiydin. Doğayla derin bir bağın vardı.",
    ders: "Bu yaşamdan getirdiğin ders: Şifa gücü ve doğayla uyum."
  },
  tibet: {
    baslik: "Tibet Keşişi",
    donem: "Tibet, 1000'ler",
    hikaye: "Dağ tepesindeki bir manastırda yaşayan, meditasyon ve bilgelikle uğraşan bir keşiştin.",
    ders: "Bu yaşamdan getirdiğin ders: İç huzur, meditasyon ve spiritüel aydınlanma."
  },
  cadi: {
    baslik: "Bilge Kadın/Şifacı",
    donem: "Orta Çağ Avrupası",
    hikaye: "Bitkilerle şifa yapan, doğanın sırlarını bilen bilge bir kadındın.",
    ders: "Bu yaşamdan getirdiğin ders: Sezgi, doğal şifa ve içsel güç."
  },
  mahkum: {
    baslik: "Özgürlük Savaşçısı",
    donem: "Çeşitli Dönemler",
    hikaye: "Özgürlük için mücadele eden, zor koşullarda hayatta kalan güçlü bir ruhun.",
    ders: "Bu yaşamdan getirdiğin ders: Dayanıklılık ve özgürlük aşkı."
  },
};

export default function GecmisYasamTestiPage() {
  const [currentSoru, setCurrentSoru] = useState(0);
  const [cevaplar, setCevaplar] = useState<string[]>([]);
  const [sonuc, setSonuc] = useState<string | null>(null);

  const handleCevap = (donem: string) => {
    const yeniCevaplar = [...cevaplar, donem];
    setCevaplar(yeniCevaplar);

    if (currentSoru < SORULAR.length - 1) {
      setCurrentSoru(currentSoru + 1);
    } else {
      const sayim: Record<string, number> = {};
      yeniCevaplar.forEach(c => { sayim[c] = (sayim[c] || 0) + 1; });
      const enCok = Object.entries(sayim).sort((a, b) => b[1] - a[1])[0][0];
      setSonuc(enCok);
    }
  };

  const resetTest = () => {
    setCurrentSoru(0);
    setCevaplar([]);
    setSonuc(null);
  };

  if (sonuc) {
    const yasam = GECMIS_YASAM_SONUCLARI[sonuc];
    return (
      <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
        <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", padding: "4rem 1rem", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🔮</div>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem" }}>{yasam.donem}</p>
            <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>{yasam.baslik}</h1>
            
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#a78bfa", marginBottom: "0.75rem" }}>📜 Geçmiş Yaşam Hikayeniz</h3>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.7 }}>{yasam.hikaye}</p>
            </div>
            
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", marginBottom: "2rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#fbbf24", marginBottom: "0.75rem" }}>✨ Karmik Ders</h3>
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.7 }}>{yasam.ders}</p>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={resetTest} style={{ padding: "0.75rem 1.5rem", background: "#1a0b2e", color: "#312e81", borderRadius: "9999px", fontWeight: 600, border: "none", cursor: "pointer" }}>
                Tekrar Dene
              </button>
              <Link href="/testler" style={{ padding: "0.75rem 1.5rem", background: "rgba(255,255,255,0.2)", color: "#ffffff", borderRadius: "9999px", fontWeight: 600, textDecoration: "none" }}>
                Diğer Testler
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const soru = SORULAR[currentSoru];

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", padding: "2rem 1rem", textAlign: "center" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link href="/testler" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", textDecoration: "none" }}>← Testler</Link>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#ffffff", marginTop: "1rem" }}>🔮 Geçmiş Yaşam Testi</h1>
          <p style={{ color: "rgba(255,255,255,0.8)", marginTop: "0.5rem" }}>Önceki hayatınızı keşfedin</p>
        </div>
      </section>

      <div style={{ padding: "1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ height: "8px", background: "#ffffff", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${((currentSoru + 1) / SORULAR.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #1e1b4b, #312e81)", transition: "width 0.3s ease" }} />
          </div>
        </div>
      </div>

      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>{soru.soru}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {soru.secenekler.map((secenek, i) => (
              <button key={i} onClick={() => handleCevap(secenek.donem)} style={{ padding: "1.25rem", background: "#1a0b2e", border: "2px solid #ffffff", borderRadius: "16px", fontSize: "1rem", color: "#ffffff", cursor: "pointer", textAlign: "left" }}>
                {secenek.text}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
