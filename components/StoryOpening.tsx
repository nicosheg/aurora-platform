"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function StoryOpening({ name, onComplete, morningUnlocked }: { name: string; onComplete: () => void; morningUnlocked: boolean }) {
  const [step, setStep] = useState(1);
  const { startMusic } = useMusic();

  useEffect(() => {
    const t2 = setTimeout(() => setStep(2), 4000);
    const t3 = setTimeout(() => setStep(3), 8000);
    const t4 = setTimeout(() => setStep(4), 12000);
    return () => { clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const handleEnter = () => {
    startMusic();
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #fef7e0 0%, #f5e6c8 100%)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Subtle golden particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#d4a574]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0, 0.6, 0], scale: [0, 1.5, 0], y: [0, -50] }}
            transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-light text-[#4a3728] leading-relaxed">
                Some days are ordinary.
              </h2>
            </motion.div>
          )}

          {step === 2 && (
            <motion.p
              key="s2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl md:text-5xl font-serif font-light text-[#4a3728] leading-relaxed"
            >
              Today isn't one of them.
            </motion.p>
          )}

          {step === 3 && (
            <motion.p
              key="s3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="text-3xl md:text-5xl font-serif font-light text-[#4a3728] leading-relaxed"
            >
              Today is completely, beautifully yours.
            </motion.p>
          )}

          {step >= 4 && (
            <motion.div
              key="s4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="space-y-10"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-8xl"
              >
                ✨
              </motion.div>
              <h1
                className="text-5xl md:text-7xl font-serif font-bold"
                style={{
                  background: "linear-gradient(135deg, #c08090 0%, #d4a574 50%, #b8956e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Happy 16th,<br/>{name}
              </h1>
              <p className="text-[#4a3728]/60 font-serif italic text-lg">
                A day designed entirely for you.
              </p>
              {morningUnlocked ? (
                <motion.button
                  onClick={handleEnter}
                  className="px-10 py-4 bg-gradient-to-br from-[#c08090] to-[#d4a574] text-white font-serif text-xl rounded-full
                             shadow-2xl shadow-[#c08090]/30 hover:shadow-[#c08090]/50 transition-all duration-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Begin Your Experience
                </motion.button>
              ) : (
                <p className="text-[#4a3728]/60 font-serif text-lg animate-pulse">
                  Your experience begins soon…
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
