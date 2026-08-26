import { experience } from "@/content/experience";
import { Container, SectionLabel } from "./ui";

export function Experience() {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="scroll-mt-24 border-b border-line py-20">
      <Container>
        <SectionLabel index="04">Experience</SectionLabel>
        <h2 className="serif text-3xl sm:text-4xl">Places I have shipped from.</h2>
        <ol className="mt-10 space-y-8">
          {experience.map((job) => (
            <li key={`${job.organization}-${job.position}`} className="border-t border-line pt-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg">
                  {job.position}{" "}
                  <span className="text-muted">· {job.organization}</span>
                </h3>
                <p className="mono text-xs text-muted">
                  {job.start} — {job.end}
                </p>
              </div>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-muted">
                {job.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.technologies.map((t) => (
                  <span key={t} className="mono rounded-sm border border-line px-2 py-0.5 text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
