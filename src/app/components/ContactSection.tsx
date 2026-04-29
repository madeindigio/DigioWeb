import { useTranslation } from "react-i18next";
import { LangText } from "./LangText";
import { Link } from "react-router";

export function ContactSection() {
  const { t } = useTranslation();
  return (
    <section id="contacto" className="bg-[#e2dfda] w-full px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-[48px] max-lg:flex-col max-lg:items-start max-lg:gap-[32px]">
        <div className="flex flex-col gap-[32px] max-w-[680px] max-lg:max-w-full font-['GT_Ultra_Median',sans-serif]">
          <LangText as="p" stagger={0} className="text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("contactSection.title")}
          </LangText>
          <LangText as="p" stagger={1} className="text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[576px] max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[18px] max-md:leading-[26px]">
            {t("contactSection.body")}
          </LangText>
        </div>
        <Link to="/contacto" className="relative px-[48px] py-[16px] border border-[#191e25] bg-transparent shrink-0 max-md:px-[24px] max-md:py-[12px] max-md:w-full cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group">
          <LangText as="span" stagger={2} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] whitespace-nowrap group-hover:text-white max-md:text-[16px] max-md:block max-md:w-full max-md:text-center">
            {t("contactSection.cta")}
          </LangText>
        </Link>
      </div>
    </section>
  );
}