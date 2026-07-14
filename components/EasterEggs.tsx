"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EasterEgg } from "@/types";

interface Props {
  eggs: EasterEgg[];
  timeOfDay?: "morning" | "afternoon" | "evening";
}

const icons: Record<string,string> = { star:"✦", heart:"♥", flower:"✿", moon:"☾", butterfly:"🦋" };

export default function EasterEggs({ eggs, timeOfDay = "morning" }: Props) {
  const [active, setActive] = useState<EasterEgg | null>(null);

  const handleTap = (egg: EasterEgg) => {
    if (navigator.vibrate) navigator.vibrate(20);
    setActive(egg);
  };

  return (
    <>
      {eggs.map(e => {
        // Show only some eggs based on time
        if (e.type === "butterfly" && timeOfDay !== "afternoon" && timeOfDay !== "evening") return null;
        if (e.type === "moon" && timeOfDay === "morning") return null;

        return (
          <motion.button
            key={e.id}
            className="fixed z-30 text-2xl cursor-pointer select-none hover:scale-150 transition-transform duration-500"
            style={{ left:`${e.position.x}%`, top:`${e.position.y}%` }}
            animate={
              e.type === "heart"
                ? { scale:[1,1.25,1], opacity:[0.7,1,0.7] }
                : e.animation==="pulse"
                ? { scale:[1,1.2,1], opacity:[0.5,1,0.5] }
                : e.animation==="sparkle"
                ? { rotate:[0,10,-10,0], opacity:[0.6,1,0.6] }
                : e.animation==="glow"
                ? { opacity:[0.5,0.9,0.5] }
                : e.animation==="flutter"
                ? { y:[0,-8,0], rotate:[0,5,-5,0] }
                : {}
            }
            transition={{ duration:2.5, repeat:Infinity, ease:"easeInOut" }}
            onClick={() => handleTap(e)}
            whileTap={{ scale:0.7 }}
          >
            <span className="opacity-50 hover:opacity-100 transition-opacity">{icons[e.type] || "✦"}</span>
          </motion.button>
        );
      })}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale:0.8, y:20 }}
              animate={{ scale:1, y:0 }}
              exit={{ scale:0.8, y:20 }}
              transition={{ type:"spring", stiffness:300, damping:25 }}
              className="glass-card p-8 max-w-sm mx-4 text-center"
              onClick={e => e.stopPropagation()}
            >
              <motion.span
                className="text-5xl mb-4 block"
                animate={{ scale:[1,1.3,1] }}
                transition={{ duration:1.5, repeat:Infinity }}
              >
                {icons[active.type]}
              </motion.span>
              <p className="text-white/80 font-serif text-lg leading-relaxed">{active.message}</p>
              <button className="mt-6 text-white/40 text-sm hover:text-white/70 transition-colors" onClick={() => setActive(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
