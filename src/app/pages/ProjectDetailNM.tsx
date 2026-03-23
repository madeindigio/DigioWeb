import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";

/* ─── Figma Assets ─── */
const imgHero = "/images/nm.png";
import imgSandCloud from "figma:asset/f0c03a85cd324820d3cc3e3719884aab7af5ed4f.png";
import imgCircle from "figma:asset/7ff00d2cdaef93ff78cfcc746ab3ccb37a05d6d4.png";
import imgBuilding from "figma:asset/293d0c4b8bbe349f3f8df88e02393323d5353ec0.png";
import imgUi2 from "figma:asset/0447f11f4382b5d9a7b2683c0e80efc763a9b569.png";
import imgPhone from "figma:asset/6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";
import imgCardShape from "figma:asset/de6879c4ec534db4c474ce75a886b6f95108f8d8.png";
import imgNeomPc from "figma:asset/8ccbec34c83122e86d2495f3b250770eef6f2414.png";
import imgRelated1 from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelated1b from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelated2 from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";

import Ui from "../../imports/Ui";
import svgPaths from "../../imports/svg-fg6e5xqtw5";

const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   1. HERO
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px]">
      <div className="absolute inset-0 bg-[#d8d8d8]" />
      <img alt="NM" className="absolute inset-0 w-full h-full object-cover" src={imgHero} />
    </section>
  );
}

/* ============================================================
   2. Intro
   ============================================================ */
function IntroSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] shrink-0 w-[160px] max-lg:w-auto">NM</p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              Potencia tu negocio con nuestra solución bancaria integrada y personalizada
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              NM permite agregar una capa bancaria a tu negocio o colectivo. Ofecemos una experiencia de banca digital moderna y sin complicaciones. Accede a tu dinero fácilmente, realiza transferencias rápidas y gestiona tus finanzas desde cualquier lugar.
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">DESEMPEÑO</p>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                <p>Visión</p>
                <p>Diseño UX / UI</p>
                <p>Desarrollo iOS, Android, Backend J2EE (APIs) y QA</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">PLATAFORMAS</p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">Web &amp; aplicaciones iOS &amp; Android</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. Dark UI1
   ============================================================ */
function DarkUiSection() {
  return (
    <section className="bg-[#191e25] w-full overflow-hidden relative py-[100px] max-md:py-[60px] flex items-center justify-center">
      <div className="absolute w-[2050px] h-[1538px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+245px)] pointer-events-none">
        <div className="absolute inset-0 bg-[#111112]" />
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgSandCloud} />
      </div>
      <div className="relative z-10 w-[919px] max-w-[90vw] aspect-[919/593]">
        <Ui />
      </div>
    </section>
  );
}

/* ============================================================
   4. En detalle
   ============================================================ */
function AppIconGrid() {
  return (
    <div className="relative w-[200px] h-[200px] bg-[#161616] rounded-[50px] border-[0.5px] border-dashed border-[#d3d7e0] overflow-hidden shrink-0">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
        <rect x="33.4" y="33.4" width="133.2" height="133.2" rx="72" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" opacity="0.72" />
        <rect x="21" y="21" width="158" height="158" rx="72" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" opacity="0.72" />
        <rect x="8.5" y="8.5" width="183" height="183" rx="72" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" opacity="0.72" />
        <line x1="71" y1="0" x2="71" y2="200" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
        <line x1="129" y1="0" x2="129" y2="200" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
        <line x1="0" y1="71" x2="200" y2="71" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
        <line x1="0" y1="129" x2="200" y2="129" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
        <line x1="0" y1="0" x2="200" y2="200" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
        <line x1="200" y1="0" x2="0" y2="200" stroke="#696B6F" strokeWidth="0.39" strokeDasharray="1.17 1.95" />
      </svg>
      <img alt="" className="absolute inset-[4.29%] w-[91.42%] h-[91.42%]" src={imgCircle} />
      <div className="absolute inset-[16.8%] w-[66.4%] h-[66.4%]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 133.023 133.203" fill="none" preserveAspectRatio="none">
          <path clipRule="evenodd" d={svgPaths.p29c59c00} fill="white" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p1d43d800} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function DetailSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] items-start max-lg:flex-col">
          <div className="flex-1 flex flex-col gap-[24px] min-w-0">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">En detalle</p>
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] max-w-[576px] max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              En la era actual, la banca como servicio se ha convertido en un pilar fundamental para el crecimiento y la innovación
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[368px]">
              NM destaca como una solución integral que te permite agregar una capa bancaria a tu negocio o colectivo, brindándote acceso a una amplia gama de servicios financieros controlados por tu organización.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center self-stretch bg-gradient-to-b from-[#0f0f10] to-[#27282a] min-h-[400px] max-md:min-h-[300px] max-md:w-full">
            <AppIconGrid />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. Building
   ============================================================ */
function BuildingSection() {
  return (
    <section className="w-full px-[56px] max-md:px-[24px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full h-[744px] max-lg:h-[500px] max-md:h-[300px] overflow-hidden">
          <img alt="Building" className="absolute inset-0 w-full h-full object-cover" src={imgBuilding} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. Una respuesta
   ============================================================ */
function ResponseSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[368px] max-lg:w-full max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px] shrink-0">
            Una respuesta con la innovación y la evolución como señas de identidad
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            NM ofrece una banca digital moderna y sencilla, para acceder fácilmente a tu dinero, realizar transferencias rápidas y gestionar tus finanzas desde cualquier lugar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. UI2
   ============================================================ */
function Ui2Section() {
  return (
    <section className="w-full overflow-hidden py-[100px] max-md:py-[60px] flex items-center justify-center" style={{ background: "linear-gradient(90deg, #0f0f10, #0f0f10), linear-gradient(#6140ec, #7a5ef0)" }}>
      <div className="relative w-[939px] max-w-[90vw] aspect-[939/547]">
        <img alt="NM UI 2" className="w-full h-full object-contain" src={imgUi2} />
      </div>
    </section>
  );
}

/* ============================================================
   8. Brand Colors + Cards + Result
   ============================================================ */
function ColorCard({ hex, name, dark = false }: { hex: string; name: string; dark?: boolean }) {
  const tc = dark ? "text-[#f9f9fb]" : "text-black";
  return (
    <div className="flex-1 min-h-0 relative" style={{ backgroundColor: hex }}>
      <p className={`absolute bottom-[47px] left-[8px] right-[8px] font-['Gabarito',sans-serif] text-[20px] leading-[normal] ${tc} max-md:text-[16px]`}>{hex.toUpperCase()}</p>
      <p className={`absolute bottom-[26px] left-[8px] right-[8px] font-['Gabarito',sans-serif] text-[14px] leading-[10px] ${tc} max-md:text-[12px]`}>{name}</p>
    </div>
  );
}

function BrandColorsSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[120px] max-lg:gap-[80px] max-md:gap-[48px]">
          {/* Brand Colors */}
          <div className="flex gap-[40px] items-start max-lg:flex-col max-lg:gap-[32px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] max-w-[576px] max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px]">Brand Colors</p>
              <div className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[368px] flex flex-col gap-[24px]">
                <p>Esta variedad de tonos permite una versatilidad en el diseño y la comunicación visual de Neom, adaptándose a diferentes contextos y audiencias.</p>
                <p>Además, la paleta de colores se podrá adaptar en su totalidad para cualquier caso de uso de tu producto o negocio.</p>
              </div>
            </div>
            <div className="flex-1 self-stretch min-h-[400px] max-md:min-h-[300px] max-md:w-full">
              <div className="flex gap-[16px] h-full w-full">
                <div className="w-[227px] max-lg:w-[160px] max-md:flex-1 h-full relative shrink-0 bg-[#f9f9fb]">
                  <p className="absolute bottom-[47px] left-[8px] right-[8px] font-['Gabarito',sans-serif] text-[20px] leading-[normal] text-black max-md:text-[16px]">#F9F9FB</p>
                  <p className="absolute bottom-[26px] left-[8px] right-[8px] font-['Gabarito',sans-serif] text-[14px] leading-[10px] text-black max-md:text-[12px]">White</p>
                </div>
                <div className="flex-1 flex flex-col gap-[16px] h-full">
                  <ColorCard hex="#232323" name="Raisin Black" dark />
                  <ColorCard hex="#ced4da" name="Ocean Deep" />
                  <ColorCard hex="#6140ec" name="Main color (Royal Blue)" dark />
                </div>
              </div>
            </div>
          </div>
          {/* Mobile + Card */}
          <div className="flex gap-[40px] items-start max-md:flex-col max-md:gap-[24px]">
            <div className="flex-1 h-[545px] max-lg:h-[450px] max-md:h-[400px] max-md:w-full bg-[#f9f9fb] relative overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[356px] h-[702px] max-lg:w-[280px] max-lg:h-[553px] max-md:w-[240px] max-md:h-[474px]">
                <img alt="iPhone" className="w-full h-full object-contain" src={imgPhone} />
              </div>
            </div>
            <div className="flex-1 h-[545px] max-lg:h-[450px] max-md:h-[400px] max-md:w-full bg-[#f9f9fb] relative overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[352px] h-[400px] max-lg:w-[280px] max-lg:h-[320px]">
                <img alt="NM Card" className="w-full h-full object-contain" src={imgCardShape} />
              </div>
            </div>
          </div>
          {/* El resultado */}
          <div className="flex flex-col gap-[40px] items-center max-md:gap-[24px]">
            <div className="flex items-start justify-between gap-[40px] w-full max-lg:flex-col max-lg:gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[368px] max-lg:w-full max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px] shrink-0">El resultado de nuestro trabajo</p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
                Neom, una plataforma personalizable diseñada con una promesa clara: simplificar la gestión financiera, ya sea a nivel personal o empresarial. Desde la transferencia de fondos con un solo toque hasta la gestión segura de activos y la recepción eficiente de pagos.
              </p>
            </div>
            <div className="relative w-full h-[744px] max-lg:h-[500px] max-md:h-[300px]">
              <img alt="NM Desktop" className="w-full h-full object-contain" src={imgNeomPc} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. Related Projects
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <RelatedProjectsSection title={t("pages.nm.relatedTitle", "Proyectos relacionados")}>
      <RelatedProjectCard
        slug="idermapp"
        image={imgRelated1}
        image2={imgRelated1b}
        tag={t("work.projects.idermapp.tag")}
        name={t("work.projects.idermapp.name")}
        description={t("work.projects.idermapp.description")}
      />
      <RelatedProjectCard
        slug="roomonitor"
        image={imgRelated2}
        tag={t("work.projects.roomonitor.tag")}
        name={t("work.projects.roomonitor.name")}
        description={t("work.projects.roomonitor.description")}
      />
    </RelatedProjectsSection>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function ProjectDetailNM() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <DarkUiSection />
      </RevealAfterTransition>
      <ScrollRevealSection><DetailSection /></ScrollRevealSection>
      <ScrollRevealSection><BuildingSection /></ScrollRevealSection>
      <ScrollRevealSection><ResponseSection /></ScrollRevealSection>
      <ScrollRevealSection><Ui2Section /></ScrollRevealSection>
      <ScrollRevealSection><BrandColorsSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}