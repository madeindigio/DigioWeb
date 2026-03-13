import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CaseStudySection } from "../components/CaseStudySection";
import { WorkSection } from "../components/WorkSection";
import { BlogSection } from "../components/BlogSection";
import { ServicesSection } from "../components/ServicesSection";
import { ClientsSection } from "../components/ClientsSection";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CaseStudySection />
      <WorkSection />
      <BlogSection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
