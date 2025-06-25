"use client";


import { useEffect, useState } from "react";
import  ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"

const keyIndustries = [
  "Sport",
  "Kultur & Freizeit",
  "Tourismus",
  "Automobil",
  "Gesundheit",
];

const projects = [
  {
    title: "Unsere neue Zusammenarbeit mit der FIS",
    description: "FIS - International Ski and Snowboard Federation",
    media: {
      type: "video/mp4" as const,
      src: "https://www.seitwerk.de//media/datastore/cms/media/artikel/2024-10-fis/fis-app-kackel-720p.mp4",
      poster: "https://www.seitwerk.de/media/cache/imageTablet/cms/media/artikel/2024-10-fis/vorschaubild.jpg"
    }
  },
  {
    title: "Innovationen für den Kulturbereich",
    description: "Digitale Plattformen für moderne Museen",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
    }
  },
  {
    title: "Tourismus neu gedacht",
    description: "Interaktive Erlebnisse für Besucher",
    media: {
     type: "image" as const,
     src: "https://images.unsplash.com/photo-1519821172141-b5d8b1f1f1a4",
    }
  },
  {
    title: "Digitale Mobilitätslösungen",
    description: "Mit Automobilpartnern in die Zukunft",
    media: {
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1519821172141-b5d8b1f1f1a4",
     }
  },
]

export default function Projects() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keyIndustries.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full px-4 md:px-12 py-16 flex flex-col text-left bg-[#f9f9f9]">
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          25%,
          75% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-out {
          animation: fadeInOut 4s;
        }
      `}</style>

      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
        Agentur für{" "}
        <span
          key={keyIndustries[index]}
          className="inline-block text-teal-600 font-bebas text-4xl md:text-6xl animate-fade-in-out"
        >
          {keyIndustries[index]}
        </span>
      </h1>
      <h2 className="text-lg md:text-xl text-black-300 dark:text-black-700 mb-8">
        Hier sind ein paar unserer Lieblingsprojekte
      </h2>

      <div className="w-full overflow-x-auto hide-scrollbar">

      <motion.div
  drag="x"
  dragConstraints={{ left: -1000, right: 0 }}
  className="flex gap-6 snap-x snap-mandatory overflow-visible min-w-max px-2 py-4 cursor-grab active:cursor-grabbing"
  whileTap={{ cursor: "grabbing" }}
>

    {projects.map((project, i) => (
      <ProjectCard
        key={i}
        title={project.title}
        description={project.description}
        media={project.media}
      />
    ))}
  </motion.div>
</div>

    </section>
  )
}