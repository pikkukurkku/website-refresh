'use client';

import React from 'react';
import EmployeeGrid from './EmployeeGrid';
import { useTranslations} from "next-intl";

const SeitwerkVideo: React.FC = () => {
    const t = useTranslations("seitwerkvideo");
  return (
    <>
        <section className="w-full bg-[#2a2a2a] text-white px-4 md:px-12 py-16 flex flex-col text-left gap-14">
     <h1 className="text-3xl md:text-3xl font-semibold text-left font-poppins border-l-4 border-teal-500 pl-4">{t("title")}</h1>
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
   
      <video
        controls
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-auto rounded-2xl shadow-lg"
      >
        <source
          src="https://www.seitwerk.de/media/kira-video/KIRA_Version_04.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    
    </div>
    </section>
    <EmployeeGrid />
    </>
  );
};

export default SeitwerkVideo;
