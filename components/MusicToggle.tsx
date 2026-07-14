"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function MusicToggle({ musicUrl }: { musicUrl: string }) {
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { setAudioRef, startMusic: contextStart, isPlaying } = useMusic();

  useEffect(() => {
    if (audioRef.current) setAudioRef(audioRef.current);
  }, [setAudioRef]);

  useEffect(() => {
    if (isPlaying) setPlaying(true);
    else setPlaying(false);
  }, [isPlaying]);

  const toggle = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      contextStart();
      return;
    }
    if (!audioRef.current) return;
    if (playing) { audioRef.current.pause(); setPlaying(false); }
    else { audioRef.current.play(); setPlaying(true); }
  };

  return (
    <>
      <motion.button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card-light flex items-center justify-center hover:border-white/30 transition-all duration-500"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {playing ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" fill="white" stroke="none" />
            <circle cx="18" cy="16" r="3" fill="white" stroke="none" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        )}
      </motion.button>
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
    </>
  );
}
