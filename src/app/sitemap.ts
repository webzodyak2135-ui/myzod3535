import type { MetadataRoute } from "next";
import { generateStaticParams as generateDreamStaticParams } from "./ruya/[slug]/page";
import { ARTICLE_SLUGS } from "@/lib/article-slugs";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sternenfeed.de";

const STATIC_ROUTES = [
  "",
  "/blog",
  "/blog/haberler",
  "/burclar",
  "/burclar/gunluk",
  "/burclar/haftalik",
  "/burclar/aylik",
  "/burclar/uyum",
  "/burclar/yukselen",
  "/burclar/dogum-haritasi",
  "/gok-gundemi",
  "/gok/ay-takvimi",
  "/gok/ay-tutulmasi",
  "/gok/gezegenler",
  "/gok/gunes-tutulmasi",
  "/gok/haberler",
  "/gok/retrograde",
  "/ruya-tabirleri",
  "/ruya/sozluk",
  "/ruya/ask",
  "/ruya/su",
  "/ruya/ucma",
  "/ruya/kabus",
  "/ruya/renk",
  "/ruya/renkler",
  "/ruya/yorumla",
  "/iliskiler",
  "/iliskiler/ask",
  "/iliskiler/ask-burclari",
  "/iliskiler/ayrilik",
  "/iliskiler/evlilik",
  "/iliskiler/flort",
  "/iliskiler/soulmate",
  "/iliskiler/cift-uyumu",
  "/iliskiler/burc-uyumu",
  "/testler",
  "/testler/ask-uyum",
  "/testler/burc",
  "/testler/ask-uyumu",
  "/testler/gecmis-yasam",
  "/testler/kariyer",
  "/testler/kisilik",
  "/testler/numeroloji",
  "/testler/ruhsal",
  "/hakkimizda",
  "/iletisim",
  "/kullanim-sartlari",
  "/impressum",
  "/datenschutz",
];

const ZODIAC_SLUGS = [
  "koc",
  "boga",
  "ikizler",
  "yengec",
  "aslan",
  "basak",
  "terazi",
  "akrep",
  "yay",
  "oglak",
  "kova",
  "balik",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const zodiacEntries: MetadataRoute.Sitemap = ZODIAC_SLUGS.map((slug) => ({
    url: `${BASE_URL}/burclar/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const dreamEntries: MetadataRoute.Sitemap = generateDreamStaticParams().map(({ slug }) => ({
    url: `${BASE_URL}/ruya/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const articleEntries: MetadataRoute.Sitemap = ARTICLE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/article/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticEntries, ...zodiacEntries, ...dreamEntries, ...articleEntries];
}
