import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { consumePendingScrollId, scrollToId } from "./Header";
import { useProjectTransition } from "./ProjectTransitionContext";

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { isTransitioning, isOverlayActive } = useProjectTransition();

  /* On route change: scroll to pending anchor (if any) */
  useEffect(() => {
    const pendingId = consumePendingScrollId();
    if (pendingId) {
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(pendingId);
        if (el) {
          scrollToId(pendingId);
        } else {
          const timer = setTimeout(() => scrollToId(pendingId), 400);
          return () => clearTimeout(timer);
        }
      });
      return () => cancelAnimationFrame(raf);
    }
    /* scroll-to-top is handled by SmoothScrollProvider */
  }, [pathname]);

  /*
   * When the overlay is active:
   *   - The solid white backdrop hides everything from frame 1
   *   - New page enters at opacity 1 instantly (behind overlay)
   *   - Old page exits at opacity 0 instantly (hidden by backdrop)
   */
  const skip = isTransitioning || isOverlayActive;

  return (
    <motion.div
      initial={skip ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        position: "absolute" as const,
        top: 0,
        left: 0,
        width: "100%",
      }}
      transition={{
        duration: skip ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "opacity" }}
    >
      {children}
    </motion.div>
  );
}