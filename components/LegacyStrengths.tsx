"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LegacyStrengths({ items, onNext, onBack }: { items: { id: string; title: string; description: string }[]; onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-serif font-light text-white/80 mb-8">Your Strengths</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`glass-card-light p-4 cursor-pointer ${selected === item.id ? "border-[#c9a96e]" : ""}`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(item.id === selected ? null : item.id)}
          >
            <p className="text-[#c9a96e] font-serif text-lg">{item.title}</p>
            {selected === item.id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="text-white/60 text-sm mt-2"
              >
                {item.description}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
      <div className="flex gap-4 mt-10">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm hover:text-white/70">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm hover:text-white/70">Continue →</button>
      </div>
    </section>
  );
}
