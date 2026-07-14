"use client";
import { motion } from "framer-motion";
import { MemoryPhoto } from "@/types";
import MemoryGallery from "./MemoryGallery";
import ConfettiEffect from "./ConfettiEffect";
import { useState, useEffect } from "react";

export default function ChapterOne({ herName, greeting, message, photos, birthdayDate }: { herName:string; greeting:string; message:string; photos:MemoryPhoto[]; birthdayDate:string }) {
  const [confetti, setConfetti] = useState(false);
  useEffect(() => { const t = setTimeout(() => setConfetti(true), 1200); return () => clearTimeout(t); }, []);
  const date = new Date(birthdayDate).toLocaleDateString("en-US", { weekday:"long", year:"numeric", month:"long", day:"numeric" });

  return (
    <section className="relative min-h-screen py-24 px-4">
      <ConfettiEffect active={confetti} />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Chapter label */}
        <motion.p
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.3 }}
          className="text-[#d48ba0] text-sm uppercase tracking-[0.3em] text-center mb-8"
        >
          Chapter One — Today Begins
        </motion.p>

        {/* Greeting */}
        <motion.div
          initial={{ opacity:0, y:50 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:1.2, ease:[0.43,0.13,0.23,0.96] }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-display font-serif font-light gradient-text leading-tight"
            initial={{ letterSpacing:"0.3em" }} animate={{ letterSpacing:"0.02em" }}
            transition={{ duration:2, delay:0.5 }}
          >
            {greeting}
          </motion.h1>
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }} className="mt-6 space-y-2">
            <p className="text-white/70 font-light text-lg font-serif italic">{herName}</p>
            <p className="text-white/50 text-sm">{date}</p>
          </motion.div>
          <LiveClock />
        </motion.div>

        {/* Message card */}
        <motion.div
          initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:2, duration:1 }}
          className="glass-card p-8 md:p-12 mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-white/80 text-lg leading-relaxed font-light font-serif">{message}</p>
        </motion.div>

        {/* Gallery */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.8 }} className="mb-12">
          <h2 className="text-2xl font-serif text-white/90 text-center mb-8">Moments to treasure</h2>
          <MemoryGallery photos={photos} />
        </motion.div>

        {/* Teaser */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:3.5 }} className="text-center">
          <p className="text-white/50 font-serif italic text-lg">This isn&apos;t everything.</p>
          <p className="text-white/40 text-sm mt-2">Come back later today for Chapter Two.</p>
        </motion.div>
      </div>
    </section>
  );
}

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => { const u = () => setTime(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true})); u(); const i = setInterval(u,1000); return () => clearInterval(i); }, []);
  return <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }} className="text-white/40 text-sm font-mono mt-2">{time}</motion.p>;
}
