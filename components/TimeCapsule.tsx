"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import CelebrationOverlay from "@/components/CelebrationOverlay";

export default function TimeCapsule({ name }: { name: string }) {
  const [message, setMessage] = useState("");
  const [sealed, setSealed] = useState(false);

  const seal = () => {
    if (!message.trim()) return;
    const capsule = { date: new Date().toISOString(), message, from: name };
    localStorage.setItem(`timecapsule_${name}_${new Date().getFullYear()}`, JSON.stringify(capsule));
    setSealed(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-black relative overflow-hidden"
    >
      <CelebrationOverlay />
      <CelebrationOverlay />
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">
        Time Capsule
      </motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">
        A Message in a Bottle
      </h2>

      {!sealed ? (
        <motion.div
          className="relative w-full max-w-md"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
        >
          {/* Bottle illustration */}
          <motion.div
            className="text-8xl mb-6"
            animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🍾
          </motion.div>
          <p className="text-white/60 mb-4">Write a note to your future self and seal it in the bottle.</p>
          <textarea
            className="w-full h-32 p-4 rounded-xl bg-white/5 border border-[#d4a574]/30 text-white/80 font-serif"
            placeholder="Dear future me..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <motion.button
            onClick={seal}
            className="mt-4 px-8 py-3 bg-gradient-to-br from-[#d4a574] to-[#b8956e] text-white font-serif rounded-full shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Seal the Bottle 💌
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-8xl mb-4"
        >
          🔐
        </motion.div>
      )}
      <p className="mt-8 text-white/40 text-sm">
        One year from now, this bottle will find its way back to you.
      </p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-12">
        <a
          href="https://fiduciaweb.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="fiducia-signature text-white/30"
        >
          <span className="dot"></span>Intelligence by FIDUCIA
        </a>
      </motion.div>
    </motion.section>
  );
}
