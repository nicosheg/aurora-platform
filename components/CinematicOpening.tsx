"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function CinematicOpening({ name, onComplete }: { name: string; onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const { startMusic } = useMusic();

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000);
    const t2 = setTimeout(() => setStep(2), 6500);
    const t3 = setTimeout(() => setStep(3), 11500);
    const t4 = setTimeout(() => setStep(4), 16500);
    const t5 = setTimeout(() => setStep(5), 21500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  const begin = () => { startMusic(); onComplete(); };

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.p key="l1" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="text-2xl md:text-4xl font-serif font-light text-white/80">
              Before every dream became reality...
            </motion.p>
          )}
          {step === 2 && (
            <motion.p key="l2" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="text-2xl md:text-4xl font-serif font-light text-white/80">
              ...before every hero changed the world...
            </motion.p>
          )}
          {step === 3 && (
            <motion.p key="l3" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="text-2xl md:text-4xl font-serif font-light text-white/80">
              ...they all had one thing in common.
            </motion.p>
          )}
          {step === 4 && (
            <motion.div key="l4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5 }} className="space-y-8">
              <motion.h1 className="text-5xl md:text-7xl font-serif font-bold gradient-text">{name}</motion.h1>
              <p className="text-white/60 font-serif text-xl">Chapter 16 begins today.</p>
            </motion.div>
          )}
          {step >= 5 && (
            <motion.div key="l5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="space-y-10">
              <motion.div className="text-8xl" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>✨</motion.div>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-white/80">The Sixteenth Chapter</h2>
              <motion.button
                onClick={begin}
                className="px-10 py-4 bg-gradient-to-br from-[#d4a574] to-[#b8956e] text-white font-serif text-xl rounded-full shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Journey
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
