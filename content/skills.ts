export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "Supabase", "SQL", "NoSQL"],
  },
  {
    category: "Game Development",
    items: ["Unity", "C#"],
  },
  {
    category: "AI / ML",
    items: ["Python", "Machine Learning", "NLP", "Embeddings"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code", "Android Studio"],
  },
];
