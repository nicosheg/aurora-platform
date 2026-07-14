"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MemoryPhoto } from "@/types";

export default function MemoryGallery({ photos }: { photos: MemoryPhoto[] }) {
  const [selected, setSelected] = useState<MemoryPhoto | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {photos.map((photo, i) => (
          <motion.div key={photo.id} initial={{ opacity:0, scale:0.9 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.12 }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-[4/5]"
            onClick={() => setSelected(photo)}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 right-0 p-3 z-20"><p className="text-white/90 text-sm font-light">{photo.caption}</p></div>
            {photo.hiddenStory && <div className="absolute top-3 right-3 z-20"><span className="text-white/60 text-xs bg-white/10 rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">Tap for story</span></div>}
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelected(null)}>
            <motion.div initial={{ scale:0.9 }} animate={{ scale:1 }} exit={{ scale:0.9 }} className="glass-card max-w-lg w-full overflow-hidden" onClick={e => e.stopPropagation()}>
              <img src={selected.src} alt={selected.alt} className="w-full aspect-[4/5] object-cover" />
              <div className="p-6">
                <p className="text-white/90 font-serif text-lg mb-2">{selected.caption}</p>
                {selected.hiddenStory && <motion.p initial={{ opacity:0, height:0 }} animate={{ opacity:1, height:"auto" }} className="text-white/60 text-sm">{selected.hiddenStory}</motion.p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
