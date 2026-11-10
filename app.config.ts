export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "MoodLog",
  description:
    "A daily mood journal: check in how you feel, add a quick note, and spot patterns over time.",
  emoji: "😌",
  accent: "#0f766e",
  upcomingFeatures: [
    {
      title: "Daily check-in",
      description: "Pick a mood and write a quick note in under 10 seconds.",
    },
    {
      title: "Mood calendar",
      description: "A color-coded month view of your entries at a glance.",
    },
    {
      title: "Mood trends",
      description: "Charts showing how your average mood changes over time.",
    },
    {
      title: "Streaks & reminders",
      description: "A daily reminder and streak counter to keep the habit alive.",
    },
    {
      title: "Tag your days",
      description: "Tag entries with sleep, exercise or work to spot patterns.",
    },
    {
      title: "Weekly recap",
      description: "A shareable summary of how your week went, mood-wise.",
    },
  ] satisfies Feature[],
};
