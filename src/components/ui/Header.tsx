"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { useTranslations, useLocale } from "next-intl";

export const headerHeightVar = typeof window !== "undefined" ? 100 : 0;

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const tabs = [
    { label: t("home"), href: "#home" },
    { label: t("projects"), href: "#projects" },
    { label: t("customers"), href: "#kunden" },
    { label: t("team"), href: "#seitwerkvideo" },
    { label: t("contact"), href: "#footer" },
  ];

  const currentTab = tabs.find((tab) => pathname.includes(tab.href))?.href || `/${locale}`;
  const [value, setValue] = useState(currentTab);

  useEffect(() => {
    setValue(currentTab);
  }, [currentTab]);

  function onTabChange(newValue: string) {
    setValue(newValue);
    const id = newValue.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const toggleLanguage = () => {
    const newLocale = locale === "de" ? "en" : "de";
    
    // More robust path handling
    let newPathname;
    
    // Check if pathname starts with a locale
    if (pathname.startsWith('/de') || pathname.startsWith('/en')) {
      // Replace the existing locale
      newPathname = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    } else {
      // Add locale to the beginning
      newPathname = `/${newLocale}${pathname}`;
    }
    
    // Handle root path
    if (newPathname === `/${newLocale}/`) {
      newPathname = `/${newLocale}`;
    }

    console.log('Switching from', locale, 'to', newLocale);
    console.log('Current pathname:', pathname);
    console.log('New pathname:', newPathname);
    
    router.push(newPathname);
  };

  useEffect(() => {
    let didScroll = false;
    const delta = 10;

    const handleScroll = () => {
      didScroll = true;
    };

    const checkScroll = () => {
      if (!didScroll) return;
      didScroll = false;

      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) <= delta) return;

      if (currentY <= 0) {
        setScrollDirection("up");
      } else if (currentY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(checkScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
      style={{ height: "100px" }}
      className={`fixed top-0 left-0 w-full bg-[#1a1a1a] text-white p-4 transition-transform duration-300 ease-in-out z-50 ${
        scrollDirection === "down" ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      <div className="flex items-center p-7">
        <img src="/logo.png" alt="Logo" className="h-[50px] w-auto" />
        <div className="flex-grow flex justify-center">
          <Tabs
            value={value}
            onValueChange={onTabChange}
            className="bg-transparent border-0"
          >
            <TabsList>
              {tabs.map(({ label, href }) => (
                <TabsTrigger
                  key={href || label}
                  value={href || label}
                  className="uppercase px-4 py-2"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <button
  onClick={toggleLanguage}
  className="ml-4 px-3 py-1.5 rounded-full text-sm font-medium border border-white/20 hover:border-white transition-colors duration-200"
  aria-label="Toggle language"
>
  <span className="text-white">{locale === "en" ? "DE" : "EN"}</span>
</button>

      </div>
    </header>
  );
}