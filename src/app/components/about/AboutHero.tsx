import svgPaths from "../../../imports/svg-x3n48l5gru";
import { useTranslation } from "react-i18next";
import { LangText } from "../LangText";

function KeyIllustration() {
  return (
    <div className="w-[497px] h-[457px] relative shrink-0 max-lg:w-[340px] max-lg:h-[312px] max-md:w-full max-md:h-[200px]">
      <div className="absolute inset-[25.6%_3.4%_25.69%_3.22%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464.086 222.613">
          <path clipRule="evenodd" d={svgPaths.p8510e80} fill="#E2DFDA" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p26494200} fill="#E2DFDA" fillRule="evenodd" />
          <path clipRule="evenodd" d="M372 119H176V78H372V119Z" fill="#E2DFDA" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p175c4e00} fill="#E2DFDA" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

export function AboutHero() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#583bff] w-full px-[56px] max-md:px-[24px]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-[48px] py-[120px] max-lg:py-[80px] max-md:py-[48px] max-lg:flex-col max-lg:items-start">
        <div className="flex flex-col gap-[32px] items-start max-w-[478px] max-lg:max-w-full text-[#e2dfda]">
          <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.sobreDigio.hero.heading")}
          </LangText>
          <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] font-[600] text-[16px] leading-[normal] max-md:text-[14px]">
            {t("pages.sobreDigio.hero.body")}
          </LangText>
        </div>
        <KeyIllustration />
      </div>
    </section>
  );
}
