"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function FamilySpeaks({ title, voices, onNext, onBack }: { title: string; voices: { name: string; audio: string }[]; onNext: () => void; onBack: () => void }) {
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { lowerVolume, restoreVolume } = useMusic();

  const play = (name: string, src: string) => {
    if (!src) return; // do nothing if no audio
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; restoreVolume(); }
    if (playing === name) { setPlaying(null); return; }
    const audio = new Audio(src);
    audioRef.current = audio;
    lowerVolume();
    audio.play();
    setPlaying(name);
    audio.onended = () => { restoreVolume(); setPlaying(null); audioRef.current = null; };
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#d4a574] mb-12">{title}</h2>
      <div className="grid grid-cols-2 gap-6 max-w-md">
        {voices.map((v) => (
          <motion.button
            key={v.name}
            className={`glass-card-light p-6 ${v.audio ? "" : "opacity-50 cursor-not-allowed"}`}
            whileHover={v.audio ? { scale: 1.05 } : {}}
            onClick={() => play(v.name, v.audio)}
          >
            <p className="text-[#d4a574] font-serif">{v.name}</p>
            {v.audio ? (playing === v.name ? "🔊 Playing" : "🎤 Listen") : "Coming soon"}
          </motion.button>
        ))}
      </div>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d4a574] text-sm">Continue →</button>
      </div>
    </section>
  );
}
