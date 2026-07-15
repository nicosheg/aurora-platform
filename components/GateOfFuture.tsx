import CelebrationOverlay from "@/components/CelebrationOverlay";
"use client";
import { motion } from "framer-motion";

export default function GateOfFuture({ name, onNext }: { name: string; onNext: () => void }) {
  return (
    <motion.section
      <CelebrationOverlay /> initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-[#0a0a1a] to-black">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">Final World</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Gate of the Future</h2>
      <motion.div className="space-y-6 mb-12">
        {["Kindness", "Courage", "Wisdom", "Joy", "Faith", "Hope", "Purpose", "Love", "Dream"].map((word, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="text-2xl font-serif text-white/70"
          >
            {word}
          </motion.p>
        ))}
      </motion.div>
      <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale: 1.05 }}>
        Open the Final Letter
      </motion.button>
    </motion.section>
  );
}
