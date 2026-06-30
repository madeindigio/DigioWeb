import { useEffect, useState, useRef } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useProjectTransition } from "./ProjectTransitionContext";
import { useProjectClick, CardHoverOverlay } from "./WorkSection";
import { getProjectBySlug } from "./projectData";
import { resizeSmoothScroll } from "./SmoothScrollProvider";

const EASE = [0.25, 0.1, 0.25, 1];

const REVEAL_PRESETS = {
  soft: {
    y: 36,
    duration: 0.72,
    amount: 0.08,
  },
  chapter: {
    y: 56,
    duration: 0.88,
    amount: 0.06,
  },
  feature: {
    y: 44,
    duration: 0.8,
    amount: 0.1,
  },
} as const;

export type RevealPreset = keyof typeof REVEAL_PRESETS;

/*
 * Header slide-in timing (mirrored from Header.tsx).
 * Body content must wait for the header to finish entering before revealing.
 */
const HEADER_SLIDE_DELAY = 0.06;
const HEADER_SLIDE_DURATION = 0.55;
const HEADER_TOTAL = HEADER_SLIDE_DELAY + HEADER_SLIDE_DURATION; // ~0.61s

/* Extra buffer after header lands before content starts appearing */
const CONTENT_STAGGER_OFFSET = 0.1;

let revealResizeTimeoutId: ReturnType<typeof setTimeout> | null = null;

function scheduleRevealResize() {
  if (revealResizeTimeoutId !== null) {
    clearTimeout(revealResizeTimeoutId);
  }
  revealResizeTimeoutId = setTimeout(() => {
    revealResizeTimeoutId = null;
    resizeSmoothScroll();
  }, 90);
}

/* ─────────────────────────────────────────────────────────
   RevealAfterTransition
   Delays children reveal until:
     1. The FLIP overlay has fully exited (isOverlayActive → false)
     2. The header slide-in animation has completed
   If there's no active transition (direct URL), shows immediately.
   ───────────────────────────────────────────────────────── */
export function RevealAfterTransition({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const { isOverlayActive, phase } = useProjectTransition();
  /* Direct navigation (no FLIP): show immediately */
  const hadTransition = useRef(false);
  if (phase !== "idle") hadTransition.current = true;
  const [show, setShow] = useState(!isOverlayActive && phase === "idle");

  useEffect(() => {
    if (!isOverlayActive && !show) setShow(true);
  }, [isOverlayActive, show]);

  /* When there was a FLIP transition, offset all delays so content appears
     after the header has finished sliding in.  For direct navigation the
     extra offset is zero (content reveals normally). */
  const effectiveDelay = show
    ? (hadTransition.current ? HEADER_TOTAL + CONTENT_STAGGER_OFFSET + delay : delay)
    : 0;

  /* After the reveal animation completes, tell Lenis to recalculate
     the scrollable height. This prevents the "can't scroll past halfway"
     bug when Lenis computed its limit before animations finished. */
  useEffect(() => {
    if (!show) return;
    const totalMs = (effectiveDelay + 0.65) * 1000 + 100; // animation end + small buffer
    const t = setTimeout(() => resizeSmoothScroll(), totalMs);
    return () => clearTimeout(t);
  }, [show, effectiveDelay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.75, delay: effectiveDelay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   ScrollRevealSection
   Animates children into view on scroll (once).
   ───────────────────────────────────────────────────────── */
export function ScrollRevealSection({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const preset = REVEAL_PRESETS.soft;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: preset.y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: preset.amount }}
      transition={{ duration: shouldReduceMotion ? 0.35 : preset.duration, ease: EASE }}
      onAnimationComplete={scheduleRevealResize}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealSectionPreset({
  children,
  preset = "soft",
}: {
  children: ReactNode;
  preset?: RevealPreset;
}) {
  const shouldReduceMotion = useReducedMotion();
  const config = REVEAL_PRESETS[preset];

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: config.y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: config.amount }}
      transition={{ duration: shouldReduceMotion ? 0.35 : config.duration, ease: EASE }}
      onAnimationComplete={scheduleRevealResize}
    >
      {children}
    </motion.div>
  );
}

export function ScrollParallaxMedia({
  children,
  distance = 28,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  return (
    <div ref={containerRef} className={className}>
      <motion.div style={shouldReduceMotion ? undefined : { y: translateY }}>
        {children}
      </motion.div>
    </div>
  );
}

export function ScrollStaggerGroup({
  children,
  stagger = 0.08,
  className,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={{
        hidden: {},
        visible: {
          transition: shouldReduceMotion
            ? { staggerChildren: 0 }
            : { staggerChildren: stagger, delayChildren: 0.03 },
        },
      }}
      onAnimationComplete={scheduleRevealResize}
    >
      {children}
    </motion.div>
  );
}

export function ScrollStaggerItem({
  children,
  y = 24,
}: {
  children: ReactNode;
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: shouldReduceMotion ? 0.3 : 0.58, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   RelatedProjectCard
   A card that triggers a FLIP transition to the target project.
   ───────────────────────────────────────────────────────── */
export function RelatedProjectCard({
  image,
  image2,
  tag,
  name,
  description,
  slug,
}: {
  image: string;
  image2?: string;
  tag: string;
  name: string;
  description: string;
  slug: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  /* Use the canonical project image for the FLIP overlay so the hero matches */
  const project = getProjectBySlug(slug);
  const flipImage = project?.image || image;
  const flipVideo = project?.heroVideo;
  const displayImage = project?.image || image;
  const displayImage2 = project?.image ? undefined : image2;
  const handleClick = useProjectClick(slug, containerRef, flipImage, tag, undefined, flipVideo);

  return (
    <div className="flex flex-col items-start flex-1 min-w-0">
      <div
        ref={containerRef}
        className="relative w-full h-[500px] max-lg:h-[350px] max-md:h-[250px] overflow-hidden cursor-pointer"
      >
        <div className="absolute inset-0 bg-[#d8d8d8]" />
        <img
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          loading="lazy"
          decoding="async"
          src={displayImage}
        />
        {displayImage2 && (
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            loading="lazy"
            decoding="async"
            src={displayImage2}
          />
        )}
        <div className="absolute left-[24px] top-[24px] z-10 backdrop-blur-[5px] bg-[rgba(25,30,37,0.24)] rounded-[300px] px-[16px] py-[8px] max-md:left-[12px] max-md:top-[12px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[20px] text-white tracking-[-0.8px] leading-[27px] whitespace-nowrap text-center max-md:text-[14px] max-md:leading-[20px]">
            {tag}
          </p>
        </div>
        <CardHoverOverlay containerRef={containerRef} onClick={handleClick} />
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

/* ─────────────────────────────────────────────────────────
   RelatedProjectsSection
   Wrapper with title + two-column grid for related cards.
   ───────────────────────────────────────────────────────── */
export function RelatedProjectsSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {title}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}