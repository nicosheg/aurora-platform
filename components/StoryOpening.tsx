"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function StoryOpening({ name, onComplete, morningUnlocked }: { name: string; onComplete: () => void; morningUnlocked: boolean }) {
  const [step, setStep] = useState(0);
  const { startMusic } = useMusic();

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1200);
    const t2 = setTimeout(() => setStep(2), 5000);
    const t3 = setTimeout(() => setStep(3), 9000);
    const t4 = setTimeout(() => setStep(4), 13000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const handleEnter = () => {
    startMusic();
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "radial-gradient(ellipse at center, #fef7e0 0%, #f5e6c8 100%)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#d4a574]"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0, 0.7, 0], scale: [0, 1.5, 0], y: [0, -60] }}
            transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Book frame decoration */}
        <div className="absolute inset-0 border-4 border-[#d4a574]/20 rounded-3xl -m-8 pointer-events-none">
          <span className="absolute top-3 left-5 text-3xl text-[#d4a574]/25">✦</span>
          <span className="absolute top-3 right-5 text-3xl text-[#d4a574]/25">✦</span>
          <span className="absolute bottom-3 left-5 text-3xl text-[#d4a574]/25">✦</span>
          <span className="absolute bottom-3 right-5 text-3xl text-[#d4a574]/25">✦</span>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                📖
              </motion.div>
              <p className="text-2xl md:text-4xl font-serif italic text-[#4a3728] leading-relaxed">
                Every hero has a beginning…
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.p
              key="s2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-serif italic text-[#4a3728] leading-relaxed"
            >
              And yours started on a very special day.
            </motion.p>
          )}

          {step === 3 && (
            <motion.p
              key="s3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-serif italic text-[#4a3728] leading-relaxed"
            >
              Today we celebrate the hero you are.
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
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="text-8xl"
              >
                👑
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
                Happy Birthday,<br/>{name}
              </h1>
              <p className="text-[#4a3728]/70 font-serif italic text-lg">
                Turn the page to begin your adventure…
              </p>
              {morningUnlocked ? (
                <motion.button
                  onClick={handleEnter}
                  className="px-10 py-4 bg-gradient-to-br from-[#c08090] to-[#d4a574] text-white font-serif text-xl rounded-full
                             shadow-2xl shadow-[#c08090]/30 hover:shadow-[#c08090]/50 transition-all duration-700
                             border-2 border-[#f0d080]/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✨ Open Your Storybook ✨
                </motion.button>
              ) : (
                <p className="text-[#4a3728]/60 font-serif text-lg animate-pulse">
                  Your story begins soon… ⏳
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
