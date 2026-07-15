"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarField from "./StarField";
import MusicToggle from "./MusicToggle";
import CelebrationOverlay from "./CelebrationOverlay";
import FloatingPolaroid from "./FloatingPolaroid";
import TributeOpening from "./TributeOpening";
import TributeRipple from "./TributeRipple";
import TributeHidden from "./TributeHidden";
import TributeYourMagic from "./TributeYourMagic";
import TributeLibrary from "./TributeLibrary";
import TributeFuture from "./TributeFuture";
import TributeConstellation from "./TributeConstellation";
import TributeForgotten from "./TributeForgotten";
import TributeGift from "./TributeGift";
import TributeEnding from "./TributeEnding";

export default function TributeExperience({ config }: { config: any }) {
  const [step, setStep] = useState(0);
  const { sections, musicUrl, heroImage, name, senderName, voiceNoteUrl } = config;

  const next = () => setStep(s => s + 1);
  const prev = () => setStep(s => Math.max(0, s - 1));

  const wrap = (component: JSX.Element) => (
    <div className="relative min-h-screen">
      <CelebrationOverlay />
      {component}
    </div>
  );

  const steps = [
    wrap(<TributeOpening key="opening" lines={sections.opening.lines} buttonText={sections.opening.buttonText} heroImage={heroImage} name={name} onNext={next} />),
    wrap(<TributeRipple key="ripple" memories={sections.ripple.memories} onNext={next} onBack={prev} />),
    wrap(<TributeHidden key="hidden" envelopes={sections.hidden.envelopes} voiceNoteUrl={voiceNoteUrl} onNext={next} onBack={prev} />),
    wrap(<TributeYourMagic key="yourMagic" {...sections.yourMagic} onNext={next} onBack={prev} />),
    wrap(<TributeLibrary key="library" books={sections.library.books} onNext={next} onBack={prev} />),
    wrap(<TributeFuture key="future" doors={sections.future.doors} onNext={next} onBack={prev} />),
    wrap(<TributeConstellation key="constellation" message={sections.constellation.message} name={name} onNext={next} onBack={prev} />),
    wrap(<TributeForgotten key="forgotten" text={sections.forgotten.text} onNext={next} onBack={prev} />),
    wrap(<TributeGift key="gift" prompts={sections.gift.prompts} onNext={next} onBack={prev} />),
    wrap(<TributeEnding key="ending" message={sections.ending.message} closing={sections.ending.closing} senderName={senderName} name={name} onBack={prev} />),
  ];

  // Show floating polaroid only on the last two pages (index 8 and 9)
  const showPolaroid = step === 8 || step === 9;

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <StarField active={true} />
      {musicUrl && <MusicToggle musicUrl={musicUrl} />}
      <FloatingPolaroid src="/experiences/gbemi/hero.jpg" active={showPolaroid} />
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
