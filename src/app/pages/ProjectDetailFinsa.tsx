import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";
import { ContactSection } from "../components/ContactSection";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";

/* ─── Assets ─── */
const imgHero = "/images/projects/finsa/finsa-bg-hero.jpg";
// Image placeholders - replace with actual assets in /public/images/
const img36 = "/images/projects/finsa/finsa-bg-big-sect.jpg";
const imgMobileSection = "/images/projects/finsa/Finsa%20IMG%20Medium.jpg";
const imgFinsaLeft = "/images/projects/finsa/Finsa%20Left.jpg";
const img05MurosDatos = "/images/projects/finsa/Finsa%20Right.jpg";
const imgBgReports = "/images/projects/finsa/Finsa%20informe.jpg";
const imgProSection = "/images/projects/finsa/pro%20section.jpg";
const imgRelatedRoomonitor = "/images/projects/roomonitor/Roomheadersection.jpg";
import { imgEkhilurPlaceholder } from "../components/projectData";

/* ============================================================
   1. HERO — clean image, fixed responsive height
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px]">
      <div className="absolute inset-0 bg-[#d8d8d8]" />
      <img alt="Finsa" className="absolute inset-0 w-full h-full object-cover" src={imgHero} />
    </section>
  );
}

/* ============================================================
   2. INTRO — 3-column: name | subtitle+body | performance
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
            Finsa
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.finsa.introSubtitle")}
            </LangText>
            <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.finsa.introBody")}
            </LangText>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={2} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.finsa.performanceLabel")}
              </LangText>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {(t("pages.finsa.performanceItems", { returnObjects: true }) as string[]).map((item) => (
                  <LangText as="p" key={item} stagger={3}>{item}</LangText>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={4} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.finsa.platformLabel")}
              </LangText>
              <LangText as="p" stagger={5} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.finsa.platformValue")}
              </LangText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. VIDEO — full-width autoplay loop
   ============================================================ */
function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(Boolean(entries[0]?.isIntersecting));
      },
      { root: null, rootMargin: "20% 0px 20% 0px", threshold: 0 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      if (isVisible && document.visibilityState === "visible") {
        video.play().catch(() => undefined);
        return;
      }
      video.pause();
    };

    const onVisibilityChange = () => {
      syncPlayback();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    syncPlayback();

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full px-[56px] max-md:px-[24px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full h-[600px] max-lg:h-[450px] max-md:h-[300px] overflow-hidden">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://digio.es/sites/default/files/2024-05/Finsa_tech_cabecera_web_compressed.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. SECONDARY — Big title + Challenge & Work columns
   ============================================================ */
function SecondarySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[1200px] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.finsa.bigTitle")}
          </LangText>
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <LangText as="p" stagger={1} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.finsa.challengeTitle")}
              </LangText>
              <LangText as="p" stagger={2} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.finsa.challengeBody")}
              </LangText>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <LangText as="p" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.finsa.workTitle")}
              </LangText>
              <LangText as="p" stagger={4} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.finsa.workBody")}
              </LangText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. BIG IMAGE — Desk with monitor, masked screen overlay
  Reference design: 1440×900 container. Screen 906×684 at left:267 top:108
   (centered). Inside: scrolling screenshot 179% tall.
   Responsive: use % positions relative to container.
   ============================================================ */
function BigImageSection() {
  return (
    <section className="w-full relative h-[900px] max-lg:h-[600px] max-md:h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f9fb]" />
      <img
        alt="Finsa – Muros y Cargas"
        className="absolute inset-0 w-full h-full object-cover"
        src={img36}
      />
    </section>
  );
}

/* ============================================================
   6. ANALYSIS — Title + desc, image grid, reports
   ============================================================ */

/*
 * Full-width screenshot composition.
 * Reference design: 545px container, background imgMobileSection,
 * screenshot 820×916 centered at (50%, 50%+272.56px) = bottom edge.
 * Visible: top ~16% is background, rest is the screenshot card.
 * Responsive: % width + bottom-anchored, overflow hides excess.
 */
function FullWidthScreenshot() {
  return (
    <div className="relative w-full h-[545px] max-lg:h-[400px] max-md:h-[280px] overflow-hidden">
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgMobileSection} />
    </div>
  );
}

/*
 * Left card: textured bg + screenshot shifted left.
 * Reference design: flex-1 (~580px), 545px tall. Screenshot 819×915
 * centered at (50%-204.5px, 50%+270.09px) with -translate-x/y-1/2.
 * → Screenshot starts at ~85px from top, shifted far-left.
 * Responsive: use % values, let overflow clip naturally.
 */
function LeftCard() {
  return (
    <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[280px] overflow-hidden relative min-w-0">
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFinsaLeft} />
    </div>
  );
}

/*
 * Right card: textured bg + screenshot shifted right.
 * Reference design: flex-1 (~580px), 545px tall. Screenshot 810×837
 * centered at (50%+200px, 50%+231.09px) with -translate-x/y-1/2.
 * → Screenshot shifted right, appears from bottom-right.
 */
function RightCard() {
  return (
    <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[280px] overflow-hidden relative min-w-0">
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={img05MurosDatos} />
    </div>
  );
}

function AnalysisSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[40px]">
          {/* Title + Description */}
          <div className="flex items-start justify-between max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[380px] max-lg:w-full shrink-0 max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px] whitespace-pre-line">
              {t("pages.finsa.analysisTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[355px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.finsa.analysisBody")}
            </p>
          </div>

          {/* Image compositions */}
          <div className="flex flex-col gap-[40px] max-md:gap-[24px]">
            {/* Full-width screenshot */}
            <FullWidthScreenshot />

            {/* Two side-by-side */}
            <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
              <LeftCard />
              <RightCard />
            </div>

            {/* Cloud text aligned right */}
            <div className="flex justify-end">
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full">
                {t("pages.finsa.cloudBody")}
              </p>
            </div>
          </div>

          {/* Reports */}
          <div className="flex flex-col gap-[40px] max-md:gap-[24px]">
            <div className="relative w-full h-[800px] max-lg:h-[560px] max-md:h-[350px] overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgReports} />
            </div>
            <div className="flex items-start justify-between max-lg:flex-col max-lg:gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full shrink-0 max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px] whitespace-pre-line">
                {t("pages.finsa.reportsTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
                {t("pages.finsa.reportsBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. RESULT — Text + iMac/laptop mockup composition
  Reference design: flex layout, text left + mockup right (flex-1, 520px tall).
   Inside mockup: background imgFinsaLeft, iMac at (90,90),
   laptop centered at top:-68px. Both exceed container, clipped.
   Responsive: scale entire composition proportionally.
   ============================================================ */
function ResultSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[200px] max-lg:py-[120px] max-md:px-[24px] max-md:py-[60px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] items-start max-lg:flex-col">
          {/* Text */}
          <div className="flex-1 flex flex-col gap-[24px] min-w-0">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.finsa.resultTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full">
              {t("pages.finsa.resultBody")}
            </p>
          </div>
          {/* Mockup composition: laptop over iMac, clipped container */}
          <div className="flex-1 h-[520px] max-lg:h-[400px] max-lg:w-full max-md:h-[300px] relative overflow-hidden">
            {/* Background image */}
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgProSection} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. RELATED PROJECTS — with FLIP transition
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <RelatedProjectsSection title={t("pages.finsa.relatedTitle")}>
      <RelatedProjectCard
        slug="roomonitor"
        image={imgRelatedRoomonitor}
        tag={t("work.projects.roomonitor.tag")}
        name={t("work.projects.roomonitor.name")}
        description={t("work.projects.roomonitor.description")}
      />
      <RelatedProjectCard
        slug="ekhilur"
        image={imgEkhilurPlaceholder}
        tag={t("work.projects.ekhilur.tag")}
        name={t("work.projects.ekhilur.name")}
        description={t("work.projects.ekhilur.description")}
      />
    </RelatedProjectsSection>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function ProjectDetailFinsa() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <VideoSection />
      </RevealAfterTransition>
      <ScrollRevealSection><SecondarySection /></ScrollRevealSection>
      <ScrollRevealSection><BigImageSection /></ScrollRevealSection>
      <ScrollRevealSection><AnalysisSection /></ScrollRevealSection>
      <ScrollRevealSection><ResultSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}