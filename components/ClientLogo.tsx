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
      className="group flex items-center justify-center aspect-[3/2] bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)] transition-colors duration-500 p-6"
    >
      <span className="text-[var(--color-muted)] group-hover:text-white transition-colors duration-500 text-sm tracking-[0.15em] uppercase text-center font-light">
        {client.name}
      </span>
    </motion.div>
  );
}
