import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import { useProjectTransition } from "../components/ProjectTransitionContext";
import { useProjectClick } from "../components/WorkSection";
import { getProjectBySlug } from "../components/projectData";

/* ─── Figma Assets ─── */
import imgHero from "figma:asset/9df4b0260f9f37c4401ad84e556ad9e573c8702b.png";
import imgBigImgSection from "figma:asset/a1c129dc690fe5785fb41d8bad1137f2a994222e.png";
import img36 from "figma:asset/5d8b4a7dc167d6b555b02e49f6b8928a1116488b.png";
import imgMobileSection from "figma:asset/e886ab9817aac0a00c61aff042b48adf73ecc76a.png";
import img0363Muro1 from "figma:asset/a19769ca28fef8413f76c1e664081fd22f6dcb83.png";
import imgFinsaLeft from "figma:asset/2d6c010cf4512650509c6e63a3f0e478c70fd60d.png";
import img0363Muro2 from "figma:asset/b0428bd14e80e23be65fc4e7e722d9d000f7fdd9.png";
import img05MurosDatos from "figma:asset/ccbe102234a6e9c43349002ce6d75ca0193b44c2.png";
import imgBgReports from "figma:asset/df226d0605f3725c1e406fd86f32f8db22ad9b26.png";
import imgIMacMockup from "figma:asset/1340efa0945e04447f7f497887c081a1d97a3220.png";
import imgMockup2x from "figma:asset/ab8d614a77eb1f04083cccd6e78d093fbefe1e53.png";
import imgRelatedRoomonitor from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";
import imgRelatedNM from "figma:asset/2c60dc5e690df788bd1fb4c5c103bc60310340f8.png";

const EASE = [0.22, 1, 0.36, 1];

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
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.finsa.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.finsa.introBody")}
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.finsa.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {(t("pages.finsa.performanceItems", { returnObjects: true }) as string[]).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.finsa.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.finsa.platformValue")}
              </p>
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
  return (
    <section className="w-full px-[56px] max-md:px-[24px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full h-[600px] max-lg:h-[450px] max-md:h-[300px] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/_videos/v1/4e4ee34637d820ae9bd94de23a75b12a48122343" />
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
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[1200px] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.finsa.bigTitle")}
          </p>
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.finsa.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.finsa.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.finsa.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.finsa.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. BIG IMAGE — Desk with monitor, masked screen overlay
   Figma: 1440×900 container. Screen 906×684 at left:267 top:108
   (centered). Inside: scrolling screenshot 179% tall.
   Responsive: use % positions relative to container.
   ============================================================ */
function BigImageSection() {
  return (
    <section className="w-full relative h-[900px] max-lg:h-[600px] max-md:h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-[#f9f9fb]" />
      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBigImgSection} />
      {/* Screen: 906/1440 = 62.9% width, 684/900 = 76% height, top: 108/900 = 12% */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-[4px] overflow-hidden"
        style={{
          top: "12%",
          width: "62.9%",
          height: "76%",
        }}
      >
        {/* Screenshot: 179% of mask height → scrolls, showing only the top */}
        <img
          alt=""
          className="absolute left-0 top-0 w-full max-w-none pointer-events-none"
          style={{ height: "179.21%" }}
          src={img36}
        />
      </div>
    </section>
  );
}

/* ============================================================
   6. ANALYSIS — Title + desc, image grid, reports
   ============================================================ */

/*
 * Full-width screenshot composition.
 * Figma: 545px container, background imgMobileSection,
 * screenshot 820×916 centered at (50%, 50%+272.56px) = bottom edge.
 * Visible: top ~16% is background, rest is the screenshot card.
 * Responsive: % width + bottom-anchored, overflow hides excess.
 */
function FullWidthScreenshot() {
  return (
    <div className="relative w-full h-[545px] max-lg:h-[400px] max-md:h-[280px] overflow-hidden">
      {/* Background fills the container */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute max-w-none"
          style={{ height: "160.92%", width: "110.15%", left: "-0.4%", top: "-12.25%" }}
          src={imgMobileSection}
        />
      </div>
      {/* Screenshot card: starts ~16% from top, 68% container width */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[16%] w-[68%] max-md:w-[85%] rounded-[4px] overflow-hidden">
        <img alt="" className="w-full rounded-[4px]" src={img0363Muro1} />
      </div>
    </div>
  );
}

/*
 * Left card: textured bg + screenshot shifted left.
 * Figma: flex-1 (~580px), 545px tall. Screenshot 819×915
 * centered at (50%-204.5px, 50%+270.09px) with -translate-x/y-1/2.
 * → Screenshot starts at ~85px from top, shifted far-left.
 * Responsive: use % values, let overflow clip naturally.
 */
function LeftCard() {
  return (
    <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[280px] overflow-hidden relative min-w-0">
      <div className="absolute inset-0 bg-[#f7f7f7]" />
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute max-w-none"
          style={{ height: "211.14%", width: "346.21%", left: "-17.34%", top: "-0.95%" }}
          src={imgFinsaLeft}
        />
      </div>
      {/* Screenshot: shifted left of center, appears from bottom-left.
          Using % based on container: left ~15% of width, top ~16% */}
      <div className="absolute top-[16%] left-[-55%] w-[141%] max-lg:left-[-40%] max-lg:w-[130%] max-md:left-[-30%] max-md:w-[120%] rounded-[4px] overflow-hidden">
        <img alt="" className="w-full rounded-[4px] opacity-100" src={img0363Muro2} style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}

/*
 * Right card: textured bg + screenshot shifted right.
 * Figma: flex-1 (~580px), 545px tall. Screenshot 810×837
 * centered at (50%+200px, 50%+231.09px) with -translate-x/y-1/2.
 * → Screenshot shifted right, appears from bottom-right.
 */
function RightCard() {
  return (
    <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[280px] overflow-hidden relative min-w-0">
      <div className="absolute inset-0 bg-[#f7f7f7]" />
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute max-w-none"
          style={{ height: "211.14%", width: "346.21%", left: "-81.11%", top: "-22.81%" }}
          src={imgFinsaLeft}
        />
      </div>
      {/* Screenshot: shifted right, appears from bottom-right */}
      <div className="absolute top-[16%] right-[-55%] w-[140%] max-lg:right-[-40%] max-lg:w-[130%] max-md:right-[-30%] max-md:w-[120%] rounded-[4px] overflow-hidden">
        <img alt="" className="w-full rounded-[4px]" src={img05MurosDatos} />
      </div>
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
   Figma: flex layout, text left + mockup right (flex-1, 520px tall).
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
            {/* Background texture */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute max-w-none"
                style={{ height: "145.81%", width: "239.08%", left: "-66.9%", top: "-35.63%" }}
                src={imgFinsaLeft}
              />
            </div>
            {/* Laptop mockup: centered, overflows top
                Figma: w-976, h-656, top: -68px, centered.
                At 520px height container: the laptop extends from -68 to 588px.
                Use % of container: top ~-13%, width ~168% of container (~580px).
                On tablet/mobile: keep ratios, scale naturally via %. */}
            <div
              className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
              style={{ top: "-13%", width: "168%", aspectRatio: "976/656" }}
            >
              <img alt="" className="w-full h-full object-cover" src={imgMockup2x} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. RELATED PROJECTS — with FLIP transition
   ============================================================ */
function RelatedProjectCard({
  image,
  tag,
  name,
  description,
  slug,
}: {
  image: string;
  tag: string;
  name: string;
  description: string;
  slug: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const project = getProjectBySlug(slug);
  const flipImage = project?.image || image;
  const handleClick = useProjectClick(slug, containerRef, flipImage, tag);

  return (
    <div className="flex flex-col items-start flex-1 min-w-0">
      <div
        ref={containerRef}
        onClick={handleClick}
        className="relative w-full h-[500px] max-lg:h-[350px] max-md:h-[250px] overflow-hidden cursor-pointer group"
      >
        <div className="absolute inset-0 bg-[#d8d8d8]" />
        <img
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          src={image}
        />
        <div className="absolute left-[24px] top-[24px] z-10 backdrop-blur-[5px] bg-[rgba(25,30,37,0.24)] rounded-[300px] px-[16px] py-[8px] max-md:left-[12px] max-md:top-[12px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[20px] text-white tracking-[-0.8px] leading-[27px] whitespace-nowrap text-center max-md:text-[14px] max-md:leading-[20px]">
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
            {t("pages.finsa.relatedTitle")}
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
              slug="nm"
              image={imgRelatedNM}
              tag={t("work.projects.nm.tag")}
              name={t("work.projects.nm.name")}
              description={t("work.projects.nm.description")}
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
export function ProjectDetailFinsa() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.3}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.45}>
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