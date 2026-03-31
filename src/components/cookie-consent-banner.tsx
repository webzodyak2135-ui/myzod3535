"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Script from "next/script";

type ConsentState = "accepted" | "rejected" | null;

const CONSENT_KEY = "sternenfeed_cookie_consent";
const OPEN_COOKIE_SETTINGS_EVENT = "sternenfeed-open-cookie-settings";

type ConsentModeValue = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function applyConsentMode(consent: ConsentState) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function (...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  const value: ConsentModeValue = consent === "accepted" ? "granted" : "denied";

  window.gtag("consent", "update", {
    ad_storage: value,
    analytics_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

export default function CookieConsentBanner() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [hydrated, setHydrated] = useState(false);

  const gaId = useMemo(() => process.env.NEXT_PUBLIC_GA_ID, []);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });

    const savedConsent = window.localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
      applyConsentMode(savedConsent);
    }

    const handleOpenCookieSettings = () => {
      window.localStorage.removeItem(CONSENT_KEY);
      setConsent(null);
      applyConsentMode("rejected");
    };

    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenCookieSettings);

    setHydrated(true);

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, handleOpenCookieSettings);
    };
  }, []);

  const handleConsent = (value: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    applyConsentMode(value);
  };

  const canLoadAnalytics = Boolean(gaId) && consent === "accepted";

  return (
    <>
      {canLoadAnalytics ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="sternenfeed-ga" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${gaId}', { anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {hydrated && consent === null ? (
        <div
          style={{
            position: "fixed",
            left: "1rem",
            right: "1rem",
            bottom: "1rem",
            zIndex: 1000,
            background: "#12081f",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "16px",
            padding: "1rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
            Wir verwenden Cookies fur Statistik und Funktionalitat. Analyse-Skripte werden erst nach
            deiner Einwilligung geladen. Details findest du in unserer{" "}
            <Link href="/datenschutz" style={{ color: "#c4b5fd" }}>
              Datenschutzerklarung
            </Link>{" "}
            und im{" "}
            <Link href="/impressum" style={{ color: "#c4b5fd" }}>
              Impressum
            </Link>
            .
          </p>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.9rem", flexWrap: "wrap" }}>
            <button
              onClick={() => handleConsent("rejected")}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#ffffff",
                borderRadius: "10px",
                padding: "0.55rem 0.9rem",
                cursor: "pointer",
              }}
            >
              Ablehnen
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              style={{
                background: "#7c3aed",
                border: "1px solid #7c3aed",
                color: "#ffffff",
                borderRadius: "10px",
                padding: "0.55rem 0.9rem",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Akzeptieren
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
