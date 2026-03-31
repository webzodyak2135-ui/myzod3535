import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  burclar: [
    { label: "Tageshoroskop", href: "/burclar/gunluk" },
    { label: "Wochenhoroskop", href: "/burclar/haftalik" },
    { label: "Monatshoroskop", href: "/burclar/aylik" },
    { label: "Kompatibilität", href: "/burclar/uyum" },
  ],
  ruya: [
    { label: "Traumlexikon", href: "/ruya/sozluk" },
    { label: "Wasserträume", href: "/ruya/su" },
    { label: "Flugträume", href: "/ruya/ucma" },
    { label: "Liebesträume", href: "/ruya/ask" },
  ],
  testler: [
    { label: "Sternzeichen-Test", href: "/testler/burc" },
    { label: "Numerologie", href: "/testler/numeroloji" },
    { label: "Element-Test", href: "/testler/element" },
    { label: "Liebes-Kompatibilität", href: "/testler/ask-uyumu" },
  ],
  diger: [
    { label: "Kosmischer Kalender", href: "/gok-gundemi" },
    { label: "Beziehungen", href: "/iliskiler" },
    { label: "Über uns", href: "/hakkimizda" },
    { label: "Kontakt", href: "/iletisim" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1a0b2e",
        color: "#ffffff",
        padding: "4rem 1rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Star particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.4 }}>
        {[[5, 10], [15, 80], [25, 30], [35, 60], [45, 15], [55, 85], [65, 40], [75, 70], [85, 25], [95, 55]].map(([top, left], i) => (
          <div key={i} style={{ position: "absolute", top: `${top}%`, left: `${left}%`, width: "2px", height: "2px", borderRadius: "50%", background: "#ffffff" }} />
        ))}
      </div>
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        {/* Üst Kısım */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Logo & Açıklama */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    position: "relative",
                    border: "2px solid rgba(168,85,247,0.3)",
                  }}
                >
                  <Image
                    src="/img/newfavicon.png"
                    alt="SternenFeed Logo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    background: "linear-gradient(135deg, #d4af37, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SternenFeed
                </span>
              </div>
            </Link>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              Dein kosmischer Guide mit täglichen Horoskopen, Traumdeutung und Astrologie-Tests.
            </p>
          </div>

          {/* Burçlar */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", color: "#a78bfa" }}>
              ♈ Sternzeichen
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FOOTER_LINKS.burclar.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                      transition: "color 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rüya Tabirleri */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", color: "#818cf8" }}>
              🌙 Traumdeutung
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FOOTER_LINKS.ruya.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Testler */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", color: "#c084fc" }}>
              ✨ Tests
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FOOTER_LINKS.testler.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Diğer */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", color: "#f0abfc" }}>
              🌌 Mehr
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FOOTER_LINKS.diger.map((link) => (
                <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.85rem",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Alt Kısım */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
            © 2024 SternenFeed. Alle Rechte vorbehalten.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href="/impressum"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              Impressum (Künye)
            </Link>
            <Link
              href="/datenschutz"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              Datenschutzerklärung
            </Link>
            <Link
              href="/kullanim-sartlari"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              Nutzungsbedingungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
