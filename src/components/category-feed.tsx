import Link from "next/link";

/* *********************************************************************
   Layout 1 — BURÇLAR: 12-sign compact grid
********************************************************************* */

const BURCLAR = [
  { name: "Widder", emoji: "♈", keyword: "Energie", href: "/burclar/koc" },
  { name: "Stier", emoji: "♉", keyword: "Geduld", href: "/burclar/boga" },
  { name: "Zwillinge", emoji: "♊", keyword: "Kommunikation", href: "/burclar/ikizler" },
  { name: "Krebs", emoji: "♋", keyword: "Intuition", href: "/burclar/yengec" },
  { name: "Löwe", emoji: "♌", keyword: "Mut", href: "/burclar/aslan" },
  { name: "Jungfrau", emoji: "♍", keyword: "Details", href: "/burclar/basak" },
  { name: "Waage", emoji: "♎", keyword: "Balance", href: "/burclar/terazi" },
  { name: "Skorpion", emoji: "♏", keyword: "Wandel", href: "/burclar/akrep" },
  { name: "Schütze", emoji: "♐", keyword: "Freiheit", href: "/burclar/yay" },
  { name: "Steinbock", emoji: "♑", keyword: "Disziplin", href: "/burclar/oglak" },
  { name: "Wassermann", emoji: "♒", keyword: "Innovation", href: "/burclar/kova" },
  { name: "Fische", emoji: "♓", keyword: "Träume", href: "/burclar/balik" },
];

/* *********************************************************************
   Layout 2 — RÜYA TABİRLERİ: Horizontal Slider
********************************************************************* */

const RUYA_CARDS = [
  { tag: "Klassisch", title: "Flugtraum: Freiheit oder Flucht?", excerpt: "Im Traum zu fliegen ist eine der stärksten Botschaften des Unterbewusstseins.", readTime: "5 Min.", href: "/ruya/ucma" },
  { tag: "Symbol", title: "Wassertraum: Der Spiegel deiner Gefühle", excerpt: "Klar oder trüb? Der Zustand des Wassers verrät viel.", readTime: "4 Min.", href: "/ruya/su" },
  { tag: "Tier", title: "Schlangentraum: Gefahr oder Heilung?", excerpt: "Die tiefe Symbolik der Schlange – kulturell und psychologisch.", readTime: "6 Min.", href: "/ruya/yilan" },
  { tag: "Häufig", title: "Zähne fallen aus: Warum ist dieser Traum so verbreitet?", excerpt: "Angst, Machtverlust oder Wandel? Einschätzung vom Experten.", readTime: "5 Min.", href: "/ruya/dis" },
  { tag: "Bedeutung", title: "Der Traum vom Tod ist nicht schlecht — hier ist der Grund", excerpt: "Nicht Angst, sondern ein Symbol für Abschluss und Neubeginn.", readTime: "4 Min.", href: "/ruya/olum" },
  { tag: "Gefühl", title: "Fallen im Traum: Kontrollverlust?", excerpt: "Zeigt dir, in welchem Bereich deines Lebens du das Gleichgewicht verlierst.", readTime: "4 Min.", href: "/ruya/dusme" },
  { tag: "Farbe", title: "Was bedeutet die Farbe Rot im Traum?", excerpt: "Leidenschaft, Gefahr oder Energie? Die Sprache der Farben.", readTime: "3 Min.", href: "/ruya/renkler" },
];

/* *********************************************************************
   Layout 3 — TESTLER: Quiz Card Grid
********************************************************************* */

const TESTLER_CARDS = [
  { qCount: "8", icon: "⬆", title: "Welcher Aszendent bist du?", desc: "Entdecke, wie du nach außen wirkst.", href: "/testler/yukselen" },
  { qCount: "12", icon: "♾", title: "Welches Sternzeichen hat dein Seelenpartner?", desc: "Analysiere die Faktoren kosmischer Harmonie.", href: "/testler/ruh-esi" },
  { qCount: "6", icon: "✦", title: "Deine persönliche Jahreszahl 2025", desc: "Berechne die Energie dieses Jahres anhand deines Geburtsdatums.", href: "/testler/numeroloji" },
  { qCount: "5", icon: "⚡", title: "Welcher Elementgruppe gehörst du an?", desc: "Feuer, Erde, Luft, Wasser — welche Energie ist deine?", href: "/testler/element" },
  { qCount: "15", icon: "◈", title: "Welcher Persönlichkeitstyp bist du wirklich?", desc: "Tiefgehende Analyse nach deiner dominanten Sternenergie.", href: "/testler/kisilik" },
  { qCount: "10", icon: "◇", title: "Entdecke deine Liebessprache", desc: "Dein Liebesstil und Erwartungen nach deinem Venuszeichen.", href: "/testler/venus" },
];

/* *********************************************************************
   Layout 4 — GÖK GÜNDEMİ: Sidebar Editorial
********************************************************************* */

const GOK_FEATURED = {
  tag: "Highlight",
  title: "Merkur rückläufig 2025: Alle Termine & Sternzeichen-Einflüsse",
  excerpt: "Alles, was du wissen musst, bevor die vier kritischen Retro-Phasen starten. Was solltest du verschieben und was angehen?",
  readTime: "7 Min.",
  href: "/gok/merkur-retro",
};

const GOK_LIST = [
  { tag: "Vollmond", title: "Vollmond im April: Beziehungsbrüche in der Waage", date: "23 Apr", href: "/gok/dolunay-nisan" },
  { tag: "Finsternis", title: "Sonnenfinsternis: Was ändert sich dieses Jahr?", date: "29 Mär", href: "/gok/gunes-tutulmasi" },
  { tag: "Transit", title: "Mars im Widder: Eine 6-wöchige Energiewelle", date: "15 Mär", href: "/gok/mars-koc" },
  { tag: "Transit", title: "Venus im Stier: Saison für Liebe und Ästhetik", date: "5 Apr", href: "/gok/venus-boga" },
  { tag: "Saturn", title: "Saturn verlässt die Fische: Rückblick auf 3 Jahre", date: "25 Mai", href: "/gok/saturn-balik" },
];

/* *********************************************************************
   Layout 5 — İLİŞKİLER: Vertical Article List
********************************************************************* */

const ILISKILER_ARTICLES = [
  { num: "01", tag: "Harmonie", title: "Widder–Skorpion: Wenn Feuer auf Wasser trifft", excerpt: "Starke Anziehung, tiefer Konflikt — funktioniert diese Beziehung wirklich?", readTime: "6 Min.", href: "/iliskiler/koc-akrep" },
  { num: "02", tag: "Trennung", title: "Heilung nach der Trennung: Sternzeichen-Guide", excerpt: "Jedes Sternzeichen verarbeitet Herzschmerz auf seine eigene Art.", readTime: "5 Min.", href: "/iliskiler/ayrilik" },
  { num: "03", tag: "Ehe", title: "Die 5 kompatibelsten Sternzeichen-Paare (2025)", excerpt: "Kosmische Kompatibilitätsanalyse für langfristige Bindung.", readTime: "6 Min.", href: "/iliskiler/evlilik-uyumu" },
  { num: "04", tag: "2025", title: "Was kommt 2025 in dein Liebesleben?", excerpt: "Einfluss der Planetenstände auf Liebe und Beziehungen.", readTime: "7 Min.", href: "/iliskiler/2025-ask" },
  { num: "05", tag: "Venus", title: "Was bedeutet das Venuszeichen deines Partners?", excerpt: "Seine Liebessprache, Werte und Beziehungserwartungen.", readTime: "5 Min.", href: "/iliskiler/venus-isareti" },
  { num: "06", tag: "Anziehung", title: "Welches Sternzeichen zieht dich an? Astrologische Analyse", excerpt: "Venus- und Mars-Positionen bestimmen deine Anziehungsenergie.", readTime: "4 Min.", href: "/iliskiler/cekim" },
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
        Alle ansehen →
      </Link>
    </div>
  );
}

const CATEGORY_BLOCKS: CategoryBlock[] = [
  {
    key: "ruya",
    title: "Traumdeutung",
    color: "#818cf8",
    allHref: "/ruya",
    layout: "onedio",
    cards: RUYA_CARDS.map((x, i) => ({
      href: x.href,
      title: x.title,
      meta: x.readTime,
      label: i === 1 ? "Gesponsert" : undefined,
      thumb: `linear-gradient(140deg, rgba(129,140,248,0.45), rgba(67,56,202,0.15))`,
      variant: (i === 0 ? "featured" : i % 3 === 0 ? "compact" : "standard") as CategoryCard["variant"],
    })),
  },
  {
    key: "testler",
    title: "Tests",
    color: "#f472b6",
    allHref: "/testler",
    layout: "buzzfeed",
    cards: TESTLER_CARDS.map((x) => ({
      href: x.href,
      title: x.title,
      meta: `${x.qCount} Fragen`,
      thumb: `linear-gradient(140deg, rgba(244,114,182,0.45), rgba(157,23,77,0.18))`,
      variant: "standard",
    })),
  },
  {
    key: "gok",
    title: "Kosmischer Kalender",
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
    title: "Beziehungen",
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
        <SectionHeader title="Sternzeichen" color="#a78bfa" allHref="/burclar" />
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
                  {i === 0 ? <span className="ticker-badge">Highlight</span> : null}
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
