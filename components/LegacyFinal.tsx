"use client";
import { motion } from "framer-motion";

export default function LegacyFinal({ quote, closing, name, onBack }: { quote: string; closing: string; name: string; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-xl md:text-3xl font-serif italic text-white/70 max-w-2xl leading-relaxed"
      >
        &ldquo;{quote}&rdquo;
      </motion.blockquote>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-12"
      >
        {closing.split("\n").map((line, i) => (
          <p key={i} className="text-2xl md:text-4xl font-serif font-light gradient-text mt-4">
            {line}
          </p>
        ))}
      </motion.div>
      <p className="text-white/30 text-xs mt-8 font-light tracking-wider">
        — A FIDUCIA Legacy Experience
      </p>
      <button onClick={onBack} className="mt-8 px-6 py-2 text-white/40 text-sm hover:text-white/70">← Review again</button>
    </section>
  );
}
