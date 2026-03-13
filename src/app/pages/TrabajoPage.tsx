import { TrabajoHero } from "../components/trabajo/TrabajoHero";
import { ClientsList } from "../components/trabajo/ClientsList";
import { ContactSection } from "../components/ContactSection";

export function TrabajoPage() {
  return (
    <>
      <TrabajoHero />
      <ClientsList />
      <ContactSection />
    </>
  );
}
