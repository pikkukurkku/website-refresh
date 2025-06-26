/* "use client"; */

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

export default function Header() {
  const pathname = usePathname();
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const tabs = [
    { label: "HOME", href: "#home" },
    { label: "PROJEKTE", href: "#projects" },
    { label: "KUNDEN", href: "#kunden" },
    { label: "WERK&TEAM" },
    { label: "KONTAKT" },
  ];

  const currentTab = tabs.find((tab) => pathname === tab.href)?.href || "/";
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

  useEffect(() => {
    let didScroll = false;
    const delta = 10; // Minimum scroll distance to trigger hide/show

    const handleScroll = () => {
      didScroll = true;
    };

    const checkScroll = () => {
      if (!didScroll) return;
      didScroll = false;

      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY) <= delta) return;

      if (currentY <= 0) {
        setScrollDirection("up"); // Show at top of page
      } else if (currentY > lastScrollY) {
        setScrollDirection("down"); // Scroll down -> hide
      } else {
        setScrollDirection("up"); // Scroll up -> show
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    const interval = setInterval(checkScroll, 100); // Debounce scroll checks

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
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
        <div className="w-9" />
      </div>
    </header>
  );
}