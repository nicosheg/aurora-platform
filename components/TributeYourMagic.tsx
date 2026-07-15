"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TributeYourMagic({ title, intro, explorer, fiduciaHelp, secondImage, onNext, onBack }: { title: string; intro: string; explorer: string; fiduciaHelp: string; secondImage?: string; onNext: () => void; onBack: () => void }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
      <motion.p className="text-[#d48ba0] text-sm uppercase tracking-[0.3em] mb-6">{title}</motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl space-y-6"
      >
        <p className="text-white/80 font-serif text-xl leading-relaxed">{intro}</p>
        <p className="text-white/70 font-serif text-lg">{explorer}</p>
        <p className="text-white/70 font-serif text-lg">{fiduciaHelp}</p>
      </motion.div>

      {/* Floating second image that appears when you tap a star */}
      <motion.button
        className="mt-10 text-4xl"
        whileHover={{ scale: 1.2 }}
        onClick={() => setShowImage(!showImage)}
      >
        ⭐
      </motion.button>
      <AnimatePresence>
        {showImage && secondImage && (
          <motion.img
            src={secondImage}
            alt="Special memory"
            className="mt-4 w-48 h-48 object-cover rounded-2xl border-2 border-[#d48ba0]/30 shadow-2xl"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        )}
      </AnimatePresence>

      <p className="text-white/40 text-xs mt-4">Tap the star to reveal a memory</p>

      <div className="flex gap-4 mt-10">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d48ba0] text-sm">Continue →</button>
      </div>
    </section>
  );
}
