import Link from "next/link";

const FOOTER_LINKS = {
  burclar: [
    { label: "Günlük Yorumlar", href: "/burclar/gunluk" },
    { label: "Haftalık Yorumlar", href: "/burclar/haftalik" },
    { label: "Aylık Yorumlar", href: "/burclar/aylik" },
    { label: "Burç Uyumu", href: "/burclar/uyum" },
  ],
  ruya: [
    { label: "Rüya Sözlüğü", href: "/ruya/sozluk" },
    { label: "Su Rüyaları", href: "/ruya/su" },
    { label: "Uçma Rüyaları", href: "/ruya/ucma" },
    { label: "Aşk Rüyaları", href: "/ruya/ask" },
  ],
  testler: [
    { label: "Burç Testi", href: "/testler/burc" },
    { label: "Numeroloji", href: "/testler/numeroloji" },
    { label: "Element Testi", href: "/testler/element" },
    { label: "Aşk Uyumu", href: "/testler/ask-uyumu" },
  ],
  diger: [
    { label: "Gök Gündemi", href: "/gok-gundemi" },
    { label: "İlişkiler", href: "/iliskiler" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
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
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                  }}
                >
                  ✨
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
                  ZODYAKLI
                </span>
              </div>
            </Link>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
              Günlük burç yorumları, rüya tabirleri ve astroloji testleriyle kozmik rehberiniz.
            </p>
          </div>

          {/* Burçlar */}
          <div>
            <h4 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "1rem", color: "#a78bfa" }}>
              ♈ Burçlar
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
              🌙 Rüya Tabirleri
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
              ✨ Testler
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
              🌌 Diğer
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
            © 2024 Zodyaklı. Tüm hakları saklıdır.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link
              href="/gizlilik"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
