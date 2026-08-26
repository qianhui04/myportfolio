import { Header, Footer } from "@/components/Header";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:px-3 focus:py-2 focus:text-[#111]"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
