"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThingsYouMayNeverKnow({ title, memories, onNext, onBack }: { title: string; memories: { text: string }[]; onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#d4a574] mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
        {memories.map((m, i) => (
          <motion.button
            key={i}
            className={`glass-card-light p-4 cursor-pointer ${selected === i ? "border-[#d4a574]/50" : ""}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <p className="text-white/70 text-sm font-serif">{m.text}</p>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 text-white/60 font-serif italic max-w-md"
          >
            Tap to reveal a story (edit this text in config)
          </motion.p>
        )}
      </AnimatePresence>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d4a574] text-sm">Continue →</button>
      </div>
    </section>
  );
}
