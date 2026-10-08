"use client";

import { useEffect, useState } from "react";
import { AnyExperienceConfig, ExperienceConfig } from "@/types";
import DefaultExperience from "@/components/DefaultExperience";
import SixteenthChapter from "@/components/SixteenthChapter";
import LegacyExperience from "@/components/LegacyExperience";
import TributeExperience from "@/components/TributeExperience";
import FiftiethExperience from "@/components/FiftiethExperience";
import TovyahExperience from "@/components/TovyahExperience";
import uncleGregConfig from "@/experiences/unclegreg/config.json";
import tovyahConfig from "@/experiences/tovyah/config.json";

const BUILTIN: Record<string, AnyExperienceConfig> = {
  unclegreg: uncleGregConfig as unknown as ExperienceConfig,
  [tovyahConfig.publicSlug]: tovyahConfig as unknown as AnyExperienceConfig,
};

export default function ExperiencePage({ params }: { params: { experience: string } }) {
  const [config, setConfig] = useState<AnyExperienceConfig | null>(BUILTIN[params.experience] || null);
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
    import("@/experiences/" + params.experience + "/config.json")
      .then((m) => {
        setConfig((m.default || m) as unknown as AnyExperienceConfig);
        setLoading(false);
      })
      .catch(() => {
        setConfig(null);
        setError(true);
        setLoading(false);
      });
  }, [params.experience]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#d48ba0] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/40 font-serif text-lg">Your experience is loading…</p>
        </div>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white/40 font-serif text-xl">This experience doesn't exist yet.</p>
      </div>
    );
  }

  if (config.theme === "tovyah") return <TovyahExperience config={config} />;
  if (config.theme === "storybook") return <SixteenthChapter config={config} />;
  if (config.theme === "legacy") return <LegacyExperience config={config} />;
  if (config.theme === "tribute") return <TributeExperience config={config} />;
  if (config.theme === "fiftieth") return <FiftiethExperience config={config} />;
  return <DefaultExperience config={config} />;
}
