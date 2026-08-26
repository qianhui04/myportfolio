import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./ui";
import { HeroSchematic } from "./HeroSchematic";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <p className="mono mb-5 text-xs tracking-[0.2em] text-accent uppercase">
            {site.university} · CS · {site.role}
          </p>
          <h1 className="serif text-[2.6rem] leading-[1.1] tracking-tight text-text sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-snug text-text sm:text-2xl">
            {site.headline}
          </p>
          <p className="mt-4 max-w-lg text-muted">{site.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#work"
              className="rounded-sm bg-accent px-4 py-2.5 text-sm font-medium text-[#111] transition-opacity hover:opacity-90"
            >
              View My Work
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-line px-4 py-2.5 text-sm text-text hover:border-accent"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-line px-4 py-2.5 text-sm text-text hover:border-accent"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <HeroSchematic />
      </Container>
    </section>
  );
}
