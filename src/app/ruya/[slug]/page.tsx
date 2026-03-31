import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateStaticDreamDetail } from "@/lib/ai-content";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sternenfeed.de";

const RUYA_VERILERI: Record<string, {
  baslik: string;
  icon: string;
  anlam: string;
  detay: string;
  olumlu: string[];
  olumsuz: string[];
  tavsiye: string;
  kategori?: string;
}> = {
  // UÇMA RÜYALARI
  "ozgurce-ucmak": {
    baslik: "Frei Fliegen",
    icon: "🦅",
    kategori: "Flugträume",
    anlam: "Symbol für Erfolg, Freiheit, Überwindung von Hindernissen und Aufstieg.",
    detay: "Im Traum frei und leicht zu fliegen zeigt, dass Sie in Ihrem Leben ein großes Gefühl der Freiheit erleben oder bald erleben werden. Dieser Traum ist ein Zeichen dafür, dass Sie auf dem Weg zu Ihren Zielen Hindernisse überwinden, an sich selbst glauben und Ihr Potenzial verwirklichen. Am Himmel zu schweben symbolisiert auch, dass Sie spirituell aufsteigen.",
    olumlu: ["Karriereerfolg", "Selbstvertrauen steigt", "Ziele erreichen", "Spiritueller Aufstieg", "Kreatives Potenzial"],
    olumsuz: ["Risiko von Übermut", "Realitätsverlust"],
    tavsiye: "Nutzen Sie diese positive Energie. Verfolgen Sie Ihre Träume, jetzt ist der richtige Zeitpunkt. Aber vergessen Sie nicht, auf dem Boden zu bleiben."
  },
  "zorlanarak-ucmak": {
    baslik: "Mit Mühe Fliegen",
    icon: "💨",
    kategori: "Flugträume",
    anlam: "Hindernisse, Schwierigkeiten, Kampf und Ziele, die Anstrengung erfordern.",
    detay: "Im Traum zu versuchen zu fliegen und dabei Schwierigkeiten zu haben, zeigt, dass Sie in Ihrem Leben kämpfen, um Ihre Ziele zu erreichen. Mit den Flügeln zu schlagen, nicht aufsteigen zu können oder ständig zu fallen symbolisiert die Hindernisse, denen Sie begegnen. Dieser Traum erinnert daran, dass Erfolg nicht leicht kommt, aber nicht unmöglich ist.",
    olumlu: ["Ausdauer und Entschlossenheit", "Kampfgeist", "Entwicklungschance", "Stärkung"],
    olumsuz: ["Burnout-Risiko", "Übermäßiger Stress", "Kampf mit Hindernissen", "Gefühl der Unzulänglichkeit"],
    tavsiye: "Überfordern Sie sich nicht. Teilen Sie Ihre Ziele in kleine Schritte auf. Scheuen Sie sich nicht, um Hilfe zu bitten und vernachlässigen Sie die Erholung nicht."
  },
  "yuksekten-ucmak": {
    baslik: "Hoch Fliegen",
    icon: "☁️",
    kategori: "Flugträume",
    anlam: "Große Ziele, Ehrgeiz, weite Perspektive und Vision.",
    detay: "Sehr hoch zu fliegen zeigt, dass Sie große Träume und Ambitionen haben. Über den Wolken zu fliegen symbolisiert, dass Sie sich über gewöhnliche Gedanken und tägliche Sorgen erheben. Dieser Traum zeigt, dass Sie eine breite Perspektive haben und das große Ganze sehen können.",
    olumlu: ["Visionär sein", "Groß denken", "Führungspotenzial", "Spirituelles Bewusstsein"],
    olumsuz: ["Realitätsverlust", "Details verpassen", "Arroganzrisiko"],
    tavsiye: "Große Träume sind schön, aber vergessen Sie nicht, konkrete Schritte zu unternehmen. Setzen Sie Ihre Vision in die Tat um."
  },
  "alcaktan-ucmak": {
    baslik: "Tief Fliegen",
    icon: "🌿",
    kategori: "Flugträume",
    anlam: "Vorsichtiges Vorgehen, realistische Ziele und sichere Schritte.",
    detay: "Nah am Boden zu fliegen zeigt, dass Sie einen vorsichtigen und realistischen Ansatz haben. Sie vermeiden Risiken und unternehmen sichere Schritte. Dieser Traum zeigt, dass Sie praktisch denken, aber vielleicht unter Ihrem Potenzial bleiben.",
    olumlu: ["Realismus", "Sicherer Fortschritt", "Praktisches Denken", "Bodenständiger Ansatz"],
    olumsuz: ["Potenzial begrenzen", "Angstbasiertes Zurückhalten", "Chancen verpassen"],
    tavsiye: "Sicherheit ist gut, aber manchmal muss man Risiken eingehen. Vertrauen Sie sich mehr und fordern Sie Ihre Grenzen heraus."
  },
  "ucarken-dusmek": {
    baslik: "Beim Fliegen Fallen",
    icon: "⬇️",
    kategori: "Flugträume",
    anlam: "Kontrollverlust, Versagensangst und Unsicherheit.",
    detay: "Beim Fliegen plötzlich zu fallen zeigt, dass Sie Angst vor Kontrollverlust in Ihrem Leben haben. Angst vor dem Absturz nach Erfolg, Hochstapler-Syndrom oder plötzliche Veränderungen können diesen Traum auslösen. Fallgeschwindigkeit und Art des Fallens beeinflussen die Deutung.",
    olumlu: ["Bewusstsein", "Warnsignal", "Veränderungschance"],
    olumsuz: ["Versagensangst", "Unsicherheit", "Angst", "Kontrollverlustgefühl"],
    tavsiye: "Stellen Sie sich Ihren Ängsten. Scheitern ist Teil des Lebens und eine Lernchance. Seien Sie mitfühlend mit sich selbst."
  },
  "kanatlarla-ucmak": {
    baslik: "Mit Flügeln Fliegen",
    icon: "👼",
    kategori: "Flugträume",
    anlam: "Spiritueller Aufstieg, Engelsenergie und Schutz.",
    detay: "Mit Flügeln zu fliegen symbolisiert ein spirituelles Erwachen oder dass Sie unter Schutz stehen. Engelsflügel repräsentieren göttliche Führung, Vogelflügel repräsentieren Freiheit. Dieser Traum wird häufig in Phasen spiritueller Entwicklung gesehen.",
    olumlu: ["Spiritueller Schutz", "Göttliche Führung", "Seelische Entwicklung", "Innerer Frieden", "Höheres Bewusstsein"],
    olumsuz: ["Weltliche Angelegenheiten vernachlässigen", "Übermäßiger Idealismus"],
    tavsiye: "Setzen Sie Ihre spirituelle Reise fort. Meditation und innere Arbeit werden Ihnen guttun. Seien Sie offen für Führung."
  },

  // SU RÜYALARI
  "deniz-gormek": {
    baslik: "Meer Sehen",
    icon: "🌊",
    kategori: "Wasserträume",
    anlam: "Unterbewusstsein, emotionale Tiefe, Gefühl der Unendlichkeit und kollektives Bewusstsein.",
    detay: "Das Meer repräsentiert die weiten Tiefen Ihres Unterbewusstseins. Ruhiges Meer symbolisiert inneren Frieden, welliges Meer emotionale Turbulenzen, stürmisches Meer Krisen. Farbe und Klarheit des Meeres beeinflussen die Deutung.",
    olumlu: ["Emotionale Tiefe", "Intuitive Kraft", "Unbegrenztes Potenzial", "Heilung"],
    olumsuz: ["Emotionale Überforderung", "Angst vor dem Unbekannten", "Unkontrollierte Emotionen"],
    tavsiye: "Fürchten Sie sich nicht, in die Tiefen Ihrer Gefühle einzutauchen. Ihr Unterbewusstsein sendet Ihnen wichtige Botschaften."
  },
  "nehir-gormek": {
    baslik: "Fluss Sehen",
    icon: "🏞️",
    kategori: "Wasserträume",
    anlam: "Lebensfluss, Veränderung, Reise und Zeit.",
    detay: "Der Fluss symbolisiert den Fluss des Lebens und den Lauf der Zeit. Flussrichtung, Geschwindigkeit und Klarheit bestimmen die Deutung. Im Fluss treiben bedeutet Hingabe an den Lebensfluss, den Fluss überqueren repräsentiert eine Übergangsphase.",
    olumlu: ["Sich dem Fluss hingeben", "Natürlicher Fortschritt", "Veränderung akzeptieren", "Reise"],
    olumsuz: ["Unkontrolliertes Treiben", "Orientierungsverlust", "Stress durch schnelle Veränderung"],
    tavsiye: "Vertrauen Sie dem Fluss des Lebens. Widersetzen Sie sich nicht der Veränderung, fließen Sie mit ihr."
  },
  "gol-gormek": {
    baslik: "See Sehen",
    icon: "🏔️",
    kategori: "Wasserträume",
    anlam: "Innerer Frieden, Stille, Reflexion und Meditation.",
    detay: "Der See symbolisiert mit seiner stillen und reflektierenden Natur Ihre innere Welt. Ein klarer See repräsentiert geistige Klarheit, ein trüber See verworrene Gedanken. Am Seeufer zu sein zeigt Bedürfnis nach Innenschau.",
    olumlu: ["Innerer Frieden", "Selbstreflexion", "Meditation", "Ruhe", "Klarheit"],
    olumsuz: ["Stillstand", "Unbeweglichkeit", "Zurückgezogenheit"],
    tavsiye: "Nehmen Sie sich Zeit für sich selbst. Praktizieren Sie Meditation und Innenschau. Klären Sie Ihre Gedanken."
  },
  "yagmur-gormek": {
    baslik: "Regen Sehen",
    icon: "🌧️",
    kategori: "Wasserträume",
    anlam: "Reinigung, Segen, emotionale Entladung und Erneuerung.",
    detay: "Regen symbolisiert Segen und Reinigung vom Himmel. Leichter Regen repräsentiert Frieden, starker Regen emotionale Entladung, Regen mit Sturm Krisen. Im Regen nass zu werden zeigt Reinigung.",
    olumlu: ["Reinigung", "Segen", "Erneuerung", "Emotionale Erleichterung", "Heilung"],
    olumsuz: ["Melancholie", "Traurigkeit", "Emotionale Überflutung"],
    tavsiye: "Erlauben Sie emotionale Reinigung. Wenn Sie weinen müssen, weinen Sie. Nach dem Regen kommt die Sonne."
  },
  "sel-gormek": {
    baslik: "Überschwemmung Sehen",
    icon: "🌊",
    kategori: "Wasserträume",
    anlam: "Unkontrollierte Emotionen, Druck, Reinigung und radikale Veränderung.",
    detay: "Eine Überschwemmung symbolisiert das unkontrollierte Überlaufen unterdrückter Gefühle. Eine alles wegspülende Flut zeigt, dass es eine radikale Reinigung oder Veränderung in Ihrem Leben geben wird. Vor der Flut zu fliehen repräsentiert Flucht vor Emotionen.",
    olumlu: ["Gründliche Reinigung", "Neuanfang", "Zerstörung alter Muster"],
    olumsuz: ["Unkontrollierte Emotionen", "Zerstörung", "Verlust", "Überwältigung"],
    tavsiye: "Unterdrücken Sie Ihre Emotionen nicht, drücken Sie sie kontrolliert aus. Sonst überlaufen sie und verursachen Schaden."
  },
  "havuz-gormek": {
    baslik: "Pool Sehen",
    icon: "🏊",
    kategori: "Wasserträume",
    anlam: "Begrenzte Emotionen, kontrollierte Umgebung und soziales Umfeld.",
    detay: "Ein Pool repräsentiert einen emotionalen Bereich mit klaren Grenzen. Ein sauberer Pool symbolisiert kontrollierte Emotionen, ein schmutziger Pool vernachlässigte Gefühle. Im Pool schwimmen zeigt Ihre Bequemlichkeit in sozialen Umgebungen.",
    olumlu: ["Kontrollierte Emotionen", "Sicherer Raum", "Soziale Bequemlichkeit", "Spaß"],
    olumsuz: ["Emotionale Begrenzung", "Künstliche Umgebung", "Mangel an Tiefe"],
    tavsiye: "Ihre sichere Zone ist gut, aber manchmal müssen Grenzen überschritten werden. Erlauben Sie emotionale Tiefe."
  },

  // AŞK RÜYALARI
  "eski-sevgili-gormek": {
    baslik: "Ex-Partner Sehen",
    icon: "💔",
    kategori: "Liebesträume",
    anlam: "Unverarbeitete Gefühle, Konfrontation mit der Vergangenheit, Sehnsucht oder Reue.",
    detay: "Einen Ex-Partner im Traum zu sehen bedeutet nicht unbedingt, dass Sie diese Person vermissen. Normalerweise repräsentiert es die Lektionen aus dieser Beziehung, unverarbeitete Gefühle oder Ihr damaliges Selbst. Dieser Traum kann ein Zeichen sein, dass Sie Frieden mit der Vergangenheit schließen müssen.",
    olumlu: ["Aus der Vergangenheit lernen", "Abschlusschance", "Selbstbewusstsein", "Wachstum"],
    olumsuz: ["In der Vergangenheit feststecken", "Vergleichen", "Nicht vorwärtskommen"],
    tavsiye: "Verarbeiten und lassen Sie vergangene Gefühle los. Konzentrieren Sie sich darauf, was Sie aus dieser Beziehung gelernt haben."
  },
  "opusmek": {
    baslik: "Küssen",
    icon: "💋",
    kategori: "Liebesträume",
    anlam: "Wunsch nach Nähe, Akzeptanz, Wunsch nach emotionaler Verbindung.",
    detay: "Im Traum zu küssen spiegelt Ihr Bedürfnis nach Nähe und Akzeptanz wider. Mit wem Sie küssen ist wichtig - wenn es jemand Bekanntes ist, symbolisiert es den Wunsch nach Verbindung mit dieser Person, wenn es ein Fremder ist, symbolisiert es unerforschte Aspekte von Ihnen.",
    olumlu: ["Nähe", "Akzeptanz", "Liebesaustausch", "Verbindung herstellen"],
    olumsuz: ["Angst vor unerwiderten Gefühlen", "Angst vor Ablehnung"],
    tavsiye: "Seien Sie offen dafür, Liebe zu geben und zu empfangen. Fürchten Sie sich nicht vor Nähe."
  },
  "evlenmek-ruya": {
    baslik: "Heiraten",
    icon: "💒",
    kategori: "Liebesträume",
    anlam: "Bindung, Neuanfang, Vereinigung und Verpflichtung.",
    detay: "Ein Hochzeitstraum bezieht sich nicht nur auf romantische Beziehungen. Er kann die Vereinigung zweier verschiedener Aspekte von Ihnen, die Bindung an ein neues Projekt oder eine wichtige Verpflichtung in Ihrem Leben symbolisieren. Hochzeitsdetails beeinflussen die Deutung.",
    olumlu: ["Bindung", "Vereinigung", "Neue Phase", "Verpflichtung", "Partnerschaft"],
    olumsuz: ["Bindungsangst", "Angst vor Freiheitsverlust"],
    tavsiye: "Überlegen Sie, woran Sie sich in Ihrem Leben binden möchten. Fürchten Sie sich nicht vor Verpflichtungen."
  },
  "aldatilmak": {
    baslik: "Betrogen Werden",
    icon: "💢",
    kategori: "Liebesträume",
    anlam: "Misstrauen, Angst vor Verlassenwerden, Selbstwertprobleme.",
    detay: "Betrügs-Träume sind sehr häufig und spiegeln normalerweise nicht tatsächlichen Betrug wider, sondern Gefühle von Unsicherheit, Angst vor Verlassenwerden oder Kommunikationsmangel in der Beziehung. Sie könnten Zweifel an Ihrem eigenen Wert haben.",
    olumlu: ["Bewusstsein", "Erkennen des Kommunikationsbedarfs"],
    olumsuz: ["Misstrauen", "Eifersucht", "Selbstwertprobleme", "Paranoia"],
    tavsiye: "Erforschen Sie die Quelle Ihrer Unsicherheitsgefühle. Kommunizieren Sie offen mit Ihrem Partner."
  },
  "tanimadik-asik-olmak": {
    baslik: "Liebe mit Fremdem",
    icon: "❓",
    kategori: "Liebesträume",
    anlam: "Unerforschte Aspekte, Suche nach idealem Partner, innere Anima/Animus.",
    detay: "Einen romantischen Traum mit jemandem zu haben, den Sie nicht kennen, symbolisiert Ihre eigenen unerforschten Aspekte oder Ihren idealen Partner. Laut Jung repräsentiert diese Person bei Männern die Anima (innere Frau), bei Frauen den Animus (innerer Mann).",
    olumlu: ["Selbstentdeckung", "Potenzial", "Suche nach dem Ideal", "Innere Integration"],
    olumsuz: ["Unrealistische Erwartungen", "Aktuelle Beziehung vernachlässigen"],
    tavsiye: "Überlegen Sie sich die Eigenschaften dieser Person im Traum - diese könnten Aspekte sein, die Sie entwickeln möchten."
  },
  "ayrilik-yasama": {
    baslik: "Trennung Erleben",
    icon: "🚶",
    kategori: "Liebesträume",
    anlam: "Angst vor Veränderung, Verlustangst, Wunsch nach Unabhängigkeit.",
    detay: "Eine Trennung im Traum zu erleben muss nicht bedeuten, dass Sie sich tatsächlich trennen möchten. Es symbolisiert Angst vor Veränderung, Bedürfnis nach Unabhängigkeit oder Bewusstsein für Probleme in der Beziehung. Wer die Trennung initiiert ist ein wichtiges Detail.",
    olumlu: ["Unabhängigkeit", "Veränderungschance", "Selbstgenügsamkeit"],
    olumsuz: ["Verlustangst", "Angst vor Verlassenwerden", "Einsamkeit"],
    tavsiye: "Überlegen Sie, was in Ihrer Beziehung fehlt. Erfüllen Sie Ihr Bedürfnis nach Unabhängigkeit auf gesunde Weise."
  },

  // ALPTRAUMTRÄUME
  "kovalanmak-kabus": {
    baslik: "Verfolgt Werden",
    icon: "🏃",
    kategori: "Alptraumträume",
    anlam: "Vermiedene Probleme, unterdrückte Ängste und Stress.",
    detay: "Der Verfolgungstraum ist einer der häufigsten Alpträume. Was Sie verfolgt, repräsentiert eine Situation, die Sie im Leben vermeiden. Ob es ein Monster, Tier oder Mensch ist, beeinflusst die Deutung. Nicht entkommen können symbolisiert Hilflosigkeit.",
    olumlu: ["Bewusstsein", "Veränderungsmotivation", "Konfrontationschance"],
    olumsuz: ["Vermeidungsverhalten", "Chronischer Stress", "Angst", "Ungelöste Probleme"],
    tavsiye: "Stellen Sie sich dem, wovor Sie fliehen. Probleme aufzuschieben macht sie größer. Wovor oder vor wem fliehen Sie?"
  },
  "bogulmak": {
    baslik: "Ertrinken",
    icon: "😰",
    kategori: "Alptraumträume",
    anlam: "Emotionaler Druck, Überwältigung, Unfähigkeit sich auszudrücken und Atemnot.",
    detay: "Der Ertrinkungstraum zeigt, dass Sie emotional überwältigt sind und sich nicht ausdrücken können. Im Wasser ertrinken symbolisiert emotionalen Druck, am Hals ersticken Kommunikationsprobleme. Nicht atmen können spiegelt das Gefühl der Enge im Leben wider.",
    olumlu: ["Bewusstsein für Gefühle", "Erkennen des Veränderungsbedarfs"],
    olumsuz: ["Überwältigung", "Unfähigkeit sich auszudrücken", "Unter Druck fühlen", "Panik"],
    tavsiye: "Drücken Sie Ihre Gefühle aus. Identifizieren Sie überwältigende Situationen und setzen Sie Grenzen. Machen Sie Atemübungen."
  },
  "kaybolmak": {
    baslik: "Sich Verirren",
    icon: "🌫️",
    kategori: "Alptraumträume",
    anlam: "Orientierungsverlust, Unsicherheit, Identitätssuche und Unentschlossenheit.",
    detay: "Der Traum sich zu verirren zeigt, dass Sie das Gefühl haben, die Richtung im Leben verloren zu haben. Sich an einem unbekannten Ort zu verirren symbolisiert Unsicherheit, an einem bekannten Ort Identitätskrise. Nicht nach dem Weg fragen können zeigt Schwierigkeiten, um Hilfe zu bitten.",
    olumlu: ["Entdeckungschance", "Neue Wege finden", "Selbsthinterfragung"],
    olumsuz: ["Orientierungsverlust", "Unsicherheit", "Unentschlossenheit", "Identitätskrise"],
    tavsiye: "Klären Sie Ihre Ziele. Bestimmen Sie, wohin Sie im Leben gehen möchten. Scheuen Sie sich nicht, um Hilfe zu bitten."
  },
  "olum-gormek": {
    baslik: "Tod Sehen",
    icon: "💀",
    kategori: "Alptraumträume",
    anlam: "Transformation, Ende, Neuanfang und große Veränderung.",
    detay: "Der Todestraum symbolisiert normalerweise nicht den tatsächlichen Tod, sondern das Ende einer Phase und einen Neuanfang. Ihr eigener Tod repräsentiert Ego-Tod, der Tod eines anderen die Veränderung Ihrer Beziehung zu dieser Person. Nicht zu fürchten, sondern ein Zeichen der Transformation.",
    olumlu: ["Transformation", "Neuanfang", "Tod alter Muster", "Erneuerung"],
    olumsuz: ["Angst vor Veränderung", "Verlustsorge", "Gefühl des Endes"],
    tavsiye: "Akzeptieren Sie Veränderung. Wenn etwas endet, beginnt etwas Neues. Erlauben Sie Transformation."
  },
  "felc-olmak": {
    baslik: "Gelähmt Sein",
    icon: "🧊",
    kategori: "Alptraumträume",
    anlam: "Hilflosigkeit, Bewegungsunfähigkeit, Entscheidungsunfähigkeit und Erstarren.",
    detay: "Nicht mit Schlafparalyse zu verwechseln. Im Traum gelähmt zu sein zeigt, dass Sie das Gefühl haben, sich im Leben nicht bewegen oder Entscheidungen treffen zu können. Sich in Gefahr nicht bewegen können symbolisiert Hilflosigkeit, nicht sprechen können Ausdrucksprobleme.",
    olumlu: ["Chance zur Situationsbewertung", "Geduld lernen"],
    olumsuz: ["Hilflosigkeit", "Entscheidungsunfähigkeit", "Unbeweglichkeit", "Angst"],
    tavsiye: "Beginnen Sie mit kleinen Schritten. Versuchen Sie nicht, alles auf einmal zu lösen. Machen Sie einen Schritt, gewinnen Sie Momentum."
  },
  "canavar-gormek": {
    baslik: "Monster/Kreatur Sehen",
    icon: "👹",
    kategori: "Alptraumträume",
    anlam: "Unterdrückte Wut, Ängste, Schattenselbst und dunkle Seiten.",
    detay: "Monster repräsentieren Ihre eigenen unterdrückten und nicht akzeptierten Aspekte. Dies ist Jungs 'Schatten'-Konzept. Mit dem Monster zu kämpfen symbolisiert inneren Konflikt, zu fliehen Verleugnung, Freund zu werden Integration.",
    olumlu: ["Konfrontation mit dem Schatten", "Integrationschance", "Kraft gewinnen"],
    olumsuz: ["Unterdrückte Wut", "Verleugnung", "Innerer Konflikt", "Angst"],
    tavsiye: "Akzeptieren Sie Ihre dunklen Seiten. Versuchen Sie sie zu verstehen statt zu unterdrücken. Machen Sie Frieden mit Ihrem Schatten."
  },
  "dogal-afet": {
    baslik: "Naturkatastrophe",
    icon: "🌪️",
    kategori: "Alptraumträume",
    anlam: "Unkontrollierte Veränderung, Chaos, Ohnmachtsgefühl und äußere Faktoren.",
    detay: "Naturkatastrophen wie Erdbeben, Überschwemmungen, Stürme symbolisieren starke Veränderungen außerhalb Ihrer Kontrolle. Erdbeben repräsentiert Grundlagenerschütterung, Überschwemmung emotionales Überlaufen, Sturm chaotische Zeiten. Es testet den Überlebensinstinkt.",
    olumlu: ["Widerstandsfähigkeit", "Anpassungsfähigkeit", "Überlebenskraft"],
    olumsuz: ["Kontrolllosigkeit", "Chaos", "Ohnmacht", "Angst"],
    tavsiye: "Akzeptieren Sie, was Sie nicht kontrollieren können. Entwickeln Sie Ihre Anpassungsfähigkeit. Seien Sie flexibel."
  },

  "yilan-gormek": {
    baslik: "Schlange Sehen",
    icon: "🐍",
    anlam: "Schlangenträume symbolisieren oft versteckte Feinde, Gefahren oder Transformation.",
    detay: "Eine Schlange im Traum zu sehen kann darauf hinweisen, dass Ihr Unterbewusstsein Ihnen eine Warnung sendet. Farbe, Größe und Verhalten der Schlange beeinflussen die Deutung. Grüne Schlange repräsentiert Heilung und Erneuerung, schwarze Schlange versteckte Gefahren, weiße Schlange spirituelles Erwachen.",
    olumlu: ["Transformation und Erneuerung", "Heilungsenergie", "Weisheit und Intuition", "Kundalini-Erwachen"],
    olumsuz: ["Versteckte Feinde", "Verratsrisiko", "Unterdrückte Ängste", "Misstrauen"],
    tavsiye: "Bewerten Sie die Menschen um Sie herum sorgfältig. Vertrauen Sie Ihrer Intuition und schützen Sie sich."
  },
  "dis-dokulmesi": {
    baslik: "Zahnausfall",
    icon: "🦷",
    anlam: "Zahnausfallträume symbolisieren Nachrichten über die Familie oder Verlustangst.",
    detay: "Diese Traumart ist eine der häufigsten. Sie repräsentiert normalerweise Kontrollverlust, Angst vor dem Altern oder eine wichtige Veränderung. Laut einigen Deutungen kann es auch bedeuten, Nachrichten von Familienmitgliedern zu erhalten.",
    olumlu: ["Neuanfänge", "Reifung", "Befreiung von alten Gewohnheiten"],
    olumsuz: ["Verlustangst", "Unsicherheitsgefühl", "Stress und Sorge"],
    tavsiye: "Seien Sie offen für Veränderungen in Ihrem Leben. Lernen Sie loszulassen und vertrauen Sie dem Fluss."
  },
  "ucmak": {
    baslik: "Fliegen",
    icon: "✈️",
    anlam: "Flugträume symbolisieren Freiheit, Erfolg und das Überschreiten von Grenzen.",
    detay: "Im Traum zu fliegen ist normalerweise ein positives Zeichen. Es repräsentiert Aufstieg in Ihrem Leben, Überwindung von Hindernissen und Befreiung. Die Leichtigkeit oder Schwierigkeit des Fluges spiegelt Ihre reale Lebenssituation wider.",
    olumlu: ["Freiheitsgefühl", "Erfolg und Aufstieg", "Kreativität", "Spirituelle Entwicklung"],
    olumsuz: ["Flucht vor der Realität", "Übermäßiger Ehrgeiz", "Grundlose Träume"],
    tavsiye: "Verfolgen Sie Ihre Träume, aber vergessen Sie nicht, auf dem Boden zu bleiben."
  },
  "su-gormek": {
    baslik: "Wasser Sehen",
    icon: "🌊",
    anlam: "Wasserträume spiegeln Ihren emotionalen Zustand und Ihr Unterbewusstsein wider.",
    detay: "Der Zustand des Wassers zeigt Ihren emotionalen Zustand. Klares Wasser repräsentiert Frieden und Klarheit, trübes Wasser Verwirrung und Unsicherheit, welliges Wasser emotionale Turbulenzen. Ob es Meer, See oder Fluss ist, beeinflusst auch die Deutung.",
    olumlu: ["Emotionale Reinigung", "Intuitive Kraft", "Erneuerung", "Fülle"],
    olumsuz: ["Emotionaler Druck", "Unsicherheit", "Unkontrollierte Emotionen"],
    tavsiye: "Unterdrücken Sie Ihre Gefühle nicht, drücken Sie sie aus. Meditation und Wasseraktivitäten können Ihnen guttun."
  },
  "bebek-gormek": {
    baslik: "Baby Sehen",
    icon: "👶",
    anlam: "Babyträume symbolisieren Neuanfänge, Unschuld und Potenzial.",
    detay: "Ein Baby im Traum zu sehen zeigt normalerweise, dass etwas Neues in Ihr Leben treten wird. Dies kann ein Projekt, eine Beziehung oder eine Idee sein. Der Zustand des Babys (glücklich, weinend) beeinflusst die Deutung.",
    olumlu: ["Neuanfänge", "Kreativität", "Unschuld", "Hoffnung"],
    olumsuz: ["Angst vor Verantwortung", "Verletzlichkeit", "Abhängigkeit"],
    tavsiye: "Seien Sie offen für neue Möglichkeiten. Vernachlässigen Sie nicht das Kind in Ihnen."
  },
  "ev-gormek": {
    baslik: "Haus Sehen",
    icon: "🏠",
    anlam: "Hausträume repräsentieren Ihre innere Welt, Ihre Familie und Ihr Sicherheitsbedürfnis.",
    detay: "Das Haus im Traum symbolisiert Ihre Psyche. Zustand, Räume und Atmosphäre des Hauses spiegeln Ihre innere Welt wider. Altes Haus zeigt Vergangenheit, neues Haus Veränderung, verfallenes Haus vernachlässigte Aspekte.",
    olumlu: ["Sicherheit", "Familienbande", "Innerer Frieden", "Wurzeln"],
    olumsuz: ["In der Vergangenheit feststecken", "Unsicherheit", "Familienprobleme"],
    tavsiye: "Kümmern Sie sich um Ihre innere Welt. Überprüfen Sie Ihre Haus- und Familienbeziehungen."
  },
  "kovalanmak": {
    baslik: "Verfolgt Werden",
    icon: "🏃",
    anlam: "Verfolgungsträume symbolisieren vermiedene Probleme und unterdrückte Ängste.",
    detay: "Diese Traumart ist sehr häufig und repräsentiert normalerweise eine Situation, die Sie im Leben vermeiden. Was Sie verfolgt, symbolisiert das Thema, dem Sie sich stellen müssen.",
    olumlu: ["Bewusstsein", "Veränderungsmotivation", "Einsicht"],
    olumsuz: ["Vermeidungsverhalten", "Stress", "Ungelöste Probleme"],
    tavsiye: "Stellen Sie sich dem, wovor Sie fliehen. Probleme aufzuschieben macht sie größer."
  },
  "dusmek": {
    baslik: "Fallen",
    icon: "⬇️",
    anlam: "Fallträume symbolisieren Kontrollverlust und Unsicherheitsgefühl.",
    detay: "Im Traum zu fallen zeigt normalerweise, dass Sie das Gefühl haben, die Kontrolle in Ihrem Leben zu verlieren. Sie könnten Unsicherheit in Arbeit, Beziehung oder finanziellen Angelegenheiten erleben.",
    olumlu: ["Loslassen und Hingabe", "Neue Perspektive", "Erwachen"],
    olumsuz: ["Kontrollverlust", "Versagensangst", "Unsicherheit"],
    tavsiye: "Identifizieren Sie, was Sie in Ihrem Leben nicht kontrollieren können, und lernen Sie es zu akzeptieren."
  },

  // WEITERE TRAUMSYMBOLE AUS DEM LEXIKON
  "auto": {
    baslik: "Auto",
    icon: "🚗",
    anlam: "Lebensweg und Kontrolle über dein Schicksal",
    detay: "Ein Auto im Traum symbolisiert Ihre Reise durchs Leben und wie viel Kontrolle Sie über Ihre Richtung haben. Wer fährt das Auto, der Zustand des Autos und die Straßenbedingungen beeinflussen die Deutung. Selbst zu fahren zeigt Kontrolle, Beifahrer zu sein zeigt Passivität.",
    olumlu: ["Kontrolle über das Leben", "Fortschritt", "Unabhängigkeit", "Zielstrebigkeit"],
    olumsuz: ["Kontrollverlust", "Richtungslosigkeit", "Unfallrisiko"],
    tavsiye: "Übernehmen Sie das Steuer Ihres Lebens. Bestimmen Sie Ihre Richtung selbst."
  },
  "pferd": {
    baslik: "Pferd",
    icon: "🐴",
    anlam: "Stärke, Freiheit und sexuelle Energie",
    detay: "Das Pferd repräsentiert rohe Kraft, Freiheit und instinktive Energie. Ein wildes Pferd symbolisiert ungezähmte Leidenschaften, ein zahmes Pferd kontrollierte Kraft. Auf einem Pferd zu reiten zeigt Beherrschung Ihrer Instinkte.",
    olumlu: ["Innere Stärke", "Freiheit", "Vitalität", "Leidenschaft", "Erfolg"],
    olumsuz: ["Unkontrollierte Impulse", "Wilde Energie", "Sturheit"],
    tavsiye: "Kanalisieren Sie Ihre Energie produktiv. Finden Sie Balance zwischen Freiheit und Kontrolle."
  },
  "spiegel": {
    baslik: "Spiegel",
    icon: "🪞",
    anlam: "Selbstreflexion und innere Wahrheit",
    detay: "Der Spiegel zeigt, wie Sie sich selbst sehen. Ein klarer Spiegel repräsentiert Selbstbewusstsein, ein zerbrochener Spiegel fragmentierte Identität. Was Sie im Spiegel sehen, zeigt Ihre Selbstwahrnehmung.",
    olumlu: ["Selbsterkenntnis", "Ehrlichkeit", "Klarheit", "Selbstakzeptanz"],
    olumsuz: ["Selbstkritik", "Verzerrte Selbstwahrnehmung", "Narzissmus"],
    tavsiye: "Schauen Sie ehrlich auf sich selbst. Akzeptieren Sie alle Ihre Aspekte."
  },
  "baum": {
    baslik: "Baum",
    icon: "🌳",
    anlam: "Wachstum, Wurzeln und Lebensstabilität",
    detay: "Der Baum symbolisiert Ihr Leben und Wachstum. Wurzeln repräsentieren Ihre Herkunft, Stamm Ihre Stärke, Äste Ihre Beziehungen, Früchte Ihre Erfolge. Ein gesunder Baum zeigt Stabilität, ein kranker Baum Probleme.",
    olumlu: ["Wachstum", "Stabilität", "Familienbande", "Langlebigkeit", "Weisheit"],
    olumsuz: ["Stagnation", "Entwurzelung", "Verfall"],
    tavsiye: "Pflegen Sie Ihre Wurzeln. Wachsen Sie stetig, aber vergessen Sie nicht, woher Sie kommen."
  },
  "gold": {
    baslik: "Gold",
    icon: "🏆",
    anlam: "Wert, Erfolg und spiritueller Reichtum",
    detay: "Gold symbolisiert nicht nur materiellen Reichtum, sondern auch spirituellen Wert und innere Qualitäten. Gold zu finden zeigt Selbstentdeckung, Gold zu verlieren Wertverlust.",
    olumlu: ["Erfolg", "Wert", "Anerkennung", "Spiritueller Reichtum", "Selbstwert"],
    olumsuz: ["Gier", "Materialismus", "Oberflächlichkeit"],
    tavsiye: "Erkennen Sie Ihren wahren Wert. Materieller Reichtum ist nicht alles."
  },
  "mutter": {
    baslik: "Mutter",
    icon: "👩",
    anlam: "Nährung, Schutz und emotionale Unterstützung",
    detay: "Die Mutter im Traum repräsentiert das Bedürfnis nach Fürsorge, Schutz und bedingungsloser Liebe. Sie kann auch Ihre Beziehung zu Ihrer eigenen Mutter oder Ihre mütterlichen Aspekte symbolisieren.",
    olumlu: ["Fürsorge", "Schutz", "Bedingungslose Liebe", "Heilung", "Geborgenheit"],
    olumsuz: ["Abhängigkeit", "Überbehütung", "Ungelöste Mutterkonflikte"],
    tavsiye: "Heilen Sie Ihre Beziehung zu Ihrer Mutter. Entwickeln Sie Ihre eigene Fürsorglichkeit."
  },
  "liebe": {
    baslik: "Liebe",
    icon: "❤️",
    anlam: "Emotionale Erfüllung und Herzenswünsche",
    detay: "Liebe im Traum zu erleben zeigt Ihr Bedürfnis nach Verbindung, Akzeptanz und emotionaler Erfüllung. Es kann romantische Liebe, Selbstliebe oder universelle Liebe repräsentieren.",
    olumlu: ["Verbindung", "Erfüllung", "Glück", "Akzeptanz", "Heilung"],
    olumsuz: ["Angst vor Ablehnung", "Unerwiderte Liebe", "Abhängigkeit"],
    tavsiye: "Öffnen Sie Ihr Herz. Beginnen Sie mit Selbstliebe."
  },
  "mond": {
    baslik: "Mond",
    icon: "🌙",
    anlam: "Weibliche Energie und Unterbewusstsein",
    detay: "Der Mond symbolisiert das Unbewusste, Intuition und weibliche Energie. Vollmond repräsentiert Fülle, Neumond Neuanfang, zunehmender Mond Wachstum, abnehmender Mond Loslassen.",
    olumlu: ["Intuition", "Weibliche Kraft", "Zyklen", "Mysterium", "Magie"],
    olumsuz: ["Emotionale Instabilität", "Verwirrung", "Dunkelheit"],
    tavsiye: "Vertrauen Sie Ihrer Intuition. Ehren Sie Ihre Zyklen und Rhythmen."
  },
  "baby": {
    baslik: "Baby",
    icon: "👶",
    anlam: "Neubeginn, Unschuld und neue Projekte",
    detay: "Ein Baby symbolisiert etwas Neues in Ihrem Leben - ein Projekt, eine Idee oder einen Aspekt von Ihnen selbst. Es repräsentiert Potenzial, Unschuld und Verletzlichkeit.",
    olumlu: ["Neuanfang", "Potenzial", "Unschuld", "Hoffnung", "Kreativität"],
    olumsuz: ["Verantwortungsangst", "Verletzlichkeit", "Unreife"],
    tavsiye: "Pflegen Sie Ihre neuen Projekte. Seien Sie geduldig mit sich selbst."
  },
  "fisch": {
    baslik: "Fisch",
    icon: "🐟",
    anlam: "Unterbewusste Gefühle und Intuition",
    detay: "Fische schwimmen in den Tiefen des Unbewussten. Sie symbolisieren Gefühle, Intuition und spirituelle Einsichten. Viele Fische zeigen Fülle, tote Fische unterdrückte Emotionen.",
    olumlu: ["Intuition", "Spiritualität", "Fülle", "Emotionale Tiefe", "Fruchtbarkeit"],
    olumsuz: ["Unterdrückte Gefühle", "Emotionale Kälte", "Verlorene Chancen"],
    tavsiye: "Tauchen Sie in Ihre Gefühlswelt ein. Vertrauen Sie Ihrer Intuition."
  },
  "garten": {
    baslik: "Garten",
    icon: "🌺",
    anlam: "Persönliches Wachstum und Pflege",
    detay: "Der Garten repräsentiert Ihre innere Welt und wie Sie sich selbst pflegen. Ein blühender Garten zeigt Wohlbefinden, ein verwilderter Garten Vernachlässigung.",
    olumlu: ["Wachstum", "Pflege", "Schönheit", "Frieden", "Fruchtbarkeit"],
    olumsuz: ["Vernachlässigung", "Unkraut", "Verfall"],
    tavsiye: "Pflegen Sie Ihren inneren Garten. Investieren Sie in Ihr Wohlbefinden."
  },
  "messer": {
    baslik: "Messer",
    icon: "🔪",
    anlam: "Trennung, Konflikt oder Entscheidung",
    detay: "Das Messer kann Trennung, Konflikt oder die Notwendigkeit einer klaren Entscheidung symbolisieren. Es kann auch Aggression oder Verteidigung repräsentieren.",
    olumlu: ["Klare Entscheidungen", "Trennung vom Negativen", "Präzision", "Schutz"],
    olumsuz: ["Aggression", "Verletzung", "Verrat", "Gefahr"],
    tavsiye: "Treffen Sie klare Schnitte. Trennen Sie sich von dem, was Ihnen nicht dient."
  },
  "insekt": {
    baslik: "Insekt",
    icon: "🐛",
    anlam: "Kleine Störungen oder Ängste",
    detay: "Insekten repräsentieren kleine Ärgernisse, Ängste oder Aspekte, die Sie stören. Die Art des Insekts beeinflusst die Deutung - Bienen zeigen Fleiß, Spinnen Kreativität oder Angst.",
    olumlu: ["Fleiß", "Transformation", "Gemeinschaft", "Produktivität"],
    olumsuz: ["Ärger", "Angst", "Parasiten", "Störungen"],
    tavsiye: "Ignorieren Sie kleine Probleme nicht. Kümmern Sie sich um sie, bevor sie größer werden."
  },
  "wolke": {
    baslik: "Wolke",
    icon: "☁️",
    anlam: "Unklarheit oder spirituelle Höhe",
    detay: "Wolken können Unklarheit und Verwirrung symbolisieren, aber auch spirituelle Höhe und Transzendenz. Dunkle Wolken zeigen Probleme, weiße Wolken Frieden.",
    olumlu: ["Spiritualität", "Träume", "Imagination", "Leichtigkeit"],
    olumsuz: ["Verwirrung", "Unklarheit", "Trübung", "Depression"],
    tavsiye: "Warten Sie, bis sich die Wolken lichten. Klarheit wird kommen."
  },
  "vater": {
    baslik: "Vater",
    icon: "👨",
    anlam: "Autorität, Schutz und Führung",
    detay: "Der Vater symbolisiert Autorität, Struktur und Führung. Er kann Ihre Beziehung zu Ihrem eigenen Vater oder Ihre eigenen väterlichen Qualitäten repräsentieren.",
    olumlu: ["Schutz", "Führung", "Stärke", "Weisheit", "Struktur"],
    olumsuz: ["Autoritätskonflikte", "Strenge", "Distanz", "Ungelöste Vaterkonflikte"],
    tavsiye: "Heilen Sie Ihre Beziehung zu Autorität. Entwickeln Sie Ihre eigene innere Führung."
  },
  "blume": {
    baslik: "Blume",
    icon: "🌸",
    anlam: "Schönheit, Wachstum und Romantik",
    detay: "Blumen symbolisieren Schönheit, Wachstum und die Entfaltung Ihres Potenzials. Verschiedene Blumen haben unterschiedliche Bedeutungen - Rosen für Liebe, Lilien für Reinheit.",
    olumlu: ["Schönheit", "Wachstum", "Liebe", "Freude", "Entfaltung"],
    olumsuz: ["Vergänglichkeit", "Oberflächlichkeit", "Verwelken"],
    tavsiye: "Lassen Sie Ihre Schönheit erblühen. Genießen Sie den Moment."
  },
  "kind": {
    baslik: "Kind",
    icon: "👧",
    anlam: "Inneres Kind und Unschuld",
    detay: "Ein Kind im Traum repräsentiert Ihr inneres Kind, Unschuld und Spontaneität. Es kann auch neue Projekte oder Aspekte von Ihnen symbolisieren, die Pflege brauchen.",
    olumlu: ["Unschuld", "Freude", "Spontaneität", "Neugier", "Potenzial"],
    olumsuz: ["Unreife", "Verletzlichkeit", "Vernachlässigung"],
    tavsiye: "Verbinden Sie sich mit Ihrem inneren Kind. Erlauben Sie sich zu spielen."
  },
  "schlamm": {
    baslik: "Schlamm",
    icon: "🟤",
    anlam: "Festgefahrene Situation oder Unreinheit",
    detay: "Schlamm symbolisiert eine Situation, in der Sie feststecken, oder emotionale Unreinheit. Im Schlamm zu versinken zeigt Hilflosigkeit.",
    olumlu: ["Erdung", "Fruchtbarkeit", "Transformation"],
    olumsuz: ["Feststecken", "Unreinheit", "Schwierigkeiten", "Verwirrung"],
    tavsiye: "Finden Sie Wege, sich aus festgefahrenen Situationen zu befreien. Reinigen Sie sich emotional."
  },
  "nackt": {
    baslik: "Nackt",
    icon: "🙈",
    anlam: "Verletzlichkeit und Authentizität",
    detay: "Nackt zu sein symbolisiert Verletzlichkeit, Authentizität oder Angst vor Bloßstellung. Sich unwohl zu fühlen zeigt Unsicherheit, sich wohl zu fühlen Selbstakzeptanz.",
    olumlu: ["Authentizität", "Ehrlichkeit", "Selbstakzeptanz", "Befreiung"],
    olumsuz: ["Verletzlichkeit", "Scham", "Angst vor Bloßstellung", "Unsicherheit"],
    tavsiye: "Seien Sie authentisch. Akzeptieren Sie sich, wie Sie sind."
  },
  "meer": {
    baslik: "Meer",
    icon: "🌊",
    anlam: "Emotionale Tiefe und Unbewusstes",
    detay: "Das Meer repräsentiert die Tiefen Ihres Unbewussten und Ihre Emotionen. Ruhiges Meer zeigt Frieden, stürmisches Meer emotionale Turbulenzen.",
    olumlu: ["Emotionale Tiefe", "Intuition", "Unendlichkeit", "Heilung", "Fülle"],
    olumsuz: ["Überwältigung", "Angst", "Unkontrollierte Emotionen", "Tiefe Ängste"],
    tavsiye: "Tauchen Sie in Ihre emotionale Tiefe. Fürchten Sie sich nicht vor Ihren Gefühlen."
  },
  "berg": {
    baslik: "Berg",
    icon: "⛰️",
    anlam: "Herausforderungen und Ziele",
    detay: "Der Berg symbolisiert Herausforderungen, Ziele und Hindernisse. Einen Berg zu besteigen zeigt Ihre Anstrengungen, auf dem Gipfel zu sein zeigt Erfolg.",
    olumlu: ["Ziele", "Erfolg", "Überwindung", "Perspektive", "Spirituelle Höhe"],
    olumsuz: ["Hindernisse", "Schwierigkeiten", "Überforderung", "Isolation"],
    tavsiye: "Nehmen Sie die Herausforderung an. Der Aufstieg lohnt sich."
  },
  "zahn": {
    baslik: "Zahn",
    icon: "🦷",
    anlam: "Selbstvertrauen und Kommunikation",
    detay: "Zähne symbolisieren Selbstvertrauen, Kommunikation und Vitalität. Zahnausfall zeigt Verlustangst oder Kontrollverlust.",
    olumlu: ["Selbstvertrauen", "Kommunikation", "Vitalität", "Stärke"],
    olumsuz: ["Verlustangst", "Kontrollverlust", "Kommunikationsprobleme", "Altersangst"],
    tavsiye: "Stärken Sie Ihr Selbstvertrauen. Kümmern Sie sich um Ihre Kommunikation."
  },
  "hochzeit": {
    baslik: "Hochzeit",
    icon: "💒",
    anlam: "Vereinigung und neue Verpflichtungen",
    detay: "Eine Hochzeit symbolisiert Vereinigung, Bindung und neue Verpflichtungen. Es kann eine romantische Beziehung oder die Integration verschiedener Aspekte von Ihnen repräsentieren.",
    olumlu: ["Vereinigung", "Bindung", "Verpflichtung", "Feier", "Neuanfang"],
    olumsuz: ["Bindungsangst", "Freiheitsverlust", "Druck"],
    tavsiye: "Feiern Sie Verbindungen. Fürchten Sie sich nicht vor Verpflichtungen."
  },
  "fallen": {
    baslik: "Fallen",
    icon: "⬇️",
    anlam: "Kontrollverlust und Ängste",
    detay: "Fallen im Traum ist sehr häufig und symbolisiert Kontrollverlust, Versagensangst oder Unsicherheit. Die Höhe und Geschwindigkeit des Fallens beeinflussen die Deutung.",
    olumlu: ["Loslassen", "Hingabe", "Neue Perspektive", "Erwachen"],
    olumsuz: ["Kontrollverlust", "Versagensangst", "Unsicherheit", "Hilflosigkeit"],
    tavsiye: "Lernen Sie loszulassen. Nicht alles muss kontrolliert werden."
  },
  "kamel": {
    baslik: "Kamel",
    icon: "🐫",
    anlam: "Ausdauer und Geduld",
    detay: "Das Kamel symbolisiert Ausdauer, Geduld und die Fähigkeit, schwierige Zeiten zu überstehen. Es zeigt, dass Sie Ressourcen haben, um durchzuhalten.",
    olumlu: ["Ausdauer", "Geduld", "Widerstandsfähigkeit", "Ressourcen", "Überleben"],
    olumsuz: ["Sturheit", "Isolation", "Härte"],
    tavsiye: "Vertrauen Sie Ihrer Ausdauer. Sie haben die Kraft durchzuhalten."
  },
  "haus": {
    baslik: "Haus",
    icon: "🏠",
    anlam: "Selbst, Sicherheit und Familie",
    detay: "Das Haus symbolisiert Ihre Psyche und Ihr Selbst. Verschiedene Räume repräsentieren verschiedene Aspekte - Keller das Unbewusste, Dachboden die Vergangenheit.",
    olumlu: ["Sicherheit", "Selbst", "Familie", "Wurzeln", "Schutz"],
    olumsuz: ["Unsicherheit", "Familienprobleme", "Vergangenheit", "Eingesperrtsein"],
    tavsiye: "Erkunden Sie Ihr inneres Haus. Jeder Raum hat eine Botschaft."
  },
  "brot": {
    baslik: "Brot",
    icon: "🍞",
    anlam: "Grundbedürfnisse und Nährung",
    detay: "Brot symbolisiert Grundbedürfnisse, Nährung und Lebensunterhalt. Es repräsentiert das, was Sie zum Leben brauchen - physisch und emotional.",
    olumlu: ["Nährung", "Fülle", "Sicherheit", "Teilen", "Gemeinschaft"],
    olumsuz: ["Mangel", "Hunger", "Grundbedürfnisse nicht erfüllt"],
    tavsiye: "Sorgen Sie für Ihre Grundbedürfnisse. Teilen Sie, was Sie haben."
  },
  "hand": {
    baslik: "Hand",
    icon: "✋",
    anlam: "Handlungsfähigkeit und Kontrolle",
    detay: "Hände symbolisieren Ihre Fähigkeit zu handeln, zu erschaffen und zu kontrollieren. Verletzte Hände zeigen Handlungsunfähigkeit, starke Hände Macht.",
    olumlu: ["Handlungsfähigkeit", "Kreativität", "Kontrolle", "Hilfe", "Verbindung"],
    olumsuz: ["Handlungsunfähigkeit", "Verletzung", "Kontrollverlust"],
    tavsiye: "Nutzen Sie Ihre Hände. Handeln Sie und erschaffen Sie."
  },
  "ex-partner": {
    baslik: "Ex-Partner",
    icon: "💔",
    anlam: "Unverarbeitete Gefühle",
    detay: "Einen Ex-Partner zu sehen bedeutet normalerweise nicht, dass Sie diese Person vermissen, sondern dass Sie unverarbeitete Gefühle oder Lektionen aus dieser Beziehung haben.",
    olumlu: ["Lernen", "Abschluss", "Selbstbewusstsein", "Wachstum"],
    olumsuz: ["Feststecken", "Unverarbeitete Gefühle", "Vergleichen"],
    tavsiye: "Finden Sie Abschluss. Lernen Sie aus der Vergangenheit und gehen Sie weiter."
  },
  "kleid": {
    baslik: "Kleid",
    icon: "👗",
    anlam: "Identität und Selbstdarstellung",
    detay: "Kleidung symbolisiert, wie Sie sich der Welt präsentieren und Ihre Identität. Die Art, Farbe und der Zustand der Kleidung beeinflussen die Deutung.",
    olumlu: ["Selbstausdruck", "Identität", "Transformation", "Schutz"],
    olumsuz: ["Maskierung", "Unauthentizität", "Sorge um Erscheinung"],
    tavsiye: "Seien Sie authentisch. Tragen Sie, was Ihr wahres Selbst repräsentiert."
  },
  "maus": {
    baslik: "Maus",
    icon: "🐭",
    anlam: "Kleine Probleme oder Schüchternheit",
    detay: "Eine Maus symbolisiert kleine Probleme, Schüchternheit oder Details, die Aufmerksamkeit brauchen. Viele Mäuse können auf Sorgen hinweisen, die sich ansammeln.",
    olumlu: ["Aufmerksamkeit für Details", "Bescheidenheit", "Anpassungsfähigkeit"],
    olumsuz: ["Kleine Probleme", "Schüchternheit", "Angst", "Vernachlässigte Details"],
    tavsiye: "Kümmern Sie sich um kleine Probleme, bevor sie größer werden."
  },
  "sturm": {
    baslik: "Sturm",
    icon: "⛈️",
    anlam: "Emotionale Turbulenzen",
    detay: "Ein Sturm symbolisiert emotionale Turbulenzen, Konflikte oder chaotische Zeiten. Die Intensität des Sturms zeigt die Stärke Ihrer emotionalen Unruhe.",
    olumlu: ["Reinigung", "Veränderung", "Emotionale Entladung", "Erneuerung"],
    olumsuz: ["Chaos", "Konflikte", "Emotionale Turbulenzen", "Zerstörung"],
    tavsiye: "Lassen Sie den Sturm vorüberziehen. Nach dem Sturm kommt Ruhe."
  },
  "fußball": {
    baslik: "Fußball",
    icon: "⚽",
    anlam: "Teamarbeit und Wettbewerb",
    detay: "Fußball symbolisiert Teamarbeit, Wettbewerb und das Verfolgen von Zielen. Es zeigt, wie Sie mit anderen zusammenarbeiten und konkurrieren.",
    olumlu: ["Teamarbeit", "Ziele", "Wettbewerb", "Zusammenarbeit", "Erfolg"],
    olumsuz: ["Übermäßiger Wettbewerb", "Konflikte im Team", "Druck"],
    tavsiye: "Arbeiten Sie mit anderen zusammen. Gemeinsam sind Sie stärker."
  },
  "schiff": {
    baslik: "Schiff",
    icon: "🚢",
    anlam: "Lebensreise und emotionale Navigation",
    detay: "Ein Schiff symbolisiert Ihre Reise durchs Leben und wie Sie durch emotionale Gewässer navigieren. Der Zustand des Schiffes und des Meeres beeinflussen die Deutung.",
    olumlu: ["Reise", "Navigation", "Abenteuer", "Fortschritt", "Stabilität"],
    olumsuz: ["Unsicherheit", "Stürme", "Orientierungsverlust", "Sinken"],
    tavsiye: "Vertrauen Sie Ihrer Navigationsfähigkeit. Sie können durch alle Gewässer segeln."
  },
  "see": {
    baslik: "See",
    icon: "🏞️",
    anlam: "Innere Ruhe oder verborgene Tiefen",
    detay: "Ein See symbolisiert innere Ruhe, Reflexion oder verborgene emotionale Tiefen. Ein klarer See zeigt Frieden, ein trüber See Verwirrung.",
    olumlu: ["Innere Ruhe", "Reflexion", "Klarheit", "Meditation", "Frieden"],
    olumsuz: ["Stagnation", "Verborgene Tiefen", "Trübung", "Isolation"],
    tavsiye: "Nehmen Sie sich Zeit für Reflexion. Schauen Sie in Ihre inneren Tiefen."
  },
  "rose": {
    baslik: "Rose",
    icon: "🌹",
    anlam: "Liebe, Schönheit und Leidenschaft",
    detay: "Die Rose ist das ultimative Symbol für Liebe und Schönheit. Rote Rosen symbolisieren Leidenschaft, weiße Rosen Reinheit, gelbe Rosen Freundschaft.",
    olumlu: ["Liebe", "Schönheit", "Leidenschaft", "Romantik", "Wertschätzung"],
    olumsuz: ["Dornen", "Schmerz", "Vergänglichkeit"],
    tavsiye: "Öffnen Sie sich für Liebe. Akzeptieren Sie sowohl die Schönheit als auch die Dornen."
  },
  "sonne": {
    baslik: "Sonne",
    icon: "☀️",
    anlam: "Lebenskraft und Bewusstsein",
    detay: "Die Sonne symbolisiert Lebenskraft, Bewusstsein und männliche Energie. Sie repräsentiert Klarheit, Wärme und Vitalität.",
    olumlu: ["Lebenskraft", "Klarheit", "Erfolg", "Bewusstsein", "Wärme", "Vitalität"],
    olumsuz: ["Überhitzung", "Ausbrennen", "Übermäßiges Ego"],
    tavsiye: "Tanken Sie Sonnenlicht. Lassen Sie Ihr inneres Licht strahlen."
  },
  "nacht": {
    baslik: "Nacht",
    icon: "🌃",
    anlam: "Unbewusstes und Geheimnisse",
    detay: "Die Nacht symbolisiert das Unbewusste, Geheimnisse und verborgene Aspekte. Sie kann Angst oder Mysterium repräsentieren.",
    olumlu: ["Mysterium", "Ruhe", "Innenschau", "Träume", "Intuition"],
    olumsuz: ["Angst", "Dunkelheit", "Unbekanntes", "Verborgenheit"],
    tavsiye: "Fürchten Sie sich nicht vor der Dunkelheit. Sie birgt auch Weisheit."
  },
  "schwanger": {
    baslik: "Schwanger",
    icon: "🤰",
    anlam: "Neue Ideen oder Projekte",
    detay: "Schwanger zu sein symbolisiert, dass etwas Neues in Ihnen wächst - eine Idee, ein Projekt oder ein Aspekt Ihrer Persönlichkeit.",
    olumlu: ["Kreativität", "Potenzial", "Wachstum", "Neuanfang", "Fruchtbarkeit"],
    olumsuz: ["Angst vor Verantwortung", "Überforderung", "Unsicherheit"],
    tavsiye: "Pflegen Sie, was in Ihnen wächst. Seien Sie geduldig mit dem Prozess."
  },
  "krankenhaus": {
    baslik: "Krankenhaus",
    icon: "🏥",
    anlam: "Heilung und Transformation",
    detay: "Ein Krankenhaus symbolisiert Heilung, Transformation oder das Bedürfnis nach Pflege. Es kann auch auf Verletzlichkeit hinweisen.",
    olumlu: ["Heilung", "Pflege", "Transformation", "Genesung", "Unterstützung"],
    olumsuz: ["Krankheit", "Verletzlichkeit", "Angst", "Hilflosigkeit"],
    tavsiye: "Erlauben Sie Heilung. Nehmen Sie Hilfe an, wenn Sie sie brauchen."
  },
  "tier": {
    baslik: "Tier",
    icon: "🦁",
    anlam: "Instinkte und natürliche Impulse",
    detay: "Tiere repräsentieren Ihre Instinkte, natürlichen Impulse und verschiedene Aspekte Ihrer Persönlichkeit. Die Art des Tieres ist wichtig.",
    olumlu: ["Instinkte", "Natürlichkeit", "Kraft", "Freiheit", "Verbindung zur Natur"],
    olumsuz: ["Wilde Impulse", "Unkontrollierte Instinkte", "Angst"],
    tavsiye: "Ehren Sie Ihre Instinkte. Finden Sie Balance zwischen Zivilisation und Natur."
  },
  "dieb": {
    baslik: "Dieb",
    icon: "🥷",
    anlam: "Verlust oder Vertrauensbruch",
    detay: "Ein Dieb symbolisiert Angst vor Verlust, Vertrauensbruch oder das Gefühl, dass Ihnen etwas genommen wird - Energie, Zeit oder Ressourcen.",
    olumlu: ["Bewusstsein", "Schutz", "Wachsamkeit"],
    olumsuz: ["Verlust", "Vertrauensbruch", "Verletzung", "Angst"],
    tavsiye: "Schützen Sie, was Ihnen wichtig ist. Setzen Sie Grenzen."
  },
  "licht": {
    baslik: "Licht",
    icon: "💡",
    anlam: "Erleuchtung und Klarheit",
    detay: "Licht symbolisiert Erleuchtung, Klarheit, Bewusstsein und Hoffnung. Es zeigt den Weg in der Dunkelheit.",
    olumlu: ["Erleuchtung", "Klarheit", "Hoffnung", "Bewusstsein", "Wahrheit", "Führung"],
    olumsuz: ["Blendung", "Überwältigung durch Wahrheit"],
    tavsiye: "Folgen Sie dem Licht. Suchen Sie Klarheit und Wahrheit."
  },
  "fluss": {
    baslik: "Fluss",
    icon: "🏞️",
    anlam: "Lebensfluss und Veränderung",
    detay: "Ein Fluss symbolisiert den Fluss des Lebens, Zeit und Veränderung. Mit dem Fluss zu gehen zeigt Akzeptanz, gegen den Fluss Widerstand.",
    olumlu: ["Fluss", "Veränderung", "Bewegung", "Loslassen", "Natürlicher Fortschritt"],
    olumsuz: ["Unkontrolliertes Treiben", "Überwältigung", "Orientierungsverlust"],
    tavsiye: "Fließen Sie mit dem Leben. Widersetzen Sie sich nicht der Veränderung."
  },
  "kuh": {
    baslik: "Kuh",
    icon: "🐄",
    anlam: "Fülle und Mütterlichkeit",
    detay: "Die Kuh symbolisiert Fülle, Nährung, Mütterlichkeit und Geduld. Sie repräsentiert materielle und emotionale Versorgung.",
    olumlu: ["Fülle", "Nährung", "Geduld", "Mütterlichkeit", "Wohlstand"],
    olumsuz: ["Trägheit", "Passivität", "Übermäßige Abhängigkeit"],
    tavsiye: "Seien Sie dankbar für Fülle. Teilen Sie Ihre Ressourcen."
  },
  "nadel": {
    baslik: "Nadel",
    icon: "📌",
    anlam: "Heilung oder kleine Schmerzen",
    detay: "Eine Nadel kann Heilung (Akupunktur), kleine Schmerzen oder die Notwendigkeit symbolisieren, Dinge zusammenzufügen.",
    olumlu: ["Heilung", "Reparatur", "Präzision", "Zusammenfügen"],
    olumsuz: ["Schmerz", "Verletzung", "Stiche", "Unbehagen"],
    tavsiye: "Manchmal ist ein kleiner Schmerz notwendig für Heilung."
  },
  "blut": {
    baslik: "Blut",
    icon: "🩸",
    anlam: "Lebenskraft und Opfer",
    detay: "Blut symbolisiert Lebenskraft, Vitalität, Familienbande oder Opfer. Es kann auch Verletzung oder Verlust repräsentieren.",
    olumlu: ["Lebenskraft", "Vitalität", "Familienbande", "Leidenschaft"],
    olumsuz: ["Verletzung", "Verlust", "Opfer", "Trauma"],
    tavsiye: "Ehren Sie Ihre Lebenskraft. Heilen Sie alte Wunden."
  },
  "tür": {
    baslik: "Tür",
    icon: "🚪",
    anlam: "Möglichkeiten und Übergänge",
    detay: "Eine Tür symbolisiert Möglichkeiten, Übergänge und neue Wege. Eine offene Tür zeigt Chancen, eine geschlossene Tür Hindernisse.",
    olumlu: ["Möglichkeiten", "Übergänge", "Neue Wege", "Chancen"],
    olumsuz: ["Hindernisse", "Verschlossene Wege", "Angst vor dem Unbekannten"],
    tavsiye: "Öffnen Sie Türen. Seien Sie mutig, neue Wege zu gehen."
  },
  "katze": {
    baslik: "Katze",
    icon: "🐱",
    anlam: "Unabhängigkeit und Weiblichkeit",
    detay: "Die Katze symbolisiert Unabhängigkeit, Weiblichkeit, Intuition und Mysterium. Sie repräsentiert auch Flexibilität und Anmut.",
    olumlu: ["Unabhängigkeit", "Intuition", "Flexibilität", "Anmut", "Mysterium"],
    olumsuz: ["Distanz", "Unberechenbarkeit", "Egoismus"],
    tavsiye: "Ehren Sie Ihre Unabhängigkeit. Vertrauen Sie Ihrer Intuition."
  },
  "hund": {
    baslik: "Hund",
    icon: "🐕",
    anlam: "Treue und Freundschaft",
    detay: "Der Hund symbolisiert Treue, Freundschaft, Schutz und bedingungslose Liebe. Er repräsentiert auch Instinkte und Loyalität.",
    olumlu: ["Treue", "Freundschaft", "Schutz", "Bedingungslose Liebe", "Loyalität"],
    olumsuz: ["Übermäßige Abhängigkeit", "Unterwürfigkeit", "Aggression"],
    tavsiye: "Seien Sie loyal, aber nicht unterwürfig. Schützen Sie, was Ihnen wichtig ist."
  },
  "vogel": {
    baslik: "Vogel",
    icon: "🐦",
    anlam: "Freiheit und Spiritualität",
    detay: "Vögel symbolisieren Freiheit, Spiritualität, Transzendenz und Botschaften. Die Art des Vogels beeinflusst die Deutung.",
    olumlu: ["Freiheit", "Spiritualität", "Perspektive", "Botschaften", "Transzendenz"],
    olumsuz: ["Flucht", "Unrealistische Erwartungen", "Bodenverlust"],
    tavsiye: "Fliegen Sie hoch, aber vergessen Sie nicht zu landen."
  },
  "verfolgt-werden": {
    baslik: "Verfolgt Werden",
    icon: "🏃‍♂️",
    anlam: "Vermeidung und Ängste",
    detay: "Verfolgt zu werden ist einer der häufigsten Träume und symbolisiert Vermeidung von Problemen, Ängsten oder Aspekten von sich selbst.",
    olumlu: ["Bewusstsein", "Motivation zur Veränderung", "Überlebensinstinkt"],
    olumsuz: ["Vermeidung", "Angst", "Stress", "Ungelöste Probleme"],
    tavsiye: "Stellen Sie sich dem, wovor Sie fliehen. Konfrontation bringt Befreiung."
  },
  "lampe": {
    baslik: "Lampe",
    icon: "🪔",
    anlam: "Erleuchtung und Hoffnung",
    detay: "Eine Lampe symbolisiert Erleuchtung, Hoffnung, Führung und Weisheit. Sie bringt Licht in die Dunkelheit.",
    olumlu: ["Erleuchtung", "Hoffnung", "Führung", "Weisheit", "Klarheit"],
    olumsuz: ["Erlöschen", "Dunkelheit", "Orientierungsverlust"],
    tavsiye: "Halten Sie Ihr inneres Licht am Brennen. Seien Sie ein Licht für andere."
  },
  "labyrinth": {
    baslik: "Labyrinth",
    icon: "🌀",
    anlam: "Verwirrung und Suche",
    detay: "Ein Labyrinth symbolisiert Verwirrung, die Suche nach dem Weg oder eine komplexe Situation. Es kann auch spirituelle Reise repräsentieren.",
    olumlu: ["Spirituelle Reise", "Selbstfindung", "Geduld", "Prozess"],
    olumsuz: ["Verwirrung", "Orientierungsverlust", "Komplexität", "Frustration"],
    tavsiye: "Vertrauen Sie dem Prozess. Jeder Weg im Labyrinth führt zum Zentrum."
  },
  "treppe": {
    baslik: "Treppe",
    icon: "🪜",
    anlam: "Fortschritt und Entwicklung",
    detay: "Eine Treppe symbolisiert Fortschritt, Entwicklung und Aufstieg. Hochgehen zeigt Fortschritt, runtergehen Rückschritt oder Abstieg ins Unbewusste.",
    olumlu: ["Fortschritt", "Aufstieg", "Entwicklung", "Ziele erreichen"],
    olumsuz: ["Schwierigkeiten", "Rückschritt", "Mühe", "Hindernisse"],
    tavsiye: "Nehmen Sie eine Stufe nach der anderen. Fortschritt braucht Zeit."
  },
  "grab": {
    baslik: "Grab",
    icon: "⚰️",
    anlam: "Ende und Transformation",
    detay: "Ein Grab symbolisiert Ende, Transformation, Loslassen oder die Konfrontation mit Sterblichkeit. Es ist nicht unbedingt negativ.",
    olumlu: ["Transformation", "Loslassen", "Neuanfang", "Akzeptanz"],
    olumsuz: ["Tod", "Ende", "Verlust", "Angst"],
    tavsiye: "Akzeptieren Sie Enden. Sie machen Platz für Neuanfänge."
  },
  "engel": {
    baslik: "Engel",
    icon: "👼",
    anlam: "Schutz und spirituelle Führung",
    detay: "Ein Engel symbolisiert Schutz, spirituelle Führung, göttliche Botschaften und Hoffnung. Es ist ein sehr positives Symbol.",
    olumlu: ["Schutz", "Führung", "Hoffnung", "Göttliche Botschaften", "Segen"],
    olumsuz: ["Unrealistische Erwartungen", "Passivität"],
    tavsiye: "Vertrauen Sie der göttlichen Führung. Sie sind geschützt."
  },
  "kerze": {
    baslik: "Kerze",
    icon: "🕯️",
    anlam: "Hoffnung und Erleuchtung",
    detay: "Eine Kerze symbolisiert Hoffnung, Erleuchtung, Spiritualität und das innere Licht. Eine brennende Kerze zeigt Hoffnung, eine erlöschende Kerze Verlust.",
    olumlu: ["Hoffnung", "Erleuchtung", "Spiritualität", "Inneres Licht", "Meditation"],
    olumsuz: ["Erlöschen", "Verlust der Hoffnung", "Dunkelheit"],
    tavsiye: "Halten Sie Ihre Hoffnung am Leben. Seien Sie ein Licht in der Dunkelheit."
  },
  "schule": {
    baslik: "Schule",
    icon: "🏫",
    anlam: "Lernen und Lebenslektionen",
    detay: "Schule symbolisiert Lernen, Lebenslektionen, Prüfungen oder unverarbeitete Erfahrungen aus der Vergangenheit.",
    olumlu: ["Lernen", "Wachstum", "Vorbereitung", "Entwicklung"],
    olumsuz: ["Prüfungsangst", "Druck", "Unvorbereitet sein", "Alte Ängste"],
    tavsiye: "Das Leben ist eine Schule. Jede Erfahrung ist eine Lektion."
  },
  "wald": {
    baslik: "Wald",
    icon: "🌲",
    anlam: "Unbewusstes und Geheimnisse",
    detay: "Der Wald symbolisiert das Unbewusste, Geheimnisse, Transformation oder das Unbekannte. Er kann beängstigend oder heilend sein.",
    olumlu: ["Natur", "Heilung", "Transformation", "Mysterium", "Rückzug"],
    olumsuz: ["Verlorensein", "Angst", "Dunkelheit", "Unbekanntes"],
    tavsiye: "Erkunden Sie Ihren inneren Wald. Fürchten Sie sich nicht vor dem Unbekannten."
  },
  "bus": {
    baslik: "Bus",
    icon: "🚌",
    anlam: "Gemeinsame Reise und Richtung",
    detay: "Ein Bus symbolisiert eine gemeinsame Reise, kollektive Richtung oder das Gefühl, mit anderen auf demselben Weg zu sein.",
    olumlu: ["Gemeinschaft", "Gemeinsame Richtung", "Soziale Verbindung", "Fortschritt"],
    olumsuz: ["Mangel an Kontrolle", "Abhängigkeit von anderen", "Falsche Richtung"],
    tavsiye: "Manchmal ist es gut, mit anderen zu reisen. Aber wählen Sie die richtige Richtung."
  },
  "geld": {
    baslik: "Geld",
    icon: "💰",
    anlam: "Wert und Selbstwert",
    detay: "Geld symbolisiert nicht nur materiellen Wert, sondern auch Selbstwert, Macht und Ressourcen. Geld zu finden zeigt Selbstentdeckung.",
    olumlu: ["Wert", "Selbstwert", "Ressourcen", "Erfolg", "Fülle"],
    olumsuz: ["Gier", "Mangel", "Sorgen", "Materialismus"],
    tavsiye: "Erkennen Sie Ihren wahren Wert. Geld ist nur ein Symbol."
  },
  "polizei": {
    baslik: "Polizei",
    icon: "👮",
    anlam: "Autorität und Regeln",
    detay: "Polizei symbolisiert Autorität, Regeln, Gewissen oder Angst vor Bestrafung. Sie kann auch Schutz repräsentieren.",
    olumlu: ["Schutz", "Ordnung", "Gerechtigkeit", "Sicherheit"],
    olumsuz: ["Autoritätskonflikte", "Schuldgefühle", "Angst vor Bestrafung", "Einschränkung"],
    tavsiye: "Folgen Sie Ihrem inneren Gewissen. Finden Sie Balance zwischen Freiheit und Verantwortung."
  },
  "fenster": {
    baslik: "Fenster",
    icon: "🪟",
    anlam: "Perspektive und Möglichkeiten",
    detay: "Ein Fenster symbolisiert Perspektive, Möglichkeiten oder wie Sie die Welt sehen. Ein offenes Fenster zeigt Offenheit, ein geschlossenes Begrenzung.",
    olumlu: ["Perspektive", "Möglichkeiten", "Klarheit", "Offenheit", "Neue Sichtweisen"],
    olumsuz: ["Begrenzung", "Barrieren", "Nur Beobachten", "Distanz"],
    tavsiye: "Öffnen Sie Ihre Fenster. Lassen Sie frische Perspektiven herein."
  },
  "wind": {
    baslik: "Wind",
    icon: "💨",
    anlam: "Veränderung und Kommunikation",
    detay: "Wind symbolisiert Veränderung, Kommunikation, Geist und unsichtbare Kräfte. Starker Wind zeigt große Veränderungen.",
    olumlu: ["Veränderung", "Erneuerung", "Kommunikation", "Freiheit", "Bewegung"],
    olumsuz: ["Chaos", "Unkontrollierte Veränderung", "Instabilität"],
    tavsiye: "Lassen Sie den Wind der Veränderung wehen. Seien Sie flexibel."
  },
  "bild": {
    baslik: "Bild",
    icon: "🖼️",
    anlam: "Erinnerungen und Selbstbild",
    detay: "Ein Bild symbolisiert Erinnerungen, Selbstbild oder wie Sie gesehen werden möchten. Was das Bild zeigt, ist wichtig.",
    olumlu: ["Erinnerungen", "Selbstausdruck", "Kreativität", "Perspektive"],
    olumsuz: ["Fixierung auf Vergangenheit", "Verzerrtes Selbstbild", "Oberflächlichkeit"],
    tavsiye: "Schauen Sie über die Oberfläche hinaus. Wer sind Sie wirklich?"
  },
  "tod": {
    baslik: "Tod",
    icon: "💀",
    anlam: "Ende und Neuanfang",
    detay: "Tod symbolisiert normalerweise nicht den physischen Tod, sondern Ende, Transformation und Neuanfang. Es ist ein Zeichen großer Veränderung.",
    olumlu: ["Transformation", "Neuanfang", "Loslassen", "Erneuerung", "Befreiung"],
    olumsuz: ["Angst vor Veränderung", "Verlust", "Ende", "Trauer"],
    tavsiye: "Akzeptieren Sie Enden. Sie sind notwendig für Neuanfänge."
  },
  "toter": {
    baslik: "Toter",
    icon: "👻",
    anlam: "Vergangenheit und Transformation",
    detay: "Einen Toten zu sehen symbolisiert Ihre Beziehung zur Vergangenheit, unverarbeitete Trauer oder Botschaften aus dem Unbewussten.",
    olumlu: ["Botschaften", "Abschluss", "Transformation", "Erinnerung"],
    olumsuz: ["Unverarbeitete Trauer", "Feststecken in Vergangenheit", "Angst"],
    tavsiye: "Finden Sie Frieden mit der Vergangenheit. Ehren Sie Erinnerungen, aber leben Sie im Jetzt."
  },
  "kuss": {
    baslik: "Kuss",
    icon: "💋",
    anlam: "Zuneigung und Verbindung",
    detay: "Ein Kuss symbolisiert Zuneigung, Verbindung, Akzeptanz oder den Wunsch nach Nähe. Mit wem Sie küssen, ist wichtig.",
    olumlu: ["Liebe", "Zuneigung", "Verbindung", "Akzeptanz", "Intimität"],
    olumsuz: ["Unerwiderte Gefühle", "Verrat", "Falsche Intimität"],
    tavsiye: "Seien Sie offen für Zuneigung. Geben und empfangen Sie Liebe."
  },
  "wasser": {
    baslik: "Wasser",
    icon: "💧",
    anlam: "Emotionen und Unterbewusstsein",
    detay: "Wasser ist eines der mächtigsten Traumsymbole und repräsentiert Emotionen, das Unbewusste und Reinigung. Der Zustand des Wassers zeigt Ihren emotionalen Zustand.",
    olumlu: ["Emotionale Reinigung", "Intuition", "Heilung", "Fülle", "Fluss"],
    olumsuz: ["Überwältigung", "Ertrinken", "Emotionale Turbulenzen", "Unsicherheit"],
    tavsiye: "Fließen Sie mit Ihren Emotionen. Unterdrücken Sie sie nicht."
  },
  "haar": {
    baslik: "Haar",
    icon: "💇",
    anlam: "Stärke und Identität",
    detay: "Haar symbolisiert Stärke, Identität, Vitalität und Selbstausdruck. Haare zu verlieren zeigt Kontrollverlust, neue Frisur Veränderung.",
    olumlu: ["Stärke", "Identität", "Vitalität", "Selbstausdruck", "Attraktivität"],
    olumsuz: ["Kontrollverlust", "Identitätskrise", "Alterung", "Schwäche"],
    tavsiye: "Ihre Stärke liegt nicht nur in Ihrem Äußeren. Wahre Kraft kommt von innen."
  },
  "waffe": {
    baslik: "Waffe",
    icon: "🔫",
    anlam: "Aggression oder Verteidigung",
    detay: "Eine Waffe symbolisiert Aggression, Verteidigung, Macht oder Angst vor Verletzung. Sie kann auch Ihre Fähigkeit repräsentieren, sich zu schützen.",
    olumlu: ["Schutz", "Macht", "Verteidigung", "Durchsetzungsvermögen"],
    olumsuz: ["Aggression", "Gewalt", "Angst", "Gefahr", "Konflikt"],
    tavsiye: "Schützen Sie sich, aber greifen Sie nicht an. Finden Sie friedliche Lösungen."
  },
  "gelb": {
    baslik: "Gelb",
    icon: "🟡",
    anlam: "Freude und Intellekt",
    detay: "Gelb symbolisiert Freude, Optimismus, Intellekt und Kreativität. Es ist die Farbe der Sonne und des Bewusstseins.",
    olumlu: ["Freude", "Optimismus", "Intellekt", "Kreativität", "Klarheit"],
    olumsuz: ["Übermäßige Analyse", "Angst", "Feigheit"],
    tavsiye: "Bringen Sie Sonnenschein in Ihr Leben. Denken Sie positiv."
  },
  "schwarz": {
    baslik: "Schwarz",
    icon: "⚫",
    anlam: "Geheimnis und Unbewusstes",
    detay: "Schwarz symbolisiert das Unbewusste, Geheimnisse, Mysterium oder das Unbekannte. Es kann auch Eleganz oder Tod repräsentieren.",
    olumlu: ["Mysterium", "Tiefe", "Eleganz", "Schutz", "Potenzial"],
    olumsuz: ["Angst", "Dunkelheit", "Depression", "Unbekanntes", "Tod"],
    tavsiye: "Fürchten Sie sich nicht vor der Dunkelheit. Sie birgt auch Weisheit und Potenzial."
  },
  "zug": {
    baslik: "Zug",
    icon: "🚂",
    anlam: "Lebensreise und Schicksal",
    detay: "Ein Zug symbolisiert Ihre Lebensreise auf festgelegten Gleisen. Er repräsentiert Schicksal, Richtung und kollektive Reise.",
    olumlu: ["Fortschritt", "Richtung", "Gemeinschaft", "Zuverlässigkeit"],
    olumsuz: ["Mangel an Kontrolle", "Festgelegte Wege", "Verpasste Züge", "Schicksal"],
    tavsiye: "Manchmal müssen Sie dem Weg folgen. Aber Sie können auch aussteigen und einen neuen Zug nehmen."
  },
  "huhn": {
    baslik: "Huhn",
    icon: "🐔",
    anlam: "Fruchtbarkeit und Angst",
    detay: "Ein Huhn symbolisiert Fruchtbarkeit, Häuslichkeit oder Feigheit. Eier repräsentieren Potenzial.",
    olumlu: ["Fruchtbarkeit", "Häuslichkeit", "Fürsorge", "Potenzial"],
    olumsuz: ["Feigheit", "Angst", "Kleinlichkeit"],
    tavsiye: "Seien Sie mutig. Überwinden Sie Ihre Ängste."
  },
  "erde": {
    baslik: "Erde",
    icon: "🌍",
    anlam: "Stabilität und Grundlage",
    detay: "Erde symbolisiert Stabilität, Grundlage, Praktikalität und Verbindung zur Natur. Sie repräsentiert das Fundament Ihres Lebens.",
    olumlu: ["Stabilität", "Grundlage", "Praktikalität", "Natur", "Erdung"],
    olumsuz: ["Stagnation", "Schwere", "Materialismus"],
    tavsiye: "Bleiben Sie geerdet. Bauen Sie auf solidem Fundament."
  },
  "flugzeug": {
    baslik: "Flugzeug",
    icon: "✈️",
    anlam: "Hohe Ziele und Ambitionen",
    detay: "Ein Flugzeug symbolisiert hohe Ziele, Ambitionen, schnellen Fortschritt oder Reisen. Es zeigt Ihren Wunsch, hoch zu fliegen.",
    olumlu: ["Hohe Ziele", "Ambitionen", "Fortschritt", "Reisen", "Perspektive"],
    olumsuz: ["Absturzangst", "Kontrollverlust", "Unrealistische Ziele"],
    tavsiye: "Fliegen Sie hoch, aber sicher. Vertrauen Sie dem Prozess."
  },
  "fliegen": {
    baslik: "Fliegen",
    icon: "🕊️",
    anlam: "Freiheit und Transzendenz",
    detay: "Fliegen ist einer der positivsten Träume und symbolisiert Freiheit, Transzendenz, Überwindung von Grenzen und spirituellen Aufstieg.",
    olumlu: ["Freiheit", "Transzendenz", "Überwindung", "Spiritualität", "Erfolg"],
    olumsuz: ["Realitätsverlust", "Flucht", "Übermut"],
    tavsiye: "Genießen Sie Ihre Freiheit. Aber vergessen Sie nicht zu landen."
  },
  "schlafen": {
    baslik: "Schlafen",
    icon: "😴",
    anlam: "Ruhe und Vermeidung",
    detay: "Im Traum zu schlafen (Meta-Traum) symbolisiert Ruhe, Vermeidung oder das Bedürfnis nach Rückzug. Es kann auch Bewusstseinsebenen repräsentieren.",
    olumlu: ["Ruhe", "Erholung", "Innenschau", "Meditation"],
    olumsuz: ["Vermeidung", "Flucht", "Bewusstlosigkeit", "Passivität"],
    tavsiye: "Ruhe ist wichtig, aber vermeiden Sie nicht das Leben. Finden Sie Balance."
  },
  "schlange": {
    baslik: "Schlange",
    icon: "🐍",
    anlam: "Transformation und verborgene Feinde",
    detay: "Die Schlange ist ein mächtiges Symbol für Transformation, Heilung, Weisheit oder verborgene Gefahren. Sie repräsentiert auch Kundalini-Energie.",
    olumlu: ["Transformation", "Heilung", "Weisheit", "Erneuerung", "Kundalini"],
    olumsuz: ["Verborgene Feinde", "Verrat", "Angst", "Gift"],
    tavsiye: "Fürchten Sie sich nicht vor Transformation. Die Schlange häutet sich, um zu wachsen."
  },
  "regen": {
    baslik: "Regen",
    icon: "🌧️",
    anlam: "Reinigung und emotionale Befreiung",
    detay: "Regen symbolisiert Reinigung, Segen, emotionale Befreiung und Erneuerung. Er wäscht das Alte weg und bringt Frische.",
    olumlu: ["Reinigung", "Segen", "Erneuerung", "Emotionale Befreiung", "Wachstum"],
    olumsuz: ["Traurigkeit", "Melancholie", "Überschwemmung"],
    tavsiye: "Lassen Sie den Regen kommen. Er reinigt und erneuert."
  },
  "feuer": {
    baslik: "Feuer",
    icon: "🔥",
    anlam: "Leidenschaft und Zerstörung",
    detay: "Feuer symbolisiert Leidenschaft, Transformation, Zerstörung oder Reinigung. Es kann kreativ oder destruktiv sein.",
    olumlu: ["Leidenschaft", "Transformation", "Energie", "Reinigung", "Erleuchtung"],
    olumsuz: ["Zerstörung", "Wut", "Unkontrollierte Emotionen", "Gefahr"],
    tavsiye: "Nutzen Sie Ihr Feuer weise. Es kann wärmen oder verbrennen."
  },
  "weg": {
    baslik: "Weg",
    icon: "🛤️",
    anlam: "Lebensrichtung und Entscheidungen",
    detay: "Ein Weg symbolisiert Ihre Lebensrichtung, Entscheidungen und Reise. Ein klarer Weg zeigt Klarheit, ein verworrener Weg Verwirrung.",
    olumlu: ["Richtung", "Klarheit", "Fortschritt", "Reise", "Ziele"],
    olumsuz: ["Verwirrung", "Orientierungsverlust", "Hindernisse", "Umwege"],
    tavsiye: "Wählen Sie Ihren Weg bewusst. Jeder Weg führt irgendwohin."
  },
  "schwimmen": {
    baslik: "Schwimmen",
    icon: "🏊",
    anlam: "Emotionale Bewältigung",
    detay: "Schwimmen symbolisiert, wie Sie mit Emotionen umgehen. Leicht schwimmen zeigt emotionale Kompetenz, Schwierigkeiten zeigen Überforderung.",
    olumlu: ["Emotionale Kompetenz", "Bewältigung", "Fluss", "Anpassung"],
    olumsuz: ["Emotionale Überforderung", "Kampf", "Ertrinken"],
    tavsiye: "Lernen Sie, mit Ihren Emotionen zu schwimmen. Kämpfen Sie nicht gegen sie."
  },
  "zucker": {
    baslik: "Zucker",
    icon: "🍬",
    anlam: "Süße und Vergnügen",
    detay: "Zucker symbolisiert Süße, Vergnügen, Belohnung oder das Bedürfnis nach Trost. Zu viel Zucker kann auf Überindulgenz hinweisen.",
    olumlu: ["Freude", "Vergnügen", "Belohnung", "Süße", "Genuss"],
    olumsuz: ["Überindulgenz", "Oberflächliche Freude", "Abhängigkeit"],
    tavsiye: "Genießen Sie die Süße des Lebens, aber in Maßen."
  },
  "teufel": {
    baslik: "Teufel",
    icon: "😈",
    anlam: "Versuchung und Schatten",
    detay: "Der Teufel symbolisiert Versuchung, Ihr Schattenselbst, unterdrückte Wünsche oder Ängste. Er repräsentiert auch Ihre dunkle Seite.",
    olumlu: ["Konfrontation mit Schatten", "Ehrlichkeit über Wünsche", "Integration"],
    olumsuz: ["Versuchung", "Sucht", "Angst", "Schuldgefühle", "Unterdrückte Wünsche"],
    tavsiye: "Integrieren Sie Ihren Schatten. Verleugnen Sie Ihre dunkle Seite nicht."
  },
  "traube": {
    baslik: "Traube",
    icon: "🍇",
    anlam: "Fülle und Genuss",
    detay: "Trauben symbolisieren Fülle, Genuss, Fruchtbarkeit und Feier. Sie repräsentieren die Früchte Ihrer Arbeit.",
    olumlu: ["Fülle", "Genuss", "Fruchtbarkeit", "Feier", "Erfolg"],
    olumsuz: ["Überindulgenz", "Verschwendung"],
    tavsiye: "Ernten Sie die Früchte Ihrer Arbeit. Feiern Sie Ihren Erfolg."
  },
  "dampfer": {
    baslik: "Dampfer",
    icon: "🚢",
    anlam: "Emotionale Reise",
    detay: "Ein Dampfer symbolisiert eine emotionale Reise, Fortschritt durch emotionale Gewässer oder eine kollektive Reise.",
    olumlu: ["Fortschritt", "Stabilität", "Gemeinschaft", "Reise"],
    olumsuz: ["Langsamer Fortschritt", "Emotionale Schwere", "Sinken"],
    tavsiye: "Navigieren Sie durch emotionale Gewässer. Bleiben Sie stabil."
  },
  "abschied": {
    baslik: "Abschied",
    icon: "👋",
    anlam: "Ende und Loslassen",
    detay: "Abschied zu nehmen symbolisiert Ende, Loslassen, Übergang oder Veränderung. Es kann schmerzhaft, aber notwendig sein.",
    olumlu: ["Loslassen", "Neuanfang", "Akzeptanz", "Wachstum", "Transformation"],
    olumsuz: ["Verlust", "Trauer", "Schmerz", "Angst vor Veränderung"],
    tavsiye: "Lernen Sie loszulassen. Jeder Abschied ist auch ein Neuanfang."
  }
};

export const dynamicParams = true;

export function generateStaticParams() {
  return Object.keys(RUYA_VERILERI).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ruya = RUYA_VERILERI[slug];
  const canonicalUrl = `${BASE_URL}/ruya/${slug}`;

  if (!ruya) {
    return {
      title: "Traum nicht gefunden | SternenFeed",
      robots: { index: false, follow: false },
    };
  }

  const title = `${ruya.baslik} im Traum deuten | SternenFeed`;
  const description = `${ruya.anlam} ${ruya.tavsiye}`.slice(0, 160);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: { "de-DE": canonicalUrl },
    },
    openGraph: {
      type: "article",
      locale: "de_DE",
      url: canonicalUrl,
      title,
      description,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function RuyaDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ruya = RUYA_VERILERI[slug];

  if (!ruya) {
    notFound();
  }

  const aiDetail = await generateStaticDreamDetail({
    dreamTitle: ruya.baslik,
    dreamKeywords: ruya.anlam,
  });

  const detay = aiDetail?.detay ?? ruya.detay;
  const olumlu = aiDetail?.olumlu?.length ? aiDetail.olumlu : ruya.olumlu;
  const olumsuz = aiDetail?.olumsuz?.length ? aiDetail.olumsuz : ruya.olumsuz;
  const tavsiye = aiDetail?.tavsiye ?? ruya.tavsiye;

  return (
    <div style={{ background: "var(--theme-bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #ffffff 100%)",
          padding: "4rem 1rem",
        }}
      >
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <Link
            href="/ruya-tabirleri"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", textDecoration: "none" }}
          >
            ← Traumdeutung
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "rgba(129,140,248,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
              }}
            >
              {ruya.icon}
            </div>
            <div>
              <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#ffffff" }}>
                Im Traum {ruya.baslik}
              </h1>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", marginTop: "0.5rem" }}>
                {ruya.anlam}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İçerik */}
      <section style={{ padding: "2rem 1rem" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>

            {/* Detaylı Yorum */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>📖</span> Ausführliche Deutung
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.8, fontSize: "1.05rem" }}>{detay}</p>
            </div>

            {/* Olumlu Anlamlar */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>✅</span> Positive Bedeutungen
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {olumlu.map((item, i) => (
                  <li key={i} style={{ padding: "0.5rem 0", color: "#ffffff", fontSize: "0.95rem", borderBottom: i < olumlu.length - 1 ? "1px solid #1a0b2e" : "none" }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Olumsuz Anlamlar */}
            <div style={{ background: "#1a0b2e", borderRadius: "20px", padding: "1.5rem" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#991b1b", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>⚠️</span> Worauf du achten solltest
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {olumsuz.map((item, i) => (
                  <li key={i} style={{ padding: "0.5rem 0", color: "#b91c1c", fontSize: "0.95rem", borderBottom: i < olumsuz.length - 1 ? "1px solid #fecaca" : "none" }}>
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tavsiye */}
            <div style={{ background: "linear-gradient(135deg, #818cf815, #6366f115)", borderRadius: "20px", padding: "1.5rem", gridColumn: "1 / -1" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span>💡</span> Rat
              </h2>
              <p style={{ color: "#ffffff", lineHeight: 1.7 }}>{tavsiye}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Diğer Rüyalar */}
      <section style={{ padding: "2rem 1rem", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem", textAlign: "center" }}>
            Andere beliebte Träume
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {Object.entries(RUYA_VERILERI).filter(([key]) => key !== slug).slice(0, 4).map(([key, data]) => (
              <Link
                key={key}
                href={`/ruya/${key}`}
                style={{
                  padding: "0.75rem 1.25rem",
                  background: "#1a0b2e",
                  borderRadius: "12px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span>{data.icon}</span>
                <span style={{ color: "#ffffff", fontWeight: 500 }}>{data.baslik}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link
              href="/ruya/sozluk"
              style={{
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #818cf8, #6366f1)",
                color: "#ffffff",
                borderRadius: "9999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              📖 Gesamtes Traumlexikon
            </Link>
          </div>
        </div>
      </section>

      {/* Diğer Rüyalar - Yatay Scroll */}
      <section style={{ padding: "2rem 0", background: "#1a0b2e" }}>
        <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
            🌙 Weitere Traumdeutungen
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            padding: "0.5rem 1rem 1.5rem",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
          {Object.entries(RUYA_VERILERI)
            .filter(([key]) => key !== slug)
            .map(([key, data]) => (
              <Link
                key={key}
                href={`/ruya/${key}`}
                style={{
                  minWidth: "180px",
                  padding: "1.25rem",
                  background: "linear-gradient(135deg, #818cf810, #6366f110)",
                  borderRadius: "16px",
                  textDecoration: "none",
                  scrollSnapAlign: "start",
                  flexShrink: 0,
                  border: "1px solid #ffffff",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{data.icon}</div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.25rem" }}>
                  {data.baslik}
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#ffffff", lineHeight: 1.4 }}>
                  {data.anlam.slice(0, 50)}...
                </p>
              </Link>
            ))}
          <div style={{ minWidth: "1rem", flexShrink: 0 }} />
        </div>
      </section>
    </div>
  );
}
