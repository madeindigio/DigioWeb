import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type VerticalKey =
  | "fintech"
  | "energy"
  | "logistics"
  | "industry"
  | "telco"
  | "education"
  | "portals"
  | "pharma";

const sectorOrder: VerticalKey[] = [
  "fintech",
  "energy",
  "logistics",
  "industry",
  "telco",
  "education",
  "portals",
  "pharma",
];

const illustrationByVertical: Record<VerticalKey, string> = {
  fintech: "/images/verticales/Fintech.svg",
  energy: "/images/verticales/energia.svg",
  logistics: "/images/verticales/logistica.svg",
  industry: "/images/verticales/Industria.svg",
  telco: "/images/verticales/telco-media.svg",
  education: "/images/verticales/educacion.svg",
  portals: "/images/verticales/grandes-portales.svg",
  pharma: "/images/verticales/Farma.svg",
};

export function AboutSectors() {
  const { t } = useTranslation();
  const [activeVertical, setActiveVertical] = useState<VerticalKey>(sectorOrder[0]);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [visibleMobileCards, setVisibleMobileCards] = useState<Record<VerticalKey, boolean>>(() =>
    Object.fromEntries(sectorOrder.map((key) => [key, false])) as Record<VerticalKey, boolean>,
  );
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const illustrationLayerRef = useRef<HTMLDivElement | null>(null);

  const sectors = useMemo(
    () =>
      sectorOrder.map((key) => ({
        key,
        title: t(`pages.sobreDigio.sectors.${key}.title`),
        desc: t(`pages.sobreDigio.sectors.${key}.desc`),
        illustration: illustrationByVertical[key],
      })),
    [t],
  );

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsLargeScreen(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setIsLargeScreen(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const cards = stepRefs.current.filter(Boolean) as HTMLElement[];
    if (cards.length === 0) return;

    const syncActiveFromViewport = () => {
      const centerY = window.innerHeight / 2;
      let closest: { key: VerticalKey; distance: number } | null = null;

      cards.forEach((step) => {
        const rect = step.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - centerY);
        const key = (step.dataset.vertical || "fintech") as VerticalKey;

        if (!closest || distance < closest.distance) {
          closest = { key, distance };
        }
      });

      if (closest) {
        setActiveVertical(closest.key);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const step = entry.target as HTMLElement;
          const key = (step.dataset.vertical || "fintech") as VerticalKey;

          if (entry.isIntersecting) {
            setVisibleMobileCards((prev) =>
              prev[key] ? prev : { ...prev, [key]: true },
            );
            setActiveVertical(key);
          }
        });
      },
      {
        threshold: isLargeScreen ? 0.5 : 0.35,
        rootMargin: isLargeScreen ? "0px" : "0px 0px -12% 0px",
      },
    );

    cards.forEach((step) => {
      observer.observe(step);
    });

    syncActiveFromViewport();
    window.addEventListener("scroll", syncActiveFromViewport, { passive: true });
    window.addEventListener("resize", syncActiveFromViewport);

    return () => {
      window.removeEventListener("scroll", syncActiveFromViewport);
      window.removeEventListener("resize", syncActiveFromViewport);
      observer.disconnect();
    };
  }, [isLargeScreen, sectors.length]);

  useEffect(() => {
    const section = sectionRef.current;
    const illustrationLayer = illustrationLayerRef.current;

    if (!isLargeScreen || !section || !illustrationLayer) return;

    const maxShift = 14;
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frameId = 0;
    const epsilon = 0.05;

    const applyShift = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      illustrationLayer.style.setProperty("--illustration-shift-x", `${current.x.toFixed(2)}px`);
      illustrationLayer.style.setProperty("--illustration-shift-y", `${current.y.toFixed(2)}px`);

      const dx = Math.abs(target.x - current.x);
      const dy = Math.abs(target.y - current.y);

      if (dx > epsilon || dy > epsilon) {
        frameId = window.requestAnimationFrame(applyShift);
        return;
      }

      frameId = 0;
    };

    const requestShift = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(applyShift);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return;

      const relX = (event.clientX - rect.left) / rect.width;
      const relY = (event.clientY - rect.top) / rect.height;
      const normalizedX = (relX - 0.5) * 2;
      const normalizedY = (relY - 0.5) * 2;

      target.x = normalizedX * maxShift;
      target.y = normalizedY * maxShift;
      requestShift();
    };

    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
      requestShift();
    };

    illustrationLayer.style.setProperty("--illustration-shift-x", "0px");
    illustrationLayer.style.setProperty("--illustration-shift-y", "0px");
    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [isLargeScreen]);

  if (!isLargeScreen) {
    return (
      <section className="bg-[#191e25] w-full px-[24px] py-[56px]">
        <div className="mx-auto flex flex-col gap-[20px]">
          {sectors.map((sector, index) => {
            const isActive = activeVertical === sector.key;
            const isVisible = visibleMobileCards[sector.key];

            return (
              <article
                key={sector.key}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className="rounded-[28px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] px-[20px] py-[24px]"
                data-vertical={sector.key}
                style={{
                  opacity: isVisible ? 1 : 0.4,
                  transform: isVisible ? "translateY(0px)" : "translateY(32px)",
                  transition: "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1), border-color 350ms ease, background-color 350ms ease",
                  borderColor: isActive ? "rgba(88,59,255,0.45)" : "rgba(255,255,255,0.08)",
                  backgroundColor: isActive ? "rgba(88,59,255,0.08)" : "rgba(255,255,255,0.02)",
                }}
              >
                <div className="flex flex-col gap-[18px]">
                  <p
                    className="font-['GT_Ultra_Median',sans-serif] text-white text-[30px] tracking-[-1px] leading-[1.02]"
                    style={{
                      opacity: isActive ? 1 : 0.56,
                      transform: isActive ? "translateY(0px) scale(1)" : "translateY(10px) scale(0.98)",
                      transformOrigin: "left top",
                      transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    {sector.title}
                  </p>

                  <div className="relative flex h-[180px] items-center justify-center overflow-hidden rounded-[22px]">
                    <img
                      src={sector.illustration}
                      alt=""
                      aria-hidden="true"
                      className="h-[96px] w-[96px] object-contain"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isActive ? "translateY(0px) scale(1)" : "translateY(12px) scale(0.94)",
                        filter: isActive ? "blur(0px)" : "blur(6px)",
                        transition: "opacity 650ms cubic-bezier(0.22,1,0.36,1), transform 650ms cubic-bezier(0.22,1,0.36,1), filter 500ms ease",
                      }}
                    />
                  </div>

                  <p
                    className="font-['Manrope',sans-serif] font-[500] text-[#d0d6de] text-[16px] leading-[1.55]"
                    style={{
                      opacity: isActive ? 1 : 0.66,
                      transform: isActive ? "translateY(0px)" : "translateY(12px)",
                      transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    {sector.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative w-full bg-[#191e25] text-white pt-[9vh] pb-[9vh]">
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center">
          <div className="relative w-[clamp(320px,32vw,500px)] aspect-square flex items-center justify-center">
            <div
              ref={illustrationLayerRef}
              className="absolute inset-[12%] overflow-hidden flex items-center justify-center"
            >
              {sectors.map((sector) => (
                <img
                  key={sector.key}
                  src={sector.illustration}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-contain transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: activeVertical === sector.key ? 1 : 0,
                    transform: `translate3d(var(--illustration-shift-x, 0px), calc(var(--illustration-shift-y, 0px) * 0.7 + ${activeVertical === sector.key ? "0px" : "24px"}), 0) scale(${activeVertical === sector.key ? 1 : 0.92})`,
                    transformOrigin: "center",
                    willChange: "transform, opacity, filter",
                    filter: activeVertical === sector.key ? "blur(0px)" : "blur(10px)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-[56px] relative">
        <div className="relative z-20">
          {sectors.map((sector, index) => {
            const isActive = activeVertical !== null && sector.key === activeVertical;

            return (
              <article
                key={sector.key}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className="scroll-step min-h-[82vh] flex items-center"
                data-vertical={sector.key}
              >
                <div className="w-[30%] pr-16 text-right">
                  <p
                    className="font-['GT_Ultra_Median',sans-serif] font-[400] text-[46px] leading-[1.08] tracking-[-1px] transition-all duration-700"
                    style={{
                      opacity: isActive ? 1 : 0.38,
                      transform: isActive ? "translateY(0px) scale(1)" : "translateY(18px) scale(0.97)",
                      color: "#e5e1dc",
                    }}
                  >
                    {sector.title}
                  </p>
                </div>

                <div className="w-[40%]" />

                <div className="w-[30%] pl-16 text-left">
                  <p
                    className="font-['Manrope',sans-serif] font-[500] text-[18px] leading-[1.6] max-w-[340px] transition-all duration-700"
                    style={{
                      opacity: isActive ? 1 : 0.38,
                      transform: isActive ? "translateY(0px)" : "translateY(18px)",
                      color: "#d0d6de",
                    }}
                  >
                    {sector.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
