import Link from "next/link";
import { achievements } from "@/content/achievements";
import { Container, SectionLabel } from "./ui";

export function Achievements() {
  if (achievements.length === 0) return null;

  return (
    <section id="achievements" className="scroll-mt-24 border-b border-line py-20">
      <Container>
        <SectionLabel index="06">Selected builds under pressure</SectionLabel>
        <h2 className="serif max-w-xl text-3xl sm:text-4xl">Hackathons as shipping constraints, not trophies.</h2>
        <p className="mt-3 max-w-lg text-sm text-muted">
          What I built, the technical squeeze, and what actually came out of it.
        </p>
        <div className="mt-10 grid gap-4">
          {achievements.map((a) => {
            const inner = (
              <>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg">{a.title}</h3>
                  <p className="mono text-xs text-muted">
                    {a.event} · {a.year}
                  </p>
                </div>
                <dl className="mt-4 grid gap-3 text-sm text-muted sm:grid-cols-2">
                  <div>
                    <dt className="mono text-xs text-accent uppercase">Built</dt>
                    <dd className="mt-1">{a.built}</dd>
                  </div>
                  <div>
                    <dt className="mono text-xs text-accent uppercase">Role</dt>
                    <dd className="mt-1">{a.role}</dd>
                  </div>
                  <div>
                    <dt className="mono text-xs text-accent uppercase">Challenge</dt>
                    <dd className="mt-1">{a.challenge}</dd>
                  </div>
                  <div>
                    <dt className="mono text-xs text-accent uppercase">Outcome</dt>
                    <dd className="mt-1">{a.outcome}</dd>
                  </div>
                </dl>
              </>
            );

            return a.href ? (
              <Link
                key={a.title}
                href={a.href}
                className="block rounded-sm border border-line bg-surface p-6 transition-colors hover:border-accent"
              >
                {inner}
              </Link>
            ) : (
              <div key={a.title} className="rounded-sm border border-line bg-surface p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
