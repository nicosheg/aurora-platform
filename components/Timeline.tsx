"use client";
import { motion } from "framer-motion";
import { TimelineMemory } from "@/types";
import { useState } from "react";

export default function Timeline({ memories }: { memories: TimelineMemory[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d48ba0]/40 via-[#d48ba0]/20 to-transparent" />
      <div className="space-y-12 md:space-y-16">
        {memories.map((m,i) => {
          const isLeft = i%2===0, isOpen = expanded===m.id;
          return (
            <motion.div key={m.id} initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.15 }}
              className={`relative flex items-start gap-6 md:gap-0 ${isLeft?"md:flex-row":"md:flex-row-reverse"}`}>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-[#d48ba0] shadow-[0_0_12px_rgba(212,139,160,0.5)] z-10 mt-2" />
              <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft?"md:pr-12 md:text-right":"md:pl-12"}`}>
                <div className="glass-card-light p-5 md:p-6 cursor-pointer hover:border-white/20 transition-all" onClick={() => setExpanded(isOpen?null:m.id)}>
                  <span className="text-xs text-[#d48ba0] uppercase tracking-widest font-light">{m.time}</span>
                  <h3 className="text-lg md:text-xl font-serif text-white/90 mt-2">{m.title}</h3>
                  <motion.div animate={{ height:isOpen?"auto":0, opacity:isOpen?1:0 }} className="overflow-hidden">
                    <p className="text-white/60 text-sm leading-relaxed mt-3">{m.description}</p>
                    {m.image && <img src={m.image} alt={m.title} className="mt-4 rounded-xl w-full object-cover max-h-48" />}
                  </motion.div>
                  {!isOpen && <p className="text-white/40 text-xs mt-2">Tap to expand</p>}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
