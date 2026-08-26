import { featuredProjects } from "@/content/projects";
import { Container, SectionLabel } from "./ui";
import { ProjectCard } from "./ProjectCard";

export function FeaturedWork() {
  const items = featuredProjects();
  const software = items.filter((p) => p.kind === "software");
  const games = items.filter((p) => p.kind === "game");

  return (
    <section id="work" className="scroll-mt-24 border-b border-line py-20">
      <Container>
        <SectionLabel index="01">Featured work</SectionLabel>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="serif max-w-xl text-3xl sm:text-4xl">
            A few systems I actually built — not a gallery of class assignments.
          </h2>
          <p className="max-w-sm text-sm text-muted">
            Each card is a product slice: problem, architecture, my role, and the tradeoffs.
            Open a case study for the full write-up.
          </p>
        </div>
        <div className="mt-12 grid gap-8">
          {software.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
          {games.map((p) => (
            <ProjectCard key={p.slug} project={p} featuredGame />
          ))}
        </div>
      </Container>
    </section>
  );
}
