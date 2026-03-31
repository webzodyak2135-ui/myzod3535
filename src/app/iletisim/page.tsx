"use client";

import { useState } from "react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({ isim: "", email: "", konu: "", mesaj: "" });
  const [gonderildi, setGonderildi] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGonderildi(true);
  };

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📬</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#ffffff", marginBottom: "1rem" }}>
            Kontakt
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto" }}>
            Kontaktiere uns bei Fragen, Anregungen oder Feedback
          </p>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ padding: "3rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>

            {/* İletişim Bilgileri */}
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
                Kontaktiere uns
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#1a0b2e", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                    📧
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>E-Mail</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>emreipekyuz7@gmail.com</div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#1a0b2e", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#1a0b2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>Adresse</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>
                      Akatay Towers, Firat Mah.<br />
                      494/1. Sokak No: 17, B1 Blok<br />
                      21070 Kayapinar / Diyarbakir<br />
                      Turkei
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#1a0b2e", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#1a0b2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                    ☎️
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>Telefon</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>+90 530 832 13 95</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
                Nachricht senden
              </h2>

              {gonderildi ? (
                <div style={{ background: "#1a0b2e", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                    Nachricht erhalten!
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                    Wir werden uns so schnell wie möglich bei dir melden.
                  </p>
                  <button
                    onClick={() => { setGonderildi(false); setFormData({ isim: "", email: "", konu: "", mesaj: "" }); }}
                    style={{
                      marginTop: "1rem",
                      padding: "0.5rem 1rem",
                      background: "#166534",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                    }}
                  >
                    Neue Nachricht
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input
                    type="text"
                    placeholder="Dein Name"
                    value={formData.isim}
                    onChange={(e) => setFormData({ ...formData, isim: e.target.value })}
                    required
                    style={{
                      padding: "0.875rem 1rem",
                      borderRadius: "12px",
                      border: "2px solid #ffffff",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    style={{
                      padding: "0.875rem 1rem",
                      borderRadius: "12px",
                      border: "2px solid #ffffff",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  />
                  <select
                    value={formData.konu}
                    onChange={(e) => setFormData({ ...formData, konu: e.target.value })}
                    required
                    style={{
                      padding: "0.875rem 1rem",
                      borderRadius: "12px",
                      border: "2px solid #ffffff",
                      fontSize: "1rem",
                      outline: "none",
                      background: "#1a0b2e",
                    }}
                  >
                    <option value="">Thema auswählen</option>
                    <option value="genel">Allgemeine Frage</option>
                    <option value="oneri">Vorschlag</option>
                    <option value="hata">Fehlermeldung</option>
                    <option value="isbirligi">Zusammenarbeit</option>
                  </select>
                  <textarea
                    placeholder="Deine Nachricht"
                    value={formData.mesaj}
                    onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
                    required
                    rows={5}
                    style={{
                      padding: "0.875rem 1rem",
                      borderRadius: "12px",
                      border: "2px solid #ffffff",
                      fontSize: "1rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                  <label style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "#ffffff", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      required
                      style={{ marginTop: "0.2rem" }}
                    />
                    <span>
                      Ich stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.
                      Die Daten werden ausschließlich für die Kommunikation verwendet und in der Regel nach
                      spätestens 6 Monaten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
                      Details findest du in der Datenschutzerklärung.
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={!privacyAccepted}
                    style={{
                      padding: "1rem",
                      background: privacyAccepted ? "linear-gradient(135deg, #7c3aed, #a855f7)" : "rgba(255,255,255,0.2)",
                      color: privacyAccepted ? "#ffffff" : "rgba(255,255,255,0.7)",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: privacyAccepted ? "pointer" : "not-allowed",
                    }}
                  >
                    Senden
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section style={{ padding: "3rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", textAlign: "center" }}>
            Häufig gestellte Fragen
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Wie oft werden die Horoskope aktualisiert?
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                Tägliche Horoskope werden jeden Tag, wöchentliche jeden Montag und monatliche am Anfang jeden Monats aktualisiert.
              </p>
            </div>
            <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Wie funktioniert die Traumdeutung?
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                Du kannst in unserem Traumlexikon suchen oder durch Kategorien stöbern, um die Bedeutungen der Symbole in deinem Traum zu finden.
              </p>
            </div>
            <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Sind die Tests kostenlos?
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                Ja, alle unsere Astrologie-Tests sind völlig kostenlos und unbegrenzt nutzbar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
