import CelebrationOverlay from "@/components/CelebrationOverlay";
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const treasures = [
  { id: 1, emoji: "⭐", message: "Your smile can light up the darkest room." },
  { id: 2, emoji: "🦋", message: "You are braver than you believe." },
  { id: 3, emoji: "🎁", message: "The greatest gift is your kind heart." },
  { id: 4, emoji: "🌸", message: "You bloom wherever you are planted." },
];

export default function ForestOfStars({ onNext }: { onNext: () => void }) {
  const [found, setFound] = useState<number[]>([]);
  const [active, setActive] = useState<number | null>(null);

  const discover = (id: number) => {
    if (!found.includes(id)) setFound([...found, id]);
    setActive(id);
  };

  return (
    <motion.section
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Three</motion.p>
      <CelebrationOverlay />
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Forest of Hidden Stars</h2>
      <p className="text-white/60 mb-8">Find all the hidden treasures.</p>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {treasures.map(t => (
          <motion.button
            key={t.id}
            className={`text-5xl p-4 rounded-full transition-all ${found.includes(t.id) ? "bg-[#d4a574]/40" : "glass-card-light"}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => discover(t.id)}
          >
            {t.emoji}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="glass-card p-6 max-w-md mb-8">
            <p className="text-white/80">{treasures.find(t => t.id === active)?.message}</p>
          </motion.div>
        )}
      </AnimatePresence>
      {found.length === treasures.length && (
        <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale: 1.05 }}>
          Continue to the Mirror
        </motion.button>
      )}
    </motion.section>
  );
}
