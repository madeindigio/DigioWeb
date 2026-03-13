import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import { useProjectTransition } from "../components/ProjectTransitionContext";
import { useProjectClick } from "../components/WorkSection";
import { getProjectBySlug } from "../components/projectData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { VivlaLocationsGrid } from "../components/VivlaLocationsGrid";
import IDermAppScreens from "../../imports/IDermAppScreens";

/* ─── Related project images (NaviLens + Finsa) ─── */
import imgRelatedNavilens from "figma:asset/703c1bbb0750e4d852aeb246e01ec3e480282103.png";
import imgRelatedFinsa from "figma:asset/9df4b0260f9f37c4401ad84e556ad9e573c8702b.png";
import imgVivlaHero from "figma:asset/43cdb3e72f58cd88be954c02c14019a69bab0bb8.png";
import imgPanelNpsMobile from "figma:asset/b9f9d81e22e799a7fb13feaf3583a7e2e2bbc347.png";

const EASE = [0.22, 1, 0.36, 1];

const IMG_PANEL_1 = "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwbGFwdG9wfGVufDF8fHx8MTc3MzMxMTYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_PANEL_2 = "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2wlMjB0ZXJyYWNlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MzMxMTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_DATA = "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzJTIwZ3JhcGhzJTIwc2NyZWVufGVufDF8fHx8MTc3MzMxMTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HOUSES_1 = "https://images.unsplash.com/photo-1564933170157-3af8ec882299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjby1vd25lcnNoaXAlMjB2YWNhdGlvbiUyMGhvbWUlMjBjb3N0YSUyMGJyYXZhfGVufDF8fHx8MTc3MzMxMTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HOUSES_2 = "https://images.unsplash.com/photo-1550079169-1e23cea6c329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMG1hbmFnZW1lbnQlMjBtb2JpbGUlMjBhcHAlMjBtb2NrdXB8ZW58MXx8fHwxNzczMzExNjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_INTERIOR = "https://images.unsplash.com/photo-1648147870253-c45f6f430528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yJTIwZGVzaWduJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzMzMTE2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/* ── Animation helpers ── */
function RevealAfterTransition({ children, delay = 0.3 }: { children: React.ReactNode; delay?: number }) {
  const { isTransitioning } = useProjectTransition();
  const [show, setShow] = useState(!isTransitioning);
  useEffect(() => { if (!isTransitioning && !show) setShow(true); }, [isTransitioning, show]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.65, delay: show ? delay : 0, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

function ScrollRevealSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

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
function RelatedProjectCard({
  image, tag, name, description, slug,
}: {
  image: string; tag: string; name: string; description: string; slug: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = getProjectBySlug(slug);
  const flipImage = project?.image || image;
  const handleClick = useProjectClick(slug, containerRef, flipImage, tag);

  return (
    <div className="flex flex-col items-start flex-1 min-w-0">
      <div ref={containerRef} onClick={handleClick}
        className="relative w-full h-[500px] max-lg:h-[350px] max-md:h-[250px] overflow-hidden cursor-pointer group">
        <div className="absolute inset-0 bg-[#d8d8d8]" />
        <img alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          src={image} />
        <div className="absolute left-[24px] top-[24px] z-10 backdrop-blur-[5px] bg-[rgba(25,30,37,0.24)] rounded-[300px] px-[16px] py-[8px] max-md:left-[12px] max-md:top-[12px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[16px] text-white tracking-[-0.64px] leading-[22px] whitespace-nowrap text-center max-md:text-[12px] max-md:leading-[17px]">
            {tag}
          </p>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400 pointer-events-none" />
      </div>
      <div className="flex gap-[40px] items-start py-[32px] w-full max-md:flex-col max-md:gap-[12px] max-md:py-[20px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] whitespace-nowrap shrink-0 max-md:text-[20px] max-md:leading-[28px]">
          {name}
        </p>
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] flex-1 min-w-0 max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[16px] max-md:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.vivla.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
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
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function ProjectDetailVivla() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.3}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.45}>
        <LogoSection />
      </RevealAfterTransition>
      <ScrollRevealSection><VisionSection /></ScrollRevealSection>
      <ScrollRevealSection><NpsPanelsSection /></ScrollRevealSection>
      <ScrollRevealSection><DataSection /></ScrollRevealSection>
      <ScrollRevealSection><HousesSection /></ScrollRevealSection>
      <ScrollRevealSection><InnovationSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}