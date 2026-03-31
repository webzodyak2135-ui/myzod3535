"use client";

import { ThemeProvider } from "@/contexts/theme-context";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CookieConsentBanner from "@/components/cookie-consent-banner";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <Footer />
      <CookieConsentBanner />
    </ThemeProvider>
  );
}
