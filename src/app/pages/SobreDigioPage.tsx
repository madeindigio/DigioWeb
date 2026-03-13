import { AboutHero } from "../components/about/AboutHero";
import { AboutStats } from "../components/about/AboutStats";
import { AboutSectors } from "../components/about/AboutSectors";
import { AboutTeam } from "../components/about/AboutTeam";
import { AboutServices } from "../components/about/AboutServices";
import { ClientsSection } from "../components/ClientsSection";
import { ContactSection } from "../components/ContactSection";

export function SobreDigioPage() {
  return (
    <>
      <AboutHero />
      <AboutStats />
      <AboutSectors />
      <AboutTeam />
      <AboutServices />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
