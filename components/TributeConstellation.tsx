"use client";
import { motion } from "framer-motion";

export default function TributeConstellation({ message, name, onNext, onBack }: { message: string; name: string; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-xl md:text-3xl font-serif italic text-white/70 max-w-2xl leading-relaxed"
      >
        {message}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-4xl md:text-6xl font-serif font-bold gradient-text mt-10"
      >
        {name}
      </motion.h2>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm">Continue →</button>
      </div>
    </section>
  );
}
