"use client";

import HeroVideo from "@/components/HeroVideo";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";
import { clients } from "@/data/clients";
import { useState } from "react";
import VideoModal from "@/components/VideoModal";

const featuredProjects = projects.slice(0, 6);

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <HeroVideo vimeoId="2091862953" />
        <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight">
              We seek meaningful narratives that connect, empower, and impact our world.
            </h1>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="text-sm tracking-[0.3em] uppercase text-[var(--color-muted)] mb-12">
              Featured Work
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <button
                  onClick={() => setActiveVideo(project)}
                  className="group relative aspect-video w-full overflow-hidden bg-[var(--color-surface)] cursor-pointer text-left"
                >
                  <img
                    src={`https://vumbnail.com/${project.vimeoId}.jpg`}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm tracking-wide font-light opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      {project.title}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <section className="py-16 border-t border-b border-[var(--color-border)] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={`${client.id}-${i}`}
              className="text-[var(--color-muted)] text-sm tracking-[0.2em] uppercase mx-8 font-light"
            >
              {client.name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-4xl font-light text-white leading-relaxed tracking-wide">
              An award-winning, global production studio giving voice to narratives focused on
              community and environmental impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <VideoModal
        vimeoId={activeVideo?.vimeoId ?? null}
        title={activeVideo?.title}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
