import { site } from "@/content/site";
import { Container, SectionLabel, ExternalIcon } from "./ui";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionLabel index="08">Contact</SectionLabel>
          <h2 className="serif text-4xl sm:text-5xl">Let&apos;s Build Something.</h2>
          <p className="mt-4 max-w-md text-muted">
            Email is the fastest path. GitHub and LinkedIn if you want the paper trail first.
            Update the addresses in <code className="mono text-accent">content/site.ts</code>.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-accent">
                {site.email} <ExternalIcon />
              </a>
            </li>
            <li>
              <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                GitHub <ExternalIcon />
              </a>
            </li>
            <li>
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                LinkedIn <ExternalIcon />
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-sm border border-line bg-surface p-6 sm:p-8">
          <p className="mono text-xs tracking-wider text-muted uppercase">Direct line</p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
