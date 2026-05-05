import { useEffect, useState, useRef } from "react";
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
const imgHero = "/images/projects/navilens/navilens-hero-section.jpg";
// Image placeholders - replace with actual assets in /public/images/
const imgQrCenterFrame = "/images/projects/navilens/qrcenter-marco.jpg";
const imgQrCenter = "/images/projects/navilens/qrcenter.jpg";
const imgStreet = "/images/projects/navilens/NaviLens Section street.jpg";
const qrMaskedSlides = [
  "/images/projects/navilens/masked/01.svg",
  "/images/projects/navilens/masked/02.svg",
  "/images/projects/navilens/masked/03.svg",
];
const imgQrListado = "/images/projects/navilens/NaviLens QR listado.jpg";
const imgLogotipo = "/images/placeholder-gray.svg";
const imgQrCode = "/images/placeholder-gray.svg";
const imgHand = "/images/placeholder-gray.svg";
const imgQrPreview = "/images/placeholder-gray.svg";
const imgMockup = "/images/projects/navilens/Crea tu QR.png";
const imgPersonScanning = "/images/projects/navilens/person-scan.jpg";
const imgNaviScanner = "/images/projects/navilens/Naviscanner.png";
const imgQrDif = "/images/projects/navilens/qrdif.png";
const imgRelatedIDermApp = "/images/placeholder-gray.svg";
const imgRelatedFinsa = "/images/projects/finsa/finsa-bg-hero.jpg";
import svgPaths from "../../imports/svg-7k2kxsrz4w";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type NavilensScrollSubscriber = (scrollTop: number) => void;

const navilensScrollSubscribers = new Set<NavilensScrollSubscriber>();
let navilensScrollListenerAttached = false;
let navilensScrollRaf: number | null = null;

function notifyNavilensScrollSubscribers(scrollTop: number) {
  navilensScrollSubscribers.forEach((subscriber) => subscriber(scrollTop));
}

function onNavilensScroll() {
  if (navilensScrollRaf !== null) return;
  navilensScrollRaf = requestAnimationFrame(() => {
    navilensScrollRaf = null;
    notifyNavilensScrollSubscribers(window.scrollY || document.documentElement.scrollTop);
  });
}

function subscribeToNavilensScroll(subscriber: NavilensScrollSubscriber): () => void {
  navilensScrollSubscribers.add(subscriber);

  if (!navilensScrollListenerAttached && typeof window !== "undefined") {
    navilensScrollListenerAttached = true;
    window.addEventListener("scroll", onNavilensScroll, { passive: true });
  }

  return () => {
    navilensScrollSubscribers.delete(subscriber);
    if (navilensScrollSubscribers.size === 0 && navilensScrollListenerAttached && typeof window !== "undefined") {
      window.removeEventListener("scroll", onNavilensScroll);
      navilensScrollListenerAttached = false;
      if (navilensScrollRaf !== null) {
        cancelAnimationFrame(navilensScrollRaf);
        navilensScrollRaf = null;
      }
    }
  };
}

/* ============================================================
   1. HERO — Full-width image
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-[#d8d8d8]" />
      <img
        alt="NaviLens hero"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgHero}
      />
    </section>
  );
}

/* ============================================================
   2. INTRO — 3-column
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-md:text-[28px] max-md:leading-[36px]">
            NaviLens
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.navilens.introSubtitle")}
            </LangText>
            <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.navilens.introBody")}
            </LangText>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={2} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.navilens.performanceLabel")}
              </LangText>
              <div className="flex flex-col gap-[8px]">
                <LangText as="p" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.navilens.performanceValue1")}</LangText>
                <LangText as="p" stagger={4} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.navilens.performanceValue2")}</LangText>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={5} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.navilens.platformLabel")}
              </LangText>
              <LangText as="p" stagger={6} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.navilens.platformValue")}
              </LangText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. NAVILENS LOGO — Centered SVG logo with gradient
   ============================================================ */
function NaviLensLogoSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] max-lg:py-[32px] max-md:px-[24px] max-md:py-[32px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[600px] max-lg:h-[420px] max-md:h-[300px] bg-[#f8f9fa] relative overflow-hidden flex items-center justify-center">
            <svg className="w-[320px] h-[344px] max-lg:w-[240px] max-lg:h-[258px] max-md:w-[180px] max-md:h-[194px]" fill="none" viewBox="0 0 320 344.186">
              <path d={svgPaths.p3e7b5c00} stroke="url(#navilens_grad)" strokeMiterlimit="10" strokeWidth="21.891" />
              <path d={svgPaths.p4bfeb80} fill="black" />
              <path d={svgPaths.p2fd83c00} fill="black" />
              <path d={svgPaths.p2bc8e100} fill="white" />
              <path d={svgPaths.p31a3a500} fill="black" />
              <path d={svgPaths.p12de8c00} fill="black" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="navilens_grad" x1="32.9157" x2="280.489" y1="175.111" y2="175.111">
                  <stop offset="0" stopColor="#49A9F8" />
                  <stop offset="0.1613" stopColor="#77B8AC" />
                  <stop offset="0.4106" stopColor="#CBD31C" />
                  <stop offset="0.7281" stopColor="#DE833C" />
                  <stop offset="1" stopColor="#F7067E" />
                </linearGradient>
              </defs>
            </svg>
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
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.navilens.visionText")}
            </LangText>
          </div>
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <LangText as="p" stagger={1} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.navilens.challengeTitle")}
              </LangText>
              <LangText as="p" stagger={2} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.navilens.challengeBody")}
              </LangText>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <LangText as="p" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.navilens.workTitle")}
              </LangText>
              <LangText as="p" stagger={4} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.navilens.workBody")}
              </LangText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. TWO PANELS — QR Code + Street view
   ============================================================ */
function QrStreetPanels() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [qrSceneProgress, setQrSceneProgress] = useState(0);
  const lastProgressRef = useRef(0);
  // scrollY exacto donde la animación se completó; null = no completada aún
  const completedScrollYRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = (currentScrollY: number) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
      const maxDistance = (viewportHeight + rect.height) / 2;

      let rawProgress = 1 - Math.min(1, distanceFromCenter / maxDistance);
      rawProgress = Math.max(0, Math.min(1, rawProgress));

      let nextProgress = rawProgress;

      if (completedScrollYRef.current === null) {
        // Animación aún no completada: seguir el progreso raw
        if (rawProgress >= 0.95) {
          // Completada: guardar la posición de scroll exacta
          completedScrollYRef.current = currentScrollY;
          nextProgress = 1;
        }
      } else {
        if (currentScrollY >= completedScrollYRef.current) {
          // Usuario sigue hacia abajo (o en la misma posición): congelado en 2D
          nextProgress = 1;
        } else {
          // Usuario retrocedió por encima de donde se completó: acompañar con scroll
          nextProgress = rawProgress;
          // Si vuelve al inicio, resetear para que pueda completarse de nuevo
          if (rawProgress <= 0.02) {
            completedScrollYRef.current = null;
          }
        }
      }

      if (Math.abs(lastProgressRef.current - nextProgress) > 0.001) {
        lastProgressRef.current = nextProgress;
        setQrSceneProgress(nextProgress);
      }
    };

    const requestUpdate = () => {
      updateProgress(window.scrollY || document.documentElement.scrollTop);
    };

    const unsubscribe = subscribeToNavilensScroll(updateProgress);
    requestUpdate();
    window.addEventListener("resize", requestUpdate);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  // 0 = fuera/parcialmente visible (separado 3D), 1 = completamente visible (2D formado)
  const sceneT = qrSceneProgress * qrSceneProgress * (3 - 2 * qrSceneProgress);
  const separationT = 1 - sceneT;

  const frameRotateX = separationT * 30;
  const frameTranslateY = separationT * 58;
  const frameScale = 1 + separationT * 0.03;

  const qrRotateX = separationT * 16;
  const qrTranslateY = separationT * -112;
  const qrTranslateZ = separationT * 112;
  const qrScale = 1 + separationT * 0.28;

  const frameRotZ = separationT * -38;
  const qrRotZ = separationT * -38;

  return (
    <section className="bg-white w-full" ref={sectionRef}>
      <div className="px-[56px] pt-[56px] pb-[56px] max-md:px-[24px] max-md:pt-[56px] max-md:pb-[32px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            {/* QR Code tag */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] relative overflow-hidden bg-[#f5f5f7] flex items-center justify-center">
              <div
                className="relative w-[320px] h-[320px] max-lg:w-[228px] max-lg:h-[228px] max-md:w-[160px] max-md:h-[160px]"
                style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 32, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 1.05, ease: EASE }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    style={{
                      transform: `translateY(${frameTranslateY}px) rotateX(${frameRotateX}deg) rotateZ(${frameRotZ}deg) scale(${frameScale})`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      alt="Marco QR NaviLens"
                      className="w-full h-full object-contain drop-shadow-[0_28px_40px_rgba(0,0,0,0.12)]"
                      src={imgQrCenterFrame}
                    />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 18, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 1.1, delay: 0.14, ease: EASE }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    style={{
                      transform: `translateY(${qrTranslateY}px) translateZ(${qrTranslateZ}px) rotateX(${qrRotateX}deg) rotateZ(${qrRotZ}deg) scale(${qrScale})`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <img
                      alt="QR NaviLens centrado"
                      className="w-[166px] h-[166px] max-lg:w-[118px] max-lg:h-[118px] max-md:w-[82px] max-md:h-[82px] object-contain drop-shadow-[0_22px_34px_rgba(0,0,0,0.18)]"
                      src={imgQrCenter}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            {/* Street view */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[320px] relative overflow-hidden">
              <img alt="NaviLens street" className="absolute inset-0 w-full h-full object-cover" src={imgStreet} />
            </div>
          </div>
          {/* Interacción inclusiva */}
          <div className="flex justify-end">
            <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.navilens.inclusiveTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.navilens.inclusiveBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. QR PLATFORM — "Crear Código QR" UI mockup
   ============================================================ */
function QrPlatformSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[56px] pb-[100px] max-lg:pt-[40px] max-lg:pb-[80px] max-md:px-[16px] max-md:pt-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Platform UI mockup */}
          <div className="w-full h-[800px] max-lg:h-[560px] max-md:h-[300px] relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] to-[#f5f5f7] flex items-center justify-center">
            {/* Platform panel — proportional scaling via transform */}
            <div className="relative w-[821px] h-[540px] max-lg:scale-[0.73] max-md:scale-100 max-md:w-[340px] max-md:h-[224px] origin-center">
              <div className="absolute inset-0 rounded-[11.4px] shadow-[0px_4px_32px_rgba(0,0,0,0.08)] overflow-hidden">
                <img alt="Crea tu QR" className="absolute inset-0 w-full h-full object-cover max-md:object-contain" src={imgMockup} />
              </div>
            </div>
          </div>
          {/* Funcionamiento text */}
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.navilens.functionTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.navilens.functionBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. QR MARCO + LISTADO — Two panels
   ============================================================ */
function QrPanelsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % qrMaskedSlides.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[56px] pb-[56px] max-md:px-[24px] max-md:pt-[56px] max-md:pb-[56px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            {/* QR Marco */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[560px] max-md:py-[56px] bg-[#f5f5f7] relative overflow-hidden flex items-center justify-center">
              <div className="relative w-[360px] h-[360px] max-lg:w-[252px] max-lg:h-[252px] max-md:w-[186px] max-md:h-[186px]">
                {qrMaskedSlides.map((slideSrc, index) => (
                  <motion.img
                    key={slideSrc}
                    alt={`NaviLens masked slide ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-contain object-center"
                    src={slideSrc}
                    initial={false}
                    animate={{ opacity: index === activeSlide ? 1 : 0 }}
                    transition={{ duration: 0.9, ease: EASE }}
                  />
                ))}
              </div>
            </div>
            {/* QR Listado - Platform listing screen */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[560px] bg-[#f5f5f7] relative overflow-hidden">
              <img alt="NaviLens QR listado" className="absolute inset-0 w-full h-full object-cover object-left-top" src={imgQrListado} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. HAND + PHONE — Hand holding phone scanning QR
   ============================================================ */
function HandAppSection() {
  const { t } = useTranslation();
  const scannerAreaRef = useRef<HTMLDivElement>(null);
  const targetParallaxRef = useRef(0);
  const currentParallaxRef = useRef(0);
  const animRafRef = useRef(0);
  const [scannerParallaxY, setScannerParallaxY] = useState(0);

  useEffect(() => {
    let resizeRafId = 0;

    const getMaxLift = () => {
      if (window.innerWidth <= 768) return 56;
      if (window.innerWidth <= 1200) return 82;
      return 108;
    };

    const animateToTarget = () => {
      animRafRef.current = 0;
      const current = currentParallaxRef.current;
      const target = targetParallaxRef.current;
      const next = current + (target - current) * 0.28;

      currentParallaxRef.current = next;
      setScannerParallaxY(next);

      if (Math.abs(target - next) > 0.1) {
        animRafRef.current = requestAnimationFrame(animateToTarget);
      }
    };

    const requestAnim = () => {
      if (animRafRef.current) return;
      animRafRef.current = requestAnimationFrame(animateToTarget);
    };

    const updateParallax = () => {
      const area = scannerAreaRef.current;
      if (!area) return;

      const rect = area.getBoundingClientRect();
      const isNearViewport = rect.bottom > -200 && rect.top < window.innerHeight + 200;

      if (!isNearViewport) {
        targetParallaxRef.current = 0;
        requestAnim();
        return;
      }

      // Progressive inverse movement across the visible block area.
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const easedProgress = 1 - Math.pow(1 - clampedProgress, 1.2);
      const maxLift = getMaxLift();
      const startOffset = maxLift * 0.35;
      const travel = maxLift;
      const offset = startOffset - travel * easedProgress;

      targetParallaxRef.current = Math.max(-maxLift, Math.min(startOffset, offset));
      requestAnim();
    };

    const requestResizeUpdate = () => {
      if (resizeRafId) return;
      resizeRafId = requestAnimationFrame(() => {
        resizeRafId = 0;
        updateParallax();
      });
    };

    const unsubscribe = subscribeToNavilensScroll(updateParallax);
    updateParallax();
    window.addEventListener("resize", requestResizeUpdate);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", requestResizeUpdate);
      if (resizeRafId) cancelAnimationFrame(resizeRafId);
      if (animRafRef.current) cancelAnimationFrame(animRafRef.current);
    };
  }, []);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] pb-[56px] max-md:px-[24px] max-md:pt-[24px] max-md:pb-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px]">
          {/* Hand + phone panel */}
          <div ref={scannerAreaRef} className="w-full h-[740px] max-lg:h-[520px] max-md:h-[380px] bg-[#f5f5f7] relative overflow-hidden">
            <div
              className="absolute left-1/2 bottom-[-96px] max-lg:bottom-[-72px] max-md:bottom-[-40px] w-[1020px] h-[744px] max-lg:w-[730px] max-lg:h-[532px] max-md:w-[390px] max-md:h-[320px]"
              style={{ transform: "translateX(-50%)" }}
            >
              <div className="absolute left-1/2 top-[-92px] max-lg:top-[-74px] max-md:top-[-46px] w-[260px] h-[260px] max-lg:w-[200px] max-lg:h-[200px] max-md:w-[120px] max-md:h-[120px] z-10" style={{ transform: "translateX(calc(-50% + 18px))" }}>
                <img alt="QR escaneado" className="w-full h-full object-contain opacity-85 blur-[1.5px]" src={imgQrDif} />
              </div>
              <div className="w-full h-full relative z-20 will-change-transform" style={{ transform: `translateY(${scannerParallaxY}px)` }}>
                <img alt="Usuario escaneando con NaviLens" className="w-full h-full object-contain object-bottom" src={imgNaviScanner} />
              </div>
            </div>
          </div>
          {/* La importancia de la accesibilidad */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
              {t("pages.navilens.accessibilityTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.navilens.accessibilityBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. PERSON SCANNING — Full-width image + text
   ============================================================ */
function PersonScanningSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[72px] pb-[100px] max-lg:pt-[56px] max-lg:pb-[80px] max-md:px-[24px] max-md:pt-[36px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Full-width image */}
          <div className="w-full h-[670px] max-lg:h-[470px] max-md:h-[320px] relative overflow-hidden">
            <img
              alt="Person scanning NaviLens code"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgPersonScanning}
            />
          </div>
          {/* Accesibilidad e innovación */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
              {t("pages.navilens.innovationTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.navilens.innovationBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. RELATED PROJECTS
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.navilens.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="idermapp"
              image={imgRelatedIDermApp}
              tag={t("work.projects.idermapp.tag")}
              name={t("work.projects.idermapp.name")}
              description={t("work.projects.idermapp.description")}
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
export function ProjectDetailNavilens() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <NaviLensLogoSection />
      </RevealAfterTransition>
      <ScrollRevealSection><VisionSection /></ScrollRevealSection>
      <ScrollRevealSection><QrStreetPanels /></ScrollRevealSection>
      <ScrollRevealSection><QrPlatformSection /></ScrollRevealSection>
      <ScrollRevealSection><QrPanelsSection /></ScrollRevealSection>
      <ScrollRevealSection><HandAppSection /></ScrollRevealSection>
      <ScrollRevealSection><PersonScanningSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}