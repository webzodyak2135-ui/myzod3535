import Link from "next/link";

// ═══════════════════════════════════════
// DATA DEFINITIONS
// ═══════════════════════════════════════

const ZODIAC_SIGNS = [
  { sign: "Koç", icon: "♈", date: "21 Mar – 19 Nis", slug: "koc" },
  { sign: "Boğa", icon: "♉", date: "20 Nis – 20 May", slug: "boga" },
  { sign: "İkizler", icon: "♊", date: "21 May – 20 Haz", slug: "ikizler" },
  { sign: "Yengeç", icon: "♋", date: "21 Haz – 22 Tem", slug: "yengec" },
  { sign: "Aslan", icon: "♌", date: "23 Tem – 22 Ağu", slug: "aslan" },
  { sign: "Başak", icon: "♍", date: "23 Ağu – 22 Eyl", slug: "basak" },
  { sign: "Terazi", icon: "♎", date: "23 Eyl – 22 Eki", slug: "terazi" },
  { sign: "Akrep", icon: "♏", date: "23 Eki – 21 Kas", slug: "akrep" },
  { sign: "Yay", icon: "♐", date: "22 Kas – 21 Ara", slug: "yay" },
  { sign: "Oğlak", icon: "♑", date: "22 Ara – 19 Oca", slug: "oglak" },
  { sign: "Kova", icon: "♒", date: "20 Oca – 18 Şub", slug: "kova" },
  { sign: "Balık", icon: "♓", date: "19 Şub – 20 Mar", slug: "balik" },
];

const BLOG_HIGHLIGHTS = [
  {
    title: "2026'nın En Şanslı Burçları",
    excerpt: "Jüpiter'in konumuna göre bu yıl kimler köşeyi dönüyor?",
    category: "Astroloji",
    href: "/blog/haberler/1",
    image: "🍀",
    color: "#34d399"
  },
  {
    title: "Merkür Retrosu Başlıyor",
    excerpt: "İletişim kazalarına dikkat! İşte burçlara özel uyarılar.",
    category: "Gezegenler",
    href: "/blog/haberler/2",
    image: "⚡",
    color: "#fbbf24"
  },
  {
    title: "Mart Ayı Dolunay Ritüelleri",
    excerpt: "Negatif enerjiden arınmak için yapmanız gerekenler.",
    category: "Ritüeller",
    href: "/blog/haberler/3",
    image: "🌕",
    color: "#a855f7"
  },
];

const DREAM_HIGHLIGHTS = [
  {
    title: "Rüyada Yılan Görmek",
    excerpt: "Gizli düşman mı yoksa şifa mı? Rengi ve hareketi önemli.",
    href: "/ruya/sozluk/yilan",
    icon: "🐍",
    bg: "linear-gradient(135deg, #059669 0%, #10b981 100%)"
  },
  {
    title: "Rüyada Diş Dökülmesi",
    excerpt: "Bilinçaltınız size değişim ve kaygı hakkında ne söylüyor?",
    href: "/ruya/sozluk/dis",
    icon: "🦷",
    bg: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)"
  },
  {
    title: "Rüyada Uçmak",
    excerpt: "Özgürlük isteği ve ruhsal yükselişin en güçlü sembolü.",
    href: "/ruya/sozluk/ucmak",
    icon: "🕊️",
    bg: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"
  },
];

const RELATION_HIGHLIGHTS = [
  {
    title: "Burç Uyum Analizi",
    desc: "Partnerinizle yıldızlarınız barışık mı? Detaylı uyum raporu.",
    href: "/burclar/uyum",
    icon: "💞",
    color: "#ec4899"
  },
  {
    title: "Aşk Burcu Hesaplama",
    desc: "Venüs burcunuz aşk hayatınız hakkında ne söylüyor?",
    href: "/iliskiler/ask",
    icon: "💘",
    color: "#f43f5e"
  },
  {
    title: "Flört Rehberi",
    desc: "Hangi burcu nasıl etkilersin? Taktikler ve ipuçları.",
    href: "/iliskiler/flort",
    icon: "💌",
    color: "#fb7185"
  },
];

const TEST_HIGHLIGHTS = [
  {
    title: "Ruh Eşi Testi",
    desc: "Senin ruh eşin hangi burçtan olmalı?",
    href: "/testler/ruh-esi",
    icon: "🧩",
    tag: "Popüler"
  },
  {
    title: "Kariyer Yolu Testi",
    desc: "Yıldızlar hangi mesleği işaret ediyor?",
    href: "/testler/kariyer",
    icon: "💼",
    tag: "Yeni"
  },
  {
    title: "Aura Rengi Testi",
    desc: "Ruhunun rengi ne? Enerjini keşfet.",
    href: "/testler/aura",
    icon: "🌈",
    tag: "Trend"
  },
];

const REVIEWS = [
  { name: "Ayşe K.", comment: "Yükselen burç yorumu nokta atışıydı!", role: "Premium Üye" },
  { name: "Mehmet Y.", comment: "Rüya tabiri kısmı çok başarılı.", role: "Kullanıcı" },
  { name: "Selin B.", comment: "İlişki analizine bayıldım.", role: "Premium Üye" },
];

const FAQS = [
  { q: "Zodyaklı AI nasıl çalışır?", a: "Yapay zeka algoritmaları ve astroloji verilerini birleştirir." },
  { q: "Doğum haritası ne kadar doğru?", a: "NASA efemeris verileriyle milimetrik hesaplama yapıyoruz." },
  { q: "Üyelik ücretli mi?", a: "Temel özellikler ücretsizdir." },
];

export default function Home() {
  return (
    <div style={{ background: "#1a0b2e", minHeight: "100vh", color: "#ffffff", overflowX: "hidden" }}>
      
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section style={{ 
        position: "relative", 
        padding: "5rem 1rem 3rem", // Reduced padding for mobile
        textAlign: "center",
        background: "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.15) 0%, #1a0b2e 70%)"
      }}>
        <div style={{ position: "absolute", top: "20%", left: "10%", width: "200px", height: "200px", background: "#7c3aed", borderRadius: "50%", filter: "blur(100px)", opacity: 0.2 }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "64rem", margin: "0 auto" }}>
          
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 1rem", 
            borderRadius: "9999px", 
            background: "rgba(168, 85, 247, 0.15)", 
            border: "1px solid rgba(168, 85, 247, 0.3)",
            marginBottom: "1.5rem",
            fontSize: "0.8rem", // Slightly smaller font
            fontWeight: 600,
            color: "#d8b4fe"
          }}>
            <span style={{ width: "8px", height: "8px", background: "#34d399", borderRadius: "50%", display: "block", boxShadow: "0 0 10px #34d399" }}></span>
            Ay Fazı: Dolunay 🌕
          </div>
          
          <h1 style={{ 
            fontSize: "clamp(2.2rem, 8vw, 4.5rem)", // Responsive font size
            fontWeight: 800, 
            lineHeight: 1.1, 
            marginBottom: "1rem",
            background: "linear-gradient(to right, #ffffff, #e9d5ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            padding: "0 0.5rem" // Prevent clipping
          }}>
            Geleceği Keşfet
          </h1>
          
          <p style={{ fontSize: "1rem", color: "#cbd5e1", maxWidth: "90%", margin: "0 auto 2rem", lineHeight: 1.6 }}>
            Yapay zeka destekli astroloji analizleri ve rüya tabirleri.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/burclar/gunluk" style={{ padding: "0.8rem 1.8rem", background: "#ffffff", color: "#1a0b2e", borderRadius: "12px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Günlük Burç
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ZODIAC SCROLLER
      ═══════════════════════════════════════ */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", padding: "1.5rem 0" }}>
        <div style={{ maxWidth: "80rem", margin: "0 auto", overflowX: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div style={{ display: "flex", gap: "0.8rem", padding: "0 1rem", width: "max-content", margin: "0 auto" }}>
            {ZODIAC_SIGNS.map((sign) => (
              <Link 
                key={sign.slug} 
                href={`/burclar/${sign.slug}`}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  minWidth: "75px", height: "85px", background: "rgba(255,255,255,0.05)", borderRadius: "14px",
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.1)"
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>{sign.icon}</span>
                <span style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.75rem" }}>{sign.sign}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION: ASTRO BLOG
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>Astro Blog</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Göklerin gündeminden son haberler</p>
            </div>
            <Link href="/blog" style={{ color: "#fbbf24", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Tümünü Gör →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {BLOG_HIGHLIGHTS.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: "none", background: "#1e1333", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", display: "block" }}>
                <div style={{ height: "140px", background: `linear-gradient(135deg, ${item.color}20, #1e1333)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem" }}>
                  {item.image}
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <span style={{ fontSize: "0.7rem", color: item.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.category}</span>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", margin: "0.5rem 0", lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION: RÜYA TABİRLERİ
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>Rüya Tabirleri</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Bilinçaltının mesajlarını çöz</p>
            </div>
            <Link href="/ruya-tabirleri" style={{ color: "#818cf8", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Sözlüğe Git →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {DREAM_HIGHLIGHTS.map((dream, i) => (
              <Link key={i} href={dream.href} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "1rem", background: "#1a0b2e", padding: "1.25rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: dream.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", flexShrink: 0 }}>
                  {dream.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.2rem" }}>{dream.title}</h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{dream.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION: İLİŞKİLER & TESTLER (Responsive Grid)
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          
          {/* Sol Kolon: İlişkiler */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff" }}>❤️ İlişkiler & Aşk</h2>
              <Link href="/iliskiler" style={{ color: "#ec4899", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Tümünü Gör</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {RELATION_HIGHLIGHTS.map((rel, i) => (
                <Link key={i} href={rel.href} style={{ textDecoration: "none", background: "rgba(236, 72, 153, 0.05)", padding: "1rem", borderRadius: "14px", border: "1px solid rgba(236, 72, 153, 0.2)", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ fontSize: "1.4rem" }}>{rel.icon}</div>
                  <div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>{rel.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{rel.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sağ Kolon: Testler */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff" }}>🧩 Popüler Testler</h2>
              <Link href="/testler" style={{ color: "#34d399", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Tümünü Gör</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {TEST_HIGHLIGHTS.map((test, i) => (
                <Link key={i} href={test.href} style={{ textDecoration: "none", background: "rgba(52, 211, 153, 0.05)", padding: "1rem", borderRadius: "14px", border: "1px solid rgba(52, 211, 153, 0.2)", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ fontSize: "1.4rem" }}>{test.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff" }}>{test.title}</h3>
                    <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{test.desc}</p>
                  </div>
                  <span style={{ fontSize: "0.65rem", padding: "0.2rem 0.5rem", background: "rgba(52, 211, 153, 0.2)", color: "#34d399", borderRadius: "99px", fontWeight: 600 }}>{test.tag}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          NASIL ÇALIŞIR & SSS
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", textAlign: "center", marginBottom: "2rem" }}>Sıkça Sorulan Sorular</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "#1a0b2e", padding: "1.25rem", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.4rem" }}>{faq.q}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MÜŞTERİ YORUMLARI
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", textAlign: "center", marginBottom: "2rem" }}>Kullanıcı Deneyimleri</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {REVIEWS.map((review, i) => (
              <div key={i} style={{ flex: "1 1 280px", maxWidth: "350px", background: "#1a0b2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "1.5rem", position: "relative" }}>
                <span style={{ fontSize: "2.5rem", color: "rgba(168, 85, 247, 0.3)", position: "absolute", top: "0.5rem", left: "1rem" }}>"</span>
                <p style={{ position: "relative", zIndex: 1, fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem", fontStyle: "italic", color: "rgba(255,255,255,0.9)" }}>{review.comment}</p>
                <div style={{ fontWeight: 700, color: "#a855f7", fontSize: "0.9rem" }}>{review.name}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{review.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA ALT
      ═══════════════════════════════════════ */}
      <section style={{ padding: "0 1rem 4rem" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto", background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)", borderRadius: "24px", padding: "3rem 1.5rem", textAlign: "center", boxShadow: "0 20px 60px rgba(124, 58, 237, 0.4)" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.8rem" }}>Yıldız Haritanı Şimdi Çıkar</h2>
          <Link href="/burclar/dogum-haritasi" style={{ padding: "0.9rem 2.5rem", background: "#ffffff", color: "#7c3aed", borderRadius: "14px", fontWeight: 800, fontSize: "1rem", textDecoration: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.2)", display: "inline-block" }}>Ücretsiz Analiz Başlat</Link>
        </div>
      </section>

    </div>
  );
}
