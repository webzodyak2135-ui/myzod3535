import Link from "next/link";

// ═══════════════════════════════════════
// DATA DEFINITIONS
// ═══════════════════════════════════════

const ZODIAC_SIGNS = [
  { sign: "Widder", icon: "♈", date: "21. Mär – 19. Apr", slug: "koc" },
  { sign: "Stier", icon: "♉", date: "20. Apr – 20. Mai", slug: "boga" },
  { sign: "Zwillinge", icon: "♊", date: "21. Mai – 20. Jun", slug: "ikizler" },
  { sign: "Krebs", icon: "♋", date: "21. Jun – 22. Jul", slug: "yengec" },
  { sign: "Löwe", icon: "♌", date: "23. Jul – 22. Aug", slug: "aslan" },
  { sign: "Jungfrau", icon: "♍", date: "23. Aug – 22. Sep", slug: "basak" },
  { sign: "Waage", icon: "♎", date: "23. Sep – 22. Okt", slug: "terazi" },
  { sign: "Skorpion", icon: "♏", date: "23. Okt – 21. Nov", slug: "akrep" },
  { sign: "Schütze", icon: "♐", date: "22. Nov – 21. Dez", slug: "yay" },
  { sign: "Steinbock", icon: "♑", date: "22. Dez – 19. Jan", slug: "oglak" },
  { sign: "Wassermann", icon: "♒", date: "20. Jan – 18. Feb", slug: "kova" },
  { sign: "Fische", icon: "♓", date: "19. Feb – 20. Mär", slug: "balik" },
];

const BLOG_HIGHLIGHTS = [
  {
    title: "Die glücklichsten Sternzeichen 2026",
    excerpt: "Wer hat dieses Jahr laut Jupiter die beste Phase?",
    category: "Astrologie",
    href: "/blog/haberler/1",
    image: "🍀",
    color: "#34d399"
  },
  {
    title: "Merkur wird rückläufig",
    excerpt: "Achtung vor Kommunikationspannen! Sternzeichen-spezifische Hinweise.",
    category: "Planeten",
    href: "/blog/haberler/2",
    image: "⚡",
    color: "#fbbf24"
  },
  {
    title: "Vollmond-Rituale im März",
    excerpt: "Was du tun kannst, um negative Energie loszulassen.",
    category: "Rituale",
    href: "/blog/haberler/3",
    image: "🌕",
    color: "#a855f7"
  },
];

const DREAM_HIGHLIGHTS = [
  {
    title: "Im Traum eine Schlange sehen",
    excerpt: "Verborgener Feind oder Heilung? Farbe und Bewegung sind entscheidend.",
    href: "/ruya/sozluk/yilan",
    icon: "🐍",
    bg: "linear-gradient(135deg, #059669 0%, #10b981 100%)"
  },
  {
    title: "Zähne fallen im Traum aus",
    excerpt: "Was sagt dein Unterbewusstsein über Veränderung und Angst?",
    href: "/ruya/sozluk/dis",
    icon: "🦷",
    bg: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)"
  },
  {
    title: "Im Traum fliegen",
    excerpt: "Das stärkste Symbol für Freiheitsdrang und inneren Aufstieg.",
    href: "/ruya/sozluk/ucmak",
    icon: "🕊️",
    bg: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)"
  },
];

const RELATION_HIGHLIGHTS = [
  {
    title: "Kompatibilitätsanalyse",
    desc: "Passen eure Sterne zusammen? Detaillierter Kompatibilitätsbericht.",
    href: "/burclar/uyum",
    icon: "💞",
    color: "#ec4899"
  },
  {
    title: "Liebeszeichen berechnen",
    desc: "Was sagt dein Venuszeichen über dein Liebesleben?",
    href: "/iliskiler/ask",
    icon: "💘",
    color: "#f43f5e"
  },
  {
    title: "Flirt-Guide",
    desc: "Wie beeindruckst du welches Sternzeichen? Tipps und Taktiken.",
    href: "/iliskiler/flort",
    icon: "💌",
    color: "#fb7185"
  },
];

const TEST_HIGHLIGHTS = [
  {
    title: "Seelenpartner-Test",
    desc: "Welches Sternzeichen passt zu deinem Seelenpartner?",
    href: "/testler/ruh-esi",
    icon: "🧩",
    tag: "Beliebt"
  },
  {
    title: "Karriereweg-Test",
    desc: "Welchen Beruf zeigen die Sterne?",
    href: "/testler/kariyer",
    icon: "💼",
    tag: "Neu"
  },
  {
    title: "Aura-Farben-Test",
    desc: "Welche Farbe hat deine Seele? Entdecke deine Energie.",
    href: "/testler/aura",
    icon: "🌈",
    tag: "Trend"
  },
];

const CELESTIAL_EVENTS = [
  {
    title: "Mondfinsternis",
    desc: "Transformative Energie für emotionale Durchbrüche",
    href: "/gok/ay-tutulmasi",
    icon: "🌑",
    color: "#dc2626"
  },
  {
    title: "Merkur Rückläufig",
    desc: "Vorsicht bei Kommunikation und Verträgen",
    href: "/gok/retrograde",
    icon: "☿️",
    color: "#f59e0b"
  },
  {
    title: "Vollmond-Rituale",
    desc: "Nutze die Kraft des Vollmonds für deine Ziele",
    href: "/blog",
    icon: "🌕",
    color: "#8b5cf6"
  },
];

const POPULAR_DREAM_CATEGORIES = [
  {
    title: "Liebesträume",
    desc: "Romantische Träume und ihre Bedeutung",
    href: "/ruya/ask",
    icon: "💕",
    gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)"
  },
  {
    title: "Flugträume",
    desc: "Freiheit und spiritueller Aufstieg",
    href: "/ruya/ucma",
    icon: "🕊️",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)"
  },
  {
    title: "Wasserträume",
    desc: "Emotionen und Unterbewusstsein",
    href: "/ruya/su",
    icon: "🌊",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)"
  },
  {
    title: "Alpträume",
    desc: "Verstehe deine Ängste und überwinde sie",
    href: "/ruya/kabus",
    icon: "😱",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)"
  },
];

const ASTRO_TOOLS = [
  {
    title: "Aszendent berechnen",
    desc: "Entdecke dein aufsteigendes Zeichen",
    href: "/burclar/yukselen",
    icon: "⬆️"
  },
  {
    title: "Numerologie",
    desc: "Deine Schicksalszahl berechnen",
    href: "/testler/numeroloji",
    icon: "🔢"
  },
  {
    title: "Traumdeutung KI",
    desc: "Lass deine Träume von KI analysieren",
    href: "/ruya/yorumla",
    icon: "🤖"
  },
];

const REVIEWS = [
  { name: "Anna M.", comment: "Die Aszendent-Deutung war auf den Punkt!", role: "Premium" },
  { name: "Michael S.", comment: "Der Bereich Traumdeutung ist richtig stark.", role: "Nutzer" },
  { name: "Julia K.", comment: "Ich liebe die Beziehungsanalyse.", role: "Premium" },
];

const FAQS = [
  { q: "Wie funktioniert die SternenFeed-KI?", a: "Sie kombiniert KI-Algorithmen mit astrologischen Daten." },
  { q: "Wie genau ist das Geburtshoroskop?", a: "Wir berechnen es präzise mit NASA-Ephemeriden." },
  { q: "Ist die Mitgliedschaft kostenpflichtig?", a: "Die Basisfunktionen sind kostenlos." },
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
            Mondphase: Vollmond 🌕
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
            Entdecke deine Zukunft
          </h1>

          <p style={{ fontSize: "1rem", color: "#cbd5e1", maxWidth: "90%", margin: "0 auto 2rem", lineHeight: 1.6 }}>
            KI-gestützte Astrologie-Analysen und Traumdeutung.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/burclar/gunluk" style={{ padding: "0.8rem 1.8rem", background: "#ffffff", color: "#1a0b2e", borderRadius: "12px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              Tageshoroskop
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
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Die neuesten Updates aus dem Kosmos</p>
            </div>
            <Link href="/blog" style={{ color: "#fbbf24", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Alle ansehen →</Link>
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
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>Traumdeutung</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Entschlüssele die Botschaften deines Unterbewusstseins</p>
            </div>
            <Link href="/ruya-tabirleri" style={{ color: "#818cf8", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Zum Lexikon →</Link>
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
          SECTION: KOSMISCHE EREIGNISSE
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>🌌 Kosmische Ereignisse</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Wichtige astrologische Ereignisse im Blick behalten</p>
            </div>
            <Link href="/gok" style={{ color: "#fbbf24", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Kalender →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            {CELESTIAL_EVENTS.map((event, i) => (
              <Link key={i} href={event.href} style={{ textDecoration: "none", background: "#1a0b2e", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div style={{ fontSize: "2.5rem" }}>{event.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{event.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: 0 }}>{event.desc}</p>
                <div style={{ marginTop: "auto", fontSize: "0.75rem", color: event.color, fontWeight: 600 }}>Mehr erfahren →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION: BELIEBTE TRAUMKATEGORIEN
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff" }}>💭 Beliebte Traumkategorien</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>Entdecke die Bedeutung deiner Träume</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {POPULAR_DREAM_CATEGORIES.map((cat, i) => (
              <Link key={i} href={cat.href} style={{ textDecoration: "none", background: cat.gradient, padding: "1.5rem", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.5rem", minHeight: "140px", justifyContent: "center" }}>
                <div style={{ fontSize: "2.5rem" }}>{cat.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>{cat.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.9)", margin: 0 }}>{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION: ASTRO-TOOLS
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>🔮 Astro-Tools & Rechner</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {ASTRO_TOOLS.map((tool, i) => (
              <Link key={i} href={tool.href} style={{ textDecoration: "none", background: "rgba(168, 85, 247, 0.1)", padding: "1.5rem", borderRadius: "16px", border: "1px solid rgba(168, 85, 247, 0.3)", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "2rem", width: "50px", height: "50px", background: "rgba(168, 85, 247, 0.2)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{tool.icon}</div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>{tool.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>{tool.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SECTION: İLİŞKİLER & TESTLER (Responsive Grid)
      ═══════════════════════════════════════ */}
      <section style={{ padding: "3rem 1rem", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>

          {/* Linke Spalte: Beziehungen */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff" }}>❤️ Beziehungen & Liebe</h2>
              <Link href="/iliskiler" style={{ color: "#ec4899", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Alle ansehen</Link>
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
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ffffff" }}>🧩 Beliebte Tests</h2>
              <Link href="/testler" style={{ color: "#34d399", fontWeight: 600, textDecoration: "none", fontSize: "0.85rem" }}>Alle ansehen</Link>
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
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", textAlign: "center", marginBottom: "2rem" }}>Häufig gestellte Fragen</h2>
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
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff", textAlign: "center", marginBottom: "2rem" }}>Erfahrungen unserer Nutzer</h2>
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
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.8rem" }}>Erstelle jetzt dein Geburtshoroskop</h2>
          <Link href="/burclar/dogum-haritasi" style={{ padding: "0.9rem 2.5rem", background: "#ffffff", color: "#7c3aed", borderRadius: "14px", fontWeight: 800, fontSize: "1rem", textDecoration: "none", boxShadow: "0 10px 25px rgba(0,0,0,0.2)", display: "inline-block" }}>Kostenlose Analyse starten</Link>
        </div>
      </section>

    </div>
  );
}
