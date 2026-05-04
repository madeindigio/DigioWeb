import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useProjectTransition } from "./ProjectTransitionContext";
import { getProjectBySlug } from "./projectData";
import { stopSmoothScroll } from "./SmoothScrollProvider";

const EASE: [number, number, number, number] = [0.33, 1, 0.68, 1]; // swift ease-out for snappiness

/* ── Timing ── */
const PREPARE_FADE_DURATION = 0.17;
const CARD_DURATION = 0.55;       // swift, smooth expansion
const HOLD_MS = 50;              
const EXIT_DURATION = 0.35;       // fast fade-out

/* Parallax: image starts zoomed-in + shifted up, settles during expansion */
const PARALLAX_SCALE_START = 1.05;  // very subtle
const PARALLAX_SCALE_END = 1.0;
const PARALLAX_Y_START = "-2%";
const PARALLAX_Y_END = "0%";

/**
 * Full-screen overlay that performs the shared-element (FLIP) transition
 * from a project card in WorkSection to the detail page hero.
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

  /* Lock scroll while transition is active */
  useEffect(() => {
    if (phase !== "idle") {
      stopSmoothScroll();
      document.body.style.overflow = "hidden";
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
    if (phase !== "animating") return;
    if (hasLandedRef.current) return;
    hasLandedRef.current = true;
    timerRef.current = setTimeout(() => finishTransition(), HOLD_MS);
  }, [finishTransition, phase]);

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

  const showChild = isOverlayActive && phase !== "done";
  const isPreparing = phase === "preparing";
  const isAnimating = phase === "animating";
  const hasTransitionVideo = Boolean(snapshot?.videoSrc);

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {showChild && snapshot && (
        <motion.div
          key="project-overlay"
          className="fixed inset-0 z-[200] pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION }}
        >
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: isPreparing ? PREPARE_FADE_DURATION : 0.01, ease: EASE }}
          />

          {/* ─── CARD CLONE ─── */}
          <motion.div
            className="absolute overflow-hidden origin-top-left"
            initial={{
              y: snapshot.rect.top,
              x: snapshot.rect.left,
              width: snapshot.rect.width,
              height: snapshot.rect.height,
              borderRadius: "16px",
            }}
            animate={{
              y: isAnimating ? 0 : snapshot.rect.top,
              x: isAnimating ? 0 : snapshot.rect.left,
              width: isAnimating ? "100%" : snapshot.rect.width,
              height: isAnimating ? heroHeight : snapshot.rect.height,
              borderRadius: isAnimating ? "0px" : "16px",
            }}
            transition={{ duration: isAnimating ? CARD_DURATION : 0.01, ease: EASE }}
            onAnimationComplete={handleCardLanded}
          >
            {/* Solid fallback bg */}
            <div className="absolute inset-0 bg-[#d8d8d8]" />

            {hasTransitionVideo ? (
              <motion.video
                aria-label={name}
                className="absolute inset-0 w-full h-full object-cover"
                src={snapshot.videoSrc}
                poster={snapshot.imageSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                initial={{ scale: PARALLAX_SCALE_START, y: PARALLAX_Y_START }}
                animate={{
                  scale: isAnimating ? PARALLAX_SCALE_END : PARALLAX_SCALE_START,
                  y: isAnimating ? PARALLAX_Y_END : PARALLAX_Y_START,
                }}
                transition={{ duration: isAnimating ? CARD_DURATION * 1.2 : 0.01, ease: EASE }}
              />
            ) : (
              /* Hero image — clean, no text overlay */
              <motion.img
                alt={name}
                className="absolute inset-0 w-full h-full object-cover"
                src={snapshot.imageSrc}
                initial={{ scale: PARALLAX_SCALE_START, y: PARALLAX_Y_START }}
                animate={{
                  scale: isAnimating ? PARALLAX_SCALE_END : PARALLAX_SCALE_START,
                  y: isAnimating ? PARALLAX_Y_END : PARALLAX_Y_START,
                }}
                transition={{ duration: isAnimating ? CARD_DURATION * 1.2 : 0.01, ease: EASE }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}