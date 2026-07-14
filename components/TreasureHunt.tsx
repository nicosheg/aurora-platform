"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const treasures = [
  { id:1, type:"🦋", message:"You make people smile without even trying. That's a superpower." },
  { id:2, type:"⭐", message:"You are braver than you think, stronger than you seem, and loved more than you know." },
  { id:3, type:"🌸", message:"Your laugh is the sweetest sound in the world." },
  { id:4, type:"🎁", message:"The greatest gift is being your big brother." },
];

export default function TreasureHunt({ onNext }: { onNext: () => void }) {
  const [found, setFound] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const discover = (id:number) => { if (!found.includes(id)) setFound([...found, id]); setActive(id); };
  return (
    <motion.section initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Three</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">Treasure Hunt</h2>
      <p className="text-white/60 mb-8">Find the hidden treasures – tap each one.</p>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {treasures.map(t => (
          <motion.button key={t.id} className="text-5xl p-4 glass-card-light rounded-full" whileHover={{ scale:1.2 }} whileTap={{ scale:0.8 }} onClick={() => discover(t.id)}>{t.type}</motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active && <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0 }} className="glass-card p-6 max-w-md mb-8"><p className="text-white/80">{treasures.find(t=>t.id===active)?.message}</p></motion.div>}
      </AnimatePresence>
      {found.length === 4 && <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale:1.05 }}>Continue to Dream World</motion.button>}
    </motion.section>
  );
}
