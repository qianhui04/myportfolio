import Link from "next/link";
import type { Project } from "@/content/projects";
import { ExternalIcon } from "./ui";

export function ProjectCard({ project, featuredGame = false }: { project: Project; featuredGame?: boolean }) {
  return (
    <article
      className={`overflow-hidden rounded-sm border ${
        featuredGame ? "border-accent/40 bg-[#12160f]" : "border-line bg-surface"
      }`}
    >
      <div className="border-b border-line bg-bg-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.cover} alt="" className="h-48 w-full object-cover sm:h-56" />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="mono text-accent">{project.year}</span>
          <span className="text-line">/</span>
          <span className="mono text-muted">{project.status}</span>
          <span className="text-line">/</span>
          <span className="text-muted">{project.role}</span>
        </div>
        <h3 className="serif mt-3 text-2xl">{project.title}</h3>
        <p className="mt-2 text-muted">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-text/90">{project.summary}</p>

        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="mono text-xs tracking-wider text-muted uppercase">Problem</dt>
            <dd className="mt-1 text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="mono text-xs tracking-wider text-muted uppercase">Solution</dt>
            <dd className="mt-1 text-muted">{project.solution}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <p className="mono text-xs tracking-wider text-muted uppercase">My contribution</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="mono text-xs tracking-wider text-muted uppercase">Challenges</p>
          <ul className="mt-2 space-y-2 text-sm text-muted">
            {project.challenges.map((c) => (
              <li key={c.title}>
                <span className="text-text">{c.title}.</span> {c.detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <p className="mono text-xs tracking-wider text-muted uppercase">Impact</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {project.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span key={t} className="mono rounded-sm border border-line px-2 py-0.5 text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-sm bg-accent px-3 py-2 text-sm font-medium text-[#111]"
          >
            Case study
          </Link>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-line px-3 py-2 text-sm"
            >
              GitHub <ExternalIcon />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-sm border border-dashed border-line px-3 py-2 text-sm text-muted">
              GitHub — add URL
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-sm border border-line px-3 py-2 text-sm"
            >
              Demo <ExternalIcon />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-sm border border-dashed border-line px-3 py-2 text-sm text-muted">
              Demo — add URL
            </span>
          )}
          {project.kind === "game" ? (
            project.playUrl ? (
              <a
                href={project.playUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-accent px-3 py-2 text-sm text-accent"
              >
                Play game
              </a>
            ) : (
              <span className="rounded-sm border border-dashed border-accent/40 px-3 py-2 text-sm text-muted">
                Play game — add build
              </span>
            )
          ) : null}
        </div>
      </div>
    </article>
  );
}
