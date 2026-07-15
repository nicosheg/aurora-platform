"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

const pages = [
  { text: "Every hero has a beginning…", emoji: "📖" },
  { text: "And yours started on a very special day.", emoji: "🌟" },
  { text: "Today we celebrate the hero you are.", emoji: "👑" },
];

export default function StoryOpening({ name, onComplete, morningUnlocked }: { name: string; onComplete: () => void; morningUnlocked: boolean }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [started, setStarted] = useState(false);
  const { startMusic } = useMusic();

  useEffect(() => {
    // Start immediately with first page
    const t0 = setTimeout(() => setStarted(true), 500);
    return () => clearTimeout(t0);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (currentPage < pages.length) {
      const timer = setTimeout(() => setCurrentPage(prev => prev + 1), 4000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => setShowFinal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, started]);

  const handleEnter = () => {
    startMusic();
    onComplete();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse at center, #fef7e0 0%, #f5e6c8 100%)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative w-[90%] max-w-2xl h-[75%] flex items-center justify-center perspective-1000">
        {/* Book frame */}
        <div className="absolute inset-0 border-4 border-[#d4a574]/40 rounded-3xl bg-[#fef9ee]/60 backdrop-blur-sm shadow-2xl overflow-hidden">
          <span className="absolute top-4 left-6 text-4xl text-[#d4a574]/30">✦</span>
          <span className="absolute top-4 right-6 text-4xl text-[#d4a574]/30">✦</span>
          <span className="absolute bottom-4 left-6 text-4xl text-[#d4a574]/30">✦</span>
          <span className="absolute bottom-4 right-6 text-4xl text-[#d4a574]/30">✦</span>
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#d4a574]/20 transform -translate-x-1/2" />
        </div>

        {/* Pages or final screen */}
        <AnimatePresence>
          {!showFinal && started && currentPage < pages.length && (
            <motion.div
              key={`page-${currentPage}`}
              className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center z-10"
              style={{ background: "#fef9ee", borderRadius: "20px", transformOrigin: "left center", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              initial={{ rotateY: -180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.645, 0.045, 0.355, 1] }}
            >
              <motion.div className="text-8xl mb-8" animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                {pages[currentPage].emoji}
              </motion.div>
              <p className="text-2xl md:text-4xl font-serif italic text-[#4a3728] leading-relaxed">
                {pages[currentPage].text}
              </p>
            </motion.div>
          )}

          {showFinal && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center z-20"
              style={{ background: "rgba(254,249,238,0.95)", borderRadius: "20px", backdropFilter: "blur(4px)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="text-8xl mb-6">👑</motion.div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4" style={{ background: "linear-gradient(135deg, #c08090 0%, #d4a574 50%, #b8956e 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Happy Birthday,<br/>{name}
              </h1>
              <p className="text-[#4a3728]/70 font-serif italic text-lg mb-8">Turn the page to begin your adventure…</p>
              {morningUnlocked ? (
                <motion.button onClick={handleEnter} className="px-10 py-4 bg-gradient-to-br from-[#c08090] to-[#d4a574] text-white font-serif text-xl rounded-full shadow-2xl shadow-[#c08090]/30 hover:shadow-[#c08090]/50 transition-all duration-700 border-2 border-[#f0d080]/40" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  ✨ Open Your Storybook ✨
                </motion.button>
              ) : (
                <p className="text-[#4a3728]/60 font-serif text-lg animate-pulse">Your story begins soon… ⏳</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-[#d4a574]" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} animate={{ opacity: [0, 0.7, 0], scale: [0, 1.5, 0], y: [0, -60] }} transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }} />
        ))}
      </div>
    </motion.div>
  );
}
