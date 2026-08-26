import { site } from "@/content/site";
import { Container, SectionLabel } from "./ui";

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 border-b border-line py-20">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <SectionLabel index="07">Resume</SectionLabel>
          <h2 className="serif text-3xl">One page, no decoration.</h2>
          <p className="mt-2 max-w-md text-sm text-muted">
            Drop a PDF at <code className="mono text-accent">public/resume/Qian-Hui-Resume.pdf</code>{" "}
            or change the path in <code className="mono">content/site.ts</code>.
          </p>
        </div>
        <a
          href={site.resumePath}
          className="rounded-sm bg-accent px-5 py-3 text-sm font-medium text-[#111]"
        >
          Download Resume
        </a>
      </Container>
    </section>
  );
}
