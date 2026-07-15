"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LegacyWelcome from "./LegacyWelcome";
import LegacyStory from "./LegacyStory";
import LegacyStrengths from "./LegacyStrengths";
import LegacyScripture from "./LegacyScripture";
import LegacyReflection from "./LegacyReflection";
import LegacyLetter from "./LegacyLetter";
import LegacyFinal from "./LegacyFinal";

export default function LegacyExperience({ config }: { config: any }) {
  const [step, setStep] = useState(0);
  const { sections } = config;

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => Math.max(0, s - 1));

  const steps = [
    <LegacyWelcome key="welcome" {...sections.welcome} onNext={next} />,
    <LegacyStory key="story" message={sections.story.message} onNext={next} onBack={prev} />,
    <LegacyStrengths key="strengths" items={sections.strengths} onNext={next} onBack={prev} />,
    <LegacyScripture key="scripture" {...sections.scripture} onNext={next} onBack={prev} />,
    <LegacyReflection key="reflection" questions={sections.reflection.questions} onNext={next} onBack={prev} />,
    <LegacyLetter key="letter" paragraphs={sections.letter.paragraphs} senderName={config.senderName} onNext={next} onBack={prev} />,
    <LegacyFinal key="final" quote={sections.final.quote} closing={sections.final.closing} name={config.name} onBack={prev} />,
  ];

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="min-h-screen"
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
