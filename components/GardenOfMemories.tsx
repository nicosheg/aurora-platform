"use client";
import { motion } from "framer-motion";

export default function GardenOfMemories({ photos, onNext }: { photos: any[]; onNext: () => void }) {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center relative overflow-hidden">
      {/* Floating petals */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        >
          🌸
        </motion.div>
      ))}
      <motion.p className="text-[#f0d080] text-sm uppercase tracking-[0.3em] mb-4">World One</motion.p>
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#f0d080] mb-8">The Garden of Memories</h2>
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-2xl overflow-hidden glass-card-light cursor-pointer"
          >
            <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
            <p className="p-3 text-sm text-white/70">{photo.caption}</p>
          </motion.div>
        ))}
      </div>
      <motion.button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#f0d080]" whileHover={{ scale: 1.05 }}>
        Continue to the Kingdom
      </motion.button>
    </motion.section>
  );
}
