"use client";

import { motion, AnimatePresence } from "framer-motion";
import VideoPlayer from "./VideoPlayer";

interface VideoModalProps {
  vimeoId: string | null;
  title?: string;
  onClose: () => void;
}

export default function VideoModal({ vimeoId, title, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {vimeoId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 modal-backdrop" />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Close
            </button>
            {title && (
              <p className="absolute -top-10 left-0 text-white/70 text-sm tracking-widest uppercase">
                {title}
              </p>
            )}
            <VideoPlayer vimeoId={vimeoId} autoplay />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
