"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingPolaroid({ src, active }: { src: string; active: boolean }) {
  const [hidden, setHidden] = useState(false);

  // If the component becomes inactive (leaving last two pages), reset hidden state
  useEffect(() => {
    if (!active) setHidden(false);
  }, [active]);

  const handleTap = () => {
    setHidden(true);
    // Reappear after 6 seconds
    setTimeout(() => setHidden(false), 6000);
  };

  return (
    <AnimatePresence>
      {active && !hidden && (
        <motion.div
          className="fixed z-40 pointer-events-auto cursor-pointer"
          style={{ left: "10%", top: "20%" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, 30, -20, 10, -10, 0],
            y: [0, -20, 10, -30, 20, 0],
            rotate: [0, 2, -1, 3, -2, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={handleTap}
          whileHover={{ scale: 1.1 }}
        >
          <div className="bg-white p-2 rounded-lg shadow-2xl rotate-3 transform">
            <img
              src={src}
              alt="A special memory"
              className="w-32 h-32 object-cover rounded"
            />
            <p className="text-gray-600 text-xs mt-1 font-serif italic text-center">
              a moment forever
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
