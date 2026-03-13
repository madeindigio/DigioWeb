import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import lottie from "lottie-web";
import { ContactSection } from "../components/ContactSection";
import { useProjectTransition } from "../components/ProjectTransitionContext";
import { useProjectClick } from "../components/WorkSection";
import { getProjectBySlug } from "../components/projectData";

/* ─── Figma Assets ─── */
import imgHero from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";
import imgRoom from "figma:asset/7eecf58295746eeffc9a8d31a745f878cf3a52e1.png";
import imgChip from "figma:asset/da621a7989c6be6dd520928301dc6915dbea23c1.png";
import imgDevice from "figma:asset/1f3facd6db6ba7a80b971a879bffff5b7c0d6627.png";
import imgMacBook from "figma:asset/64539e9c6b26f935aaa4892a70ae2efa82e5ff4b.png";
import imgMobileSection from "figma:asset/92c386fb966f32fa625b55ce807ab4e76a4554b6.png";
import imgDesktop from "figma:asset/74fc63919e2cd6b6e9ca4a23c8516e3989ab2642.png";
import imgIPhoneBezel from "figma:asset/6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";
import imgRelated1 from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelated1b from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelated2 from "figma:asset/703c1bbb0750e4d852aeb246e01ec3e480282103.png";

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
   1. HERO — unified NM style: clean image, fixed height
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px]">
      <div className="absolute inset-0 bg-[#d8d8d8]" />
      <img alt="Roomonitor" className="absolute inset-0 w-full h-full object-cover" src={imgHero} />
    </section>
  );
}

/* ============================================================
   2. INTRO — Roomonitor + description + performance
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          {/* Title */}
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
            Roomonitor
          </p>
          {/* Description */}
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.roomonitor.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.roomonitor.introBody")}
            </p>
          </div>
          {/* Performance + Platforms */}
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">{t("pages.roomonitor.performanceLabel")}</p>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {(t("pages.roomonitor.performanceItems", { returnObjects: true }) as string[]).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">{t("pages.roomonitor.platformLabel")}</p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.roomonitor.platformValue")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. ROOM IMAGE — Interior with devices
   ============================================================ */
function RoomImageSection() {
  return (
    <section className="w-full px-[56px] max-md:px-[24px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full h-[744px] max-lg:h-[500px] max-md:h-[300px] overflow-hidden">
          <img alt="Roomonitor en habitación" className="absolute inset-0 w-full h-full object-cover" src={imgRoom} />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. TRANSFORMATION — Title + Challenge & Work
   ============================================================ */
function TransformationSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          {/* Title */}
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[900px] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.roomonitor.bigTitle")}
          </p>
          {/* Two columns: Challenge + Work */}
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">{t("pages.roomonitor.challengeTitle")}</p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.roomonitor.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">{t("pages.roomonitor.workTitle")}</p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.roomonitor.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. HARDWARE — Chip + Device video + Text
   ============================================================ */
function HardwareSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[120px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[120px] max-lg:gap-[80px] max-md:gap-[48px]">
          {/* Two cards: chip + device */}
          <div className="flex gap-[40px] items-start max-md:flex-col max-md:gap-[24px]">
            {/* Chip photo */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[300px] max-md:w-full bg-[#e8dfdf] relative overflow-hidden">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[300px] max-md:w-[240px] max-md:h-[225px]">
                <img alt="Roomonitor chip" className="w-full h-full object-cover" src={imgChip} />
              </div>
            </div>
            {/* Device video */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[300px] max-md:w-full bg-white relative overflow-hidden border border-[#e9e9e9]">
              <img alt="Roomonitor device" className="absolute inset-0 w-full h-full object-cover" src={imgDevice} />
            </div>
          </div>
          {/* Hardware text */}
          <div className="flex flex-col gap-[24px] max-w-[900px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px]">
              {t("pages.roomonitor.hardwareLabel")}
            </p>
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px]">
              {t("pages.roomonitor.hardwareBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. MACBOOK — Dark section with laptop mockup
   ============================================================ */
function MacBookSection() {
  return (
    <section className="bg-[#191e25] w-full overflow-hidden relative h-[900px] max-lg:h-[600px] max-md:h-[400px] flex items-center justify-center">
      <div className="absolute bottom-[-67px] right-[-398px] w-[2841px] h-[1894px] max-lg:w-[1800px] max-lg:h-[1200px] max-lg:right-[-200px] max-md:w-[1200px] max-md:h-[800px] max-md:right-[-100px]">
        <img alt="MacBook con Roomonitor" className="w-full h-full object-cover" src={imgMacBook} />
      </div>
    </section>
  );
}

/* ============================================================
   7. APP SECTION — Property management + mobile + desktop
   ============================================================ */
// TODO: Replace with local TS module once Lottie JSON is provided
const LOTTIE_URL = "https://digio.es/sites/default/files/lottiefile_field/APP%20Room%20button_0.json";

function LottieRoomonitorButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    let anim: ReturnType<typeof lottie.loadAnimation> | null = null;

    fetch(LOTTIE_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        anim = lottie.loadAnimation({
          container: el,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
        });
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  if (error) {
    return (
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <p className="font-['Manrope',sans-serif] text-[#191e25]/40 text-[14px] text-center px-[24px]">
          Lottie animation — pending local import
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full flex items-center justify-center"
    />
  );
}

function AppSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[120px] max-lg:gap-[80px] max-md:gap-[48px]">
          {/* Title + description */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[380px] max-lg:w-full shrink-0 max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.roomonitor.appTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.roomonitor.appBody")}
            </p>
          </div>

          {/* Two mobile cards */}
          <div className="flex gap-[40px] items-start max-md:flex-col max-md:gap-[24px]">
            {/* Mobile app with iPhone bezel */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] max-md:w-full bg-[#e8dfdf] relative overflow-hidden">
              <LottieRoomonitorButton />
            </div>
            {/* App icons section */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] max-md:w-full relative overflow-hidden">
              <img alt="Roomonitor app icons" className="absolute inset-0 w-full h-full object-cover" src={imgMobileSection} />
            </div>
          </div>

          {/* Desktop screenshot with gradient background */}
          <div className="relative w-full h-[800px] max-lg:h-[600px] max-md:h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8dfdf] to-[#f6e6cd]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[724px] h-[614px] max-lg:w-[560px] max-lg:h-[475px] max-md:w-[340px] max-md:h-[288px]">
              <img alt="Roomonitor desktop" className="w-full h-full object-cover" src={imgDesktop} />
            </div>
          </div>

          {/* Bottom text */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full shrink-0 max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.roomonitor.monitorTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.roomonitor.monitorBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. RELATED PROJECTS — with FLIP transition
   ============================================================ */
function RelatedProjectCard({ image, image2, tag, name, description, slug }: { image: string; image2?: string; tag: string; name: string; description: string; slug: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  /* Use the canonical project image for the FLIP overlay so the hero matches */
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
        {image2 && (
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            src={image2}
          />
        )}
        <div className="absolute left-[24px] top-[24px] z-10 backdrop-blur-[5px] bg-[rgba(25,30,37,0.24)] rounded-[300px] px-[16px] py-[8px] max-md:left-[12px] max-md:top-[12px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[20px] text-white tracking-[-0.8px] leading-[27px] whitespace-nowrap text-center max-md:text-[14px] max-md:leading-[20px]">{tag}</p>
        </div>
        {/* Hover darken overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400 pointer-events-none" />
      </div>
      <div className="flex gap-[40px] items-start py-[32px] w-full max-md:flex-col max-md:gap-[12px] max-md:py-[20px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] whitespace-nowrap shrink-0 max-md:text-[20px] max-md:leading-[28px]">{name}</p>
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] flex-1 min-w-0 max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[16px] max-md:leading-[24px]">{description}</p>
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
            {t("pages.roomonitor.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="idermapp"
              image={imgRelated1}
              image2={imgRelated1b}
              tag={t("work.projects.idermapp.tag")}
              name={t("work.projects.idermapp.name")}
              description={t("work.projects.idermapp.description")}
            />
            <RelatedProjectCard
              slug="navilens"
              image={imgRelated2}
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
export function ProjectDetailRoomonitor() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.3}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.45}>
        <RoomImageSection />
      </RevealAfterTransition>
      <ScrollRevealSection><TransformationSection /></ScrollRevealSection>
      <ScrollRevealSection><HardwareSection /></ScrollRevealSection>
      <ScrollRevealSection><MacBookSection /></ScrollRevealSection>
      <ScrollRevealSection><AppSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}