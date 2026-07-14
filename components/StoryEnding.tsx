"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StarField from "@/components/StarField";
import { useMusic } from "@/contexts/MusicContext";

export default function StoryEnding({ name, senderName, onNext }: { name: string; senderName: string; onNext: () => void }) {
  const [step, setStep] = useState(0);
  const { setAudioRef } = useMusic();
  const [audioEl, setAudioEl] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = document.querySelector("audio[loop]") as HTMLAudioElement;
    if (el) setAudioEl(el);
    const t1=setTimeout(()=>setStep(1),1000);
    const t2=setTimeout(()=>setStep(2),4000);
    const t3=setTimeout(()=>setStep(3),7000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    if (step===2 && audioEl) {
      let vol = audioEl.volume;
      const fade = setInterval(() => {
        vol = Math.max(0, vol - 0.02);
        audioEl.volume = vol;
        if (vol <= 0) { clearInterval(fade); audioEl.pause(); }
      }, 150);
    }
  }, [step, audioEl]);

  return (
    <motion.section initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0a05]">
      <StarField active={step>=0} />
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {step>=0 && <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} className="text-2xl md:text-4xl font-serif font-light text-[#f0d080]">Never stop dreaming.</motion.p>}
        {step>=1 && <motion.p initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} className="mt-6 text-2xl md:text-4xl font-serif font-light text-[#f0d080]">Never stop smiling.</motion.p>}
        {step>=2 && (
          <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="mt-12 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif font-light" style={{ background:"linear-gradient(135deg, #f0d080, #d4a574)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>You'll always be our little sister.</h2>
            <motion.div className="text-6xl" animate={{ scale:[1,1.3,1] }} transition={{ duration:2, repeat:Infinity }}>❤️</motion.div>
            <p className="text-white/40 text-sm">— {senderName}</p>
            <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale:1.05 }}>Time Capsule</motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
