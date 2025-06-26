"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./tabs";


export default function Header() {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const tabs = [
    { label: "HOME", href: "/" },
    { label: "PROJEKTE", href: "#projects" },
    { label: "KUNDEN", href: "#kunden" },
    { label: "WERK&TEAM"},
    { label: "KONTAKT"},
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
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowHeader(false); // scroll down -> hide
      } else {
        setShowHeader(true); // scroll up -> show
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "0.5rem 1rem",
      }}
    >
      <div className="flex items-center p-7">
        <img src="/logo.png" alt="Logo" style={{ height: 50, width: "auto" }} />
        <div className="flex-grow flex justify-center">
          <Tabs
            value={value}
            onValueChange={onTabChange}
            className="bg-transparent border-0"
          >
        <TabsList>
  {tabs.map(({ label, href }) => (
    <TabsTrigger
      key={href}
      value={href}
      className="uppercase px-4 py-2"
    >
      {label}
    </TabsTrigger>
  ))}
</TabsList>

          </Tabs>
        </div>
        <div style={{ width: 36 }} />
      </div>
    </header>
  );
}
