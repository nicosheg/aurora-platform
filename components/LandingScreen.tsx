"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function LandingScreen({ onBegin, herName }: { onBegin: () => void; herName: string }) {
  const [step, setStep] = useState(0);
  const { startMusic } = useMusic();

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1200);
    const t2 = setTimeout(() => setStep(2), 4800);
    const t3 = setTimeout(() => setStep(3), 8800);
    const t4 = setTimeout(() => setStep(4), 12800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  const today = new Date().toLocaleDateString("en-US", { weekday:"long", year:"numeric", month:"long", day:"numeric" });

  const handleBegin = () => {
    startMusic();
    onBegin();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]"
      exit={{ opacity:0, filter:"blur(8px)" }}
      transition={{ duration:2, ease:[0.43,0.13,0.23,0.96] }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "rgba(212,139,160,0.06)" }}
          animate={{ scale:[1,1.12,1], opacity:[0.5,0.7,0.5] }}
          transition={{ duration:10, repeat:Infinity, ease:"easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity:0, y:-20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.3, duration:1.2 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 glass-card-light px-5 py-2.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#d48ba0] animate-pulse" />
                <span className="text-white/50 text-xs tracking-[0.2em] uppercase">Handcrafted for one person</span>
              </div>
              <p className="text-white/20 text-xs mt-3 font-mono">Visitors: 1 &nbsp;|&nbsp; Owner: {herName}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.p
              key="s1"
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0 }}
              transition={{ duration:2, ease:[0.43,0.13,0.23,0.96] }}
              className="text-2xl md:text-4xl font-serif font-light text-white/70"
            >
              Today is {today}.
            </motion.p>
          )}
          {step === 2 && (
            <motion.p
              key="s2"
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0 }}
              transition={{ duration:2 }}
              className="text-xl md:text-3xl font-serif font-light text-white/60"
            >
              Millions of people woke up today...
            </motion.p>
          )}
          {step === 3 && (
            <motion.p
              key="s3"
              initial={{ opacity:0, y:40 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0 }}
              transition={{ duration:2 }}
              className="text-2xl md:text-4xl font-serif font-light text-white/80"
            >
              But today belongs to one person.
            </motion.p>
          )}
          {step >= 4 && (
            <motion.div
              key="s4"
              initial={{ opacity:0, scale:0.95 }}
              animate={{ opacity:1, scale:1 }}
              transition={{ duration:2.5, ease:[0.43,0.13,0.23,0.96] }}
              className="space-y-12"
            >
              <motion.h1
                className="text-display font-serif font-light gradient-text leading-tight"
                initial={{ letterSpacing:"0.2em" }}
                animate={{ letterSpacing:"0.02em" }}
                transition={{ duration:2.5, delay:0.5 }}
              >
                Happy Birthday,<br/>{herName}
              </motion.h1>
              <motion.div
                initial={{ opacity:0, y:30 }}
                animate={{ opacity:1, y:0 }}
                transition={{ delay:2, duration:1.5 }}
              >
                <motion.button
                  onClick={handleBegin}
                  className="px-10 py-4 bg-gradient-to-br from-[#d48ba0] to-[#c08090] text-white font-serif text-lg rounded-full
                             shadow-2xl shadow-[#d48ba0]/25 hover:shadow-[#d48ba0]/45 transition-all duration-500"
                  whileHover={{ scale:1.04 }}
                  whileTap={{ scale:0.96 }}
                >
                  Begin Your Journey
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
