import Link from "next/link";
import { games } from "@/content/games";
import { Container, SectionLabel, ExternalIcon } from "./ui";

export function GamesSection() {
  return (
    <section id="games" className="scroll-mt-24 border-b border-line bg-[#0e120c] py-20">
      <Container>
        <SectionLabel index="02">Games I&apos;ve built</SectionLabel>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="serif max-w-xl text-3xl sm:text-4xl">Playable systems, not concept art.</h2>
          <p className="max-w-sm text-sm text-muted">
            Separate from the software case studies. Engine, role, loop, and a path to play when a
            build exists.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          {games.map((game) => (
            <article key={game.slug} className="overflow-hidden rounded-sm border border-accent/30 bg-[#141a10]">
              <div className="grid lg:grid-cols-2">
                <div className="grid grid-cols-2">
                  {game.screenshots.map((shot) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={shot.src} src={shot.src} alt={shot.alt} className="h-44 w-full object-cover sm:h-56" />
                  ))}
                </div>
                <div className="p-6 sm:p-8">
                  <p className="mono text-xs tracking-wider text-accent uppercase">
                    {game.genre} · {game.engine}
                  </p>
                  <h3 className="serif mt-2 text-2xl">{game.title}</h3>
                  <p className="mt-1 text-sm text-muted">Role: {game.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{game.description}</p>
                  <p className="mt-4 text-sm leading-relaxed text-text/85">
                    <span className="mono text-xs text-accent uppercase">Development story — </span>
                    {game.story}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {game.playUrl ? (
                      <a
                        href={game.playUrl}
                        className="rounded-sm bg-accent px-3 py-2 text-sm font-medium text-[#111]"
                      >
                        Play
                      </a>
                    ) : (
                      <span className="rounded-sm border border-dashed border-accent/40 px-3 py-2 text-sm text-muted">
                        Play — add build
                      </span>
                    )}
                    {game.github ? (
                      <a
                        href={game.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-sm border border-line px-3 py-2 text-sm"
                      >
                        GitHub <ExternalIcon />
                      </a>
                    ) : (
                      <span className="rounded-sm border border-dashed border-line px-3 py-2 text-sm text-muted">
                        GitHub — add URL
                      </span>
                    )}
                    <Link href={`/games/${game.slug}`} className="rounded-sm border border-line px-3 py-2 text-sm">
                      Full page
                    </Link>
                  </div>
                </div>
              </div>
              {game.webglUrl ? (
                <div className="border-t border-line p-4">
                  <p className="mono mb-2 text-xs text-muted uppercase">WebGL build</p>
                  <iframe
                    title={`${game.title} WebGL`}
                    src={game.webglUrl}
                    className="h-[480px] w-full rounded-sm border border-line bg-black"
                    allow="autoplay; fullscreen"
                  />
                </div>
              ) : (
                <div className="border-t border-dashed border-line px-6 py-8 text-sm text-muted">
                  WebGL embed slot — set <code className="mono text-accent">webglUrl</code> in{" "}
                  <code className="mono">content/games.ts</code> to mount a Unity WebGL build.
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
