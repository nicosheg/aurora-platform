export interface UnlockSchedule { morning: string; afternoon: string; evening: string; }
export interface MemoryPhoto { id: string; src: string; alt: string; caption: string; hiddenStory?: string; }
export interface TimelineMemory { id: string; time: string; title: string; description: string; image?: string; video?: string; }
export interface EasterEgg { id: string; type: string; message: string; position: { x: number; y: number }; animation: string; }
export interface MusicTracks { opening?: string; middle?: string; ending?: string; }

export interface BirthdayConfig {
  herName: string; birthdayDate: string; senderName: string; theme: string; unlockSchedule: UnlockSchedule;
  themeColors: { primary: string; accent: string; background: string; text: string; glass: string; };
  chapters: { one: { greeting: string; message: string; photos: MemoryPhoto[]; }; two: { title: string; subtitle: string; timeline: TimelineMemory[]; }; three: { letter: string[]; voiceMessageUrl: string; videoUrl: string; finalSurprise: string; }; };
  easterEggs: EasterEgg[]; musicUrl: string; musicTracks?: MusicTracks;
}

export interface ExperienceConfig {
  name: string; birthdayDate: string; senderName: string;
  theme: "romantic" | "storybook" | "minimal" | "fantasy" | "galaxy" | "legacy" | "tribute" | "fiftieth";
  unlockSchedule: UnlockSchedule;
  colors: { primary: string; accent: string; background: string; text: string; glass: string; };
  chapters: { one: { greeting: string; message: string; photos: MemoryPhoto[]; }; two: { title: string; subtitle: string; timeline: TimelineMemory[]; }; three: { letter: string[]; voiceMessageUrl: string; videoUrl: string; finalSurprise: string; }; };
  easterEggs: EasterEgg[]; musicUrl: string; musicTracks?: MusicTracks;
}

export interface TovyahThemeColors {
  primary: string;
  accent: string;
  background: string;
  text: string;
  glass: string;
}

export interface TovyahMemory {
  id: string;
  label: string;
  title: string;
  year: string;
  text: string;
  image?: string;
  imageAlt?: string;
}

export interface TovyahTimePoint {
  id: string;
  era: string;
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface TovyahBranch {
  title: string;
  lines: string[];
}

export interface TovyahQuestion {
  prompt: string;
  choices: Array<{ id: string; label: string; branch: TovyahBranch }>;
}

export interface TovyahExperienceConfig {
  name: string;
  publicSlug: string;
  birthdayDate: string;
  birthdayLabel: string;
  unlockAt: string;
  senderName: string;
  theme: "tovyah";
  colors: TovyahThemeColors;
  musicUrl?: string;
  musicTracks?: MusicTracks;
  voiceNotes: Array<{ id: string; label: string; src: string }>;
  sections: {
    opening: { lines: string[]; buttonText: string; };
    childhood: { eyebrow: string; title: string; paragraphs: string[]; memories: TovyahMemory[]; };
    timeMachine: { eyebrow: string; title: string; intro: string; points: TovyahTimePoint[]; };
    remembered: { eyebrow: string; title: string; intro: string; memories: TovyahMemory[]; };
    thenNow: { eyebrow: string; title: string; leftLabel: string; leftText: string; rightLabel: string; rightText: string; currentPhoto?: string; };
    question: TovyahQuestion;
    letter: { title: string; paragraphs: string[]; };
    celebration: { lines: string[]; heroPhoto?: string; };
    constellation: { eyebrow: string; title: string; memories: string[]; finalLine: string; };
    timeCapsule: { eyebrow: string; title: string; intro: string; prompts: Array<{ id: string; label: string; placeholder: string }>; };
    ending: { lines: string[]; comebackLabel: string; };
  };
}

export type AnyExperienceConfig = ExperienceConfig | TovyahExperienceConfig;
