import SiteShell from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { FeaturedWork } from "@/components/FeaturedWork";
import { GamesSection } from "@/components/GamesSection";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <FeaturedWork />
      <GamesSection />
      <Skills />
      <Experience />
      <About />
      <Achievements />
      <Resume />
      <Contact />
    </SiteShell>
  );
}
