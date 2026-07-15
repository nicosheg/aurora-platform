"use client";

import { useState, useEffect } from "react";
import { ExperienceConfig } from "@/types";
import DefaultExperience from "@/components/DefaultExperience";
import StorybookExperience from "@/components/StorybookExperience";

export default function ExperiencePage({ params }: { params: { experience: string } }) {
  const [config, setConfig] = useState<ExperienceConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    import(`@/experiences/${params.experience}/config.json`)
      .then(m => {
        setConfig(m.default || m);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [params.experience]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#d48ba0] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white/40 font-serif text-lg">Experience is loading…</p>
        </div>
      </div>
    );
  }

  if (error || !config) {
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
