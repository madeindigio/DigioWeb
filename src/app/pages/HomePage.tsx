import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { CaseStudySection } from "../components/CaseStudySection";
import { WorkSection } from "../components/WorkSection";
import { BlogSection } from "../components/BlogSection";
import { ServicesSection } from "../components/ServicesSection";
import { ClientsSection } from "../components/ClientsSection";
import { ContactSection } from "../components/ContactSection";
import { SEOHead, organizationJsonLd, breadcrumbJsonLd } from "../components/SEOHead";
import { useTranslation } from "react-i18next";
import {
  ScrollRevealSectionPreset,
  ScrollStaggerGroup,
  ScrollStaggerItem,
} from "../components/project-detail-shared";

export function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        titleKey="seo.home.title"
        descriptionKey="seo.home.description"
        canonicalPath="/"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([{ name: t("seo.home.title"), path: "/" }]),
        ]}
      />
      <HeroSection />
      <ScrollRevealSectionPreset preset="chapter">
        <AboutSection />
      </ScrollRevealSectionPreset>
      <ScrollRevealSectionPreset preset="chapter">
        <CaseStudySection />
      </ScrollRevealSectionPreset>
      <ScrollRevealSectionPreset preset="chapter">
        <WorkSection />
      </ScrollRevealSectionPreset>
      <ScrollStaggerGroup>
        <ScrollStaggerItem>
          <ServicesSection />
        </ScrollStaggerItem>
        <ScrollStaggerItem>
          <ClientsSection />
        </ScrollStaggerItem>
      </ScrollStaggerGroup>
      <ScrollRevealSectionPreset preset="feature">
        <BlogSection />
      </ScrollRevealSectionPreset>
      <ScrollRevealSectionPreset preset="soft">
        <ContactSection />
      </ScrollRevealSectionPreset>
    </>
  );
}