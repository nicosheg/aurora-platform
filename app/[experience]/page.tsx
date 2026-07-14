"use client";

import { useState, useEffect, useCallback } from "react";
import { ExperienceConfig } from "@/types";
import MusicToggle from "@/components/MusicToggle";
import DefaultExperience from "@/components/DefaultExperience";
import StorybookExperience from "@/components/StorybookExperience";

export default function ExperiencePage({ params }: { params: { experience: string } }) {
  const [config, setConfig] = useState<ExperienceConfig | null>(null);

  useEffect(() => {
    import(`@/experiences/${params.experience}/config.json`)
      .then(m => setConfig(m.default || m))
      .catch(() => setConfig(null));
  }, [params.experience]);

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <p className="text-white/40 font-serif text-xl">This experience doesn't exist yet.</p>
      </div>
    );
  }

  if (config.theme === "storybook") {
    return <StorybookExperience config={config} />;
  }

  return <DefaultExperience config={config} />;
}
