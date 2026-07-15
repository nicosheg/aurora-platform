import CelebrationOverlay from "@/components/CelebrationOverlay";
"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function KingdomOfLove({ family, voices, onNext }: { family: any[]; voices: any[]; onNext: () => void }) {
  const [selected, setSelected] = useState<any>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { lowerVolume, restoreVolume } = useMusic();

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
        restoreVolume();
      }
    };
  }, []);

  const getVoicesForMember = (memberName: string) => {
    return voices.filter((v: any) => v.name === memberName);
  };

  const playSequential = async (voiceList: any[], index: number = 0) => {
    if (index >= voiceList.length) {
      setPlayingId(null);
      restoreVolume();
      return;
    }
    const voice = voiceList[index];
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    const audio = new Audio(voice.audio);
    audioRef.current = audio;
    lowerVolume();
    setPlayingId(voice.id);
    audio.play().catch(() => {});

    audio.onended = () => {
      playSequential(voiceList, index + 1);
    };
  };

  const handlePlay = (memberName: string) => {
    const memberVoices = getVoicesForMember(memberName);
    if (memberVoices.length === 0) return;

    if (playingId) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setPlayingId(null);
      restoreVolume();
      return;
    }

    playSequential(memberVoices);
  };

  const hasVoice = (memberName: string) => {
    return getVoicesForMember(memberName).length > 0;
  };

  return (
    <motion.section
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Two</motion.p>
      <CelebrationOverlay />
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Kingdom of Love</h2>
      <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-12">
        {family.slice(0, 4).map((member, i) => {
          const memberHasVoice = hasVoice(member.time);
          return (
            <motion.div key={i} className="glass-card-light p-6 cursor-pointer" whileHover={{ scale: 1.05 }} onClick={() => setSelected(member)}>
              <div className="text-4xl mb-2">🏰</div>
              <p className="text-[#f0d080] font-serif">{member.time}</p>
              {memberHasVoice && (
                <button
                  onClick={(e) => { e.stopPropagation(); handlePlay(member.time); }}
                  className="mt-2 text-xs text-white/50 hover:text-white/80"
                >
                  {playingId && getVoicesForMember(member.time).some(v => v.id === playingId) ? "🔊 Playing..." : "🎤 Listen"}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
      {/* 5th person (Antydupe) centered */}
      {family.length > 4 && (
        <div className="flex justify-center mb-12">
          <motion.div
            className="glass-card-light p-6 cursor-pointer w-40"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(family[4])}
          >
            <div className="text-4xl mb-2">🏰</div>
            <p className="text-[#f0d080] font-serif">{family[4].time}</p>
            {hasVoice(family[4].time) && (
              <button
                onClick={(e) => { e.stopPropagation(); handlePlay(family[4].time); }}
                className="mt-2 text-xs text-white/50 hover:text-white/80"
              >
                {playingId && getVoicesForMember(family[4].time).some(v => v.id === playingId) ? "🔊 Playing..." : "🎤 Listen"}
              </button>
            )}
          </motion.div>
        </div>
      )}
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
