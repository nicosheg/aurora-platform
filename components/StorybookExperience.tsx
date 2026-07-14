"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ExperienceConfig } from "@/types";
import MusicToggle from "@/components/MusicToggle";
import StoryOpening from "@/components/StoryOpening";
import TinyPrincess from "@/components/TinyPrincess";
import FamilyKingdom from "@/components/FamilyKingdom";
import TreasureHunt from "@/components/TreasureHunt";
import DreamWorld from "@/components/DreamWorld";
import FutureLetters from "@/components/FutureLetters";
import StoryEnding from "@/components/StoryEnding";
import TimeCapsule from "@/components/TimeCapsule";

function isTimePassed(timeStr: string, dateStr: string): boolean {
  const [h,m] = timeStr.split(":").map(Number);
  const target = new Date(dateStr);
  target.setHours(h,m,0,0);
  return new Date() >= target;
}

export default function StorybookExperience({ config }: { config: ExperienceConfig }) {
  const { name, birthdayDate, unlockSchedule, chapters, musicUrl, senderName } = config;
  const [currentWorld, setCurrentWorld] = useState("opening");
  const [morningUnlocked, setMorningUnlocked] = useState(false);
  const [afternoonUnlocked, setAfternoonUnlocked] = useState(false);
  const [eveningUnlocked, setEveningUnlocked] = useState(false);

  const check = useCallback(() => {
    setMorningUnlocked(isTimePassed(unlockSchedule.morning, birthdayDate));
    setAfternoonUnlocked(isTimePassed(unlockSchedule.afternoon, birthdayDate));
    setEveningUnlocked(isTimePassed(unlockSchedule.evening, birthdayDate));
  }, [unlockSchedule, birthdayDate]);

  useEffect(() => { check(); const i = setInterval(check, 30000); return () => clearInterval(i); }, [check]);

  useEffect(() => {
    if (currentWorld === "opening" && morningUnlocked) setCurrentWorld("one");
  }, [morningUnlocked, currentWorld]);

  const goTo = (world: string) => setCurrentWorld(world);

  return (
    <main className="relative min-h-screen bg-[#0d0a05] text-[#fff8ee]">
      <MusicToggle musicUrl={musicUrl} />
      <AnimatePresence mode="wait">
        {currentWorld === "opening" && <StoryOpening name={name} onComplete={() => goTo("one")} morningUnlocked={morningUnlocked} />}
        {currentWorld === "one" && morningUnlocked && <TinyPrincess photos={chapters.one.photos} onNext={() => goTo("two")} />}
        {currentWorld === "two" && morningUnlocked && (
          <FamilyKingdom timeline={chapters.two.timeline} onNext={() => { if (afternoonUnlocked) goTo("three"); }} afternoonUnlocked={afternoonUnlocked} birthdayDate={birthdayDate} unlockTime={unlockSchedule.afternoon} />
        )}
        {currentWorld === "three" && afternoonUnlocked && <TreasureHunt onNext={() => goTo("four")} />}
        {currentWorld === "four" && afternoonUnlocked && <DreamWorld onNext={() => goTo("five")} />}
        {currentWorld === "five" && eveningUnlocked && <FutureLetters onNext={() => goTo("ending")} />}
        {currentWorld === "ending" && eveningUnlocked && <StoryEnding name={name} senderName={senderName} onNext={() => goTo("capsule")} />}
        {currentWorld === "capsule" && eveningUnlocked && <TimeCapsule name={name} />}
      </AnimatePresence>
    </main>
  );
}
