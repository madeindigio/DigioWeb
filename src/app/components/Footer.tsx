import svgPaths from "../../imports/svg-5maq4jyelf";
import { FooterLogo } from "./Header";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { LangText } from "./LangText";
import imgLogoFderTransparente1 from "figma:asset/e5dabf104c5abe32475f6bcaae852ddc54fc749b.png";
import imgPymeInnovadora from "figma:asset/35f3caeb73f22e49c33064103bb67b4b842b4074.png";
import imgLogoCdti2023SoportesDigitalesNegativo011 from "figma:asset/a45f9c6de6e4af962973880e08cc9f61a4cb7a4b.png";
import imgEsFinanciadoPorLaUnionEuropeaRgbNeg01 from "figma:asset/0b034c1574c942b05d0a38022768fb36d72a69d5.png";
import UeRed from "../../imports/UeRed-106-135";

function XLogo() {
  return (
    <div className="h-[20px] w-[21px] relative shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 21.0836 20.0004">
        <path d={svgPaths.p18f94d90} fill="white" />
        <path d={svgPaths.p28ade000} fill="white" />
        <path d={svgPaths.p29433e80} fill="white" />
      </svg>
    </div>
  );
}

function LinkedInLogo() {
  return (
    <div className="h-[24px] w-[26px] relative shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 26.3543 24">
        <g clipPath="url(#clip_linkedin)">
          <path d={svgPaths.pd588e80} fill="white" />
        </g>
        <defs>
          <clipPath id="clip_linkedin">
            <rect fill="white" height="24" width="26.3543" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InstagramLogo() {
  return (
    <div className="h-[20px] w-[20px] relative shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p31bb0800} fill="white" />
        <path d={svgPaths.p11954200} fill="white" />
      </svg>
    </div>
  );
}

function RedEsLogo() {
  return (
    <div className="h-[28px] w-[84px] relative shrink-0 overflow-clip">
      <div className="absolute inset-[1.92%_0.71%_3.07%_1.02%]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 82.7556 26.6007">
          <path clipRule="evenodd" d={svgPaths.pefbfc80} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p2ea15f00} fill="#CFCFCF" />
        </svg>
      </div>
    </div>
  );
}

function InfoLogo() {
  return (
    <div className="h-[56px] w-[60px] relative shrink-0">
      <svg className="block size-full" fill="none" viewBox="0 0 60.4011 56">
        <path d={svgPaths.pb094500} fill="white" />
        <path d={svgPaths.p2c917580} fill="white" />
        <path d={svgPaths.p35d5af00} fill="white" />
        <path d={svgPaths.p3d247a80} fill="#CFCFCF" />
        <path d={svgPaths.p1178fa00} fill="#CFCFCF" />
        <path d={svgPaths.p29367000} fill="#CFCFCF" />
        <path d={svgPaths.p1e2fe000} fill="#CFCFCF" />
        <path d={svgPaths.p238867c0} fill="#CFCFCF" />
        <path d={svgPaths.p1d806a00} fill="#CFCFCF" />
      </svg>
    </div>
  );
}

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#191e25] w-full px-[56px] py-[56px] max-md:px-[24px] max-md:py-[40px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[48px] max-md:gap-[32px]">
        {/* Top: Logo + Social */}
        <div className="flex items-start justify-between max-md:flex-col max-md:gap-[24px]">
          <FooterLogo />
          <div className="flex gap-[32px] items-end max-md:items-center">
            <a href="https://x.com/digionews" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <XLogo />
            </a>
            <a href="https://www.linkedin.com/company/digio-soluciones-digitales/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <LinkedInLogo />
            </a>
            <a href="https://www.instagram.com/digionews/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <InstagramLogo />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col gap-[16px]">
          <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#e5e1dc] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[22px] max-md:leading-[30px]">
            {t("footer.tagline")}
          </LangText>
          <div className="flex items-start justify-between flex-wrap gap-[16px] max-md:flex-col max-md:gap-[12px]">
            <LangText as="p" stagger={1} className="font-['Satoshi',sans-serif] text-[#e5e1dc] text-[14px] leading-[20px]">
              {t("footer.copyright")}
            </LangText>
            <div className="flex gap-[24px] font-['Satoshi',sans-serif] text-[#bbffe8] text-[16px] tracking-[-0.16px] max-md:flex-col max-md:gap-[8px]">
              <Link to="/privacidad" className="hover:opacity-80 transition-opacity">{t("footer.privacy")}</Link>
              <Link to="/cookies" className="hover:opacity-80 transition-opacity">{t("footer.cookies")}</Link>
              <Link to="/contacto" className="hover:opacity-80 transition-opacity">{t("footer.contact")}</Link>
            </div>
          </div>
        </div>

        {/* Separator + Extra logos */}
        <div className="flex flex-col gap-[48px] max-md:gap-[32px]">
          <div className="w-full h-[1px] bg-[rgba(255,255,255,0.24)]" />
          <div className="flex items-center justify-between flex-wrap gap-[24px] max-md:gap-[16px] max-md:justify-start">
            <div className="h-[48px] shrink-0">
              <UeRed />
            </div>
            <div className="h-[56px] w-[58px] relative shrink-0">
              <img alt="PYME Innovadora" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" src={imgPymeInnovadora} />
            </div>
            <InfoLogo />
            <div className="h-[56px] w-[319px] relative shrink-0 max-md:w-[200px] max-md:h-[35px]">
              <img alt="CDTI" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" src={imgLogoCdti2023SoportesDigitalesNegativo011} />
              <div className="absolute inset-0 bg-white mix-blend-color" />
            </div>
            <div className="h-[56px] w-[214px] relative shrink-0 max-md:w-[140px] max-md:h-[37px]">
              <img alt="EU Funded" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" src={imgEsFinanciadoPorLaUnionEuropeaRgbNeg01} />
              <div className="absolute inset-0 bg-white mix-blend-color" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}