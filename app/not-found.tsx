import SiteShell from "@/components/SiteShell";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <SiteShell>
      <Container className="py-24">
        <p className="mono text-xs text-accent uppercase">404</p>
        <h1 className="serif mt-3 text-4xl">This route is not in the build.</h1>
        <a href="/" className="mt-6 inline-block text-sm text-muted hover:text-accent">
          Back to the work
        </a>
      </Container>
    </SiteShell>
  );
}
