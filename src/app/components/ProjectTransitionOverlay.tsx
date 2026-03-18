import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useProjectTransition } from "./ProjectTransitionContext";
import { getProjectBySlug } from "./projectData";
import { stopSmoothScroll } from "./SmoothScrollProvider";

const EASE = [0.25, 0.1, 0.25, 1];          // true ease-in-out for organic feel

/* ── Timing ── */
const CARD_DURATION = 1.35;       // slower, cinematic expansion
const HOLD_MS = 220;              // let the image breathe before reveal
const EXIT_DURATION = 0.55;       // gentle, unhurried fade-out

/* Parallax: image starts zoomed-in + shifted up, settles during expansion */
const PARALLAX_SCALE_START = 1.12;  // subtler zoom for smoother feel
const PARALLAX_SCALE_END = 1.0;
const PARALLAX_Y_START = "-3%";
const PARALLAX_Y_END = "0%";

/**
 * Full-screen overlay that performs the shared-element (FLIP) transition
 * from a project card in WorkSection to the detail page hero.
 *
 * Approach:
 *   1. Solid white backdrop appears INSTANTLY on click (no fade-in)
 *      → hides the messy page-swap underneath from frame 1
 *   2. Card clone starts animating immediately to hero position (0.65s)
 *   3. Card lands → brief hold → overlay fades out, revealing real hero
 *   4. Detail content reveals progressively (handled by RevealAfterTransition)
 */
export function ProjectTransitionOverlay() {
  const {
    snapshot,
    phase,
    finishTransition,
    clearTransition,
    isOverlayActive,
  } = useProjectTransition();
  const { t } = useTranslation();
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const hasLandedRef = useRef(false);

  /* Lock scroll while any phase is active */
  useEffect(() => {
    if (phase !== "idle") {
      /* Cancel any in-progress smooth scroll so it doesn't fight the overlay */
      stopSmoothScroll();
      document.body.style.overflow = "hidden";
      /* Instantly scroll to top — the solid white backdrop hides the jump */
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  /* Reset landed guard when a new transition starts */
  useEffect(() => {
    if (phase === "animating") {
      hasLandedRef.current = false;
    }
  }, [phase]);

  /* Card FLIP finished → hold briefly, then advance to done */
  const handleCardLanded = useCallback(() => {
    if (hasLandedRef.current) return;
    hasLandedRef.current = true;
    timerRef.current = setTimeout(() => finishTransition(), HOLD_MS);
  }, [finishTransition]);

  /* Cleanup timers */
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  /* Exit animation of the whole overlay finished → full cleanup */
  const handleExitComplete = () => {
    document.body.style.overflow = "";
    clearTransition();
  };

  /* ── Derived ── */
  const project = snapshot ? getProjectBySlug(snapshot.slug) : null;
  const name = project ? t(`work.projects.${project.i18nKey}.name`) : "";

  /* All projects now use the same fixed-height hero (70vh / 360px mobile) */
  const getHeroHeight = (): string => {
    if (typeof window === "undefined") return "70vh";
    if (window.innerWidth <= 768) return "360px";
    return "70vh";
  };
  const heroHeight = getHeroHeight();

  /*
   * Show child during "animating". When phase→"done", child removed
   * → AnimatePresence plays exit fade → handleExitComplete clears all.
   */
  const showChild = isOverlayActive && phase !== "done";

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showChild && snapshot && (
        <motion.div
          key="project-overlay"
          className="fixed inset-0 z-[200] pointer-events-none"
          /* Exit: fade out the whole overlay, revealing the real page hero */
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION, ease: EASE }}
        >
          {/* ─── SOLID BACKDROP ─── 
              White bg, opacity 1 from frame 1 → no flash, 
              hides the AnimatePresence page swap underneath */}
          <div className="absolute inset-0 bg-white" />

          {/* ─── CARD CLONE ─── */}
          <motion.div
            className="absolute overflow-hidden"
            style={{ willChange: "top, left, width, height" }}
            initial={{
              top: snapshot.rect.top,
              left: snapshot.rect.left,
              width: snapshot.rect.width,
              height: snapshot.rect.height,
              borderRadius: 0,
            }}
            animate={{
              top: 0,
              left: 0,
              width: "100vw",
              height: heroHeight,
              borderRadius: 0,
            }}
            transition={{ duration: CARD_DURATION, ease: EASE }}
            onAnimationComplete={handleCardLanded}
          >
            {/* Solid fallback bg */}
            <div className="absolute inset-0 bg-[#d8d8d8]" />

            {/* Hero image — clean, no text overlay (unified NM style) */}
            <motion.img
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
              src={snapshot.imageSrc}
              initial={{ scale: PARALLAX_SCALE_START, y: PARALLAX_Y_START }}
              animate={{ scale: PARALLAX_SCALE_END, y: PARALLAX_Y_END }}
              transition={{ duration: CARD_DURATION * 1.2, ease: EASE }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}