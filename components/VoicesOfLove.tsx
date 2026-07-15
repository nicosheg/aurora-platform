"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VoicesOfLove({ voices, onNext }: { voices: any[]; onNext: () => void }) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (voice: any) => {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    if (playingId === voice.id) { setPlayingId(null); return; }
    const audio = new Audio(voice.audio);
    audio.play();
    setPlayingId(voice.id);
    audio.onended = () => setPlayingId(null);
    audioRef.current = audio;
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center"
    >
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">
        A Special World
      </motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-4">
        Voices of Love
      </h2>
      <p className="text-white/60 mb-10 text-sm">
        Tap a face to hear their voice • Tap the name to read their message
      </p>

      <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-12">
        {voices.map((voice: any) => (
          <motion.div key={voice.id} className="flex flex-col items-center gap-2">
            <motion.button
              onClick={() => handlePlay(voice)}
              className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl transition-all duration-300 ${
                playingId === voice.id
                  ? "bg-[#d4a574] shadow-lg shadow-[#d4a574]/40 scale-110"
                  : "glass-card-light hover:scale-105"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {playingId === voice.id ? "🔊" : voice.emoji}
            </motion.button>
            <p
              className="text-[#f0d080] font-serif text-sm cursor-pointer hover:text-white/90 transition-colors"
              onClick={() => setExpandedId(expandedId === voice.id ? null : voice.id)}
            >
              {voice.name}
            </p>
            <AnimatePresence>
              {expandedId === voice.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-white/70 text-sm italic max-w-[200px]"
                >
                  "{voice.message}"
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={onNext}
        className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]"
        whileHover={{ scale: 1.05 }}
      >
        Continue to Treasure Hunt
      </motion.button>
    </motion.section>
  );
}
