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
              Letzte Aktualisierung: März 2026
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
              Wir nutzen folgende Drittanbieter-Dienste:
            </p>
            <ul style={{ color: "#ffffff", lineHeight: 1.8, marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li>
                <strong>Cloudflare</strong> (Hosting, CDN, Sicherheitsfunktionen): Verarbeitung technischer
                Verbindungsdaten zur stabilen und sicheren Auslieferung der Website.
              </li>
              <li>
                <strong>Google Analytics</strong> (Nutzungsanalyse): Aktiv nur nach Einwilligung über das
                Cookie-Banner; Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO.
              </li>
            </ul>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Für diese Dienste gelten ergänzend die jeweiligen Datenschutzbestimmungen der Anbieter.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              5. Auftragsverarbeitung (AVV / DPA)
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Soweit wir externe Dienstleister (z. B. Hosting, Analyse oder technische Infrastruktur) einsetzen,
              erfolgt dies auf Grundlage eines Vertrags zur Auftragsverarbeitung (AVV / Data Processing Agreement,
              Art. 28 DSGVO), sofern eine Verarbeitung personenbezogener Daten in unserem Auftrag stattfindet.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              6. Datensicherheit
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Die Sicherheit der Nutzerdaten ist uns wichtig. Wir setzen branchenübliche Sicherheitsmaßnahmen
              zum Schutz deiner Daten ein.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              7. Cookie-Einstellungen
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Du kannst deine Einwilligung jederzeit ändern oder widerrufen. Verwende dafür den Link
              "Cookie-Einstellungen" im Footer der Website.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              8. Kontakt
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Bei datenschutzrechtlichen Anliegen erreichst du uns unter:
              <br />
              E-Mail: emreipekyuz7@gmail.com
              <br />
              Telefon: +90 530 832 13 95
              <br />
              Max Mustermann (murat emre ipekyuz)
              <br />
              Akatay Towers, Firat Mah.
              <br />
              494/1. Sokak No: 17, B1 Blok
              <br />
              21070 Kayapinar / Diyarbakir
              <br />
              Turkei
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
