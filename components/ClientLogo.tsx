"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Client } from "@/data/clients";

export default function ClientLogo({ client, index }: { client: Client; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
      className="group flex items-center justify-center aspect-[3/2] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] transition-colors duration-500 p-6 relative"
    >
      {/* Grayscale logo (default) */}
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className={`object-contain p-6 brightness-0 invert opacity-50 transition-opacity duration-500 ${
          client.logoColor ? "group-hover:opacity-0" : "group-hover:opacity-90"
        }`}
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
      />
      {/* Color logo (hover) */}
      {client.logoColor && (
        <Image
          src={client.logoColor}
          alt={client.name}
          fill
          className="object-contain p-6 opacity-0 group-hover:opacity-90 transition-opacity duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      )}
    </motion.div>
  );
}
