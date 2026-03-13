import svgPaths from "../../imports/svg-5maq4jyelf";
import { useTranslation } from "react-i18next";
import { LangText } from "./LangText";

function SvgBgHeroImg() {
  return (
    <div className="absolute top-0 left-[336px] w-[1064px] h-[362px] max-lg:relative max-lg:left-auto max-lg:h-[260px] max-lg:w-[800px] max-lg:ml-auto max-lg:-mr-[56px] max-md:h-[204px] max-md:w-[600px] max-md:-mr-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1064 362">
        <defs>
          <style>{`@keyframes heroSvgFadeIn{from{opacity:0}to{opacity:1}}.hero-svg-seq{opacity:0;animation:heroSvgFadeIn .5s cubic-bezier(0.25,0.1,0.25,1) forwards}`}</style>
        </defs>
        {/* 1. Circle */}
        <path className="hero-svg-seq" style={{ animationDelay: '0s' }} clipRule="evenodd" d={svgPaths.p1ec04200} fill="#E2DFDA" fillRule="evenodd" />
        {/* 2. First vertical bar */}
        <path className="hero-svg-seq" style={{ animationDelay: '0.15s' }} clipRule="evenodd" d={svgPaths.p9634180} fill="#E2DFDA" fillRule="evenodd" />
        {/* 3. Second vertical bar */}
        <path className="hero-svg-seq" style={{ animationDelay: '0.3s' }} clipRule="evenodd" d={svgPaths.p1bef4e00} fill="#E2DFDA" fillRule="evenodd" />
        {/* 4. Third vertical bar */}
        <path className="hero-svg-seq" style={{ animationDelay: '0.45s' }} clipRule="evenodd" d={svgPaths.p1a21aa00} fill="#E2DFDA" fillRule="evenodd" />
        {/* 5. Fourth vertical bar */}
        <path className="hero-svg-seq" style={{ animationDelay: '0.6s' }} clipRule="evenodd" d={svgPaths.p1b396280} fill="#E2DFDA" fillRule="evenodd" />
        {/* 6. Horizontal bar */}
        <path className="hero-svg-seq" style={{ animationDelay: '0.75s' }} clipRule="evenodd" d={svgPaths.p9bd7b00} fill="#E2DFDA" fillRule="evenodd" />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#191e25] w-full relative overflow-hidden">
      <div className="relative flex flex-col justify-end min-h-[744px] max-lg:min-h-0 max-md:min-h-0 pb-[56px] px-[56px] max-md:px-[24px] max-md:pb-[40px]">
        <div className="absolute inset-0 flex justify-center px-[56px] max-md:px-[24px] pointer-events-none max-lg:relative max-lg:inset-auto max-lg:px-0 max-lg:pt-0">
          <div className="relative w-full max-w-[1400px] max-lg:max-w-none">
            <SvgBgHeroImg />
          </div>
        </div>
        <div className="relative z-10 flex items-end justify-between gap-[40px] max-w-[1400px] w-full mx-auto max-lg:flex-col max-lg:items-start max-lg:gap-[24px] max-lg:pt-[40px]">
          <div className="flex flex-col font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[140px] tracking-[-5.6px] leading-[0.9] max-w-[952px] max-lg:text-[80px] max-lg:tracking-[-3px] max-md:text-[48px] max-md:tracking-[-1.92px]">
            <LangText as="p" stagger={0} className="mb-0">{t("hero.line1")}</LangText>
            <LangText as="p" stagger={1}>is our code_</LangText>
          </div>
          <div className="relative flex flex-col items-start gap-[16px]">
            
            <LangText as="p" stagger={2} className="font-['Manrope',sans-serif] font-[600] leading-[1.35] text-[#e2dfda] text-[24px] tracking-[0.48px] max-w-[242px] max-lg:text-[18px] max-md:text-[16px] max-lg:max-w-[400px]">
              {t("hero.subtitle")}
            </LangText>
          </div>
        </div>
      </div>
    </section>
  );
}