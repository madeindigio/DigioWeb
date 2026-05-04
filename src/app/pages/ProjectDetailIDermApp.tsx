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
import imgIdermappHero from "/images/projects/idermapp/iDermApp hero section IMG.jpg";
import imgIdermBg from "/images/projects/idermapp/iDerm Section small mobile.jpg";
import imgIdermCreme from "/images/projects/idermapp/iDerm Section creme.jpeg";
import imgDermAppScreens from "/images/projects/idermapp/iDermApp Screens.jpg";
import imgBgSpecialists from "/images/projects/idermapp/bg specialists.jpg";
import imgCardCentered from "/images/projects/idermapp/Card centered.svg";
import imgIdermMobileSection from "/images/projects/idermapp/iDerm APP mobile section.jpg";
import imgIdermResume from "/images/projects/idermapp/iDermApp Resume IMG.jpg";
import imgIdermUser from "/images/projects/idermapp/iDermApp User IMG.jpg";
import imgAvatarPatient from "/images/projects/idermapp/usuario-idermapp.jpg";
// Image placeholders - replace with actual assets in /public/images/
const imgChangeThis1 = "/images/placeholder-gray.svg";
const imgShadow = "/images/placeholder-gray.svg";
const imgReflection = "/images/placeholder-gray.svg";
const imgShadow1 = "/images/placeholder-gray.svg";
const imgChangeThis3 = "/images/placeholder-gray.svg";
const imgShadow2 = "/images/placeholder-gray.svg";
const imgReflection1 = "/images/placeholder-gray.svg";
const imgRelatedRoomonitor = "/images/projects/roomonitor/Roomheadersection.jpg";
const imgRelatedNavilens = "/images/placeholder-gray.svg";
import { imgChangeThis, imgChangeThis2 } from "../../imports/svg-f2917";
import svgPaths from "../../imports/svg-aeu4f9zq8x";

const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   1. HERO — Clean full-width image
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <img
        alt="iDermApp"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgIdermappHero}
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
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
            iDermApp
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.idermapp.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.idermapp.introBody")}
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.idermapp.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue1")}</p>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue2")}</p>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue3")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.idermapp.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.idermapp.platformValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. iD LOGO — Centered logo on bg with decorative lines
   ============================================================ */
function LogoSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div 
            className="w-full h-[600px] max-lg:h-[420px] max-md:h-[300px] relative overflow-hidden"
            style={{
              backgroundImage: 'url("/images/projects/idermapp/iDLogo.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. VISION — Big statement
   ============================================================ */
function VisionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          <div className="max-w-[1200px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.idermapp.visionText")}
            </p>
          </div>
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.idermapp.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.idermapp.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.idermapp.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.idermapp.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. TWO PANELS — Phone mockup + Specialist grid
   ============================================================ */
function PhoneSpecialistPanels() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
          {/* Phone mockup with consultation */}
          <motion.div
            className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgIdermBg})`, backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat' }}
            animate={{ backgroundPosition: ["50% 50%", "54% 50%", "50% 50%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Specialist grid */}
          <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgIdermCreme})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. ACCESSIBILITY — Right-aligned text
   ============================================================ */
function AccessibilitySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex justify-end">
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.idermapp.accessibilityTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.idermapp.accessibilityBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. SCREENS SECTION — Full-width gradient with screens
   ============================================================ */
function ScreensSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Gradient screen area */}
          <div className="w-full h-[800px] max-lg:h-[560px] max-md:h-[380px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgDermAppScreens})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          />
          {/* Text: Sistema de valoraciones */}
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.idermapp.valorationsTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.idermapp.valorationsBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. PROFESSIONALS — Specialist photos grid + User/Resume panels
   ============================================================ */
function ProfessionalsSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] max-md:px-[24px] max-md:pt-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div
            className="w-full h-[740px] max-lg:h-[520px] max-md:h-[400px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${imgBgSpecialists})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                alt="Tarjeta central iDermApp"
                className="w-[560px] max-lg:w-[420px] max-md:w-[260px] h-auto drop-shadow-[0_24px_60px_rgba(25,30,37,0.16)]"
                src={imgCardCentered}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. QUALITY — Calidad de Atención
   ============================================================ */
function QualitySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[56px] max-md:px-[24px] max-md:py-[32px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
            {t("pages.idermapp.qualityTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            {t("pages.idermapp.qualityBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. MOBILE APP — Full-width image
   ============================================================ */
function NotificationStackCard() {
  return (
    <motion.div
      className="relative w-full h-full bg-[#f8f9fa] flex items-center justify-center p-[30px] max-lg:p-[24px] max-md:p-[18px]"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="relative w-full max-w-[560px]">
        <div className="absolute inset-x-[18px] top-[18px] h-[158px] max-md:h-[124px] rounded-[20px] bg-[#f5f6f7] shadow-[0px_12px_22px_rgba(17,24,39,0.07)]" />
        <div className="absolute inset-x-[9px] top-[9px] h-[158px] max-md:h-[124px] rounded-[20px] bg-[#f6f7f8] shadow-[0px_8px_16px_rgba(17,24,39,0.06)]" />

        <motion.div
          className="relative z-10 h-[158px] max-md:h-[124px] rounded-[20px] bg-[#f8f9fa] shadow-[0px_12px_28px_rgba(17,24,39,0.10)] px-[20px] max-md:px-[14px] flex items-center gap-[16px] max-md:gap-[10px] transition-transform duration-300"
          whileHover={{ y: -6 }}
        >
          <img alt="Avatar paciente" className="w-[88px] h-[88px] max-md:w-[56px] max-md:h-[56px] rounded-full object-cover shrink-0" src={imgAvatarPatient} />

          <div className="min-w-0 flex-1">
            <p className="text-[#0b0d11] text-[28px] leading-[1.1] max-lg:text-[24px] max-md:text-[18px] font-[700] tracking-[-0.02em] truncate">
              Roberto Jimenez
            </p>
            <p className="text-[#8a9098] text-[20px] max-lg:text-[18px] max-md:text-[14px] mt-[8px] max-md:mt-[4px] font-[400]">
              14/12/1982
            </p>
          </div>

          <motion.span
            className="absolute -top-[16px] -right-[16px] w-[54px] h-[54px] max-md:-top-[10px] max-md:-right-[10px] max-md:w-[34px] max-md:h-[34px] rounded-full bg-[#ff4d57] text-white flex items-center justify-center font-[800] text-[24px] max-md:text-[16px] shadow-[0px_10px_18px_rgba(255,77,87,0.35)]"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            1
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MobileAppSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[24px] max-md:gap-[16px]">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[24px] max-md:gap-[16px]">
            <div className="relative w-full aspect-square overflow-hidden">
              <img alt="iDermApp resume" className="absolute inset-0 w-full h-full object-cover" src={imgIdermResume} />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <NotificationStackCard />
            </div>
          </div>
          <div
            className="w-full h-[670px] max-lg:h-[470px] max-md:h-[320px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${imgIdermMobileSection})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. SKIN CARE — Text section
   ============================================================ */
function SkinCareSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0 whitespace-pre-line">
            {t("pages.idermapp.skinCareTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            {t("pages.idermapp.skinCareBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   12. RELATED PROJECTS
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.idermapp.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="roomonitor"
              image={imgRelatedRoomonitor}
              tag={t("work.projects.roomonitor.tag")}
              name={t("work.projects.roomonitor.name")}
              description={t("work.projects.roomonitor.description")}
            />
            <RelatedProjectCard
              slug="navilens"
              image={imgRelatedNavilens}
              tag={t("work.projects.navilens.tag")}
              name={t("work.projects.navilens.name")}
              description={t("work.projects.navilens.description")}
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
export function ProjectDetailIDermApp() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <LogoSection />
      </RevealAfterTransition>
      <ScrollRevealSection><VisionSection /></ScrollRevealSection>
      <ScrollRevealSection><PhoneSpecialistPanels /></ScrollRevealSection>
      <ScrollRevealSection><AccessibilitySection /></ScrollRevealSection>
      <ScrollRevealSection><ScreensSection /></ScrollRevealSection>
      <ScrollRevealSection><ProfessionalsSection /></ScrollRevealSection>
      <ScrollRevealSection><QualitySection /></ScrollRevealSection>
      <ScrollRevealSection><MobileAppSection /></ScrollRevealSection>
      <ScrollRevealSection><SkinCareSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}