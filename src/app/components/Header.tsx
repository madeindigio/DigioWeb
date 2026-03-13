import svgPaths from "../../imports/svg-5maq4jyelf";
import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import animationData from "../../imports/digio_scroll_animation_white";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "motion/react";
import { Link, useNavigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { useProjectTransition } from "./ProjectTransitionContext";
import { smoothScrollTo } from "./SmoothScrollProvider";

/* ─── Shared constants ─── */
const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;
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

/* ─── Smooth-scroll to a hash id, accounting for fixed header ─── */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector("header");
  const headerH = header ? header.getBoundingClientRect().height : 0;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 16;
  smoothScrollTo(Math.max(0, top), 1400);
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
export { scrollToId };

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
  const totalFrames = 200;

  useEffect(() => {
    if (!containerRef.current) return;
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });
    animRef.current = anim;
    return () => { anim.destroy(); animRef.current = null; };
  }, []);

  useEffect(() => {
    const lerp = 0.08;
    const tick = () => {
      if (!animRef.current) { rafRef.current = requestAnimationFrame(tick); return; }
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) < 0.3) {
        currentFrameRef.current = targetFrameRef.current;
        animRef.current.goToAndStop(targetFrameRef.current, true);
      } else {
        const next = currentFrameRef.current + diff * lerp;
        currentFrameRef.current = next;
        animRef.current.goToAndStop(Math.round(next), true);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current); };
  }, []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.min(Math.max(scrollTop / (docHeight * 0.6), 0), 1);
    targetFrameRef.current = pct * (totalFrames - 1);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.div
      ref={containerRef}
      className="shrink-0 origin-left"
      style={{ filter: dark ? "invert(1)" : "none" }}
      animate={{
        width: isMobile
          ? (compact ? 96 : 120)
          : (compact ? 120 : 200),
        height: isMobile
          ? (compact ? 38 : 48)
          : (compact ? 48 : 80),
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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{
        duration: 0.65,
        delay: 0.08 + index * 0.06,
        ease: EASE_SMOOTH,
      }}
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
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.55, ease: EASE_SMOOTH }}
    >
      <div className="flex-1 flex flex-col justify-between px-[56px] pt-[170px] pb-[56px] max-md:px-[24px] max-md:pt-[120px] max-md:pb-[40px]">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-between flex-1">
        <nav className="flex flex-col gap-0 w-full">
          {menuKeys.map((key, i) => (
            <MenuNavItem key={key} item={{ label: t(`nav.${key}`), href: menuHrefs[i] }} index={i} onNavigate={onAnimatedNavigate} />
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE_SMOOTH }}
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
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const headerRef = useRef<HTMLElement>(null);
  const expandedHeightRef = useRef(0);
  const [spacerHeight, setSpacerHeight] = useState(0);
  const { t } = useTranslation();
  const { isTransitioning } = useProjectTransition();
  const animatedNavRef = useRef(false);

  /*
   * During the FLIP transition the header hides instantly (the overlay's
   * solid white backdrop covers everything). When the card lands and the
   * overlay begins to fade out (phase→"done", isTransitioning→false),
   * the header slides down from above — visually "pushing" the hero
   * into its final position below the header bar.
   */
  const projectHide = isTransitioning;

  /* ── Always measure the header's height and cache the "expanded" value ── */
  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el || projectHide) return;
    const h = el.getBoundingClientRect().height;
    if (h > 0 && !scrolledRef.current) {
      expandedHeightRef.current = h;
      setSpacerHeight(h);
    }
  });

  useEffect(() => {
    const el = headerRef.current;
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
    const onScroll = () => {
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
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [rawShadowOpacity]);

  useEffect(() => {
    /* Skip auto-close when an animated navigation is in progress */
    if (animatedNavRef.current) return;
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => { if (!scrolled) setMenuOpen(false); }, [scrolled]);

  const headerBg = getHeaderBg(location.pathname);
  const headerTextDark = isHeaderDark(location.pathname);

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
  const HEADER_SLIDE_EASE = [0.22, 1, 0.36, 1];
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
        className="fixed top-0 left-0 z-50 w-full px-[56px] max-md:px-[24px] border-b"
        style={{ boxShadow }}
        animate={{
          backgroundColor: headerBg,
          borderBottomColor: headerTextDark ? "rgba(25,30,37,0.12)" : "rgba(226,223,218,0.5)",
          y: projectHide ? "-100%" : 0,
        }}
        transition={{
          backgroundColor: { duration: 0.4, ease: EASE_SMOOTH },
          borderBottomColor: { duration: 0.4, ease: EASE_SMOOTH },
          y: projectHide
            ? { duration: 0 }
            : { duration: HEADER_SLIDE_DUR, ease: HEADER_SLIDE_EASE, delay: HEADER_SLIDE_DELAY },
        }}
      >
        <motion.div
          className="flex items-center justify-between max-w-[1400px] mx-auto"
          animate={{
            paddingTop: scrolled ? (isMobile ? 21 : 16) : 24,
            paddingBottom: scrolled ? (isMobile ? 21 : 16) : 24,
            paddingLeft: 0,
            paddingRight: 0,
          }}
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
            className="hidden md:flex items-start whitespace-nowrap relative overflow-hidden min-w-[500px] max-lg:min-w-[380px]"
            animate={{
              height: scrolled ? 0 : "auto",
              pointerEvents: scrolled ? "none" as const : "auto" as const,
            }}
            transition={{
              height: {
                duration: scrolled ? 0.7 : 0.8,
                ease: EASE_SMOOTH,
                delay: scrolled ? 0.35 : 0,
              },
            }}
          >
            <motion.div
              className="flex flex-col gap-[5px] items-start text-[16px] leading-[normal] font-['GT_Ultra_Median',sans-serif] shrink-0"
              animate={{
                opacity: scrolled ? 0 : 1,
                y: scrolled ? -120 : 0,
              }}
              transition={{
                y: {
                  duration: scrolled ? 0.85 : 1.0,
                  ease: EASE_SMOOTH,
                  delay: scrolled ? 0 : 0.3,
                },
                opacity: {
                  duration: scrolled ? 0.55 : 0.7,
                  ease: EASE_SMOOTH,
                  delay: scrolled ? 0 : 0.35,
                },
              }}
            >
              {menuKeys.map((key, i) => (
                <DesktopNavLink key={key} item={{ label: t(`nav.${key}`), href: menuHrefs[i] }} index={i} dark={headerTextDark} />
              ))}
            </motion.div>
            <motion.div
              className="ml-auto pl-[40px] shrink-0 max-lg:pl-[8px]"
              animate={{
                opacity: scrolled ? 0 : 1,
                y: scrolled ? -120 : 0,
              }}
              transition={{
                y: {
                  duration: scrolled ? 0.85 : 1.0,
                  ease: EASE_SMOOTH,
                  delay: scrolled ? 0.06 : 0.25,
                },
                opacity: {
                  duration: scrolled ? 0.5 : 0.65,
                  ease: EASE_SMOOTH,
                  delay: scrolled ? 0.03 : 0.4,
                },
              }}
            >
              <LangSwitcher dark={headerTextDark} />
            </motion.div>
          </motion.nav>

          {/* Hamburger / X — appears on scroll (desktop) or always (mobile) */}
          <AnimatePresence>
            {(scrolled || true) && (
              <motion.button
                className={`relative p-2 z-[60] ${
                  scrolled ? "block" : "md:hidden"
                }`}
                style={{ color: headerTextDark && !menuOpen ? "#191e25" : "#e5e1dc" }}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: DUR_MICRO, ease: EASE_SMOOTH }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square">
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
            )}
          </AnimatePresence>
        </motion.div>
      </motion.header>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && <FullscreenMenu onClose={() => setMenuOpen(false)} onAnimatedNavigate={handleAnimatedNavigate} />}
      </AnimatePresence>
    </>
  );
}