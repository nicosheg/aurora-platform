"use client";
import { motion } from "framer-motion";

export default function LegacyWelcome({ title, subtitle, buttonText, onNext }: { title: string; subtitle: string; buttonText: string; onNext: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-white/50 font-light tracking-widest uppercase"
      >
        A Legacy Experience
      </motion.p>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="text-4xl md:text-6xl font-serif font-light mt-6 gradient-text"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-white/60 font-serif italic text-lg mt-6 max-w-xl"
      >
        {subtitle}
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={onNext}
        className="mt-12 px-8 py-3 bg-gradient-to-r from-[#c9a96e] to-[#b8956e] text-white font-serif text-lg rounded-full shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.button>
    </section>
  );
}
