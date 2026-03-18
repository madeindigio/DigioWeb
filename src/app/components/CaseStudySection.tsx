import { useTranslation } from "react-i18next";
import { LangText } from "./LangText";
import { Link } from "react-router";

export function CaseStudySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#e2dfda] w-full px-[56px] py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="flex items-center justify-between gap-[48px] max-w-[1400px] mx-auto max-lg:flex-col">
        {/* Image */}
        <div className="w-[620px] h-[400px] shrink-0 relative max-lg:w-full max-lg:h-[300px] max-md:h-[240px]">
          <div className="absolute inset-0 bg-[#d8d8d8]" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://digio.es/sites/default/files/2024-05/1.%20LOGOTIPO%20DIGIO.mp4"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col gap-[32px] items-start max-w-[478px] max-lg:max-w-full">
          <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] font-[700] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] max-md:text-[16px]">
            {t("caseStudy.label")}
          </LangText>
          <LangText as="p" stagger={1} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("caseStudy.title")}
          </LangText>
          <LangText as="p" stagger={2} className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[normal] max-md:text-[14px]">
            {t("caseStudy.body")}
          </LangText>
          <Link to="/blog/renovacion-marca-digio" className="relative px-[48px] py-[16px] border border-[#191e25] bg-transparent max-md:px-[32px] max-md:py-[12px] cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group">
            <LangText as="span" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] group-hover:text-white max-md:text-[16px]">
              {t("caseStudy.cta")}
            </LangText>
          </Link>
        </div>
      </div>
    </section>
  );
}