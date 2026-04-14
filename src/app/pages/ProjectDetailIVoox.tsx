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
const imgHero = "/images/projects/ivoox/ivoox-hero-section.jpg";
// Image placeholders - replace with actual assets in /public/images/
const imgMobileSection = "/images/placeholder-gray.svg";
const imgScreen = "/images/placeholder-gray.svg";
const imgIPhone15Pro = "/images/placeholder-gray.svg";
const imgPodcast1 = "/images/placeholder-gray.svg";
const imgPodcast2 = "/images/placeholder-gray.svg";
const imgPodcast3 = "/images/placeholder-gray.svg";
const imgPodcast4 = "/images/placeholder-gray.svg";
const imgPodcast5 = "/images/placeholder-gray.svg";
const imgPodcast6 = "/images/placeholder-gray.svg";
const imgPodcast7 = "/images/placeholder-gray.svg";
const imgPodcast8 = "/images/placeholder-gray.svg";
const imgPodcast9 = "/images/placeholder-gray.svg";
const imgMetro = "/images/placeholder-gray.svg";
const imgSpockCircles = "/images/placeholder-gray.svg";
const imgDownloadMockup = "/images/placeholder-gray.svg";
const imgScreen1 = "/images/placeholder-gray.svg";
const imgWatchGroup = "/images/placeholder-gray.svg";
const imgWatchRight = "/images/placeholder-gray.svg";
const imgCarBg = "/images/placeholder-gray.svg";
const imgCarOverlay = "/images/placeholder-gray.svg";
const imgRelatedRoomonitor = "/images/projects/roomonitor/Roomheadersection.jpg";
import { imgEkhilurPlaceholder } from "../components/projectData";

const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   1. HERO — Full-width image, fixed height
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f9fa]" />
      <img
        alt="iVoox hero"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgHero}
      />
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
          {/* Col 1: Name */}
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
            iVoox
          </p>
          {/* Col 2: Subtitle + body */}
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ivoox.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.ivoox.introBody")}
            </p>
          </div>
          {/* Col 3: Performance + Platform */}
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.ivoox.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                  {t("pages.ivoox.performanceValue1")}
                </p>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                  {t("pages.ivoox.performanceValue2")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.ivoox.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.ivoox.platformValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. MOBILE SECTION — Full-width image
   ============================================================ */
function MobileBannerSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[600px] max-lg:h-[420px] max-md:h-[280px] relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://digio.es/sites/default/files/2024-06/iVoox%20Digio%20Video.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. VISION — Big statement text
   ============================================================ */
function VisionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          {/* Big text */}
          <div className="max-w-[1200px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.ivoox.visionText")}
            </p>
          </div>
          {/* Two column: El reto | Nuestro trabajo */}
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.ivoox.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.ivoox.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.ivoox.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.ivoox.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. TWO PANELS — Phone mockup + Podcast grid
   ============================================================ */
function PhonePodcastPanels() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
          {/* Phone mockup panel */}
          <div className="flex-1 bg-gradient-to-b from-[#ffeedc] to-[#fcdebf] h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden">
            {/* Phone screen */}
            <div className="absolute left-[142px] top-[60px] max-lg:left-[100px] max-lg:top-[40px] max-md:left-1/2 max-md:-translate-x-1/2 max-md:top-[30px]">
              <div className="relative w-[296px] h-[642px] max-lg:w-[220px] max-lg:h-[477px] max-md:w-[200px] max-md:h-[434px]">
                <img
                  alt="iVoox app screen"
                  className="absolute inset-0 w-full h-full object-cover rounded-[40px] max-lg:rounded-[30px] max-md:rounded-[28px]"
                  src={imgScreen}
                />
                <div className="absolute -inset-[30px] max-lg:-inset-[22px] max-md:-inset-[20px]">
                  <img
                    alt=""
                    className="w-full h-full object-cover"
                    src={imgIPhone15Pro}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Podcast grid panel */}
          <div className="flex-1 bg-gradient-to-b from-[#ffeedc] to-[#fcdebf] h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden">
            {/* 3x3-ish grid of podcast covers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[420px] h-[420px] max-lg:w-[320px] max-lg:h-[320px] max-md:w-[280px] max-md:h-[280px]">
                {/* Center */}
                <img alt="" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast1} />
                {/* Left center */}
                <img alt="" className="absolute left-0 top-1/2 -translate-y-1/2 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast2} />
                {/* Left top */}
                <img alt="" className="absolute left-0 top-0 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast4} />
                {/* Left bottom */}
                <img alt="" className="absolute left-0 bottom-0 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast3} />
                {/* Center top */}
                <img alt="" className="absolute left-1/2 -translate-x-1/2 top-0 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast5} />
                {/* Right center */}
                <img alt="" className="absolute right-0 top-1/2 -translate-y-1/2 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast6} />
                {/* Center bottom */}
                <img alt="" className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast7} />
                {/* Right bottom */}
                <img alt="" className="absolute right-0 bottom-0 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast8} />
                {/* Right top */}
                <img alt="" className="absolute right-0 top-0 w-[132px] h-[132px] max-lg:w-[100px] max-lg:h-[100px] max-md:w-[88px] max-md:h-[88px] rounded-[12px] object-cover" src={imgPodcast9} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. VALOR Y OFERTA — Right-aligned text
   ============================================================ */
function ValueSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] max-md:px-[24px] max-md:py-[32px]">
        <div className="max-w-[1400px] mx-auto flex justify-end">
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ivoox.valueTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.ivoox.valueBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. METRO / UNDERGROUND IMAGE — Full-width
   ============================================================ */
function MetroImageSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[800px] max-lg:h-[550px] max-md:h-[350px] relative overflow-hidden">
            <img
              alt="iVoox in the metro"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgMetro}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. USABILITY TEXT — Left-aligned
   ============================================================ */
function UsabilitySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] max-md:px-[24px] max-md:py-[32px]">
        <div className="max-w-[1400px] mx-auto flex justify-start">
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ivoox.usabilityTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.ivoox.usabilityBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. SMARTPHONES — Two phones on gradient bg
   ============================================================ */
function SmartphonesSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[740px] max-lg:h-[520px] max-md:h-[380px] relative overflow-hidden">
            {/* Gradient + pattern bg */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#ffeedc] to-[#fcdebf]" />
            <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" src={imgSpockCircles} />
            {/* Phone 1 (left) */}
            <div className="absolute left-[calc(50%-120px)] top-[89px] max-lg:left-[calc(50%-90px)] max-lg:top-[60px] max-md:left-[calc(50%-70px)] max-md:top-[40px]">
              
            </div>
            {/* Phone 2 (right, overlapping) */}
            <div className="absolute left-[calc(50%+100px)] top-[89px] max-lg:left-[calc(50%+70px)] max-lg:top-[60px] max-md:left-[calc(50%+50px)] max-md:top-[40px]">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. WATCH SECTION — Two panels
   ============================================================ */
function WatchSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] max-md:px-[24px] max-md:pt-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
          {/* Watch left - group image */}
          <div className="flex-1 bg-[#fcdebf] h-[545px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden">
            <div className="absolute left-[79px] top-[57px] w-[421px] h-[432px] max-lg:left-[40px] max-lg:top-[30px] max-lg:w-[320px] max-lg:h-[328px] max-md:left-[24px] max-md:top-[20px] max-md:w-[260px] max-md:h-[267px]">
              <img alt="Apple Watch iVoox" className="w-full h-full object-cover" src={imgWatchGroup} />
            </div>
          </div>
          {/* Watch right - large image */}
          <div className="flex-1 bg-[#fcdebf] h-[545px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden">
            <div className="absolute -left-[197px] -top-[101px] w-[864px] h-[999px] max-lg:-left-[120px] max-lg:-top-[60px] max-lg:w-[650px] max-lg:h-[750px] max-md:-left-[80px] max-md:-top-[40px] max-md:w-[500px] max-md:h-[577px]">
              <img alt="Apple Watch iVoox detail" className="w-full h-full object-cover" src={imgWatchRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. DOWNLOADS — Stats: Title + body
   ============================================================ */
function DownloadsSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0 whitespace-pre-line">
            {t("pages.ivoox.downloadsTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            {t("pages.ivoox.downloadsBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   12. CAR SECTION — iVoox Auto
   ============================================================ */
function CarSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[670px] max-lg:h-[470px] max-md:h-[320px] relative overflow-hidden">
            <img alt="iVoox in car" className="absolute inset-0 w-full h-full object-cover" src={imgCarBg} />
            {/* Android Auto overlay */}
            
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   13. CAR TEXT — Experience text
   ============================================================ */
function CarTextSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0 whitespace-pre-line">
            {t("pages.ivoox.carTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            {t("pages.ivoox.carBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   14. RELATED PROJECTS
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.ivoox.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="ekhilur"
              image={imgEkhilurPlaceholder}
              tag={t("work.projects.ekhilur.tag")}
              name={t("work.projects.ekhilur.name")}
              description={t("work.projects.ekhilur.description")}
            />
            <RelatedProjectCard
              slug="roomonitor"
              image={imgRelatedRoomonitor}
              tag={t("work.projects.roomonitor.tag")}
              name={t("work.projects.roomonitor.name")}
              description={t("work.projects.roomonitor.description")}
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
export function ProjectDetailIVoox() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <MobileBannerSection />
      </RevealAfterTransition>
      <ScrollRevealSection><VisionSection /></ScrollRevealSection>
      <ScrollRevealSection><PhonePodcastPanels /></ScrollRevealSection>
      <ScrollRevealSection><ValueSection /></ScrollRevealSection>
      <ScrollRevealSection><MetroImageSection /></ScrollRevealSection>
      <ScrollRevealSection><UsabilitySection /></ScrollRevealSection>
      <ScrollRevealSection><SmartphonesSection /></ScrollRevealSection>
      <ScrollRevealSection><WatchSection /></ScrollRevealSection>
      <ScrollRevealSection><DownloadsSection /></ScrollRevealSection>
      <ScrollRevealSection><CarSection /></ScrollRevealSection>
      <ScrollRevealSection><CarTextSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}