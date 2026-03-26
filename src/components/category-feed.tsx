import Link from "next/link";

/* *********************************************************************
   Layout 1 — BURÇLAR: 12-sign compact grid
********************************************************************* */

const BURCLAR = [
  { name: "Koç", emoji: "♈", keyword: "Enerji", href: "/burclar/koc" },
  { name: "Boğa", emoji: "♉", keyword: "Sabır", href: "/burclar/boga" },
  { name: "İkizler", emoji: "♊", keyword: "İletişim", href: "/burclar/ikizler" },
  { name: "Yengeç", emoji: "♋", keyword: "Sezgi", href: "/burclar/yengec" },
  { name: "Aslan", emoji: "♌", keyword: "Cesaret", href: "/burclar/aslan" },
  { name: "Başak", emoji: "♍", keyword: "Detay", href: "/burclar/basak" },
  { name: "Terazi", emoji: "♎", keyword: "Denge", href: "/burclar/terazi" },
  { name: "Akrep", emoji: "♏", keyword: "Dönüşüm", href: "/burclar/akrep" },
  { name: "Yay", emoji: "♐", keyword: "Özgürlük", href: "/burclar/yay" },
  { name: "Oğlak", emoji: "♑", keyword: "Disiplin", href: "/burclar/oglak" },
  { name: "Kova", emoji: "♒", keyword: "Yenilik", href: "/burclar/kova" },
  { name: "Balık", emoji: "♓", keyword: "Hayal", href: "/burclar/balik" },
];

/* *********************************************************************
   Layout 2 — RÜYA TABİRLERİ: Horizontal Slider
********************************************************************* */

const RUYA_CARDS = [
  { tag: "Klasik", title: "Uçma Rüyası: Özgürlük mü, Kaçış mı?", excerpt: "Rüyanda uçmak bilinçaltının en güçlü mesajlarından biridir.", readTime: "5 dk", href: "/ruya/ucma" },
  { tag: "Sembol", title: "Su Rüyası: Duygularınızın Aynası", excerpt: "Berrak mı bulanık mı? Suyun durumu çok şey anlatır.", readTime: "4 dk", href: "/ruya/su" },
  { tag: "Hayvan", title: "Yılan Rüyası: Tehlike mi, Şifa mı?", excerpt: "Kültürel ve psikolojik açıdan yılanın derin anlamları.", readTime: "6 dk", href: "/ruya/yilan" },
  { tag: "Yaygın", title: "Diş Dökülmesi: Neden Bu Kadar Sık Görülür?", excerpt: "Kaygı, güç kaybı ya da dönüşüm? Uzman yorumu.", readTime: "5 dk", href: "/ruya/dis" },
  { tag: "Anlam", title: "Ölüm Rüyası Kötü Değil — İşte Nedeni", excerpt: "Korku değil, kapanış ve yeniden doğuşun sembolü.", readTime: "4 dk", href: "/ruya/olum" },
  { tag: "Duygu", title: "Düşme Rüyası: Kontrol Kaybı mı?", excerpt: "Hayatının hangi alanında dengeyi kaybettiğini gösterir.", readTime: "4 dk", href: "/ruya/dusme" },
  { tag: "Renk", title: "Rüyada Kırmızı Renk Ne Demek?", excerpt: "Tutku, tehlike ya da enerji? Renklerin rüya dili.", readTime: "3 dk", href: "/ruya/renkler" },
];

/* *********************************************************************
   Layout 3 — TESTLER: Quiz Card Grid
********************************************************************* */

const TESTLER_CARDS = [
  { qCount: "8", icon: "⬆", title: "Yükselen Burcun Hangisi?", desc: "Dış dünyaya nasıl göründüğünü keşfet.", href: "/testler/yukselen" },
  { qCount: "12", icon: "♾", title: "Ruh Eşin Hangi Burçtan?", desc: "Kozmik uyumu belirleyen unsurları analiz et.", href: "/testler/ruh-esi" },
  { qCount: "6", icon: "✦", title: "2025 Kişisel Yıl Sayın Kaç?", desc: "Doğum tarihinle bu yılın enerjisini hesapla.", href: "/testler/numeroloji" },
  { qCount: "5", icon: "⚡", title: "Hangi Element Grubundasın?", desc: "Ateş, Toprak, Hava, Su — asıl enerjin hangisi?", href: "/testler/element" },
  { qCount: "15", icon: "◈", title: "Gerçek Kişilik Tipin Nedir?", desc: "Baskın yıldız enerjine göre derin kişilik analizi.", href: "/testler/kisilik" },
  { qCount: "10", icon: "◇", title: "Aşk Dilini Keşfet", desc: "Venüs işaretine göre sevgi stilin ve beklentilerin.", href: "/testler/venus" },
];

/* *********************************************************************
   Layout 4 — GÖK GÜNDEMİ: Sidebar Editorial
********************************************************************* */

const GOK_FEATURED = {
  tag: "Öne Çıkan",
  title: "Merkür Retrosu 2025: Tüm Tarihleri ve Burç Etkileri",
  excerpt: "Yılın dört kritik retro dönemi başlamadan önce bilmeniz gereken her şey. Hangi kararlar ertelenmeli, hangi adımlar atılmalı?",
  readTime: "7 dk",
  href: "/gok/merkur-retro",
};

const GOK_LIST = [
  { tag: "Dolunay", title: "Nisan Dolunayı: Terazi'de İlişki Kırılmaları", date: "23 Nis", href: "/gok/dolunay-nisan" },
  { tag: "Tutulma", title: "Güneş Tutulması: Bu Yıl Neler Değişecek?", date: "29 Mar", href: "/gok/gunes-tutulmasi" },
  { tag: "Transit", title: "Mars Koç'ta: 6 Haftalık Enerji Dalgası", date: "15 Mar", href: "/gok/mars-koc" },
  { tag: "Transit", title: "Venüs Boğa'da: Aşk ve Estetik Sezonu", date: "5 Nis", href: "/gok/venus-boga" },
  { tag: "Satürn", title: "Satürn Balık'tan Çıkıyor: 3 Yılın Özeti", date: "25 May", href: "/gok/saturn-balik" },
];

/* *********************************************************************
   Layout 5 — İLİŞKİLER: Vertical Article List
********************************************************************* */

const ILISKILER_ARTICLES = [
  { num: "01", tag: "Uyum", title: "Koç–Akrep: Ateş ile Su Buluşunca", excerpt: "Yoğun çekim, derin çatışma — bu ilişki gerçekten işler mi?", readTime: "6 dk", href: "/iliskiler/koc-akrep" },
  { num: "02", tag: "Ayrılık", title: "Ayrılıktan Sonra İyileşme: Burç Rehberi", excerpt: "Her burcun kalp kırıklığını atlatma süreci farklıdır.", readTime: "5 dk", href: "/iliskiler/ayrilik" },
  { num: "03", tag: "Evlilik", title: "En Uyumlu 5 Burç Çifti (2025)", excerpt: "Uzun vadeli bağlılık için kozmik uyum analizi.", readTime: "6 dk", href: "/iliskiler/evlilik-uyumu" },
  { num: "04", tag: "2025", title: "2025'te Aşk Hayatınıza Ne Geliyor?", excerpt: "Gezegen konumlarının aşk ve ilişkilere etkileri.", readTime: "7 dk", href: "/iliskiler/2025-ask" },
  { num: "05", tag: "Venüs", title: "Partnerinin Venüs İşareti Ne Anlama Gelir?", excerpt: "Onun aşk dili, değerleri ve ilişki beklentileri.", readTime: "5 dk", href: "/iliskiler/venus-isareti" },
  { num: "06", tag: "Çekim", title: "Hangi Burç Sizi Çekiyor? Astrolojik Analiz", excerpt: "Venüs ve Mars pozisyonları çekim enerjinizi belirler.", readTime: "4 dk", href: "/iliskiler/cekim" },
];

/* Shared */
type CategoryCard = {
  href: string;
  title: string;
  meta: string;
  label?: string;
  thumb: string;
  variant?: "featured" | "standard" | "compact";
};

type CategoryBlock = {
  key: string;
  title: string;
  color: string;
  allHref: string;
  layout: "onedio" | "buzzfeed" | "ticker" | "duo";
  cards: CategoryCard[];
};

function SectionHeader({ title, color, allHref }: { title: string; color: string; allHref: string }) {
  return (
    <div className="feed-header">
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <span style={{ display: "inline-block", width: "3px", height: "1.1rem", borderRadius: 9999, background: color, flexShrink: 0 }} />
        <h2 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--theme-text)", margin: 0 }}>{title}</h2>
      </div>
      <Link href={allHref} style={{ fontSize: "11px", fontWeight: 600, color, textDecoration: "none" }}>
        Tümünü Gör →
      </Link>
    </div>
  );
}

const CATEGORY_BLOCKS: CategoryBlock[] = [
  {
    key: "ruya",
    title: "Rüya Tabirleri",
    color: "#818cf8",
    allHref: "/ruya",
    layout: "onedio",
    cards: RUYA_CARDS.map((x, i) => ({
      href: x.href,
      title: x.title,
      meta: x.readTime,
      label: i === 1 ? "Sponsorlu" : undefined,
      thumb: `linear-gradient(140deg, rgba(129,140,248,0.45), rgba(67,56,202,0.15))`,
      variant: (i === 0 ? "featured" : i % 3 === 0 ? "compact" : "standard") as CategoryCard["variant"],
    })),
  },
  {
    key: "testler",
    title: "Testler",
    color: "#f472b6",
    allHref: "/testler",
    layout: "buzzfeed",
    cards: TESTLER_CARDS.map((x) => ({
      href: x.href,
      title: x.title,
      meta: `${x.qCount} soru`,
      thumb: `linear-gradient(140deg, rgba(244,114,182,0.45), rgba(157,23,77,0.18))`,
      variant: "standard",
    })),
  },
  {
    key: "gok",
    title: "Gök Gündemi",
    color: "#34d399",
    allHref: "/gok",
    layout: "ticker",
    cards: [
      {
        href: GOK_FEATURED.href,
        title: GOK_FEATURED.title,
        meta: GOK_FEATURED.readTime,
        thumb: `linear-gradient(140deg, rgba(52,211,153,0.4), rgba(5,150,105,0.15))`,
        variant: "featured",
      },
      ...GOK_LIST.map((x, i) => ({
        href: x.href,
        title: x.title,
        meta: x.date,
        thumb: `linear-gradient(140deg, rgba(52,211,153,0.35), rgba(4,120,87,0.16))`,
        variant: (i % 2 === 0 ? "standard" : "compact") as CategoryCard["variant"],
      })),
    ],
  },
  {
    key: "iliskiler",
    title: "İlişkiler",
    color: "#fb923c",
    allHref: "/iliskiler",
    layout: "duo",
    cards: ILISKILER_ARTICLES.map((x, i) => ({
      href: x.href,
      title: x.title,
      meta: x.readTime,
      thumb: `linear-gradient(140deg, rgba(251,146,60,0.4), rgba(194,65,12,0.16))`,
      variant: (i === 0 ? "featured" : i > 2 ? "compact" : "standard") as CategoryCard["variant"],
    })),
  },
];

export default function CategoryFeed() {
  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <section className="feed-section" style={{ borderTop: "1px solid var(--theme-border)" }}>
        <SectionHeader title="Burçlar" color="#a78bfa" allHref="/burclar" />
        <div className="burc-grid">
          {BURCLAR.map((b) => (
            <Link key={b.href} href={b.href} className="burc-cell">
              <span className="burc-emoji">{b.emoji}</span>
              <span className="burc-name">{b.name}</span>
              <span className="burc-keyword" style={{ color: "#a78bfa" }}>{b.keyword}</span>
            </Link>
          ))}
        </div>
      </section>

      {CATEGORY_BLOCKS.map((block) => (
        <section key={block.key} className="feed-section" style={{ borderTop: "1px solid var(--theme-border)" }}>
          <SectionHeader title={block.title} color={block.color} allHref={block.allHref} />

          {block.layout === "ticker" ? (
            <div className="ticker-layout">
              {block.cards.map((card, i) => (
                <Link key={card.href} href={card.href} className="ticker-item">
                  <span className="ticker-dot" />
                  <span className="ticker-time">{card.meta}</span>
                  <p className="ticker-title">{card.title}</p>
                  {i === 0 ? <span className="ticker-badge">Öne Çıkan</span> : null}
                </Link>
              ))}
            </div>
          ) : block.layout === "buzzfeed" ? (
            <div className="buzz-grid">
              {block.cards.map((card, i) => (
                <Link key={card.href} href={card.href} className={`buzz-card ${i === 0 ? "buzz-card--hero" : ""}`}>
                  <div className="buzz-card-thumb" style={{ background: card.thumb }} />
                  <div className="buzz-card-content">
                    <h3 className="buzz-card-title">{card.title}</h3>
                    <span className="buzz-card-meta">{card.meta}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : block.layout === "duo" ? (
            <div className="duo-layout">
              {block.cards.map((card, i) => (
                <Link key={card.href} href={card.href} className={`duo-card ${i === 0 ? "duo-card--lead" : ""}`}>
                  <div className="duo-thumb" style={{ background: card.thumb }} />
                  <div className="duo-content">
                    <h3 className="duo-title">{card.title}</h3>
                    <span className="duo-meta">{card.meta}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="media-card-grid">
              {block.cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className={`media-card media-card--${card.variant ?? "standard"}`}
                >
                  <div className="media-card-thumb" style={{ background: card.thumb }} />
                  <div className="media-card-content">
                    <h3 className="media-card-title">{card.title}</h3>
                    <div className="media-card-meta-row">
                      <span className="media-card-meta">{card.meta}</span>
                      {card.label ? <span className="media-card-label">{card.label}</span> : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
