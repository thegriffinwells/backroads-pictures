"use client";

import { motion } from "framer-motion";
import type { Client } from "@/data/clients";

export default function ClientLogo({ client, index }: { client: Client; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
      className="group flex items-center justify-center aspect-[3/2] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] transition-colors duration-500 p-8 relative"
    >
      {/* Default logo - always visible */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.logo}
        alt={client.name}
        className={`max-h-full max-w-full object-contain invert opacity-60 transition-all duration-500 ${
          client.logoColor ? "group-hover:opacity-0" : "group-hover:opacity-100"
        }`}
      />
      {/* Color logo on hover */}
      {client.logoColor && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={client.logoColor}
          alt={client.name}
          className="absolute inset-0 m-auto max-h-[calc(100%-4rem)] max-w-[calc(100%-4rem)] object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      )}
    </motion.div>
  );
}
