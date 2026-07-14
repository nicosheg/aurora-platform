"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function StoryOpening({ name, onComplete, morningUnlocked }: { name: string; onComplete: () => void; morningUnlocked: boolean }) {
  const [step, setStep] = useState(0);
  const { startMusic } = useMusic();

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 3500);
    const t3 = setTimeout(() => setStep(3), 6000);
    const t4 = setTimeout(() => setStep(4), 8500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <motion.div className="fixed inset-0 z-[100] flex items-center justify-center" style={{ background: "radial-gradient(ellipse at center, #1a1208 0%, #0d0a05 100%)" }} exit={{ opacity:0 }} transition={{ duration:2 }}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-[#f0d080]" style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }} animate={{ opacity:[0,0.8,0], scale:[0,1.5,0], y:[0,-100] }} transition={{ duration:3+Math.random()*3, repeat:Infinity, delay:Math.random()*2 }} />
        ))}
      </div>
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <AnimatePresence mode="wait">
          {step===1 && (
            <motion.div key="s1" initial={{ opacity:0, scale:1.2 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}>
              <motion.p className="text-6xl mb-4" animate={{ rotate:[0,5,-5,0] }} transition={{ duration:2, repeat:Infinity }}>📖</motion.p>
              <p className="text-xl md:text-3xl font-serif font-light text-[#f0d080] italic">Every hero has a beginning…</p>
            </motion.div>
          )}
          {step===2 && <motion.p key="s2" initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} className="text-xl md:text-3xl font-serif font-light text-[#f0d080]">And yours started on a very special day.</motion.p>}
          {step===3 && <motion.p key="s3" initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} className="text-2xl md:text-4xl font-serif font-light text-[#f0d080]">Today we celebrate the hero you are.</motion.p>}
          {step>=4 && (
            <motion.div key="s4" initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} className="space-y-10">
              <motion.div animate={{ rotate:[0,10,-10,0] }} transition={{ duration:3, repeat:Infinity }} className="text-7xl">👑</motion.div>
              <h1 className="text-4xl md:text-6xl font-serif font-light" style={{ background:"linear-gradient(135deg, #f0d080 0%, #d4a574 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Happy Birthday,<br/>{name}</h1>
              {morningUnlocked ? (
                <motion.button onClick={() => { startMusic(); onComplete(); }} className="px-10 py-4 bg-gradient-to-br from-[#d4a574] to-[#b8956e] text-white font-serif text-lg rounded-full shadow-2xl" whileHover={{ scale:1.04 }} whileTap={{ scale:0.96 }}>Enter Your Story</motion.button>
              ) : (
                <p className="text-[#f0d080]/60">Your story begins soon… ⏳</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
