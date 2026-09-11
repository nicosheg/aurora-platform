"use client";
import { useState, useEffect } from "react";
import { ExperienceConfig } from "@/types";
import DefaultExperience from "@/components/DefaultExperience";
import SixteenthChapter from "@/components/SixteenthChapter";
import LegacyExperience from "@/components/LegacyExperience";
import TributeExperience from "@/components/TributeExperience";
import FiftiethExperience from "@/components/FiftiethExperience";
import uncleGregConfig from "@/experiences/unclegreg/config.json";

const BUILTIN: Record<string, ExperienceConfig> = {
  unclegreg: uncleGregConfig as unknown as ExperienceConfig
};

export default function ExperiencePage({ params }: { params: { experience: string } }) {
  const [config, setConfig] = useState<ExperienceConfig | null>(BUILTIN[params.experience] || null);
  const [loading, setLoading] = useState(!BUILTIN[params.experience]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const builtIn = BUILTIN[params.experience];
    if (builtIn) {
      setConfig(builtIn);
      setLoading(false);
      setError(false);
      return;
    }
    setLoading(true);
    setError(false);
    import(`@/experiences/${params.experience}/config.json`)
      .then(m => { setConfig(m.default || m); setLoading(false); })
      .catch(() => { setConfig(null); setError(true); setLoading(false); });
  }, [params.experience]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center"><div className="w-8 h-8 border-2 border-[#d48ba0] border-t-transparent rounded-full animate-spin mx-auto mb-4" /><p className="text-white/40 font-serif text-lg">Your experience is loading…</p></div>
    </div>
  );

  if (error || !config) return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <p className="text-white/40 font-serif text-xl">This experience doesn't exist yet.</p>
    </div>
  );

  if (config.theme === "storybook") return <SixteenthChapter config={config} />;
  if (config.theme === "legacy") return <LegacyExperience config={config} />;
  if (config.theme === "tribute") return <TributeExperience config={config} />;
  if (config.theme === "fiftieth") return <FiftiethExperience config={config} />;
  return <DefaultExperience config={config} />;
}
