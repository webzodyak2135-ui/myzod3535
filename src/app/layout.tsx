import type { Metadata } from "next";
import { Noto_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/client-layout";

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SternenFeed — Astrologie, Sternzeichen & Mystik",
  description:
    "Tägliche Horoskope, Traumdeutung, Astrologie-Tests, kosmischer Kalender und Beziehungsratgeber. Entdecke kosmische Weisheit.",
  keywords: [
    "Horoskop",
    "Astrologie",
    "Traumdeutung",
    "Sternzeichen",
    "Sternzeichen-Kompatibilität",
    "Tageshoroskop",
    "Wochenhoroskop",
    "Geburtshoroskop",
    "Aszendent",
  ],
  authors: [{ name: "SternenFeed" }],
  creator: "SternenFeed",
  publisher: "SternenFeed",
  metadataBase: new URL("https://zodyak.com"),
  icons: {
    icon: "/img/newfavicon.png",
    shortcut: "/img/newfavicon.png",
    apple: "/img/newfavicon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://zodyak.com",
    siteName: "SternenFeed",
    title: "SternenFeed — Astrologie, Sternzeichen & Mystik",
    description:
      "Tägliche Horoskope, Traumdeutung, Astrologie-Tests, kosmischer Kalender und Beziehungsratgeber.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SternenFeed — Astrologie, Sternzeichen & Mystik",
    description:
      "Tägliche Horoskope, Traumdeutung und Astrologie-Ratgeber.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${notoSerif.variable} ${sourceSans.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
