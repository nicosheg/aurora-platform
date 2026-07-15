"use client";
import { motion } from "framer-motion";

const emojis = ["🎉", "✨", "💖", "🌟", "🎀", "🦋", "💫", "🎈"];

export default function CelebrationOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const Emoji = emojis[i % emojis.length];
        return (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            {Emoji}
          </motion.div>
        );
      })}
    </div>
  );
}
