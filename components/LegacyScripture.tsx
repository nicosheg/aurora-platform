"use client";
import { motion } from "framer-motion";

export default function LegacyScripture({ reference, text, onNext, onBack }: { reference: string; text: string; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[#c9a96e] text-sm uppercase tracking-widest mb-4"
      >
        Scripture for Your Journey
      </motion.p>
      <h2 className="text-4xl md:text-6xl font-serif font-bold gradient-text mb-6">{reference}</h2>
      <p className="text-white/70 font-serif text-lg italic max-w-xl leading-relaxed">&ldquo;{text}&rdquo;</p>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm">Continue →</button>
      </div>
    </section>
  );
}
