"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] bg-[#1a1a1a] text-white dark:bg-white dark:text-black text-center py-18 px-6 shadow-md overflow-hidden">
      {/* Background Video */}
      <video
        src="/Happy_hero_video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      {/* Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-black/20 dark:bg-white/20" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col justify-center min-h-[600px]">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className="text-5xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          SEITWERK
        </h1>
        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-900 mb-8 drop-shadow-lg">
          Wir verbinden kreative Ideen mit technischer Exzellenz, um digitale Lösungen für unsere Kunden zu schaffen.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="text-lg px-6 py-4 bg-white text-black dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            UX/UI Design
          </Button>
          <Button className="text-lg px-6 py-4 bg-white text-black dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            Web/App Entwicklung
          </Button>
          <Button className="text-lg px-6 py-4 bg-white text-black dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800">
            Multimedia
          </Button>
        </div>
      </div>
    </section>
  );
}