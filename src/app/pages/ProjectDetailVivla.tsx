import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";
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
const imgVivlaScrollBg = "/images/projects/vivla/bg-section-scroll.jpg";
const imgNpsComments = "/images/projects/vivla/NPS-comments.svg";
const imgVivlaLogo = "/images/projects/vivla/logo%20vivla.svg";
const imgCalendarBg = "/images/projects/vivla/bg-calendar.webp";
const imgCalendarCenter = "/images/projects/vivla/calendar-center.png";
const imgVivlaHomePoster = "/images/projects/vivla/vivla-home.jpg";
const videoVivlaHome = "/images/projects/vivla/vivla-home.mp4";
const VIVLA_LUGARES_IMAGES = [
  "/images/projects/vivla/lugares/place_01.jpeg",
  "/images/projects/vivla/lugares/place_02.jpeg",
  "/images/projects/vivla/lugares/place_03.jpeg",
  "/images/projects/vivla/lugares/place_04.jpeg",
  "/images/projects/vivla/lugares/place_05.jpeg",
  "/images/projects/vivla/lugares/place_06.jpeg",
];

const EASE = [0.22, 1, 0.36, 1];

type FloatingPlace = {
  id: number;
  src: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
};

function VideoWithFallback({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(Boolean(entries[0]?.isIntersecting));
      },
      { rootMargin: "20% 0px 20% 0px", threshold: 0.01 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => setVideoReady(true);
    const onError = () => setVideoFailed(true);

    const syncPlayback = () => {
      if (videoFailed) return;
      if (isVisible && document.visibilityState === "visible") {
        video.play().catch(() => undefined);
        return;
      }
      video.pause();
    };

    const onVisibilityChange = () => {
      syncPlayback();
    };

    video.addEventListener("canplaythrough", onCanPlay);
    video.addEventListener("error", onError);
    document.addEventListener("visibilitychange", onVisibilityChange);
    syncPlayback();

    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("error", onError);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [isVisible, videoFailed]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <img
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoReady && !videoFailed ? "opacity-0" : "opacity-100"
        }`}
        src={poster}
      />
      {!videoFailed && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}
    </div>
  );
}

const IMG_PANEL_1 = "https://images.unsplash.com/photo-1657727534685-36b09f84e193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzJTIwbGFwdG9wfGVufDF8fHx8MTc3MzMxMTYyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_PANEL_2 = "https://images.unsplash.com/photo-1759256243437-9c8f7238c42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMHBvb2wlMjB0ZXJyYWNlJTIwc3Vuc2V0fGVufDF8fHx8MTc3MzMxMTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_DATA = "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwY2hhcnRzJTIwZ3JhcGhzJTIwc2NyZWVufGVufDF8fHx8MTc3MzMxMTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HOUSES_1 = "https://images.unsplash.com/photo-1564933170157-3af8ec882299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjby1vd25lcnNoaXAlMjB2YWNhdGlvbiUyMGhvbWUlMjBjb3N0YSUyMGJyYXZhfGVufDF8fHx8MTc3MzMxMTY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const IMG_HOUSES_2 = "/images/projects/vivla/family.jpg";

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
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.vivla.introSubtitle")}
            </LangText>
            <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.vivla.introBody")}
            </LangText>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={2} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.vivla.performanceLabel")}
              </LangText>
              <div className="flex flex-col gap-[8px]">
                <LangText as="p" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.vivla.performanceValue1")}</LangText>
                <LangText as="p" stagger={4} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.vivla.performanceValue2")}</LangText>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={5} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.vivla.platformLabel")}
              </LangText>
              <LangText as="p" stagger={6} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.vivla.platformValue")}
              </LangText>
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
  const panelRef = useRef<HTMLDivElement>(null);
  const panelRectRef = useRef<DOMRect | null>(null);
  const cursorRafRef = useRef<number>(0);
  const rectRafRef = useRef<number>(0);
  const pendingCursorRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [floatingPlaces, setFloatingPlaces] = useState<FloatingPlace[]>([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const timeoutIdsRef = useRef<number[]>([]);
  const spawnStateRef = useRef({
    lastX: 0,
    lastY: 0,
    lastAt: 0,
    imageIndex: 0,
    nextId: 1,
  });

  useEffect(() => {
    return () => {
      timeoutIdsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutIdsRef.current = [];
      if (cursorRafRef.current) {
        cancelAnimationFrame(cursorRafRef.current);
        cursorRafRef.current = 0;
      }
      if (rectRafRef.current) {
        cancelAnimationFrame(rectRafRef.current);
        rectRafRef.current = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!isHovering) return;

    const refreshPanelRect = () => {
      const panel = panelRef.current;
      if (!panel) return;
      panelRectRef.current = panel.getBoundingClientRect();
    };

    const requestRefreshPanelRect = () => {
      if (rectRafRef.current) return;
      rectRafRef.current = requestAnimationFrame(() => {
        rectRafRef.current = 0;
        refreshPanelRect();
      });
    };

    refreshPanelRect();
    window.addEventListener("resize", refreshPanelRect);
    window.addEventListener("scroll", requestRefreshPanelRect, { passive: true });
    return () => {
      window.removeEventListener("resize", refreshPanelRect);
      window.removeEventListener("scroll", requestRefreshPanelRect);
      if (rectRafRef.current) {
        cancelAnimationFrame(rectRafRef.current);
        rectRafRef.current = 0;
      }
    };
  }, [isHovering]);

  const scheduleCursorUpdate = (x: number, y: number) => {
    pendingCursorRef.current = { x, y };
    if (cursorRafRef.current) return;

    cursorRafRef.current = requestAnimationFrame(() => {
      cursorRafRef.current = 0;
      setCursorPosition(pendingCursorRef.current);
    });
  };

  const spawnFloatingPlace = (x: number, y: number, dx: number, dy: number) => {
    const length = Math.hypot(dx, dy) || 1;
    const normX = dx / length;
    const normY = dy / length;
    const drift = 88;
    const jitterX = (Math.random() - 0.5) * 44;
    const jitterY = (Math.random() - 0.5) * 56;
    const id = spawnStateRef.current.nextId;
    const src =
      VIVLA_LUGARES_IMAGES[
        spawnStateRef.current.imageIndex % VIVLA_LUGARES_IMAGES.length
      ];

    spawnStateRef.current.nextId += 1;
    spawnStateRef.current.imageIndex += 1;

    const floater: FloatingPlace = {
      id,
      src,
      x: x - normX * drift + jitterX,
      y: y - normY * drift + jitterY,
      rotation: (Math.random() - 0.5) * 14,
      scale: 0.9 + Math.random() * 0.16,
    };

    setFloatingPlaces((prev) => [...prev.slice(-5), floater]);

    const timeoutId = window.setTimeout(() => {
      setFloatingPlaces((prev) => prev.filter((item) => item.id !== id));
    }, 950);

    timeoutIdsRef.current.push(timeoutId);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;

    const rect = panelRectRef.current ?? panel.getBoundingClientRect();
    panelRectRef.current = rect;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    scheduleCursorUpdate(x, y);

    const now = performance.now();
    const { lastX, lastY, lastAt } = spawnStateRef.current;
    const dx = x - lastX;
    const dy = y - lastY;
    const distance = Math.hypot(dx, dy);
    const elapsed = now - lastAt;

    if (distance > 28 && elapsed > 70) {
      spawnFloatingPlace(x, y, dx, dy);
      spawnStateRef.current.lastX = x;
      spawnStateRef.current.lastY = y;
      spawnStateRef.current.lastAt = now;
    }
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (!panel) return;

    const rect = panel.getBoundingClientRect();
    panelRectRef.current = rect;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const now = performance.now();

    setIsHovering(true);
    scheduleCursorUpdate(x, y);
    spawnStateRef.current.lastX = x;
    spawnStateRef.current.lastY = y;
    spawnStateRef.current.lastAt = now;
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setFloatingPlaces([]);
    panelRectRef.current = null;
  };

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div
            ref={panelRef}
            className="w-full h-[600px] max-lg:h-[420px] max-md:h-[300px] bg-[#f8f9fa] relative overflow-hidden flex items-center justify-center"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 z-0 pointer-events-none">
              <AnimatePresence>
                {floatingPlaces.map((place) => (
                  <motion.div
                    key={place.id}
                    className="absolute w-[180px] h-[124px] max-lg:w-[144px] max-lg:h-[102px] max-md:w-[108px] max-md:h-[76px] rounded-[12px] overflow-hidden shadow-[0_18px_46px_rgba(10,20,40,0.24)]"
                    style={{ left: place.x, top: place.y }}
                    initial={{ opacity: 0, scale: 0.76, y: 20, rotate: place.rotation }}
                    animate={{ opacity: 1, scale: place.scale, y: 0, rotate: place.rotation }}
                    exit={{ opacity: 0, scale: 0.9, y: -12, transition: { duration: 0.24 } }}
                    transition={{ duration: 0.36, ease: EASE }}
                  >
                    <ImageWithFallback
                      alt="VIVLA place"
                      className="w-full h-full object-cover"
                      src={place.src}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <motion.div
              className="absolute w-[220px] h-[220px] max-md:w-[150px] max-md:h-[150px] rounded-full pointer-events-none z-10 bg-[radial-gradient(circle,rgba(25,30,37,0.12)_0%,rgba(25,30,37,0)_72%)]"
              style={{ left: cursorPosition.x - 110, top: cursorPosition.y - 110 }}
              initial={false}
              animate={{ opacity: isHovering ? 1 : 0 }}
              transition={{ duration: 0.2, ease: EASE }}
            />

            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <ImageWithFallback
                alt="VIVLA logo"
                className="block w-auto h-auto max-h-[110px] max-w-[72%] max-md:max-h-[78px] max-md:max-w-[62%]"
                src={imgVivlaLogo}
              />
            </div>
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
              <VideoWithFallback
                src={videoVivlaHome}
                poster={imgVivlaHomePoster}
                alt="VIVLA co-ownership"
              />
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
  const scrollPanelRef = useRef<HTMLDivElement>(null);
  const renderedParallaxRef = useRef(0);
  const [commentsParallaxY, setCommentsParallaxY] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let listenersActive = false;

    const removeRuntimeListeners = () => {
      if (!listenersActive) return;
      listenersActive = false;
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
    };

    const updateParallax = () => {
      const el = scrollPanelRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const isNearViewport = rect.bottom > -viewportH * 0.25 && rect.top < viewportH * 1.25;
      if (!isNearViewport) return;
      const progress = (viewportH - rect.top) / (viewportH + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Extra pronounced upward parallax while preserving the section framing.
      const nextY = -clampedProgress * 185;
      if (Math.abs(nextY - renderedParallaxRef.current) > 0.4) {
        renderedParallaxRef.current = nextY;
        setCommentsParallaxY(nextY);
      }
    };

    const requestParallaxUpdate = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        updateParallax();
      });
    };

    const setSectionActive = (active: boolean) => {
      if (active && !listenersActive) {
        listenersActive = true;
        window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
        window.addEventListener("resize", requestParallaxUpdate);
        requestParallaxUpdate();
        return;
      }

      if (!active) {
        removeRuntimeListeners();
      }
    };

    const section = scrollPanelRef.current;
    let visibilityObserver: IntersectionObserver | null = null;
    if (section) {
      visibilityObserver = new IntersectionObserver(
        (entries) => {
          setSectionActive(Boolean(entries[0]?.isIntersecting));
        },
        { root: null, rootMargin: "20% 0px 20% 0px", threshold: 0 },
      );
      visibilityObserver.observe(section);
    }

    updateParallax();

    return () => {
      visibilityObserver?.disconnect();
      removeRuntimeListeners();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Two side-by-side panels */}
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden">
              <VivlaLocationsGrid />
            </div>
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden">
              <ImageWithFallback alt="VIVLA app" className="absolute inset-0 w-full h-full object-cover" src={IMG_HOUSES_2} />
            </div>
          </div>
          {/* Full-width panel */}
          <div className="w-full h-[740px] max-lg:h-[520px] max-md:h-[400px] bg-[#f5f5f7] relative overflow-hidden">
            <div ref={scrollPanelRef} className="absolute inset-0">
              <ImageWithFallback alt="VIVLA section background" className="absolute inset-0 block w-full h-full object-cover object-center" src={imgVivlaScrollBg} />
              <motion.div
                className="absolute left-1/2 top-[44px] -translate-x-1/2 w-[min(88%,1020px)] max-lg:w-[min(90%,860px)] max-md:w-[min(92%,620px)]"
                style={{ y: commentsParallaxY }}
              >
                <img
                  alt="VIVLA NPS comments"
                  className="w-full h-auto pointer-events-none"
                  src={imgNpsComments}
                />
              </motion.div>
            </div>
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
          <div className="w-full h-[670px] max-lg:h-[470px] max-md:h-[320px] bg-[#f5f5f7] relative overflow-hidden">
            <ImageWithFallback
              alt="VIVLA innovation background"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgCalendarBg}
            />
            <div className="absolute inset-0 flex items-center justify-center p-[20px] max-md:p-[12px]">
              <ImageWithFallback
                alt="VIVLA calendar"
                className="w-[min(62%,620px)] max-lg:w-[min(66%,520px)] max-md:w-[min(74%,360px)] max-h-[72%] max-lg:max-h-[70%] max-md:max-h-[68%] h-auto object-contain"
                src={imgCalendarCenter}
              />
            </div>
          </div>
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