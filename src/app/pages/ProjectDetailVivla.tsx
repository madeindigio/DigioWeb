import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import { useProjectTransition } from "../components/ProjectTransitionContext";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VivlaLocationsGrid } from "../components/VivlaLocationsGrid";
import IDermAppScreens from "../../imports/IDermAppScreens";

/* ─── Related project images (NaviLens + Finsa) ─── */
const imgRelatedNavilens = "/images/placeholder-gray.svg";
const imgRelatedFinsa = "/images/projects/finsa/finsa-bg-hero.jpg";
const imgVivlaHero = "/images/projects/vivla/vivla-hero-section.jpg";
const imgPanelNpsMobile = "/images/projects/vivla/Panel%20NPS%20-%20SM.jpg";

const EASE = [0.22, 1, 0.36, 1];

const IMG_PANEL_1 = "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwbGFwdG9wfGVufDF8fHx8MTc3MzMxMTYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_PANEL_2 = "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2wlMjB0ZXJyYWNlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MzMxMTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_DATA = "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzJTIwZ3JhcGhzJTIwc2NyZWVufGVufDF8fHx8MTc3MzMxMTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HOUSES_1 = "https://images.unsplash.com/photo-1564933170157-3af8ec882299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjby1vd25lcnNoaXAlMjB2YWNhdGlvbiUyMGhvbWUlMjBjb3N0YSUyMGJyYXZhfGVufDF8fHx8MTc3MzMxMTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HOUSES_2 = "https://images.unsplash.com/photo-1550079169-1e23cea6c329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzczMzExNjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_INTERIOR = "https://images.unsplash.com/photo-1648147870253-c45f6f430528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yJTIwZGVzaWduJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzMzMTE2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/* ============================================================
   1. HERO
   ============================================================ */
function HeroSection() {
  const { isTransitioning } = useProjectTransition();
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f9fa]" />
      <motion.img
        alt="VIVLA hero"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgVivlaHero}
        initial={isTransitioning ? { scale: 1.0, y: "0%" } : false}
        animate={{ scale: 1, y: "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      />
    </section>
  );
}

/* ============================================================
   2. INTRO — 3 columns
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-md:text-[28px] max-md:leading-[36px]">
            VIVLA
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.vivla.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.vivla.introBody")}
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.vivla.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.vivla.performanceValue1")}</p>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.vivla.performanceValue2")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.vivla.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.vivla.platformValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. LOGO SECTION — Placeholder panel
   ============================================================ */
function LogoSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[600px] max-lg:h-[420px] max-md:h-[300px] bg-[#f8f9fa] relative overflow-hidden flex items-center justify-center">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[72px] max-lg:text-[56px] max-md:text-[40px] tracking-[-2.88px] leading-[normal] opacity-20">
              VIVLA
            </p>
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
              {t("pages.vivla.visionText")}
            </p>
          </div>
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.vivla.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.vivla.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.vivla.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.vivla.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. TWO PANELS + NPS Text
   ============================================================ */
function NpsPanelsSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f8f7f0] relative overflow-hidden">
              <VivlaLocationsGrid />
            </div>
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f8f7f0] relative overflow-hidden">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[397px] h-[490px] max-lg:w-[320px] max-lg:h-[395px] max-md:w-[260px] max-md:h-[320px]">
                <img alt="VIVLA NPS dashboard mobile" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgPanelNpsMobile} />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.vivla.npsTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.vivla.npsBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. DATA — Full-width panel + text
   ============================================================ */
const DASHBOARD_NATIVE_W = 1200;

function ScaledDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width: w } = entry.contentRect;
      setScale(w / DASHBOARD_NATIVE_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-[#F8F7F0] max-md:flex max-md:items-center max-md:justify-center">
      <div
        className="origin-top-left max-md:origin-center"
        style={{ width: DASHBOARD_NATIVE_W, transform: `scale(${scale})` }}
      >
        <IDermAppScreens />
      </div>
    </div>
  );
}

function DataSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="w-full h-[800px] max-lg:h-[560px] max-md:h-[380px] bg-gradient-to-b from-[#f8f9fa] to-[#f5f5f7] relative overflow-hidden">
            <ScaledDashboard />
          </div>
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.vivla.dataTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.vivla.dataBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. HOUSES — Two panels + medium image + text
   ============================================================ */
function HousesSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Two side-by-side panels */}
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden">
              <ImageWithFallback alt="VIVLA co-ownership" className="absolute inset-0 w-full h-full object-cover" src={IMG_HOUSES_1} />
            </div>
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden">
              <ImageWithFallback alt="VIVLA app" className="absolute inset-0 w-full h-full object-cover" src={IMG_HOUSES_2} />
            </div>
          </div>
          {/* Full-width panel */}
          <div className="w-full h-[740px] max-lg:h-[520px] max-md:h-[400px] bg-[#f5f5f7] relative overflow-hidden">
            <ImageWithFallback alt="VIVLA interior" className="absolute inset-0 w-full h-full object-cover" src={IMG_INTERIOR} />
          </div>
          {/* Text content */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
              {t("pages.vivla.houseTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.vivla.houseBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. INNOVATION — Full-width image + text
   ============================================================ */
function InnovationSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="w-full h-[670px] max-lg:h-[470px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden" />
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
              {t("pages.vivla.innovationTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.vivla.innovationBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. RELATED PROJECTS
   ============================================================ */
function VivlaRelatedProjects() {
  const { t } = useTranslation();
  return (
    <RelatedProjectsSection title={t("pages.vivla.relatedTitle")}>
      <RelatedProjectCard
        slug="navilens"
        image={imgRelatedNavilens}
        tag={t("work.projects.navilens.tag")}
        name={t("work.projects.navilens.name")}
        description={t("work.projects.navilens.description")}
      />
      <RelatedProjectCard
        slug="finsa"
        image={imgRelatedFinsa}
        tag={t("work.projects.finsa.tag")}
        name={t("work.projects.finsa.name")}
        description={t("work.projects.finsa.description")}
      />
    </RelatedProjectsSection>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function ProjectDetailVivla() {
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
      <ScrollRevealSection><NpsPanelsSection /></ScrollRevealSection>
      <ScrollRevealSection><DataSection /></ScrollRevealSection>
      <ScrollRevealSection><HousesSection /></ScrollRevealSection>
      <ScrollRevealSection><InnovationSection /></ScrollRevealSection>
      <ScrollRevealSection><VivlaRelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}