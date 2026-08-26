export type Experience = {
  organization: string;
  position: string;
  start: string;
  end: string;
  location?: string;
  responsibilities: string[];
  technologies: string[];
};

/**
 * Add internships and work here. The Experience section hides itself when this
 * array is empty — nothing is invented.
 *
 * Example:
 * {
 *   organization: "Company",
 *   position: "Software Engineering Intern",
 *   start: "May 2025",
 *   end: "Aug 2025",
 *   responsibilities: ["Shipped X by doing Y."],
 *   technologies: ["Java", "Spring Boot"],
 * }
 */
export const experience: Experience[] = [];
