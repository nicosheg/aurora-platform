"use client";
import { motion } from "framer-motion";

export default function TributeRipple({ memories, onNext, onBack }: { memories: { text: string }[]; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em] mb-8">The Ripple Effect</motion.p>
      <div className="space-y-8 max-w-xl">
        {memories.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="glass-card-light p-6"
          >
            <p className="text-white/70 font-serif italic">{m.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm">Continue →</button>
      </div>
    </section>
  );
}
