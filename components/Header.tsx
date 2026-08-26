"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Container } from "./ui";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#games", label: "Games" },
  { href: "/#skills", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="mono text-sm font-medium tracking-tight text-accent">{site.shortName}</span>
          <span className="text-sm text-text">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={site.resumePath}
            className="mono rounded-sm border border-line bg-surface px-3 py-1.5 text-xs text-text transition-colors hover:border-accent hover:text-accent"
          >
            Resume
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className={`h-px w-4 bg-text transition ${open ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-text transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-4 bg-text transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-bg md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-sm text-muted"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href={site.resumePath} className="py-2 text-sm text-accent" onClick={() => setOpen(false)}>
              Download resume
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="mono text-xs">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built as a working site, not a template dump.</p>
      </Container>
    </footer>
  );
}
