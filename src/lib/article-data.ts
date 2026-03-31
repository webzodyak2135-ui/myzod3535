export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; alt: string }
  | { type: "quote"; text: string; author?: string };

export type ArticleEntry = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryHref: string;
  author: string;
  date: string;
  readTime: string;
  heroImage: string;
  content: ArticleBlock[];
  nextArticle?: {
    title: string;
    category: string;
    href: string;
    image: string;
  };
};

export const ARTICLES: readonly ArticleEntry[] = [
  {
    slug: "su-ruyasi",
    title: "Flugträume: Freiheit oder Flucht?",
    description:
      "Eine tiefgehende Traumdeutung zu Flugträumen: Freiheit, Kontrolle, Fluchtmuster und psychologische Hintergründe.",
    category: "Traumdeutung",
    categoryColor: "#818cf8",
    categoryHref: "/ruya",
    author: "SternenFeed Editör",
    date: "22. März 2025",
    readTime: "5 Min.",
    heroImage: "/img/hero-default.jpg",
    content: [
      {
        type: "paragraph",
        text: "Vom Fliegen zu träumen ist eines der ältesten und universellsten Traumthemen der Menschheit. Interkulturelle Forschungen zeigen, dass Menschen auf der ganzen Welt ähnliche Flugerfahrungen erleben. Aber was bedeutet dieser Traum?",
      },
      {
        type: "heading",
        text: "Freiheit und Kontrolle",
      },
      {
        type: "paragraph",
        text: "Flugträume werden meist mit dem Wunsch nach Freiheit, der Befreiung von Grenzen und dem Gewinn einer höheren Perspektive in Verbindung gebracht. Wenn du in deinem Traum leicht und mit Freude fliegst, zeigt dies normalerweise, dass du die Kontrolle über dein Leben hast und auf deine Ziele zusteuerst.",
      },
      {
        type: "image",
        src: "/img/hero-default.jpg",
        alt: "Mystisches Symbol",
      },
      {
        type: "heading",
        text: "Flucht und Angst",
      },
      {
        type: "paragraph",
        text: "Wenn du andererseits Schwierigkeiten beim Fliegen hast oder Angst vor dem Fallen verspürst, könnte dein Unterbewusstsein dir sagen, dass du versuchst, vor etwas zu fliehen. Höhenangst, Kontrollverlust oder die Last der Verantwortung zeigen sich in solchen Träumen.",
      },
      {
        type: "quote",
        text: "Im Traum zu fliegen ist die reinste Form des Wunsches der Seele, physische Grenzen zu überschreiten.",
        author: "Carl Jung",
      },
      {
        type: "paragraph",
        text: "Laut Jung ist der Flugtraum eine Reflexion des Versuchs des Individuums, sein unbewusstes Potenzial zu entdecken und Ego-Grenzen zu überschreiten. Diese Träume treten oft in kreativen Phasen oder vor großen Veränderungen auf.",
      },
    ],
    nextArticle: {
      title: "Wasserträume: Spiegel deiner Emotionen",
      category: "Traumdeutung",
      href: "/article/su-ruyasi",
      image: "/img/hero-default.jpg",
    },
  },
] as const;

export const ARTICLE_SLUGS = ARTICLES.map((article) => article.slug);

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}
