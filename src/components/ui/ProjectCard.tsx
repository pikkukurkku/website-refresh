"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ProjectCard({ title, description, media }: {
    title: string;
    description: string;
    media: {
        type: "image" | "video/mp4";
        src: string;
        poster?: string;
      };
  }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="min-w-[300px] max-w-[90vw] md:min-w-[400px] lg:min-w-[500px] snap-start"
    >
     <Card className="relative w-full aspect-[9/9] overflow-hidden rounded-xs shadow-xl border-0 group">
        {media.type === "image" ? (
          <img
            src={media.src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster={media.poster}
          >
            <source src={media.src} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 p-6 text-white">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-white/80 mt-1">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}