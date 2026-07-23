import svgPaths from "../../imports/svg-5maq4jyelf";
import { useTranslation } from "react-i18next";
import { LangText } from "./LangText";
import { smoothScrollTo } from "./SmoothScrollProvider";

function SvgBgHeroImg() {
  return (
    <div className="absolute top-0 left-[336px] w-[1064px] h-[362px] max-lg:relative max-lg:left-auto max-lg:h-[260px] max-lg:w-[800px] max-lg:ml-auto max-lg:-mr-[56px] max-md:h-auto max-md:aspect-[464/418] max-md:w-[100vw] max-md:left-1/2 max-md:-translate-x-1/2 max-md:mx-0 max-md:mr-0">
      <svg className="absolute block size-full max-md:hidden" fill="none" preserveAspectRatio="none" viewBox="0 0 1064 362">
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
      {/* Mobile version */}
      <svg className="absolute block size-full hidden max-md:block" fill="none" preserveAspectRatio="none" viewBox="0 0 464 418">
        <defs>
          <style>{`@keyframes heroSvgFadeIn{from{opacity:0}to{opacity:1}}.hero-svg-seq-m{opacity:0;animation:heroSvgFadeIn .5s cubic-bezier(0.25,0.1,0.25,1) forwards}`}</style>
        </defs>
        <path className="hero-svg-seq-m" style={{ animationDelay: '0.75s' }} fillRule="evenodd" clipRule="evenodd" d="M-40.0132 360.925L187.315 360.925V418L-40.0132 418L-40.0132 360.925Z" fill="#E2DFDA" />
        <path className="hero-svg-seq-m" style={{ animationDelay: '0.15s' }} fillRule="evenodd" clipRule="evenodd" d="M378.315 360.066L378.315 -47.0955L435.008 -47.0955L435.008 360.066H378.315Z" fill="#E2DFDA" />
        <path className="hero-svg-seq-m" style={{ animationDelay: '0.3s' }} fillRule="evenodd" clipRule="evenodd" d="M282.967 360.066L282.967 -47.0955L339.66 -47.0955L339.66 360.066H282.967Z" fill="#E2DFDA" />
        <path className="hero-svg-seq-m" style={{ animationDelay: '0.45s' }} fillRule="evenodd" clipRule="evenodd" d="M187.619 360.066L187.619 -47.0955L244.313 -47.0955L244.313 360.066H187.619Z" fill="#E2DFDA" />
        <path className="hero-svg-seq-m" style={{ animationDelay: '0s' }} fillRule="evenodd" clipRule="evenodd" d="M79.8684 184.832C79.8684 143.292 46.1937 109.618 4.65396 109.618C-36.8858 109.618 -70.5605 143.292 -70.5605 184.832C-70.5605 226.372 -36.8858 260.047 4.65396 260.047C46.1937 260.047 79.8684 226.372 79.8684 184.832ZM142.952 184.832C142.952 108.452 81.033 46.5345 4.65395 46.5345C-71.7261 46.5345 -133.644 108.452 -133.644 184.832C-133.644 261.212 -71.7261 323.13 4.65396 323.13C81.033 323.13 142.952 261.212 142.952 184.832Z" fill="#E2DFDA" />
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
        <div className="relative z-10 flex items-end justify-between gap-[40px] max-w-[1400px] w-full mx-auto max-[1180px]:flex-col max-[1180px]:items-start max-[1180px]:gap-[24px] max-[1180px]:pt-[40px] max-lg:flex-col max-lg:items-start max-lg:gap-[24px] max-lg:pt-[40px]">
          <h1 className="flex flex-col font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[140px] tracking-[-5.6px] leading-[0.9] max-w-[952px] max-[1180px]:text-[120px] max-[1180px]:tracking-[-4.2px] max-lg:text-[80px] max-lg:tracking-[-3px] max-md:text-[48px] max-md:tracking-[-1.92px] m-0">
            <LangText as="span" stagger={0} className="mb-0 block">{t("hero.line1")}</LangText>
            <LangText as="span" stagger={1} className="block">is our code_</LangText>
          </h1>
          <div className="relative flex flex-col items-start gap-[24px]">
            <LangText as="p" stagger={2} className="font-['Manrope',sans-serif] font-[500] leading-[1.35] text-[#e2dfda] text-[24px] tracking-[0.48px] max-w-[242px] max-[1180px]:max-w-[400px] max-[1180px]:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-lg:max-w-[400px]">
              {t("hero.subtitle")}
            </LangText>
          </div>
        </div>
      </div>
    </section>
  );
}