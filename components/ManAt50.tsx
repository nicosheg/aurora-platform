"use client";
import { motion } from "framer-motion";

export default function ManAt50({ title, number, lines, closing, onNext, onBack }: { title: string; number: string; lines: string[]; closing: string; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-[#0a0a0f] to-[#1a1208]">
      <motion.p className="text-9xl font-serif font-bold text-[#d4a574]">{number}</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-white/80 mt-4">{title}</h2>
      <div className="space-y-6 mt-8">
        {lines.map((line, i) => (
          <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.3 }} className="text-xl font-serif text-white/70">{line}</motion.p>
        ))}
      </div>
      <p className="text-[#d4a574] font-serif italic text-2xl mt-10">{closing}</p>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d4a574] text-sm">Continue →</button>
      </div>
    </section>
  );
}
