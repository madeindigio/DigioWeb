import svgPaths from "../../imports/svg-bh13mdqhi0";
import { imgDigioIaGenerativa2025Es11 } from "../../imports/svg-uqyud";
import imgDigioIaGenerativa2025Es12 from "figma:asset/9d0f922d0477228e80fbc7f2e8e4bd47a4e0e7bd.png";
import imgDigioIaGenerativa2025Es13 from "figma:asset/ff915408b604c39a5bc7a9a9f548136e44e25a9a.png";
import imgDigioIaGenerativa2025Es14 from "figma:asset/8ff2390c0e8c205e4dcf0cfa9ce2296e461c781f.png";
import imgRectangle from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";
import { Link } from "react-router";
import { useRef, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════
   1. HERO SECTION
   ═══════════════════════════════════════════════ */
function IAHero() {
  return (
    <section className="bg-[#191e25] w-full relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] pt-[100px] pb-[80px] max-md:pt-[64px] max-md:pb-[48px] relative z-10">
        <h1 className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[100px] leading-[0.9] tracking-[-3px] max-w-[1200px] max-lg:text-[72px] max-md:text-[42px]">
          Agiliza los procesos corporativos con IA
        </h1>
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[40px] leading-[48px] tracking-[-1.6px] max-w-[701px] mt-[32px] max-lg:text-[28px] max-lg:leading-[36px] max-md:text-[22px] max-md:leading-[30px] max-md:max-w-full">
          No son solo chatbots. Es automatización de procesos, gestión documental y validación de datos.
        </p>
      </div>
      {/* Decorative IA SVG */}
      <div className="relative w-full flex justify-center pointer-events-none">
        <div className="max-w-[1400px] w-full px-[56px] max-md:px-[24px] relative">
          <div className="w-[85%] max-w-[1222px] aspect-square max-md:w-full">
            <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1222 1222">
              <path d={svgPaths.p17c51980} fill="#E2DFDA" />
              <path d={svgPaths.p34e37000} fill="#E2DFDA" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   2. INTRO TEXT SECTION (beige)
   ═══════════════════════════════════════════════ */
function IAIntroText() {
  return (
    <section className="bg-[#e2dfda] w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] py-[120px] max-lg:py-[80px] max-md:py-[56px] flex flex-col gap-[40px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] leading-[48px] tracking-[-1.6px] max-lg:text-[28px] max-lg:leading-[36px] max-md:text-[22px] max-md:leading-[30px]">
          Los modelos de IA Generativa y los Grandes Modelos de Lenguaje (LLM) ofrecen un procesamiento de información innovador y nuevas interacciones basadas en lenguaje natural.
        </p>
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] leading-[48px] tracking-[-1.6px] max-lg:text-[28px] max-lg:leading-[36px] max-md:text-[22px] max-md:leading-[30px]">
          En Digio, desarrollamos soluciones que superan el uso de asistentes personales, automatizando procesos mediante la integración de diversas fuentes de información y aplicaciones corporativas.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   3. PLATFORM DIAGRAM SECTION (beige)
   ═══════════════════════════════════════════════ */
function AvatarSvg() {
  return (
    <svg className="w-[92px] h-[116px] max-md:w-[60px] max-md:h-[76px]" fill="none" viewBox="0 0 92.1649 116">
      <path clipRule="evenodd" d={svgPaths.p3fce800} fill="#191E25" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.p1d18af00} fill="#191E25" fillRule="evenodd" />
      <path clipRule="evenodd" d={svgPaths.paf0c800} fill="#191E25" fillRule="evenodd" />
    </svg>
  );
}

function PlatformSection() {
  return (
    <section className="bg-[#e2dfda] w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] py-[120px] max-lg:py-[80px] max-md:py-[56px] flex gap-[48px] max-lg:flex-col">
        {/* Left title */}
        <div className="shrink-0 max-lg:w-full">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] leading-[48px] tracking-[-1.6px] max-w-[244px] max-lg:max-w-full max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
            Una plataforma que se adapta
          </p>
        </div>

        {/* Right diagram */}
        <div className="flex-1 relative">
          {/* Diagram layout */}
          <div className="flex flex-col items-center gap-[24px]">
            {/* Top label */}
            <p className="font-['Inter',sans-serif] text-[#191e25] text-[20px] text-center max-md:text-[16px]">
              Conocimiento corporativo
            </p>

            {/* Cross diagram */}
            <div className="relative w-full max-w-[1099px] aspect-[1099/438]">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#191e25] -translate-x-1/2 max-md:left-[36%]" />
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#191e25] -translate-y-1/2" />
              {/* Avatar at intersection */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:left-[36%]">
                <div className="bg-[#e2dfda] p-[8px]">
                  <AvatarSvg />
                </div>
              </div>
            </div>

            {/* Bottom labels */}
            <div className="flex justify-between w-full max-w-[1099px] max-md:flex-wrap max-md:gap-[16px] max-md:justify-center">
              <p className="font-['Inter',sans-serif] text-[#191e25] text-[36px] text-center max-lg:text-[24px] max-md:text-[18px] max-md:w-[45%]">
                Fuentes de información
              </p>
              <p className="font-['Inter',sans-serif] text-[#191e25] text-[36px] text-center max-lg:text-[24px] max-md:text-[18px] max-md:w-[45%]">
                Herramientas
              </p>
              <p className="font-['Inter',sans-serif] text-[#191e25] text-[36px] text-center max-lg:text-[24px] max-md:text-[18px] max-md:w-[45%]">
                Solución
              </p>
            </div>

            {/* Bottom label */}
            <p className="font-['Inter',sans-serif] text-[#191e25] text-[20px] text-center max-md:text-[16px]">
              Sistemas corporativos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   4. THREE PILLARS SECTION (green)
   ═══════════════════════════════════════════════ */
function PillarCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-[24px] items-center flex-1 min-w-0 max-md:w-full">
      <div className="size-[125px] max-md:size-[80px]">{icon}</div>
      <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] leading-[40px] tracking-[-1.28px] text-center max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px]">
        {title}
      </p>
      <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] leading-[27px] tracking-[-0.8px] text-center max-md:text-[16px] max-md:leading-[22px]">
        {description}
      </p>
    </div>
  );
}

function PillarsSection() {
  return (
    <section className="bg-[#bbffe8] w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] py-[120px] max-lg:py-[80px] max-md:py-[56px] flex flex-col gap-[56px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] text-center max-lg:text-[36px] max-md:text-[28px]">
          Tres pilares clave en nuestra metodología:
        </p>
        <div className="flex gap-[40px] max-md:flex-col max-md:gap-[48px]">
          <PillarCard
            icon={
              <svg className="w-full h-full" fill="none" viewBox="0 0 125 125">
                <path d={svgPaths.p27f9d500} fill="#191E25" />
                <path d={svgPaths.p3af47300} fill="#191E25" />
              </svg>
            }
            title="Agentes"
            description="Reglas para aplicar los LLMs a necesidades específicas"
          />
          <PillarCard
            icon={
              <svg className="w-full h-full" fill="none" viewBox="0 0 125 125">
                <path d={svgPaths.p17904e00} fill="#191E25" />
              </svg>
            }
            title="Memoria"
            description="Sistemas de memoria de agentes"
          />
          <PillarCard
            icon={
              <svg className="w-full h-full" fill="none" viewBox="0 0 125 125">
                <path clipRule="evenodd" d={svgPaths.p2123b00} fill="#191E25" fillRule="evenodd" />
                <path d={svgPaths.pe1c7400} fill="#191E25" />
              </svg>
            }
            title="Privacidad"
            description="El conocimiento reside en la empresa, no en terceros"
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   5. USE CASES SECTION
   ═══════════════════════════════════════════════ */

/* Reusable use case illustration SVG containers */
function UseCaseIllustration({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-[#bbffe8] overflow-hidden relative shrink-0 aspect-square w-[500px] max-lg:w-[360px] max-md:w-full ${className}`}>
      {children}
    </div>
  );
}

function UseCaseBlock({
  tag,
  title,
  description,
  illustration,
  reversed = false,
}: {
  tag: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  reversed?: boolean;
}) {
  return (
    <div className={`flex gap-[28px] items-end max-md:flex-col max-md:items-stretch ${reversed ? "flex-row-reverse" : ""}`}>
      {illustration}
      <div className="flex flex-col justify-between flex-1 min-w-0 self-stretch">
        <div className="backdrop-blur-[5px] bg-[rgba(25,30,37,0.24)] rounded-[300px] inline-flex self-start px-[16px] py-[8px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-white text-[20px] leading-[27px] tracking-[-0.8px] whitespace-nowrap max-md:text-[14px] max-md:leading-[20px]">
            {tag}
          </p>
        </div>
        <div className="flex flex-col gap-[10px] max-md:mt-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[32px] max-md:text-[24px]">
            {title}
          </p>
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] leading-[27px] tracking-[-0.8px] max-w-[500px] max-md:text-[16px] max-md:leading-[22px] max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function InteligenciaColectivaIcon() {
  return (
    <UseCaseIllustration className="-scale-y-100">
      <div className="absolute inset-[13.96%_11.48%_14.02%_11.48%]">
        <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385.185 360.1">
          <path d={svgPaths.p296da4f0} fill="#191E25" />
          <path d={svgPaths.p1a01fe80} fill="#191E25" />
          <path d={svgPaths.p5d35180} fill="#191E25" />
          <path d={svgPaths.p1c0c6400} fill="#191E25" />
          <path d={svgPaths.p1267b400} fill="#191E25" />
          <path d={svgPaths.p2e8539c0} fill="#191E25" />
          <path d={svgPaths.p20c75e80} fill="#191E25" />
          <path d={svgPaths.p14564e00} fill="#191E25" />
          <path d={svgPaths.p2d4e4df0} fill="#191E25" />
          <path d={svgPaths.pcebf700} fill="#191E25" />
          <path d={svgPaths.p3397de00} fill="#191E25" />
          <path d={svgPaths.p3fa4f680} fill="#191E25" />
          <path d={svgPaths.p28336800} fill="#191E25" />
          <path d={svgPaths.pd629cf0} fill="#191E25" />
          <path d={svgPaths.p3b0e0d80} fill="#191E25" />
          <path d={svgPaths.pe343100} fill="#191E25" />
          <path d={svgPaths.p18e029f0} fill="#191E25" />
          <path d={svgPaths.p7ccb400} fill="#191E25" />
          <path d={svgPaths.p2c520a00} fill="#191E25" />
          <path d={svgPaths.p415dd00} fill="#191E25" />
          <path d={svgPaths.p35c3c600} fill="#191E25" />
          <path d={svgPaths.p31228500} fill="#191E25" />
          <path d={svgPaths.p3c240780} fill="#191E25" />
          <path d={svgPaths.p30e1bdf0} fill="#191E25" />
          <path d={svgPaths.p1e34d640} fill="#191E25" />
          <path d={svgPaths.p3a953100} fill="#191E25" />
          <path d={svgPaths.p1af4ad80} fill="#191E25" />
          <path d={svgPaths.p33ce900} fill="#191E25" />
          <path d={svgPaths.p786a500} fill="#191E25" />
          <path d={svgPaths.p13e9100} fill="#191E25" />
          <path d={svgPaths.p1d7def00} fill="#191E25" />
          <path d={svgPaths.p3f37e400} fill="#191E25" />
          <path d={svgPaths.p3225c180} fill="#191E25" />
          <path d={svgPaths.p22a08c00} fill="#191E25" />
          <path d={svgPaths.p25911080} fill="#191E25" />
          <path d={svgPaths.p3a887a00} fill="#191E25" />
          <path d={svgPaths.p26365300} fill="#191E25" />
          <path d={svgPaths.p12acb00} fill="#191E25" />
          <path d={svgPaths.p8eea00} fill="#191E25" />
          <path d={svgPaths.p35902000} fill="#191E25" />
          <path d={svgPaths.p1a4d2a00} fill="#191E25" />
          <path d={svgPaths.p42e3880} fill="#191E25" />
          <path d={svgPaths.p1a40bb00} fill="#191E25" />
          <path d={svgPaths.p2deb6800} fill="#191E25" />
          <path d={svgPaths.p186f7a80} fill="#191E25" />
          <path d={svgPaths.pdb9400} fill="#191E25" />
        </svg>
      </div>
    </UseCaseIllustration>
  );
}

function ConsultoriaIcon() {
  return (
    <UseCaseIllustration>
      <div className="absolute inset-[8.23%_8.32%]">
        <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416.777 417.732">
          <path d={svgPaths.p11f59000} fill="#191E25" />
          <path d={svgPaths.p149e1f00} fill="#191E25" />
          <path d={svgPaths.p399ea280} fill="#191E25" />
          <path d={svgPaths.p1be768f0} fill="#191E25" />
          <path d={svgPaths.p2c003880} fill="#191E25" />
          <path d={svgPaths.p281af80} fill="#191E25" />
          <path d={svgPaths.p239a0800} fill="#191E25" />
          <path d={svgPaths.p2cdb1200} fill="#191E25" />
          <path d={svgPaths.p1d93ca00} fill="#191E25" />
          <path d={svgPaths.p1fb69700} fill="#191E25" />
          <path d={svgPaths.p33e3a180} fill="#191E25" />
          <path d={svgPaths.p110a2880} fill="#191E25" />
          <path d={svgPaths.p319bac00} fill="#191E25" />
          <path d={svgPaths.p322e4800} fill="#191E25" />
          <path d={svgPaths.p6ad8300} fill="#191E25" />
          <path d={svgPaths.p2875ed80} fill="#191E25" />
          <path d={svgPaths.p38f95100} fill="#191E25" />
          <path d={svgPaths.p7453800} fill="#191E25" />
          <path d={svgPaths.p3f3b3600} fill="#191E25" />
          <path d={svgPaths.pedfeb00} fill="#191E25" />
          <path d={svgPaths.p2b4c1000} fill="#191E25" />
          <path d={svgPaths.p3e21b000} fill="#191E25" />
          <path d={svgPaths.p3aa86d00} fill="#191E25" />
          <path d={svgPaths.p420efe0} fill="#191E25" />
          <path d={svgPaths.p3d495600} fill="#191E25" />
          <path d={svgPaths.p25318580} fill="#191E25" />
          <path d={svgPaths.p520ae80} fill="#191E25" />
          <path d={svgPaths.p31b95400} fill="#191E25" />
          <path d={svgPaths.p4b17200} fill="#191E25" />
          <path d={svgPaths.p2dfe7980} fill="#191E25" />
          <path d={svgPaths.pb4596f0} fill="#191E25" />
          <path d={svgPaths.p3d95f380} fill="#191E25" />
          <path d={svgPaths.p22249000} fill="#191E25" />
          <path d={svgPaths.p2f50b480} fill="#191E25" />
          <path d={svgPaths.p1f88bf70} fill="#191E25" />
          <path d={svgPaths.p2e56e080} fill="#191E25" />
          <path d={svgPaths.p2a90c800} fill="#191E25" />
          <path d={svgPaths.p3b34f600} fill="#191E25" />
          <path d={svgPaths.p35d2e00} fill="#191E25" />
          <path d={svgPaths.p3749e500} fill="#191E25" />
          <path d={svgPaths.p267a8580} fill="#191E25" />
          <path d={svgPaths.p17a2de00} fill="#191E25" />
          <path d={svgPaths.p2301400} fill="#191E25" />
          <path d={svgPaths.pc1e5780} fill="#191E25" />
          <path d={svgPaths.p1b8f1c00} fill="#191E25" />
          <path d={svgPaths.p30bb540} fill="#191E25" />
          <path d={svgPaths.pfc55e00} fill="#191E25" />
          <path d={svgPaths.p2e383f00} fill="#191E25" />
          <path d={svgPaths.p1cabf380} fill="#191E25" />
          <path d={svgPaths.p3c93de00} fill="#191E25" />
          <path d={svgPaths.p2c1f3400} fill="#191E25" />
          <path d={svgPaths.p310c7e00} fill="#191E25" />
          <path d={svgPaths.p39d70800} fill="#191E25" />
          <path d={svgPaths.p23f2e600} fill="#191E25" />
          <path d={svgPaths.p8ce5e00} fill="#191E25" />
          <path d={svgPaths.p1f570980} fill="#191E25" />
          <path d={svgPaths.p3a035130} fill="#191E25" />
          <path d={svgPaths.p7efa300} fill="#191E25" />
          <path d={svgPaths.pf2b3b00} fill="#191E25" />
          <path d={svgPaths.p1c4e9300} fill="#191E25" />
          <path d={svgPaths.pdd88880} fill="#191E25" />
          <path d={svgPaths.p2ff8a800} fill="#191E25" />
          <path d={svgPaths.p1f4d0900} fill="#191E25" />
          <path d={svgPaths.p325d0c00} fill="#191E25" />
          <path d={svgPaths.p322e7df0} fill="#191E25" />
          <path d={svgPaths.p246ab480} fill="#191E25" />
          <path d={svgPaths.p309ff480} fill="#191E25" />
        </svg>
      </div>
    </UseCaseIllustration>
  );
}

function OutsourcingIcon() {
  return (
    <UseCaseIllustration>
      <div className="absolute inset-[9.6%_11.07%_10.55%_11.17%]">
        <svg className="absolute w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 388.775 399.238">
          <path d={svgPaths.p35808400} fill="#191E25" />
          <path d={svgPaths.p639d500} fill="#191E25" />
          <path d={svgPaths.p8b9bb00} fill="#191E25" />
          <path d={svgPaths.p28b88cf2} fill="#191E25" />
          <path d={svgPaths.p314fb070} fill="#191E25" />
          <path d={svgPaths.p1cf29400} fill="#191E25" />
          <path d={svgPaths.p320f4280} fill="#191E25" />
          <path d={svgPaths.p142fcb00} fill="#191E25" />
          <path d={svgPaths.p168de300} fill="#191E25" />
          <path d={svgPaths.p129b6480} fill="#191E25" />
          <path d={svgPaths.p37ff1780} fill="#191E25" />
          <path d={svgPaths.pa26f00} fill="#191E25" />
          <path d={svgPaths.p1bcd580} fill="#191E25" />
          <path d={svgPaths.p220fbb00} fill="#191E25" />
          <path d={svgPaths.p3ad0df80} fill="#191E25" />
          <path d={svgPaths.p2c611d80} fill="#191E25" />
          <path d={svgPaths.p103b9500} fill="#191E25" />
          <path d={svgPaths.p1e38e100} fill="#191E25" />
          <path d={svgPaths.p9b1e100} fill="#191E25" />
          <path d={svgPaths.p37228180} fill="#191E25" />
          <path d={svgPaths.p30129400} fill="#191E25" />
          <path d={svgPaths.p2326d000} fill="#191E25" />
          <path d={svgPaths.p15d1bf00} fill="#191E25" />
          <path d={svgPaths.p32528330} fill="#191E25" />
          <path d={svgPaths.p189cc980} fill="#191E25" />
          <path d={svgPaths.p37a20d80} fill="#191E25" />
          <path d={svgPaths.p394b6d00} fill="#191E25" />
          <path d={svgPaths.p229ab400} fill="#191E25" />
          <path d={svgPaths.p4b60100} fill="#191E25" />
          <path d={svgPaths.p6be8a00} fill="#191E25" />
          <path d={svgPaths.p2f49c580} fill="#191E25" />
          <path d={svgPaths.p64bca00} fill="#191E25" />
          <path d={svgPaths.pfbc7a80} fill="#191E25" />
          <path d={svgPaths.p26c64100} fill="#191E25" />
          <path d={svgPaths.pdefe200} fill="#191E25" />
          <path d={svgPaths.p7555540} fill="#191E25" />
          <path d={svgPaths.p8b64000} fill="#191E25" />
          <path d={svgPaths.p1ac21b00} fill="#191E25" />
          <path d={svgPaths.p372b9e80} fill="#191E25" />
          <path d={svgPaths.p3d0e6900} fill="#191E25" />
          <path d={svgPaths.p38dc1b70} fill="#191E25" />
          <path d={svgPaths.p29dc6480} fill="#191E25" />
          <path d={svgPaths.p248eeb00} fill="#191E25" />
          <path d={svgPaths.p906a180} fill="#191E25" />
        </svg>
      </div>
    </UseCaseIllustration>
  );
}

function ColaboracionIcon() {
  return (
    <UseCaseIllustration className="flex items-center justify-center p-[32px]">
      <svg className="w-full h-auto" fill="none" viewBox="0 0 436 415.013">
        <path d={svgPaths.p79d7980} fill="#191E25" />
        <path d={svgPaths.p3a551100} fill="#191E25" />
        <path d={svgPaths.p27b39a80} fill="#191E25" />
        <path d={svgPaths.peffbf00} fill="#191E25" />
        <path d={svgPaths.pfe86f80} fill="#191E25" />
        <path d={svgPaths.p3a00ab80} fill="#191E25" />
        <path d={svgPaths.pe4e2c00} fill="#191E25" />
        <path d={svgPaths.p362cd80} fill="#191E25" />
        <path d={svgPaths.p3702c180} fill="#191E25" />
        <path d={svgPaths.p20cb5e00} fill="#191E25" />
        <path d={svgPaths.p7bd1680} fill="#191E25" />
        <path d={svgPaths.p4d26080} fill="#191E25" />
        <path d={svgPaths.p1b1a69c0} fill="#191E25" />
        <path d={svgPaths.p1dab7b00} fill="#191E25" />
        <path d={svgPaths.p2473ba80} fill="#191E25" />
        <path d={svgPaths.p33587180} fill="#191E25" />
        <path d={svgPaths.p2d0ede00} fill="#191E25" />
        <path d={svgPaths.p3b656f00} fill="#191E25" />
        <path d={svgPaths.p3c8cc600} fill="#191E25" />
        <path d={svgPaths.p23cbc1f0} fill="#191E25" />
        <path d={svgPaths.p369bce00} fill="#191E25" />
        <path d={svgPaths.p304e1580} fill="#191E25" />
      </svg>
    </UseCaseIllustration>
  );
}

function TeamBuildingIcon() {
  return (
    <UseCaseIllustration className="flex items-center justify-center p-[32px]">
      <svg className="w-full h-auto" fill="none" viewBox="0 0 436 436.073">
        <path d={svgPaths.p34880380} fill="#191E25" />
        <path d={svgPaths.p31d69180} fill="#191E25" />
        <path d={svgPaths.p2b501e80} fill="#191E25" />
        <path d={svgPaths.p7994700} fill="#191E25" />
        <path d={svgPaths.p330922f0} fill="#191E25" />
        <path d={svgPaths.p7ed2ef2} fill="#191E25" />
        <path d={svgPaths.p2d2e1600} fill="#191E25" />
        <path d={svgPaths.p47f9280} fill="#191E25" />
        <path d={svgPaths.p3129c700} fill="#191E25" />
        <path d={svgPaths.p31a4ec00} fill="#191E25" />
        <path d={svgPaths.p1d4e9700} fill="#191E25" />
        <path d={svgPaths.p32e21400} fill="#191E25" />
        <path d={svgPaths.p3fc66600} fill="#191E25" />
        <path d={svgPaths.p1cb5ae00} fill="#191E25" />
        <path d={svgPaths.p354b2c00} fill="#191E25" />
        <path d={svgPaths.p36fd45d0} fill="#191E25" />
        <path d={svgPaths.p3f936200} fill="#191E25" />
        <path d={svgPaths.p3b01c500} fill="#191E25" />
        <path d={svgPaths.p11a020d0} fill="#191E25" />
        <path d={svgPaths.p2c444280} fill="#191E25" />
        <path d={svgPaths.p3f994f00} fill="#191E25" />
        <path d={svgPaths.p12b6c400} fill="#191E25" />
        <path d={svgPaths.p2896b580} fill="#191E25" />
        <path d={svgPaths.pde79b00} fill="#191E25" />
        <path d={svgPaths.p3acfde00} fill="#191E25" />
        <path d={svgPaths.p3d9b9800} fill="#191E25" />
        <path d={svgPaths.p97e0240} fill="#191E25" />
        <path d={svgPaths.p6031a00} fill="#191E25" />
        <path d={svgPaths.p30db1d00} fill="#191E25" />
        <path d={svgPaths.p15297880} fill="#191E25" />
        <path d={svgPaths.p6994080} fill="#191E25" />
        <path d={svgPaths.p2d94cf80} fill="#191E25" />
      </svg>
    </UseCaseIllustration>
  );
}

function UseCasesSection() {
  const CARDS = [
    {
      tag: "INTELIGENCIA CORPORATIVA",
      title: "Convierte el ruido de internet en ventaja competitiva.",
      description: "Monitorización 360º, análisis de tendencias y alertas estratégicas sobre tu competencia en tiempo real.",
      illustration: <InteligenciaColectivaIcon />,
    },
    {
      tag: "VALIDACIÓN Y GESTIÓN DOCUMENTAL",
      title: "Tu empresa tiene las respuestas, nosotros te ayudamos a encontrarlas.",
      description: "Centraliza, valida y explora tu base de conocimiento con búsqueda semántica.",
      illustration: <ConsultoriaIcon />,
    },
    {
      tag: "PROCESAMIENTO DE MENSAJES",
      title: "De la bandeja de entrada a tu ERP sin tocar una tecla.",
      description: "Automatizamos la lectura y gestión de emails, pedidos y tickets de soporte.",
      illustration: <OutsourcingIcon />,
    },
    {
      tag: "PROCESAMIENTO DE MENSAJES",
      title: "Convierte emisiones de audio y vídeo en datos estructurados al instante.",
      description: "Detectamos menciones críticas en directo para que reacciones antes que nadie.",
      illustration: <ColaboracionIcon />,
    },
    {
      tag: "PROCESAMIENTO DE MENSAJES",
      title: "Tu software ya no es una isla.",
      description: "Unificamos tus herramientas creando puentes inteligentes entre tu IA, tus APIs y tus sistemas de gestión.",
      illustration: <TeamBuildingIcon />,
    },
  ];

  const COUNT = CARDS.length;
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setCardRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      cardRefs.current[i] = el;
    },
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let rafId = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollableDistance = section.offsetHeight - vh;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      cardRefs.current.forEach((el, i) => {
        if (!el) return;

        /* First card is always visible — no animation */
        if (i === 0) {
          el.style.transform = "translateY(0)";
          el.style.opacity = "1";
          return;
        }

        /* Remaining cards share the scroll distance evenly */
        const steps = COUNT - 1;
        const cardStart = (i - 1) / steps;
        const cardEnd = i / steps;
        const cardProgress = Math.max(
          0,
          Math.min(1, (progress - cardStart) / (cardEnd - cardStart))
        );

        /* translateY: 110% → 0 (slides up from below viewport) */
        const ty = (1 - cardProgress) * 110;
        el.style.transform = `translateY(${ty}%)`;
        el.style.opacity = cardProgress > 0.02 ? "1" : "0";
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [COUNT]);

  return (
    <section
      ref={sectionRef}
      className="bg-white w-full relative"
      style={{ height: `${COUNT * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Title — stays fixed */}
        <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] pt-[100px] max-lg:pt-[80px] max-md:pt-[56px] pb-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] max-lg:text-[36px] max-md:text-[28px]">
            Casos de uso
          </p>
        </div>

        {/* Card stack area */}
        <div className="relative flex-1 w-full" style={{ height: "calc(100vh - 200px)" }}>
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={setCardRef(i)}
              className="absolute inset-0 will-change-transform"
              style={{
                zIndex: i + 1,
                opacity: 0,
                transform: "translateY(110%)",
              }}
            >
              <div
                className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] h-full flex items-start"
                style={{
                  paddingTop: `${i * 10}px`,
                }}
              >
                <div className="bg-white rounded-[24px] max-md:rounded-[16px] w-full" style={{ boxShadow: "0 -4px 60px rgba(0,0,0,0.08)" }}>
                  <div className="py-[28px] max-md:py-[20px]">
                    <UseCaseBlock
                      tag={card.tag}
                      title={card.title}
                      description={card.description}
                      illustration={card.illustration}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   6. REMEMBRANCES AI SECTION (dark)
   ═══════════════════════════════════════════════ */
function RembrancesSection() {
  return (
    <section className="bg-[#191e25] w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] py-[120px] max-lg:py-[80px] max-md:py-[56px] flex flex-col gap-[56px] items-center">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[100px] leading-[0.9] tracking-[-3px] text-center max-lg:text-[72px] max-md:text-[42px]">
          Remembrances AI
        </p>

        <div className="flex flex-col gap-[10px] items-center text-center">
          <div className="py-[2px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[48px] tracking-[-1.92px] max-lg:text-[36px] max-md:text-[24px]">
              Más que un asistente:<br />Tu Desarrollador Autónomo
            </p>
          </div>
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[20px] leading-[27px] tracking-[-0.8px] max-w-[703px] max-md:text-[16px] max-md:leading-[22px]">
            Orquestación inteligente y memoria contextual profunda para comprender, planificar y ejecutar soluciones de código con criterio de experto senior.
          </p>
        </div>

        <Link
          to="/contacto"
          className="relative px-[48px] py-[16px] bg-[#f6f5f3] border border-[#e2dfda] hover:bg-white transition-colors max-md:px-[32px] max-md:py-[12px]"
        >
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] leading-[27px] tracking-[-0.8px] whitespace-nowrap text-center max-md:text-[16px]">
            SABER MÁS
          </p>
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   7. SUCCESS CASES SECTION
   ═══════════════════════════════════════════════ */
function SuccessCaseCard({
  name,
  description,
  tag,
  image,
  overlayDescription,
  overlayColor,
}: {
  name: string;
  description: string;
  tag: string;
  image: string;
  overlayDescription: string;
  overlayColor?: string;
}) {
  return (
    <div className="flex flex-col items-start w-[576px] max-lg:w-full max-lg:max-w-[576px]">
      {/* Image card */}
      <div className="relative w-full h-[500px] max-lg:h-[400px] max-md:h-[300px] overflow-hidden">
        {/* Masked image */}
        <div
          className="absolute w-full h-[578.688px] max-lg:h-[462px] max-md:h-[346px] left-0 top-0 mask-no-clip mask-no-repeat"
          style={{
            maskImage: `url('${imgDigioIaGenerativa2025Es11}')`,
            maskSize: "100% 100%",
            maskPosition: "0px 0px",
          }}
        >
          {overlayColor ? (
            <div className="absolute inset-0 pointer-events-none">
              <div className={`absolute inset-0`} style={{ backgroundColor: overlayColor }} />
              <div className="absolute inset-0 overflow-hidden">
                <img alt={name} className="absolute inset-0 w-full h-full object-cover" src={image} />
              </div>
            </div>
          ) : (
            <img alt={name} className="absolute inset-0 w-full h-full object-cover" src={image} />
          )}
        </div>

        {/* Tag pill */}
        <div className="absolute left-[24px] top-[24px] backdrop-blur-[5px] bg-[rgba(25,30,37,0.24)] rounded-[300px] px-[16px] py-[8px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-white text-[20px] leading-[27px] tracking-[-0.8px] whitespace-nowrap max-md:text-[14px] max-md:leading-[20px]">
            {tag}
          </p>
        </div>

        {/* Green text overlay */}
        <div className="absolute right-0 top-0 w-[288px] max-md:w-[220px] h-full bg-[#bbffe8] flex items-center justify-end p-[48px] max-md:p-[24px]">
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] max-md:text-[13px]">
            {overlayDescription}
          </p>
        </div>
      </div>

      {/* Card description */}
      <div className="flex gap-[40px] max-md:gap-[20px] items-start py-[32px] max-md:py-[20px] w-full">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] leading-[40px] tracking-[-1.28px] whitespace-nowrap shrink-0 max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px]">
          {name}
        </p>
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] leading-[40px] tracking-[-1.28px] flex-1 min-w-0 max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[16px] max-md:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function SuccessCasesSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] py-[100px] max-lg:py-[80px] max-md:py-[56px] flex flex-col gap-[56px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] max-lg:text-[36px] max-md:text-[28px]">
          Casos de éxito
        </p>

        <div className="flex flex-wrap gap-[48px] max-md:gap-[32px]">
          <SuccessCaseCard
            name="Index"
            description="Gestión documental inteligente que procesa documentos"
            tag="VALIDACIÓN Y GESTIÓN DOCUMENTAL"
            image={imgDigioIaGenerativa2025Es12}
            overlayDescription="Plataforma con IA que permite catalogar, etiquetar y extraer información crucial de documentos relativos a análisis forenses, declaraciones de testigos y otros tipos de información para investigar casos abiertos en los Estados Unidos."
          />
          <SuccessCaseCard
            name="Lluch"
            description="Plataforma IA para la gestión automatizada de peticiones"
            tag="PROCESAMIENTO DE MENSAJES"
            image={imgDigioIaGenerativa2025Es13}
            overlayDescription="Convierte automáticamente correos electrónicos en pedidos estructurados listos para enviar. Un programa que agiliza la operativa comercial, reduce tiempos de gestión manual y garantiza una integración fluida con su flujo de ventas."
            overlayColor="#c8bfe2"
          />
          <SuccessCaseCard
            name="Umu"
            description="Analizar documentación técnica, y generar memorias justificativas completas"
            tag="INTELIGENCIA CORPORATIVA"
            image={imgDigioIaGenerativa2025Es14}
            overlayDescription="Plataforma inteligente para la Universidad de Murcia capaz de leer y analizar documentación técnica, y generar de forma ágil memorias justificativas completas. La solución elabora propuestas y presupuestos ajustados, asegurando el cumplimiento de las bases y requisitos específicos en cada convocatoria."
            overlayColor="#deecef"
          />
          <SuccessCaseCard
            name="Roomonitor"
            description="La última tecnología para alojamientos turísticos"
            tag="MACHINE LEARNING"
            image={imgRectangle}
            overlayDescription="Desarrollo de punto a punto una plataforma IoT, que incluye programación del firmware de los sensores, así como de la plataforma, la infraestructura de más de 15 servicios interconectados y las aplicaciones móviles. Un sistema de control para la confianza del propietario y la comodidad del huésped."
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   8. CONTACT CTA SECTION (purple)
   ═══════════════════════════════════════════════ */
function IAContactSection() {
  return (
    <section className="bg-[#583bff] w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px] py-[120px] max-lg:py-[80px] max-md:py-[56px]">
        <div className="flex items-center justify-between gap-[48px] max-lg:flex-col max-lg:items-start max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[680px] max-lg:text-[36px] max-md:text-[24px]">
            Si quieres agilizar tu proceso de trabajo, nosotros te ayudamos
          </p>
          <Link
            to="/contacto"
            className="relative px-[48px] py-[16px] border border-[#e2dfda] hover:bg-[#e2dfda] transition-colors shrink-0 max-md:px-[32px] max-md:py-[12px] max-md:w-full max-md:text-center group"
          >
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] group-hover:text-[#191e25] text-[20px] leading-[27px] tracking-[-0.8px] whitespace-nowrap max-md:text-[16px] transition-colors">
              CONTACTA CON NOSOTROS
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   PAGE EXPORT
   ═══════════════════════════════════════════════ */
export function IALandingPage() {
  return (
    <>
      <IAHero />
      <IAIntroText />
      <PlatformSection />
      <PillarsSection />
      <UseCasesSection />
      <RembrancesSection />
      <SuccessCasesSection />
      <IAContactSection />
    </>
  );
}