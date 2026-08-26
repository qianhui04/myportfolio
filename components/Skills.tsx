import { skillGroups } from "@/content/skills";
import { Container, SectionLabel } from "./ui";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-line py-20">
      <Container>
        <SectionLabel index="03">Technical ability</SectionLabel>
        <h2 className="serif max-w-xl text-3xl sm:text-4xl">Tools I actually reach for.</h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          Grouped by the kind of work, not by fake percentages. Depth shows up in the case studies.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-sm border border-line bg-surface p-5">
              <h3 className="mono text-xs tracking-[0.16em] text-accent uppercase">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-line bg-bg px-2.5 py-1 text-sm text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
