"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function AudioPlayer({ src, label="Voice Message" }: { src:string; label?:string }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { lowerVolume, restoreVolume } = useMusic();

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      restoreVolume();
    } else {
      lowerVolume();
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleEnded = () => {
    setPlaying(false);
    restoreVolume();
  };

  const fmt = (s:number) => { const m=Math.floor(s/60), sec=Math.floor(s%60); return `${m}:${sec.toString().padStart(2,"0")}`; };

  return (
    <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="glass-card p-6 max-w-md mx-auto">
      <p className="text-white/60 text-sm uppercase tracking-widest mb-4 text-center">{label}</p>
      <div className="flex items-center gap-5">
        <motion.button onClick={toggle} className="w-14 h-14 rounded-full bg-gradient-to-br from-[#d48ba0] to-[#c08090] flex items-center justify-center shadow-lg shadow-[#d48ba0]/20" whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }}>
          {playing ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
          )}
        </motion.button>
        <div className="flex-1">
          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-[#d48ba0] to-[#f0c0d0] rounded-full" style={{ width:`${progress}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/40">
            <span>{audioRef.current ? fmt(audioRef.current.currentTime) : "0:00"}</span>
            <span>{duration ? fmt(duration) : "0:00"}</span>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={() => audioRef.current && setProgress((audioRef.current.currentTime/audioRef.current.duration)*100||0)}
        onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
        onEnded={handleEnded}
        preload="metadata"
      />
    </motion.div>
  );
}
