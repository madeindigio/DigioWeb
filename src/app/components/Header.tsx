import svgPaths from "../../imports/svg-5maq4jyelf";
import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import type { AnimationItem } from "lottie-web";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "motion/react";
import { Link, useNavigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { useProjectTransition } from "./ProjectTransitionContext";
import { smoothScrollTo } from "./SmoothScrollProvider";

/* ─── Shared constants ─── */
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DUR_STATE = 1.1; // header expand/collapse – unhurried
const DUR_MICRO = 0.3; // hovers, taps – snappy

const menuKeys = ["work", "about", "join", "blog", "contact"] as const;
const menuHrefs = ["/#trabajo", "/sobre-digio", "/unete", "/blog", "/contacto"];

/* ─── Header bg color per route (matches each page's hero) ─── */
const HEADER_BG_MAP: Record<string, string> = {
  "/sobre-digio": "#583bff",
  "/trabajo": "#ffffff",
  "/contacto": "#f6f5f3",
  "/blog": "#191e25",
  "/ia": "#191e25",
};
const DEFAULT_HEADER_BG = "#191e25";
function getHeaderBg(pathname: string) {
  if (HEADER_BG_MAP[pathname]) return HEADER_BG_MAP[pathname];
  // Blog post detail pages → white header
  if (pathname.startsWith("/blog/")) return "#ffffff";
  return DEFAULT_HEADER_BG;
}

/* ─── Routes where header text should be dark ─── */
const HEADER_DARK_TEXT_ROUTES = new Set(["/trabajo", "/contacto"]);
function isHeaderDark(pathname: string) {
  if (HEADER_DARK_TEXT_ROUTES.has(pathname)) return true;
  if (pathname.startsWith("/blog/")) return true;
  return false;
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

/* ─── Smooth-scroll to a hash id, accounting for fixed header ─── */
export function scrollToId(id: string, immediate: boolean = false) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerH = getVisibleHeaderHeight();
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 16;
  smoothScrollTo(Math.max(0, top), 1400, immediate);
}

/* ─── Pending scroll target (shared with PageTransition) ─── */
let _pendingScrollId: string | null = null;
export function consumePendingScrollId(): string | null {
  const id = _pendingScrollId;
  _pendingScrollId = null;
  return id;
}
export function setPendingScrollId(id: string) {
  _pendingScrollId = id;
}

/* ─── Language switcher ─── */
function LangSwitcher({ size = "desktop", dark = false }: { size?: "desktop" | "menu"; dark?: boolean }) {
  const { i18n } = useTranslation();
  const isEs = i18n.language === "es";
  const toggle = (lang: "es" | "en") => { if (i18n.language !== lang) i18n.changeLanguage(lang); };

  const textColor = dark ? "#191e25" : "#e5e1dc";
  const dimColor = dark ? "rgba(25,30,37,0.5)" : "rgba(229,225,220,0.68)";

  const baseClass = size === "menu"
    ? "font-['GT_Ultra_Median',sans-serif] text-[#e5e1dc] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]"
    : "text-[17px] tracking-[0.17px] font-['Satoshi',sans-serif]";

  return (
    <span className={baseClass}>
      <span
        className="cursor-pointer transition-colors font-[700]"
        style={isEs ? { color: textColor } : { color: dimColor }}
        onMouseEnter={(e) => { if (!isEs) (e.currentTarget.style.color = textColor); }}
        onMouseLeave={(e) => { if (!isEs) (e.currentTarget.style.color = dimColor); }}
        onClick={() => toggle("es")}
      >
        ES
      </span>
      <span style={{ color: textColor }}>{" / "}</span>
      <span
        className="cursor-pointer transition-colors font-[700]"
        style={!isEs ? { color: textColor } : { color: dimColor }}
        onMouseEnter={(e) => { if (isEs) (e.currentTarget.style.color = textColor); }}
        onMouseLeave={(e) => { if (isEs) (e.currentTarget.style.color = dimColor); }}
        onClick={() => toggle("en")}
      >
        EN
      </span>
    </span>
  );
}

/* ─── Responsive hook ─── */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile(e.matches);
    handler(mql);
    mql.addEventListener("change", handler as (e: MediaQueryListEvent) => void);
    return () => mql.removeEventListener("change", handler as (e: MediaQueryListEvent) => void);
  }, [breakpoint]);
  return isMobile;
}

/* ─── Lottie logo with scroll-driven frames ─── */
function DigiLottie({ compact, dark = false }: { compact: boolean; dark?: boolean }) {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const scrollRafRef = useRef<number | null>(null);
  const maxScrollableRef = useRef(1);
  const totalFrames = 200;

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;

    Promise.all([
      import("lottie-web"),
      import("../../imports/digio_scroll_animation_white"),
    ]).then(([lottieModule, animModule]) => {
      if (cancelled || !containerRef.current) return;
      const lottie = lottieModule.default;
      const animationData = animModule.default;
      const anim = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
      });
      animRef.current = anim;
    });

    return () => {
      cancelled = true;
      if (animRef.current) { animRef.current.destroy(); animRef.current = null; }
    };
  }, []);

  const tickRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const lerp = 0.08;
    const tick = () => {
      if (!animRef.current) { 
        rafRef.current = requestAnimationFrame(tick); 
        return; 
      }
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) < 0.3) {
        currentFrameRef.current = targetFrameRef.current;
        animRef.current.goToAndStop(targetFrameRef.current, true);
        rafRef.current = null; // pause loop
        return;
      }
      const next = currentFrameRef.current + diff * lerp;
      currentFrameRef.current = next;
      animRef.current.goToAndStop(Math.round(next), true);
      rafRef.current = requestAnimationFrame(tick);
    };
    tickRef.current = tick;
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, []);

  const updateMaxScrollable = useCallback(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    maxScrollableRef.current = Math.max(max, 1);
  }, []);

  const handleScroll = useCallback(() => {
    if (scrollRafRef.current !== null) return;
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const pct = Math.min(Math.max(scrollTop / (maxScrollableRef.current * 0.6), 0), 1);
      const newTarget = pct * (totalFrames - 1);

      if (Math.abs(targetFrameRef.current - newTarget) > 0.1) {
        targetFrameRef.current = newTarget;
        if (rafRef.current === null && tickRef.current) {
          rafRef.current = requestAnimationFrame(tickRef.current);
        }
      }
    });
  }, []);

  useEffect(() => {
    updateMaxScrollable();
    const ro = new ResizeObserver(() => updateMaxScrollable());
    ro.observe(document.documentElement);
    window.addEventListener("resize", updateMaxScrollable);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateMaxScrollable);
      window.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    };
  }, [handleScroll, updateMaxScrollable]);

  return (
    <motion.div
      ref={containerRef}
      className="shrink-0 origin-left"
      style={{ filter: dark ? "invert(1)" : "none" }}
      animate={{
        width: isMobile
          ? (compact ? 80 : 112)
          : (compact ? 104 : 200),
        height: isMobile
          ? (compact ? 32 : 44)
          : (compact ? 40 : 80),
      }}
      transition={{ duration: DUR_STATE, ease: EASE_SMOOTH }}
    />
  );
}

/* ─── Footer logo (static, no animation needed) ─── */
export function FooterLogo() {
  return (
    <div className="h-[56px] w-[108px] relative shrink-0">
      <div className="absolute inset-[28.19%_0_22.5%_74.64%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3366 27.6143">
          <path d={svgPaths.p2d4f4b00} fill="#E2DFDA" />
        </svg>
      </div>
      <div className="absolute inset-[28.19%_37.45%_22.5%_37.19%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3366 27.6143">
          <path d={svgPaths.p2d4f4b00} fill="#E2DFDA" />
        </svg>
      </div>
      <div className="absolute inset-[28.19%_74.64%_22.5%_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3366 27.6143">
          <path d={svgPaths.p2d4f4b00} fill="#E2DFDA" />
        </svg>
      </div>
      <div className="absolute inset-[29.22%_28.6%_23.54%_66.38%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.41605 26.4573">
          <path d={svgPaths.p34ab6980} fill="#E2DFDA" />
        </svg>
      </div>
      <div className="absolute inset-[29.22%_65.81%_23.54%_29.16%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.41605 26.4573">
          <path d={svgPaths.p34ab6980} fill="#E2DFDA" />
        </svg>
      </div>
      <div className="absolute inset-[29.22%_37.46%_9.63%_57.52%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.41605 34.2479">
          <path d={svgPaths.p28636680} fill="#E2DFDA" />
        </svg>
      </div>
      <div className="absolute inset-[90.37%_42.48%_0_40.47%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3753 5.39088">
          <path d={svgPaths.p2e65e000} fill="#E2DFDA" />
        </svg>
      </div>
      <div className="absolute inset-[0_74.69%_23.54%_20.29%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.41605 42.8185">
          <path d={svgPaths.p85a080} fill="#E2DFDA" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Desktop nav link with animated underline ─── */
function DesktopNavLink({
  item,
  index,
  dark = false,
}: {
  item: { label: string; href: string };
  index: number;
  dark?: boolean;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const textColor = dark ? "#191e25" : "#e5e1dc";
  const underlineColor = dark ? "bg-[#191e25]/50" : "bg-[#e5e1dc]/50";

  const handleClick = (e: React.MouseEvent) => {
    if (item.href.startsWith("/#")) {
      e.preventDefault();
      const id = item.href.slice(2);
      if (location.pathname === "/") {
        scrollToId(id);
      } else {
        setPendingScrollId(id);
        navigate("/");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.05 + index * 0.04,
        ease: EASE_SMOOTH,
      }}
    >
      <Link
        to={item.href}
        onClick={handleClick}
        className="relative inline-block group cursor-pointer"
      >
        <motion.span
          className="inline-block"
          style={{ color: textColor }}
          whileHover={{ x: 3 }}
          transition={{ duration: DUR_MICRO, ease: EASE_SMOOTH }}
        >
          <motion.span
            key={item.label}
            className="inline-block"
            initial={{ opacity: 0, y: 6, filter: "blur(3px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: index * 0.04, ease: EASE_SMOOTH }}
          >
            {item.label}
          </motion.span>
        </motion.span>
        {/* Underline — scales from left on hover */}
        <span className={`absolute bottom-[-2px] left-0 w-full h-[1px] ${underlineColor} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`} />
      </Link>
    </motion.div>
  );
}

/* ─── Fullscreen menu nav item ─── */
function MenuNavItem({
  item,
  index,
  onNavigate,
}: {
  item: { label: string; href: string };
  index: number;
  onNavigate: (href: string) => void;
}) {
  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          y: 40,
          transition: { duration: 0.4, ease: EASE_SMOOTH, delay: (4 - index) * 0.04 }
        },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.65, delay: 0.08 + index * 0.06, ease: EASE_SMOOTH }
        }
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.button
        onClick={() => onNavigate(item.href)}
        className="block w-full text-left py-[20px] max-md:py-[14px] relative overflow-hidden cursor-pointer"
        whileHover="hover"
        whileTap={{ scale: 0.985 }}
        initial="rest"
        animate="rest"
      >
        <div className="flex items-center gap-[24px]">
          {/* Number index */}
          <motion.span
            className="font-['Satoshi',sans-serif] text-[#e5e1dc]/30 text-[20px] tracking-[-0.4px] tabular-nums max-md:text-[14px]"
            variants={{
              rest: { opacity: 0.3, x: 0 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{ duration: DUR_MICRO, ease: EASE_SMOOTH }}
          >
            0{index + 1}
          </motion.span>

          {/* Label */}
          <motion.span
            className="font-['GT_Ultra_Median',sans-serif] text-[#e5e1dc] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]"
            variants={{
              rest: { x: 0 },
              hover: { x: 12 },
            }}
            transition={{ duration: 0.45, ease: EASE_SMOOTH }}
          >
            {item.label}
          </motion.span>

          {/* Arrow */}
          <motion.span
            className="font-['Satoshi',sans-serif] text-[#e5e1dc] text-[32px] max-md:text-[22px]"
            variants={{
              rest: { opacity: 0, x: -16 },
              hover: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH }}
          >
            →
          </motion.span>
        </div>

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-[1px] bg-[#e5e1dc]/60"
          variants={{
            rest: { width: "0%" },
            hover: { width: "100%" },
          }}
          transition={{ duration: 0.5, ease: EASE_SMOOTH }}
        />
      </motion.button>

      {/* Separator */}
      <div className="w-full h-[1px] bg-white/[0.12]" />
    </motion.div>
  );
}

/* ─── Fullscreen menu overlay ─── */
function FullscreenMenu({ onClose, onAnimatedNavigate }: { onClose: () => void; onAnimatedNavigate: (href: string) => void }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-40 bg-[#191e25] flex flex-col"
      variants={{
        hidden: { 
          y: "-100%", 
          transition: { duration: 0.55, ease: EASE_SMOOTH, delay: 0.15 } 
        },
        visible: { 
          y: 0, 
          transition: { duration: 0.55, ease: EASE_SMOOTH } 
        }
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex-1 flex flex-col justify-between px-[56px] pt-[170px] pb-[56px] max-md:px-[24px] max-md:pt-[120px] max-md:pb-[40px]">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-between flex-1">
        <nav className="flex flex-col gap-0 w-full">
          {menuKeys.map((key, i) => (
            <MenuNavItem key={key} item={{ label: t(`nav.${key}`), href: menuHrefs[i] }} index={i} onNavigate={onAnimatedNavigate} />
          ))}
        </nav>

        <motion.div
          variants={{
            hidden: { 
              opacity: 0, 
              y: 16, 
              transition: { duration: 0.3, ease: EASE_SMOOTH, delay: 0 } 
            },
            visible: { 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.5, delay: 0.5, ease: EASE_SMOOTH } 
            }
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <LangSwitcher size="menu" />
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Header ─── */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > 80;
  });
  const scrolledRef = useRef(typeof window !== "undefined" ? window.scrollY > 80 : false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);
  const headerSurfaceRef = useRef<HTMLDivElement>(null);
  const expandedHeightRef = useRef(0);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const { t } = useTranslation();
  const { isTransitioning, isOverlayActive } = useProjectTransition();
  const animatedNavRef = useRef(false);

  /*
   * During the FLIP transition the header hides instantly (the overlay's
   * solid white backdrop covers everything). It stays hidden until the
   * overlay has FULLY exited (isOverlayActive → false), preventing any
   * content shift visible through the semi-transparent fading overlay.
   * Once the overlay is gone, the header slides down from above.
   */
  const projectHide = isOverlayActive;

  /* ── Always measure the header's height and cache the "expanded" value ── */
  useLayoutEffect(() => {
    const el = headerSurfaceRef.current;
    if (!el || projectHide) return;
    const h = el.getBoundingClientRect().height;
    if (h > 0 && !scrolledRef.current) {
      expandedHeightRef.current = h;
      setSpacerHeight(h);
    }
  });

  useEffect(() => {
    const el = headerSurfaceRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      if (!scrolledRef.current && !projectHide) {
        /* Always use getBoundingClientRect so padding + border are included,
           matching the useLayoutEffect measurement exactly. */
        const h = Math.ceil(el.getBoundingClientRect().height);
        if (h > 0 && Math.abs(h - expandedHeightRef.current) > 1) {
          expandedHeightRef.current = h;
          setSpacerHeight(h);
        }
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [projectHide]);

  /* Scroll-driven shadow opacity via spring for organic feel */
  const rawShadowOpacity = useMotionValue(0);
  const shadowOpacity = useSpring(rawShadowOpacity, { stiffness: 120, damping: 28 });
  const boxShadow = useTransform(
    shadowOpacity,
    (v: number) => `0 1px 24px 0 rgba(0,0,0,${(v * 0.18).toFixed(3)})`
  );

  useEffect(() => {
    const initialScrolled = window.scrollY > 80;
    scrolledRef.current = initialScrolled;
    setScrolled(initialScrolled);

    let rafId = 0;

    const updateScrollState = () => {
      const y = window.scrollY;
      // Hysteresis
      if (!scrolledRef.current && y > 80) {
        scrolledRef.current = true;
        setScrolled(true);
      } else if (scrolledRef.current && y < 20) {
        scrolledRef.current = false;
        setScrolled(false);
      }
      // Smooth shadow ramp (0 → 1 over first 200px)
      rawShadowOpacity.set(Math.min(y / 200, 1));
      rafId = requestAnimationFrame(updateScrollState);
    };

    rafId = requestAnimationFrame(updateScrollState);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [rawShadowOpacity]);

  useEffect(() => {
    /* Skip auto-close when an animated navigation is in progress */
    if (animatedNavRef.current) return;
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => { if (!scrolled) setMenuOpen(false); }, [scrolled]);

  const headerBg = getHeaderBg(location.pathname);
  const headerTextDark = isHeaderDark(location.pathname);
  const compactHeaderHeight = isMobile ? 84 : 88;
  const expandedHeaderMinHeight = isMobile ? 120 : 136;
  const reservedHeaderHeight = Math.max(spacerHeight, expandedHeaderMinHeight, compactHeaderHeight);
  const visibleHeaderHeight = scrolled ? compactHeaderHeight : reservedHeaderHeight;
  const headerClipInset = Math.max(reservedHeaderHeight - visibleHeaderHeight, 0);
  const headerContentOffsetY = scrolled ? -(headerClipInset * 0.5) : 0;
  const horizontalPadding = isMobile ? 16 : 56;

  /* ── Animated menu navigation ──
     1. Navigate first (page renders behind the menu)
     2. Scroll to top
     3. Wait one frame for React to paint the new page
     4. Close menu → slide-up blind reveals the new page */
  const handleAnimatedNavigate = useCallback((href: string) => {
    animatedNavRef.current = true;

    /* Perform the navigation immediately */
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        /* Already on home — just need to scroll after menu closes */
        window.scrollTo({ top: 0 });
        requestAnimationFrame(() => {
          setMenuOpen(false);
          animatedNavRef.current = false;
          /* Scroll to the section after the blind animation finishes */
          setTimeout(() => scrollToId(id), 580);
        });
        return;
      } else {
        setPendingScrollId(id);
        navigate("/");
      }
    } else {
      navigate(href);
    }

    /* Scroll to top so the new page starts from the beginning */
    window.scrollTo({ top: 0 });

    /* Wait for React to render the new page, then close the menu */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMenuOpen(false);
        animatedNavRef.current = false;
      });
    });
  }, [location.pathname, navigate]);

  /* ── Transition-aware durations ── */
  const HEADER_SLIDE_DUR = 0.55;
  const HEADER_SLIDE_EASE = EASE_SMOOTH;
  const HEADER_SLIDE_DELAY = 0.06; // small delay so overlay starts fading first

  return (
    <>
      {/* Spacer — matches header height; clips to 0 during FLIP transition */}
      <motion.div
        animate={{
          height: projectHide ? 0 : spacerHeight,
          backgroundColor: headerBg,
        }}
        initial={false}
        transition={{
          height: projectHide
            ? { duration: 0 }
            : { duration: HEADER_SLIDE_DUR, ease: HEADER_SLIDE_EASE, delay: HEADER_SLIDE_DELAY },
          backgroundColor: { duration: 0.4, ease: EASE_SMOOTH },
        }}
        style={{ overflow: "hidden", minHeight: projectHide ? 0 : undefined }}
      />

      {/* Header bar — slides up/down during project transitions */}
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 z-50 w-full overflow-hidden pointer-events-none"
        data-visible-height={Math.round(projectHide ? 0 : visibleHeaderHeight).toString()}
        style={{ height: reservedHeaderHeight }}
        animate={{
          y: projectHide ? "-100%" : 0,
        }}
        transition={{
          y: projectHide
            ? { duration: 0 }
            : { duration: HEADER_SLIDE_DUR, ease: HEADER_SLIDE_EASE, delay: HEADER_SLIDE_DELAY },
        }}
      >
        <motion.div
          ref={headerSurfaceRef}
          className="absolute inset-x-0 top-0 h-full pointer-events-auto"
          style={{
            backgroundColor: headerBg,
            clipPath: `inset(0px 0px ${headerClipInset}px 0px)`,
            boxShadow,
            willChange: "clip-path, background-color, transform",
          }}
          animate={{
            backgroundColor: headerBg,
            clipPath: `inset(0px 0px ${headerClipInset}px 0px)`,
          }}
          transition={{
            backgroundColor: { duration: 0.4, ease: EASE_SMOOTH },
            clipPath: { duration: DUR_STATE, ease: EASE_SMOOTH },
          }}
        >
          <motion.div
            className="flex h-full items-center justify-between max-w-[1400px] mx-auto relative"
            style={{ willChange: "transform", paddingInline: horizontalPadding }}
            animate={{ y: headerContentOffsetY }}
            transition={{ duration: DUR_STATE, ease: EASE_SMOOTH }}
          >
            {/* Logo — subtle scale on hover for tactile feel */}
            <Link to="/" className="flex items-center shrink-0" onClick={() => {
              smoothScrollTo(0, 1100);
            }}>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: DUR_MICRO, ease: EASE_SMOOTH }}
              >
                <DigiLottie compact={scrolled} dark={headerTextDark} />
              </motion.div>
            </Link>

            {/* Desktop nav — fades/slides out on scroll with Motion */}
            <motion.nav
              className="hidden md:flex items-start whitespace-nowrap relative min-w-[500px] max-lg:min-w-[380px]"
              initial={false}
              animate={scrolled ? "folded" : "expanded"}
              variants={{
                folded: {
                  opacity: 0,
                  y: -24,
                  scale: 0.98,
                  pointerEvents: "none",
                  transition: { duration: 0.4, ease: EASE_SMOOTH }
                },
                expanded: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  pointerEvents: "auto",
                  transition: { duration: 0.55, ease: EASE_SMOOTH }
                }
              }}
            >
              <motion.div
                className="flex flex-col gap-[5px] items-start text-[16px] leading-[normal] font-['GT_Ultra_Median',sans-serif] shrink-0"
                variants={{
                  folded: { opacity: 0, y: -16, transition: { duration: 0.25, ease: EASE_SMOOTH } },
                  expanded: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.08, ease: EASE_SMOOTH } }
                }}
              >
                {menuKeys.map((key, i) => (
                  <DesktopNavLink key={key} item={{ label: t(`nav.${key}`), href: menuHrefs[i] }} index={i} dark={headerTextDark} />
                ))}
              </motion.div>
              <motion.div
                className="ml-auto pl-[40px] shrink-0 max-lg:pl-[8px]"
                variants={{
                  folded: { opacity: 0, y: -16, transition: { duration: 0.25, ease: EASE_SMOOTH } },
                  expanded: { opacity: 1, y: 0, transition: { duration: 0.45, delay: 0.08, ease: EASE_SMOOTH } }
                }}
              >
                <LangSwitcher dark={headerTextDark} />
              </motion.div>
            </motion.nav>

            {/* Hamburger / X — appears on scroll (desktop) or always (mobile) */}
            <motion.button
              className={`absolute z-[60] cursor-pointer ${
                isMobile ? "block" : "hidden md:block"
              }`}
              style={{
                right: horizontalPadding,
                padding: isMobile ? 6 : 8,
                color: headerTextDark ? "#191e25" : "#e5e1dc",
                willChange: "opacity, transform",
                pointerEvents: scrolled || isMobile ? "auto" : "none",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              initial={false}
              animate={{
                opacity: scrolled || isMobile ? 1 : 0,
                scale: scrolled || isMobile ? 1 : 0.92,
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                opacity: { duration: 0.24, ease: EASE_SMOOTH },
                scale: { duration: DUR_MICRO, ease: EASE_SMOOTH }
              }}
            >
              <svg width={isMobile ? 34 : 42} height={isMobile ? 34 : 42} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
                {/* Top line → translates down to center (y 7→12) and rotates 45° */}
                <motion.line
                  x1="3" y1="7" x2="21" y2="7"
                  initial={false}
                  animate={
                    menuOpen
                      ? { y1: 12, y2: 12, x1: 5, x2: 19, rotate: 45 }
                      : { y1: 7, y2: 7, x1: 3, x2: 21, rotate: 0 }
                  }
                  style={{ transformOrigin: "center" }}
                  transition={{ duration: 0.45, ease: EASE_SMOOTH }}
                />
                {/* Middle line → fades & scales out */}
                <motion.line
                  x1="3" y1="12" x2="21" y2="12"
                  initial={false}
                  animate={
                    menuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  style={{ transformOrigin: "center" }}
                  transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                />
                {/* Bottom line → translates up to center (y 17→12) and rotates −45° */}
                <motion.line
                  x1="3" y1="17" x2="21" y2="17"
                  initial={false}
                  animate={
                    menuOpen
                      ? { y1: 12, y2: 12, x1: 5, x2: 19, rotate: -45 }
                      : { y1: 17, y2: 17, x1: 3, x2: 21, rotate: 0 }
                  }
                  style={{ transformOrigin: "center" }}
                  transition={{ duration: 0.45, ease: EASE_SMOOTH }}
                />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div
            className="absolute inset-x-0 h-px pointer-events-none"
            animate={{
              backgroundColor: headerTextDark ? "rgba(25,30,37,0.12)" : "rgba(226,223,218,0.5)",
              y: visibleHeaderHeight - 1,
            }}
            transition={{
              backgroundColor: { duration: 0.4, ease: EASE_SMOOTH },
              y: { duration: DUR_STATE, ease: EASE_SMOOTH },
            }}
          />
        </motion.div>
      </motion.header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} onAnimatedNavigate={handleAnimatedNavigate} />}
      </AnimatePresence>
    </>
  );
}