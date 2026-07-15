"use client";
import { motion } from "framer-motion";

export default function LegacyStory({ message, onNext, onBack }: { message: string; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-white/70 font-serif text-xl leading-relaxed max-w-2xl"
      >
        &ldquo;{message}&rdquo;
      </motion.p>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm hover:text-white/70 transition-colors">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm hover:text-white/70 transition-colors">Continue →</button>
      </div>
    </section>
  );
}
