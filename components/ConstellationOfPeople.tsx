"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ConstellationOfPeople({ people, voices, onNext }: { people: any[]; voices: any[]; onNext: () => void }) {
  const [selected, setSelected] = useState<any>(null);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center bg-black">
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World Six</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Constellation of People Who Love You</h2>
      <div className="grid grid-cols-2 gap-8 max-w-md mx-auto mb-12">
        {people.map((person, i) => (
          <motion.div
            key={i}
            className="glass-card-light p-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(person)}
          >
            <div className="text-3xl">⭐</div>
            <p className="text-[#f0d080] font-serif text-sm mt-2">{person.time}</p>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="glass-card p-6 max-w-md mb-8">
            <p className="text-white/80">{selected.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale: 1.05 }}>
        Enter the Gate
      </motion.button>
    </motion.section>
  );
}
