import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";

/* ─── Assets ─── */
const imgHero = "/images/projects/navilens/navilens-hero-section.jpg";
// Image placeholders - replace with actual assets in /public/images/
const imgTagNaqr = "/images/placeholder-gray.svg";
const imgStreet = "/images/placeholder-gray.svg";
const imgQrMarco = "/images/placeholder-gray.svg";
const imgLogotipo = "/images/placeholder-gray.svg";
const imgQrCode = "/images/placeholder-gray.svg";
const imgHand = "/images/placeholder-gray.svg";
const imgQrPreview = "/images/placeholder-gray.svg";
const imgMockup = "/images/placeholder-gray.svg";
const imgPersonScanning = "/images/placeholder-gray.svg";
const imgRelatedIDermApp = "/images/placeholder-gray.svg";
const imgRelatedFinsa = "/images/projects/finsa/finsa-bg-hero.jpg";
import svgPaths from "../../imports/svg-7k2kxsrz4w";

const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   1. HERO — Full-width image
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-[#d8d8d8]" />
      <img
        alt="NaviLens hero"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgHero}
      />
    </section>
  );
}

/* ============================================================
   2. INTRO — 3-column
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-md:text-[28px] max-md:leading-[36px]">
            NaviLens
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.navilens.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.navilens.introBody")}
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.navilens.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.navilens.performanceValue1")}</p>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.navilens.performanceValue2")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.navilens.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.navilens.platformValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. NAVILENS LOGO — Centered SVG logo with gradient
   ============================================================ */
function NaviLensLogoSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[600px] max-lg:h-[420px] max-md:h-[300px] bg-[#f8f9fa] relative overflow-hidden flex items-center justify-center">
            <svg className="w-[320px] h-[344px] max-lg:w-[240px] max-lg:h-[258px] max-md:w-[180px] max-md:h-[194px]" fill="none" viewBox="0 0 320 344.186">
              <path d={svgPaths.p3e7b5c00} stroke="url(#navilens_grad)" strokeMiterlimit="10" strokeWidth="21.891" />
              <path d={svgPaths.p4bfeb80} fill="black" />
              <path d={svgPaths.p2fd83c00} fill="black" />
              <path d={svgPaths.p2bc8e100} fill="white" />
              <path d={svgPaths.p31a3a500} fill="black" />
              <path d={svgPaths.p12de8c00} fill="black" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="navilens_grad" x1="32.9157" x2="280.489" y1="175.111" y2="175.111">
                  <stop offset="0" stopColor="#49A9F8" />
                  <stop offset="0.1613" stopColor="#77B8AC" />
                  <stop offset="0.4106" stopColor="#CBD31C" />
                  <stop offset="0.7281" stopColor="#DE833C" />
                  <stop offset="1" stopColor="#F7067E" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. VISION — Big statement + Challenge/Work
   ============================================================ */
function VisionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          <div className="max-w-[1200px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.navilens.visionText")}
            </p>
          </div>
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.navilens.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.navilens.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.navilens.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.navilens.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. TWO PANELS — QR Code + Street view
   ============================================================ */
function QrStreetPanels() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            {/* QR Code tag */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f8f9fa] relative overflow-hidden flex items-center justify-center">
              <div className="w-[377px] h-[377px] max-lg:w-[280px] max-lg:h-[280px] max-md:w-[220px] max-md:h-[220px] relative rounded-[24px] max-lg:rounded-[18px]">
                <img alt="NaviLens QR tag" className="absolute inset-0 w-full h-full object-cover rounded-[24px] max-lg:rounded-[18px]" src={imgTagNaqr} />
                <div className="absolute inset-0 rounded-[24px] max-lg:rounded-[18px] border border-[#e8e8e8]" />
              </div>
            </div>
            {/* Street view */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] relative overflow-hidden">
              <img alt="NaviLens street" className="absolute inset-0 w-full h-full object-cover" src={imgStreet} />
            </div>
          </div>
          {/* Interacción inclusiva */}
          <div className="flex justify-end">
            <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.navilens.inclusiveTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.navilens.inclusiveBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. QR PLATFORM — "Crear Código QR" UI mockup
   ============================================================ */
function QrPlatformSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Platform UI mockup */}
          <div className="w-full h-[800px] max-lg:h-[560px] max-md:h-[380px] relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-[#f5f5f7] flex items-center justify-center">
            {/* Platform panel — proportional scaling via transform */}
            <div className="relative w-[821px] h-[540px] max-lg:scale-[0.73] max-md:scale-[0.42] origin-center">
              <div className="absolute inset-0 bg-white rounded-[11.4px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Vertical divider */}
                <div className="absolute left-[503px] top-0 w-px h-full bg-[#dee2e6]" />
                {/* Left side — Form */}
                <div className="absolute left-[92px] top-[51px] w-[320px]">
                  <p className="font-['Poppins',sans-serif] text-black text-[25.6px] font-[600] leading-[normal] w-[300px] mb-[44px]">
                    Crear Código QR Accessible NaviLens
                  </p>
                  <div className="flex flex-col gap-[17px]">
                    {/* Descripción del código */}
                    <div className="flex flex-col gap-[5.7px]">
                      <div className="flex items-center gap-[5.7px]">
                        <p className="font-['Poppins',sans-serif] text-black text-[11.4px] font-[600]">Descripción del código</p>
                        <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 17 17" fill="none">
                          <circle cx="8.5" cy="8.5" r="7" stroke="#868E96" strokeWidth="1" />
                          <text x="8.5" y="12" textAnchor="middle" fill="#868E96" fontSize="10" fontFamily="Poppins">i</text>
                        </svg>
                      </div>
                      <div className="border border-[#868e96] rounded-[4px] px-[7.1px] py-[7.1px] w-[318px]">
                        <p className="font-['Poppins',sans-serif] text-black text-[11.4px]">Carta de vinos restaurante Magoga</p>
                      </div>
                    </div>
                    {/* URL Destino */}
                    <div className="flex flex-col gap-[5.7px]">
                      <p className="font-['Poppins',sans-serif] text-black text-[11.4px] font-[600]">URL Destino</p>
                      <div className="border border-[#868e96] rounded-[4px] px-[7.1px] py-[7.1px] w-[318px] flex items-center gap-[7.1px]">
                        <p className="font-['Poppins',sans-serif] text-black text-[11.4px]">https://restaurantemagoga.com/carta-menu/</p>
                      </div>
                    </div>
                    {/* Categoría */}
                    <div className="flex flex-col gap-[5.7px]">
                      <p className="font-['Poppins',sans-serif] text-black text-[11.4px] font-[600]">Categoría</p>
                      <div className="border border-[#868e96] rounded-[4px] px-[7.8px] py-[7.8px] w-[318px] flex items-center justify-between">
                        <p className="font-['Poppins',sans-serif] text-black text-[11.4px]">Carta de vinos</p>
                        <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 17 17" fill="none">
                          <path d="M5 7L8.5 10.5L12 7" stroke="#CED4DA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    {/* Acortador de enlace */}
                    <div className="flex flex-col gap-[5.7px]">
                      <div className="flex items-center gap-[5.7px]">
                        <p className="font-['Poppins',sans-serif] text-black text-[11.4px] font-[600]">Acortador de enlace</p>
                        <svg className="w-[17px] h-[17px] shrink-0" viewBox="0 0 17 17" fill="none">
                          <circle cx="8.5" cy="8.5" r="7" stroke="#868E96" strokeWidth="1" />
                          <text x="8.5" y="12" textAnchor="middle" fill="#868E96" fontSize="10" fontFamily="Poppins">i</text>
                        </svg>
                      </div>
                      <p className="font-['Poppins',sans-serif] text-black text-[11.4px] leading-[normal]">
                        Puedes crear una URL corta hacia el enlace que llevará{"\n"}al código QR.
                      </p>
                      <div className="flex items-center gap-[11.4px] mt-[2px]">
                        <div className="w-[44px] h-[20px] bg-[#adb5bd] rounded-[28px] relative">
                          <div className="absolute left-[4px] top-1/2 -translate-y-1/2 w-[13px] h-[13px] bg-white rounded-full shadow-sm" />
                        </div>
                        <p className="font-['Poppins',sans-serif] text-[#495057] text-[11.4px]">No acortar</p>
                      </div>
                    </div>
                  </div>
                  {/* Button */}
                  <div className="flex justify-end mt-[17px]">
                    <div className="bg-[#0b7285] rounded-[40px] px-[22.7px] py-[5.7px]">
                      <p className="font-['Poppins',sans-serif] text-white text-[11.4px]">Crear código</p>
                    </div>
                  </div>
                </div>
                {/* Right side — Preview */}
                <div className="absolute left-[503px] top-0 right-0 bottom-0 bg-[#f6f6f6] flex flex-col items-center justify-center gap-[16px]">
                  <p className="font-['Poppins',sans-serif] text-black text-[17px] font-[600] text-center">Previsualización</p>
                  <div className="w-[177px] h-[177px] relative rounded-[10px]">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover rounded-[10px]" src={imgTagNaqr} />
                    <div className="absolute inset-0 rounded-[10px] border-[1.25px] border-[#e8e8e8]" />
                  </div>
                  {/* Size selector */}
                  <div className="flex items-center gap-[6px] mt-[8px]">
                    <p className="font-['Poppins',sans-serif] text-[#495057] text-[9.5px] font-[600]">Tamaño QR</p>
                    <div className="flex items-center gap-[2.8px]">
                      <div className="border border-[#dee2e6] rounded-[4px] px-[7.8px] py-[4px] bg-white flex items-center gap-[16px]">
                        <p className="font-['Poppins',sans-serif] text-black text-[11.4px]">10</p>
                        <svg className="w-[14px] h-[14px]" viewBox="0 0 17 17" fill="none">
                          <path d="M5 7L8.5 10.5L12 7" stroke="#CED4DA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="border border-[#dee2e6] rounded-[4px] px-[7.8px] py-[4px] bg-white flex items-center gap-[16px]">
                        <p className="font-['Poppins',sans-serif] text-black text-[11.4px]">cm</p>
                        <svg className="w-[14px] h-[14px]" viewBox="0 0 17 17" fill="none">
                          <path d="M5 7L8.5 10.5L12 7" stroke="#CED4DA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Funcionamiento text */}
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.navilens.functionTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.navilens.functionBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. QR MARCO + LISTADO — Two panels
   ============================================================ */
function QrPanelsSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            {/* QR Marco */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden flex items-center justify-center">
              <div className="w-[422px] h-[422px] max-lg:w-[300px] max-lg:h-[300px] max-md:w-[220px] max-md:h-[220px]">
                <img alt="NaviLens QR frame" className="w-full h-full object-cover" src={imgQrMarco} />
              </div>
            </div>
            {/* QR Listado - Platform listing screen */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden flex items-center justify-center">
              <div className="bg-white rounded-[8px] shadow-[0px_2px_16px_rgba(0,0,0,0.06)] w-[90%] h-[85%] max-md:w-[92%] max-md:h-[88%] relative overflow-hidden">
                {/* Platform header */}
                <div className="h-[60px] max-lg:h-[48px] max-md:h-[36px] bg-white border-b border-[#e8e8e8] flex items-center px-[24px] max-md:px-[12px]">
                  <div className="w-[72px] h-[27px] max-lg:w-[54px] max-lg:h-[20px] max-md:w-[40px] max-md:h-[15px] relative overflow-hidden">
                    <img alt="" className="absolute w-[144%] h-[260%] left-[-22%] top-[-76%] object-cover" src={imgLogotipo} />
                  </div>
                </div>
                {/* Content area - QR list */}
                <div className="p-[24px] max-lg:p-[16px] max-md:p-[10px] flex flex-col gap-[16px] max-md:gap-[8px]">
                  <p className="font-['Poppins',sans-serif] text-black text-[16px] max-lg:text-[12px] max-md:text-[9px] font-[600]">Mis Códigos QR</p>
                  {/* QR items list */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-[12px] max-md:gap-[6px] p-[12px] max-md:p-[6px] border border-[#f1f3f5] rounded-[8px]">
                      <div className="w-[40px] h-[40px] max-lg:w-[30px] max-lg:h-[30px] max-md:w-[20px] max-md:h-[20px] rounded-[4px] overflow-hidden shrink-0">
                        <img alt="" className="w-full h-full object-cover" src={imgTagNaqr} />
                      </div>
                      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                        <div className="h-[10px] max-md:h-[6px] bg-[#e9ecef] rounded-[2px] w-[60%]" />
                        <div className="h-[8px] max-md:h-[5px] bg-[#f1f3f5] rounded-[2px] w-[40%]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. HAND + PHONE — Hand holding phone scanning QR
   ============================================================ */
function HandAppSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] max-md:px-[24px] max-md:pt-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px]">
          {/* Hand + phone panel */}
          <div className="w-full h-[740px] max-lg:h-[520px] max-md:h-[400px] bg-[#f5f5f7] relative overflow-hidden">
            {/* QR preview (blurred, top) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[40px] max-lg:top-[20px] max-md:top-[10px] w-[280px] h-[280px] max-lg:w-[200px] max-lg:h-[200px] max-md:w-[140px] max-md:h-[140px] blur-[7px] rounded-[10px] overflow-hidden border border-[#e8e8e8] z-10">
              <img alt="" className="w-full h-full object-cover" src={imgQrPreview} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[151px] h-[151px] max-lg:w-[108px] max-lg:h-[108px] max-md:w-[75px] max-md:h-[75px] bg-[rgba(255,255,255,0.2)] overflow-hidden">
                <img alt="" className="w-full h-full object-cover" src={imgQrCode} />
              </div>
            </div>
            {/* Phone with mockup (rotated 90deg) */}
            <div className="absolute right-[15%] top-[10%] max-lg:right-[5%] max-md:right-[2%] w-[306px] h-[625px] max-lg:w-[220px] max-lg:h-[450px] max-md:w-[160px] max-md:h-[327px] z-20">
              <img alt="NaviLens app mockup" className="w-full h-full object-contain" src={imgMockup} />
            </div>
            {/* Hand image */}
            <div className="absolute left-1/2 -translate-x-[60%] bottom-0 max-lg:-translate-x-[55%] w-[597px] h-[822px] max-lg:w-[430px] max-lg:h-[592px] max-md:w-[320px] max-md:h-[440px]">
              <img alt="" className="w-full h-full object-contain object-bottom" src={imgHand} />
            </div>
          </div>
          {/* La importancia de la accesibilidad */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
              {t("pages.navilens.accessibilityTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.navilens.accessibilityBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. PERSON SCANNING — Full-width image + text
   ============================================================ */
function PersonScanningSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Full-width image */}
          <div className="w-full h-[670px] max-lg:h-[470px] max-md:h-[320px] relative overflow-hidden">
            <img
              alt="Person scanning NaviLens code"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgPersonScanning}
            />
          </div>
          {/* Accesibilidad e innovación */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
              {t("pages.navilens.innovationTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.navilens.innovationBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. RELATED PROJECTS
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.navilens.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="idermapp"
              image={imgRelatedIDermApp}
              tag={t("work.projects.idermapp.tag")}
              name={t("work.projects.idermapp.name")}
              description={t("work.projects.idermapp.description")}
            />
            <RelatedProjectCard
              slug="finsa"
              image={imgRelatedFinsa}
              tag={t("work.projects.finsa.tag")}
              name={t("work.projects.finsa.name")}
              description={t("work.projects.finsa.description")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function ProjectDetailNavilens() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <NaviLensLogoSection />
      </RevealAfterTransition>
      <ScrollRevealSection><VisionSection /></ScrollRevealSection>
      <ScrollRevealSection><QrStreetPanels /></ScrollRevealSection>
      <ScrollRevealSection><QrPlatformSection /></ScrollRevealSection>
      <ScrollRevealSection><QrPanelsSection /></ScrollRevealSection>
      <ScrollRevealSection><HandAppSection /></ScrollRevealSection>
      <ScrollRevealSection><PersonScanningSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}