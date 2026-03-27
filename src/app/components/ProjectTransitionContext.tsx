import { createContext, useContext, useCallback, useState } from "react";
import type { ReactNode } from "react";

export interface TransitionSnapshot {
  slug: string;
  imageSrc: string;
  videoSrc?: string;
  rect: DOMRect;
  tag: string;
  tagBg?: string;
}

/**
 * Simplified phase machine:
 *   idle      → nothing happening
 *   preparing → fast visual cleanup before FLIP starts
 *   animating → overlay visible, card flying from original rect → hero
 *   done      → card landed; overlay fading out, content revealing
 */
type Phase = "idle" | "preparing" | "animating" | "done";

interface ProjectTransitionContextValue {
  snapshot: TransitionSnapshot | null;
  phase: Phase;
  /** Capture snapshot + start pre-transition visual cleanup */
  startTransition: (s: TransitionSnapshot) => void;
  /** Cleanup finished → start the FLIP motion */
  beginTransition: () => void;
  /** Card landed → trigger overlay exit + content reveal */
  finishTransition: () => void;
  /** Full cleanup after overlay exit animation completes */
  clearTransition: () => void;
  /** True while card is flying (content stays hidden) */
  isTransitioning: boolean;
  /** True while overlay DOM should exist (animating + done exit fade) */
  isOverlayActive: boolean;
}

const Ctx = createContext<ProjectTransitionContextValue>({
  snapshot: null,
  phase: "idle",
  startTransition: () => {},
  beginTransition: () => {},
  finishTransition: () => {},
  clearTransition: () => {},
  isTransitioning: false,
  isOverlayActive: false,
});

export function ProjectTransitionProvider({ children }: { children: ReactNode }) {
  const [snapshot, setSnapshot] = useState<TransitionSnapshot | null>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  const startTransition = useCallback((s: TransitionSnapshot) => {
    setSnapshot(s);
    setPhase("preparing");
  }, []);

  const beginTransition = useCallback(() => {
    setPhase((current) => (current === "preparing" ? "animating" : current));
  }, []);

  const finishTransition = useCallback(() => {
    setPhase("done");
  }, []);

  const clearTransition = useCallback(() => {
    setSnapshot(null);
    setPhase("idle");
  }, []);

  const isTransitioning = phase === "animating";
  const isOverlayActive = snapshot !== null && phase !== "idle";

  return (
    <Ctx.Provider
      value={{
        snapshot,
        phase,
        startTransition,
        beginTransition,
        finishTransition,
        clearTransition,
        isTransitioning,
        isOverlayActive,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useProjectTransition() {
  return useContext(Ctx);
}
