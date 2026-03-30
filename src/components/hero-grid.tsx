import Link from "next/link";

/* ─────────────────────────────────────────────────────────
   SVG Background Art
───────────────────────────────────────────────────────── */

function ZodiacBackground() {
  const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const stars = [
    [60, 80], [120, 40], [200, 90], [80, 200], [40, 300], [100, 380],
    [170, 280], [240, 160], [300, 60], [350, 200], [400, 100], [460, 50],
    [500, 160], [540, 80], [600, 140], [640, 40], [700, 100], [740, 200],
    [760, 320], [680, 380], [620, 300], [560, 240], [480, 320], [420, 260],
    [320, 340], [260, 380], [180, 400], [130, 460], [60, 460], [200, 500],
    [350, 480], [460, 440], [580, 480], [680, 460], [760, 440],
  ];
  const constellationLines = [
    [60, 80, 120, 40], [120, 40, 200, 90], [200, 90, 170, 280],
    [170, 280, 80, 200], [240, 160, 300, 60], [300, 60, 350, 200],
    [350, 200, 460, 50], [460, 50, 500, 160],
  ];

  return (
    <svg
      viewBox="0 0 800 520"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="zgBg" cx="65%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#2d1a6e" />
          <stop offset="60%" stopColor="#130a3e" />
          <stop offset="100%" stopColor="#1a0b2e" />
        </radialGradient>
        <radialGradient id="zgGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="zgCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(212,175,55,0.12)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="520" fill="url(#zgBg)" />

      {/* Purple glow behind wheel */}
      <ellipse cx="600" cy="260" rx="260" ry="260" fill="url(#zgGlow)" />

      {/* Constellation lines */}
      {constellationLines.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(167,139,250,0.18)" strokeWidth="0.8" />
      ))}

      {/* Stars */}
      {stars.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 5 === 0 ? 1.8 : 1}
          fill="white" opacity={0.2 + (i % 4) * 0.12} />
      ))}

      {/* Outer zodiac ring */}
      <circle cx="600" cy="260" r="210" fill="none"
        stroke="rgba(212,175,55,0.25)" strokeWidth="0" />
      {/* Middle ring */}
      <circle cx="600" cy="260" r="155" fill="none"
        stroke="rgba(212,175,55,0.12)" strokeWidth="0"
        strokeDasharray="5 8" />
      {/* Inner ring */}
      <circle cx="600" cy="260" r="95" fill="none"
        stroke="transparent" strokeWidth="0" />
      {/* Core dot glow */}
      <circle cx="600" cy="260" r="40" fill="url(#zgCenter)" />
      <circle cx="600" cy="260" r="4"
        fill="rgba(212,175,55,0.5)" />

      {/* 12 division spokes */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i * 30) * Math.PI / 180;
        const x1 = 600 + 95 * Math.sin(angle);
        const y1 = 260 - 95 * Math.cos(angle);
        const x2 = 600 + 155 * Math.sin(angle);
        const y2 = 260 - 155 * Math.cos(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(212,175,55,0.2)" strokeWidth="0.5" />
        );
      })}

      {/* Zodiac symbols */}
      {signs.map((sign, i) => {
        const angle = (i * 30 - 90) * Math.PI / 180;
        const x = 600 + 181 * Math.cos(angle);
        const y = 260 + 181 * Math.sin(angle);
        return (
          <text key={i} x={x} y={y}
            textAnchor="middle" dominantBaseline="middle"
            fill="rgba(212,175,55,0.65)" fontSize="15"
            fontFamily="serif">
            {sign}
          </text>
        );
      })}

      {/* Extra large faint outer ring */}
      <circle cx="600" cy="260" r="230" fill="none"
        stroke="rgba(212,175,55,0.08)" strokeWidth="0" />
    </svg>
  );
}

function MoonBackground() {
  const stars = [
    [30, 30], [80, 55], [130, 20], [190, 60], [240, 25], [310, 45],
    [370, 20], [420, 55], [480, 30], [530, 60], [580, 25], [620, 50],
    [50, 100], [110, 120], [160, 90], [220, 130], [270, 100], [320, 85],
    [400, 110], [450, 90], [510, 115], [560, 95], [590, 130],
    [20, 180], [70, 200], [450, 40], [490, 70], [550, 45],
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="mbBg" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#12104a" />
          <stop offset="100%" stopColor="#1a0b2e" />
        </radialGradient>
        <radialGradient id="mbMoon" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#f5edd6" />
          <stop offset="50%" stopColor="#e8d9b0" />
          <stop offset="100%" stopColor="#c8b47a" />
        </radialGradient>
        <radialGradient id="mbMoonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(245,237,214,0.2)" />
          <stop offset="100%" stopColor="rgba(245,237,214,0)" />
        </radialGradient>
        <filter id="moonBlur">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      <rect width="600" height="400" fill="url(#mbBg)" />

      {/* Stars */}
      {stars.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 6 === 0 ? 2 : 1}
          fill="white" opacity={0.15 + (i % 5) * 0.1} />
      ))}

      {/* Moon soft glow (blurred) */}
      <circle cx="300" cy="155" r="105" fill="rgba(245,230,180,0.12)"
        filter="url(#moonBlur)" />

      {/* Moon body */}
      <circle cx="300" cy="155" r="82" fill="url(#mbMoon)" />

      {/* Moon craters */}
      <circle cx="275" cy="135" r="10" fill="rgba(0,0,0,0.07)" />
      <circle cx="320" cy="170" r="7" fill="rgba(0,0,0,0.06)" />
      <circle cx="290" cy="175" r="5" fill="rgba(0,0,0,0.05)" />
      <circle cx="330" cy="140" r="8" fill="rgba(0,0,0,0.06)" />
      <circle cx="260" cy="165" r="4" fill="rgba(0,0,0,0.05)" />

      {/* Moon inner glow overlay */}
      <circle cx="300" cy="155" r="82" fill="url(#mbMoonGlow)" />

      {/* Cloud silhouettes */}
      <path d="M-20,310 Q20,280 60,295 Q80,265 120,278 Q150,255 185,272 Q210,248 250,265 Q270,245 305,260 Q330,240 365,258 Q395,238 430,255 Q460,235 500,253 Q530,235 570,252 Q600,238 640,255 L640,400 L-20,400 Z"
        fill="rgba(15,20,60,0.75)" />
      <path d="M-20,345 Q30,315 75,330 Q100,305 140,320 Q170,298 215,315 Q245,290 290,308 Q320,285 360,302 Q390,278 435,296 Q465,272 510,290 Q545,268 590,286 L600,400 L-20,400 Z"
        fill="rgba(8,12,40,0.85)" />

      {/* Stars reflection / sparkle near moon */}
      {[[210, 80], [390, 75], [265, 45], [335, 50], [185, 110], [415, 105]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={1.5}
          fill="rgba(255,255,255,0.5)" />
      ))}
    </svg>
  );
}

function OrbitBackground() {
  const stars = [
    [20, 20], [60, 40], [110, 15], [165, 50], [220, 20], [280, 45],
    [330, 15], [380, 45], [430, 20], [490, 50], [540, 22], [580, 48],
    [30, 100], [90, 120], [145, 80], [200, 115], [250, 85], [570, 90],
    [520, 115], [480, 80], [440, 110], [390, 90], [510, 150],
    [25, 200], [50, 250], [35, 320], [580, 200], [590, 270], [570, 340],
  ];

  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="obBg" cx="40%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#1a0b2e" />
          <stop offset="100%" stopColor="#1a0b2e" />
        </radialGradient>
        <radialGradient id="obSun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(212,175,55,0.6)" />
          <stop offset="100%" stopColor="rgba(212,175,55,0)" />
        </radialGradient>
        <radialGradient id="obRetro" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(251,191,36,0.9)" />
          <stop offset="100%" stopColor="rgba(251,191,36,0.4)" />
        </radialGradient>
      </defs>

      <rect width="600" height="400" fill="url(#obBg)" />

      {/* Stars */}
      {stars.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 5 === 0 ? 1.8 : 1}
          fill="white" opacity={0.12 + (i % 5) * 0.1} />
      ))}

      {/* Orbital rings — ellipses centered at ~(195, 205) */}
      <ellipse cx="195" cy="205" rx="38" ry="15" fill="none"
        stroke="rgba(212,175,55,0.35)" strokeWidth="0" />
      <ellipse cx="195" cy="205" rx="75" ry="28" fill="none"
        stroke="rgba(129,140,248,0.3)" strokeWidth="0" />
      <ellipse cx="195" cy="205" rx="120" ry="45" fill="none"
        stroke="rgba(52,211,153,0.25)" strokeWidth="0" />
      <ellipse cx="195" cy="205" rx="175" ry="65" fill="none"
        stroke="rgba(251,191,36,0.18)" strokeWidth="0"
        strokeDasharray="6 10" />
      <ellipse cx="195" cy="205" rx="235" ry="88" fill="none"
        stroke="transparent" strokeWidth="0"
        strokeDasharray="4 14" />

      {/* Sun / center star glow */}
      <circle cx="195" cy="205" r="30" fill="url(#obSun)" />
      <circle cx="195" cy="205" r="7" fill="rgba(212,175,55,0.8)" />
      <circle cx="195" cy="205" r="3.5" fill="#FFD700" />

      {/* Planet dots on orbits */}
      {/* Mercury — orbit 1 */}
      <circle cx="233" cy="205" r="4" fill="#94a3b8" opacity="0.85" />
      {/* Venus — orbit 2, angled */}
      <circle cx="265" cy="185" r="5.5" fill="#f59e0b" opacity="0.8" />
      {/* Earth — orbit 3 */}
      <circle cx="105" cy="218" r="6" fill="#3b82f6" opacity="0.85" />
      {/* Mars — orbit 4, highlighted */}
      <circle cx="350" cy="175" r="5" fill="#ef4444" opacity="0.8" />
      {/* Outer planet */}
      <circle cx="405" cy="268" r="8" fill="#a855f7" opacity="0.7" />

      {/* Planet halos */}
      <ellipse cx="405" cy="268" rx="13" ry="5" fill="none"
        stroke="transparent" strokeWidth="0"
        transform="rotate(-20 405 268)" />

      {/* Retrograde symbol — prominent, top right */}
      <text x="460" y="80"
        fontSize="64" fontWeight="900"
        fill="url(#obRetro)"
        fontFamily="system-ui, sans-serif"
        textAnchor="middle"
        opacity="0.88">
        ↩
      </text>
      {/* "Rx" label */}
      <text x="505" y="105"
        fontSize="11" fontWeight="700"
        fill="rgba(251,191,36,0.6)"
        letterSpacing="2"
        fontFamily="system-ui, sans-serif"
        textAnchor="middle">
        RETROGRADE
      </text>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Hero Grid
───────────────────────────────────────────────────────── */

const HERO_CARDS = [
  {
    id: "burclar",
    category: "Sternzeichen",
    categoryColor: "#a78bfa",
    href: "/burclar/haftalik",
    title: "Wochenhoroskop: Was sagen die Sterne diese Woche?",
    spot: "Liebe, Geld und Gesundheit — detaillierter Guide für alle Sternzeichen",
    featured: true,
    Background: ZodiacBackground,
  },
  {
    id: "ruya",
    category: "Traumdeutung",
    categoryColor: "#818cf8",
    href: "/ruya/sozluk",
    title: "Mystisches Traumlexikon: Entdecke die verborgene Bedeutung deiner Symbole",
    spot: "Tausende Traumsymbole und Deutungen von A bis Z",
    featured: false,
    Background: MoonBackground,
  },
  {
    id: "gok",
    category: "Kosmischer Kalender",
    categoryColor: "#34d399",
    href: "/gok/retrograde",
    title: "Merkur wird rückläufig! Sternzeichen-Guide gegen Kommunikationspannen",
    spot: "Sternzeichen-basierte Tipps, um die Retrograde-Phase gut zu meistern",
    featured: false,
    Background: OrbitBackground,
  },
] as const;

export default function HeroGrid() {
  const [featured, ...secondaries] = HERO_CARDS;

  return (
    <section
      style={{
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "2.5rem 1.5rem 0",
      }}
    >
      {/* BuzzFeed-style asymmetric grid */}
      <div className="hero-grid">

        {/* ── Big left card ── */}
        <Link href={featured.href} className="hero-card hero-card-featured">
          <div className="hero-card-bg">
            <featured.Background />
          </div>
          {/* Dark gradient overlay */}
          <div className="hero-card-overlay" />
          {/* Category badge */}
          <div
            className="hero-card-badge"
            style={{
              color: featured.categoryColor,
              background: `${featured.categoryColor}20`,
              border: `1px solid ${featured.categoryColor}35`,
            }}
          >
            {featured.category}
          </div>
          {/* Content */}
          <div className="hero-card-content">
            <h2 className="hero-card-title hero-card-title--lg">
              {featured.title}
            </h2>
            <p className="hero-card-spot">{featured.spot}</p>
            <span
              className="hero-card-cta"
              style={{ color: featured.categoryColor }}
            >
              Weiterlesen →
            </span>
          </div>
        </Link>

        {/* ── Right column: two stacked small cards ── */}
        <div className="hero-grid-right">
          {secondaries.map((card) => (
            <Link key={card.id} href={card.href} className="hero-card hero-card-secondary">
              <div className="hero-card-bg">
                <card.Background />
              </div>
              <div className="hero-card-overlay" />
              <div
                className="hero-card-badge"
                style={{
                  color: card.categoryColor,
                  background: `${card.categoryColor}20`,
                  border: `1px solid ${card.categoryColor}35`,
                }}
              >
                {card.category}
              </div>
              <div className="hero-card-content">
                <h3 className="hero-card-title hero-card-title--sm">
                  {card.title}
                </h3>
                <p className="hero-card-spot hero-card-spot--sm">{card.spot}</p>
                <span
                  className="hero-card-cta"
                  style={{ color: card.categoryColor }}
                >
                  Devamını Oku →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
