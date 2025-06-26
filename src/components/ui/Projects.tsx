"use client";


import { useEffect, useState } from "react";
import  ProjectCard from "./ProjectCard"

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
    title: "Digitale Spielmacher: Unsere App für den Pokalsieger",
    description: "VfB Stuttgart",
    media: {
      type: "video/mp4" as const,
      src: "https://www.seitwerk.de/media/datastore/cms/media/artikel/2025-05-vfb-app/vfb-pressemeldung.mp4"
    }
  },
  {
    title: "Frischer Glanz für den Pierre Boulez Saal",
    description: "Pierre Boulez Saal",
    media: {
     type: "video/mp4" as const,
     src: "https://www.seitwerk.de/media/datastore/cms/media/artikel/2025-05-pierre-boulez/pressemeldung-pierre-boulez-saal.mp4",
    }
  },
  {
    title: "Startseite von TDK Electrinics glänzt mit neuem Design",
    description: "Mit Automobilpartnern in die Zukunft",
    media: {
      type: "image" as const,
      src: "https://www.seitwerk.de/media/cache/base_image_block/cms/media/artikel/2024-08-tdk-elektronics/detailseite.jpg",
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
    <section className="w-full bg-[#2a2a2a] text-white px-4 md:px-12 py-16 flex flex-col text-left gap-14">
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

      <h1 className="text-2xl md:text-3xl font-bold mb-4 font-poppins">
        Wir sind Experte für  {" "}
        <span
          key={keyIndustries[index]}
          className="inline-block text-teal-600 font-bebas text-4xl md:text-5xl animate-fade-in-out ml-3"
        >
          {keyIndustries[index]}
        </span>
   
      </h1>
      <h1 className="text-xl md:text-lg max-w-[55%] md:max-w-[55%]">Seitwerk bietet seit 2004 als inhabergeführtes Unternehmen das ganze Spektrum der Neuen Medien unter einem Dach. Unsere Spezialisten liefern von der Konzeption über das Design bis zur Realisierung alles aus einer Hand. Wir beraten, analysieren, entwerfen, programmieren, erstellen Animationen, produzieren Ton- und Videosequenzen im eigenen Studio und vieles mehr.</h1>
  
      <h2 className="text-lg md:text-lg text-black-300 dark:text-black-700 mb-8">
        Hier sind ein paar unserer Lieblingsprojekte
      </h2>

      <div className="w-full hide-scrollbar">

      <div
  className="flex flex-col gap-30 overflow-visible px-2 py-4 cursor-grab active:cursor-grabbing "
>
{projects.map((project, i) => (
    <div key={i} className={i % 2 === 1 ? "self-end w-auto" : "self-start w-auto"}>
      <ProjectCard
        title={project.title}
        description={project.description}
        media={project.media}
        className=""
      />
    </div>
    ))}
  </div>
</div>

    </section>
  )
}