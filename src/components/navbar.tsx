"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface SubItem {
  label: string;
  href: string;
  desc: string;
  icon: string;
}

interface MenuItem {
  label: string;
  href: string;
  emoji: string;
  accentColor: string;
  description: string;
  items: SubItem[];
}

const MENU_DATA: MenuItem[] = [
  {
    label: "Sternzeichen",
    href: "/burclar",
    emoji: "",
    accentColor: "#a78bfa",
    description: "Tägliche, wöchentliche und monatliche Horoskope für 12 Sternzeichen",
    items: [
      { label: "Tageshoroskop", href: "/burclar/gunluk", desc: "Was erwartet dich heute?", icon: "" },
      { label: "Wochenhoroskop", href: "/burclar/haftalik", desc: "Die kosmische Energie dieser Woche", icon: "" },
      { label: "Monatshoroskop", href: "/burclar/aylik", desc: "Dein astrologischer Monatsausblick", icon: "" },
      { label: "Aszendent", href: "/burclar/yukselen", desc: "Entdecke deinen Aszendenten", icon: "" },
      { label: "Kompatibilität", href: "/burclar/uyum", desc: "Kompatibilitätsanalyse zwischen Sternzeichen", icon: "" },
      { label: "Geburtshoroskop", href: "/burclar/dogum-haritasi", desc: "Detaillierte Deutung des Geburtshoroskops", icon: "" },
    ],
  },
  {
    label: "Traumdeutung",
    href: "/ruya-tabirleri",
    emoji: "",
    accentColor: "#818cf8",
    description: "Entdecke die verborgenen Bedeutungen deiner Träume",
    items: [
      { label: "Traumlexikon", href: "/ruya/sozluk", desc: "Traumsymbole von A bis Z", icon: "" },
      { label: "Traum analysieren", href: "/ruya/yorumla", desc: "Persönliche Traumanalyse mit SternenFeed", icon: "" },
      { label: "Wasserträume", href: "/ruya/su", desc: "Deutung von Träumen rund ums Wasser", icon: "" },
      { label: "Flugträume", href: "/ruya/ucma", desc: "Die mystische Bedeutung des Fliegens", icon: "" },
      { label: "Liebesträume", href: "/ruya/ask", desc: "Die Geheimnisse romantischer Träume", icon: "" },
      { label: "Albträume", href: "/ruya/kabus", desc: "Die Bedeutung erschreckender Träume", icon: "" },
      { label: "Farbsymbole", href: "/ruya/renkler", desc: "Die Sprache der Farben im Traum", icon: "" },
    ],
  },
  {
    label: "Tests",
    href: "/testler",
    emoji: "",
    accentColor: "#f472b6",
    description: "Spirituelle und astrologische Persönlichkeitstests",
    items: [
      { label: "Sternzeichen-Test", href: "/testler/burc", desc: "Entdecke dein wahres Sternzeichen", icon: "" },
      { label: "Persönlichkeitsanalyse", href: "/testler/kisilik", desc: "Deine spirituelle Persönlichkeitskarte", icon: "" },
      { label: "Liebes-Kompatibilität", href: "/testler/ask-uyum", desc: "Miss eure Kompatibilität", icon: "" },
      { label: "Karriere-Test", href: "/testler/kariyer", desc: "Welche Karriere zeigen die Sterne?", icon: "" },
      { label: "Vergangenes Leben", href: "/testler/gecmis-yasam", desc: "Entdecke dein früheres Leben", icon: "" },
      { label: "Spirituelle Reife", href: "/testler/ruhsal", desc: "Dein spirituelles Entwicklungslevel", icon: "" },
    ],
  },
  {
    label: "Kosmischer Kalender",
    href: "/gok-gundemi",
    emoji: "",
    accentColor: "#34d399",
    description: "Planetenbewegungen, Finsternisse und kosmische Ereignisse",
    items: [
      { label: "Mondkalender", href: "/gok/ay-takvimi", desc: "Neumond- und Vollmonddaten", icon: "" },
      { label: "Planetentransite", href: "/gok/gezegenler", desc: "Wichtige Bewegungen der Planeten", icon: "" },
      { label: "Sonnenfinsternis", href: "/gok/gunes-tutulmasi", desc: "Die Kraft der Sonnenfinsternisse", icon: "" },
      { label: "Mondfinsternis", href: "/gok/ay-tutulmasi", desc: "Die Bedeutung von Mondfinsternissen", icon: "" },
      { label: "Retrograde-Phasen", href: "/gok/retrograde", desc: "Einfluss & Leitfaden zu Retrograden", icon: "" },
      { label: "Kosmische Nachrichten", href: "/gok/haberler", desc: "Aktuelle kosmische Entwicklungen", icon: "" },
    ],
  },
  {
    label: "Beziehungen",
    href: "/iliskiler",
    emoji: "",
    accentColor: "#fb923c",
    description: "Liebe, Paar-Kompatibilität und astrologische Beziehungstipps",
    items: [
      { label: "Liebes-Sternzeichen", href: "/iliskiler/ask", desc: "Welches Sternzeichen passt zu dir?", icon: "" },
      { label: "Paar-Kompatibilität", href: "/iliskiler/cift-uyumu", desc: "Tiefgehende Analyse eurer Harmonie", icon: "" },
      { label: "Ehe-Tipps", href: "/iliskiler/evlilik", desc: "Was sagen die Sterne zur Ehe?", icon: "" },
      { label: "Trennungsratgeber", href: "/iliskiler/ayrilik", desc: "Heilung und Neustart nach der Trennung", icon: "" },
      { label: "Flirt-Tipps", href: "/iliskiler/flort", desc: "Flirt-Ratschläge nach Sternzeichen", icon: "" },
      { label: "Seelenverwandtschaft", href: "/iliskiler/soulmate", desc: "Wie du deine Seelenverbindung erkennst", icon: "" },
    ],
  },
  {
    label: "Astro-Blog",
    href: "/blog",
    emoji: "",
    accentColor: "#fbbf24",
    description: "News, Trends und aktuelle Inhalte aus der Astrologie",
    items: [
      { label: "Astrologie-News", href: "/blog/haberler", desc: "Die neuesten Entwicklungen", icon: "" },
      { label: "Sternzeichen-Trends", href: "/blog/trendler", desc: "Beliebte Sternzeichen-Analysen", icon: "" },
      { label: "Sternengeschichten", href: "/blog/oykuler", desc: "Mythologie- und Astrologie-Erzählungen", icon: "" },
      { label: "Expertenmeinungen", href: "/blog/uzmanlar", desc: "Besondere Texte von Astrologen", icon: "" },
      { label: "Kosmischer Kalender", href: "/blog/takvim", desc: "Wichtige astrologische Termine", icon: "" },
      { label: "Sternzeichen-Statistik", href: "/blog/istatistik", desc: "Spannende Daten rund um Sternzeichen", icon: "" },
    ],
  },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onEnter = useCallback((label: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActiveMenu(label);
  }, []);

  const onLeave = useCallback(() => {
    leaveTimer.current = setTimeout(() => setActiveMenu(null), 130);
  }, []);

  const onPanelEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
  }, []);

  const activeItem = MENU_DATA.find((m) => m.label === activeMenu);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedMobile(null);
  };

  const navTextColor = "#ffffff";
  const navMutedColor = "#ffffff";
  const navHoverBg = "rgba(168,85,247,0.15)";
  const navActiveBg = "rgba(168,85,247,0.25)";

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: "#1a0b2e",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "none",
        }}
      >
        {/* ── Main bar ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg border border-purple-500/20 relative">
                <Image
                  src="/img/newfavicon.png"
                  alt="SternenFeed Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="leading-none">
                <div
                  className="text-[1.25rem] font-semibold tracking-[0.08em] animate-shimmer"
                  style={{
                    fontFamily: "var(--font-serif), Georgia, serif",
                    background: "linear-gradient(135deg, #d4af37 0%, #fbbf24 40%, #a855f7 70%, #d4af37 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SternenFeed
                </div>
                <div
                  className="text-[9px] tracking-[0.18em] uppercase mt-[-1px]"
                  style={{ color: "#a855f7", fontFamily: "var(--font-sans), sans-serif", fontWeight: 500 }}
                >
                  Astrologie &amp; Mystik
                </div>
              </div>
            </Link>

            {/* ── Desktop nav items ── */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {MENU_DATA.map((item) => {
                const isActive = activeMenu === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => onEnter(item.label)}
                    onMouseLeave={onLeave}
                  >
                    <button
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-semibold tracking-wide transition-all duration-200 cursor-pointer"
                      style={{
                        color: isActive ? item.accentColor : navTextColor,
                        background: isActive ? navActiveBg : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLButtonElement).style.color = item.accentColor;
                          (e.currentTarget as HTMLButtonElement).style.background = navHoverBg;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          (e.currentTarget as HTMLButtonElement).style.color = navTextColor;
                          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        }
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        style={{
                          transition: "transform 0.2s",
                          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                          color: isActive ? item.accentColor : navMutedColor,
                        }}
                      />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => {
                setMobileOpen((v) => !v);
                if (mobileOpen) {
                  setExpandedMobile(null);
                }
              }}
              className="lg:hidden p-2.5 rounded-xl transition-all"
              style={{
                color: "#e2e8f0",
                background: "rgba(168,85,247,0.2)",
                border: "none",
              }}
              aria-label="Menü öffnen/schließen"
            >
              {mobileOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            DESKTOP MEGA MENU PANEL
        ═══════════════════════════════════════════ */}
        {activeItem && (
          <div
            className="hidden lg:block absolute inset-x-0 shadow-2xl animate-menu-in"
            style={{
              background: "#1a0b2e",
              boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${activeItem.accentColor}30`,
            }}
            onMouseEnter={onPanelEnter}
            onMouseLeave={onLeave}
          >
            {/* ── Gold top accent line ── */}
            <div
              style={{
                height: "2px",
                width: "100%",
                background: "linear-gradient(90deg, transparent 0%, #FFD700 20%, #FFD700 80%, transparent 100%)",
              }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

              {/* Panel header */}
              <div
                className="flex items-center gap-4 mb-7 pb-5 border-b"
                style={{ borderColor: `${activeItem.accentColor}40` }}
              >
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "#ffffff", fontFamily: "var(--font-serif), Georgia, serif", letterSpacing: "-0.01em" }}
                  >
                    {activeItem.label}
                  </h3>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "#ffffff", fontFamily: "var(--font-sans), sans-serif" }}
                  >
                    {activeItem.description}
                  </p>
                </div>
              </div>

              {/* Vertical list of subcategory cards */}
              <div className="flex flex-col gap-2">
                {activeItem.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setActiveMenu(null)}
                    className="group flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-200"
                    style={{
                      borderColor: "rgba(168,85,247,0.2)",
                      background: "rgba(45, 27, 78, 0.4)",
                    }}
                  >
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: "#ffffff", fontFamily: "var(--font-serif), Georgia, serif" }}
                      >
                        <span
                          className="group-hover:transition-colors"
                          style={{ color: "inherit" }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = activeItem.accentColor)}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                        >
                          {sub.label}
                        </span>
                      </div>
                      <div
                        className="text-[11px] mt-1 leading-relaxed"
                        style={{ color: "#ffffff", opacity: 0.8, fontFamily: "var(--font-sans), sans-serif" }}
                      >
                        {sub.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>

            {/* Bottom glow line */}
            <div
              className="h-[1px] w-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${activeItem.accentColor}40, transparent)`,
              }}
            />
          </div>
        )}

        {/* ═══════════════════════════════════════════
            MOBILE MENU BACKDROP (click to close)
        ═══════════════════════════════════════════ */}
        {mobileOpen && (
          <div
            className="lg:hidden fixed inset-0 z-40"
            style={{
              background: "rgba(0,0,0,0.3)",
              top: "68px",
            }}
            onClick={() => {
              setMobileOpen(false);
              setExpandedMobile(null);
            }}
          />
        )}

        {/* ═══════════════════════════════════════════
            MOBILE MENU
        ═══════════════════════════════════════════ */}
        {mobileOpen && (
          <div
            className="lg:hidden animate-mobile-in relative z-50"
            style={{
              background: "#1a0b2e",
              borderTop: "none",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">

              {MENU_DATA.map((item) => {
                const isExpanded = expandedMobile === item.label;
                return (
                  <div key={item.label} className="mb-1">
                    <button
                      onClick={() =>
                        setExpandedMobile(isExpanded ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-[14px] font-semibold transition-all duration-200"
                      style={{
                        color: isExpanded ? item.accentColor : "#ffffff",
                        background: isExpanded
                          ? `${item.accentColor}20`
                          : "rgba(168,85,247,0.08)",
                        boxShadow: isExpanded ? `0 2px 12px ${item.accentColor}30` : "none",
                      }}
                    >
                      <span className="flex items-center gap-3">
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        style={{
                          color: item.accentColor,
                          transition: "transform 0.25s ease",
                          transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    {isExpanded && (
                      <div className="mt-2 mb-3 mx-2 p-3 rounded-2xl" style={{
                        background: "rgba(168,85,247,0.1)",
                        border: "1px solid rgba(168,85,247,0.15)",
                      }}>
                        <div className="flex flex-col gap-1.5">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={closeMobile}
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200"
                              style={{
                                background: "rgba(45, 27, 78, 0.5)",
                                color: "#ffffff",
                                boxShadow: "none",
                                border: "1px solid rgba(168,85,247,0.2)",
                              }}
                            >
                              <span>{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>
          </div>
        )}
      </nav>
    </>
  );
}


