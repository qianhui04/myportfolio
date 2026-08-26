import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import SiteShell from "@/components/SiteShell";
import { Container, ExternalIcon } from "@/components/ui";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const cs = project.caseStudy;

  return (
    <SiteShell>
      <article className="border-b border-line">
        <div className="border-b border-line bg-bg-2">
          <Container className="py-10">
            <Link href="/#work" className="mono text-xs text-muted hover:text-accent">
              ← Work
            </Link>
            <p className="mono mt-6 text-xs tracking-wider text-accent uppercase">
              {project.kind === "game" ? "Game case study" : "Case study"} · {project.year} · {project.status}
            </p>
            <h1 className="serif mt-3 text-4xl sm:text-5xl">{project.title}</h1>
            <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>
            <p className="mt-2 text-sm text-muted">Role: {project.role}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.github ? (
                <a href={project.github} className="inline-flex items-center gap-1 rounded-sm border border-line px-3 py-2 text-sm">
                  GitHub <ExternalIcon />
                </a>
              ) : (
                <span className="rounded-sm border border-dashed border-line px-3 py-2 text-sm text-muted">
                  GitHub placeholder
                </span>
              )}
              {project.demo ? (
                <a href={project.demo} className="inline-flex items-center gap-1 rounded-sm border border-line px-3 py-2 text-sm">
                  Demo <ExternalIcon />
                </a>
              ) : (
                <span className="rounded-sm border border-dashed border-line px-3 py-2 text-sm text-muted">
                  Demo placeholder
                </span>
              )}
              {project.playUrl ? (
                <a href={project.playUrl} className="rounded-sm bg-accent px-3 py-2 text-sm text-[#111]">
                  Play game
                </a>
              ) : null}
            </div>
          </Container>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.cover} alt="" className="mx-auto max-h-[420px] w-full max-w-6xl object-cover" />
        </div>

        <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_280px]">
          <div className="space-y-12">
            <section>
              <h2 className="serif text-2xl">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted">{cs.overview}</p>
            </section>
            <section>
              <h2 className="serif text-2xl">Problem</h2>
              <p className="mt-3 leading-relaxed text-muted">{cs.problem}</p>
            </section>
            <section>
              <h2 className="serif text-2xl">Goals</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {cs.goals.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="serif text-2xl">My role</h2>
              <p className="mt-3 leading-relaxed text-muted">{cs.role}</p>
            </section>
            <section>
              <h2 className="serif text-2xl">System architecture</h2>
              <ArchitectureDiagram architecture={cs.architecture} />
            </section>
            <section>
              <h2 className="serif text-2xl">Technical decisions</h2>
              <ul className="mt-4 space-y-4">
                {cs.decisions.map((d) => (
                  <li key={d.decision} className="rounded-sm border border-line p-4">
                    <p className="text-text">{d.decision}</p>
                    <p className="mt-1 text-sm text-muted">{d.why}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="serif text-2xl">Implementation</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {cs.implementation.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="serif text-2xl">Challenges</h2>
              <ul className="mt-4 space-y-4">
                {cs.challenges.map((c) => (
                  <li key={c.title}>
                    <p className="text-text">{c.title}</p>
                    <p className="mt-1 text-sm text-muted">{c.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="serif text-2xl">Solutions</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {cs.solutions.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="serif text-2xl">Results</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {cs.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="serif text-2xl">What I learned</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {cs.learned.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="serif text-2xl">Future improvements</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
                {cs.next.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit rounded-sm border border-line bg-surface p-5 lg:sticky lg:top-24">
            <p className="mono text-xs text-muted uppercase">Stack</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <li key={t} className="rounded-sm border border-line px-2 py-0.5 text-xs">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mono mt-6 text-xs text-muted uppercase">Media</p>
            <p className="mt-2 text-sm text-muted">
              Replace SVG covers in <code className="mono text-accent">/public/projects/{project.slug}/</code> with
              screenshots or video.
            </p>
            <div className="mt-4 space-y-2">
              {project.media.map((m) =>
                m.type === "video" ? (
                  <video key={m.src} src={m.src} controls className="w-full rounded-sm border border-line" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={m.src} src={m.src} alt={m.alt} className="w-full rounded-sm border border-line" />
                ),
              )}
            </div>
          </aside>
        </Container>
      </article>
    </SiteShell>
  );
}
