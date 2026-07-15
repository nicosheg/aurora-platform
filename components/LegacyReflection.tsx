"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LegacyReflection({ questions, onNext, onBack }: { questions: string[]; onNext: () => void; onBack: () => void }) {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    // Save to localStorage privately
    localStorage.setItem(`reflection_${index}`, value);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-serif font-light text-white/80 mb-8">Take a Moment to Reflect</h2>
      <p className="text-white/50 text-sm mb-8">Your answers stay private on this device.</p>
      <div className="w-full max-w-xl space-y-6">
        {questions.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="text-white/70 font-serif text-lg mb-2">{q}</p>
            <textarea
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white/80 font-serif text-sm"
              rows={2}
              value={answers[i]}
              onChange={(e) => handleChange(i, e.target.value)}
              placeholder="Your answer..."
            />
          </motion.div>
        ))}
      </div>
      <div className="flex gap-4 mt-10">
        <button onClick={onBack} className="px-6 py-2 text-white/40 text-sm">← Back</button>
        <button onClick={onNext} className="px-6 py-2 text-[#c9a96e] text-sm">Continue →</button>
      </div>
    </section>
  );
}
