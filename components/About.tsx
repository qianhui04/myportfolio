import { site } from "@/content/site";
import { Container, SectionLabel } from "./ui";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line py-20">
      <Container className="grid gap-10 lg:grid-cols-[0.4fr_1fr]">
        <SectionLabel index="05">About</SectionLabel>
        <div className="max-w-2xl lg:col-start-2">
          <h2 className="serif text-3xl sm:text-4xl">I like finishing the hard middle.</h2>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            <p>
              I am a Computer Science student at {site.university}. I care about Software
              Engineering in the unglamorous sense: backend systems, data models, APIs, and the
              design decisions that keep a product from collapsing when real people touch it.
            </p>
            <p>
              Alongside that I work on AI/ML where it is actually load-bearing — detection,
              scoring, language, embeddings — and on games, where the same instinct shows up as
              state, feel, and a loop someone can play.
            </p>
            <p>
              The through-line is turning an idea into something that runs. Not a pitch. Not a
              certificate wall. A system you can open, break, and improve.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
