export default function GizlilikPage() {
  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#ffffff", marginBottom: "2rem" }}>
            Gizlilik Politikası
          </h1>
          
          <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "2rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Son güncelleme: Mart 2024
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              1. Toplanan Bilgiler
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1rem" }}>
              Zodyaklı olarak, kullanıcı deneyimini iyileştirmek için aşağıdaki bilgileri toplayabiliriz:
            </p>
            <ul style={{ color: "#ffffff", lineHeight: 1.8, marginLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li>Tarayıcı türü ve sürümü</li>
              <li>Ziyaret edilen sayfalar</li>
              <li>Ziyaret tarihi ve saati</li>
              <li>Cihaz bilgileri</li>
            </ul>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              2. Çerezler (Cookies)
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanmaktadır. Çerezler, tercihlerinizi 
              hatırlamak ve site kullanımını analiz etmek için kullanılır.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              3. Bilgilerin Kullanımı
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Toplanan bilgiler yalnızca site performansını iyileştirmek, içerik önerileri sunmak ve 
              kullanıcı deneyimini geliştirmek amacıyla kullanılmaktadır.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              4. Üçüncü Taraf Hizmetleri
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Sitemiz, analitik ve reklam hizmetleri için üçüncü taraf araçlar kullanabilir. Bu hizmetlerin 
              kendi gizlilik politikaları bulunmaktadır.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              5. Veri Güvenliği
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Kullanıcı verilerinin güvenliği bizim için önemlidir. Verilerinizi korumak için endüstri 
              standardı güvenlik önlemleri uygulamaktayız.
            </p>

            <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", marginTop: "1.5rem" }}>
              6. İletişim
            </h2>
            <p style={{ color: "#ffffff", lineHeight: 1.8 }}>
              Gizlilik politikamız hakkında sorularınız için info@zodyakli.com adresinden bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
