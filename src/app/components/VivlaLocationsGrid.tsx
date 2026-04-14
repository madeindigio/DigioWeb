import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import svgPaths from "../../imports/svg-ro6oo4s0ax";

/* ─── Location images ─── */
const imgCostaBlanca = "/images/placeholder-gray.svg";
const imgCostaDelSol = "/images/placeholder-gray.svg";
const imgIbiza = "/images/placeholder-gray.svg";
const imgMenorca1 = "/images/placeholder-gray.svg";
const imgMenorca2 = "/images/placeholder-gray.svg";
const imgMenorca3 = "/images/placeholder-gray.svg";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─── VIVLA sun logo (SVG from Figma) ─── */
function VivlaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 133.135 133.134">
      <path d={svgPaths.p3fbebe80} fill="black" />
      <path d={svgPaths.p13e49280} fill="black" />
      <path d={svgPaths.p3cfffd00} fill="black" />
      <path d={svgPaths.pfd8db80} fill="black" />
      <path d={svgPaths.p1d2cbe00} fill="black" />
      <path d={svgPaths.p13e74680} fill="black" />
      <path d={svgPaths.p13091240} fill="black" />
      <path d={svgPaths.p10232e70} fill="black" />
    </svg>
  );
}

/* ─── Orbital image config ─── */
interface OrbitalImage {
  src: string;
  alt: string;
  /** Angle in degrees on the orbit circle (0 = top) */
  angleDeg: number;
  /** Image width in px */
  w: number;
  /** Image height in px */
  h: number;
}

const ORBITAL_IMAGES: OrbitalImage[] = [
  { src: imgMenorca1, alt: "Menorca", angleDeg: 0, w: 190, h: 140 },
  { src: imgCostaBlanca, alt: "Costa Blanca", angleDeg: 60, w: 180, h: 130 },
  { src: imgMenorca3, alt: "Menorca aerial", angleDeg: 120, w: 186, h: 136 },
  { src: imgCostaDelSol, alt: "Costa del Sol", angleDeg: 180, w: 178, h: 132 },
  { src: imgIbiza, alt: "Ibiza", angleDeg: 240, w: 184, h: 138 },
  { src: imgMenorca2, alt: "Menorca coast", angleDeg: 300, w: 182, h: 134 },
];

/* ─── Intersection-driven trigger ─── */
function useInView(threshold = 0.35) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Responsive orbit radius ─── */
function useOrbitRadius(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [radius, setRadius] = useState(180);
  useEffect(() => {
    function measure() {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const minDim = Math.min(width, height);
      // orbit radius ~56% of smallest dimension — images deliberately overflow container edges
      setRadius(Math.max(200, Math.min(420, minDim * 0.56)));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [containerRef]);
  return radius;
}

/* ─── Main component ─── */
export function VivlaLocationsGrid() {
  const { ref, inView } = useInView(0.3);
  const containerRef = useRef<HTMLDivElement>(null);
  const radius = useOrbitRadius(containerRef);

  return (
    <div
      ref={(node) => {
        // share ref between useInView and useOrbitRadius
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className="absolute inset-0 bg-[#f8f7f0] overflow-hidden"
    >
      {/* ── Logo (always dead-center, appears first with spin) ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-20"
        style={{ x: "-50%", y: "-50%" }}
        initial={{ opacity: 0, rotate: -120, scale: 0.5 }}
        animate={inView ? { opacity: 1, rotate: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: EASE }}
      >
        <VivlaLogo className="w-[80px] h-[80px] max-md:w-[56px] max-md:h-[56px]" />
      </motion.div>

      {/* ── Orbiting ring — rotates slowly and continuously ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-10"
        style={{ x: "-50%", y: "-50%", width: 0, height: 0 }}
        animate={inView ? { rotate: 360 } : {}}
        transition={{
          rotate: {
            duration: 300,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        {ORBITAL_IMAGES.map((img, i) => {
          const angleRad = (img.angleDeg * Math.PI) / 180;
          const tx = Math.sin(angleRad) * radius;
          const ty = -Math.cos(angleRad) * radius;

          return (
            <motion.div
              key={img.alt}
              className="absolute rounded-[6px] overflow-hidden shadow-md"
              style={{
                width: img.w,
                height: img.h,
                top: ty - img.h / 2,
                left: tx - img.w / 2,
              }}
              /* Entry: fade-in from the edge toward its orbit position */
              initial={{
                opacity: 0,
                scale: 0.6,
                x: Math.sin(angleRad) * 60,
                y: -Math.cos(angleRad) * 60,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                      x: 0,
                      y: 0,
                      /* counter-rotate to stay upright */
                      rotate: -360,
                    }
                  : {}
              }
              transition={{
                opacity: { duration: 1, delay: 0.55 + i * 0.14, ease: EASE },
                scale: { duration: 1, delay: 0.55 + i * 0.14, ease: EASE },
                x: { duration: 1, delay: 0.55 + i * 0.14, ease: EASE },
                y: { duration: 1, delay: 0.55 + i * 0.14, ease: EASE },
                rotate: {
                  duration: 300,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
            >
              <img
                alt={img.alt}
                src={img.src}
                className="w-full h-full object-cover pointer-events-none"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}