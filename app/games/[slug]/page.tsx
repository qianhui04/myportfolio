import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { Container, ExternalIcon } from "@/components/ui";
import { games, getGame } from "@/content/games";
import { getProject } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  return { title: game.title, description: game.description };
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();
  const project = getProject(slug);

  return (
    <SiteShell>
      <Container className="py-12">
        <Link href="/#games" className="mono text-xs text-muted hover:text-accent">
          ← Games
        </Link>
        <p className="mono mt-6 text-xs tracking-wider text-accent uppercase">
          {game.genre} · {game.engine}
        </p>
        <h1 className="serif mt-2 text-4xl">{game.title}</h1>
        <p className="mt-2 text-muted">Role: {game.role}</p>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted">{game.description}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{game.story}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {game.playUrl ? (
            <a href={game.playUrl} className="rounded-sm bg-accent px-4 py-2 text-sm text-[#111]">
              Play
            </a>
          ) : (
            <span className="rounded-sm border border-dashed border-accent/40 px-4 py-2 text-sm text-muted">
              Play — add playUrl
            </span>
          )}
          {game.github ? (
            <a href={game.github} className="inline-flex items-center gap-1 rounded-sm border border-line px-4 py-2 text-sm">
              GitHub <ExternalIcon />
            </a>
          ) : null}
          {project ? (
            <Link href={`/projects/${project.slug}`} className="rounded-sm border border-line px-4 py-2 text-sm">
              Engineering case study
            </Link>
          ) : null}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {game.screenshots.map((s) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={s.src} src={s.src} alt={s.alt} className="w-full rounded-sm border border-line" />
          ))}
        </div>

        {game.webglUrl ? (
          <iframe
            title={`${game.title} WebGL`}
            src={game.webglUrl}
            className="mt-10 h-[560px] w-full rounded-sm border border-line bg-black"
            allow="autoplay; fullscreen"
          />
        ) : (
          <p className="mt-10 rounded-sm border border-dashed border-line px-4 py-8 text-sm text-muted">
            Unity WebGL placeholder. Set <code className="mono text-accent">webglUrl</code> in content/games.ts.
          </p>
        )}
      </Container>
    </SiteShell>
  );
}
