import { TrabajoHero } from "../components/trabajo/TrabajoHero";
import { ClientsList } from "../components/trabajo/ClientsList";
import { ContactSection } from "../components/ContactSection";
import { SEOHead, breadcrumbJsonLd, collectionPageJsonLd } from "../components/SEOHead";
import { useTranslation } from "react-i18next";

const CLIENT_NAMES = [
  "MijnGeldzaken",
  "Levler",
  "Creditoh",
  "Volkswagen",
  "Spock",
  "Soltec Energías Renovables",
  "Turning Tables",
  "PcComponentes",
  "El Corte Inglés",
  "Nektria",
];

export function TrabajoPage() {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        titleKey="seo.trabajo.title"
        descriptionKey="seo.trabajo.description"
        canonicalPath="/trabajo"
        jsonLd={[
          breadcrumbJsonLd([
            { name: t("seo.home.title"), path: "/" },
            { name: t("seo.trabajo.title"), path: "/trabajo" },
          ]),
          collectionPageJsonLd({
            name: t("seo.trabajo.title"),
            description: t("seo.trabajo.description"),
            url: "https://digio.es/trabajo",
            items: CLIENT_NAMES,
          }),
        ]}
      />
      <TrabajoHero />
      <ClientsList />
      <ContactSection />
    </>
  );
}