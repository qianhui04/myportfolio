export const site = {
  name: "Qian Hui",
  shortName: "QH",
  role: "Software Engineer · Game Developer",
  headline: "I build systems, games, and things people actually use.",
  subhead:
    "Computer Science student focused on Software Engineering, Backend Systems, AI, and Game Development.",
  university: "Universiti Malaya",
  /**
   * Replace these with your real profiles. Leave a field as "" to hide that CTA.
   */
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/",
  /**
   * Place your PDF at /public/resume/Qian-Hui-Resume.pdf (or update this path).
   */
  resumePath: "/resume/Qian-Hui-Resume.pdf",
  location: "Kuala Lumpur, Malaysia",
} as const;

export type SiteConfig = typeof site;
