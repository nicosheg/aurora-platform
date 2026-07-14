"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import AudioPlayer from "./AudioPlayer";
import { useMusic } from "@/contexts/MusicContext";

export default function ChapterThree({ letter, voiceMessageUrl, videoUrl, finalSurprise, herName }: { letter:string[]; voiceMessageUrl:string; videoUrl:string; finalSurprise:string; herName:string }) {
  const [reveal, setReveal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lowerVolume, restoreVolume } = useMusic();

  const handleVideoPlay = () => {
    lowerVolume();
  };
  const handleVideoPause = () => {
    restoreVolume();
  };
  const handleVideoEnded = () => {
    restoreVolume();
  };

  return (
    <section className="relative min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-12">
          <motion.p className="text-[#d48ba0] text-sm uppercase tracking-[0.3em] mb-4">Final Chapter</motion.p>
          <h2 className="text-heading font-serif font-light gradient-text">A Letter for You</h2>
        </motion.div>
        <motion.div className="glass-card p-8 md:p-12 mb-12" initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
          {letter.map((p,i) => (
            <motion.p key={i} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.6 }} className="text-white/70 font-serif text-lg leading-relaxed mb-5 last:mb-0">{p}</motion.p>
          ))}
          <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ delay:letter.length*0.6+0.5 }} className="text-white/40 text-sm mt-6 text-right font-serif italic">— MrNicosh</motion.p>
        </motion.div>
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:0.5 }} className="mb-12">
          <AudioPlayer src={voiceMessageUrl} label="A Voice Message for You" />
        </motion.div>
        {videoUrl && (
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:0.7 }} className="mb-12">
            <div className="glass-card overflow-hidden">
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                className="w-full rounded-xl"
                poster="/photos/video-poster.jpg"
                preload="metadata"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnded}
              />
            </div>
          </motion.div>
        )}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} transition={{ delay:1 }} className="text-center">
          {!reveal ? (
            <motion.button onClick={() => setReveal(true)} className="px-10 py-5 glass-card-light text-white/80 font-serif text-lg hover:border-[#d48ba0]/40" whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}>I have one last gift...</motion.button>
          ) : (
            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} className="glass-card p-8 md:p-10">
              <span className="text-4xl mb-4 block">🎁</span>
              <p className="text-white/80 font-serif text-xl leading-relaxed">{finalSurprise}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
