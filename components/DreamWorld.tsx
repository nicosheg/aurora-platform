"use client";
import { motion } from "framer-motion";

export default function DreamWorld({ onNext }: { onNext: () => void }) {
  return (
    <motion.section initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Four</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">Dream World</h2>
      <div className="space-y-6 max-w-md mx-auto mb-12">
        <p className="text-white/70 text-lg">What do you want to become?</p>
        <p className="text-white/70 text-lg">What places do you want to visit?</p>
        <p className="text-white/70 text-lg">What talents will you discover?</p>
      </div>
      <p className="text-[#f0d080]/60 italic mb-8">Keep dreaming, little one. The future is yours.</p>
      <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale:1.05 }}>Continue to Future Letters</motion.button>
    </motion.section>
  );
}
