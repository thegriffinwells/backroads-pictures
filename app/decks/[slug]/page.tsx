"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { decks } from "@/data/decks";
import type { DeckSection, DeckCrewMember } from "@/data/decks";

function HeroSection({ deck }: { deck: (typeof decks)[0] }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: deck.heroImage ? `url(${deck.heroImage})` : undefined,
          backgroundColor: "#111",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-white mb-6"
          style={{ color: deck.accentColor }}
        >
          {deck.title}
        </h1>
        <p className="text-white/70 text-lg md:text-xl tracking-[0.15em] uppercase font-light">
          {deck.subtitle}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <div className="w-px h-16 bg-white/20 mx-auto animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function TextSection({ section, accentColor }: { section: DeckSection; accentColor: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-24 md:py-32 px-6"
    >
      <div className="mx-auto max-w-3xl">
        {section.heading && (
          <h2
            className="text-sm tracking-[0.3em] uppercase mb-8 font-light"
            style={{ color: accentColor }}
          >
            {section.heading}
          </h2>
        )}
        {section.body && (
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed tracking-wide">
            {section.body}
          </p>
        )}
      </div>
    </motion.section>
  );
}

function ImagesSection({ section }: { section: DeckSection }) {
  const images = section.images ?? [];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 px-6"
    >
      <div className="mx-auto max-w-7xl">
        <div className={`grid gap-4 ${images.length === 3 ? "md:grid-cols-3" : images.length === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="aspect-[16/10] bg-[var(--color-surface)] overflow-hidden"
            >
              {img.src.includes("placeholder") ? (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[var(--color-muted)] text-sm tracking-widest uppercase">
                    {img.alt}
                  </span>
                </div>
              ) : (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function CrewCard({ member, index }: { member: DeckCrewMember; index: number }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-28 h-28 mx-auto mb-4 bg-[var(--color-surface)] rounded-full flex items-center justify-center">
        <span className="text-xl font-light text-[var(--color-muted)] tracking-widest">
          {initials}
        </span>
      </div>
      <h3 className="text-white text-base font-light tracking-wide">{member.name}</h3>
      <p className="text-[var(--color-muted)] text-xs tracking-[0.2em] uppercase mt-1">
        {member.role}
      </p>
      <p className="text-[var(--color-foreground)] text-sm font-light mt-3 max-w-xs mx-auto leading-relaxed">
        {member.bio}
      </p>
      {member.instagram && (
        <a
          href={`https://instagram.com/${member.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-[var(--color-muted)] text-xs hover:text-white transition-colors tracking-wider"
        >
          @{member.instagram}
        </a>
      )}
    </motion.div>
  );
}

function CrewSection({ section, accentColor }: { section: DeckSection; accentColor: string }) {
  const crew = section.crew ?? [];
  return (
    <section className="py-24 md:py-32 px-6 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl">
        {section.heading && (
          <h2
            className="text-sm tracking-[0.3em] uppercase mb-16 text-center font-light"
            style={{ color: accentColor }}
          >
            {section.heading}
          </h2>
        )}
        <div className={`grid gap-12 ${crew.length <= 3 ? `md:grid-cols-${crew.length}` : "md:grid-cols-2 lg:grid-cols-4"}`}>
          {crew.map((member, i) => (
            <CrewCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ section, accentColor }: { section: DeckSection; accentColor: string }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-32 px-6 text-center border-t border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-2xl">
        {section.heading && (
          <h2
            className="text-sm tracking-[0.3em] uppercase mb-8 font-light"
            style={{ color: accentColor }}
          >
            {section.heading}
          </h2>
        )}
        {section.body && (
          <p className="text-xl md:text-2xl font-light text-white leading-relaxed tracking-wide mb-12">
            {section.body}
          </p>
        )}
        {section.ctaLink && (
          <Link
            href={section.ctaLink}
            className="inline-block text-sm tracking-[0.2em] uppercase border px-8 py-3 hover:bg-white hover:text-black transition-all duration-500"
            style={{ borderColor: accentColor, color: accentColor }}
          >
            {section.ctaText ?? "Learn More"}
          </Link>
        )}
      </div>
    </motion.section>
  );
}

export default function DeckPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const deck = decks.find((d) => d.slug === slug);
  if (!deck) notFound();

  return (
    <div className="bg-[var(--color-background)]">
      {deck.sections.map((section, i) => {
        switch (section.type) {
          case "hero":
            return <HeroSection key={i} deck={deck} />;
          case "text":
            return <TextSection key={i} section={section} accentColor={deck.accentColor} />;
          case "images":
            return <ImagesSection key={i} section={section} />;
          case "crew":
            return <CrewSection key={i} section={section} accentColor={deck.accentColor} />;
          case "cta":
            return <CTASection key={i} section={section} accentColor={deck.accentColor} />;
          default:
            return null;
        }
      })}

      {/* Back to decks */}
      <div className="py-12 px-6 text-center">
        <Link
          href="/decks"
          className="text-sm text-[var(--color-muted)] hover:text-white transition-colors tracking-[0.15em] uppercase"
        >
          &larr; All Decks
        </Link>
      </div>
    </div>
  );
}
