"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "./tabs";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // Map labels to routes
  const tabs = [
    { label: "HOME", href: "/" },
    { label: "PROJEKTE", href: "/fr" },
    { label: "KUNDEN", href: "/ffr" },
    { label: "WERK&TEAM", href: "/fff" },
    { label: "KONTAKT", href: "/ffff" },
  ];

  // Derive active tab from pathname
  const currentTab = tabs.find((tab) => pathname === tab.href)?.href || "/";

  const [value, setValue] = useState(currentTab);

  useEffect(() => {
    setValue(currentTab);
  }, [currentTab]);

  function onTabChange(newValue: string) {
    setValue(newValue);
    router.push(newValue);
  }

  return (
    <header
      style={{
        backgroundColor: "#121212",
        color: "white",
        padding: "0.5rem 1rem",
      }}
    >
      <div className="flex items-center p-7">
        {/* Logo aligned left */}
        <img src="/logo.png" alt="Logo" style={{ height: 50, width: "auto" }} />

        {/* Spacer to push tabs to center */}
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
      className="uppercase px-4 py-2" // Removed text-black here
    >
      {label}
    </TabsTrigger>
  ))}
</TabsList>

          </Tabs>
        </div>

        {/* Optional: Right side empty or other content */}
        <div style={{ width: 36 }} />
      </div>
    </header>
  );
}
