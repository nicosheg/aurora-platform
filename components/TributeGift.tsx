"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function TributeGift({ prompts, onNext, onBack }: { prompts: { label: string; message: string }[]; onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p className="text-[#c9a96e] text-sm uppercase tracking-[0.3em] mb-8">Open Whenever You Need It</motion.p>
      <div className="space-y-4 max-w-md">
        {prompts.map((p, i) => (
          <motion.div
            key={i}
            className="glass-card-light p-4 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <p className="text-[#c9a96e] font-serif">{p.label}</p>
            {selected === i && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white/70 text-sm mt-2">{p.message}</motion.p>
            )}
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
