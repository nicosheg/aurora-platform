"use client";
import { motion } from "framer-motion";

export default function TributeEnding({ message, closing, senderName, name, onBack }: { message: string; closing: string; senderName: string; name: string; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card p-8 md:p-12 max-w-2xl"
      >
        {message.split("\n\n").map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5 }}
            className="text-white/70 font-serif text-lg leading-relaxed mb-4"
          >
            {para}
          </motion.p>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-12"
      >
        {closing.split("\n").map((line, i) => (
          <p key={i} className="text-2xl md:text-4xl font-serif font-light gradient-text mt-4">{line}</p>
        ))}
        <p className="text-white/40 text-sm mt-8 font-light tracking-wider">— {senderName}</p>
      </motion.div>
      <button onClick={onBack} className="mt-12 px-6 py-2 text-white/40 text-sm hover:text-white/70">← Review again</button>
      <p className="text-white/20 text-xs mt-8 font-light tracking-wider">A FIDUCIA Experience</p>
    </section>
  );
}
