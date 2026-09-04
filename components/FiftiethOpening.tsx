"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function FiftiethOpening({ number, years, lines, buttonText, name, onNext }: { number: string; years: string; lines: string[]; buttonText: string; name: string; onNext: () => void }) {
  const [step, setStep] = useState(0);
  const { startMusic } = useMusic();

  useEffect(() => {
    const timers = lines.map((_, i) => setTimeout(() => setStep(i + 1), 2000 + i * 2500));
    const finalTimer = setTimeout(() => setStep(lines.length + 1), 2000 + lines.length * 2500);
    return () => { timers.forEach(clearTimeout); clearTimeout(finalTimer); };
  }, [lines.length]);

  const handleBegin = () => { startMusic(); onNext(); };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h1
            key="number"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-8xl md:text-9xl font-serif font-bold text-white"
          >
            {number}
          </motion.h1>
        )}
        {step === 1 && (
          <motion.p
            key="years"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-4xl md:text-6xl font-serif font-light text-[#d4a574]"
          >
            {years}
          </motion.p>
        )}
        {step > 1 && step <= lines.length + 1 && (
          <motion.p
            key={`line-${step}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-2xl md:text-4xl font-serif font-light text-white/80 max-w-2xl leading-relaxed"
          >
            {lines[step - 2]}
          </motion.p>
        )}
        {step === lines.length + 2 && (
          <motion.div key="final" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold gradient-text">Happy 50th Birthday</h2>
            <p className="text-white/60 font-serif text-xl">{name}</p>
            <button onClick={handleBegin} className="px-10 py-4 bg-gradient-to-br from-[#d4a574] to-[#b8956e] text-white font-serif text-xl rounded-full shadow-2xl">{buttonText}</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
