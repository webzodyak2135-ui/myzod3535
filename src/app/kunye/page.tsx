export default function KünyePage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "2rem" }}>
            Impressum (Künye)
          </h1>

          <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Max Mustermann (murat emre ipekyuz)
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
              Anschrift
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Akatay Towers, Firat Mah.<br />
              494/1. Sokak No: 17, B1 Blok<br />
              21070 Kayapinar / Diyarbakir<br />
              Turkei
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
              Kontaktmöglichkeiten
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              E-Mail: emreipekyuz7@gmail.com<br />
              Telefon: +90 530 832 13 95
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem" }}>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Max Mustermann (murat emre ipekyuz)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
