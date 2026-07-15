"use client";
import { motion } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";
import { useEffect, useState } from "react";

export default function TheEnding({ name, senderName, onNext }: { name: string; senderName: string; onNext: () => void }) {
  const { startMusic } = useMusic();
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-black">
      {step >= 0 && (
        <motion.p className="text-2xl md:text-4xl font-serif font-light text-white/80">This wasn't the end of your birthday.</motion.p>
      )}
      {step >= 1 && (
        <motion.p className="mt-6 text-2xl md:text-4xl font-serif font-light text-white/80">It was the beginning of your story.</motion.p>
      )}
      {step >= 2 && (
        <motion.div className="mt-12">
          <h1 className="text-5xl md:text-7xl font-serif font-bold gradient-text">{name}</h1>
          <p className="text-white/40 mt-4">— {senderName}</p>
          <button onClick={onNext} className="mt-8 px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]">Time Capsule</button>
        </motion.div>
      )}
    </motion.section>
  );
}
