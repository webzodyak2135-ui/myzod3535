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
  title: "Zodyaklı — Astroloji, Burçlar & Mistisizm",
  description:
    "Günlük burç yorumları, rüya tabirleri, astroloji testleri, gök gündemi ve ilişki rehberi. Kozmik bilgeliği keşfet.",
  keywords: [
    "burç yorumları",
    "astroloji",
    "rüya tabirleri",
    "burç uyumu",
    "günlük burç",
    "haftalık burç",
    "doğum haritası",
    "yükselen burç",
  ],
  authors: [{ name: "Zodyaklı" }],
  creator: "Zodyaklı",
  publisher: "Zodyaklı",
  metadataBase: new URL("https://zodyak.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://zodyak.com",
    siteName: "Zodyaklı",
    title: "Zodyaklı — Astroloji, Burçlar & Mistisizm",
    description:
      "Günlük burç yorumları, rüya tabirleri, astroloji testleri, gök gündemi ve ilişki rehberi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zodyaklı — Astroloji, Burçlar & Mistisizm",
    description:
      "Günlük burç yorumları, rüya tabirleri ve astroloji rehberi.",
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
    <html lang="tr" suppressHydrationWarning>
      <body className={`${notoSerif.variable} ${sourceSans.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
