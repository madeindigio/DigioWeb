import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  LegalPageLayout,
  LegalSection,
  LegalBody,
  type TocItem,
} from "../components/LegalPageLayout";

export function CookiesPage() {
  const { t, i18n } = useTranslation();

  const tocItems: TocItem[] = useMemo(
    () => [
      { id: "que-son", label: t("pages.cookies.introTitle") },
      { id: "tipos", label: t("pages.cookies.typesTitle") },
      { id: "gestion", label: t("pages.cookies.managementTitle") },
      { id: "navegador", label: t("pages.cookies.browserTitle") },
      { id: "cambios-ck", label: t("pages.cookies.changesTitle") },
      { id: "contacto-ck", label: t("pages.cookies.contactTitle") },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i18n.language]
  );

  return (
    <LegalPageLayout title={t("pages.cookies.title")} tocItems={tocItems}>
      <LegalSection id="que-son" title={t("pages.cookies.introTitle")}>
        <LegalBody>{t("pages.cookies.introBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="tipos" title={t("pages.cookies.typesTitle")}>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[24px] tracking-[-0.96px] leading-[32px] max-md:text-[20px] max-md:leading-[28px]">
              {t("pages.cookies.technicalTitle")}
            </p>
            <LegalBody>{t("pages.cookies.technicalBody")}</LegalBody>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[24px] tracking-[-0.96px] leading-[32px] max-md:text-[20px] max-md:leading-[28px]">
              {t("pages.cookies.analyticsTitle")}
            </p>
            <LegalBody>{t("pages.cookies.analyticsBody")}</LegalBody>
            <LegalBody>{t("pages.cookies.analyticsBody2")}</LegalBody>
          </div>
        </div>
      </LegalSection>

      <LegalSection id="gestion" title={t("pages.cookies.managementTitle")}>
        <LegalBody>{t("pages.cookies.managementBody")}</LegalBody>
      </LegalSection>

      <LegalSection id="navegador" title={t("pages.cookies.browserTitle")}>
        <LegalBody>{t("pages.cookies.browserBody")}</LegalBody>
      </LegalSection>

      <LegalSection
        id="cambios-ck"
        title={t("pages.cookies.changesTitle")}
      >
        <LegalBody>{t("pages.cookies.changesBody")}</LegalBody>
      </LegalSection>

      <LegalSection
        id="contacto-ck"
        title={t("pages.cookies.contactTitle")}
      >
        <LegalBody>{t("pages.cookies.contactBody")}</LegalBody>
      </LegalSection>
    </LegalPageLayout>
  );
}
