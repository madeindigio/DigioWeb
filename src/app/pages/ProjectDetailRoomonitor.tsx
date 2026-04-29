import { useEffect, useState, useRef } from "react";
import type { AnimationItem } from "lottie-web";
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
const imgHero = "/images/projects/roomonitor/Roomheadersection.jpg";
// Image placeholders - replace with actual assets in /public/images/
const imgRoom = "/images/projects/roomonitor/Roomonitor%20section%20BG%20IMG.jpg";
const imgChip = "/images/placeholder-gray.svg";
const imgDevice = "/images/projects/roomonitor/sec%20section.webp";
const imgMacBook = "/images/projects/roomonitor/big%20panel%20room.jpg";
const imgMobileSection = "/images/projects/roomonitor/Mobile%20section.jpg";
const imgMobileAppSelection = "/images/projects/roomonitor/Mobile%20APP%20Selection.webp";
const imgDesktop = "/images/projects/roomonitor/apart-detail.jpg";
const imgIPhoneBezel = "/images/placeholder-gray.svg";
const imgRelated1 = "/images/projects/vivla/vivla-hero-section.jpg";
const imgRelated1b = "/images/projects/vivla/vivla-hero-section.jpg";
const imgRelated2 = "/images/placeholder-gray.svg";

const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   1. HERO
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
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px]">
              {t("pages.roomonitor.hardwareBody")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[760px]">
              {t("pages.roomonitor.hardwareLabel")}
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
    <section className="bg-[#191e25] w-full overflow-hidden relative h-[900px] max-lg:h-[600px] max-md:h-[400px]">
      <img
        alt="MacBook con Roomonitor"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={imgMacBook}
      />
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
    let anim: AnimationItem | null = null;

    Promise.all([fetch(LOTTIE_URL), import("lottie-web")])
      .then(async ([res, lottieModule]) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (cancelled) return;

        anim = lottieModule.default.loadAnimation({
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
  const [desktopTilt, setDesktopTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    glowOpacity: 0,
  });

  const handleDesktopMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 10;

    setDesktopTilt({
      rotateX,
      rotateY,
      glowX: x * 100,
      glowY: y * 100,
      glowOpacity: 0.32,
    });
  };

  const handleDesktopMouseLeave = () => {
    setDesktopTilt({
      rotateX: 0,
      rotateY: 0,
      glowX: 50,
      glowY: 50,
      glowOpacity: 0,
    });
  };

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
              <img alt="Roomonitor mobile section" className="absolute inset-0 w-full h-full object-cover" src={imgMobileSection} />
            </div>
            {/* App icons section */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] max-md:w-full relative overflow-hidden">
              <img alt="Roomonitor app icons" className="absolute inset-0 w-full h-full object-cover" src={imgMobileAppSelection} />
            </div>
          </div>

          {/* Desktop screenshot with gradient background */}
          <div className="relative w-full h-[800px] max-lg:h-[600px] max-md:h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#e8dfdf] to-[#f6e6cd]" />
            <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[724px] max-lg:w-[560px] max-md:w-[340px] aspect-[1448/1040]"
              onMouseMove={handleDesktopMouseMove}
              onMouseLeave={handleDesktopMouseLeave}
            >
              <div
                className="relative w-full h-full rounded-[8px] overflow-hidden shadow-[0_18px_55px_rgba(25,30,37,0.16)] transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transform: `perspective(1200px) rotateX(${desktopTilt.rotateX}deg) rotateY(${desktopTilt.rotateY}deg)`,
                }}
              >
                <img alt="Roomonitor desktop" className="w-full h-full object-contain" src={imgDesktop} />
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                  style={{
                    opacity: desktopTilt.glowOpacity,
                    background: `radial-gradient(circle at ${desktopTilt.glowX}% ${desktopTilt.glowY}%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.26) 20%, rgba(255,255,255,0) 55%)`,
                  }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[8px] ring-1 ring-white/35" />
              </div>
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
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <RelatedProjectsSection title={t("pages.roomonitor.relatedTitle")}>
      <RelatedProjectCard
        slug="vivla"
        image={imgRelated1}
        image2={imgRelated1b}
        tag={t("work.projects.vivla.tag")}
        name={t("work.projects.vivla.name")}
        description={t("work.projects.vivla.description")}
      />
      <RelatedProjectCard
        slug="navilens"
        image={imgRelated2}
        tag={t("work.projects.navilens.tag")}
        name={t("work.projects.navilens.name")}
        description={t("work.projects.navilens.description")}
      />
    </RelatedProjectsSection>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function ProjectDetailRoomonitor() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
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