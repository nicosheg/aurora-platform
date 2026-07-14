"use client";
import { createContext, useContext, useRef, useState, useCallback } from "react";

interface MusicContextType {
  startMusic: () => void;
  lowerVolume: () => void;
  restoreVolume: () => void;
  setAudioRef: (ref: HTMLAudioElement) => void;
  isPlaying: boolean;
}

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const normalVolume = 0.25;
  const loweredVolume = 0.06;

  const setAudioRef = useCallback((ref: HTMLAudioElement) => {
    audioRef.current = ref;
  }, []);

  const startMusic = useCallback(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    audio.volume = 0;
    audio.play().then(() => {
      let vol = 0;
      const fadeIn = setInterval(() => {
        vol += 0.015;
        audio.volume = Math.min(vol, normalVolume);
        if (vol >= normalVolume) clearInterval(fadeIn);
      }, 100);
      setIsPlaying(true);
    }).catch(() => {});
  }, []);

  const lowerVolume = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = loweredVolume;
  }, []);

  const restoreVolume = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = normalVolume;
  }, []);

  return (
    <MusicContext.Provider value={{ startMusic, lowerVolume, restoreVolume, setAudioRef, isPlaying }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used within MusicProvider");
  return ctx;
}
