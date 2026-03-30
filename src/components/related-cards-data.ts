export type CardItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  gradient: string;
};

export const BURC_ONERILERI: CardItem[] = [
  { title: "Tageshoroskop", description: "Was erwartet dich heute?", href: "/burclar/gunluk", icon: "☀️", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
  { title: "Wochenhoroskop", description: "Wie ist deine Energie diese Woche?", href: "/burclar/haftalik", icon: "📅", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
  { title: "Monatshoroskop", description: "Was bringt dir dieser Monat?", href: "/burclar/aylik", icon: "🌙", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Kompatibilität", description: "Mit welchen Sternzeichen passt du zusammen?", href: "/burclar/uyum", icon: "💕", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
];

export const ILISKI_ONERILERI: CardItem[] = [
  { title: "Paar-Kompatibilitätsanalyse", description: "Detaillierte, KI-gestützte Analyse", href: "/iliskiler/cift-uyumu", icon: "💑", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Flirt-Tipps", description: "Flirt-Guide nach Sternzeichen", href: "/iliskiler/flort", icon: "😊", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
  { title: "Ehe-Tipps", description: "Was sagen die Sterne zur Ehe?", href: "/iliskiler/evlilik", icon: "💍", gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)" },
  { title: "Seelenverwandtschaft", description: "Wie du deine Seelenverbindung erkennst", href: "/iliskiler/soulmate", icon: "✨", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
];

export const RUYA_ONERILERI: CardItem[] = [
  { title: "Traum analysieren", description: "Analysiere deinen Traum mit KI", href: "/ruya/yorumla", icon: "🔮", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Liebesträume", description: "Die Bedeutung romantischer Träume", href: "/ruya/ask", icon: "💕", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Albträume", description: "Das Geheimnis erschreckender Träume", href: "/ruya/kabus", icon: "👻", gradient: "linear-gradient(135deg, #64748b 0%, #475569 100%)" },
  { title: "Traumlexikon", description: "Traumsymbole von A bis Z", href: "/ruya/sozluk", icon: "📖", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
];

export const GOK_ONERILERI: CardItem[] = [
  { title: "Retrograde-Tracker", description: "Behalte Retrograden im Blick", href: "/gok/retrograde", icon: "🔄", gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)" },
  { title: "Mondkalender", description: "Mondphasen und ihre Wirkung", href: "/gok/ay-takvimi", icon: "🌙", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
  { title: "Sonnenfinsternis", description: "Bevorstehende Sonnenfinsternisse", href: "/gok/gunes-tutulmasi", icon: "🌑", gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)" },
  { title: "Planetenpositionen", description: "Aktuelle Planetenstände", href: "/gok/gezegenler", icon: "🪐", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
];

export const TEST_ONERILERI: CardItem[] = [
  { title: "Liebes-Kompatibilitätstest", description: "Wie gut passt ihr zusammen?", href: "/testler/ask-uyumu", icon: "💕", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Persönlichkeitstest", description: "Astrologische Persönlichkeitsanalyse", href: "/testler/kisilik", icon: "🧠", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Karriere-Test", description: "Welcher Beruf passt zu dir?", href: "/testler/kariyer", icon: "💼", gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
  { title: "Numerologie-Test", description: "Das Geheimnis der Zahlen", href: "/testler/numeroloji", icon: "🔢", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
];

export const GENEL_ONERILERI: CardItem[] = [
  { title: "Tageshoroskop", description: "Was erwartet dich heute?", href: "/burclar/gunluk", icon: "☀️", gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)" },
  { title: "Traum analysieren", description: "Analysiere deinen Traum mit KI", href: "/ruya/yorumla", icon: "🔮", gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)" },
  { title: "Paar-Kompatibilität", description: "Analysiere eure Beziehung", href: "/iliskiler/cift-uyumu", icon: "💑", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)" },
  { title: "Geburtshoroskop", description: "Entdecke deine persönliche Karte", href: "/burclar/dogum-haritasi", icon: "🗺️", gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)" },
];
