type DailyHoroscope = {
  gunluk: string;
  ask: string;
  kariyer: string;
  saglik: string;
  sans: number;
};

type WeeklyHoroscope = {
  haftalik: string;
  ask: string;
  kariyer: string;
  saglik: string;
};

type DreamInterpretation = {
  genelAnlam: string;
  semboller: string[];
  duygusalMesaj: string;
  hayataYansima: string;
  tavsiyeler: string[];
};

type CompatibilityInterpretation = {
  genelUyum: number;
  askUyumu: number;
  arkadaslikUyumu: number;
  isUyumu: number;
  gucluYonler: string[];
  dikkatEdilecekler: string[];
  ozet: string;
};

export type BurcFullContent = {
  gunluk: string;
  ask: string;
  kariyer: string;
  saglik: string;
  sans: number;
  haftalik: string;
  aylik: string;
};

export type MonthlyHoroscope = {
  aylik: string;
  ask: string;
  kariyer: string;
  saglik: string;
};

export type StaticDreamDetail = {
  detay: string;
  olumlu: string[];
  olumsuz: string[];
  tavsiye: string;
};

export type TonePreset = "kanka" | "uzman" | "soft";

export const TONE_PRESETS: TonePreset[] = ["kanka", "uzman", "soft"];

export const ZODIAC_SIGNS = [
  { slug: "koc", name: "Koc" },
  { slug: "boga", name: "Boga" },
  { slug: "ikizler", name: "Ikizler" },
  { slug: "yengec", name: "Yengec" },
  { slug: "aslan", name: "Aslan" },
  { slug: "basak", name: "Basak" },
  { slug: "terazi", name: "Terazi" },
  { slug: "akrep", name: "Akrep" },
  { slug: "yay", name: "Yay" },
  { slug: "oglak", name: "Oglak" },
  { slug: "kova", name: "Kova" },
  { slug: "balik", name: "Balik" },
] as const;

const GEMINI_MODEL = process.env.GEMINI_MODEL ?? "gemini-2.0-flash";

const GEMINI_FALLBACK_MODELS = [
  GEMINI_MODEL,
  "gemini-2.5-flash",
  "gemini-flash-latest",
  "gemini-2.0-flash-001",
  "gemini-2.0-flash-lite",
  "gemini-2.0-flash-lite-001",
];

function toneInstruction(tonePreset: TonePreset = "uzman") {
  if (tonePreset === "kanka") {
    return "Ton: samimi, yakin, gundelik ve sicak olsun; kisa ama net cumleler kullan.";
  }

  if (tonePreset === "soft") {
    return "Ton: yumusak, sakin, destekleyici ve hassas olsun; yargilayici dilden kacinin.";
  }

  return "Ton: profesyonel astrolog gibi guven veren ama dogal ve insani bir dil kullan.";
}

function getApiKey() {
  return process.env.GEMINI_API_KEY ?? process.env.GOOGLE_AI_API_KEY ?? "";
}

function safeNumber(value: unknown, fallback = 7, min = 1, max = 10) {
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num)) return fallback;
  return Math.min(max, Math.max(min, Math.round(num)));
}

function scrubAiDisclosure(text: string) {
  return text
    .replace(/\b(bir\s+)?yapay\s+zeka\s+olarak\b/gi, "")
    .replace(/\b(as an ai|as a language model)\b/gi, "")
    .replace(/\b(ai|gemini|google\s*ai|google\s*yapay\s*zeka|dil\s*modeli)\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function safeText(value: unknown, fallback = "") {
  if (typeof value !== "string") return fallback;
  const normalized = scrubAiDisclosure(value.trim());
  return normalized || fallback;
}

async function callGeminiJson<T>(prompt: string): Promise<T | null> {
  const apiKey = getApiKey();
  if (!apiKey) return null;

  const uniqueModels = [...new Set(GEMINI_FALLBACK_MODELS.filter(Boolean))];

  for (const model of uniqueModels) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: 0.8,
            topP: 0.95,
            responseMimeType: "application/json",
          },
        }),
        cache: "no-store",
      }
    );

    if (!response.ok) {
      continue;
    }

    const payload = (await response.json()) as {
      candidates?: Array<{
        content?: {
          parts?: Array<{ text?: string }>;
        };
      }>;
    };

    const raw = payload.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) continue;

    try {
      return JSON.parse(raw) as T;
    } catch {
      continue;
    }
  }

  return null;
}

export async function generateDailyHoroscopeBatch(input?: {
  dateISO?: string;
  signs?: string[];
  tonePreset?: TonePreset;
}): Promise<Record<string, DailyHoroscope> | null> {
  const signs = (input?.signs?.length ? input.signs : ZODIAC_SIGNS.map((s) => s.slug)).join(", ");
  const dateISO = input?.dateISO ?? new Date().toISOString().slice(0, 10);
  const tone = toneInstruction(input?.tonePreset ?? "uzman");

  const prompt = [
    "Sen deneyimli, samimi ve icten bir astroloji editoru ve yasam kocusun.",
    `Tarih: ${dateISO}`,
    `Burclar: ${signs}`,
    "Sadece gecerli JSON dondur. Markdown kullanma.",
    "JSON formati: {\"koc\": {\"gunluk\": \"...\", \"ask\": \"...\", \"kariyer\": \"...\", \"saglik\": \"...\", \"sans\": 8}}",
    tone,
    "ONEMLI: Her alan (gunluk, ask, kariyer, saglik) icin 80-150 kelime arasinda ayrintili, akici, samimi bir Turkce yorum yaz.",
    "gunluk alani: Gunun genel enerjisi, o burcun karakteristik ozellikleri ve bugunki gezegen etkilerini derine inerek anlat.",
    "ask alani: Ask ve iliskilerde ne hissedecekleri, dikkat etmeleri gerekenler ve firsat noktalari hakkinda ayrintili yaz.",
    "kariyer alani: Is hayatinda bugunun firsatlari, dikkat edilmesi gerekenler ve onerileri derine inerek yaz.",
    "saglik alani: Fiziksel ve zihinsel saglik icin bugunun enerjisi ve pratik tavsiyeler hakkinda ayrintili yaz.",
    "sans degeri 1-10 arasinda tam sayi olsun.",
    "Yazi tarzi: Yaninda oturan, seni tanıyan, samimi ve deneyimli bir astrolog gibi konuş. Resmi, robotik veya listeleme tarzi kullanma.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google', 'dil modeli' veya 'model' ifadelerini kullanma.",
  ].join("\n");

  const result = await callGeminiJson<Record<string, DailyHoroscope>>(prompt);
  if (!result || typeof result !== "object") return null;

  const normalized: Record<string, DailyHoroscope> = {};
  for (const [slug, value] of Object.entries(result)) {
    const v = value as Partial<DailyHoroscope>;
    normalized[slug] = {
      gunluk: safeText(v.gunluk, "Bugun enerjini dengelemek senin icin onemli."),
      ask: safeText(v.ask, "Iletisimde netlik iliskilerine iyi gelecek."),
      kariyer: safeText(v.kariyer, "Planli hareket etmek avantaj saglayacak."),
      saglik: safeText(v.saglik, "Rutinine dikkat ederek daha iyi hissedebilirsin."),
      sans: safeNumber(v.sans, 7),
    };
  }

  return normalized;
}

export async function generateDreamInterpretation(input: {
  dreamText: string;
  zodiacSign?: string;
  tonePreset?: TonePreset;
}): Promise<DreamInterpretation | null> {
  const tone = toneInstruction(input.tonePreset ?? "soft");
  const prompt = [
    "Sen deneyimli bir ruya yorumcususun.",
    `Burc (opsiyonel): ${input.zodiacSign ?? "belirtilmedi"}`,
    `Ruyanin anlatimi: ${input.dreamText}`,
    "Sadece gecerli JSON dondur.",
    tone,
    "Yorumlari samimi, icten ve sohbet diliyle yaz.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google' veya 'model' ifadelerini kullanma.",
    "genelAnlam alani 150-300 kelime arasinda ayrintili, akici ve derin bir yorum olmali; duygusal katman, sembolik anlam ve psikolojik mesaj birlikte ele alinmali.",
    "JSON formati: {\"genelAnlam\":\"...\",\"semboller\":[\"...\"],\"duygusalMesaj\":\"...\",\"hayataYansima\":\"...\",\"tavsiyeler\":[\"...\"]}",
  ].join("\n");

  const result = await callGeminiJson<DreamInterpretation>(prompt);
  if (!result) return null;

  return {
    genelAnlam: safeText(result.genelAnlam, "Ruyan, ic dunyanda degisim ihtiyacini isaret ediyor."),
    semboller: Array.isArray(result.semboller) ? result.semboller.map((s) => safeText(s)).filter(Boolean).slice(0, 6) : [],
    duygusalMesaj: safeText(result.duygusalMesaj, "Duygularini daha acik ifade etmen faydali olabilir."),
    hayataYansima: safeText(result.hayataYansima, "Gunluk hayatta net adimlar atmak bu donemi kolaylastirir."),
    tavsiyeler: Array.isArray(result.tavsiyeler) ? result.tavsiyeler.map((s) => safeText(s)).filter(Boolean).slice(0, 6) : [],
  };
}

export async function generateWeeklyHoroscopeBatch(input?: {
  weekStartISO?: string;
  signs?: string[];
  tonePreset?: TonePreset;
}): Promise<Record<string, WeeklyHoroscope> | null> {
  const signs = (input?.signs?.length ? input.signs : ZODIAC_SIGNS.map((s) => s.slug)).join(", ");
  const weekStartISO = input?.weekStartISO ?? new Date().toISOString().slice(0, 10);
  const tone = toneInstruction(input?.tonePreset ?? "uzman");

  const prompt = [
    "Sen deneyimli, samimi ve icten bir astroloji editoru ve yasam kocusun.",
    `Hafta baslangici (ISO): ${weekStartISO}`,
    `Burclar: ${signs}`,
    "Sadece gecerli JSON dondur. Markdown kullanma.",
    "{\"koc\": {\"haftalik\": \"...\", \"ask\": \"...\", \"kariyer\": \"...\", \"saglik\": \"...\"}}",
    tone,
    "Her alan icin 80-130 kelime arasinda ayrintili, akici ve samimi Turkce yorum yaz.",
    "haftalik: Bu haftanin genel enerjisi, onemli gunler, gezegen etkileri ve temel tema.",
    "ask: Bu hafta ask ve iliskilerde yasanacaklar, firsatlar ve dikkat edilmesi gerekenler.",
    "kariyer: Bu hafta is hayatinda beklenenler, firsatlar, dikkatler ve pratik onerileri.",
    "saglik: Bu hafta fiziksel ve zihinsel saglik icin enerji, uyarilar ve pratik tavsiyeler.",
    "Yazi tarzi: Samimi, icten, deneyimli bir astrolog gibi konuş. Resmi veya robotik olma.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google', 'dil modeli' veya 'model' ifadelerini kullanma.",
  ].join("\n");

  const result = await callGeminiJson<Record<string, WeeklyHoroscope>>(prompt);
  if (!result || typeof result !== "object") return null;

  const normalized: Record<string, WeeklyHoroscope> = {};
  for (const [slug, value] of Object.entries(result)) {
    const v = value as Partial<WeeklyHoroscope>;
    normalized[slug] = {
      haftalik: safeText(v.haftalik, "Bu hafta planli ve dengeli adimlar atman sana avantaj saglayacak."),
      ask: safeText(v.ask, "Iliskilerde aciklik ve samimilik on planda olacak."),
      kariyer: safeText(v.kariyer, "Is hayatinda sabir ve kararlilik seni basariya tasiyacak."),
      saglik: safeText(v.saglik, "Dinlenmeye ve rutine dikkat ederek bu haftayi saglıkli gecirebilirsin."),
    };
  }

  return normalized;
}

export async function generateCompatibility(input: {
  sign1: string;
  sign2: string;
  tonePreset?: TonePreset;
}): Promise<CompatibilityInterpretation | null> {
  const tone = toneInstruction(input.tonePreset ?? "uzman");
  const prompt = [
    "Sen uzman bir iliski astrolojisi editorusun.",
    `Birinci burc: ${input.sign1}`,
    `Ikinci burc: ${input.sign2}`,
    "Sadece gecerli JSON dondur.",
    tone,
    "Yorumlari samimi, dogal ve insan gibi yaz; robotik dil kullanma.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google' veya 'model' ifadelerini kullanma.",
    "JSON formati: {\"genelUyum\":80,\"askUyumu\":75,\"arkadaslikUyumu\":85,\"isUyumu\":78,\"gucluYonler\":[\"...\"],\"dikkatEdilecekler\":[\"...\"],\"ozet\":\"...\"}",
  ].join("\n");

  const result = await callGeminiJson<CompatibilityInterpretation>(prompt);
  if (!result) return null;

  return {
    genelUyum: safeNumber(result.genelUyum, 75),
    askUyumu: safeNumber(result.askUyumu, 74),
    arkadaslikUyumu: safeNumber(result.arkadaslikUyumu, 78),
    isUyumu: safeNumber(result.isUyumu, 72),
    gucluYonler: Array.isArray(result.gucluYonler) ? result.gucluYonler.map((x) => safeText(x)).filter(Boolean).slice(0, 6) : [],
    dikkatEdilecekler: Array.isArray(result.dikkatEdilecekler) ? result.dikkatEdilecekler.map((x) => safeText(x)).filter(Boolean).slice(0, 6) : [],
    ozet: safeText(result.ozet, "Uyumunuz dogru iletisim ve anlayisla guclenebilir."),
  };
}

export async function generateBurcFullContent(input: {
  slug: string;
  name: string;
  dateISO?: string;
  tonePreset?: TonePreset;
}): Promise<BurcFullContent | null> {
  const dateISO = input.dateISO ?? new Date().toISOString().slice(0, 10);
  const monthISO = dateISO.slice(0, 7);
  const tone = toneInstruction(input.tonePreset ?? "uzman");

  const prompt = [
    "Sen deneyimli, samimi ve icten bir astroloji editoru ve yasam kocusun.",
    `Burc: ${input.name} (${input.slug})`,
    `Bugunun tarihi: ${dateISO}`,
    `Bu ayin yil-ay: ${monthISO}`,
    "Sadece gecerli JSON dondur. Markdown kullanma.",
    "{\"gunluk\":\"...\",\"ask\":\"...\",\"kariyer\":\"...\",\"saglik\":\"...\",\"sans\":8,\"haftalik\":\"...\",\"aylik\":\"...\"}",
    tone,
    "gunluk: Bu burcun bugunun genel enerjisi, duygular ve temel tema (80-130 kelime).",
    "ask: Bugun ask ve iliskilerde dikkat edilmesi gerekenler, firsatlar (80-130 kelime).",
    "kariyer: Bugun is ve kariyer alaninda firsatlar ve dikkatler (80-130 kelime).",
    "saglik: Bugun fiziksel ve zihinsel saglik icin enerji ve tavsiyeler (80-130 kelime).",
    "sans: 1-10 arasi tam sayi.",
    "haftalik: Bu haftanin genel yorumu, onemli gunler, gezegen etkileri ve temalar (120-180 kelime).",
    "aylik: Bu ayin derinlikli yorumu; gezegen hareketleri, onemli temalar, firsatlar, uyarilar ve pratik yonlendirme (150-200 kelime).",
    "Yazi tarzi: Samimi, icten, deneyimli bir astrolog gibi konuş. Resmi veya robotik olma.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google', 'dil modeli' veya 'model' ifadelerini kullanma.",
  ].join("\n");

  const result = await callGeminiJson<BurcFullContent>(prompt);
  if (!result) return null;

  return {
    gunluk: safeText(result.gunluk, "Bugun enerjini dengelemek senin icin onemli."),
    ask: safeText(result.ask, "Iletisimde netlik iliskilerine iyi gelecek."),
    kariyer: safeText(result.kariyer, "Planli hareket etmek avantaj saglayacak."),
    saglik: safeText(result.saglik, "Rutinine dikkat ederek daha iyi hissedebilirsin."),
    sans: safeNumber(result.sans, 7),
    haftalik: safeText(result.haftalik, "Bu hafta planli adimlar atman sana avantaj saglayacak."),
    aylik: safeText(result.aylik, "Bu ay hedeflerine odaklanmak icin ideal bir donem."),
  };
}

export async function generateMonthlyHoroscopeBatch(input?: {
  monthISO?: string;
  signs?: string[];
  tonePreset?: TonePreset;
}): Promise<Record<string, MonthlyHoroscope> | null> {
  const signs = (input?.signs?.length ? input.signs : ZODIAC_SIGNS.map((s) => s.slug)).join(", ");
  const monthISO = input?.monthISO ?? new Date().toISOString().slice(0, 7);
  const tone = toneInstruction(input?.tonePreset ?? "uzman");

  const prompt = [
    "Sen deneyimli, samimi ve icten bir astroloji editoru ve yasam kocusun.",
    `Ay (YYYY-MM): ${monthISO}`,
    `Burclar: ${signs}`,
    "Sadece gecerli JSON dondur. Markdown kullanma.",
    "{\"koc\": {\"aylik\": \"...\", \"ask\": \"...\", \"kariyer\": \"...\", \"saglik\": \"...\"}}",
    tone,
    "Her alan (aylik, ask, kariyer, saglik) icin 100-180 kelime arasinda ayrintili, akici, samimi Turkce yorum yaz.",
    "aylik: Bu ayin genel enerjisi, gezegen hareketleri ve o burcun bu aydaki temel temaları hakkinda derinlikli yaz.",
    "ask: Bu ay ask ve iliskilerde ne hissedecekleri, onemli tarihler, firsatlar ve dikkat noktalari.",
    "kariyer: Is ve kariyer alaninda bu ayin firsatlari, dikkatler ve somut onerileri.",
    "saglik: Bu ay fiziksel ve zihinsel saglik icin enerji, dikkat noktalari ve pratik tavsiyeler.",
    "Yazi tarzi: Samimi, icten, deneyimli bir astrolog gibi konuş. Resmi veya robotik olma.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google', 'dil modeli' veya 'model' ifadelerini kullanma.",
  ].join("\n");

  const result = await callGeminiJson<Record<string, MonthlyHoroscope>>(prompt);
  if (!result || typeof result !== "object") return null;

  const normalized: Record<string, MonthlyHoroscope> = {};
  for (const [slug, value] of Object.entries(result)) {
    const v = value as Partial<MonthlyHoroscope>;
    normalized[slug] = {
      aylik: safeText(v.aylik, "Bu ay planli ve dengeli adimlar atman sana avantaj saglayacak."),
      ask: safeText(v.ask, "Iliskilerde acik iletisim ve empati on planda."),
      kariyer: safeText(v.kariyer, "Kariyer hedeflerine odaklanmak icin uygun bir ay."),
      saglik: safeText(v.saglik, "Sagligi on planda tutmak ve rutinleri korumak onemli."),
    };
  }

  return normalized;
}

export type RisingSignResult = {
  yorum: string;
  gucluYonler: string[];
  iliski: string;
  kariyer: string;
};

export async function generateRisingSignInterpretation(input: {
  risingSign: string;
  sunSign?: string;
  birthTime?: string;
  tonePreset?: TonePreset;
}): Promise<RisingSignResult | null> {
  const tone = toneInstruction(input.tonePreset ?? "uzman");
  const prompt = [
    "Sen deneyimli, samimi ve icten bir astroloji editoru ve yasam kocusun.",
    `Yukselen Burc: ${input.risingSign}`,
    input.sunSign ? `Gunes Burcu: ${input.sunSign}` : "",
    input.birthTime ? `Dogum Saati: ${input.birthTime}` : "",
    "Sadece gecerli JSON dondur. Markdown kullanma.",
    "{\"yorum\":\"...\",\"gucluYonler\":[\"...\"],\"iliski\":\"...\",\"kariyer\":\"...\"}",
    tone,
    "yorum: Bu yukselen burcun kisilige, dis gorunume ve ilk izlenime etkisi hakkinda 120-180 kelime derinlikli Turkce yorum.",
    "gucluYonler: Bu yukselen burcun en belirgin 5 guclu ozelligi (kisa ifadeler).",
    "iliski: Bu yukselen burcun ask ve iliskilerdeki davranisi hakkinda 60-80 kelime.",
    "kariyer: Bu yukselen burcun is hayatindaki yansimasi hakkinda 60-80 kelime.",
    "Yazi tarzi: Samimi, icten, deneyimli bir astrolog gibi konus. Robotik olma.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google', 'dil modeli' veya 'model' ifadelerini kullanma.",
  ].filter(Boolean).join("\n");

  const result = await callGeminiJson<RisingSignResult>(prompt);
  if (!result) return null;

  return {
    yorum: safeText(result.yorum, "Yukselen burcun dis dunya ile nasil etkilestigini gosterir."),
    gucluYonler: Array.isArray(result.gucluYonler) ? result.gucluYonler.map((s) => safeText(s)).filter(Boolean).slice(0, 5) : [],
    iliski: safeText(result.iliski, "Iliskilerde samimi ve icerik odakli yaklasim sergilersin."),
    kariyer: safeText(result.kariyer, "Is hayatinda dogal yeteneklerini on plana cikarirsin."),
  };
}

export type NatalChartReading = {
  genelYorum: string;
  kisilik: string;
  ask: string;
  kariyer: string;
  saglik: string;
  oneriler: string[];
};

export async function generateNatalChartReading(input: {
  birthDate: string;
  birthTime?: string;
  birthPlace?: string;
  tonePreset?: TonePreset;
}): Promise<NatalChartReading | null> {
  const tone = toneInstruction(input.tonePreset ?? "uzman");
  const prompt = [
    "Sen deneyimli, samimi ve icten bir astroloji editoru ve dogum haritasi uzmanisin.",
    `Dogum Tarihi: ${input.birthDate}`,
    input.birthTime ? `Dogum Saati: ${input.birthTime}` : "Dogum Saati: bilinmiyor (12:00 kullan)",
    input.birthPlace ? `Dogum Yeri: ${input.birthPlace}` : "Dogum Yeri: belirtilmedi",
    "Sadece gecerli JSON dondur. Markdown kullanma.",
    "{\"genelYorum\":\"...\",\"kisilik\":\"...\",\"ask\":\"...\",\"kariyer\":\"...\",\"saglik\":\"...\",\"oneriler\":[\"...\"]}",
    tone,
    "genelYorum: Bu dogum tarihine gore Gunes burcunu belirle ve genel kozmik profil hakkinda 120-180 kelime Turkce yorum.",
    "kisilik: Bu kisinin temel kisilik ozellikleri, guclu ve gelisme gereken yonleri hakkinda 80-120 kelime.",
    "ask: Ask ve iliskiler alanindaki egilimleri, beklentileri ve tavsiyeleri hakkinda 80-100 kelime.",
    "kariyer: Kariyer ve meslek alani icin dogal yetenekler, uygun is alanlari ve onerileri hakkinda 80-100 kelime.",
    "saglik: Fiziksel ve zihinsel saglik egilimler, dikkat edilecekler ve pratik tavsiyeler hakkinda 60-80 kelime.",
    "oneriler: Bu kisiye ozel 5 somut yasam onerisi (kisa ve ozgul ifadeler).",
    "Yazi tarzi: Samimi, icten, deneyimli bir astrolog gibi konus. Robotik olma.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google', 'dil modeli' veya 'model' ifadelerini kullanma.",
  ].filter(Boolean).join("\n");

  const result = await callGeminiJson<NatalChartReading>(prompt);
  if (!result) return null;

  return {
    genelYorum: safeText(result.genelYorum, "Dogum haritasi, kozmik potansiyelini ortaya koyar."),
    kisilik: safeText(result.kisilik, "Guclu bir ic dunya ve zengin bir duygusal yapiya sahipsin."),
    ask: safeText(result.ask, "Iliskilerde derinlik ve baglilik arayisinda olursun."),
    kariyer: safeText(result.kariyer, "Yaratici ve analitik yeteneklerin kariyer basarini destekler."),
    saglik: safeText(result.saglik, "Denge ve rutin, sagligini korumanda temel rol oynar."),
    oneriler: Array.isArray(result.oneriler) ? result.oneriler.map((s) => safeText(s)).filter(Boolean).slice(0, 5) : [],
  };
}

export async function generateStaticDreamDetail(input: {
  dreamTitle: string;
  dreamKeywords?: string;
  tonePreset?: TonePreset;
}): Promise<StaticDreamDetail | null> {
  const tone = toneInstruction(input.tonePreset ?? "soft");

  const prompt = [
    "Sen deneyimli bir ruya yorumcusu ve psikoloji uzmanisun.",
    `Ruya konusu: ${input.dreamTitle}`,
    input.dreamKeywords ? `Anahtar kelimeler / semboller: ${input.dreamKeywords}` : "",
    "Sadece gecerli JSON dondur.",
    tone,
    "detay alani 150-250 kelime arasinda ayrintili, akici ve derin Turkce yorum olmali. Psikolojik katman, sembolik anlam, duygusal mesaj ve gunluk hayata yansimasi birlikte ele alinmali.",
    "olumlu alani: en az 5 ozgul ve anlamli madde (kisa liste degil, gercekci ifadeler).",
    "olumsuz alani: en az 4 ozgul ve anlamli madde (kisa liste degil, gercekci ifadeler).",
    "tavsiye alani 60-100 kelime arasinda somut ve samimi Turkce yonlendirme olmali.",
    "Asla 'yapay zeka', 'AI', 'Gemini', 'Google', 'dil modeli' veya 'model' ifadelerini kullanma.",
    "{\"detay\":\"...\",\"olumlu\":[\"...\"],\"olumsuz\":[\"...\"],\"tavsiye\":\"...\"}",
  ].filter(Boolean).join("\n");

  const result = await callGeminiJson<StaticDreamDetail>(prompt);
  if (!result) return null;

  return {
    detay: safeText(result.detay, "Bu ruya, ic dunyanizdaki derin mesajlari yansitmaktadir."),
    olumlu: Array.isArray(result.olumlu) ? result.olumlu.map((s) => safeText(s)).filter(Boolean).slice(0, 7) : [],
    olumsuz: Array.isArray(result.olumsuz) ? result.olumsuz.map((s) => safeText(s)).filter(Boolean).slice(0, 7) : [],
    tavsiye: safeText(result.tavsiye, "Ic duygularinizi dinleyin ve hayatinizda denge saglayin."),
  };
}
