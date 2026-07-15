"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function TributeHidden({ envelopes, voiceNoteUrl, onNext, onBack }: { envelopes: string[]; voiceNoteUrl?: string; onNext: () => void; onBack: () => void }) {
  const [opened, setOpened] = useState<number | null>(null);
  const [playingVoice, setPlayingVoice] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { lowerVolume, restoreVolume } = useMusic();

  const allEnvelopes = voiceNoteUrl
    ? [...envelopes, "A voice note just for you."]
    : envelopes;

  const handleOpen = (index: number) => {
    if (voiceNoteUrl && index === envelopes.length) {
      // Play voice note
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        restoreVolume();
        setPlayingVoice(false);
        setOpened(null);
      } else {
        const audio = new Audio(voiceNoteUrl);
        audioRef.current = audio;
        lowerVolume();
        audio.play();
        setPlayingVoice(true);
        setOpened(index);
        audio.onended = () => {
          restoreVolume();
          setPlayingVoice(false);
          setOpened(null);
          audioRef.current = null;
        };
      }
    } else {
      setOpened(opened === index ? null : index);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p className="text-[#d48ba0] text-sm uppercase tracking-[0.3em] mb-8">Things I've Never Said</motion.p>
      <div className="flex flex-wrap justify-center gap-6 max-w-md">
        {allEnvelopes.map((msg, i) => (
          <motion.button
            key={i}
            className={`p-4 glass-card-light rounded-full text-3xl ${opened === i ? "bg-[#d48ba0]/20" : ""}`}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleOpen(i)}
          >
            {voiceNoteUrl && i === envelopes.length
              ? playingVoice ? "🔊" : "🎤"
              : opened === i ? "📩" : "✉️"}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {opened !== null && opened < envelopes.length && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-white/70 font-serif italic max-w-md"
          >
            {envelopes[opened]}
          </motion.p>
        )}
      </AnimatePresence>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d48ba0] text-sm">Continue →</button>
      </div>
    </section>
  );
}
