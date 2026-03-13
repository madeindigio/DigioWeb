import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "motion/react";
import { useTranslation } from "react-i18next";

const EASE_SMOOTH = [0.22, 1, 0.36, 1];
const BASE_DELAY = 0.04; // seconds between each stagger step
const DURATION = 0.55;

const motionMap = {
  span: motion.span,
  p: motion.p,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
} as const;

/**
 * Animated text wrapper that plays a soft reveal (slide-up + blur clear)
 * every time the language changes. No exit animation — only entrance.
 *
 * Uses imperative animation controls instead of key-based remounting
 * to avoid React key-spread warnings in the Figma preview environment.
 *
 * @param stagger  – index within the section (0, 1, 2…) for sequential delay
 * @param as       – rendered HTML element (default: "span")
 * @param className – passthrough
 * @param children – the translated content
 */
export function LangText({
  stagger = 0,
  as = "span",
  className,
  children,
}: {
  stagger?: number;
  as?: "span" | "p" | "div" | "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const controls = useAnimationControls();
  const prevLang = useRef(i18n.language);
  const isFirstMount = useRef(true);

  // Play entrance animation on mount
  useEffect(() => {
    controls.set({ opacity: 0, y: 10, filter: "blur(4px)" });
    controls.start(
      { opacity: 1, y: 0, filter: "blur(0px)" },
      { duration: DURATION, delay: stagger * BASE_DELAY, ease: EASE_SMOOTH },
    );
    isFirstMount.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-play animation when language changes (skip first mount)
  useEffect(() => {
    if (isFirstMount.current) return;
    if (prevLang.current === i18n.language) return;
    prevLang.current = i18n.language;

    controls.set({ opacity: 0, y: 10, filter: "blur(4px)" });
    controls.start(
      { opacity: 1, y: 0, filter: "blur(0px)" },
      { duration: DURATION, delay: stagger * BASE_DELAY, ease: EASE_SMOOTH },
    );
  }, [i18n.language, controls, stagger]);

  const MotionTag = motionMap[as] || motionMap.span;

  return (
    <MotionTag className={className} animate={controls}>
      {children}
    </MotionTag>
  );
}
