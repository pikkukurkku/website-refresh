"use client";

import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full min-h-[600px] bg-[#1a1a1a] text-white dark:bg-white dark:text-black text-center py-18 px-6 shadow-md overflow-hidden">
      <video
        src="/colleagues.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div className="absolute inset-0 bg-black/20 dark:bg-white/20" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-center min-h-[600px]">
        <br/><br/><br/><br/><br/><br/>
        <h1 className="text-5xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-900 mb-8 drop-shadow-lg">
          {t("description")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="text-lg px-6 py-4 bg-white text-black dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            {t("button.design")}
          </Button>
          <Button className="text-lg px-6 py-4 bg-white text-black dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            {t("button.dev")}
          </Button>
          <Button className="text-lg px-6 py-4 bg-white text-black dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            {t("button.media")}
          </Button>
        </div>
      </div>
    </section>
  );
}
