import { notFound } from "next/navigation";
import TovyahExperience from "@/components/TovyahExperience";
import tovyahConfig from "@/experiences/tovyah/config.json";
import type { TovyahExperienceConfig } from "@/types";

export const dynamic = "force-dynamic";

export default function TovyahPrivatePage({ params }: { params: { token: string } }) {
  const expectedToken = process.env.TOVYAH_PUBLIC_TOKEN;
  if (!expectedToken || params.token !== expectedToken) notFound();

  return (
    <TovyahExperience
      config={tovyahConfig as unknown as TovyahExperienceConfig}
      accessToken={params.token}
    />
  );
}
