"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HiddenLetter() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      // Show between 10:00 and 12:00
      const isTime = (h === 10 && m >= 0) || (h === 11);
      setVisible(isTime);
    };
    check();
    const i = setInterval(check, 60000);
    return () => clearInterval(i);
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.button
        initial={{ opacity:0, scale:0 }}
        animate={{ opacity:1, scale:1 }}
        className="fixed bottom-24 left-6 z-40 w-14 h-14 rounded-full glass-card-light flex items-center justify-center cursor-pointer shadow-lg"
        whileHover={{ scale:1.1 }}
        whileTap={{ scale:0.9 }}
        onClick={() => setOpen(true)}
      >
        <span className="text-2xl">✉️</span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            className="fixed inset-0 z-[160] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale:0.9, y:20 }}
              animate={{ scale:1, y:0 }}
              exit={{ scale:0.9 }}
              className="glass-card p-8 max-w-md text-center"
              onClick={e => e.stopPropagation()}
            >
              <span className="text-4xl mb-4 block">💌</span>
              <p className="text-white/80 font-serif text-lg leading-relaxed">
                Just a little note to say…<br/>
                you've made my world brighter simply by being in it.<br/>
                This day is for you — every moment, every smile, every surprise.
              </p>
              <button className="mt-6 text-white/40 text-sm hover:text-white/70" onClick={() => setOpen(false)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
