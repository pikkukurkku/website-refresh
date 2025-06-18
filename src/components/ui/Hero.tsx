"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full bg-[#121212] text-white dark:bg-white dark:text-black text-center py-24 px-6 shadow-md">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Willkommen bei Seitwerk!
        </h1>
        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 mb-8">
          Wir verbinden kreative Ideen mit technischer Exzellenz, um digitale Lösungen für unsere Kunden zu schaffen.
        </p>
        <Button className="text-lg px-6 py-4">
          UX/UI Design
        </Button>
        <Button className="text-lg px-6 py-4">
          Web/App Entwicklung
        </Button>
        <Button className="text-lg px-6 py-4">
          Multimedia
        </Button>
      </div>
    </section>
  )
}

