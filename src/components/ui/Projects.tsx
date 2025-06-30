"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const t = useTranslations("projects");

  // Get industries array from translations
  const industries = t.raw("industries") as string[];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % industries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [industries.length]);

  // Get projects array from translations
  const projects = t.raw("items") as {
    title: string;
    description: string;
    media?: {
      type: "image" | "video/mp4";
      src: string;
      poster?: string;
    };
  }[];

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
        {t("headline")}{" "}
        <span
          key={industries[index]}
          className="inline-block text-teal-600 font-bebas text-4xl md:text-5xl animate-fade-in-out ml-3"
        >
          {industries[index]}
        </span>
      </h1>

      <h1 className="text-xl md:text-lg max-w-[55%] md:max-w-[55%]">
        {t("intro")}
      </h1>

      <h2 className="text-lg md:text-lg text-black-300 dark:text-black-700 mb-8">
        {t("subheadline")}
      </h2>

      <div className="w-full hide-scrollbar">
        <div className="flex flex-col gap-30 overflow-visible px-2 py-4 cursor-grab active:cursor-grabbing">
          {projects.map((project, i) => (
            <div
              key={i}
              className={i % 2 === 1 ? "self-end w-auto" : "self-start w-auto"}
            >
              {project.media ? (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  media={project.media}
                  className=""
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
