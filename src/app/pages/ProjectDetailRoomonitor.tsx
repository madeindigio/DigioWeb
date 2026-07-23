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
const imgHero = "/images/projects/roomonitor/Roomheadersection.jpg";
// Image placeholders - replace with actual assets in /public/images/
const imgRoom = "/images/projects/roomonitor/Roomonitor%20section%20BG%20IMG.jpg";
const imgRoomDevice = "/images/projects/roomonitor/roomdevice-sm.png";
const videoInstalacion = "/images/projects/roomonitor/instalacion-roomonitor.mp4";
const imgDevice = "/images/projects/roomonitor/home-section.jpeg";
const imgMacBook = "/images/projects/roomonitor/big%20panel%20room.jpg";
const imgMobileSection = "/images/projects/roomonitor/Mobile%20section.jpg";
const imgMobileAppSelection = "/images/projects/roomonitor/Mobile%20APP%20Selection.webp";
const imgDesktop = "/images/projects/roomonitor/apart-detail.jpg";
const imgIPhoneBezel = "/images/placeholder-gray.svg";
const lottieRoomButton = "/images/projects/roomonitor/APP%20Room%20button.json";
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
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.roomonitor.introSubtitle")}
            </LangText>
            <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.roomonitor.introBody")}
            </LangText>
          </div>
          {/* Performance + Platforms */}
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={2} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">{t("pages.roomonitor.performanceLabel")}</LangText>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {(t("pages.roomonitor.performanceItems", { returnObjects: true }) as string[]).map((item, idx) => (
                  <LangText as="p" key={item} stagger={3 + idx}>{item}</LangText>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={6} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">{t("pages.roomonitor.platformLabel")}</LangText>
              <LangText as="p" stagger={7} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.roomonitor.platformValue")}</LangText>
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(Boolean(entries[0]?.isIntersecting));
      },
      { rootMargin: "20% 0px 20% 0px", threshold: 0.01 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full px-[56px] max-md:px-[24px]">
      <div className="max-w-[1400px] mx-auto">
        <div
          ref={sectionRef}
          className="relative w-full h-[744px] max-lg:h-[500px] max-md:h-[300px] overflow-hidden"
        >
          <img alt="Roomonitor en habitación" className="absolute inset-0 w-full h-full object-cover" src={imgRoom} />

          {/* Roomonitor device overlay — on the dark wooden wall, above the side window */}
          <div
            className="absolute z-10 left-[47.8%] top-[19.6%] -translate-x-1/2 w-[clamp(28px,2.4%,36px)] max-lg:left-[47.4%] max-lg:top-[20.8%] max-lg:w-[clamp(24px,2.9%,32px)] max-md:left-[47.9%] max-md:top-[22.6%] max-md:w-[clamp(20px,5vw,26px)]"
          >
            {/* Orange sonar / ripple waves — perfectly circular, centered on device */}
            <div
              className="absolute"
              style={{
                /* Square anchor equal to device width, centered */
                width: "100%",
                paddingBottom: "100%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 0,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-[#FF6B1A] opacity-0"
                  style={{
                    animation: `roomwave 2.4s ease-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                    animationPlayState: isVisible ? "running" : "paused",
                  }}
                />
              ))}
            </div>

            {/* Device image */}
            <img
              alt="Roomonitor device"
              src={imgRoomDevice}
              className="relative w-full h-auto drop-shadow-2xl"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* Keyframes injected once */}
          <style>{`
            @keyframes roomwave {
              0%   { transform: scale(1);   opacity: 0.7; }
              100% { transform: scale(4.5); opacity: 0; }
            }
          `}</style>
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
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const wrap = videoWrapRef.current;
    if (!wrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVideoVisible(Boolean(entries[0]?.isIntersecting));
      },
      { rootMargin: "20% 0px 20% 0px", threshold: 0.01 },
    );

    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const syncPlayback = () => {
      if (isVideoVisible && document.visibilityState === "visible") {
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
  }, [isVideoVisible]);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[120px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[88px] max-lg:gap-[64px] max-md:gap-[36px]">
          {/* Two cards: chip + device */}
          <div className="flex gap-[40px] items-start max-md:flex-col max-md:gap-[24px]">
            {/* Chip photo */}
            <div
              ref={videoWrapRef}
              className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[300px] max-md:w-full bg-[#e8dfdf] relative overflow-hidden"
            >
              <video
                ref={videoRef}
                muted
                playsInline
                preload="metadata"
                onEnded={(event) => {
                  const video = event.currentTarget;
                  video.pause();
                  if (Number.isFinite(video.duration)) {
                    video.currentTime = video.duration;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover"
                src={videoInstalacion}
              />
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
function LottieRoomonitorButton() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

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
    const trigger = triggerRef.current;
    if (!trigger) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(Boolean(entries[0]?.isIntersecting));
      },
      { rootMargin: "20% 0px 20% 0px", threshold: 0 },
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    const failSafeId = window.setTimeout(() => {
      if (!cancelled) setHasFailed(true);
    }, 2500);

    Promise.all([fetch(lottieRoomButton), import("lottie-web")])
      .then(async ([res, lottieModule]) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (cancelled) return;

        window.clearTimeout(failSafeId);
        setHasFailed(false);
        setIsReady(true);

        animationRef.current = lottieModule.default.loadAnimation({
          container: el,
          renderer: "svg",
          loop: true,
          autoplay: true,
          rendererSettings: {
            preserveAspectRatio: "xMidYMax slice",
          },
          animationData: data,
        });
      })
      .catch(() => {
        if (!cancelled) setHasFailed(true);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(failSafeId);
      animationRef.current?.destroy();
      animationRef.current = null;
    };
  }, [shouldLoad]);

  useEffect(() => {
    const syncPlayback = () => {
      const anim = animationRef.current;
      if (!anim) return;
      if (isVisible && document.visibilityState === "visible") {
        anim.play();
        return;
      }
      anim.pause();
    };

    const onVisibilityChange = () => {
      syncPlayback();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    syncPlayback();

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [isVisible, isReady]);

  return (
    <div ref={triggerRef} className="absolute inset-0">
      <img
        alt="Roomonitor mobile section"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgMobileSection}
      />
      {!hasFailed && (
        <div
          ref={containerRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
            isReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

function AppSection() {
  const { t } = useTranslation();
  const desktopRectRef = useRef<DOMRect | null>(null);
  const tiltRafRef = useRef(0);
  const renderedTiltRef = useRef({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    glowOpacity: 0,
  });
  const pendingTiltRef = useRef({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    glowOpacity: 0,
  });
  const [desktopTilt, setDesktopTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    glowOpacity: 0,
  });

  useEffect(() => {
    return () => {
      if (tiltRafRef.current) {
        cancelAnimationFrame(tiltRafRef.current);
      }
    };
  }, []);

  const scheduleTiltUpdate = () => {
    if (tiltRafRef.current) return;
    tiltRafRef.current = requestAnimationFrame(() => {
      tiltRafRef.current = 0;
      const next = pendingTiltRef.current;
      const prev = renderedTiltRef.current;
      if (
        Math.abs(next.rotateX - prev.rotateX) < 0.08 &&
        Math.abs(next.rotateY - prev.rotateY) < 0.08 &&
        Math.abs(next.glowX - prev.glowX) < 0.2 &&
        Math.abs(next.glowY - prev.glowY) < 0.2 &&
        Math.abs(next.glowOpacity - prev.glowOpacity) < 0.02
      ) {
        return;
      }

      renderedTiltRef.current = next;
      setDesktopTilt(next);
    });
  };

  const handleDesktopMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = desktopRectRef.current ?? e.currentTarget.getBoundingClientRect();
    desktopRectRef.current = rect;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 12;
    const rotateX = (0.5 - y) * 10;

    pendingTiltRef.current = {
      rotateX,
      rotateY,
      glowX: x * 100,
      glowY: y * 100,
      glowOpacity: 0.32,
    };
    scheduleTiltUpdate();
  };

  const handleDesktopMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    desktopRectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleDesktopMouseLeave = () => {
    desktopRectRef.current = null;
    pendingTiltRef.current = {
      rotateX: 0,
      rotateY: 0,
      glowX: 50,
      glowY: 50,
      glowOpacity: 0,
    };
    scheduleTiltUpdate();
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
              <LottieRoomonitorButton />
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
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] max-lg:w-[610px] max-md:w-[360px] aspect-[1448/1040]"
              onMouseEnter={handleDesktopMouseEnter}
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