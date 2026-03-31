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

export type TonePreset = "magazin" | "wissenschaftlich" | "soft";

type LegacyTonePreset = "kanka" | "uzman";

export const TONE_PRESETS: TonePreset[] = ["magazin", "wissenschaftlich", "soft"];

const LEGACY_TONE_MAP: Record<LegacyTonePreset, TonePreset> = {
  kanka: "magazin",
  uzman: "wissenschaftlich",
};

export function resolveTonePreset(rawValue: unknown, fallback: TonePreset = "wissenschaftlich"): TonePreset {
  if (typeof rawValue !== "string") return fallback;

  if (TONE_PRESETS.includes(rawValue as TonePreset)) {
    return rawValue as TonePreset;
  }

  if (rawValue in LEGACY_TONE_MAP) {
    return LEGACY_TONE_MAP[rawValue as LegacyTonePreset];
  }

  return fallback;
}

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

function toneInstruction(tonePreset: TonePreset = "wissenschaftlich") {
  if (tonePreset === "magazin") {
    return "Ton: magazinartig, zugänglich, lebendig und nahbar; schreibe warm, klar und mit leichter Dynamik.";
  }

  if (tonePreset === "soft") {
    return "Ton: sanft, ruhig, unterstützend und einfühlsam; vermeide wertende Sprache.";
  }

  return "Ton: wissenschaftlich-klar, redaktionell sauber und vertrauenswürdig; bleibe dennoch natürlich und gut lesbar.";
}

function germanEditorialDirectives(persona: string, topicHint: string) {
  return [
    `Persona: ${persona}`,
    `Thema-Kontext: ${topicHint}`,
    "EEAT: Starte mit 1-2 Sätzen wie aus einer echten Beobachtung oder Beratungsszene, damit Nähe und Erfahrung spürbar werden.",
    "Struktur: Jeder längere Abschnitt soll klar aufgebaut sein: neugieriger Einstieg, fundierte Einordnung, konkrete Handlungsempfehlung.",
    "Sprachrhythmus: Variiere Satzlängen bewusst; kombiniere kurze, prägnante Sätze mit längeren, erklärenden Sätzen.",
    "Vermeide KI-typische Floskeln wie 'Es ist wichtig zu beachten' oder ähnliche starre Formulierungen.",
    "Lokalisierung: Verwende natürliches Deutsch für Deutschland; nutze metrische Einheiten (km, kg) falls Zahlen vorkommen.",
    "Wenn inhaltlich passend, beziehe dich kurz auf Deutschland, ESA oder europäische Beobachtungen.",
  ];
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
    .replace(/\b(als\s+)?k(ü|ue)nstliche\s+intelligenz\b/gi, "")
    .replace(/\b(as an ai|as a language model|als ki|als sprachmodell)\b/gi, "")
    .replace(/\b(ai|gemini|google\s*ai|ki|sprachmodell)\b/gi, "")
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
  const tone = toneInstruction(input?.tonePreset ?? "wissenschaftlich");

  const prompt = [
    ...germanEditorialDirectives(
      "Du bist ein senior Astrologie-Redakteur mit 10+ Jahren Erfahrung fur den deutschen Markt.",
      "Tageshoroskope fur Leserinnen und Leser in Deutschland"
    ),
    `Datum: ${dateISO}`,
    `Sternzeichen: ${signs}`,
    "Gib nur gültiges JSON zurück. Verwende kein Markdown.",
    "JSON-Format: {\"koc\": {\"gunluk\": \"...\", \"ask\": \"...\", \"kariyer\": \"...\", \"saglik\": \"...\", \"sans\": 8}}",
    tone,
    "WICHTIG: Schreibe für jedes Feld (gunluk, ask, kariyer, saglik) einen detaillierten, fließenden, vertrauten deutschen Kommentar von 80-150 Wörtern.",
    "gunluk-Feld: Erkläre die allgemeine Energie des Tages, die charakteristischen Eigenschaften dieses Sternzeichens und die heutigen Planeteneinflüsse tiefgehend.",
    "ask-Feld: Schreibe ausführlich über Gefühle in Liebe und Beziehungen, worauf geachtet werden sollte und Chancenpunkte.",
    "kariyer-Feld: Schreibe tiefgehend über die heutigen Chancen im Berufsleben, worauf geachtet werden sollte und Empfehlungen.",
    "saglik-Feld: Schreibe ausführlich über die heutige Energie für körperliche und geistige Gesundheit und praktische Ratschläge.",
    "sans-Wert soll eine ganze Zahl zwischen 1-10 sein.",
    "Schreibstil: Sprich wie ein vertrauter, erfahrener Astrologe, der neben dir sitzt und dich kennt. Vermeide formelle, roboterhafte oder listenhafte Sprache.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google', 'Sprachmodell' oder 'Modell'.",
  ].join("\n");

  const result = await callGeminiJson<Record<string, DailyHoroscope>>(prompt);
  if (!result || typeof result !== "object") return null;

  const normalized: Record<string, DailyHoroscope> = {};
  for (const [slug, value] of Object.entries(result)) {
    const v = value as Partial<DailyHoroscope>;
    normalized[slug] = {
      gunluk: safeText(v.gunluk, "Heute ist es wichtig für dich, deine Energie auszugleichen."),
      ask: safeText(v.ask, "Klarheit in der Kommunikation wird deinen Beziehungen guttun."),
      kariyer: safeText(v.kariyer, "Planvolles Handeln wird dir Vorteile bringen."),
      saglik: safeText(v.saglik, "Indem du auf deine Routine achtest, kannst du dich besser fühlen."),
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
    ...germanEditorialDirectives(
      "Du bist ein erfahrener Traumdeuter und psychologischer Redakteur fur deutschsprachige Leser.",
      "Traumdeutung mit personlicher, nahbarer Ansprache"
    ),
    `Sternzeichen (optional): ${input.zodiacSign ?? "nicht angegeben"}`,
    `Traumbeschreibung: ${input.dreamText}`,
    "Gib nur gültiges JSON zurück.",
    tone,
    "Schreibe Interpretationen vertraut, aufrichtig und in Gesprächssprache.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google' oder 'Modell'.",
    "Das genelAnlam-Feld sollte eine detaillierte, fließende und tiefgehende deutsche Interpretation von 150-300 Wörtern sein; emotionale Ebene, symbolische Bedeutung und psychologische Botschaft sollten zusammen behandelt werden.",
    "JSON-Format: {\"genelAnlam\":\"...\",\"semboller\":[\"...\"],\"duygusalMesaj\":\"...\",\"hayataYansima\":\"...\",\"tavsiyeler\":[\"...\"]}",
  ].join("\n");

  const result = await callGeminiJson<DreamInterpretation>(prompt);
  if (!result) return null;

  return {
    genelAnlam: safeText(result.genelAnlam, "Dein Traum deutet auf ein Bedürfnis nach Veränderung in deiner inneren Welt hin."),
    semboller: Array.isArray(result.semboller) ? result.semboller.map((s) => safeText(s)).filter(Boolean).slice(0, 6) : [],
    duygusalMesaj: safeText(result.duygusalMesaj, "Es kann hilfreich sein, deine Gefühle offener auszudrücken."),
    hayataYansima: safeText(result.hayataYansima, "Klare Schritte im Alltag zu unternehmen, erleichtert diese Phase."),
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
  const tone = toneInstruction(input?.tonePreset ?? "wissenschaftlich");

  const prompt = [
    ...germanEditorialDirectives(
      "Du bist ein senior Astrologie-Redakteur mit 10+ Jahren Erfahrung fur den deutschen Markt.",
      "Wochenhoroskope fur Leserinnen und Leser in Deutschland"
    ),
    `Wochenbeginn (ISO): ${weekStartISO}`,
    `Sternzeichen: ${signs}`,
    "Gib nur gültiges JSON zurück. Verwende kein Markdown.",
    "{\"koc\": {\"haftalik\": \"...\", \"ask\": \"...\", \"kariyer\": \"...\", \"saglik\": \"...\"}}",
    tone,
    "Schreibe für jedes Feld einen detaillierten, fließenden und vertrauten deutschen Kommentar von 80-130 Wörtern.",
    "haftalik: Die allgemeine Energie dieser Woche, wichtige Tage, Planeteneinflüsse und Hauptthema.",
    "ask: Was diese Woche in Liebe und Beziehungen passieren wird, Chancen und worauf geachtet werden sollte.",
    "kariyer: Was diese Woche im Berufsleben zu erwarten ist, Chancen, Aufmerksamkeitspunkte und praktische Empfehlungen.",
    "saglik: Energie für körperliche und geistige Gesundheit diese Woche, Warnungen und praktische Ratschläge.",
    "Schreibstil: Sprich vertraut, aufrichtig, wie ein erfahrener Astrologe. Sei nicht formell oder roboterhaft.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google', 'Sprachmodell' oder 'Modell'.",
  ].join("\n");

  const result = await callGeminiJson<Record<string, WeeklyHoroscope>>(prompt);
  if (!result || typeof result !== "object") return null;

  const normalized: Record<string, WeeklyHoroscope> = {};
  for (const [slug, value] of Object.entries(result)) {
    const v = value as Partial<WeeklyHoroscope>;
    normalized[slug] = {
      haftalik: safeText(v.haftalik, "Diese Woche werden dir geplante und ausgewogene Schritte Vorteile bringen."),
      ask: safeText(v.ask, "Offenheit und Vertrautheit werden in Beziehungen im Vordergrund stehen."),
      kariyer: safeText(v.kariyer, "Geduld und Entschlossenheit werden dich im Berufsleben zum Erfolg führen."),
      saglik: safeText(v.saglik, "Indem du auf Ruhe und Routine achtest, kannst du diese Woche gesund verbringen."),
    };
  }

  return normalized;
}

export async function generateCompatibility(input: {
  sign1: string;
  sign2: string;
  tonePreset?: TonePreset;
}): Promise<CompatibilityInterpretation | null> {
  const tone = toneInstruction(input.tonePreset ?? "wissenschaftlich");
  const prompt = [
    ...germanEditorialDirectives(
      "Du bist ein Experte fur Beziehungsastrologie und schreibst in Magazin-Stil fur Deutschland.",
      "Kompatibilitatsanalyse zwischen zwei Sternzeichen"
    ),
    `Erstes Sternzeichen: ${input.sign1}`,
    `Zweites Sternzeichen: ${input.sign2}`,
    "Gib nur gültiges JSON zurück.",
    tone,
    "Schreibe Interpretationen vertraut, natürlich und menschlich; verwende keine roboterhafte Sprache.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google' oder 'Modell'.",
    "JSON-Format: {\"genelUyum\":80,\"askUyumu\":75,\"arkadaslikUyumu\":85,\"isUyumu\":78,\"gucluYonler\":[\"...\"],\"dikkatEdilecekler\":[\"...\"],\"ozet\":\"...\"}",
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
    ozet: safeText(result.ozet, "Eure Kompatibilität kann durch richtige Kommunikation und Verständnis gestärkt werden."),
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
  const tone = toneInstruction(input.tonePreset ?? "wissenschaftlich");

  const prompt = [
    ...germanEditorialDirectives(
      "Du bist ein senior Astrologie-Redakteur mit 10+ Jahren Erfahrung fur den deutschen Markt.",
      "Vollstandiger Sternzeichen-Content: taglich, wochentlich, monatlich"
    ),
    `Sternzeichen: ${input.name} (${input.slug})`,
    `Heutiges Datum: ${dateISO}`,
    `Jahr-Monat dieses Monats: ${monthISO}`,
    "Gib nur gültiges JSON zurück. Verwende kein Markdown.",
    "{\"gunluk\":\"...\",\"ask\":\"...\",\"kariyer\":\"...\",\"saglik\":\"...\",\"sans\":8,\"haftalik\":\"...\",\"aylik\":\"...\"}",
    tone,
    "gunluk: Die allgemeine Energie, Emotionen und das Hauptthema dieses Sternzeichens heute (80-130 Wörter auf Deutsch).",
    "ask: Worauf heute in Liebe und Beziehungen geachtet werden sollte, Chancen (80-130 Wörter auf Deutsch).",
    "kariyer: Chancen und Aufmerksamkeitspunkte heute im Berufs- und Karrierebereich (80-130 Wörter auf Deutsch).",
    "saglik: Energie und Ratschläge für körperliche und geistige Gesundheit heute (80-130 Wörter auf Deutsch).",
    "sans: Ganze Zahl zwischen 1-10.",
    "haftalik: Allgemeine Interpretation dieser Woche, wichtige Tage, Planeteneinflüsse und Themen (120-180 Wörter auf Deutsch).",
    "aylik: Tiefgehende Interpretation dieses Monats; Planetenbewegungen, wichtige Themen, Chancen, Warnungen und praktische Anleitung (150-200 Wörter auf Deutsch).",
    "Schreibstil: Sprich vertraut, aufrichtig, wie ein erfahrener Astrologe. Sei nicht formell oder roboterhaft.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google', 'Sprachmodell' oder 'Modell'.",
  ].join("\n");

  const result = await callGeminiJson<BurcFullContent>(prompt);
  if (!result) return null;

  return {
    gunluk: safeText(result.gunluk, "Heute ist es wichtig für dich, deine Energie auszugleichen."),
    ask: safeText(result.ask, "Klarheit in der Kommunikation wird deinen Beziehungen guttun."),
    kariyer: safeText(result.kariyer, "Planvolles Handeln wird dir Vorteile bringen."),
    saglik: safeText(result.saglik, "Indem du auf deine Routine achtest, kannst du dich besser fühlen."),
    sans: safeNumber(result.sans, 7),
    haftalik: safeText(result.haftalik, "Diese Woche werden dir geplante Schritte Vorteile bringen."),
    aylik: safeText(result.aylik, "Dieser Monat ist eine ideale Zeit, um dich auf deine Ziele zu konzentrieren."),
  };
}

export async function generateMonthlyHoroscopeBatch(input?: {
  monthISO?: string;
  signs?: string[];
  tonePreset?: TonePreset;
}): Promise<Record<string, MonthlyHoroscope> | null> {
  const signs = (input?.signs?.length ? input.signs : ZODIAC_SIGNS.map((s) => s.slug)).join(", ");
  const monthISO = input?.monthISO ?? new Date().toISOString().slice(0, 7);
  const tone = toneInstruction(input?.tonePreset ?? "wissenschaftlich");

  const prompt = [
    ...germanEditorialDirectives(
      "Du bist ein senior Astrologie-Redakteur mit 10+ Jahren Erfahrung fur den deutschen Markt.",
      "Monatshoroskope fur Leserinnen und Leser in Deutschland"
    ),
    `Monat (YYYY-MM): ${monthISO}`,
    `Sternzeichen: ${signs}`,
    "Gib nur gültiges JSON zurück. Verwende kein Markdown.",
    "{\"koc\": {\"aylik\": \"...\", \"ask\": \"...\", \"kariyer\": \"...\", \"saglik\": \"...\"}}",
    tone,
    "Schreibe für jedes Feld (aylik, ask, kariyer, saglik) einen detaillierten, fließenden, vertrauten deutschen Kommentar von 100-180 Wörtern.",
    "aylik: Schreibe tiefgehend über die allgemeine Energie dieses Monats, Planetenbewegungen und die Hauptthemen dieses Sternzeichens in diesem Monat.",
    "ask: Was sie diesen Monat in Liebe und Beziehungen fühlen werden, wichtige Daten, Chancen und Aufmerksamkeitspunkte.",
    "kariyer: Die Chancen dieses Monats im Berufs- und Karrierebereich, Aufmerksamkeitspunkte und konkrete Empfehlungen.",
    "saglik: Energie für körperliche und geistige Gesundheit diesen Monat, Aufmerksamkeitspunkte und praktische Ratschläge.",
    "Schreibstil: Sprich vertraut, aufrichtig, wie ein erfahrener Astrologe. Sei nicht formell oder roboterhaft.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google', 'Sprachmodell' oder 'Modell'.",
  ].join("\n");

  const result = await callGeminiJson<Record<string, MonthlyHoroscope>>(prompt);
  if (!result || typeof result !== "object") return null;

  const normalized: Record<string, MonthlyHoroscope> = {};
  for (const [slug, value] of Object.entries(result)) {
    const v = value as Partial<MonthlyHoroscope>;
    normalized[slug] = {
      aylik: safeText(v.aylik, "Dieser Monat wird dir geplante und ausgewogene Schritte Vorteile bringen."),
      ask: safeText(v.ask, "Offene Kommunikation und Empathie stehen in Beziehungen im Vordergrund."),
      kariyer: safeText(v.kariyer, "Ein geeigneter Monat, um sich auf Karriereziele zu konzentrieren."),
      saglik: safeText(v.saglik, "Es ist wichtig, die Gesundheit in den Vordergrund zu stellen und Routinen beizubehalten."),
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
  const tone = toneInstruction(input.tonePreset ?? "wissenschaftlich");
  const prompt = [
    ...germanEditorialDirectives(
      "Du bist ein senior Astrologie-Redakteur und Aszendenten-Experte fur den deutschen Markt.",
      "Aszendenten-Interpretation fur alltagsnahe Beratung"
    ),
    `Aszendent: ${input.risingSign}`,
    input.sunSign ? `Sonnenzeichen: ${input.sunSign}` : "",
    input.birthTime ? `Geburtszeit: ${input.birthTime}` : "",
    "Gib nur gültiges JSON zurück. Verwende kein Markdown.",
    "{\"yorum\":\"...\",\"gucluYonler\":[\"...\"],\"iliski\":\"...\",\"kariyer\":\"...\"}",
    tone,
    "yorum: Tiefgehender deutscher Kommentar von 120-180 Wörtern über den Einfluss dieses Aszendenten auf Persönlichkeit, äußeres Erscheinungsbild und ersten Eindruck.",
    "gucluYonler: Die 5 markantesten Stärken dieses Aszendenten (kurze Aussagen).",
    "iliski: 60-80 Wörter über das Verhalten dieses Aszendenten in Liebe und Beziehungen.",
    "kariyer: 60-80 Wörter über die Reflexion dieses Aszendenten im Berufsleben.",
    "Schreibstil: Sprich vertraut, aufrichtig, wie ein erfahrener Astrologe. Sei nicht roboterhaft.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google', 'Sprachmodell' oder 'Modell'.",
  ].filter(Boolean).join("\n");

  const result = await callGeminiJson<RisingSignResult>(prompt);
  if (!result) return null;

  return {
    yorum: safeText(result.yorum, "Der Aszendent zeigt, wie du mit der Außenwelt interagierst."),
    gucluYonler: Array.isArray(result.gucluYonler) ? result.gucluYonler.map((s) => safeText(s)).filter(Boolean).slice(0, 5) : [],
    iliski: safeText(result.iliski, "In Beziehungen zeigst du einen vertrauten und inhaltsfokussierten Ansatz."),
    kariyer: safeText(result.kariyer, "Im Berufsleben bringst du deine natürlichen Talente in den Vordergrund."),
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
  const tone = toneInstruction(input.tonePreset ?? "wissenschaftlich");
  const prompt = [
    ...germanEditorialDirectives(
      "Du bist ein senior Geburtshoroskop-Experte und Wissenschaftsredakteur fur deutschsprachige Leser.",
      "Interpretation von Geburtsdaten in klarer, gut strukturierter Form"
    ),
    `Geburtsdatum: ${input.birthDate}`,
    input.birthTime ? `Geburtszeit: ${input.birthTime}` : "Geburtszeit: unbekannt (verwende 12:00)",
    input.birthPlace ? `Geburtsort: ${input.birthPlace}` : "Geburtsort: nicht angegeben",
    "Gib nur gültiges JSON zurück. Verwende kein Markdown.",
    "{\"genelYorum\":\"...\",\"kisilik\":\"...\",\"ask\":\"...\",\"kariyer\":\"...\",\"saglik\":\"...\",\"oneriler\":[\"...\"]}",
    tone,
    "genelYorum: Bestimme das Sonnenzeichen basierend auf diesem Geburtsdatum und schreibe einen deutschen Kommentar von 120-180 Wörtern über das allgemeine kosmische Profil.",
    "kisilik: 80-120 Wörter über die grundlegenden Persönlichkeitsmerkmale dieser Person, Stärken und Entwicklungsbereiche.",
    "ask: 80-100 Wörter über Tendenzen, Erwartungen und Ratschläge im Bereich Liebe und Beziehungen.",
    "kariyer: 80-100 Wörter über natürliche Talente für Karriere und Beruf, geeignete Arbeitsbereiche und Empfehlungen.",
    "saglik: 60-80 Wörter über körperliche und geistige Gesundheitstendenzen, worauf geachtet werden sollte und praktische Ratschläge.",
    "oneriler: 5 konkrete Lebensempfehlungen speziell für diese Person (kurze und spezifische Aussagen).",
    "Schreibstil: Sprich vertraut, aufrichtig, wie ein erfahrener Astrologe. Sei nicht roboterhaft.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google', 'Sprachmodell' oder 'Modell'.",
  ].filter(Boolean).join("\n");

  const result = await callGeminiJson<NatalChartReading>(prompt);
  if (!result) return null;

  return {
    genelYorum: safeText(result.genelYorum, "Das Geburtshoroskop offenbart dein kosmisches Potenzial."),
    kisilik: safeText(result.kisilik, "Du hast eine starke innere Welt und eine reiche emotionale Struktur."),
    ask: safeText(result.ask, "In Beziehungen suchst du nach Tiefe und Verbindlichkeit."),
    kariyer: safeText(result.kariyer, "Deine kreativen und analytischen Fähigkeiten unterstützen deinen Karriereerfolg."),
    saglik: safeText(result.saglik, "Balance und Routine spielen eine grundlegende Rolle beim Erhalt deiner Gesundheit."),
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
    ...germanEditorialDirectives(
      "Du bist ein erfahrener Traumdeuter und Psychologie-Experte fur den deutschen Markt.",
      "Ausfuhrliche Traumdetail-Seite im Magazin-Stil"
    ),
    `Traumthema: ${input.dreamTitle}`,
    input.dreamKeywords ? `Schlüsselwörter / Symbole: ${input.dreamKeywords}` : "",
    "Gib nur gültiges JSON zurück.",
    tone,
    "Das detay-Feld sollte eine detaillierte, fließende und tiefgehende deutsche Interpretation von 150-250 Wörtern sein. Psychologische Ebene, symbolische Bedeutung, emotionale Botschaft und Reflexion im Alltag sollten zusammen behandelt werden.",
    "olumlu-Feld: mindestens 5 spezifische und bedeutungsvolle Punkte (keine kurze Liste, realistische Aussagen).",
    "olumsuz-Feld: mindestens 4 spezifische und bedeutungsvolle Punkte (keine kurze Liste, realistische Aussagen).",
    "tavsiye-Feld sollte eine konkrete und vertraute deutsche Anleitung von 60-100 Wörtern sein.",
    "Verwende NIEMALS 'künstliche Intelligenz', 'KI', 'AI', 'Gemini', 'Google', 'Sprachmodell' oder 'Modell'.",
    "{\"detay\":\"...\",\"olumlu\":[\"...\"],\"olumsuz\":[\"...\"],\"tavsiye\":\"...\"}",
  ].filter(Boolean).join("\n");

  const result = await callGeminiJson<StaticDreamDetail>(prompt);
  if (!result) return null;

  return {
    detay: safeText(result.detay, "Dieser Traum spiegelt die tiefen Botschaften in deiner inneren Welt wider."),
    olumlu: Array.isArray(result.olumlu) ? result.olumlu.map((s) => safeText(s)).filter(Boolean).slice(0, 7) : [],
    olumsuz: Array.isArray(result.olumsuz) ? result.olumsuz.map((s) => safeText(s)).filter(Boolean).slice(0, 7) : [],
    tavsiye: safeText(result.tavsiye, "Höre auf deine inneren Gefühle und schaffe Balance in deinem Leben."),
  };
}
