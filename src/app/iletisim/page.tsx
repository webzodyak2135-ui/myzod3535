"use client";

import { useState } from "react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({ isim: "", email: "", konu: "", mesaj: "" });
  const [gonderildi, setGonderildi] = useState(false);

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
            İletişim
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", maxWidth: "600px", margin: "0 auto" }}>
            Sorularınız, önerileriniz veya geri bildirimleriniz için bize ulaşın
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
                Bize Ulaşın
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#1a0b2e", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                    📧
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>E-posta</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>info@zodyakli.com</div>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#1a0b2e", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#1a0b2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                    📱
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>Sosyal Medya</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>@zodyakli</div>
                  </div>
                </div>
                
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "#1a0b2e", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "#1a0b2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem" }}>
                    ⏰
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", color: "#ffffff" }}>Yanıt Süresi</div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff" }}>24 saat içinde</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
                Mesaj Gönderin
              </h2>
              
              {gonderildi ? (
                <div style={{ background: "#1a0b2e", borderRadius: "16px", padding: "2rem", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                    Mesajınız Alındı!
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                    En kısa sürede size dönüş yapacağız.
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
                    Yeni Mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <input
                    type="text"
                    placeholder="Adınız"
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
                    placeholder="E-posta Adresiniz"
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
                    <option value="">Konu Seçin</option>
                    <option value="genel">Genel Soru</option>
                    <option value="oneri">Öneri</option>
                    <option value="hata">Hata Bildirimi</option>
                    <option value="isbirligi">İş Birliği</option>
                  </select>
                  <textarea
                    placeholder="Mesajınız"
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
                  <button
                    type="submit"
                    style={{
                      padding: "1rem",
                      background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Gönder
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
            Sık Sorulan Sorular
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Burç yorumları ne sıklıkla güncelleniyor?
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                Günlük yorumlar her gün, haftalık yorumlar her pazartesi, aylık yorumlar ise her ayın başında güncellenmektedir.
              </p>
            </div>
            <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Rüya tabiri nasıl yapılır?
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                Rüya sözlüğümüzde arama yaparak veya kategorilere göz atarak rüyanızdaki sembollerin anlamlarını bulabilirsiniz.
              </p>
            </div>
            <div style={{ background: "#1a0b2e", borderRadius: "12px", padding: "1.25rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#ffffff", marginBottom: "0.5rem" }}>
                Testler ücretsiz mi?
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#ffffff" }}>
                Evet, tüm astroloji testlerimiz tamamen ücretsizdir ve sınırsız kullanılabilir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
