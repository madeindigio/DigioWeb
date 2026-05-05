import { useEffect, useState, useRef } from "react";
import type { AnimationItem } from "lottie-web";
import { motion } from "motion/react";
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
const imgHero = "/images/projects/ivoox/ivoox-hero-section.jpg";
const imgPhonePanel = "/images/projects/ivoox/iVoox Section small mobile.jpg";
const imgPodcastSlider = "/images/projects/ivoox/iVoox Section podcasts slider.jpg";
const imgMetro = "/images/projects/ivoox/iVooxmetro.jpg";
const imgScreens = "/images/projects/ivoox/iVoox-screens3.jpg";
const imgWatchGroup = "/images/projects/ivoox/iVoox_Watch_left.jpg";
const imgWatchRight = "/images/projects/ivoox/iVoox_Watch_right.jpg";
const imgCarBg = "/images/projects/ivoox/iVoox Auto.jpg";
const IVOOX_PODCAST_LOTTIE_URL = "/images/projects/ivoox/iVoox Podcast Slider_0.json";
const IVOOX_MOBILE_SCREENS_LOTTIE_URL = "/images/projects/ivoox/Showreel_-Mobile-screens_0.json";
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
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ivoox.introSubtitle")}
            </LangText>
            <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.ivoox.introBody")}
            </LangText>
          </div>
          {/* Col 3: Performance + Platform */}
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={2} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.ivoox.performanceLabel")}
              </LangText>
              <div className="flex flex-col gap-[8px]">
                <LangText as="p" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                  {t("pages.ivoox.performanceValue1")}
                </LangText>
                <LangText as="p" stagger={4} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                  {t("pages.ivoox.performanceValue2")}
                </LangText>
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
  function LottiePodcastSlider() {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries[0]?.isIntersecting) return;
          setShouldLoad(true);
          observer.disconnect();
        },
        { rootMargin: "280px 0px", threshold: 0.01 },
      );

      observer.observe(trigger);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!shouldLoad) return;

      const el = containerRef.current;
      if (!el) return;

      let cancelled = false;
      let anim: AnimationItem | null = null;

      Promise.all([fetch(IVOOX_PODCAST_LOTTIE_URL), import("lottie-web")])
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
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          });

          setIsReady(true);
        })
        .catch(() => {
          if (!cancelled) setIsReady(false);
        });

      return () => {
        cancelled = true;
        anim?.destroy();
      };
    }, [shouldLoad]);

    return (
      <div ref={triggerRef} className="absolute inset-0">
        <img
          alt="iVoox podcasts slider"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isReady ? "opacity-0" : "opacity-100"}`}
          src={imgPodcastSlider}
        />
        <div
          ref={containerRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 [&>svg]:w-full [&>svg]:h-full ${isReady ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    );
  }

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
          <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden">
            <img
              alt="iVoox app mobile section"
              className="absolute inset-0 w-full h-full object-cover object-top"
              src={imgPhonePanel}
            />
          </div>
          <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden">
            <LottiePodcastSlider />
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
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const hasStartedRef = useRef(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const target = triggerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "320px 0px", threshold: 0.01 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = triggerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasStartedRef.current) return;

        hasStartedRef.current = true;
        animationRef.current?.goToAndPlay(0, true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;

    Promise.all([fetch(IVOOX_MOBILE_SCREENS_LOTTIE_URL), import("lottie-web")])
      .then(async ([res, lottieModule]) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (cancelled) return;

        animationRef.current = lottieModule.default.loadAnimation({
          container: el,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: data,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        });

        setIsReady(true);

        if (hasStartedRef.current) {
          animationRef.current.goToAndPlay(0, true);
        }
      })
      .catch(() => {
        if (!cancelled) setIsReady(false);
      });

    return () => {
      cancelled = true;
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, [shouldLoad]);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div ref={triggerRef} className="w-full h-[800px] max-lg:h-[550px] max-md:h-[350px] relative overflow-hidden">
            <img
              alt="iVoox in the metro"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isReady ? "opacity-0" : "opacity-100"}`}
              src={imgScreens}
            />
            <div
              ref={containerRef}
              className={`absolute inset-0 w-full h-full transition-opacity duration-300 [&>svg]:w-full [&>svg]:h-full ${isReady ? "opacity-100" : "opacity-0"}`}
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
            <img
              alt="iVoox app screens"
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
   10. WATCH SECTION — Two panels
   ============================================================ */
function WatchSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] max-md:px-[24px] max-md:pt-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
          {/* Watch left - group image */}
          <div
            className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${imgWatchGroup})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
          {/* Watch right - large image */}
          <div
            className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${imgWatchRight})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
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