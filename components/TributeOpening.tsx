"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/contexts/MusicContext";

export default function TributeOpening({ lines, buttonText, heroImage, name, onNext }: { lines: string[]; buttonText: string; heroImage?: string; name: string; onNext: () => void }) {
  const [index, setIndex] = useState(0);
  const { startMusic } = useMusic();

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => setIndex(index + 1), 3000);
      return () => clearTimeout(timer);
    }
  }, [index, lines.length]);

  const handleBegin = () => {
    startMusic();
    onNext();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {heroImage && (
        <motion.img
          src={heroImage}
          alt=""
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full border-4 border-[#c9a96e]/30 shadow-2xl mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      )}
      <AnimatePresence mode="wait">
        {index < lines.length && (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="text-2xl md:text-4xl font-serif font-light text-white/80 max-w-2xl leading-relaxed"
          >
            {lines[index]}
          </motion.p>
        )}
      </AnimatePresence>

      {index === lines.length && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold gradient-text">{name}</h1>
          <button onClick={handleBegin} className="px-10 py-4 bg-gradient-to-br from-[#c9a96e] to-[#b8956e] text-white font-serif text-xl rounded-full shadow-2xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            {buttonText}
          </button>
        </motion.div>
      )}
    </section>
  );
}
