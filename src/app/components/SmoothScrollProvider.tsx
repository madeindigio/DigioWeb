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
   ───────────────────────────────────────────────────────── */

/* ── Singleton reference so exported helpers can reach it ── */
let _lenis: Lenis | null = null;

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
export function smoothScrollTo(targetY: number, duration = 1400) {
  if (_lenis) {
    // Lenis expects seconds
    _lenis.scrollTo(targetY, {
      duration: duration / 1000,
      easing: easeInOutQuart,
      lock: true,
    });
  } else {
    window.scrollTo({ top: targetY, behavior: "smooth" });
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
  if (_lenis) {
    _lenis.resize();
  }
}

/* ─── Provider ─── */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const { isOverlayActive, phase } = useProjectTransition();
  const lenisRef = useRef<Lenis | null>(null);
  const overlayWasActive = useRef(false);

  /* ── Create & destroy Lenis ── */
  useEffect(() => {
    const lenis = new Lenis({
      /*
       * lerp 0.068 → luxurious, almost weightless glide.
       * Default is 0.1; going lower adds perceivable inertia
       * without feeling sluggish.
       */
      lerp: 0.068,
      /* Slightly softer wheel response for a more relaxed feel */
      wheelMultiplier: 0.85,
      /* Touch stays 100 % native — zero interference */
      touchMultiplier: 1,
      /* Let Lenis drive its own RAF loop internally */
      autoRaf: true,
    });

    lenisRef.current = lenis;
    _lenis = lenis;

    /*
     * ResizeObserver on <body> — whenever the document height changes
     * (images loading, lazy sections, accordion toggling, etc.)
     * we tell Lenis to recalculate its scroll `limit`.
     * This eliminates the class of bugs where the page grows taller
     * but Lenis still thinks the old, shorter height is the max.
     */
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const ro = new ResizeObserver(() => {
      // Debounce rapid-fire resize observations (e.g. during animation)
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lenis.resize();
      }, 100);
    });
    ro.observe(document.body);

    return () => {
      ro.disconnect();
      if (resizeTimer) clearTimeout(resizeTimer);
      lenis.destroy();
      lenisRef.current = null;
      _lenis = null;
    };
  }, []);

  /* ── Coordinate with FLIP overlay ── */
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const overlayActive = isOverlayActive || phase !== "idle";

    if (overlayActive && !overlayWasActive.current) {
      /* Overlay just activated → freeze & jump to top */
      lenis.stop();
      lenis.scrollTo(0, { immediate: true, force: true });
      overlayWasActive.current = true;
    } else if (!overlayActive && overlayWasActive.current) {
      /* Overlay just exited → unfreeze & recalculate dimensions
         because the page content changed during the transition */
      lenis.start();
      overlayWasActive.current = false;
      requestAnimationFrame(() => {
        lenis.resize();
        setTimeout(() => lenis.resize(), 300);
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
       * We chain two rAFs + a short timeout to ensure React has
       * committed the new DOM and the browser has reflowed.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          lenis.resize();
          // Safety net: resize again after images / lazy content may
          // have altered the layout (e.g. hero images loading).
          const t = setTimeout(() => lenis.resize(), 300);
          return () => clearTimeout(t);
        });
      });
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
      const header = document.querySelector("header");
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerH - 16;
      smoothScrollTo(Math.max(0, top), 1400);
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return <>{children}</>;
}