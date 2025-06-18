"use client";


import { useEffect, useState } from "react";

const keyIndustries = [
  "Sport",
  "Kultur & Freizeit",
  "Tourismus",
  "Automobil",
  "Gesundheit",
];

export default function Projects() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % keyIndustries.length);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <section
        className="w-full px-12 py-12 flex flex-col items-start text-left relative overflow-hidden"
        style={{
          backgroundColor: "#f9f9f9", // subtle light gray
          backgroundRepeat: "repeat",
        }}
      >
      
        <style jsx>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Bebas+Neue&display=swap');
  .font-poppins {
    font-family: 'Poppins', sans-serif;
  }
  .font-bebas {
    font-family: 'Bebas Neue', sans-serif;
  }

@keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(10px);
            animation-timing-function: ease-in-out;
          }
          25% {
            opacity: 1;
            transform: translateY(0);
            animation-timing-function: ease-in-out;
          }
          75% {
            opacity: 1;
            transform: translateY(0);
            animation-timing-function: ease-in-out;
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
            animation-timing-function: ease-in-out;
          }
        }
        .animate-fade-in-out {
          animation: fadeInOut 4s;
        }
      `}</style>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
        Agentur für{" "}
        <span
          key={keyIndustries[index]} // Force re-render for animation
          className="inline-block text-teal-600 font-bebas text-4xl md:text-6xl animate-fade-in-out"
        >
          {keyIndustries[index]}
        </span>
      </h1>
      <h2 className="text-lg md:text-xl text-black-300 dark:text-black-700 mb-8">
          Hier sind ein paar unserer Lieblingsprojekte
        </h2>
      </section>
    );
  }
  