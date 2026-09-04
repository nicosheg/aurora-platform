"use client";
import { motion } from "framer-motion";

export default function FinalScene({ lines, closing, onBack }: { lines: string[]; closing: string; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black">
      <div className="space-y-8">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.8, duration: 1.5 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white"
          >
            {line}
          </motion.p>
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: lines.length * 0.8 + 1 }}
        className="mt-12 text-white/50 font-serif italic text-xl"
      >
        {closing}
      </motion.p>
      <button onClick={onBack} className="mt-12 px-6 py-2 text-white/40 text-sm hover:text-white/70">← Review again</button>
      <p className="text-white/20 text-xs mt-8 font-light tracking-wider">A FIDUCIA Experience</p>
    </section>
  );
}
