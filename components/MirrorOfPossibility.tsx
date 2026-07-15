import CelebrationOverlay from "@/components/CelebrationOverlay";
"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const reflections = [
  "I see courage.",
  "I see kindness.",
  "I see intelligence.",
  "I see someone who will inspire others.",
  "I see someone who has only begun."
];

export default function MirrorOfPossibility({ onNext }: { onNext: () => void }) {
  const [index, setIndex] = useState(0);

  const tap = () => {
    if (index < reflections.length - 1) setIndex(index + 1);
  };

  return (
    <motion.section
      <CelebrationOverlay /> initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Four</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Mirror of Possibility</h2>
      <motion.div
        className="w-64 h-64 rounded-full glass-card flex items-center justify-center cursor-pointer mx-auto mb-8"
        whileHover={{ scale: 1.05 }}
        onTap={tap}
        onClick={tap}
      >
        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/80 text-xl font-serif p-4">
          {reflections[index]}
        </motion.div>
      </motion.div>
      <p className="text-white/40 text-sm mb-8">Tap the mirror to see what it reflects.</p>
      {index === reflections.length - 1 && (
        <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale: 1.05 }}>
          Enter the Sky of Dreams
        </motion.button>
      )}
    </motion.section>
  );
}
