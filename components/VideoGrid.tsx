"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, categories, type Project } from "@/data/projects";
import VideoModal from "./VideoModal";

function VideoCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={onClick}
      className="group relative aspect-video w-full overflow-hidden bg-[var(--color-surface)] cursor-pointer text-left"
    >
      {/* Vimeo thumbnail */}
      <img
        src={`https://vumbnail.com/${project.vimeoId}.jpg`}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white text-sm tracking-wide font-light">{project.title}</p>
        {project.client && (
          <p className="text-white/50 text-xs tracking-wider uppercase mt-1">{project.client}</p>
        )}
      </div>
      {/* Play icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center">
          <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}

export default function VideoGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeVideo, setActiveVideo] = useState<Project | null>(null);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`text-sm tracking-[0.15em] uppercase transition-all pb-1 border-b ${
              activeCategory === cat.id
                ? "text-white border-white"
                : "text-[var(--color-muted)] border-transparent hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              onClick={() => setActiveVideo(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <VideoModal
        vimeoId={activeVideo?.vimeoId ?? null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
