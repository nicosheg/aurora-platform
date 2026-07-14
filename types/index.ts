export interface ExperienceConfig {
  name: string;
  birthdayDate: string;
  senderName: string;
  theme: "romantic" | "storybook" | "minimal" | "fantasy" | "galaxy";
  unlockSchedule: {
    morning: string;
    afternoon: string;
    evening: string;
  };
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
      photos: { id: string; src: string; alt: string; caption: string; hiddenStory?: string }[];
    };
    two: {
      title: string;
      subtitle: string;
      timeline: { id: string; time: string; title: string; description: string; image?: string }[];
    };
    three: {
      letter: string[];
      voiceMessageUrl: string;
      videoUrl: string;
      finalSurprise: string;
    };
  };
  easterEggs: { id: string; type: string; message: string; position: { x: number; y: number }; animation: string }[];
  musicUrl: string;
}
