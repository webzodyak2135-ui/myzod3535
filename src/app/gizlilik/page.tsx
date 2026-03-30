export default function GizlilikPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "2rem" }}>
            Datenschutzrichtlinie
          </h1>

          <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Letzte Aktualisierung: März 2024
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              1. Erfasste Informationen
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Als SternenFeed können wir die folgenden Informationen erfassen, um das Nutzererlebnis zu verbessern:
            </p>
            <ul style={{ color: "#ffffff", lineHeight: 1.8, marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li>Browser-Typ und -Version</li>
              <li>Besuchte Seiten</li>
              <li>Datum und Uhrzeit des Besuchs</li>
              <li>Geräteinformationen</li>
            </ul>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              2. Cookies
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Unsere Website verwendet Cookies, um das Nutzererlebnis zu verbessern. Cookies werden verwendet, um
              deine Präferenzen zu speichern und die Website-Nutzung zu analysieren.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              3. Verwendung der Informationen
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Die erfassten Informationen werden ausschließlich verwendet, um die Website-Performance zu verbessern,
              Inhaltsempfehlungen zu bieten und das Nutzererlebnis zu optimieren.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              4. Dienste von Drittanbietern
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Unsere Website kann Drittanbieter-Tools für Analyse- und Werbedienste verwenden. Diese Dienste
              haben ihre eigenen Datenschutzrichtlinien.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              5. Datensicherheit
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Die Sicherheit der Nutzerdaten ist uns wichtig. Wir setzen branchenübliche Sicherheitsmaßnahmen
              zum Schutz deiner Daten ein.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              6. Kontakt
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Bei Fragen zu unserer Datenschutzrichtlinie kannst du uns unter info@zodyakli.com kontaktieren.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
