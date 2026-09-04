"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TheManWeKnow({ title, items, onNext, onBack }: { title: string; items: { role: string; message: string }[]; onNext: () => void; onBack: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#d4a574] mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
        {items.map((item, i) => (
          <motion.button
            key={item.role}
            className={`glass-card-light p-4 cursor-pointer ${selected === i ? "border-[#d4a574]/50" : ""}`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <p className="text-[#d4a574] font-serif text-lg">{item.role}</p>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 text-white/70 font-serif italic max-w-md"
          >
            {items[selected].message}
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
