"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function FiftyWords({ title, words, onNext, onBack }: { title: string; words: string[]; onNext: () => void; onBack: () => void }) {
  const [opened, setOpened] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#d4a574] mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl">
        {words.map((word, i) => (
          <motion.button
            key={i}
            className={`glass-card-light p-4 cursor-pointer ${opened === i ? "bg-[#d4a574]/20" : ""}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setOpened(opened === i ? null : i)}
          >
            <p className="text-white/70 font-serif">{word}</p>
          </motion.button>
        ))}
      </div>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d4a574] text-sm">Continue →</button>
      </div>
    </section>
  );
}
