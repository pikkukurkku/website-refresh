"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const logos = [
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/tdk.png", alt: "TDK Electronics logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/barenboim-said-gmbh.png", alt: "Barenboim-Said Akademie gGmbH logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/vfb-logo-seitwerk.png", alt: "VfB Stuttgart logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/siemensenergy-logo.png", alt: "Siemens Energy logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/kraussmaffei-pioneering-plastics.png", alt: "KraussMaffei logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/mercedes-amg-petronas-logo.png", alt: "Mercedes AMG Petronas logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/tdk.png", alt: "TDK Electronics logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/barenboim-said-gmbh.png", alt: "Barenboim-Said Akademie gGmbH logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/vfb-logo-seitwerk.png", alt: "VfB Stuttgart logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/siemensenergy-logo.png", alt: "Siemens Energy logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/kraussmaffei-pioneering-plastics.png", alt: "KraussMaffei logo" },
  { src: "https://www.seitwerk.de/media/image/cms/media/customer/mercedes-amg-petronas-logo.png", alt: "Mercedes AMG Petronas logo" },
];

export default function Kunden() {
  const t = useTranslations("kunden");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // true when in view, false when out
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#1f1f1f] to-[#121212] text-white px-4 md:px-12 py-20 flex flex-col gap-14 shadow-inner"
    >
      <h1 className="text-3xl md:text-3xl font-semibold text-left font-poppins border-l-4 border-teal-500 pl-4">
        {t("headline")}
      </h1>

      <div>
        <h1 className="text-xl md:text-lg max-w-[55%] md:max-w-[55%]">
          {t("intro")}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols- gap-10 place-items-center">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={`w-[150px] h-auto object-contain opacity-70 transition-all duration-300 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            } hover:opacity-100`}
            style={{
              animationFillMode: "forwards",
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 0.7;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>

      <div style={{ height: "100px" }} />
    </section>
  );
}
