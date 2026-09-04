"use client";
import { motion } from "framer-motion";

export default function Surprise({ buttonText, message, onNext, onBack }: { buttonText: string; message: string; onNext: () => void; onBack: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-serif font-light text-[#d4a574] mb-12">One Last Thing</h2>
      {!open ? (
        <motion.button onClick={() => setOpen(true)} className="px-10 py-4 bg-gradient-to-br from-[#d4a574] to-[#b8956e] text-white font-serif text-xl rounded-full shadow-2xl" whileHover={{ scale: 1.05 }}>{buttonText}</motion.button>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
          <p className="text-white/70 font-serif text-xl max-w-xl">{message}</p>
          <button onClick={onNext} className="px-8 py-3 bg-[#d4a574]/20 border border-[#d4a574]/40 rounded-full text-[#d4a574]">Continue to Letter</button>
        </motion.div>
      )}
      <div className="flex gap-4 mt-12">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
      </div>
    </section>
  );
}
