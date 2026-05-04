import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import svgPaths from "../../imports/svg-ro6oo4s0ax";

/* ─── Location images ─── */
const imgEspacio1 = "/images/projects/vivla/espacios/01.jpeg";
const imgEspacio2 = "/images/projects/vivla/espacios/02.jpeg";
const imgEspacio3 = "/images/projects/vivla/espacios/03.jpeg";
const imgEspacio4 = "/images/projects/vivla/espacios/04.jpeg";
const imgEspacio5 = "/images/projects/vivla/espacios/05.jpeg";
const imgEspacio6 = "/images/projects/vivla/espacios/06.jpeg";

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
  { src: imgEspacio1, alt: "Espacio VIVLA 1", angleDeg: 0, w: 208, h: 136 },
  { src: imgEspacio2, alt: "Espacio VIVLA 2", angleDeg: 60, w: 208, h: 136 },
  { src: imgEspacio3, alt: "Espacio VIVLA 3", angleDeg: 120, w: 208, h: 136 },
  { src: imgEspacio4, alt: "Espacio VIVLA 4", angleDeg: 180, w: 208, h: 136 },
  { src: imgEspacio5, alt: "Espacio VIVLA 5", angleDeg: 240, w: 208, h: 136 },
  { src: imgEspacio6, alt: "Espacio VIVLA 6", angleDeg: 300, w: 208, h: 136 },
];

function getOrbitFrames(angleDeg: number, radius: number, steps: number) {
  return Array.from({ length: steps + 1 }, (_, step) => {
    const angleRad = (((angleDeg + step * (360 / steps)) % 360) * Math.PI) / 180;
    return {
      x: Math.sin(angleRad) * radius,
      y: -Math.cos(angleRad) * radius,
    };
  });
}

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

      {/* ── Image ring — fixed layout to keep cards horizontal ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-10"
        style={{ x: "-50%", y: "-50%", width: 0, height: 0 }}
      >
        {ORBITAL_IMAGES.map((img, i) => {
          const angleRad = (img.angleDeg * Math.PI) / 180;
          const orbitFrames = getOrbitFrames(img.angleDeg, radius, ORBITAL_IMAGES.length);
          const orbitXs = orbitFrames.map((frame) => frame.x);
          const orbitYs = orbitFrames.map((frame) => frame.y);

          return (
            <motion.div
              key={img.alt}
              className="absolute rounded-[6px] overflow-hidden shadow-md"
              style={{
                width: img.w,
                height: img.h,
                top: -(img.h / 2),
                left: -(img.w / 2),
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
                      x: orbitXs,
                      y: orbitYs,
                    }
                  : {}
              }
              transition={{
                opacity: { duration: 1, delay: 0.55 + i * 0.14, ease: EASE },
                scale: { duration: 1, delay: 0.55 + i * 0.14, ease: EASE },
                x: {
                  duration: 240,
                  delay: 0.55 + i * 0.14,
                  ease: "linear",
                  repeat: Infinity,
                },
                y: {
                  duration: 240,
                  delay: 0.55 + i * 0.14,
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