"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function KingdomOfLove({ family, voices, onNext }: { family: any[]; voices: any[]; onNext: () => void }) {
  const [selected, setSelected] = useState<any>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (voice: any) => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    if (playingId === voice.id) { setPlayingId(null); return; }
    const audio = new Audio(voice.audio);
    audio.play(); setPlayingId(voice.id);
    audio.onended = () => setPlayingId(null);
    audioRef.current = audio;
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Two</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Kingdom of Love</h2>
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-12">
        {family.map((member, i) => (
          <motion.div key={i} className="glass-card-light p-6 cursor-pointer" whileHover={{ scale: 1.05 }} onClick={() => setSelected(member)}>
            <div className="text-4xl mb-2">🏰</div>
            <p className="text-[#f0d080] font-serif">{member.time}</p>
            {voices?.find((v: any) => v.name === member.time) && (
              <button onClick={(e) => { e.stopPropagation(); handlePlay(voices.find((v: any) => v.name === member.time)); }}
                className="mt-2 text-xs text-white/50 hover:text-white/80">
                {playingId === voices.find((v: any) => v.name === member.time)?.id ? "🔊 Playing" : "🎤 Listen"}
              </button>
            )}
          </motion.div>
        ))}
      </div>
      {selected && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 max-w-md mx-auto mb-8">
          <p className="text-white/80">{selected.description}</p>
        </motion.div>
      )}
      <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale: 1.05 }}>
        Enter the Forest
      </motion.button>
    </motion.section>
  );
}
