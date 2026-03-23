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
      <AboutSection />
      <CaseStudySection />
      <WorkSection />
      <ServicesSection />
      <ClientsSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}