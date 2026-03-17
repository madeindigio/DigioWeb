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
import imgComponents1 from "figma:asset/8248144bee0567971009064f5e3b715fac005bc2.png";
import imgBigSymImgSection from "figma:asset/e1aa3acf99db0e469f2465cb0347c5009b8d662b.png";
import imgUmuScreenPortada from "figma:asset/703843218cd8ffc6ec7f6b8dbf51eaa41fd78e98.png";
import imgAppIconMockup from "figma:asset/204d01c55480fc4b8d5d299ad46b8ac11fad161a.png";
import imgMobileSectionRight from "figma:asset/6d586f6f05918ad0dc4389f8627c0d1a22937c69.png";
import imgIPhone from "figma:asset/6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";
import imgRelatedIdermapp from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelatedIdermapp2 from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelatedFinsa from "figma:asset/9df4b0260f9f37c4401ad84e556ad9e573c8702b.png";
import imgProgramaAgenda from "figma:asset/25d86c03236a312e95060d58003048a837cd84ed.png";
import imgEventCreation from "figma:asset/0a6a82bb8c497f63bd68f4806f6adde4bbe831b6.png";
import imgMobileQR from "figma:asset/611da82cc27e23945cfd2334c8c9bea1eb1622c2.png";

const EASE = [0.22, 1, 0.36, 1];
const VIDEO_URL = "https://digio.es/sites/default/files/2024-04/Symposium-header-2.mp4";

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
        <img
          alt="Symposium community"
          className="absolute inset-0 w-full h-full object-cover"
          src={imgFaces1}
        />
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
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1326px] h-[602px] max-lg:w-[900px] max-lg:h-[410px]" style={{ marginLeft: "290px", maxWidth: "none" }}>
                <img
                  alt="Symposium components"
                  className="w-full h-full object-cover"
                  src={imgComponents1}
                />
              </div>
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
                src={imgProgramaAgenda}
              />
            </div>
            {/* Event creation / mobile section */}
            <div className="flex-1 bg-[#f8f9fa] relative overflow-hidden max-md:h-[300px]">
              <img
                alt="Symposium event creation"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={imgEventCreation}
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
        src={imgBigSymImgSection}
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
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[967px] h-[748px] max-lg:w-[700px] max-lg:h-[542px] max-md:w-[500px] max-md:h-[387px]" style={{ marginLeft: "86px", marginTop: "27px" }}>
                <img alt="Symposium app" className="w-full h-full object-cover" src={imgAppIconMockup} />
              </div>
            </div>
            {/* iPhone mockup */}
            <div className="flex-1 h-[600px] max-lg:h-[450px] max-md:h-[350px] bg-[#f8f9fa] relative overflow-hidden">
              <img
                alt="Symposium mobile QR inscription"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={imgMobileQR}
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
function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-[#f8f9fa] w-full flex flex-col items-center justify-center py-[56px] max-md:py-[40px]">
      <p className="font-['GT_Ultra_Median',sans-serif] text-black text-[100px] tracking-[-3px] leading-[0.9] max-lg:text-[72px] max-md:text-[56px]">
        {value}
      </p>
      <p className="font-['Manrope',sans-serif] text-black text-[16px] leading-[normal] text-center w-[250px] max-md:w-[200px] mt-[32px]">
        {label}
      </p>
    </div>
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
            <StatCard value={t("pages.symposium.stat1Value")} label={t("pages.symposium.stat1Label")} />
            <StatCard value={t("pages.symposium.stat2Value")} label={t("pages.symposium.stat2Label")} />
            <StatCard value={t("pages.symposium.stat3Value")} label={t("pages.symposium.stat3Label")} />
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