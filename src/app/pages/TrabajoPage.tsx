import { TrabajoHero } from "../components/trabajo/TrabajoHero";
import { ClientsList } from "../components/trabajo/ClientsList";
import { ContactSection } from "../components/ContactSection";
import { SEOHead, breadcrumbJsonLd } from "../components/SEOHead";
import { useTranslation } from "react-i18next";

export function TrabajoPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        titleKey="seo.trabajo.title"
        descriptionKey="seo.trabajo.description"
        canonicalPath="/trabajo"
        jsonLd={breadcrumbJsonLd([
          { name: t("seo.home.title"), path: "/" },
          { name: t("seo.trabajo.title"), path: "/trabajo" },
        ])}
      />
      <TrabajoHero />
      <ClientsList />
      <ContactSection />
    </>
  );
}