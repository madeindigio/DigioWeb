import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  LegalPageLayout,
  LegalSection,
  LegalBody,
  LegalBulletList,
  type TocItem,
} from "../components/LegalPageLayout";

export function SeguridadPage() {
  const { t, i18n } = useTranslation();

  const accessList = t("pages.seguridad.accessList", {
    returnObjects: true,
  }) as string[];

  const tocItems: TocItem[] = useMemo(
    () => [
      { id: "intro-seguridad", label: t("pages.seguridad.introTitle") },
      { id: "principios", label: t("pages.seguridad.principlesTitle") },
      { id: "medidas", label: t("pages.seguridad.measuresTitle") },
      { id: "acceso", label: t("pages.seguridad.accessTitle") },
      { id: "incidentes", label: t("pages.seguridad.incidentsTitle") },
      { id: "contacto-seguridad", label: t("pages.seguridad.contactTitle") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return (
    <LegalPageLayout title={t("pages.seguridad.title")} tocItems={tocItems}>
      <LegalSection id="intro-seguridad" title={t("pages.seguridad.introTitle")}>
        <LegalBody>{t("pages.seguridad.introBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="principios" title={t("pages.seguridad.principlesTitle")}>
        <LegalBody>{t("pages.seguridad.principlesBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="medidas" title={t("pages.seguridad.measuresTitle")}>
        <LegalBody>{t("pages.seguridad.measuresBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="acceso" title={t("pages.seguridad.accessTitle")}>
        <LegalBody>{t("pages.seguridad.accessBody")}</LegalBody>
        <LegalBulletList items={accessList} />
      </LegalSection>

      <LegalSection id="incidentes" title={t("pages.seguridad.incidentsTitle")}>
        <LegalBody>{t("pages.seguridad.incidentsBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="contacto-seguridad" title={t("pages.seguridad.contactTitle")}>
        <LegalBody>{t("pages.seguridad.contactBody")}</LegalBody>
      </LegalSection>
    </LegalPageLayout>
  );
}
