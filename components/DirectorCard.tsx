"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Director } from "@/data/directors";

export default function DirectorCard({ director, index }: { director: Director; index: number }) {
  const initials = director.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link
        href={`/directors/${director.slug}`}
        className="group block"
      >
        <div className="aspect-[3/4] bg-[var(--color-surface)] overflow-hidden mb-4 relative">
          {/* Placeholder with initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-light text-[var(--color-muted)] tracking-widest">
              {initials}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <h3 className="text-white text-base tracking-wide font-light group-hover:opacity-80 transition-opacity">
          {director.name}
        </h3>
        <p className="text-[var(--color-muted)] text-sm tracking-wider mt-1">{director.role}</p>
      </Link>
    </motion.div>
  );
}
