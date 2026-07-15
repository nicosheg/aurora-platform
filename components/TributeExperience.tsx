"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MusicToggle from "./MusicToggle";
import TributeOpening from "./TributeOpening";
import TributeRipple from "./TributeRipple";
import TributeHidden from "./TributeHidden";
import TributeLibrary from "./TributeLibrary";
import TributeFuture from "./TributeFuture";
import TributeConstellation from "./TributeConstellation";
import TributeForgotten from "./TributeForgotten";
import TributeGift from "./TributeGift";
import TributeEnding from "./TributeEnding";

export default function TributeExperience({ config }: { config: any }) {
  const [step, setStep] = useState(0);
  const { sections, musicUrl, heroImage, name, senderName } = config;

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => Math.max(0, s - 1));

  const steps = [
    <TributeOpening key="opening" lines={sections.opening.lines} buttonText={sections.opening.buttonText} heroImage={heroImage} name={name} onNext={next} />,
    <TributeRipple key="ripple" memories={sections.ripple.memories} onNext={next} onBack={prev} />,
    <TributeHidden key="hidden" envelopes={sections.hidden.envelopes} onNext={next} onBack={prev} />,
    <TributeLibrary key="library" books={sections.library.books} onNext={next} onBack={prev} />,
    <TributeFuture key="future" doors={sections.future.doors} onNext={next} onBack={prev} />,
    <TributeConstellation key="constellation" message={sections.constellation.message} name={name} onNext={next} onBack={prev} />,
    <TributeForgotten key="forgotten" text={sections.forgotten.text} onNext={next} onBack={prev} />,
    <TributeGift key="gift" prompts={sections.gift.prompts} onNext={next} onBack={prev} />,
    <TributeEnding key="ending" message={sections.ending.message} closing={sections.ending.closing} senderName={senderName} name={name} onBack={prev} />,
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
