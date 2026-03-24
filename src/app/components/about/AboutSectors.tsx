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

const buildPath = (points: Array<[number, number]>) => {
  const padded = [...points];
  while (padded.length < 24) padded.push(padded[padded.length - 1]);

  const targetMin = 12;
  const targetMax = 88;
  const source = padded.slice(0, 24);
  const xs = source.map(([x]) => x);
  const ys = source.map(([, y]) => y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const width = Math.max(maxX - minX, 1);
  const height = Math.max(maxY - minY, 1);

  const normalized = source.map(([x, y]) => {
    const nx = targetMin + ((x - minX) / width) * (targetMax - targetMin);
    const ny = targetMin + ((y - minY) / height) * (targetMax - targetMin);
    return [Number(nx.toFixed(2)), Number(ny.toFixed(2))] as [number, number];
  });

  return `M ${normalized.map(([x, y]) => `${x},${y}`).join(" L ")} Z`;
};

const morphShapes: Record<VerticalKey, string> = {
  fintech: buildPath(Array.from({ length: 24 }, (_, i) => [50 + 38 * Math.cos((i * Math.PI) / 12), 50 + 38 * Math.sin((i * Math.PI) / 12)])),
  energy: buildPath([[52, 8], [61, 33], [86, 33], [39, 92], [49, 59], [21, 59]]),
  logistics: buildPath([[18, 28], [71, 28], [71, 41], [84, 41], [91, 53], [91, 68], [82, 68], [78, 74], [66, 74], [62, 68], [18, 68]]),
  industry: buildPath([[50, 12], [58, 18], [68, 16], [71, 26], [80, 31], [76, 42], [82, 50], [76, 58], [80, 69], [71, 74], [68, 84], [58, 82], [50, 88], [42, 82], [32, 84], [29, 74], [20, 69], [24, 58], [18, 50], [24, 42], [20, 31], [29, 26], [32, 16], [42, 18]]),
  telco: buildPath([[15, 86], [24, 74], [35, 64], [46, 54], [50, 14], [54, 54], [65, 64], [76, 74], [85, 86], [75, 86], [66, 76], [56, 66], [44, 66], [34, 76], [25, 86]]),
  education: buildPath([[12, 36], [34, 27], [50, 22], [66, 27], [88, 36], [88, 64], [66, 73], [50, 78], [34, 73], [12, 64]]),
  portals: buildPath([[14, 28], [50, 14], [86, 28], [86, 86], [14, 86], [14, 63], [34, 63], [34, 86], [66, 86], [66, 63], [86, 63]]),
  pharma: buildPath([[40, 18], [60, 18], [60, 40], [82, 40], [82, 60], [60, 60], [60, 82], [40, 82], [40, 60], [18, 60], [18, 40], [40, 40]]),
};

const backgroundByVertical: Record<VerticalKey, string> = {
  fintech: "/images/verticales/bg%20verticals/fintech.jpeg",
  energy: "/images/verticales/bg%20verticals/energy.jpeg",
  logistics: "/images/verticales/bg%20verticals/transport.jpeg",
  industry: "/images/verticales/bg%20verticals/industry40.jpeg",
  telco: "/images/verticales/bg%20verticals/streaming.jpeg",
  education: "/images/verticales/bg%20verticals/education.jpeg",
  portals: "/images/verticales/bg%20verticals/ecommerce.jpeg",
  pharma: "/images/verticales/bg%20verticals/pharma.jpeg",
};

export function AboutSectors() {
  const { t } = useTranslation();
  const [activeVertical, setActiveVertical] = useState<VerticalKey>("fintech");
  const [activePath, setActivePath] = useState(morphShapes.fintech);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageLayerRef = useRef<HTMLDivElement | null>(null);

  const sectors = useMemo(
    () =>
      sectorOrder.map((key) => ({
        key,
        title: t(`pages.sobreDigio.sectors.${key}.title`),
        desc: t(`pages.sobreDigio.sectors.${key}.desc`),
        image: backgroundByVertical[key],
        path: morphShapes[key],
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
    if (!isLargeScreen) return;

    const syncActiveFromViewport = () => {
      const centerY = window.innerHeight / 2;
      let closest: { key: VerticalKey; path: string; distance: number } | null = null;

      stepRefs.current.forEach((step) => {
        if (!step) return;
        const rect = step.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - centerY);
        const key = (step.dataset.vertical || "fintech") as VerticalKey;
        const path = step.dataset.path || morphShapes.fintech;

        if (!closest || distance < closest.distance) {
          closest = { key, path, distance };
        }
      });

      if (closest) {
        setActiveVertical(closest.key);
        setActivePath(closest.path);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const step = entry.target as HTMLElement;
          const key = (step.dataset.vertical || "fintech") as VerticalKey;
          const path = step.dataset.path || morphShapes.fintech;
          setActiveVertical(key);
          setActivePath(path);
        });
      },
      {
        threshold: 0.55,
      },
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    syncActiveFromViewport();
    window.addEventListener("resize", syncActiveFromViewport);

    return () => {
      window.removeEventListener("resize", syncActiveFromViewport);
      observer.disconnect();
    };
  }, [isLargeScreen, sectors.length]);

  useEffect(() => {
    const section = sectionRef.current;
    const imageLayer = imageLayerRef.current;

    if (!isLargeScreen || !section || !imageLayer) return;

    const maxShift = 14;
    const current = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    let frameId = 0;

    const applyShift = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      imageLayer.style.setProperty("--bg-shift-x", `${current.x.toFixed(2)}px`);
      imageLayer.style.setProperty("--bg-shift-y", `${current.y.toFixed(2)}px`);
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
    };

    const onPointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    frameId = window.requestAnimationFrame(applyShift);
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
        <div className="max-w-[1000px] mx-auto flex flex-col gap-[28px]">
          {sectors.map((sector) => (
            <article key={sector.key} className="w-full">
              <p className="font-['GT_Ultra_Median',sans-serif] font-[700] text-white text-[32px] tracking-[-1px] leading-[1.08]">
                {sector.title}
              </p>
              <p className="mt-[14px] font-['Manrope',sans-serif] font-[500] text-[#d0d6de] text-[16px] leading-[1.5]">
                {sector.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative w-full bg-[#191e25] text-white py-[120px]">
      <div className="mx-auto max-w-[1480px] px-[56px] relative">
        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[rgba(255,255,255,0.15)] -translate-y-1/2" />

            <div className="relative w-[clamp(420px,42vw,680px)] aspect-square flex items-center justify-center">
              <div ref={imageLayerRef} className="absolute inset-[2%] overflow-hidden">
                {sectors.map((sector) => (
                  <img
                    key={sector.key}
                    src={sector.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                    style={{
                      opacity: activeVertical === sector.key ? 0.24 : 0,
                      transform: "translate3d(var(--bg-shift-x, 0px), var(--bg-shift-y, 0px), 0) scale(1.04)",
                      transformOrigin: "center",
                      willChange: "transform, opacity",
                      filter: "grayscale(50%) brightness(0.6)",
                    }}
                  />
                ))}
              </div>

              <div
                className="absolute w-[350px] h-[350px] rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(15,22,33,0.78) 0%, rgba(15,22,33,0.48) 48%, rgba(15,22,33,0) 78%)",
                }}
              />

              <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="relative z-20 w-[330px] h-[330px]">
                <path
                  d={activePath}
                  fill="none"
                  stroke="#583BFF"
                  strokeWidth="2.25"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{ transition: "d 1.2s cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative z-20">
          {sectors.map((sector, index) => {
            const isActive = sector.key === activeVertical;

            return (
              <article
                key={sector.key}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                className="scroll-step min-h-screen flex items-center"
                data-vertical={sector.key}
                data-path={sector.path}
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
