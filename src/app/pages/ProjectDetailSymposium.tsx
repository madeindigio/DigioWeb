import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { DiagonalFacesGrid } from "../components/DiagonalFacesGrid";

/* ─── Video with image fallback ─── */
function VideoWithFallback({
  src,
  poster,
  alt,
}: {
  src: string;
  poster: string;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      video.play().then(() => setVideoReady(true)).catch(() => setVideoFailed(true));
    };
    const onError = () => setVideoFailed(true);

    video.addEventListener("canplaythrough", onCanPlay);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("canplaythrough", onCanPlay);
      video.removeEventListener("error", onError);
    };
  }, []);

  return (
    <>
      {/* Fallback image — always rendered, hidden once video plays */}
      <img
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoReady && !videoFailed ? "opacity-0" : "opacity-100"
        }`}
        src={poster}
      />
      {/* Video — hidden until ready */}
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
          preload="auto"
        />
      )}
    </>
  );
}

/* ─── Figma Assets ─── */
import imgFaces1 from "figma:asset/8951edeb8a88c0f2c72219029fc8517b4f3c1aad.png";
import imgVideoSection from "figma:asset/466288b3bf160615a37556f78a49b1c2916e3116.png";
import imgUmuScreenPortada from "figma:asset/703843218cd8ffc6ec7f6b8dbf51eaa41fd78e98.png";
import imgIPhone from "figma:asset/6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";
import imgRelatedIdermapp from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelatedIdermapp2 from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelatedFinsa from "figma:asset/9df4b0260f9f37c4401ad84e556ad9e573c8702b.png";

const EASE = [0.22, 1, 0.36, 1];
const VIDEO_URL = "https://digio.es/sites/default/files/2024-04/Symposium-header-2.mp4";
const BIG_SYM_IMAGE_URL = "/images/symposium/Big%20SYM%20IMG%20section.jpg";
const LEFT_SYM_IMAGE_URL = "/images/symposium/Left%20Sym.jpg";
const RIGHT_SYM_IMAGE_URL = "/images/symposium/Right%20Sym.jpg";
const DS_SECTION_IMAGE_URL = "/images/symposium/DS%20Section.jpg";
const MOBILE_SECTION_LEFT_IMAGE_URL = "/images/symposium/Mobile%20section%20SYM%20left.jpg";
const MOBILE_SECTION_RIGHT_IMAGE_URL = "/images/symposium/Mobile%20section%20SYM%20right.jpg";
const UNIVERSITY_LOGOS = [
  "/images/symposium/universidades/1-complutense%20madrid.svg",
  "/images/symposium/universidades/10-rey-juanc%20arlos.svg",
  "/images/symposium/universidades/2-upf.svg",
  "/images/symposium/universidades/24-uni-valencia.svg",
  "/images/symposium/universidades/25-uoc.svg",
  "/images/symposium/universidades/26-uex.svg",
  "/images/symposium/universidades/28-uni-girona.svg",
  "/images/symposium/universidades/3-uam.svg",
  "/images/symposium/universidades/30-uni-pablo-de-olavide.svg",
  "/images/symposium/universidades/4-uni-salamanca.svg",
  "/images/symposium/universidades/9-politecnica-madrid.svg",
  "/images/symposium/universidades/COMILLAS-1.png",
  "/images/symposium/universidades/UC3M-1.png",
  "/images/symposium/universidades/UCA.png",
  "/images/symposium/universidades/UCO.png",
  "/images/symposium/universidades/UI1.png",
  "/images/symposium/universidades/UMU.png",
  "/images/symposium/universidades/UPSA.png",
  "/images/symposium/universidades/US.png",
];

function parseDisplayValue(value: string) {
  const numericMatch = value.match(/-?\d+(?:[.,]\d+)?/);
  if (!numericMatch) {
    return {
      prefix: "",
      suffix: "",
      target: 0,
      decimals: 0,
      hasNumericValue: false,
    };
  }

  const rawNumericPart = numericMatch[0];
  const normalizedNumber = rawNumericPart.replace(",", ".");
  const target = Number(normalizedNumber);
  const decimals = normalizedNumber.includes(".")
    ? normalizedNumber.split(".")[1].length
    : 0;

  return {
    prefix: value.slice(0, numericMatch.index ?? 0),
    suffix: value.slice((numericMatch.index ?? 0) + rawNumericPart.length),
    target,
    decimals,
    hasNumericValue: true,
  };
}

function formatCountValue(current: number, decimals: number) {
  if (decimals > 0) return current.toFixed(decimals);
  return Math.round(current).toString();
}

/* ─── Animation helpers ─── */

/* ============================================================
   1. HERO — Video background, full width, fixed height
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-[#d8d8d8]" />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={VIDEO_URL}
      />
    </section>
  );
}

/* ============================================================
   2. INTRO — 3-column: name | subtitle + body | performance
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          {/* Col 1: Name */}
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
            Symposium
          </p>
          {/* Col 2: Subtitle + body */}
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.symposium.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.symposium.introBody")}
            </p>
          </div>
          {/* Col 3: Performance + Platform */}
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.symposium.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {(t("pages.symposium.performanceItems", { returnObjects: true }) as string[]).map((item: string) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.symposium.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.symposium.platformValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. FACES — Grid of faces overlaid with collage aesthetic
   ============================================================ */
function FacesSection() {
  return (
    <section className="bg-[#f8f9fa] w-full h-[744px] max-lg:h-[500px] max-md:h-[360px] overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <DiagonalFacesGrid />
      </div>
    </section>
  );
}

/* ============================================================
   4. REVOLUTION TEXT — "Revolucionando la forma..."
   ============================================================ */
function RevolutionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[700px] max-lg:text-[36px] max-md:text-[28px] whitespace-pre-line">
            {t("pages.symposium.revolutionTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[500px]">
            {t("pages.symposium.revolutionBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. TWO-COLUMN: Video + Components/DS
   ============================================================ */
function VideoAndDsSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px] pb-[100px] max-lg:pb-[80px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Two image columns */}
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            {/* Video / screenshot section */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[300px] bg-[#f8f9fa] relative overflow-hidden">
              <VideoWithFallback
                src="https://digio.es/sites/default/files/2024-06/SYM%20Caso%20Digio%20-%20Compressed.mp4"
                poster={imgVideoSection}
                alt="Symposium video"
              />
            </div>
            {/* Components / DS section */}
            <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[300px] bg-[#f8f9fa] relative overflow-hidden">
              <img
                alt="Symposium components"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={DS_SECTION_IMAGE_URL}
              />
            </div>
          </div>
          {/* Value text — right-aligned */}
          <div className="flex justify-end">
            <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.symposium.valueTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.symposium.valueBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. TWO-COLUMN: Agenda UI + Event creation page
   ============================================================ */
function PlatformSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px] pb-[100px] max-lg:pb-[80px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Two panels */}
          <div className="flex gap-[40px] h-[545px] max-lg:h-[400px] max-md:h-auto max-md:flex-col max-md:gap-[24px]">
            {/* Agenda UI mockup */}
            <div className="flex-1 bg-[#f8f9fa] relative overflow-hidden max-md:h-[300px]">
              <img
                alt="Symposium programa agenda"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={LEFT_SYM_IMAGE_URL}
              />
            </div>
            {/* Event creation / mobile section */}
            <div className="flex-1 bg-[#f8f9fa] relative overflow-hidden max-md:h-[300px]">
              <img
                alt="Symposium event creation"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={RIGHT_SYM_IMAGE_URL}
              />
            </div>
          </div>
          {/* Text — right-aligned */}
          <div className="flex justify-end">
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full">
              {t("pages.symposium.platformBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. BIG IMAGE — Full-width panoramic
   ============================================================ */
function BigImageSection() {
  return (
    <section className="w-full h-[900px] max-lg:h-[600px] max-md:h-[400px] overflow-hidden relative mb-[100px] max-lg:mb-[80px] max-md:mb-[48px]">
      <img
        alt="Symposium overview"
        className="absolute inset-0 w-full h-full object-cover"
        src={BIG_SYM_IMAGE_URL}
      />
    </section>
  );
}

/* ============================================================
   8. UX Section — "Mejorando la experiencia de usuario final"
   ============================================================ */
function UxSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Text row */}
          <div className="flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px] shrink-0 whitespace-pre-line">
              {t("pages.symposium.uxTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
              {t("pages.symposium.uxBody")}
            </p>
          </div>
          {/* Device mockups */}
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            {/* App icon mockup */}
            <div className="flex-1 h-[600px] max-lg:h-[450px] max-md:h-[350px] bg-[#f8f9fa] relative overflow-hidden">
              <img
                alt="Symposium app"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={MOBILE_SECTION_LEFT_IMAGE_URL}
              />
            </div>
            {/* iPhone mockup */}
            <div className="flex-1 h-[600px] max-lg:h-[450px] max-md:h-[350px] bg-[#f8f9fa] relative overflow-hidden">
              <img
                alt="Symposium mobile QR inscription"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={MOBILE_SECTION_RIGHT_IMAGE_URL}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. STATS — "Expandiendo horizontes" + metrics
   ============================================================ */
function StatCard({ value, label, showLogoHover = false }: { value: string; label: string; showLogoHover?: boolean }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasAnimatedRef = useRef(false);
  const logoTrack = useMemo(() => [...UNIVERSITY_LOGOS, ...UNIVERSITY_LOGOS], []);

  useEffect(() => {
    if (!hasEnteredViewport || hasAnimatedRef.current) return;

    const parsed = parseDisplayValue(value);
    if (!parsed.hasNumericValue) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    hasAnimatedRef.current = true;

    const durationMs = 1100;
    const startValue = parsed.target >= 10 ? 0 : Math.max(parsed.target - 3, 0);
    const startTime = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (parsed.target - startValue) * eased;

      setDisplayValue(`${parsed.prefix}${formatCountValue(current, parsed.decimals)}${parsed.suffix}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasEnteredViewport, value]);

  return (
    <motion.div
      className="group relative bg-[#f8f9fa] w-full flex flex-col items-center justify-center py-[56px] max-md:py-[40px] overflow-hidden"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: EASE }}
      onViewportEnter={() => setHasEnteredViewport(true)}
      onMouseEnter={() => showLogoHover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-[#f8f9fa]/90" />
        <div className="absolute inset-0 flex flex-col justify-between py-[26px] max-md:py-[18px]">
          <div className="relative h-[52px] max-md:h-[40px] overflow-hidden">
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-[34px] w-max pr-[34px]"
              animate={isHovered ? { x: ["-50%", "0%"] } : { x: "-50%" }}
              transition={
                isHovered
                  ? { duration: 34, ease: "linear", repeat: Infinity }
                  : { duration: 0.5, ease: "easeOut" }
              }
            >
              {logoTrack.map((logo, index) => (
                <img
                  key={`logo-top-${index}`}
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="h-[24px] max-md:h-[18px] w-auto object-contain grayscale opacity-20"
                  draggable={false}
                />
              ))}
            </motion.div>
          </div>

          <div className="relative h-[52px] max-md:h-[40px] overflow-hidden">
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-[34px] w-max pr-[34px]"
              animate={isHovered ? { x: ["0%", "-50%"] } : { x: "0%" }}
              transition={
                isHovered
                  ? { duration: 30, ease: "linear", repeat: Infinity }
                  : { duration: 0.5, ease: "easeOut" }
              }
            >
              {logoTrack.map((logo, index) => (
                <img
                  key={`logo-middle-${index}`}
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="h-[24px] max-md:h-[18px] w-auto object-contain grayscale opacity-20"
                  draggable={false}
                />
              ))}
            </motion.div>
          </div>

          <div className="relative h-[52px] max-md:h-[40px] overflow-hidden">
            <motion.div
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-[34px] w-max pr-[34px]"
              animate={isHovered ? { x: ["-50%", "0%"] } : { x: "-50%" }}
              transition={
                isHovered
                  ? { duration: 36, ease: "linear", repeat: Infinity }
                  : { duration: 0.5, ease: "easeOut" }
              }
            >
              {logoTrack.map((logo, index) => (
                <img
                  key={`logo-bottom-${index}`}
                  src={logo}
                  alt=""
                  aria-hidden="true"
                  className="h-[24px] max-md:h-[18px] w-auto object-contain grayscale opacity-20"
                  draggable={false}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <p className="relative z-10 font-['GT_Ultra_Median',sans-serif] text-black text-[100px] tracking-[-3px] leading-[0.9] max-lg:text-[72px] max-md:text-[56px] transition-all duration-500 group-hover:[text-shadow:0_10px_26px_rgba(25,30,37,0.20)]">
        {displayValue}
      </p>
      <p className="relative z-10 font-['Manrope',sans-serif] text-black text-[16px] leading-[normal] text-center w-[250px] max-md:w-[200px] mt-[32px] transition-colors duration-500">
        {label}
      </p>
    </motion.div>
  );
}

/* ── StatCardEvents: floating pills cloud on hover ── */
type PillPlane = "far" | "mid" | "near";
const PILL_PLANE_STYLES: Record<PillPlane, { blur: string; opacity: number; fontSize: string }> = {
  far:  { blur: "2.5px", opacity: 0.13, fontSize: "12px" },
  mid:  { blur: "1px",   opacity: 0.22, fontSize: "13px" },
  near: { blur: "0px",   opacity: 0.34, fontSize: "14px" },
};
const EVENT_PILLS: {
  label: string; top: string; left: string; plane: PillPlane;
  duration: number; delay: number; ampY: number; ampX: number;
}[] = [
  { label: "Congresos",      top: "11%",  left: "8%",  plane: "far",  duration: 7.2, delay: 0,   ampY: 10, ampX: 5 },
  { label: "Webinars",       top: "21%",  left: "63%", plane: "near", duration: 5.8, delay: 0.4, ampY: 7,  ampX: 4 },
  { label: "Cursos",         top: "38%",  left: "28%", plane: "mid",  duration: 6.5, delay: 1.2, ampY: 9,  ampX: 6 },
  { label: "Talleres",       top: "55%",  left: "72%", plane: "near", duration: 6.0, delay: 0.8, ampY: 8,  ampX: 3 },
  { label: "Ponencias",      top: "70%",  left: "14%", plane: "mid",  duration: 7.8, delay: 0.2, ampY: 11, ampX: 7 },
  { label: "Seminarios",     top: "82%",  left: "56%", plane: "far",  duration: 5.5, delay: 1.6, ampY: 6,  ampX: 5 },
  { label: "Jornadas",       top: "8%",   left: "79%", plane: "mid",  duration: 6.9, delay: 0.6, ampY: 9,  ampX: 4 },
  { label: "Simposios",      top: "47%",  left: "4%",  plane: "far",  duration: 7.4, delay: 1.0, ampY: 12, ampX: 6 },
  { label: "Conferencias",   top: "64%",  left: "41%", plane: "near", duration: 5.3, delay: 1.8, ampY: 7,  ampX: 3 },
  { label: "Workshops",      top: "29%",  left: "86%", plane: "far",  duration: 8.0, delay: 0.3, ampY: 10, ampX: 8 },
  { label: "Mesas redondas", top: "88%",  left: "26%", plane: "near", duration: 6.3, delay: 1.4, ampY: 8,  ampX: 5 },
  { label: "Hackathons",     top: "17%",  left: "44%", plane: "mid",  duration: 7.1, delay: 0.9, ampY: 10, ampX: 6 },
  { label: "Cursos online",  top: "74%",  left: "83%", plane: "far",  duration: 6.7, delay: 2.0, ampY: 9,  ampX: 4 },
  { label: "Formación",      top: "41%",  left: "51%", plane: "near", duration: 5.7, delay: 0.5, ampY: 6,  ampX: 3 },
  { label: "Networking",     top: "93%",  left: "67%", plane: "mid",  duration: 7.5, delay: 1.3, ampY: 11, ampX: 7 },
  { label: "Coloquios",      top: "5%",   left: "33%", plane: "far",  duration: 6.8, delay: 0.7, ampY: 8,  ampX: 5 },
  /* — extra pills para cubrir mejor el espacio — */
  { label: "Actos académicos", top: "32%", left: "91%", plane: "far",  duration: 7.6, delay: 1.1, ampY: 9,  ampX: 5 },
  { label: "Recitales",       top: "60%",  left: "58%", plane: "mid",  duration: 6.2, delay: 0.3, ampY: 8,  ampX: 6 },
  { label: "Inauguraciones",  top: "15%",  left: "22%", plane: "near", duration: 5.9, delay: 1.7, ampY: 7,  ampX: 4 },
  { label: "Premiaciones",    top: "78%",  left: "38%", plane: "far",  duration: 7.9, delay: 0.6, ampY: 10, ampX: 5 },
  { label: "Foros",           top: "46%",  left: "74%", plane: "near", duration: 5.4, delay: 2.2, ampY: 6,  ampX: 3 },
  { label: "Simposios UX",    top: "25%",  left: "7%",  plane: "mid",  duration: 6.4, delay: 1.5, ampY: 9,  ampX: 7 },
  { label: "Concursos",       top: "87%",  left: "82%", plane: "far",  duration: 7.3, delay: 0.9, ampY: 11, ampX: 6 },
  { label: "Exposiciones",    top: "52%",  left: "19%", plane: "near", duration: 5.6, delay: 0.2, ampY: 7,  ampX: 4 },
  { label: "Debates",         top: "3%",   left: "57%", plane: "mid",  duration: 8.1, delay: 1.2, ampY: 10, ampX: 8 },
  { label: "Presentaciones",  top: "67%",  left: "92%", plane: "far",  duration: 6.6, delay: 0.4, ampY: 8,  ampX: 5 },
  { label: "Encuentros",      top: "96%",  left: "11%", plane: "near", duration: 5.2, delay: 1.9, ampY: 6,  ampX: 3 },
  { label: "Ferias",          top: "34%",  left: "46%", plane: "far",  duration: 7.0, delay: 0.8, ampY: 9,  ampX: 6 },
];

function StatCardEvents({ value, label }: { value: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!hasEnteredViewport || hasAnimatedRef.current) return;
    const parsed = parseDisplayValue(value);
    if (!parsed.hasNumericValue) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }
    hasAnimatedRef.current = true;
    const durationMs = 1100;
    const startValue = parsed.target >= 10 ? 0 : Math.max(parsed.target - 3, 0);
    const startTime = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (parsed.target - startValue) * eased;
      setDisplayValue(`${parsed.prefix}${formatCountValue(current, parsed.decimals)}${parsed.suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, [hasEnteredViewport, value]);

  return (
    <motion.div
      className="relative bg-[#f8f9fa] w-full flex flex-col items-center justify-center py-[56px] max-md:py-[40px] overflow-hidden"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: EASE }}
      onViewportEnter={() => setHasEnteredViewport(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pills cloud — far plane (most blurred, rendered first so it's behind) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0, zIndex: 1 }}
      >
        {EVENT_PILLS.filter(p => p.plane === "far").map((pill, i) => {
          const ps = PILL_PLANE_STYLES.far;
          return (
            <motion.span
              key={`far-${i}`}
              className="absolute whitespace-nowrap rounded-full border border-black font-['Manrope',sans-serif] font-medium text-black select-none"
              style={{
                top: pill.top, left: pill.left,
                fontSize: ps.fontSize, opacity: ps.opacity,
                filter: `blur(${ps.blur})`,
                padding: "3px 10px",
                transform: "translate(-50%, -50%)",
              }}
              animate={isHovered
                ? { y: [0, -pill.ampY, pill.ampY * 0.4, -pill.ampY * 0.65, 0], x: [0, pill.ampX * 0.5, -pill.ampX, pill.ampX * 0.3, 0] }
                : { y: 0, x: 0 }
              }
              transition={isHovered
                ? { duration: pill.duration, delay: pill.delay, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.4, ease: "easeOut" }
              }
            >
              {pill.label}
            </motion.span>
          );
        })}
      </div>

      {/* Pills cloud — mid plane */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0, zIndex: 2 }}
      >
        {EVENT_PILLS.filter(p => p.plane === "mid").map((pill, i) => {
          const ps = PILL_PLANE_STYLES.mid;
          return (
            <motion.span
              key={`mid-${i}`}
              className="absolute whitespace-nowrap rounded-full border border-black font-['Manrope',sans-serif] font-medium text-black select-none"
              style={{
                top: pill.top, left: pill.left,
                fontSize: ps.fontSize, opacity: ps.opacity,
                filter: `blur(${ps.blur})`,
                padding: "4px 12px",
                transform: "translate(-50%, -50%)",
              }}
              animate={isHovered
                ? { y: [0, -pill.ampY, pill.ampY * 0.45, -pill.ampY * 0.6, 0], x: [0, -pill.ampX * 0.4, pill.ampX, -pill.ampX * 0.25, 0] }
                : { y: 0, x: 0 }
              }
              transition={isHovered
                ? { duration: pill.duration, delay: pill.delay, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.4, ease: "easeOut" }
              }
            >
              {pill.label}
            </motion.span>
          );
        })}
      </div>

      {/* Pills cloud — near plane (sharpest, highest opacity) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0, zIndex: 3 }}
      >
        {EVENT_PILLS.filter(p => p.plane === "near").map((pill, i) => {
          const ps = PILL_PLANE_STYLES.near;
          return (
            <motion.span
              key={`near-${i}`}
              className="absolute whitespace-nowrap rounded-full border border-black font-['Manrope',sans-serif] font-semibold text-black select-none"
              style={{
                top: pill.top, left: pill.left,
                fontSize: ps.fontSize, opacity: ps.opacity,
                filter: `blur(${ps.blur})`,
                padding: "4px 13px",
                transform: "translate(-50%, -50%)",
              }}
              animate={isHovered
                ? { y: [0, -pill.ampY, pill.ampY * 0.35, -pill.ampY * 0.7, 0], x: [0, pill.ampX * 0.6, -pill.ampX * 0.8, pill.ampX * 0.2, 0] }
                : { y: 0, x: 0 }
              }
              transition={isHovered
                ? { duration: pill.duration, delay: pill.delay, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.4, ease: "easeOut" }
              }
            >
              {pill.label}
            </motion.span>
          );
        })}
      </div>

      {/* subtle frosted tint so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0, background: "rgba(248,249,250,0.72)", zIndex: 4 }}
      />

      {/* Main text — always on top */}
      <p
        className="relative font-['GT_Ultra_Median',sans-serif] text-black text-[100px] tracking-[-3px] leading-[0.9] max-lg:text-[72px] max-md:text-[56px] transition-all duration-500"
        style={{ zIndex: 10, textShadow: isHovered ? "0 8px 24px rgba(25,30,37,0.16)" : "none" }}
      >
        {displayValue}
      </p>
      <p
        className="relative font-['Manrope',sans-serif] text-black text-[16px] leading-[normal] text-center w-[250px] max-md:w-[200px] mt-[32px] transition-all duration-500"
        style={{ zIndex: 10 }}
      >
        {label}
      </p>
    </motion.div>
  );
}

/* ── StatCardBubbles: rising user-bubble cloud on hover ── */
const BUBBLE_COLOR   = "rgba(113, 113, 130, 0.12)";
const BUBBLE_BORDER  = "rgba(113, 113, 130, 0.22)";
const BUBBLE_ICON_COLOR = "rgba(113, 113, 130, 0.52)";

const BUBBLE_DEFS: {
  id: number; left: string; size: number; duration: number; delay: number;
}[] = [
  { id:  0, left:  "6%", size: 40, duration: 5.2, delay: 0.0 },
  { id:  1, left: "19%", size: 28, duration: 4.8, delay: 0.7 },
  { id:  2, left: "34%", size: 52, duration: 6.1, delay: 1.4 },
  { id:  3, left: "51%", size: 34, duration: 5.7, delay: 0.3 },
  { id:  4, left: "67%", size: 46, duration: 4.5, delay: 2.0 },
  { id:  5, left: "83%", size: 24, duration: 5.9, delay: 1.1 },
  { id:  6, left: "13%", size: 58, duration: 6.8, delay: 0.5 },
  { id:  7, left: "43%", size: 30, duration: 5.3, delay: 1.8 },
  { id:  8, left: "59%", size: 44, duration: 4.9, delay: 0.4 },
  { id:  9, left: "75%", size: 38, duration: 5.5, delay: 2.5 },
  { id: 10, left: "28%", size: 50, duration: 6.3, delay: 1.0 },
  { id: 11, left: "91%", size: 26, duration: 4.7, delay: 1.3 },
  { id: 12, left:  "4%", size: 36, duration: 5.8, delay: 3.1 },
  { id: 13, left: "50%", size: 32, duration: 6.0, delay: 0.6 },
  { id: 14, left: "72%", size: 54, duration: 5.1, delay: 2.2 },
  { id: 15, left: "22%", size: 42, duration: 4.6, delay: 1.6 },
  { id: 16, left: "80%", size: 48, duration: 6.5, delay: 0.2 },
  { id: 17, left: "38%", size: 22, duration: 5.4, delay: 2.7 },
  { id: 18, left: "62%", size: 60, duration: 7.0, delay: 0.9 },
  { id: 19, left:  "8%", size: 20, duration: 4.3, delay: 3.6 },
];

function UserSilhouette({ size }: { size: number }) {
  return (
    <svg
      width={Math.round(size * 0.55)}
      height={Math.round(size * 0.55)}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="7.5" r="3.5" fill={BUBBLE_ICON_COLOR} />
      <path
        d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke={BUBBLE_ICON_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function StatCardBubbles({ value, label }: { value: string; label: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!hasEnteredViewport || hasAnimatedRef.current) return;
    const parsed = parseDisplayValue(value);
    if (!parsed.hasNumericValue) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }
    hasAnimatedRef.current = true;
    const durationMs = 1100;
    const startValue = parsed.target >= 10 ? 0 : Math.max(parsed.target - 3, 0);
    const startTime = performance.now();
    let rafId = 0;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (parsed.target - startValue) * eased;
      setDisplayValue(`${parsed.prefix}${formatCountValue(current, parsed.decimals)}${parsed.suffix}`);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, [hasEnteredViewport, value]);

  return (
    <motion.div
      className="relative bg-[#f8f9fa] w-full flex flex-col items-center justify-center py-[56px] max-md:py-[40px] overflow-hidden"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: EASE }}
      onViewportEnter={() => setHasEnteredViewport(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Bubble layer ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.5s ease", zIndex: 1 }}
      >
        {BUBBLE_DEFS.map((b) => (
          <motion.div
            key={b.id}
            className="absolute rounded-full flex items-center justify-center"
            style={{
              left: b.left,
              bottom: -b.size - 4,
              width: b.size,
              height: b.size,
              background: BUBBLE_COLOR,
              border: `1px solid ${BUBBLE_BORDER}`,
              transform: "translateX(-50%)",
            }}
            animate={{ y: [0, -(420 + b.size)] }}
            transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "linear" }}
          >
            {b.size >= 28 && <UserSilhouette size={b.size} />}
          </motion.div>
        ))}
      </div>

      {/* ── Main text ── */}
      <p
        className="relative font-['GT_Ultra_Median',sans-serif] text-black text-[100px] tracking-[-3px] leading-[0.9] max-lg:text-[72px] max-md:text-[56px]"
        style={{ zIndex: 10 }}
      >
        {displayValue}
      </p>
      <p
        className="relative font-['Manrope',sans-serif] text-black text-[16px] leading-[normal] text-center w-[250px] max-md:w-[200px] mt-[32px]"
        style={{ zIndex: 10 }}
      >
        {label}
      </p>
    </motion.div>
  );
}

const SLIDER_UNIVERSITIES = [
  { image: "https://images.unsplash.com/photo-1760131556605-7f2e63d00385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMzYzODA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { image: "https://images.unsplash.com/photo-1760121788536-9797394e210e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZSUyMGhhbGwlMjBhdWRpdG9yaXVtfGVufDF8fHx8MTc3MzQwNzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { image: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzczMjg4OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { image: "https://images.unsplash.com/photo-1738949538943-e54722a44ffc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255fGVufDF8fHx8MTc3MzM2NDU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { image: "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzM0MDczNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { image: "https://images.unsplash.com/photo-1769699369445-263a7a365df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzMzMzUyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

/* ── Drag slider hook ── */
function useDragSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rafId = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = track.scrollLeft;
    velocity.current = 0;
    lastX.current = e.clientX;
    lastTime.current = Date.now();
    track.style.cursor = "grabbing";
    track.style.scrollBehavior = "auto";
    track.setPointerCapture(e.pointerId);
    cancelAnimationFrame(rafId.current);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const now = Date.now();
    const dt = now - lastTime.current;
    const dx = e.clientX - lastX.current;
    if (dt > 0) velocity.current = dx / dt;
    lastX.current = e.clientX;
    lastTime.current = now;
    const walk = e.clientX - startX.current;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    trackRef.current.releasePointerCapture(e.pointerId);

    // Inertia
    let v = velocity.current * 15; // amplify
    const friction = 0.95;
    const animate = () => {
      if (!trackRef.current || Math.abs(v) < 0.5) return;
      trackRef.current.scrollLeft -= v;
      v *= friction;
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
  }, []);

  return { trackRef, onPointerDown, onPointerMove, onPointerUp };
}

function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] items-start max-lg:flex-col max-lg:gap-[48px]">
          {/* Text column */}
          <div className="flex-1 flex flex-col gap-[24px] min-w-0">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
              {t("pages.symposium.detailLabel")}
            </p>
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px] whitespace-pre-line">
              {t("pages.symposium.statsTitle")}
            </p>
            <div className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full flex flex-col gap-[24px]">
              <p>{t("pages.symposium.statsBody1")}</p>
              <p>{t("pages.symposium.statsBody2")}</p>
            </div>
          </div>
          {/* Stats column */}
          <div className="flex-1 flex flex-col gap-[32px] min-w-0">
            <StatCard value={t("pages.symposium.stat1Value")} label={t("pages.symposium.stat1Label")} showLogoHover />
            <StatCardEvents value={t("pages.symposium.stat2Value")} label={t("pages.symposium.stat2Label")} />
            <StatCardBubbles value={t("pages.symposium.stat3Value")} label={t("pages.symposium.stat3Label")} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9b. UNIVERSITY SLIDER — Infinite carousel
   ============================================================ */
function UniversitySliderSection() {
  const { t } = useTranslation();
  const cards = t("pages.symposium.sliderCards", { returnObjects: true }) as { name: string; label: string }[];
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  const TOTAL = SLIDER_UNIVERSITIES.length;
  const tripled = useMemo(
    () => [...SLIDER_UNIVERSITIES, ...SLIDER_UNIVERSITIES, ...SLIDER_UNIVERSITIES],
    []
  );

  /* ── Initialize scroll to middle (second) set ── */
  const initialized = useRef(false);
  useEffect(() => {
    const track = trackRef.current;
    if (!track || initialized.current) return;
    requestAnimationFrame(() => {
      if (track.children.length < TOTAL * 2) return;
      const first = track.children[0] as HTMLElement;
      const mid = track.children[TOTAL] as HTMLElement;
      const oneSetWidth = mid.offsetLeft - first.offsetLeft;
      track.scrollLeft = oneSetWidth;
      initialized.current = true;
    });
  }, [TOTAL]);

  /* ── Infinite loop: silently reset scroll at boundaries ── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (!track || track.children.length < TOTAL * 2) return;
        const first = track.children[0] as HTMLElement;
        const mid = track.children[TOTAL] as HTMLElement;
        const oneSetWidth = mid.offsetLeft - first.offsetLeft;
        if (track.scrollLeft >= oneSetWidth * 2) {
          track.scrollLeft -= oneSetWidth;
        } else if (track.scrollLeft <= 0) {
          track.scrollLeft += oneSetWidth;
        }
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [TOTAL]);

  /* ── Entrance animation observer ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* ── Drag with inertia ── */
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const velX = useRef(0);
  const lastPointerX = useRef(0);
  const lastPointerTime = useRef(0);
  const inertiaRaf = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = track.scrollLeft;
    velX.current = 0;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = Date.now();
    track.style.cursor = "grabbing";
    track.setPointerCapture(e.pointerId);
    cancelAnimationFrame(inertiaRaf.current);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const now = Date.now();
    const dt = now - lastPointerTime.current;
    const dx = e.clientX - lastPointerX.current;
    if (dt > 0) velX.current = dx / dt;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = now;
    trackRef.current.scrollLeft = dragScrollLeft.current - (e.clientX - dragStartX.current);
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    isDragging.current = false;
    trackRef.current.style.cursor = "grab";
    trackRef.current.releasePointerCapture(e.pointerId);
    let v = velX.current * 15;
    const friction = 0.95;
    const animate = () => {
      if (!trackRef.current || Math.abs(v) < 0.5) return;
      trackRef.current.scrollLeft -= v;
      v *= friction;
      inertiaRaf.current = requestAnimationFrame(animate);
    };
    inertiaRaf.current = requestAnimationFrame(animate);
  }, []);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[80px] max-lg:pb-[64px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] mb-[40px] max-md:text-[24px] max-md:leading-[32px] max-md:mb-[24px]">
            {t("pages.symposium.sliderTitle")}
          </p>
        </div>
      </div>

      {/* Infinite carousel */}
      <div ref={sectionRef} className="pb-[100px] max-lg:pb-[80px] max-md:pb-[48px]">
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          className="flex gap-[24px] max-md:gap-[16px] overflow-x-auto overflow-y-hidden pl-[56px] max-md:pl-[24px] select-none touch-pan-y hide-scrollbar"
          style={{ cursor: "grab", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        >
          {tripled.map((uni, i) => {
            const cardIndex = i % TOTAL;
            const card = cards[cardIndex];
            return (
              <motion.div
                key={`uni-${i}`}
                initial={{ opacity: 0, x: 50 }}
                animate={hasEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{
                  duration: 0.7,
                  delay: hasEntered ? cardIndex * 0.08 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="shrink-0 w-[360px] max-lg:w-[300px] max-md:w-[260px] flex flex-col gap-[16px]"
              >
                <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden bg-[#f0efed]">
                  <ImageWithFallback
                    alt={card?.name ?? `University ${cardIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    src={uni.image}
                  />
                </div>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[16px] tracking-[-0.4px] leading-[22px]">
                  {card?.name ?? ""}
                </p>
              </motion.div>
            );
          })}
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
      <div className="px-[56px] pt-[100px] pb-[80px] max-lg:pt-[80px] max-lg:pb-[64px] max-md:px-[24px] max-md:pt-[48px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.symposium.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="idermapp"
              image={imgRelatedIdermapp}
              image2={imgRelatedIdermapp2}
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
export function ProjectDetailSymposium() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <FacesSection />
      </RevealAfterTransition>
      <ScrollRevealSection><RevolutionSection /></ScrollRevealSection>
      <ScrollRevealSection><VideoAndDsSection /></ScrollRevealSection>
      <ScrollRevealSection><PlatformSection /></ScrollRevealSection>
      <ScrollRevealSection><BigImageSection /></ScrollRevealSection>
      <ScrollRevealSection><UniversitySliderSection /></ScrollRevealSection>
      <ScrollRevealSection><UxSection /></ScrollRevealSection>
      <ScrollRevealSection><StatsSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}