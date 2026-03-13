import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import { useProjectTransition } from "../components/ProjectTransitionContext";
import { useProjectClick } from "../components/WorkSection";
import { getProjectBySlug } from "../components/projectData";

/* ─── Figma Assets ─── */
import imgHero from "figma:asset/2214d58f15337db66ff6aba0f5e9cef891db63d8.png";
import imgMobileSection from "figma:asset/01fe94b2981c6ab9c0a636bd8e3ca57a93f93fc4.png";
import imgScreen from "figma:asset/15d8f14cde01fd9533954caa5d8c0023a9453a10.png";
import imgIPhone15Pro from "figma:asset/6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";
import imgPodcast1 from "figma:asset/3f35741dd3a922d2ebac22f0ccdc772db242d2ea.png";
import imgPodcast2 from "figma:asset/27ee712bee7d2d9760d5990ad6e243d78e8757e3.png";
import imgPodcast3 from "figma:asset/3f4181b8517e6659a68b4a2f2aaa743ce89007bd.png";
import imgPodcast4 from "figma:asset/343da669f5ad2d878895f04bd2c52906c9a7d1e5.png";
import imgPodcast5 from "figma:asset/ef70319c91850cb426aa075375c419901e6d1ed7.png";
import imgPodcast6 from "figma:asset/a11ca6b377d4b2d293be6febec808cb6d31e9f38.png";
import imgPodcast7 from "figma:asset/1c3b0d3c507dfb7bbeedcf9be2eb4b7de8ed645c.png";
import imgPodcast8 from "figma:asset/8ef1048144c370436df59d47f9ce0b30b6f4e518.png";
import imgPodcast9 from "figma:asset/c6598211364a17c96d25254842a81cfc0e318897.png";
import imgMetro from "figma:asset/9eee9eb611ee559259e7863fc2483cb453170850.png";
import imgSpockCircles from "figma:asset/cf7e7859c99d98630d969b07ba0bedba7de4bbd5.png";
import imgDownloadMockup from "figma:asset/92aa781b11a4eb0f7b4063a2afdbf90472e6218c.png";
import imgScreen1 from "figma:asset/db1043e92bfba1f4d28be08e1bca010ec3a52405.png";
import imgWatchGroup from "figma:asset/84b40fa14715ef193a79093404279cc54d8d5f40.png";
import imgWatchRight from "figma:asset/f1ffa57ef5716a937a052b6e2809269a9d411878.png";
import imgCarBg from "figma:asset/85f15f66f0304bc17952ce96660e8838c0c6a414.png";
import imgCarOverlay from "figma:asset/27a79dd74148a5c48814b0452de45a7c6a46ed7d.png";
import imgRelatedNM from "figma:asset/2c60dc5e690df788bd1fb4c5c103bc60310340f8.png";
import imgRelatedRoomonitor from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";

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
            {t("pages.ivoox.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="nm"
              image={imgRelatedNM}
              tag={t("work.projects.nm.tag")}
              name={t("work.projects.nm.name")}
              description={t("work.projects.nm.description")}
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
      <RevealAfterTransition delay={0.3}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.45}>
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