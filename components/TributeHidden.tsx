"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TributeHidden({ envelopes, onNext, onBack }: { envelopes: string[]; onNext: () => void; onBack: () => void }) {
  const [opened, setOpened] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em] mb-8">Things I've Never Said</motion.p>
      <div className="flex flex-wrap justify-center gap-6 max-w-md">
        {envelopes.map((msg, i) => (
          <motion.button
            key={i}
            className={`p-4 glass-card-light rounded-full text-3xl ${opened === i ? "bg-[#c9a96e]/20" : ""}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpened(opened === i ? null : i)}
          >
            {opened === i ? "📩" : "✉️"}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {opened !== null && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-white/70 font-serif italic max-w-md"
          >
            {envelopes[opened]}
          </motion.p>
        )}
      </AnimatePresence>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm">Continue →</button>
      </div>
    </section>
  );
}
