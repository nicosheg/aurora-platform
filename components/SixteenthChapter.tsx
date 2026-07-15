"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ExperienceConfig } from "@/types";
import MusicToggle from "@/components/MusicToggle";
import CinematicOpening from "@/components/CinematicOpening";
import GardenOfMemories from "@/components/GardenOfMemories";
import KingdomOfLove from "@/components/KingdomOfLove";
import ForestOfStars from "@/components/ForestOfStars";
import MirrorOfPossibility from "@/components/MirrorOfPossibility";
import SkyOfDreams from "@/components/SkyOfDreams";
import ConstellationOfPeople from "@/components/ConstellationOfPeople";
import GateOfFuture from "@/components/GateOfFuture";
import TheEnding from "@/components/TheEnding";
import TimeCapsule from "@/components/TimeCapsule";

function isTimePassed(timeStr: string, dateStr: string): boolean {
  const [h,m] = timeStr.split(":").map(Number);
  const target = new Date(dateStr);
  target.setHours(h,m,0,0);
  return new Date() >= target;
}

export default function SixteenthChapter({ config }: { config: ExperienceConfig }) {
  const { name, birthdayDate, unlockSchedule, chapters, musicUrl, senderName, voices } = config as any;
  const [currentWorld, setCurrentWorld] = useState("opening");
  const [unlocked, setUnlocked] = useState({ morning: false, afternoon: false, evening: false });

  const check = useCallback(() => {
    setUnlocked({
      morning: isTimePassed(unlockSchedule.morning, birthdayDate),
      afternoon: isTimePassed(unlockSchedule.afternoon, birthdayDate),
      evening: isTimePassed(unlockSchedule.evening, birthdayDate),
    });
  }, [unlockSchedule, birthdayDate]);

  useEffect(() => { check(); const i = setInterval(check, 30000); return () => clearInterval(i); }, [check]);

  const goTo = (world: string) => setCurrentWorld(world);

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      <MusicToggle musicUrl={musicUrl} />
      <AnimatePresence mode="wait">
        {currentWorld === "opening" && <CinematicOpening name={name} onComplete={() => goTo("garden")} />}
        {currentWorld === "garden" && unlocked.morning && <GardenOfMemories photos={chapters.one.photos} onNext={() => goTo("kingdom")} />}
        {currentWorld === "kingdom" && unlocked.morning && <KingdomOfLove family={chapters.two.timeline} voices={voices} onNext={() => goTo("forest")} />}
        {currentWorld === "forest" && unlocked.afternoon && <ForestOfStars onNext={() => goTo("mirror")} />}
        {currentWorld === "mirror" && unlocked.afternoon && <MirrorOfPossibility onNext={() => goTo("sky")} />}
        {currentWorld === "sky" && unlocked.afternoon && <SkyOfDreams onNext={() => goTo("constellation")} />}
        {currentWorld === "constellation" && unlocked.evening && <ConstellationOfPeople people={chapters.two.timeline} voices={voices} onNext={() => goTo("gate")} />}
        {currentWorld === "gate" && unlocked.evening && <GateOfFuture name={name} onNext={() => goTo("ending")} />}
        {currentWorld === "ending" && unlocked.evening && <TheEnding name={name} senderName={senderName} onNext={() => goTo("capsule")} />}
        {currentWorld === "capsule" && unlocked.evening && <TimeCapsule name={name} />}
      </AnimatePresence>
    </main>
  );
}
