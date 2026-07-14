"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer({ targetTime, targetDate, onComplete }: { targetTime:string; targetDate:string; onComplete:()=>void }) {
  const [left, setLeft] = useState<{h:number;m:number;s:number}|null>(null);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const [h,m] = targetTime.split(":").map(Number);
    const tgt = new Date(targetDate); tgt.setHours(h,m,0,0);
    const upd = () => {
      const d = tgt.getTime()-Date.now();
      if(d<=0) { setDone(true); onComplete(); return; }
      setLeft({ h:Math.floor(d/3600000), m:Math.floor((d%3600000)/60000), s:Math.floor((d%60000)/1000) });
    };
    upd(); const i = setInterval(upd,1000); return () => clearInterval(i);
  }, [targetTime, targetDate, onComplete]);
  if(done) return null;
  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="text-center py-12">
      <p className="text-lg text-white/60 font-light mb-6 font-serif italic">The next chapter opens in...</p>
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {left && (
          <>
            <div className="flex flex-col items-center"><div className="glass-card-light w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"><span className="text-3xl md:text-4xl font-light font-serif gradient-text">{String(left.h).padStart(2,"0")}</span></div><span className="text-xs text-white/40 mt-2 uppercase tracking-widest">Hours</span></div>
            <span className="text-2xl text-white/20 font-light mb-6">:</span>
            <div className="flex flex-col items-center"><div className="glass-card-light w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"><span className="text-3xl md:text-4xl font-light font-serif gradient-text">{String(left.m).padStart(2,"0")}</span></div><span className="text-xs text-white/40 mt-2 uppercase tracking-widest">Minutes</span></div>
            <span className="text-2xl text-white/20 font-light mb-6">:</span>
            <div className="flex flex-col items-center"><div className="glass-card-light w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"><span className="text-3xl md:text-4xl font-light font-serif gradient-text">{String(left.s).padStart(2,"0")}</span></div><span className="text-xs text-white/40 mt-2 uppercase tracking-widest">Seconds</span></div>
          </>
        )}
      </div>
    </motion.div>
  );
}
