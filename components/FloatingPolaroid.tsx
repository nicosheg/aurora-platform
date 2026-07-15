"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingPolaroid({ src }: { src: string }) {
  const [show, setShow] = useState(true);
  const [tapped, setTapped] = useState(false);

  return (
    <AnimatePresence>
      {show && (
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
          onClick={() => setTapped(true)}
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
          {tapped && (
            <motion.div
              className="absolute -top-4 -right-4 text-2xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1.5, opacity: [1, 0] }}
              transition={{ duration: 1 }}
              onAnimationComplete={() => setTapped(false)}
            >
              ✨
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
