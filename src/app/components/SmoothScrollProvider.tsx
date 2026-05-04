import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "react-router";
import Lenis from "lenis";
import { useProjectTransition } from "./ProjectTransitionContext";

/* ─────────────────────────────────────────────────────────
   Lenis-powered smooth scroll
   ─────────────────────────────────────────────────────────
   Adds a buttery-smooth interpolation layer on top of native scroll.
   • Wheel events are intercepted and lerped for a premium feel.
   • Touch / mobile keeps native momentum (no interference).
   • Fully coordinated with the FLIP transition overlay:
     – Lenis is stopped & scrolled to 0 immediately when overlay fires.
     – Restarted only when the overlay fully exits.
   • Programmatic smooth scroll via `smoothScrollTo()` delegates to
     Lenis.scrollTo() so the same easing applies everywhere.
   • Optimized RAF loop prevents micro-stutters and ensures smooth 60fps.
   ───────────────────────────────────────────────────────── */

/* ── Singleton reference so exported helpers can reach it ── */
let _lenis: Lenis | null = null;
let _resizeRafId: number | null = null;
let _resizeIdleId: number | null = null;
let _resizeTimeoutId: ReturnType<typeof setTimeout> | null = null;

function clearPendingLenisResize() {
  if (_resizeRafId !== null) {
    cancelAnimationFrame(_resizeRafId);
    _resizeRafId = null;
  }
  if (_resizeIdleId !== null && typeof window !== "undefined" && "cancelIdleCallback" in window) {
    window.cancelIdleCallback(_resizeIdleId);
    _resizeIdleId = null;
  }
  if (_resizeTimeoutId !== null) {
    clearTimeout(_resizeTimeoutId);
    _resizeTimeoutId = null;
  }
}

function getVisibleHeaderHeight() {
  const header = document.querySelector("header");
  if (!header) return 0;
  const visibleHeight = header.getAttribute("data-visible-height");
  if (visibleHeight) {
    const parsedHeight = Number(visibleHeight);
    if (!Number.isNaN(parsedHeight) && parsedHeight > 0) return parsedHeight;
  }
  return header.getBoundingClientRect().height;
}

function scheduleLenisResize() {
  if (!_lenis) return;
  if (_resizeRafId !== null || _resizeIdleId !== null || _resizeTimeoutId !== null) return;

  const runResize = () => {
    _resizeRafId = requestAnimationFrame(() => {
      _resizeRafId = null;
      _lenis?.resize();
    });
  };

  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    _resizeIdleId = window.requestIdleCallback(() => {
      _resizeIdleId = null;
      runResize();
    }, { timeout: 180 });
    return;
  }

  _resizeTimeoutId = setTimeout(() => {
    _resizeTimeoutId = null;
    runResize();
  }, 120);
}

/**
 * Custom ease-in-out quart — matches the existing premium feel.
 * Gentle start → strong mid → very gradual deceleration.
 */
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

/**
 * Programmatic smooth scroll.
 * @param targetY  Pixel position to scroll to.
 * @param duration Duration in **milliseconds** (matches the old API surface).
 */
export function smoothScrollTo(targetY: number, duration = 1400, immediate = false) {
  if (_lenis) {
    // Lenis expects seconds
    _lenis.scrollTo(targetY, {
      duration: duration / 1000,
      easing: easeInOutQuart,
      lock: true,
      immediate,
    });
  } else {
    window.scrollTo({ top: targetY, behavior: immediate ? "instant" : "smooth" });
  }
}

/**
 * Stop any in-progress programmatic / wheel scroll.
 * Called by the FLIP overlay to freeze everything before jumping to 0.
 * The SmoothScrollProvider re-starts Lenis when the overlay exits.
 */
export function stopSmoothScroll() {
  if (_lenis && !_lenis.isStopped) {
    _lenis.stop();
  }
}

/**
 * Force Lenis to recalculate the scrollable area dimensions.
 * Call this after dynamic content changes that alter page height
 * (e.g. accordion expand, lazy-loaded sections, pagination).
 */
export function resizeSmoothScroll() {
  scheduleLenisResize();
}

/* ─── Provider ─── */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { isOverlayActive, phase } = useProjectTransition();
  const lenisRef = useRef<Lenis | null>(null);
  const transitionWasActive = useRef(false);
  const topForcedRef = useRef(false);
  const resizeTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearResizeTimers = () => {
    if (resizeTimersRef.current.length === 0) return;
    resizeTimersRef.current.forEach(clearTimeout);
    resizeTimersRef.current = [];
  };

  const scheduleResizeSeries = (delays: number[]) => {
    clearResizeTimers();
    delays.forEach((delay) => {
      resizeTimersRef.current.push(setTimeout(() => resizeSmoothScroll(), delay));
    });
  };

  /* ── Create & destroy Lenis ── */
  useEffect(() => {
    const lenis = new Lenis({
      /*
       * lerp 0.1 → perfect balance between responsiveness and smoothness.
       * Lower values (0.068) can feel sluggish and cause micro-stutters.
       * 0.1 is Lenis default and provides optimal fluidity.
       */
      lerp: 0.1,
      /* Optimized wheel response for consistent feel */
      wheelMultiplier: 1,
      /* Touch stays 100% native — zero interference */
      touchMultiplier: 1,
      /* Use external RAF for better control and performance */
      autoRaf: false,
      /* Infinite mode disabled to prevent edge-case stutters */
      infinite: false,
      /* Smooth wheel events for consistent behavior */
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    _lenis = lenis;

    /*
     * Custom RAF loop with proper timing and prevents layout thrashing.
     * Running at proper 60fps prevents micro-stutters.
     */
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    /*
     * ResizeObserver on <body> — whenever the document height changes
     * (images loading, lazy sections, accordion toggling, etc.)
     * we tell Lenis to recalculate its scroll `limit`.
     * Using requestIdleCallback to avoid blocking the main thread.
     */
    const ro = new ResizeObserver(() => {
      scheduleLenisResize();
    });
    ro.observe(document.documentElement);

    return () => {
      clearResizeTimers();
      ro.disconnect();
      clearPendingLenisResize();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      _lenis = null;
    };
  }, []);

  /* ── Coordinate with FLIP overlay ── */
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const transitionActive = phase !== "idle";
    const shouldForceTop = phase === "animating" || phase === "done";

    if (transitionActive && !transitionWasActive.current) {
      /* Transition just activated → freeze immediately */
      lenis.stop();
      transitionWasActive.current = true;
      topForcedRef.current = false;
    }

    if (transitionActive && shouldForceTop && !topForcedRef.current) {
      lenis.scrollTo(0, { immediate: true, force: true });
      topForcedRef.current = true;
    }

    if (!transitionActive && transitionWasActive.current) {
      /* Overlay just exited → unfreeze & recalculate dimensions
         because the page content changed during the transition.
         Chain multiple resize calls to cover the full animation timeline
         (header slide-in ~0.6s + content reveal ~0.65s + stagger delays). */
      lenis.start();
      transitionWasActive.current = false;
      topForcedRef.current = false;
      requestAnimationFrame(() => {
        resizeSmoothScroll();
        scheduleResizeSeries([220, 700, 1300]);
      });
    }
  }, [isOverlayActive, phase]);

  /* ── Route change → scroll to top (unless FLIP handles it) ── */
  useEffect(() => {
    if (isOverlayActive || phase !== "idle") return;
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });

      /*
       * Force Lenis to recalculate the scrollable height (`limit`)
       * after the new page content has rendered. Without this,
       * navigating from a shorter page to a taller one leaves the
       * old scroll limit in place, blocking scroll past the
       * previous page's height.
       *
       * We chain multiple resize calls across a wide time window
       * to cover: React commit, Suspense lazy resolution, image
       * decode, font load, and any other async layout shift.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resizeSmoothScroll();
          scheduleResizeSeries([140, 420, 900, 1600]);
        });
      });

      return clearResizeTimers;
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Intercept anchor clicks for smooth scroll ── */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest?.("a[href^='#']");
      if (!anchor) return;
      const id = (anchor as HTMLAnchorElement).getAttribute("href")?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      const headerH = getVisibleHeaderHeight();
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 16;
      smoothScrollTo(Math.max(0, top), 1400);
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return <>{children}</>;
}