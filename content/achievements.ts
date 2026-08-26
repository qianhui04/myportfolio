export type Achievement = {
  title: string;
  event: string;
  year: string;
  built: string;
  role: string;
  challenge: string;
  outcome: string;
  href?: string;
};

/**
 * Selected, project-first achievements. Do not treat this as a trophy wall.
 */
export const achievements: Achievement[] = [
  {
    title: "VeriAI",
    event: "Hackathon prototype",
    year: "2025",
    built: "An enterprise AI governance prototype: sensitive-data detection, risk assessment, and a persisted decision trail.",
    role: "Backend and AI/ML on a Python / FastAPI / Supabase stack.",
    challenge:
      "Hackathon time. The hard part was shipping a real inspect → score → store loop instead of a chatbot skin.",
    outcome:
      "A working prototype under time constraint — scoped to a governance path that can still be explained on a whiteboard.",
    href: "/projects/veriai",
  },
];
