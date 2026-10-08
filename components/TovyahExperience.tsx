"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AudioPlayer from "@/components/AudioPlayer";
import MusicToggle from "@/components/MusicToggle";
import type { TovyahExperienceConfig, TovyahMemory } from "@/types";

type Props = { config: TovyahExperienceConfig; accessToken: string };
type CapsuleState = "idle" | "saving" | "sealed" | "error";
type SectionId = "childhood" | "time-machine" | "remembered" | "then-now" | "question" | "letter" | "celebration" | "constellation" | "capsule" | "ending";

const SECTION_IDS: SectionId[] = [
  "childhood", "time-machine", "remembered", "then-now", "question",
  "letter", "celebration", "constellation", "capsule", "ending"
];

const STAR_POSITIONS = [
  { x: 12, y: 22 }, { x: 26, y: 38 }, { x: 44, y: 18 }, { x: 58, y: 34 }, { x: 73, y: 20 },
  { x: 86, y: 42 }, { x: 19, y: 70 }, { x: 39, y: 60 }, { x: 63, y: 72 }, { x: 82, y: 66 }
];

function formatUnlockDate(iso: string) {
  return new Intl.DateTimeFormat("en-NG", { dateStyle: "long", timeZone: "Africa/Lagos" }).format(new Date(iso));
}

function hasContent(memory: TovyahMemory) {
  return Boolean(memory.text?.trim() || memory.image?.trim());
}

function PlaceholderFrame({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={"relative overflow-hidden rounded-[28px] border border-[#e7d19d]/15 bg-white/[0.025] " + className}
      style={{ backgroundImage: "radial-gradient(circle at 50% 20%, rgba(230,203,145,.13), transparent 45%)" }}
    >
      <div className="relative flex min-h-56 items-center justify-center p-8 text-center">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-[#f0dfb0]/55">Media slot</p>
          <p className="font-serif text-xl text-white/65">{label}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-white/35">Add the real photograph here when you're ready.</p>
        </div>
      </div>
    </div>
  );
}

function MemoryCard({ memory, index }: { memory: TovyahMemory; index: number }) {
  const [open, setOpen] = useState(false);
  const filled = hasContent(memory);

  return (
    <motion.button type="button" onClick={() => setOpen((v) => !v)} className="group perspective-1000 text-left" whileHover={{ y: -4 }} whileTap={{ scale: 0.99 }} aria-expanded={open}>
      <motion.div animate={{ rotateY: open ? 180 : 0 }} transition={{ duration: 0.6 }} className="relative min-h-[310px] w-full [transform-style:preserve-3d]">
        <div className="absolute inset-0 rounded-[26px] border border-white/10 bg-white/[0.035] p-6 shadow-2xl [backface-visibility:hidden]">
          <div className="flex items-start justify-between gap-4">
            <span className="text-[10px] uppercase tracking-[0.32em] text-[#e8d3a0]/55">{memory.label}</span>
            <span className="text-[10px] text-white/30">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/30">{memory.year}</p>
            <h3 className="mt-3 font-serif text-2xl font-light leading-tight text-white/90">{memory.title}</h3>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[#f0dfb0]/50">{filled ? "Tap to remember" : "Tap to fill later"}</p>
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[26px] border border-[#e6d09b]/15 bg-[#0b0e18] p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {memory.image ? (
            <img src={memory.image} alt={memory.imageAlt || memory.title} loading="lazy" className="mb-5 h-36 w-full rounded-2xl object-cover opacity-85" />
          ) : (
            <div className="mb-5 h-36 rounded-2xl bg-gradient-to-br from-[#c7a968]/10 to-transparent" />
          )}
          <p className="text-xs uppercase tracking-[0.2em] text-[#f0dfb0]/50">{memory.year}</p>
          <p className="mt-4 font-serif text-lg leading-8 text-white/78">
            {memory.text || "This space is intentionally waiting for the real memory only you can add."}
          </p>
        </div>
      </motion.div>
    </motion.button>
  );
}

function Section({ id, eyebrow, title, children, className = "" }: { id: SectionId; eyebrow: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={"relative scroll-mt-24 px-5 py-24 sm:px-8 md:px-12 lg:px-20 " + className}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#f0dfb0]/50">{eyebrow}</p>
          <h2 className="mt-3 font-serif text-4xl font-light leading-tight text-white/92 sm:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function GhostButton({ children, onClick, disabled = false }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <motion.button type="button" onClick={onClick} disabled={disabled} whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }} className="rounded-full border border-white/10 bg-white/[0.035] px-6 py-3 text-sm text-white/75 transition hover:border-[#e5cf9e]/30 hover:bg-[#e5cf9e]/[0.06] disabled:cursor-not-allowed disabled:opacity-40">
      {children}
    </motion.button>
  );
}

export default function TovyahExperience({ config, accessToken }: Props) {
  const [started, setStarted] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("childhood");
  const [timeIndex, setTimeIndex] = useState(0);
  const [branchChoice, setBranchChoice] = useState<string | null>(null);
  const [openedStars, setOpenedStars] = useState<number[]>([]);
  const [capsuleAnswers, setCapsuleAnswers] = useState<Record<string, string>>({});
  const [capsuleMessage, setCapsuleMessage] = useState("");
  const [capsuleState, setCapsuleState] = useState<CapsuleState>("idle");
  const [capsuleLocal, setCapsuleLocal] = useState(false);
  const [futureMessage, setFutureMessage] = useState<string | null>(null);
  const [resumeNotice, setResumeNotice] = useState(false);

  const sectionIndex = SECTION_IDS.indexOf(activeSection);
  const progress = Math.max(0, Math.min(100, (sectionIndex / (SECTION_IDS.length - 1)) * 100));
  const selectedBranch = useMemo(
    () => config.sections.question.choices.find((choice) => choice.id === branchChoice)?.branch || null,
    [branchChoice, config.sections.question.choices]
  );

  const scrollTo = useCallback((id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  }, []);

  useEffect(() => {
    const startedValue = window.localStorage.getItem("aurora:tovyah:started");
    const saved = window.localStorage.getItem("aurora:tovyah:progress");
    if (startedValue === "1") setStarted(true);
    if (saved) {
      const parsed = Number(saved);
      if (Number.isInteger(parsed) && parsed > 0 && parsed < SECTION_IDS.length) setResumeNotice(true);
    }
  }, []);

  useEffect(() => {
    if (!started) return;
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.28) {
            setActiveSection(id);
            window.localStorage.setItem("aurora:tovyah:progress", String(SECTION_IDS.indexOf(id)));
          }
        },
        { threshold: [0.28, 0.55] }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((observer) => observer.disconnect());
  }, [started]);

  useEffect(() => {
    const raw = window.localStorage.getItem("aurora:tovyah:capsule");
    if (!raw) return;
    try {
      const saved = JSON.parse(raw) as { message?: string; unlockAt?: string; sealed?: boolean };
      if (!saved.sealed || !saved.unlockAt) return;
      if (new Date() >= new Date(saved.unlockAt)) {
        setFutureMessage(saved.message || null);
        setCapsuleState(saved.message ? "sealed" : "idle");
      } else {
        setCapsuleState("sealed");
        setCapsuleLocal(true);
      }
    } catch {
      window.localStorage.removeItem("aurora:tovyah:capsule");
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/tovyah/capsule?experience=" + encodeURIComponent(config.experienceId) + "&token=" + encodeURIComponent(accessToken), { signal: controller.signal, cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;
        if (data.status === "unlocked" && data.message) {
          setFutureMessage(data.message);
          setCapsuleState("sealed");
          setCapsuleLocal(false);
        } else if (data.status === "sealed") {
          setCapsuleState("sealed");
          setCapsuleLocal(false);
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, [config.experienceId]);

  const begin = () => {
    setStarted(true);
    window.localStorage.setItem("aurora:tovyah:started", "1");
    window.localStorage.setItem("aurora:tovyah:progress", "0");
    window.setTimeout(() => scrollTo("childhood"), 120);
  };

  const saveCapsule = async () => {
    if (!capsuleMessage.trim()) return;
    setCapsuleState("saving");
    setCapsuleLocal(false);

    const payload = {
      experience: config.experienceId,
      token: accessToken,
      message: capsuleMessage.trim(),
      answers: capsuleAnswers,
      unlockAt: config.unlockAt,
    };

    try {
      const res = await fetch("/api/tovyah/capsule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("capsule storage unavailable");

      window.localStorage.setItem("aurora:tovyah:capsule", JSON.stringify({ ...payload, sealed: true, savedAt: new Date().toISOString() }));
      setCapsuleState("sealed");
    } catch {
      window.localStorage.setItem("aurora:tovyah:capsule", JSON.stringify({ ...payload, sealed: true, savedAt: new Date().toISOString() }));
      setCapsuleState("sealed");
      setCapsuleLocal(true);
    }
  };

  const stars = config.sections.constellation.memories.map((memory, index) => ({ memory, ...STAR_POSITIONS[index % STAR_POSITIONS.length] }));

  const toggleStar = (index: number) => {
    setOpenedStars((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden bg-[#060913] text-[#f5f0e7]"
      style={{
        "--primary": config.colors.primary,
        "--accent": config.colors.accent,
        backgroundImage: "radial-gradient(circle at 15% 0%, rgba(207, 175, 112, .12), transparent 32%), radial-gradient(circle at 90% 35%, rgba(104, 124, 168, .12), transparent 30%), linear-gradient(180deg, #060913 0%, #080b16 45%, #03050b 100%)"
      } as React.CSSProperties}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.14]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.09) 0.5px, transparent 0.5px), radial-gradient(rgba(255,255,255,.045) 0.5px, transparent 0.5px)", backgroundPosition: "0 0, 9px 11px", backgroundSize: "17px 17px, 23px 23px" }} />
        <div className="absolute left-[8%] top-32 h-40 w-40 rounded-full bg-[#e7d39d]/[0.035] blur-3xl" />
        <div className="absolute right-[6%] top-[48%] h-56 w-56 rounded-full bg-[#6b7fa6]/[0.045] blur-3xl" />
      </div>

      {started && (
        <>
          <MusicToggle musicUrl={config.musicUrl} musicTracks={config.musicTracks} />
          <div className="fixed left-0 right-0 top-0 z-50 h-px bg-white/5">
            <motion.div className="h-full bg-gradient-to-r from-[#c6a76b] to-[#f0dfb0]" animate={{ width: progress + "%" }} />
          </div>
          <div className="fixed right-4 top-4 z-50 sm:right-6">
            <details className="group relative">
              <summary className="list-none cursor-pointer rounded-full border border-white/10 bg-[#080c16]/80 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-white/60 backdrop-blur-xl hover:border-[#e3cf9f]/25 hover:text-white/80">Journey</summary>
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-[#080c16]/95 p-3 shadow-2xl backdrop-blur-xl">
                {SECTION_IDS.map((id, index) => (
                  <button key={id} type="button" onClick={() => scrollTo(id)} className={"flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition " + (activeSection === id ? "bg-white/[0.06] text-white" : "text-white/45 hover:bg-white/[0.04] hover:text-white/75")}>
                    <span>{index + 1}. {id === "time-machine" ? "Time Machine" : id === "then-now" ? "Then & Now" : id === "capsule" ? "Time Capsule" : id.charAt(0).toUpperCase() + id.slice(1)}</span>
                    {activeSection === id && <span className="h-1.5 w-1.5 rounded-full bg-[#eedca8]" />}
                  </button>
                ))}
              </div>
            </details>
          </div>
        </>
      )}

      <AnimatePresence>
        {!started && (
          <motion.section key="opening" className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-black px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.4 }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(220,191,126,.08),transparent_30%)]" />
            <div className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-white" />
            <div className="absolute left-[78%] top-[28%] h-1 w-1 rounded-full bg-[#efdca9]" />
            <div className="absolute left-[32%] top-[70%] h-0.5 w-0.5 rounded-full bg-white" />
            <div className="absolute left-[68%] top-[75%] h-0.5 w-0.5 rounded-full bg-white" />
            <div className="relative z-10 w-full max-w-3xl text-center">
              <p className="mb-10 text-[10px] uppercase tracking-[0.4em] text-[#e8d3a0]/45">A private birthday experience</p>
              <div className="min-h-[330px] sm:min-h-[360px]">
                <div className="space-y-7">
                  {config.sections.opening.lines.map((line, index) => (
                    <motion.p
                      key={line}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.7 }}
                      className={"mx-auto max-w-2xl font-serif font-light leading-tight " + (index === 4 ? "text-xl uppercase tracking-[0.25em] text-[#e8d6a7]/65" : index === 5 ? "text-4xl text-white sm:text-6xl" : "text-2xl text-white/80 sm:text-4xl")}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
              </div>
              <motion.button type="button" onClick={begin} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 5.4, duration: 1 }} className="mt-10 rounded-full border border-[#e6d09b]/25 bg-[#e6d09b]/[0.06] px-8 py-3 text-sm uppercase tracking-[0.28em] text-[#f2dfae] transition hover:bg-[#e6d09b]/[0.1]">{config.sections.opening.buttonText}</motion.button>
              {config.voiceNotes[0]?.src && <div className="mx-auto mt-8 max-w-sm"><AudioPlayer src={config.voiceNotes[0].src} label={config.voiceNotes[0].label} /></div>}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {started && resumeNotice && (
        <motion.div initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} className="fixed left-1/2 top-5 z-40 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-white/10 bg-[#0a0e18]/95 px-5 py-4 text-center shadow-2xl backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#edd9a3]/50">You were here</p>
          <p className="mt-1 text-sm text-white/70">Your journey is waiting for you. Use Journey to continue.</p>
          <button type="button" onClick={() => setResumeNotice(false)} className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[#efdca8]/55">Dismiss</button>
        </motion.div>
      )}

      {started && (
        <div className="relative z-10 pt-16">
          <section className="min-h-[72vh] px-5 pb-14 pt-24 sm:px-8 md:px-12 lg:px-20">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#f0dfb0]/45">Then, Somewhere… Us.</p>
                <h1 className="mt-5 max-w-4xl font-serif text-5xl font-light leading-[0.95] text-white sm:text-7xl">A little journey through the years.</h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/50">For Tovyah — a childhood friend, a distant chapter, and someone whose place in the story never disappeared.</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <GhostButton onClick={() => scrollTo("time-machine")}>Enter the time machine</GhostButton>
                  <GhostButton onClick={() => scrollTo("letter")}>Skip to the letter</GhostButton>
                </div>
              </div>
              <div className="rounded-[32px] border border-white/8 bg-white/[0.025] p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-white/30">{config.birthdayLabel}</p>
                <p className="mt-6 font-serif text-3xl font-light text-white/85">Today belongs to one person.</p>
                <p className="mt-3 text-sm leading-7 text-white/45">No balloons at the door. No generic template. Just a story that starts with what time could not erase.</p>
              </div>
            </div>
          </section>

          <Section id="childhood" eyebrow={config.sections.childhood.eyebrow} title={config.sections.childhood.title}>
            <div className="grid gap-4 md:grid-cols-[.8fr_1.2fr]">
              <div className="rounded-[28px] border border-[#e7d19d]/10 bg-[#0a0d16]/60 p-7 sm:p-8">
                {config.sections.childhood.paragraphs.map((paragraph) => <p key={paragraph} className="mb-5 font-serif text-xl leading-9 text-white/70 last:mb-0">{paragraph}</p>)}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {config.sections.childhood.memories.map((memory, index) => (
                  <div key={memory.id} className={index === 0 ? "sm:row-span-2" : ""}>
                    {memory.image ? <img src={memory.image} alt={memory.imageAlt || memory.title} loading="lazy" className="h-full min-h-64 w-full rounded-[28px] object-cover opacity-90" /> : <PlaceholderFrame label={memory.title} className="h-full" />}
                  </div>
                ))}
              </div>
            </div>
            {config.voiceNotes[1]?.src && <div className="mt-8 max-w-lg"><AudioPlayer src={config.voiceNotes[1].src} label={config.voiceNotes[1].label} /></div>}
          </Section>

          <Section id="time-machine" eyebrow={config.sections.timeMachine.eyebrow} title={config.sections.timeMachine.title} className="pt-20">
            <div className="rounded-[32px] border border-white/8 bg-white/[0.025] p-6 sm:p-8">
              <p className="max-w-3xl text-base leading-8 text-white/48">{config.sections.timeMachine.intro}</p>
              <div className="mt-10">
                <input aria-label="Move through the years" className="h-1 w-full appearance-none rounded-full bg-gradient-to-r from-[#bca06b]/30 via-white/10 to-[#9daac4]/25 outline-none" type="range" min="0" max={config.sections.timeMachine.points.length - 1} step="1" value={timeIndex} onChange={(event) => setTimeIndex(Number(event.target.value))} />
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {config.sections.timeMachine.points.map((point, index) => (
                    <button key={point.id} type="button" onClick={() => setTimeIndex(index)} className={"rounded-xl px-2 py-2 text-left transition " + (timeIndex === index ? "bg-white/[0.055]" : "hover:bg-white/[0.03]")}>
                      <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">{point.era}</p>
                      <p className="mt-1 text-xs text-white/55">{point.year}</p>
                    </button>
                  ))}
                </div>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={config.sections.timeMachine.points[timeIndex].id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }} className="mt-14 grid gap-8 md:grid-cols-[.75fr_1.25fr] md:items-center">
                  <div className="rounded-[28px] border border-[#e8d4a3]/10 bg-gradient-to-br from-[#d6b978]/[0.08] to-transparent p-7">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#e8d4a3]/50">{config.sections.timeMachine.points[timeIndex].era}</p>
                    <p className="mt-3 font-serif text-4xl font-light text-white/90">{config.sections.timeMachine.points[timeIndex].year}</p>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl font-light text-white/90">{config.sections.timeMachine.points[timeIndex].title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-white/50">{config.sections.timeMachine.points[timeIndex].description}</p>
                    {config.sections.timeMachine.points[timeIndex].image ? <img src={config.sections.timeMachine.points[timeIndex].image} alt="" loading="lazy" className="mt-7 max-h-72 w-full rounded-2xl object-cover opacity-90" /> : <div className="mt-7 h-24 rounded-2xl border border-white/8 bg-black/10" />}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Section>

          <Section id="remembered" eyebrow={config.sections.remembered.eyebrow} title={config.sections.remembered.title}>
            <p className="mb-10 max-w-2xl text-base leading-8 text-white/45">{config.sections.remembered.intro}</p>
            <div className="grid gap-4 md:grid-cols-2">
              {config.sections.remembered.memories.map((memory, index) => <MemoryCard key={memory.id} memory={memory} index={index} />)}
            </div>
          </Section>

          <Section id="then-now" eyebrow={config.sections.thenNow.eyebrow} title={config.sections.thenNow.title}>
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[32px] border border-white/8 bg-white/[0.025] p-4">
                <div className="overflow-hidden rounded-[26px] bg-[#0a0d15] p-8">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#e8d4a3]/45">{config.sections.thenNow.leftLabel}</p>
                  <div className="mt-8">
                    <p className="font-serif text-4xl font-light leading-tight text-white/90">The girl I knew.</p>
                    <div className="mt-7 h-56 rounded-2xl bg-[radial-gradient(circle_at_50%_20%,rgba(224,199,141,.15),transparent_40%),linear-gradient(135deg,#0d1220,#070a12)]" />
                    <p className="mt-6 text-base leading-8 text-white/50">{config.sections.thenNow.leftText}</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] border border-[#e7d19d]/10 bg-gradient-to-b from-[#cbb277]/[0.05] to-transparent p-4">
                <div className="overflow-hidden rounded-[26px] bg-[#0a0d15] p-8">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#e8d4a3]/45">{config.sections.thenNow.rightLabel}</p>
                  <div className="mt-8">
                    {config.sections.thenNow.currentPhoto ? <img src={config.sections.thenNow.currentPhoto} alt="Tovyah today" loading="lazy" className="h-56 w-full rounded-2xl object-cover" /> : <div className="flex h-56 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] text-center"><p className="max-w-xs text-sm leading-7 text-white/30">Optional current photo slot — use one only if it feels right.</p></div>}
                    <p className="mt-6 text-base leading-8 text-white/50">{config.sections.thenNow.rightText}</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section id="question" eyebrow="ONE QUESTION" title="Before you go…">
            <div className="mx-auto max-w-4xl rounded-[34px] border border-[#e5cf9e]/15 bg-gradient-to-br from-[#ead7a8]/[0.07] to-transparent p-7 sm:p-10">
              <p className="font-serif text-3xl font-light leading-tight text-white/90 sm:text-4xl">{config.sections.question.prompt}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {config.sections.question.choices.map((choice) => (
                  <button key={choice.id} type="button" onClick={() => setBranchChoice(choice.id)} className={"rounded-2xl border px-5 py-4 text-left text-sm transition " + (branchChoice === choice.id ? "border-[#ebd6a0]/35 bg-[#ebd6a0]/[0.08] text-white" : "border-white/8 bg-white/[0.02] text-white/55 hover:border-white/15 hover:text-white/80")}>
                    {choice.label}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                {selectedBranch && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mt-8 border-t border-white/8 pt-8">
                    <h3 className="font-serif text-2xl font-light text-white/85">{selectedBranch.title}</h3>
                    {selectedBranch.lines.map((line) => <p key={line} className="mt-3 max-w-2xl text-base leading-8 text-white/52">{line}</p>)}
                    <button type="button" onClick={() => scrollTo("letter")} className="mt-7 text-sm text-[#f1dfa9]/75 hover:text-[#f1dfa9]">Continue the story →</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Section>

          <Section id="letter" eyebrow="CHAPTER 06" title={config.sections.letter.title} className="bg-black/15">
            <div className="mx-auto max-w-3xl">
              <div className="rounded-[32px] border border-white/7 bg-white/[0.02] px-6 py-10 sm:px-12 sm:py-14">
                {config.sections.letter.paragraphs.map((paragraph, index) => <p key={paragraph} className={"font-serif text-lg leading-9 sm:text-xl " + (index === 0 ? "text-2xl text-white/90" : index === config.sections.letter.paragraphs.length - 1 ? "mt-10 text-white/85" : "mt-6 text-white/64")}>{paragraph}</p>)}
              </div>
              {config.voiceNotes[2]?.src && <div className="mx-auto mt-8 max-w-lg"><AudioPlayer src={config.voiceNotes[2].src} label={config.voiceNotes[2].label} /></div>}
            </div>
          </Section>

          <section id="celebration" className="relative scroll-mt-24 overflow-hidden px-5 py-32 text-center sm:px-8 md:px-12 lg:px-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,193,124,.16),transparent_32%)]" />
            <div className="relative mx-auto max-w-5xl">
              <p className="text-5xl font-serif font-light text-white/25 sm:text-7xl">{config.sections.celebration.lines[0]}</p>
              <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="my-8 text-6xl font-serif font-light text-[#ead8aa] sm:text-8xl">{config.sections.celebration.lines[2]}</motion.p>
              <p className="text-[10px] uppercase tracking-[0.45em] text-white/30">{config.sections.celebration.lines[3]}</p>
              <h2 className="mt-7 font-serif text-4xl font-light text-white sm:text-6xl">{config.sections.celebration.lines[4]}</h2>
              <div className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50"><p>{config.sections.celebration.lines[5]}</p><p>{config.sections.celebration.lines[6]}</p></div>
              {config.sections.celebration.heroPhoto ? <img src={config.sections.celebration.heroPhoto} alt="Tovyah" loading="lazy" className="mx-auto mt-12 max-h-[52vh] w-full max-w-2xl rounded-[32px] object-cover opacity-90 shadow-2xl" /> : <div className="mx-auto mt-12 max-w-2xl"><PlaceholderFrame label="Choose her best photograph" /></div>}
            </div>
          </section>

          <Section id="constellation" eyebrow={config.sections.constellation.eyebrow} title={config.sections.constellation.title}>
            <div className="relative min-h-[620px] overflow-hidden rounded-[36px] border border-white/8 bg-[#03050b]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(214,184,114,.08),transparent_35%)]" />
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
                {openedStars.slice(1).map((starIndex, index) => {
                  const prev = STAR_POSITIONS[openedStars[index]];
                  const current = STAR_POSITIONS[starIndex];
                  return <line key={starIndex + "-" + index} x1={prev.x} y1={prev.y} x2={current.x} y2={current.y} stroke="rgba(235,217,165,.32)" strokeWidth="0.18" vectorEffect="non-scaling-stroke" />;
                })}
              </svg>
              {stars.map((star, index) => {
                const open = openedStars.includes(index);
                return (
                  <button key={star.memory + index} type="button" onClick={() => toggleStar(index)} className="absolute -translate-x-1/2 -translate-y-1/2 text-left" style={{ left: star.x + "%", top: star.y + "%" }} aria-label={"Memory " + (index + 1)}>
                    <motion.span animate={{ scale: open ? 1.22 : [1, 1.08, 1], opacity: open ? 1 : [0.55, 1, 0.55] }} transition={{ duration: open ? 0.25 : 2.6, repeat: open ? 0 : Infinity }} className="block h-3 w-3 rounded-full bg-[#f1dfaa] shadow-[0_0_22px_rgba(241,223,170,.72)]" />
                    <AnimatePresence>{open && <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} className="absolute left-1/2 top-5 w-40 -translate-x-1/2 rounded-xl border border-[#ead6a2]/15 bg-[#0a0e18]/90 px-3 py-2 text-center text-xs leading-5 text-white/65 backdrop-blur-xl">{star.memory}</motion.span>}</AnimatePresence>
                  </button>
                );
              })}
              <div className="absolute inset-x-6 bottom-7 flex items-end justify-between gap-5">
                <p className="max-w-md text-sm leading-7 text-white/35">{config.sections.constellation.finalLine}</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#e8d3a0]/40">{openedStars.length}/{stars.length} opened</p>
              </div>
            </div>
          </Section>

          <Section id="capsule" eyebrow={config.sections.timeCapsule.eyebrow} title={config.sections.timeCapsule.title} className="bg-[#04060d]">
            <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
              <div>
                <p className="max-w-xl text-base leading-8 text-white/48">{config.sections.timeCapsule.intro}</p>
                <div className="mt-7 rounded-[26px] border border-[#e6d09a]/12 bg-[#e6d09a]/[0.035] p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[#efdda6]/45">Unlock date</p>
                  <p className="mt-3 font-serif text-3xl font-light text-white/85">{formatUnlockDate(config.unlockAt)}</p>
                  <p className="mt-2 text-sm leading-6 text-white/35">The note remains sealed before that moment.</p>
                </div>
                {capsuleState === "sealed" && (
                  <div className="mt-5 rounded-2xl border border-[#e7d19d]/15 bg-white/[0.025] p-5">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#f0dfb0]/55">{futureMessage ? "UNLOCKED" : "SEALED"}</p>
                    <p className="mt-2 text-sm leading-7 text-white/60">{futureMessage ? "Your future letter is waiting." : capsuleLocal ? "Saved on this device because the private vault is not connected yet." : "Your message is sealed and will open on your next birthday."}</p>
                    {futureMessage && <p className="mt-5 whitespace-pre-wrap rounded-xl bg-black/20 p-4 font-serif text-base leading-8 text-white/75">{futureMessage}</p>}
                  </div>
                )}
              </div>

              {capsuleState !== "sealed" ? (
                <div className="rounded-[34px] border border-white/8 bg-white/[0.025] p-6 sm:p-8">
                  <div className="space-y-6">
                    {config.sections.timeCapsule.prompts.map((prompt) => (
                      <label key={prompt.id} className="block">
                        <span className="text-sm text-white/68">{prompt.label}</span>
                        <textarea value={capsuleAnswers[prompt.id] || ""} onChange={(event) => setCapsuleAnswers((current) => ({ ...current, [prompt.id]: event.target.value }))} placeholder={prompt.placeholder} className="mt-3 min-h-24 w-full resize-y rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-7 text-white/75 outline-none transition placeholder:text-white/20 focus:border-[#e4cf9d]/25" />
                      </label>
                    ))}
                    <label className="block">
                      <span className="text-sm text-white/68">Write anything else your future self should remember.</span>
                      <textarea value={capsuleMessage} onChange={(event) => setCapsuleMessage(event.target.value)} placeholder="Dear future me…" className="mt-3 min-h-36 w-full resize-y rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm leading-7 text-white/75 outline-none transition placeholder:text-white/20 focus:border-[#e4cf9d]/25" />
                    </label>
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-6">
                      <p className="max-w-sm text-xs leading-6 text-white/30">Sealing ends the writing step. Make it yours before you close it.</p>
                      <motion.button type="button" onClick={saveCapsule} disabled={capsuleState === "saving" || !capsuleMessage.trim()} whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }} className="rounded-full bg-gradient-to-r from-[#c7a86d] to-[#ead8aa] px-6 py-3 text-sm font-medium text-[#10130d] transition disabled:cursor-not-allowed disabled:opacity-35">
                        {capsuleState === "saving" ? "Sealing…" : "Seal it"}
                      </motion.button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex min-h-80 items-center justify-center rounded-[34px] border border-[#e6d09a]/12 bg-gradient-to-br from-[#e6d09a]/[0.05] to-transparent p-8 text-center">
                  <div>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#e9d9ad]/20 bg-[#e9d9ad]/[0.06]"><span className="text-lg text-[#efdda7]">✦</span></div>
                    <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-[#efdda7]/45">SEALED</p>
                    <h3 className="mt-3 font-serif text-3xl font-light text-white/85">The letter is on its way to 2027.</h3>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/40">Come back on {formatUnlockDate(config.unlockAt)}.</p>
                  </div>
                </div>
              )}
            </div>
          </Section>

          <section id="ending" className="relative scroll-mt-24 min-h-[90vh] overflow-hidden bg-black px-5 py-32 sm:px-8 md:px-12 lg:px-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(226,194,124,.08),transparent_27%)]" />
            <div className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center text-center">
              <div className="space-y-5">
                {config.sections.ending.lines.map((line, index) => (
                  <motion.p key={line} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.22, duration: 0.7 }} className={index === config.sections.ending.lines.length - 1 ? "mt-10 font-serif text-2xl text-[#e9d8a6]/85 sm:text-3xl" : index === 4 ? "font-serif text-4xl font-light text-white sm:text-6xl" : "font-serif text-2xl font-light text-white/65 sm:text-4xl"}>
                    {line}
                  </motion.p>
                ))}
              </div>
              <motion.button type="button" onClick={() => scrollTo("capsule")} whileHover={{ y: -2 }} whileTap={{ scale: 0.985 }} className="mt-14 rounded-full border border-[#e6d09a]/20 bg-[#e6d09a]/[0.04] px-7 py-3 text-xs uppercase tracking-[0.3em] text-[#ecd9a6]/70 transition hover:border-[#e6d09a]/35 hover:text-[#ecd9a6]">
                {config.sections.ending.comebackLabel}
              </motion.button>
            </div>
            <div className="mx-auto mt-20 max-w-5xl text-center"><p className="text-[9px] uppercase tracking-[0.3em] text-white/18">A private experience by Aurora</p></div>
          </section>
        </div>
      )}
    </main>
  );
}
