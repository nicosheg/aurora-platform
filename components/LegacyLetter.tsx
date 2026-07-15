"use client";
import { motion } from "framer-motion";

export default function LegacyLetter({ paragraphs, senderName, onNext, onBack }: { paragraphs: string[]; senderName: string; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8 md:p-12 max-w-2xl"
      >
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5 }}
            className="text-white/70 font-serif text-lg leading-relaxed mb-4 last:mb-0"
          >
            {p}
          </motion.p>
        ))}
        <p className="text-white/40 text-sm mt-8 text-right font-serif italic">
          — {senderName}
        </p>
      </motion.div>
      <div className="flex gap-4 mt-8">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm">Continue →</button>
      </div>
    </section>
  );
}
