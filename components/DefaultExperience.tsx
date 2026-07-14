"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceConfig } from "@/types";
import Particles from "@/components/Particles";
import PetalField from "@/components/PetalField";
import LandingScreen from "@/components/LandingScreen";
import ChapterOne from "@/components/ChapterOne";
import ChapterTwo from "@/components/ChapterTwo";
import ChapterThree from "@/components/ChapterThree";
import CountdownTimer from "@/components/CountdownTimer";
import FinalScreen from "@/components/FinalScreen";
import EasterEggs from "@/components/EasterEggs";
import MusicToggle from "@/components/MusicToggle";
import HiddenLetter from "@/components/HiddenLetter";

type Chapter = "landing" | "one" | "two" | "three" | "final";

function isTimePassed(timeStr: string, dateStr: string): boolean {
  const [h,m] = timeStr.split(":").map(Number);
  const target = new Date(dateStr);
  target.setHours(h,m,0,0);
  return new Date() >= target;
}

export default function DefaultExperience({ config }: { config: ExperienceConfig }) {
  const [current, setCurrent] = useState<Chapter>("landing");
  const [unlocked, setUnlocked] = useState<Chapter[]>(["landing"]);
  const { name, birthdayDate, unlockSchedule, chapters, colors, easterEggs, musicUrl, senderName } = config;

  const check = useCallback(() => {
    const u: Chapter[] = ["landing"];
    if (isTimePassed(unlockSchedule.morning, birthdayDate)) u.push("one");
    if (isTimePassed(unlockSchedule.afternoon, birthdayDate)) u.push("two");
    if (isTimePassed(unlockSchedule.evening, birthdayDate)) u.push("three");
    setUnlocked(u);
  }, [unlockSchedule, birthdayDate]);

  useEffect(() => { check(); const i = setInterval(check, 30000); return () => clearInterval(i); }, [check]);

  const handleBegin = () => setCurrent("one");
  const handleTwo = () => setUnlocked(prev => prev.includes("two")?prev:[...prev,"two"]);
  const handleThree = () => setUnlocked(prev => prev.includes("three")?prev:[...prev,"three"]);
  const handleComplete = () => setCurrent("final");
  const isOpen = (c: Chapter) => unlocked.includes(c);

  return (
    <main
      className="relative min-h-screen"
      style={{
        background: `radial-gradient(ellipse at 50% 0%, ${colors.primary}20 0%, transparent 50%),
                     radial-gradient(ellipse at 80% 100%, ${colors.accent}15 0%, transparent 50%),
                     ${colors.background}`,
        "--primary": colors.primary,
        "--accent": colors.accent,
      } as React.CSSProperties}
    >
      <Particles />
      <PetalField />
      <MusicToggle musicUrl={musicUrl} />
      <EasterEggs eggs={easterEggs} />
      <HiddenLetter />

      <AnimatePresence mode="wait">
        {current === "landing" && <LandingScreen onBegin={handleBegin} herName={name} />}
      </AnimatePresence>

      {current !== "landing" && (
        <div className="relative z-10">
          {isOpen("one") && (
            <ChapterOne herName={name} greeting={chapters.one.greeting} message={chapters.one.message}
              photos={chapters.one.photos} birthdayDate={birthdayDate} />
          )}
          {isOpen("two") ? (
            <ChapterTwo title={chapters.two.title} subtitle={chapters.two.subtitle} timeline={chapters.two.timeline} />
          ) : isOpen("one") ? (
            <section className="py-20 px-4"><CountdownTimer targetTime={unlockSchedule.afternoon} targetDate={birthdayDate} onComplete={handleTwo} /></section>
          ) : null}
          {isOpen("three") ? (
            <>
              <ChapterThree letter={chapters.three.letter} voiceMessageUrl={chapters.three.voiceMessageUrl}
                videoUrl={chapters.three.videoUrl} finalSurprise={chapters.three.finalSurprise} herName={name} />
              {current !== "final" && (
                <div className="text-center pb-20">
                  <motion.button onClick={handleComplete} className="px-8 py-3 text-white/40 text-sm hover:text-white/70 transition-colors font-serif" whileHover={{ scale: 1.02 }}>Complete the journey</motion.button>
                </div>
              )}
            </>
          ) : isOpen("two") ? (
            <section className="py-20 px-4"><CountdownTimer targetTime={unlockSchedule.evening} targetDate={birthdayDate} onComplete={handleThree} /></section>
          ) : null}
          {current === "final" && <FinalScreen herName={name} senderName={senderName} />}
        </div>
      )}
    </main>
  );
}
