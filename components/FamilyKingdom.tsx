"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CountdownTimer from "@/components/CountdownTimer";

export default function FamilyKingdom({ timeline, onNext, afternoonUnlocked, birthdayDate, unlockTime }: { timeline: any[]; onNext: () => void; afternoonUnlocked: boolean; birthdayDate: string; unlockTime: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <motion.section initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Two</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">Family Kingdom</h2>
      <p className="text-white/60 mb-8">Tap each family member to see their special message.</p>
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-12">
        {timeline.slice(0,4).map((member, i) => (
          <motion.div key={i} className="glass-card-light p-6 cursor-pointer" whileHover={{ scale:1.05 }} onClick={() => setSelected(i)}>
            <div className="text-4xl mb-2">{member.time === "Mom" ? "👩‍👧" : member.time === "Dad" ? "👨‍👧" : member.time === "Brother" ? "👦" : "👵"}</div>
            <p className="text-[#f0d080] font-serif">{member.time}</p>
          </motion.div>
        ))}
      </div>
      {selected !== null && (
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="glass-card p-6 max-w-md mx-auto mb-8">
          <p className="text-white/80">{timeline[selected].description}</p>
        </motion.div>
      )}
      {afternoonUnlocked ? (
        <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale:1.05 }}>Continue to Treasure Hunt</motion.button>
      ) : (
        <CountdownTimer targetTime={unlockTime} targetDate={birthdayDate} onComplete={() => {}} />
      )}
    </motion.section>
  );
}
