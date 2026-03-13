import { useTranslation } from "react-i18next";
import { LangText } from "../LangText";

export function TrabajoHero() {
  const { t } = useTranslation();

  return (
    <section className="bg-white/[0.16] w-full shadow-[0px_1px_0px_0px_#e2dfda]">
      <div className="w-full px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-end justify-between gap-[40px] max-lg:flex-col max-lg:items-start max-lg:gap-[32px]">
          {/* Title */}
          <div className="flex flex-col justify-center font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[100px] tracking-[-3px] leading-[0.9] max-w-[952px] max-lg:text-[72px] max-md:text-[48px] max-md:tracking-[-1.92px]">
            <LangText as="p" stagger={0} className="mb-0">
              {t("pages.trabajo.heroTitle1")}
            </LangText>
            <LangText as="p" stagger={1}>
              {t("pages.trabajo.heroTitle2")}
            </LangText>
          </div>

          {/* Subtitle */}
          <LangText
            as="p"
            stagger={2}
            className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[24px] tracking-[0.48px] leading-[1.35] w-[242px] shrink-0 max-lg:w-full max-lg:max-w-[400px] max-md:text-[18px]"
          >
            {t("pages.trabajo.heroSubtitle")}
          </LangText>
        </div>
      </div>
    </section>
  );
}
