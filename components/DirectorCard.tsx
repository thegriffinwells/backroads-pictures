"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Director } from "@/data/directors";

export default function DirectorCard({ director, index }: { director: Director; index: number }) {
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
          <Image
            src={director.image}
            alt={director.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <h3 className="text-white text-base tracking-wide font-light group-hover:opacity-80 transition-opacity">
          {director.name}
        </h3>
        <p className="text-[var(--color-muted)] text-sm tracking-wider mt-1">{director.role}</p>
      </Link>
    </motion.div>
  );
}
