"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MusicToggle from "./MusicToggle";
import FiftiethOpening from "./FiftiethOpening";
import BeforeWeKnewYou from "./BeforeWeKnewYou";
import TheManWeKnow from "./TheManWeKnow";
import YourChapter from "./YourChapter";
import ThingsYouMayNeverKnow from "./ThingsYouMayNeverKnow";
import TheReceipts from "./TheReceipts";
import FiftyWords from "./FiftyWords";
import FamilySpeaks from "./FamilySpeaks";
import ManAt50 from "./ManAt50";
import Surprise from "./Surprise";
import FinalLetter from "./FinalLetter";
import FinalScene from "./FinalScene";

export default function FiftiethExperience({ config }: { config: any }) {
  const [step, setStep] = useState(0);
  const { sections, musicUrl, name, senderName } = config;

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => Math.max(0, s - 1));

  const steps = [
    <FiftiethOpening key="opening" {...sections.opening} name={name} onNext={next} />,
    <BeforeWeKnewYou key="before" {...sections.before} onNext={next} onBack={prev} />,
    <TheManWeKnow key="roles" {...sections.roles} onNext={next} onBack={prev} />,
    <YourChapter key="yourChapter" {...sections.yourChapter} onNext={next} onBack={prev} />,
    <ThingsYouMayNeverKnow key="unknown" {...sections.unknown} onNext={next} onBack={prev} />,
    <TheReceipts key="receipts" {...sections.receipts} onNext={next} onBack={prev} />,
    <FiftyWords key="fiftyWords" {...sections.fiftyWords} onNext={next} onBack={prev} />,
    <FamilySpeaks key="familyVoices" {...sections.familyVoices} onNext={next} onBack={prev} />,
    <ManAt50 key="manAt50" {...sections.manAt50} onNext={next} onBack={prev} />,
    <Surprise key="surprise" {...sections.surprise} onNext={next} onBack={prev} />,
    <FinalLetter key="finalLetter" {...sections.finalLetter} senderName={senderName} onNext={next} onBack={prev} />,
    <FinalScene key="finalScene" {...sections.finalScene} onBack={prev} />,
  ];

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {musicUrl && <MusicToggle musicUrl={musicUrl} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen"
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
