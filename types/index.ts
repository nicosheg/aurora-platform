export interface UnlockSchedule {
  morning: string;
  afternoon: string;
  evening: string;
}

export interface MemoryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  hiddenStory?: string;
}

export interface TimelineMemory {
  id: string;
  time: string;
  title: string;
  description: string;
  image?: string;
  video?: string;
}

export interface EasterEgg {
  id: string;
  type: string;
  message: string;
  position: { x: number; y: number };
  animation: string;
}

export interface BirthdayConfig {
  herName: string;
  birthdayDate: string;
  senderName: string;
  theme: string;
  unlockSchedule: UnlockSchedule;
  themeColors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
    glass: string;
  };
  chapters: {
    one: {
      greeting: string;
      message: string;
      photos: MemoryPhoto[];
    };
    two: {
      title: string;
      subtitle: string;
      timeline: TimelineMemory[];
    };
    three: {
      letter: string[];
      voiceMessageUrl: string;
      videoUrl: string;
      finalSurprise: string;
    };
  };
  easterEggs: EasterEgg[];
  musicUrl: string;
}

export interface ExperienceConfig {
  name: string;
  birthdayDate: string;
  senderName: string;
  theme: "romantic" | "storybook" | "minimal" | "fantasy" | "galaxy" | "legacy";
  unlockSchedule: UnlockSchedule;
  colors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
    glass: string;
  };
  chapters: {
    one: {
      greeting: string;
      message: string;
      photos: MemoryPhoto[];
    };
    two: {
      title: string;
      subtitle: string;
      timeline: TimelineMemory[];
    };
    three: {
      letter: string[];
      voiceMessageUrl: string;
      videoUrl: string;
      finalSurprise: string;
    };
  };
  easterEggs: EasterEgg[];
  musicUrl: string;
}
