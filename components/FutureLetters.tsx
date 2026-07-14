"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const letters = [
  { from:"Future Brother", message:"Dear Nana, I hope by now you've discovered just how unstoppable you are. I've always known it." },
  { from:"Future Mum", message:"My sweet girl, you have grown into someone so incredible. I am so proud." },
  { from:"Future Dad", message:"Nana, you carry our strength and love wherever you go. Keep shining." },
  { from:"Your Future Self", message:"Dear me, thank you for never giving up on your dreams. You're doing amazing." },
];

export default function FutureLetters({ onNext }: { onNext: () => void }) {
  const [opened, setOpened] = useState<number[]>([]);
  return (
    <motion.section initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Five</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">Future Letters</h2>
      <div className="space-y-4 max-w-md mx-auto mb-12">
        {letters.map((letter, i) => (
          <motion.div key={i} className="glass-card-light p-4 cursor-pointer" whileHover={{ scale:1.03 }} onClick={() => setOpened([...opened, i])}>
            <p className="text-[#f0d080] font-serif">💌 {letter.from}</p>
            {opened.includes(i) && <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} className="text-white/70 mt-2">{letter.message}</motion.p>}
          </motion.div>
        ))}
      </div>
      <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale:1.05 }}>See the Ending</motion.button>
    </motion.section>
  );
}
