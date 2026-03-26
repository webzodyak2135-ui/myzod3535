import Link from "next/link";
import { notFound } from "next/navigation";
import { generateBurcFullContent } from "@/lib/ai-content";

export const dynamicParams = true;

export function generateStaticParams() {
  return [
    { slug: 'koc' },
    { slug: 'boga' },
    { slug: 'ikizler' },
    { slug: 'yengec' },
    { slug: 'aslan' },
    { slug: 'basak' },
    { slug: 'terazi' },
    { slug: 'akrep' },
    { slug: 'yay' },
    { slug: 'oglak' },
    { slug: 'kova' },
    { slug: 'balik' },
  ];
}

const BURCLAR_DATA: Record<string, {
  name: string;
  emoji: string;
  date: string;
  element: string;
  gezegen: string;
  color: string;
  ozet: string;
  kisilik: string[];
  uyumlu: string[];
  uyumsuz: string[];
  gunluk: string;
  haftalik: string;
  aylik: string;
}> = {
  koc: {
    name: "Koç",
    emoji: "♈",
    date: "21 Mart - 19 Nisan",
    element: "Ateş",
    gezegen: "Mars",
    color: "#ef4444",
    ozet: "Koç burcu, zodyağın ilk burcu olarak öncü ve cesur bir karaktere sahiptir. Doğal liderlik özellikleri ve sınırsız enerjisiyle tanınır.",
    kisilik: ["Cesur ve atılgan", "Doğal lider", "Enerjik ve dinamik", "Rekabetçi", "Dürüst ve açık sözlü"],
    uyumlu: ["Aslan", "Yay", "İkizler", "Kova"],
    uyumsuz: ["Yengeç", "Terazi", "Oğlak"],
    gunluk: "Bugün enerjin yüksek ve motivasyonun dorukta! Yeni başlangıçlar için ideal bir gün. Cesur adımlar atmaktan çekinme, yıldızlar seni destekliyor. İş hayatında liderlik özelliklerin ön plana çıkacak.",
    haftalik: "Bu hafta Mars'ın etkisiyle aksiyona geçme zamanı. Ertelediğin projeler için harekete geç. Hafta ortasında beklenmedik fırsatlar kapını çalabilir. Finansal konularda dikkatli ol.",
    aylik: "Bu ay kariyer odaklı bir dönem seni bekliyor. Yeni iş fırsatları veya terfi haberleri alabilirsin. Ay sonuna doğru ilişkilerde olumlu gelişmeler var. Sağlık konusunda egzersize ağırlık ver."
  },
  boga: {
    name: "Boğa",
    emoji: "♉",
    date: "20 Nisan - 20 Mayıs",
    element: "Toprak",
    gezegen: "Venüs",
    color: "#ffffff",
    ozet: "Boğa burcu, istikrar ve güvenlik arayışıyla bilinir. Sabırlı, kararlı ve güvenilir yapısıyla çevresine huzur verir.",
    kisilik: ["Sabırlı ve kararlı", "Güvenilir", "Pratik düşünen", "Sanata düşkün", "Sadık ve vefalı"],
    uyumlu: ["Başak", "Oğlak", "Yengeç", "Balık"],
    uyumsuz: ["Aslan", "Akrep", "Kova"],
    gunluk: "Maddi konularda olumlu gelişmeler var. Sabırlı ol, emeklerin karşılığını alacaksın. Bugün konfor alanında kalmak isteyebilirsin ama küçük adımlar bile fark yaratır.",
    haftalik: "Venüs'ün desteğiyle bu hafta estetik ve güzellik konularında şanslısın. Finansal yatırımlar için uygun bir dönem. İlişkilerde güven duygusu ön planda olacak.",
    aylik: "Bu ay maddi kazançlar ve konfor ön planda. Ev veya araç alımı düşünüyorsan değerlendir. Sağlık açısından boğaz ve boyun bölgesine dikkat et."
  },
  ikizler: {
    name: "İkizler",
    emoji: "♊",
    date: "21 Mayıs - 20 Haziran",
    element: "Hava",
    gezegen: "Merkür",
    color: "#eab308",
    ozet: "İkizler burcu, zodyağın en meraklı ve iletişim odaklı burcudur. Çok yönlü zekası ve sosyal yetenekleriyle dikkat çeker.",
    kisilik: ["Meraklı ve öğrenmeye açık", "İletişim ustası", "Çok yönlü", "Esprili", "Uyumlu ve esnek"],
    uyumlu: ["Terazi", "Kova", "Koç", "Aslan"],
    uyumsuz: ["Başak", "Balık", "Yay"],
    gunluk: "İletişim yeteneklerin zirve yapıyor. Sosyal çevren genişliyor, yeni bağlantılar kur. Öğrenme ve paylaşma günü, bilgini çevrene aktar.",
    haftalik: "Merkür retrosu etkisini azaltıyor, iletişim sorunları çözülüyor. Kısa yolculuklar ve yeni öğrenmeler için ideal hafta. Kardeş veya komşularla ilgili haberler alabilirsin.",
    aylik: "Bu ay zihinsel aktivite yoğun. Yeni kurslar, eğitimler veya sertifikalar için harika bir dönem. Sosyal medyada aktifliğin artabilir."
  },
  yengec: {
    name: "Yengeç",
    emoji: "♋",
    date: "21 Haziran - 22 Temmuz",
    element: "Su",
    gezegen: "Ay",
    color: "#3b82f6",
    ozet: "Yengeç burcu, duygusal derinliği ve koruyucu yapısıyla bilinir. Aile ve yuva kavramları hayatının merkezindedir.",
    kisilik: ["Duygusal ve sezgisel", "Koruyucu", "Aile odaklı", "Yaratıcı", "Sadık"],
    uyumlu: ["Akrep", "Balık", "Boğa", "Başak"],
    uyumsuz: ["Koç", "Terazi", "Oğlak"],
    gunluk: "Aile ve ev konuları ön planda. İç dünyana dön, duygusal ihtiyaçlarını dinle. Sevdiklerinle vakit geçirmek seni şarj edecek.",
    haftalik: "Ay'ın hareketleriyle duygusal iniş çıkışlar yaşayabilirsin. Ev dekorasyonu veya taşınma planları gündemde olabilir. Annenle ilgili haberler alabilirsin.",
    aylik: "Bu ay aile ve kök konuları ön planda. Geçmişle ilgili kapanışlar yaşanabilir. Gayrimenkul yatırımları için uygun dönem."
  },
  aslan: {
    name: "Aslan",
    emoji: "♌",
    date: "23 Temmuz - 22 Ağustos",
    element: "Ateş",
    gezegen: "Güneş",
    color: "#f97316",
    ozet: "Aslan burcu, zodyağın en karizmatik ve yaratıcı burcudur. Doğal liderlik ve sahne hakimiyetiyle dikkat çeker.",
    kisilik: ["Karizmatik", "Yaratıcı", "Cömert", "Sadık", "Kendine güvenen"],
    uyumlu: ["Koç", "Yay", "İkizler", "Terazi"],
    uyumsuz: ["Boğa", "Akrep", "Kova"],
    gunluk: "Yaratıcılığın dorukta! Sahnede parlama zamanı. Kendini ifade etmekten çekinme, tüm gözler sende olacak.",
    haftalik: "Güneş'in gücüyle bu hafta merkez sahnedesin. Tanınma ve takdir alacağın bir dönem. Romantik ilişkilerde tutkulu anlar seni bekliyor.",
    aylik: "Bu ay yaratıcı projeler ve eğlence ön planda. Çocuklarla ilgili güzel haberler alabilirsin. Kalp sağlığına dikkat et."
  },
  basak: {
    name: "Başak",
    emoji: "♍",
    date: "23 Ağustos - 22 Eylül",
    element: "Toprak",
    gezegen: "Merkür",
    color: "#84cc16",
    ozet: "Başak burcu, analitik zekası ve mükemmeliyetçi yapısıyla tanınır. Detaylara olan hakimiyeti ve yardımseverliğiyle öne çıkar.",
    kisilik: ["Analitik", "Mükemmeliyetçi", "Yardımsever", "Pratik", "Çalışkan"],
    uyumlu: ["Boğa", "Oğlak", "Yengeç", "Akrep"],
    uyumsuz: ["İkizler", "Yay", "Balık"],
    gunluk: "Detaylara odaklan, mükemmeliyetçiliğin işe yarayacak. Organizasyon ve planlama günü. Sağlık rutinlerini gözden geçir.",
    haftalik: "Merkür'ün etkisiyle analitik yeteneklerin parlıyor. İş yerinde düzenleme ve iyileştirme projeleri için ideal hafta.",
    aylik: "Bu ay sağlık ve günlük rutinler ön planda. Diyet veya egzersiz programı başlatmak için uygun. İş yerinde verimlilik artıyor."
  },
  terazi: {
    name: "Terazi",
    emoji: "♎",
    date: "23 Eylül - 22 Ekim",
    element: "Hava",
    gezegen: "Venüs",
    color: "#ec4899",
    ozet: "Terazi burcu, denge ve uyum arayışıyla bilinir. Estetik anlayışı ve diplomatik yetenekleriyle öne çıkar.",
    kisilik: ["Diplomatik", "Adil", "Estetik", "Sosyal", "Romantik"],
    uyumlu: ["İkizler", "Kova", "Aslan", "Yay"],
    uyumsuz: ["Koç", "Yengeç", "Oğlak"],
    gunluk: "İlişkiler ve ortaklıklar gündemde. Denge ve uyum arayışın meyvelerini verecek. Estetik konularda kararlar alabilirsin.",
    haftalik: "Venüs'ün desteğiyle romantik ilişkiler canlanıyor. İş ortaklıkları için görüşmeler yapabilirsin. Sanat ve güzellik konularında şanslısın.",
    aylik: "Bu ay ilişkiler ve ortaklıklar ön planda. Evlilik veya nişan haberleri alabilirsin. Hukuki konularda olumlu gelişmeler var."
  },
  akrep: {
    name: "Akrep",
    emoji: "♏",
    date: "23 Ekim - 21 Kasım",
    element: "Su",
    gezegen: "Plüton",
    color: "#8b5cf6",
    ozet: "Akrep burcu, derin duygusallığı ve dönüşüm gücüyle tanınır. Sezgisel yetenekleri ve kararlılığıyla dikkat çeker.",
    kisilik: ["Tutkulu", "Kararlı", "Sezgisel", "Gizemli", "Sadık"],
    uyumlu: ["Yengeç", "Balık", "Başak", "Oğlak"],
    uyumsuz: ["Boğa", "Aslan", "Kova"],
    gunluk: "Derin dönüşümler yaşanıyor. Sezgilerin güçlü, iç sesin dinle. Gizli konular gün yüzüne çıkabilir.",
    haftalik: "Plüton'un etkisiyle dönüşüm süreci devam ediyor. Eski alışkanlıklardan kurtulma zamanı. Finansal konularda ortaklıklar gündemde.",
    aylik: "Bu ay dönüşüm ve yenilenme ön planda. Psikolojik derinleşme ve terapi için uygun dönem. Miras veya ortak finanslar gündemde."
  },
  yay: {
    name: "Yay",
    emoji: "♐",
    date: "22 Kasım - 21 Aralık",
    element: "Ateş",
    gezegen: "Jüpiter",
    color: "#f43f5e",
    ozet: "Yay burcu, özgürlük aşkı ve felsefi derinliğiyle bilinir. Macera ruhu ve iyimserliğiyle çevresine ilham verir.",
    kisilik: ["Özgürlükçü", "İyimser", "Felsefi", "Maceraperest", "Dürüst"],
    uyumlu: ["Koç", "Aslan", "Terazi", "Kova"],
    uyumsuz: ["İkizler", "Başak", "Balık"],
    gunluk: "Macera ruhu uyanıyor! Yeni deneyimlere açık ol, ufkunu genişlet. Yabancı kültürler ve uzak yerlerle bağlantı kurabilirsin.",
    haftalik: "Jüpiter'in şansıyla bu hafta fırsatlar kapını çalıyor. Yurtdışı bağlantıları ve eğitim konuları ön planda. Hukuki konularda olumlu gelişmeler.",
    aylik: "Bu ay yolculuklar ve yükseköğrenim ön planda. Yayın veya medya projeleri için uygun dönem. Felsefi ve spiritüel arayışlar yoğunlaşıyor."
  },
  oglak: {
    name: "Oğlak",
    emoji: "♑",
    date: "22 Aralık - 19 Ocak",
    element: "Toprak",
    gezegen: "Satürn",
    color: "#6366f1",
    ozet: "Oğlak burcu, disiplini ve hedef odaklı yapısıyla tanınır. Kariyer tutkusu ve sorumluluk bilinciyle öne çıkar.",
    kisilik: ["Disiplinli", "Hırslı", "Sorumlu", "Pratik", "Sabırlı"],
    uyumlu: ["Boğa", "Başak", "Akrep", "Balık"],
    uyumsuz: ["Koç", "Yengeç", "Terazi"],
    gunluk: "Kariyer hedeflerin netleşiyor. Disiplinli çalışman ödüllendirilecek. Otorite figürleriyle olumlu etkileşimler var.",
    haftalik: "Satürn'ün etkisiyle sorumluluklar artıyor ama ödüller de yakın. Kariyer atılımları için uygun hafta. Uzun vadeli planlar yap.",
    aylik: "Bu ay kariyer ve toplumsal statü ön planda. Terfi veya tanınma haberleri alabilirsin. Kemik ve diş sağlığına dikkat."
  },
  kova: {
    name: "Kova",
    emoji: "♒",
    date: "20 Ocak - 18 Şubat",
    element: "Hava",
    gezegen: "Uranüs",
    color: "#ffffff",
    ozet: "Kova burcu, yenilikçi düşüncesi ve insancıl yaklaşımıyla bilinir. Bağımsızlık aşkı ve orijinalliğiyle dikkat çeker.",
    kisilik: ["Yenilikçi", "Bağımsız", "İnsancıl", "Orijinal", "Entelektüel"],
    uyumlu: ["İkizler", "Terazi", "Koç", "Yay"],
    uyumsuz: ["Boğa", "Aslan", "Akrep"],
    gunluk: "Yenilikçi fikirlerin var! Topluluk çalışmaları ve arkadaşlıklar ön planda. Teknoloji projeleri için harika bir gün.",
    haftalik: "Uranüs'ün etkisiyle beklenmedik değişimler olabilir. Arkadaş grupları ve sosyal aktiviteler yoğun. Dijital projeler için uygun hafta.",
    aylik: "Bu ay arkadaşlıklar ve topluluk çalışmaları ön planda. Sosyal medya projeleri parlıyor. Gelecek planları netleşiyor."
  },
  balik: {
    name: "Balık",
    emoji: "♓",
    date: "19 Şubat - 20 Mart",
    element: "Su",
    gezegen: "Neptün",
    color: "#a855f7",
    ozet: "Balık burcu, sezgisel derinliği ve empatik yapısıyla tanınır. Sanatsal yetenekleri ve spiritüel bağlantısıyla öne çıkar.",
    kisilik: ["Sezgisel", "Empatik", "Yaratıcı", "Romantik", "Spiritüel"],
    uyumlu: ["Yengeç", "Akrep", "Boğa", "Oğlak"],
    uyumsuz: ["İkizler", "Başak", "Yay"],
    gunluk: "Sezgisel güçlerin yüksek. Rüyalarına dikkat et, mesajlar alabilirsin. Sanatsal ve spiritüel aktiviteler için ideal gün.",
    haftalik: "Neptün'ün etkisiyle hayal gücün sınırsız. Sanatsal projeler için ilham dolu bir hafta. Meditasyon ve içsel yolculuk için uygun.",
    aylik: "Bu ay spiritüel gelişim ve içsel yolculuk ön planda. Sanatsal projeler meyvelerini veriyor. Ayak sağlığına dikkat et."
  }
};

export default async function BurcDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const burc = BURCLAR_DATA[slug];

  if (!burc) {
    notFound();
  }

  const aiContent = await generateBurcFullContent({
    slug,
    name: burc.name,
    dateISO: new Date().toISOString().slice(0, 10),
  });

  const gunluk = aiContent?.gunluk ?? burc.gunluk;
  const ask = aiContent?.ask ?? burc.gunluk;
  const kariyer = aiContent?.kariyer ?? burc.gunluk;
  const saglik = aiContent?.saglik ?? burc.gunluk;
  const sans = aiContent?.sans ?? 7;
  const haftalik = aiContent?.haftalik ?? burc.haftalik;
  const aylik = aiContent?.aylik ?? burc.aylik;

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Modern Hero */}
      <section
        style={{
          background: `linear-gradient(135deg, ${burc.color} 0%, ${burc.color}cc 50%, ${burc.color}99 100%)`,
          padding: "5rem 1rem 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Floating Background Elements */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "10%", left: "5%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", filter: "blur(80px)" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "600px", borderRadius: "50%", background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)` }} />
          {/* Floating Stars */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${15 + i * 15}%`,
                left: `${10 + i * 15}%`,
                fontSize: "1.5rem",
                opacity: 0.3,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "72rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Link
            href="/burclar"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.9rem",
              marginBottom: "2rem",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.2)",
              transition: "all 0.3s ease",
            }}
          >
            ← Tüm Burçlar
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
            {/* Glowing Icon */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  filter: "blur(20px)",
                }}
              />
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(20px)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  position: "relative",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2), inset 0 0 30px rgba(255,255,255,0.1)",
                }}
              >
                {burc.emoji}
              </div>
            </div>

            <div>
              <h1 style={{
                fontSize: "clamp(2.5rem, 6vw, 4rem)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.75rem",
                textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                letterSpacing: "-0.02em",
              }}>
                {burc.name} Burcu
              </h1>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <span style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontSize: "1.1rem" }}>📅</span> {burc.date}
                </span>
                <span style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontSize: "1.1rem" }}>🔥</span> {burc.element}
                </span>
                <span style={{
                  padding: "0.5rem 1rem",
                  background: "rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontSize: "1.1rem" }}>🪐</span> {burc.gezegen}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <path d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" fill="var(--theme-bg)" />
          </svg>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>

            {/* Özet */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>✨</span> Genel Özellikler
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.7 }}>{burc.ozet}</p>
            </div>

            {/* Kişilik */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🎭</span> Kişilik Özellikleri
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {burc.kisilik.map((ozellik, i) => (
                  <span key={i} style={{ padding: "0.4rem 0.8rem", background: `${burc.color}15`, color: burc.color, borderRadius: "9999px", fontSize: "0.85rem", fontWeight: 500 }}>
                    {ozellik}
                  </span>
                ))}
              </div>
            </div>

            {/* Günlük Yorum */}
            <div style={{ background: `linear-gradient(135deg, ${burc.color}10, ${burc.color}20)`, borderRadius: "20px", padding: "1.5rem", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🌅</span> Günlük Yorum
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "1.05rem" }}>{gunluk}</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginTop: "1.25rem" }}>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>❤️ AŞK</div>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{ask}</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>💼 KARİYER</div>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{kariyer}</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>🌿 SAĞLIK</div>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff", lineHeight: 1.6 }}>{saglik}</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.7)", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 600, color: burc.color, marginBottom: "0.5rem" }}>🍀 ŞANS</div>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: burc.color }}>{sans}</div>
                  <div style={{ fontSize: "0.75rem", color: "#ffffff" }}>/10</div>
                </div>
              </div>
            </div>

            {/* Haftalık Yorum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>📅</span> Haftalık Yorum
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8 }}>{haftalik}</p>
            </div>

            {/* Aylık Yorum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>🗓️</span> Aylık Yorum
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8 }}>{aylik}</p>
            </div>

            {/* Uyum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.5rem" }}>💑</span> Burç Uyumu
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>✓ Uyumlu Burçlar</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {burc.uyumlu.map((b, i) => (
                      <span key={i} style={{ padding: "0.3rem 0.7rem", background: "#1a0b2e", color: "#ffffff", borderRadius: "9999px", fontSize: "0.85rem" }}>{b}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 600, color: "#ef4444", marginBottom: "0.5rem" }}>✗ Uyumsuz Burçlar</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {burc.uyumsuz.map((b, i) => (
                      <span key={i} style={{ padding: "0.3rem 0.7rem", background: "#1a0b2e", color: "#991b1b", borderRadius: "9999px", fontSize: "0.85rem" }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Diğer Burçlar - Yatay Scroll */}
      <section style={{ padding: "2rem 0", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            🔮 Diğer Burçları Keşfet
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            padding: "0.5rem 1rem 1.5rem",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
          {Object.entries(BURCLAR_DATA)
            .filter(([key]) => key !== slug)
            .map(([key, data]) => (
              <Link
                key={key}
                href={`/burclar/${key}`}
                style={{
                  minWidth: "160px",
                  padding: "1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "16px",
                  textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: `${data.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {data.emoji}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>
                  {data.name}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#ffffff" }}>{data.date}</p>
                <div style={{ display: "flex", gap: "0.25rem", marginTop: "0.5rem" }}>
                  <span style={{ fontSize: "0.7rem", padding: "0.15rem 0.4rem", background: `${data.color}15`, color: data.color, borderRadius: "4px" }}>
                    {data.element}
                  </span>
                </div>
              </Link>
            ))}
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
        </div>
      </section>
    </div>
  );
}
