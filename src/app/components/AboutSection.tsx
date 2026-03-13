import svgPaths from "../../imports/svg-5maq4jyelf";
import { useTranslation } from "react-i18next";
import { LangText } from "./LangText";
import { Link } from "react-router";

export function AboutSection() {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-[#bbffe8] w-full px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="flex items-center justify-between gap-[80px] max-w-[1400px] mx-auto max-lg:flex-col max-lg:gap-[48px]">
        {/* Left Content */}
        <div className="flex flex-col gap-[32px] items-start max-w-[478px] max-lg:max-w-full shrink-0">
          <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] font-[700] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] max-md:text-[16px]">
            {t("about.label")}
          </LangText>
          <LangText as="p" stagger={1} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px] max-md:tracking-[-1px]">
            {t("about.title")}
          </LangText>
          <LangText as="p" stagger={2} className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[normal] max-md:text-[14px]">
            {t("about.body")}
          </LangText>
          <Link to="/sobre-digio" className="relative inline-block px-[48px] py-[16px] border border-[#191e25] bg-transparent max-md:px-[32px] max-md:py-[12px] cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group no-underline">
            <LangText as="span" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] group-hover:text-white max-md:text-[16px]">
              {t("about.cta")}
            </LangText>
          </Link>
        </div>
        {/* Right Illustration */}
        <div className="w-[493px] h-[503px] shrink-0 max-lg:hidden">
          <svg className="block size-full" fill="none" viewBox="0 0 493.492 503.329">
            <path d={svgPaths.p36985600} fill="#191E25" />
          </svg>
        </div>
      </div>
    </section>
  );
}