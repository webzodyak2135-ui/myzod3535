# 📝 İçerik Ekleme Rehberi

## Nasıl Yeni Makale Eklenir?

### 1. Dosyayı Aç
`src/lib/data.ts` dosyasını aç.

### 2. Makale Formatı

Her makale şu formatta olmalı:

```typescript
{
  id: "benzersiz-id",                    // URL'de kullanılacak, örn: "yeni-makale-2024"
  slug: "benzersiz-slug",                 // Genelde id ile aynı olur
  title: "Makale Başlığı",                // Ana başlık
  description: "Kısa açıklama...",         // Kartlarda görünen açıklama
  content: `Makale içeriği buraya gelir.
  
Paragraflar arasında boş satır bırakın.

Her paragraf ayrı bir satırda olmalı.`,  // Tam makale içeriği
  category: "AI",                          // Kategori: "AI", "Mobile", "Gaming", "Software", "Hardware", "Movies & Shows"
  readTime: "5 min read",                 // Okuma süresi tahmini
  image: "/img/indir.jpg",                // Görsel yolu (public/img klasöründe)
  datePublished: "2024-01-15T10:00:00Z",   // Yayın tarihi (ISO format)
  dateModified: "2024-01-15T10:00:00Z",   // Güncelleme tarihi (genelde aynı)
  author: {                               // Bu kısım otomatik atanır, elle yazmanıza gerek yok
    name: getAuthorByCategory("AI").name,
    role: getAuthorByCategory("AI").role,
    url: `https://techarchivehub.net/author/${getAuthorByCategory("AI").slug}`,
    avatar: getAuthorByCategory("AI").avatar,
  },
},
```

### 3. Nereye Eklenecek?

`allArticles` dizisinin içine, ilgili kategori bölümüne ekleyin. Örneğin AI kategorisi için:

```typescript
export const allArticles: NewsArticle[] = [
  // AI Articles
  {
    id: "gpt-5-leaks",
    // ... mevcut makaleler
  },
  {
    id: "yeni-ai-makalesi",  // ← BURAYA YENİ MAKALENİZİ EKLEYİN
    slug: "yeni-ai-makalesi",
    title: "Yeni AI Teknolojisi Hakkında",
    description: "Bu makale yeni AI teknolojisini açıklıyor...",
    content: `Makale içeriği buraya gelir...`,
    category: "AI",
    readTime: "5 min read",
    image: "/img/indir.jpg",
    datePublished: "2024-01-20T10:00:00Z",
    dateModified: "2024-01-20T10:00:00Z",
    author: {
      name: getAuthorByCategory("AI").name,
      role: getAuthorByCategory("AI").role,
      url: `https://techarchivehub.net/author/${getAuthorByCategory("AI").slug}`,
      avatar: getAuthorByCategory("AI").avatar,
    },
  },
  // ... diğer kategoriler
];
```

### 4. Önemli Notlar

- **id ve slug**: Benzersiz olmalı, URL'de kullanılır
- **category**: Doğru kategoriyi seçin (otomatik yazar atanır)
- **datePublished**: En yeni makaleler üstte görünür (tarih sırasına göre)
- **image**: Görseli `public/img/` klasörüne koyun
- **author**: Elle yazmayın, sistem otomatik atar

### 5. Kategoriler ve Yazarları

- **AI** → Emre Ipekyuz
- **Mobile** → Eyup Beyaz
- **Gaming** → Siir Kaya
- **Software** → Muhammed Cadde
- **Hardware** → Can Al
- **Movies & Shows** → Bunyamin Bakir

### 6. Örnek Makale

```typescript
{
  id: "iphone-16-review",
  slug: "iphone-16-review",
  title: "iPhone 16 İncelemesi: Yeni Özellikler ve Performans",
  description: "Apple'ın yeni iPhone 16 modelini detaylıca inceledik. Tüm özellikler ve performans testleri.",
  content: `Apple, iPhone 16 ile yeni bir dönem başlatıyor. Bu makalede tüm detayları bulacaksınız.

Yeni kamera sistemi özellikle dikkat çekiyor. 48MP ana kamera ve gelişmiş video özellikleri ile profesyonel kalitede çekimler yapabilirsiniz.

Performans açısından A18 Pro çip ile çok güçlü bir deneyim sunuyor. Oyunlar ve uygulamalar sorunsuz çalışıyor.`,
  category: "Mobile",
  readTime: "8 min read",
  image: "/img/indir.jpg",
  datePublished: "2024-01-20T14:00:00Z",
  dateModified: "2024-01-20T14:00:00Z",
  author: {
    name: getAuthorByCategory("Mobile").name,
    role: getAuthorByCategory("Mobile").role,
    url: `https://techarchivehub.net/author/${getAuthorByCategory("Mobile").slug}`,
    avatar: getAuthorByCategory("Mobile").avatar,
  },
},
```

### 7. Dosyayı Kaydet

Değişiklikleri kaydettikten sonra:
- Sayfayı yenileyin
- Yeni makale otomatik olarak ilgili kategori sayfasında görünecek
- En yeni tarihli makaleler üstte olacak

### 8. Görsel Ekleme

1. Görseli `public/img/` klasörüne koyun
2. Makalede `image: "/img/dosya-adi.jpg"` şeklinde belirtin
3. Önerilen boyut: 1200x675px (16:9 oran)

---

**İpucu**: Dosyayı açtıktan sonra mevcut makaleleri kopyalayıp düzenleyerek başlayabilirsiniz!



