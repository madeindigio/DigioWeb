import { AboutHero } from "../components/about/AboutHero";
import { AboutStats } from "../components/about/AboutStats";
import { AboutSectors } from "../components/about/AboutSectors";
import { AboutTeam } from "../components/about/AboutTeam";
import { AboutServices } from "../components/about/AboutServices";
import { ClientsSection } from "../components/ClientsSection";
import { ContactSection } from "../components/ContactSection";
import { SEOHead, breadcrumbJsonLd, aboutPageJsonLd } from "../components/SEOHead";
import { useTranslation } from "react-i18next";

export function SobreDigioPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        titleKey="seo.sobreDigio.title"
        descriptionKey="seo.sobreDigio.description"
        canonicalPath="/sobre-digio"
        jsonLd={[
          breadcrumbJsonLd([
            { name: t("seo.home.title"), path: "/" },
            { name: t("seo.sobreDigio.title"), path: "/sobre-digio" },
          ]),
          aboutPageJsonLd({
            name: t("seo.sobreDigio.title"),
            description: t("seo.sobreDigio.description"),
            url: "https://digio.es/sobre-digio",
          }),
        ]}
      />
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