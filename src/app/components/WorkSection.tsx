import imgRectangle3 from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";
import imgRectangle4 from "figma:asset/9df4b0260f9f37c4401ad84e556ad9e573c8702b.png";
import imgBgImg1 from "figma:asset/4372bc2c881ed32f89039f0e0dfa1bfa882f228a.png";
import imgRectangle5 from "figma:asset/a1910742e185dcdfa1bd4e5e8356e39259500eba.png";
import imgBgImg2 from "figma:asset/2214d58f15337db66ff6aba0f5e9cef891db63d8.png";
import imgRectangle8 from "figma:asset/703c1bbb0750e4d852aeb246e01ec3e480282103.png";
import imgVivla from "figma:asset/43cdb3e72f58cd88be954c02c14019a69bab0bb8.png";
import imgRectangle7 from "/images/idermapp/iDermApp hero section IMG.jpg";
import { imgEkhilurPlaceholder } from "./projectData";

import type { ReactNode } from "react";
import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { LangText } from "./LangText";
import { useProjectTransition } from "./ProjectTransitionContext";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      transition={{
        duration: 0.9,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function Tag({ label, bgClass = "bg-[rgba(25,30,37,0.24)]" }: { label: string; bgClass?: string }) {
  return (
    <div className={`absolute left-[24px] top-[24px] z-30 backdrop-blur-[5px] ${bgClass} rounded-[300px] px-[16px] py-[8px] max-md:left-[12px] max-md:top-[12px]`}>
      <p className="font-['GT_Ultra_Median',sans-serif] text-[16px] text-white tracking-[-0.64px] leading-[22px] whitespace-nowrap text-center max-md:text-[12px] max-md:leading-[17px]">
        {label}
      </p>
    </div>
  );
}

/* ─── Hook: navigate to project detail with snapshot ─── */
export function useProjectClick(
  slug: string,
  containerRef: React.RefObject<HTMLDivElement | null>,
  imageSrc: string,
  tag: string,
  tagBg?: string,
) {
  const navigate = useNavigate();
  const { startTransition } = useProjectTransition();

  return useCallback(() => {
    if (imageSrc) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        startTransition({ slug, imageSrc, rect, tag, tagBg });
      }
    }
    navigate(`/proyecto/${slug}`);
  }, [slug, containerRef, imageSrc, tag, tagBg, navigate, startTransition]);
}

/* ── Hover overlay with cursor-following button ─── */
function CardHoverOverlay({
  containerRef,
  onClick,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const { t, i18n } = useTranslation();
  const [isHoverable, setIsHoverable] = useState(true);

  useEffect(() => {
    setIsHoverable(window.matchMedia('(hover: hover)').matches);
  }, []);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 55, damping: 18, mass: 1.2 });
  const springY = useSpring(mouseY, { stiffness: 55, damping: 18, mass: 1.2 });

  const leftPct = useTransform(springX, (v: number) => `${v * 100}%`);
  const topPct = useTransform(springY, (v: number) => `${v * 100}%`);

  /* ── Measure pill dimensions for reliable cross-browser animation ── */
  const measureRef = useRef<HTMLDivElement>(null);
  const [pillSize, setPillSize] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    const el = measureRef.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      setPillSize((prev) =>
        prev && Math.abs(prev.w - width) < 1 && Math.abs(prev.h - height) < 1
          ? prev
          : { w: Math.ceil(width), h: Math.ceil(height) },
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [i18n.language]);

  /*
   * Attach pointer listeners directly to the container DOM node via useEffect.
   * This makes them immune to React re-renders and DOM mutations from
   * AnimatePresence inserting/removing siblings — the root cause of the
   * "hover only works while moving" bug.
   */
  const hoveredRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updatePos = (e: PointerEvent, jump: boolean) => {
      const rect = container.getBoundingClientRect();
      const nx = Math.max(0.12, Math.min(0.88, (e.clientX - rect.left) / rect.width));
      const ny = Math.max(0.12, Math.min(0.88, (e.clientY - rect.top) / rect.height));
      if (jump) {
        mouseX.jump(nx);
        mouseY.jump(ny);
      } else {
        mouseX.set(nx);
        mouseY.set(ny);
      }
    };

    const applyImgScale = (scale: string, dur: string) => {
      if (!container.querySelector("video")) {
        const img = container.querySelector("img");
        if (img) {
          img.style.transition = `transform ${dur} cubic-bezier(0.22, 1, 0.36, 1)`;
          img.style.transform = scale;
        }
      }
    };

    const onEnter = (e: PointerEvent) => {
      updatePos(e, true);
      if (!hoveredRef.current) {
        hoveredRef.current = true;
        setHovered(true);
        applyImgScale("scale(1.04)", "0.6s");
      }
    };

    const onMove = (e: PointerEvent) => {
      updatePos(e, false);
      // Safety net: re-activate if state was lost
      if (!hoveredRef.current) {
        hoveredRef.current = true;
        setHovered(true);
        applyImgScale("scale(1.04)", "0.6s");
      }
    };

    const onLeave = () => {
      hoveredRef.current = false;
      setHovered(false);
      applyImgScale("scale(1)", "0.5s");
    };

    container.addEventListener("pointerenter", onEnter);
    container.addEventListener("pointermove", onMove);
    container.addEventListener("pointerleave", onLeave);

    return () => {
      container.removeEventListener("pointerenter", onEnter);
      container.removeEventListener("pointermove", onMove);
      container.removeEventListener("pointerleave", onLeave);
    };
  }, [containerRef, mouseX, mouseY, isHoverable]);

  if (!isHoverable) {
    return (
      <div
        className="absolute inset-0 z-20"
        onClick={onClick}
      />
    );
  }

  return (
    <>
      {/* Hidden measurement element — renders pill at natural size off-screen */}
      <div
        ref={measureRef}
        aria-hidden
        className="absolute pointer-events-none opacity-0 -z-10 rounded-[300px] px-[40px] py-[16px] max-md:px-[24px] max-md:py-[10px] whitespace-nowrap"
        style={{ visibility: "hidden", position: "absolute", top: -9999 }}
      >
        <p className="font-['GT_Ultra_Median',sans-serif] text-[20px] tracking-[-0.8px] leading-[27px] max-md:text-[14px] max-md:leading-[20px]">
          {t("work.viewProject")}
        </p>
      </div>

      {/* Click target — transparent, above image but below animated content */}
      <div
        className="absolute inset-0 z-20"
        onClick={onClick}
      />

      <AnimatePresence>
        {hovered && (
          <>
            <motion.div
              className="absolute inset-0 bg-[rgba(0,0,0,0.56)] z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE_SMOOTH }}
            />
            <motion.div
              className="absolute z-30 pointer-events-none"
              style={{
                left: leftPct,
                top: topPct,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: {
                  duration: 0.15,
                  ease: "easeOut",
                },
              }}
            >
              <motion.div
                className="rounded-[300px] border-[1.5px] border-solid border-white/80 backdrop-blur-[4px] overflow-hidden flex items-center justify-center"
                initial={{
                  width: 18,
                  height: 18,
                  backgroundColor: "rgba(255,255,255,0.35)",
                  boxShadow: "0 0 0px 0px rgba(255,255,255,0)",
                }}
                animate={{
                  width: pillSize?.w ?? 200,
                  height: pillSize?.h ?? 59,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  boxShadow: [
                    "0 0 0px 0px rgba(255,255,255,0)",
                    "0 0 10px 2px rgba(255,255,255,0.12)",
                    "0 0 0px 0px rgba(255,255,255,0)",
                  ],
                }}
                exit={{
                  width: 14,
                  height: 14,
                  backgroundColor: "rgba(255,255,255,0.2)",
                  boxShadow: "0 0 0px 0px rgba(255,255,255,0)",
                  opacity: 0,
                }}
                transition={{
                  width: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
                  height: { duration: 0.52, ease: [0.16, 1, 0.3, 1] },
                  backgroundColor: { duration: 0.4, delay: 0.12 },
                  opacity: { duration: 0.22 },
                  boxShadow: {
                    duration: 2.8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    delay: 0.55,
                  },
                }}
              >
                <div className="px-[40px] py-[16px] max-md:px-[24px] max-md:py-[10px]">
                  <motion.p
                    className="font-['GT_Ultra_Median',sans-serif] text-[20px] text-white tracking-[-0.8px] leading-[27px] whitespace-nowrap text-center max-md:text-[14px] max-md:leading-[20px]"
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(2px)" }}
                    transition={{
                      opacity: { duration: 0.32, delay: 0.22 },
                      filter: { duration: 0.32, delay: 0.22 },
                    }}
                  >
                    {t("work.viewProject")}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function FullWidthCard({
  slug,
  image,
  tag,
  projectName,
  description,
  imgClassName = "object-cover",
  tagBg,
  videoSrc,
  eager = false,
}: {
  slug: string;
  image: string;
  tag: string;
  projectName: string;
  description: string;
  imgClassName?: string;
  tagBg?: string;
  videoSrc?: string;
  eager?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleClick = useProjectClick(slug, containerRef, image, tag, tagBg);

  return (
    <div className="flex flex-col items-start w-full">
      <div ref={containerRef} className="relative w-full h-[700px] max-lg:h-[500px] max-md:h-[300px] overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-[#d8d8d8]" />
        {videoSrc ? (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src={videoSrc}
              preload="none"
            />
          </>
        ) : (
          <img
            alt={projectName}
            className={`absolute inset-0 w-full h-full ${imgClassName}`}
            src={image}
            loading={eager ? "eager" : "lazy"}
            fetchPriority={eager ? "high" : "auto"}
            decoding="async"
          />
        )}
        <Tag label={tag} bgClass={tagBg} />
        <CardHoverOverlay containerRef={containerRef} onClick={handleClick} />
      </div>
      <div className="flex gap-[40px] items-baseline py-[32px] w-full max-md:flex-col max-md:gap-[16px] max-md:py-[20px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[42.67px] tracking-[-1.7068px] leading-[53.333px] whitespace-nowrap shrink-0 max-md:text-[28px] max-md:leading-[36px]">
          {projectName}
        </p>
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] flex-1 max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[18px] max-md:leading-[26px]">
          {description}
        </p>
      </div>
    </div>
  );
}

function HalfCard({
  slug,
  image,
  tag,
  projectName,
  description,
  imgClassName = "object-cover",
  tagBg,
}: {
  slug: string;
  image: string;
  tag: string;
  projectName: string;
  description: string;
  imgClassName?: string;
  tagBg?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleClick = useProjectClick(slug, containerRef, image, tag, tagBg);

  return (
    <div className="flex flex-col items-start flex-1 min-w-0">
      <div ref={containerRef} className="relative w-full h-[500px] max-lg:h-[350px] max-md:h-[250px] overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-[#d8d8d8]" />
        <img alt={projectName} className={`absolute inset-0 w-full h-full ${imgClassName}`} src={image} loading="lazy" decoding="async" />
        <Tag label={tag} bgClass={tagBg} />
        <CardHoverOverlay containerRef={containerRef} onClick={handleClick} />
      </div>
      <div className="flex gap-[40px] items-start py-[32px] w-full max-md:flex-col max-md:gap-[12px] max-md:py-[20px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] whitespace-nowrap shrink-0 max-md:text-[20px] max-md:leading-[28px]">
          {projectName}
        </p>
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] flex-1 min-w-0 max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[16px] max-md:leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function WorkSection() {
  const { t } = useTranslation();
  return (
    <section id="trabajo" className="w-full px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
        {/* Title */}
        <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
          {t("work.title")}
        </LangText>

        {/* Cards */}
        <div className="flex flex-col gap-[56px] max-md:gap-[32px]">
          {/* Full width - ekhilur */}
          <ScrollReveal>
            <FullWidthCard
              slug="ekhilur"
              image={imgEkhilurPlaceholder}
              tag={t("work.projects.ekhilur.tag")}
              projectName={t("work.projects.ekhilur.name")}
              description={t("work.projects.ekhilur.description")}
              tagBg="bg-[rgba(25,30,37,0.18)]"
              eager
            />
          </ScrollReveal>

          {/* Two cards row */}
          <ScrollReveal>
            <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
              <HalfCard
                slug="roomonitor"
                image={imgRectangle3}
                tag={t("work.projects.roomonitor.tag")}
                projectName={t("work.projects.roomonitor.name")}
                description={t("work.projects.roomonitor.description")}
              />
              <HalfCard
                slug="finsa"
                image={imgRectangle4}
                tag={t("work.projects.finsa.tag")}
                projectName={t("work.projects.finsa.name")}
                description={t("work.projects.finsa.description")}
              />
            </div>
          </ScrollReveal>

          {/* Full width - Symposium */}
          <ScrollReveal>
            <FullWidthCard
              slug="symposium"
              image={imgBgImg1}
              tag={t("work.projects.symposium.tag")}
              projectName={t("work.projects.symposium.name")}
              description={t("work.projects.symposium.description")}
              tagBg="bg-[rgba(163,163,163,0.24)]"
              videoSrc="https://digio.es/sites/default/files/2024-04/Symposium-header-2.mp4"
            />
          </ScrollReveal>

          {/* Two cards row */}
          <ScrollReveal>
            <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
              <HalfCard
                slug="spock"
                image={imgRectangle5}
                tag={t("work.projects.spock.tag")}
                projectName={t("work.projects.spock.name")}
                description={t("work.projects.spock.description")}
                tagBg="bg-[rgba(146,146,146,0.24)]"
              />
              <HalfCard
                slug="idermapp"
                image={imgRectangle7}
                tag={t("work.projects.idermapp.tag")}
                projectName={t("work.projects.idermapp.name")}
                description={t("work.projects.idermapp.description")}
              />
            </div>
          </ScrollReveal>

          {/* Full width - iVoox */}
          <ScrollReveal>
            <FullWidthCard
              slug="ivoox"
              image={imgBgImg2}
              tag={t("work.projects.ivoox.tag")}
              projectName={t("work.projects.ivoox.name")}
              description={t("work.projects.ivoox.description")}
              imgClassName="object-cover"
            />
          </ScrollReveal>

          {/* Two cards row */}
          <ScrollReveal>
            <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
              <HalfCard
                slug="navilens"
                image={imgRectangle8}
                tag={t("work.projects.navilens.tag")}
                projectName={t("work.projects.navilens.name")}
                description={t("work.projects.navilens.description")}
              />
              <HalfCard
                slug="vivla"
                image={imgVivla}
                tag={t("work.projects.vivla.tag")}
                projectName={t("work.projects.vivla.name")}
                description={t("work.projects.vivla.description")}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}