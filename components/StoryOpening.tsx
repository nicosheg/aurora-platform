"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function StoryOpening({ name, onComplete, morningUnlocked }: { name: string; onComplete: () => void; morningUnlocked: boolean }) {
  const [step, setStep] = useState(0);
  const { startMusic } = useMusic();

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 2000);
    const t2 = setTimeout(() => setStep(2), 6500);
    const t3 = setTimeout(() => setStep(3), 11500);
    const t4 = setTimeout(() => setStep(4), 16500);
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
      exit={{ opacity:0, filter:"blur(8px)", scale:1.05 }}
      transition={{ duration:1.5, ease:[0.43,0.13,0.23,0.96] }}
    >
      {/* Book spine and page texture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[90%] max-w-2xl h-[80%] border-4 border-[#d4a574]/40 rounded-3xl bg-[#fef9ee]/50 backdrop-blur-sm shadow-2xl relative overflow-hidden">
          {/* Decorative corner flourishes */}
          <span className="absolute top-4 left-6 text-4xl text-[#d4a574]/30">✦</span>
          <span className="absolute top-4 right-6 text-4xl text-[#d4a574]/30">✦</span>
          <span className="absolute bottom-4 left-6 text-4xl text-[#d4a574]/30">✦</span>
          <span className="absolute bottom-4 right-6 text-4xl text-[#d4a574]/30">✦</span>
          {/* Spine line in the center */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#d4a574]/20 transform -translate-x-1/2" />
        </div>
      </div>

      {/* Floating golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: "#d4a574",
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              y: [0, -80],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-xl">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="s1"
              initial={{ opacity:0, scale:1.3 }}
              animate={{ opacity:1, scale:1 }}
              exit={{ opacity:0 }}
              transition={{ duration:1.8, ease:"easeOut" }}
            >
              <motion.div
                className="text-8xl mb-6"
                animate={{ rotate:[0, 2, -2, 0], scale:[1, 1.02, 1] }}
                transition={{ duration:3, repeat:Infinity, ease:"easeInOut" }}
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
              initial={{ opacity:0, y:50 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0 }}
              transition={{ duration:2, ease:"easeOut" }}
              className="text-2xl md:text-4xl font-serif italic text-[#4a3728] leading-relaxed"
            >
              And yours started on a very special day.
            </motion.p>
          )}

          {step === 3 && (
            <motion.p
              key="s3"
              initial={{ opacity:0, y:50 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0 }}
              transition={{ duration:2, ease:"easeOut" }}
              className="text-2xl md:text-4xl font-serif italic text-[#4a3728] leading-relaxed"
            >
              Today we celebrate the hero you are.
            </motion.p>
          )}

          {step >= 4 && (
            <motion.div
              key="s4"
              initial={{ opacity:0, scale:0.95 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ duration:2.5, ease:[0.43,0.13,0.23,0.96] }}
              className="space-y-10"
            >
              <motion.div
                animate={{ rotate:[0, 8, -8, 0] }}
                transition={{ duration:4, repeat:Infinity }}
                className="text-8xl"
              >
                👑
              </motion.div>
              <h1
                className="text-5xl md:text-7xl font-serif font-bold tracking-wide"
                style={{
                  background: "linear-gradient(135deg, #c08090 0%, #d4a574 50%, #b8956e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 2px 10px rgba(180,130,100,0.2)",
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
                  whileHover={{ scale:1.05 }}
                  whileTap={{ scale:0.95 }}
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
