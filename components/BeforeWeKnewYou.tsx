"use client";
import { motion } from "framer-motion";

export default function BeforeWeKnewYou({ title, photos, onNext, onBack }: { title: string; photos: { src: string; year: string; caption: string }[]; onNext: () => void; onBack: () => void }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#d4a574] mb-12">{title}</h2>
      <div className="space-y-12 max-w-2xl">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            className="text-center"
          >
            <img src={photo.src} alt={photo.caption} className="w-64 h-64 object-cover rounded-xl mx-auto mb-4 border border-[#d4a574]/30" />
            <p className="text-[#d4a574] font-mono">{photo.year}</p>
            <p className="text-white/70 font-serif italic">{photo.caption}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#d4a574] text-sm">Continue →</button>
      </div>
    </section>
  );
}
