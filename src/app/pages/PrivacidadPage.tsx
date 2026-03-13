import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  LegalPageLayout,
  LegalSection,
  LegalBody,
  LegalBulletList,
  type TocItem,
} from "../components/LegalPageLayout";

export function PrivacidadPage() {
  const { t, i18n } = useTranslation();

  const dataList = t("pages.privacidad.dataList", {
    returnObjects: true,
  }) as string[];
  const useList = t("pages.privacidad.useList", {
    returnObjects: true,
  }) as string[];

  const tocItems: TocItem[] = useMemo(
    () => [
      { id: "intro", label: t("pages.privacidad.introTitle") },
      { id: "datos", label: t("pages.privacidad.dataTitle") },
      { id: "uso", label: t("pages.privacidad.useTitle") },
      { id: "proteccion", label: t("pages.privacidad.protectionTitle") },
      { id: "terceros", label: t("pages.privacidad.sharingTitle") },
      { id: "derechos", label: t("pages.privacidad.rightsTitle") },
      { id: "cambios", label: t("pages.privacidad.changesTitle") },
      { id: "contacto-priv", label: t("pages.privacidad.contactTitle") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return (
    <LegalPageLayout
      title={t("pages.privacidad.title")}
      tocItems={tocItems}
    >
      <LegalSection id="intro" title={t("pages.privacidad.introTitle")}>
        <LegalBody>{t("pages.privacidad.introBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="datos" title={t("pages.privacidad.dataTitle")}>
        <LegalBody>{t("pages.privacidad.dataBody1")}</LegalBody>
        <LegalBulletList items={dataList} />
        <LegalBody>{t("pages.privacidad.dataBody2")}</LegalBody>
      </LegalSection>

      <LegalSection id="uso" title={t("pages.privacidad.useTitle")}>
        <LegalBody>{t("pages.privacidad.useBody2")}</LegalBody>
        <LegalBulletList items={useList} />
      </LegalSection>

      <LegalSection
        id="proteccion"
        title={t("pages.privacidad.protectionTitle")}
      >
        <LegalBody>{t("pages.privacidad.protectionBody")}</LegalBody>
      </LegalSection>

      <LegalSection
        id="terceros"
        title={t("pages.privacidad.sharingTitle")}
      >
        <LegalBody>{t("pages.privacidad.sharingBody")}</LegalBody>
      </LegalSection>

      <LegalSection
        id="derechos"
        title={t("pages.privacidad.rightsTitle")}
      >
        <LegalBody>{t("pages.privacidad.rightsBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="cambios" title={t("pages.privacidad.changesTitle")}>
        <LegalBody>{t("pages.privacidad.changesBody")}</LegalBody>
      </LegalSection>

      <LegalSection
        id="contacto-priv"
        title={t("pages.privacidad.contactTitle")}
      >
        <LegalBody>{t("pages.privacidad.contactBody")}</LegalBody>
      </LegalSection>
    </LegalPageLayout>
  );
}
