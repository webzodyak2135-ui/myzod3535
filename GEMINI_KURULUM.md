# Gemini API Kurulum Rehberi

## 1) API anahtari al
1. https://aistudio.google.com/app/apikey adresine gir
2. API key olustur

## 2) Lokal ortam degiskeni ekle
Proje kok dizininde `.env.local` dosyasi olusturup su degiskeni ekle:

```bash
GEMINI_API_KEY=buraya_api_key
# opsiyonel
GEMINI_MODEL=gemini-2.0-flash
NEXT_PUBLIC_SITE_URL=https://senin-domainin.com
CRON_SECRET=guclu_bir_token
```

## 3) Calisan endpointler
- `POST /api/ai/horoscope`
- `POST /api/ai/dream`
- `POST /api/ai/compatibility`

## 4) Kullanim notu
API key yoksa sistem fallback statik icerik gostermeye devam eder.

## 5) Test
```bash
npm run dev
```
- `/burclar/gunluk` -> Gemini gunluk yorumlar
- `/burclar/uyum` -> Gemini detayli uyum analizi
- `/ruya/yorumla` -> Gemini kisisel ruya yorumu

## 6) Otomatik prewarm (gece 00:05 TR)
- `vercel.json` icindeki cron, her gun 00:05 (TR) icin ayarlandi.
- Cron endpoint: `GET /api/cron/prewarm`
- Endpoint, `/burclar/gunluk` ve `/burclar/haftalik` sayfalarini onceden isitir.

Guvenlik icin cron isteginde header kullan:

```bash
Authorization: Bearer CRON_SECRET
```
