"use client";
import { motion } from "framer-motion";

export default function TheReceipts({ title, investments, message, onNext, onBack }: { title: string; investments: string[]; message: string; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#d4a574] mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mb-8">
        {investments.map((inv, i) => (
          <motion.div key={i} className="glass-card-light p-4" whileHover={{ scale: 1.05 }}>
            <p className="text-white/70 font-serif">{inv}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-white/70 font-serif italic max-w-xl leading-relaxed">{message}</p>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d4a574] text-sm">Continue →</button>
      </div>
    </section>
  );
}
