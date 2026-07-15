import CelebrationOverlay from "@/components/CelebrationOverlay";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SkyOfDreams({ onNext }: { onNext: () => void }) {
  const [dream, setDream] = useState("");
  const [lanterns, setLanterns] = useState<string[]>([]);

  const release = () => {
    if (dream.trim()) {
      setLanterns([...lanterns, dream]);
      setDream("");
    }
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-[#1a1a3a] to-[#0d0a05] relative overflow-hidden">
      <CelebrationOverlay />
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Five</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Sky of Dreams</h2>
      <div className="flex gap-2 mb-8 max-w-md w-full">
        <input type="text" value={dream} onChange={e => setDream(e.target.value)} placeholder="What do you dream of?" className="flex-1 p-3 rounded-xl bg-white/5 border border-[#d4a574]/30 text-white/80 font-serif" />
        <button onClick={release} className="px-4 py-3 bg-[#d4a574]/30 rounded-full text-[#f0d080]">Release</button>
      </div>
      <div className="relative w-full max-w-md h-64 mb-8 overflow-hidden">
        <AnimatePresence>
          {lanterns.map((l, i) => (
            <motion.div key={i} initial={{ y: 50, opacity: 0 }} animate={{ y: -200, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 5, ease: "linear" }} className="absolute left-1/2 transform -translate-x-1/2 text-2xl" style={{ bottom: 0 }}>
              🏮 {l}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale: 1.05 }}>
        See the Stars
      </motion.button>
    </motion.section>
  );
}
