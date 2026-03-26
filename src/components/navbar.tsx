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
    label: "Burçlar",
    href: "/burclar",
    emoji: "",
    accentColor: "#a78bfa",
    description: "12 burç için günlük, haftalık ve aylık astroloji yorumları",
    items: [
      { label: "Günlük Yorumlar", href: "/burclar/gunluk", desc: "Bugün seni neler bekliyor?", icon: "" },
      { label: "Haftalık Analizler", href: "/burclar/haftalik", desc: "Bu haftanın kozmik enerjisi", icon: "" },
      { label: "Aylık Harita", href: "/burclar/aylik", desc: "Aylık astroloji haritanız", icon: "" },
      { label: "Yükselen Burç", href: "/burclar/yukselen", desc: "Yükselen burcunuzu keşfedin", icon: "" },
      { label: "Burç Uyumu", href: "/burclar/uyum", desc: "Burçlar arası uyum analizi", icon: "" },
      { label: "Doğum Haritası", href: "/burclar/dogum-haritasi", desc: "Natal chart detaylı okuma", icon: "" },
    ],
  },
  {
    label: "Rüya Tabirleri",
    href: "/ruya-tabirleri",
    emoji: "",
    accentColor: "#818cf8",
    description: "Rüyalarınızın gizli anlamlarını keşfedin",
    items: [
      { label: "Rüya Sözlüğü", href: "/ruya/sozluk", desc: "A'dan Z'ye rüya anlamları", icon: "" },
      { label: "Rüya Yorumlama", href: "/ruya/yorumla", desc: "Zodyaklı ile kişisel rüya analizi", icon: "" },
      { label: "Su Rüyaları", href: "/ruya/su", desc: "Su ile ilgili rüyaların yorumu", icon: "" },
      { label: "Uçma Rüyaları", href: "/ruya/ucma", desc: "Havada uçmanın mistik anlamı", icon: "" },
      { label: "Aşk Rüyaları", href: "/ruya/ask", desc: "Romantik rüyaların sırları", icon: "" },
      { label: "Kâbus Yorumları", href: "/ruya/kabus", desc: "Korkutucu rüyaların anlamı", icon: "" },
      { label: "Renk Sembolleri", href: "/ruya/renkler", desc: "Rüyadaki renklerin dili", icon: "" },
    ],
  },
  {
    label: "Testler",
    href: "/testler",
    emoji: "",
    accentColor: "#f472b6",
    description: "Ruhsal ve astrolojik kişilik testleri",
    items: [
      { label: "Burç Testi", href: "/testler/burc", desc: "Gerçek burcunu keşfet", icon: "" },
      { label: "Kişilik Analizi", href: "/testler/kisilik", desc: "Ruhsal kişilik haritanız", icon: "" },
      { label: "Aşk Uyum Testi", href: "/testler/ask-uyum", desc: "Sevgiliniyle uyumunuzu ölçün", icon: "" },
      { label: "Kariyer Testi", href: "/testler/kariyer", desc: "Yıldızlar hangi kariyeri işaret ediyor?", icon: "" },
      { label: "Geçmiş Yaşam", href: "/testler/gecmis-yasam", desc: "Önceki hayatınızı keşfedin", icon: "" },
      { label: "Ruhsal Olgunluk", href: "/testler/ruhsal", desc: "Spiritüel gelişim seviyeniz", icon: "" },
    ],
  },
  {
    label: "Gök Gündemi",
    href: "/gok-gundemi",
    emoji: "",
    accentColor: "#34d399",
    description: "Gezegen hareketleri, tutulmalar ve kozmik olaylar",
    items: [
      { label: "Ay Takvimleri", href: "/gok/ay-takvimi", desc: "Yeni ay ve dolunay tarihleri", icon: "" },
      { label: "Gezegen Geçişleri", href: "/gok/gezegenler", desc: "Gezegenlerin etkili hareketleri", icon: "" },
      { label: "Güneş Tutulması", href: "/gok/gunes-tutulmasi", desc: "Güneş tutulmalarının gücü", icon: "" },
      { label: "Ay Tutulması", href: "/gok/ay-tutulmasi", desc: "Ay tutulmalarının anlamı", icon: "" },
      { label: "Retrograde Dönemleri", href: "/gok/retrograde", desc: "Retrograde etkileri ve rehber", icon: "" },
      { label: "Kozmik Haberler", href: "/gok/haberler", desc: "Son kozmik gelişmeler", icon: "" },
    ],
  },
  {
    label: "İlişkiler",
    href: "/iliskiler",
    emoji: "",
    accentColor: "#fb923c",
    description: "Aşk, çift uyumu ve ilişkilerde yıldızların rehberliği",
    items: [
      { label: "Aşk Burçları", href: "/iliskiler/ask", desc: "Hangi burç seni sever?", icon: "" },
      { label: "Çift Uyumu", href: "/iliskiler/cift-uyumu", desc: "İkili uyum derinlemesine analiz", icon: "" },
      { label: "Evlilik Önerileri", href: "/iliskiler/evlilik", desc: "Yıldızlar evlilik için ne diyor?", icon: "" },
      { label: "Ayrılık Rehberi", href: "/iliskiler/ayrilik", desc: "İyileşme ve toparlanma yolculuğu", icon: "" },
      { label: "Flört Taktikleri", href: "/iliskiler/flort", desc: "Burcuna göre flört tavsiyeleri", icon: "" },
      { label: "Soulmate Bağı", href: "/iliskiler/soulmate", desc: "Ruh eşini tanımanın yolları", icon: "" },
    ],
  },
  {
    label: "Astro Blog",
    href: "/blog",
    emoji: "",
    accentColor: "#fbbf24",
    description: "Astroloji dünyasından haberler, trendler ve güncel içerikler",
    items: [
      { label: "Astroloji Haberleri", href: "/blog/haberler", desc: "Son astroloji gelişmeleri", icon: "" },
      { label: "Burç Trendleri", href: "/blog/trendler", desc: "Popüler burç analizleri", icon: "" },
      { label: "Yıldızlardan Öyküler", href: "/blog/oykuler", desc: "Mitoloji ve astroloji hikayeleri", icon: "" },
      { label: "Uzman Görüşleri", href: "/blog/uzmanlar", desc: "Astrologlardan özel yazılar", icon: "" },
      { label: "Kozmik Takvim", href: "/blog/takvim", desc: "Önemli astrolojik tarihler", icon: "" },
      { label: "Burç İstatistikleri", href: "/blog/istatistik", desc: "Burçlarla ilgili ilginç veriler", icon: "" },
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
                  src="/img/logo.jpg"
                  alt="Zodyaklı Logo"
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
                  Zodyaklı
                </div>
                <div
                  className="text-[9px] tracking-[0.18em] uppercase mt-[-1px]"
                  style={{ color: "#a855f7", fontFamily: "var(--font-sans), sans-serif", fontWeight: 500 }}
                >
                  Astroloji &amp; Mistisizm
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
              aria-label="Menüyü aç/kapat"
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


