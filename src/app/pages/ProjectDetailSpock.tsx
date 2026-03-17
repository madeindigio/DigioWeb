import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";

/* ─── Figma Assets ─── */
import svgPaths from "../../imports/svg-ajllqqcr1j";
import imgHero from "figma:asset/a1910742e185dcdfa1bd4e5e8356e39259500eba.png";
import imgMockup from "figma:asset/f1244955f8876e7aedebd803c6e1b6b98bd16965.png";
import imgPiggyBank from "figma:asset/2b799a9d2f876f0cdc1feb9750bf57144be230d0.png";
import imgIMac from "figma:asset/1340efa0945e04447f7f497887c081a1d97a3220.png";
import imgPeopleGroup from "figma:asset/7cf4026e53d985130f9bd2a3eb6fdc9282b0f373.png";
import imgRelatedIdermapp from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelatedIdermapp2 from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgRelatedNavilens from "figma:asset/703c1bbb0750e4d852aeb246e01ec3e480282103.png";

const EASE = [0.22, 1, 0.36, 1];

/* ============================================================
   1. HERO — Full-width image, fixed height
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <div className="absolute inset-0 bg-[#d8d8d8]" />
      <img
        alt="Spock hero"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgHero}
      />
    </section>
  );
}

/* ============================================================
   2. INTRO — 3-column: name | subtitle + body | performance
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          {/* Col 1: Name */}
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
            Spock
          </p>
          {/* Col 2: Subtitle + body */}
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.spock.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.spock.introBody")}
            </p>
          </div>
          {/* Col 3: Performance + Platform */}
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.spock.performanceLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.spock.performanceValue")}
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.spock.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.spock.platformValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. LOGO — Spock brand logo on grey background
   ============================================================ */
function LogoSection() {
  return (
    <section className="bg-[#f8f9fa] w-full h-[600px] max-lg:h-[450px] max-md:h-[320px] overflow-hidden relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[412px] h-[108px] max-md:w-[280px] max-md:h-[73px]">
        <svg className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 411.69 108">
          <g clipPath="url(#clip_spock_logo)">
            <path d={svgPaths.p119992f0} fill="#000062" />
            <path d={svgPaths.p99e6a00} fill="#000062" />
            <path d={svgPaths.p1da462f0} fill="#000062" />
            <path d={svgPaths.p2161d400} fill="#000062" />
            <path d={svgPaths.p19037b00} fill="#000062" />
            <path d={svgPaths.p1f220f80} fill="#CE4150" />
            <path d={svgPaths.p31f95280} fill="#6A26DF" />
          </g>
          <defs>
            <clipPath id="clip_spock_logo">
              <rect fill="white" height="108" width="411.69" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}

/* ============================================================
   4. VISION TEXT — Big statement
   ============================================================ */
function VisionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          {/* Big text */}
          <div className="max-w-[1200px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.spock.visionText")}
            </p>
          </div>
          {/* Two column: El reto | Nuestro trabajo */}
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.spock.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.spock.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.spock.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.spock.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. MOCKUP — Desktop mockup on warm background
   ============================================================ */
function MockupSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#fcedd1] w-full h-[800px] max-lg:h-[550px] max-md:h-[350px] relative overflow-hidden">
            <div className="absolute left-1/2 -translate-x-1/2 top-[33px] w-[1758px] h-[1172px] max-lg:w-[1200px] max-lg:h-[800px] max-md:w-[700px] max-md:h-[467px] max-md:top-[20px]" style={{ marginLeft: "-140px" }}>
              <img
                alt="Spock desktop mockup"
                className="w-full h-full object-cover"
                src={imgMockup}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. TRANSPARENCY TEXT — Right-aligned
   ============================================================ */
function TransparencySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] max-md:px-[24px] max-md:py-[32px]">
        <div className="max-w-[1400px] mx-auto flex justify-end">
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.spock.transparencyTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.spock.transparencyBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. PRICE CIRCLES — Comparison circles (animated)
   ============================================================ */

const CIRCLE_EASE = [0.16, 1, 0.3, 1] as const;

/** Animated counter that counts from 0 to `target` (integer part of value * 100) */
function AnimatedPrice({
  value,
  start,
  duration = 0.8,
  className,
}: {
  value: string; // e.g. "0,13"
  start: boolean;
  duration?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState("0,00");
  const targetNum = parseFloat(value.replace(",", "."));
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!start) {
      setDisplay("0,00");
      return;
    }
    startTimeRef.current = 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic for natural deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * eased;
      const formatted = current.toFixed(2).replace(".", ",");
      setDisplay(formatted);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [start, targetNum, duration]);

  return <span className={className}>{display}&euro;</span>;
}

function PriceCirclesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  /* Timeline:
     0.0s   – blue circle scales in        (0.7s)
     0.5s   – blue text fades in           (0.5s)
     0.7s   – blue price counter starts    (0.8s)
     1.3s   – red circle scales in         (0.6s)
     1.6s   – red text fades in            (0.45s)
     1.7s   – red price counter starts     (0.7s)
  */
  const [blueCounterStart, setBlueCounterStart] = useState(false);
  const [redCounterStart, setRedCounterStart] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setBlueCounterStart(true), 700);
    const t2 = setTimeout(() => setRedCounterStart(true), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#f8f9fa] w-full h-[545px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden flex items-center justify-center">
            {/* Circles container */}
            <div ref={containerRef} className="relative w-[540px] h-[310px] max-md:w-[340px] max-md:h-[200px]">
              {/* Large blue circle — collective rate */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[309px] h-[309px] max-md:w-[200px] max-md:h-[200px] origin-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.7, ease: CIRCLE_EASE, delay: 0 }}
              >
                <svg className="w-full h-full" viewBox="0 0 309 309" fill="none">
                  <circle cx="154.5" cy="154.5" r="154.5" fill="#3661F9" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                  {/* Label text — fades in after circle */}
                  <motion.p
                    className="font-['Manrope',sans-serif] text-[21px] max-md:text-[14px] leading-[normal]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: CIRCLE_EASE, delay: 0.5 }}
                  >
                    Tarifa compra<br />colectiva
                  </motion.p>
                  {/* Animated price */}
                  <motion.p
                    className="font-['Manrope',sans-serif] text-[64px] max-md:text-[40px] tracking-[-2.5px] leading-[normal] font-[700]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: CIRCLE_EASE, delay: 0.55 }}
                  >
                    <AnimatedPrice value="0,13" start={blueCounterStart} duration={0.8} />
                  </motion.p>
                  <motion.p
                    className="font-['Manrope',sans-serif] text-[21px] max-md:text-[14px] leading-[normal]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.5, ease: CIRCLE_EASE, delay: 0.6 }}
                  >
                    kWh
                  </motion.p>
                </div>
              </motion.div>

              {/* Smaller red circle — current rate */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[256px] h-[256px] max-md:w-[165px] max-md:h-[165px] origin-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: CIRCLE_EASE, delay: 1.3 }}
              >
                <svg className="w-full h-full" viewBox="0 0 256 256" fill="none">
                  <circle cx="128" cy="128" r="128" fill="#D45338" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                  {/* Label text — fades in after red circle */}
                  <motion.p
                    className="font-['Manrope',sans-serif] text-[18px] max-md:text-[12px] leading-[normal]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.45, ease: CIRCLE_EASE, delay: 1.6 }}
                  >
                    Tarifa actual
                  </motion.p>
                  {/* Animated price */}
                  <motion.p
                    className="font-['Manrope',sans-serif] text-[53px] max-md:text-[34px] tracking-[-2px] leading-[normal] font-[700]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.45, ease: CIRCLE_EASE, delay: 1.65 }}
                  >
                    <AnimatedPrice value="0,16" start={redCounterStart} duration={0.7} />
                  </motion.p>
                  <motion.p
                    className="font-['Manrope',sans-serif] text-[18px] max-md:text-[12px] leading-[normal]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                    transition={{ duration: 0.45, ease: CIRCLE_EASE, delay: 1.7 }}
                  >
                    kWh
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. TWO PANELS — Cards + Piggy bank
   ============================================================ */
function CardsPiggySection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] max-md:px-[24px] max-md:pt-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
          {/* Cards panel */}
          <div className="flex-1 bg-[#dcf8e2] h-[545px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden">
            {/* Stacked cards */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Back card (faded) */}
              <div className="absolute -top-[24px] left-[24px] bg-white rounded-[8px] w-[349px] max-md:w-[260px] opacity-30 border-[2px] border-[#acccb5] overflow-hidden shadow-sm">
                <div className="bg-[#fcedd1] px-[22px] py-[14px] rounded-t-[6px]">
                  <p className="font-['Poppins',sans-serif] text-black text-[15px] font-[700] leading-[normal]">Compra colectiva El Rinc&oacute;n del Gas-Neptuno 2024</p>
                </div>
                <div className="p-[22px] flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[7px]">
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] font-[700] leading-[normal]">Periodo de inscripci&oacute;n</p>
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] leading-[normal]">Hasta el martes 11/06/2025 (23:59h)</p>
                  </div>
                </div>
              </div>
              {/* Middle card */}
              <div className="relative bg-white rounded-[8px] w-[349px] max-md:w-[260px] border-[2px] border-[rgba(172,204,181,0.8)] overflow-hidden shadow-sm">
                <div className="bg-[#def7fc] px-[22px] py-[14px] rounded-t-[6px]">
                  <p className="font-['Poppins',sans-serif] text-black text-[15px] font-[700] leading-[normal]">Compra colectiva El Rinc&oacute;n del Gas-Neptuno 2024</p>
                </div>
                <div className="p-[22px] flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[7px]">
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] font-[700] leading-[normal]">Periodo de inscripci&oacute;n</p>
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] leading-[normal]">Hasta el martes 11/06/2025 (23:59h)</p>
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] font-[700] leading-[normal]">Tipos de suministro que pueden participar</p>
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] leading-[normal]">Suministros de electricidad o gas de todo el territorio nacional, incluido Canarias.</p>
                  </div>
                  <div className="bg-[#132db8] rounded-[46px] px-[15px] py-[7px] w-fit">
                    <p className="font-['Poppins',sans-serif] text-white text-[15px] font-[500] leading-[normal]">Inscribirse en la compra</p>
                  </div>
                </div>
              </div>
              {/* Front card (offset below) */}
              <div className="absolute top-[24px] -left-[24px] bg-white rounded-[8px] w-[349px] max-md:w-[260px] border-[2px] border-[#acccb5] overflow-hidden shadow-sm">
                <div className="bg-[#e1fce9] px-[22px] py-[14px] rounded-t-[6px]">
                  <p className="font-['Poppins',sans-serif] text-black text-[15px] font-[700] leading-[normal]">Compra colectiva El Rinc&oacute;n del Gas-Neptuno 2024</p>
                </div>
                <div className="p-[22px] flex flex-col gap-[15px]">
                  <div className="flex flex-col gap-[7px]">
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] font-[700] leading-[normal]">Periodo de inscripci&oacute;n</p>
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] leading-[normal]">Hasta el martes 11/06/2025 (23:59h)</p>
                  </div>
                  <div className="flex flex-col gap-[7px]">
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] font-[700] leading-[normal]">Tipos de suministro</p>
                    <p className="font-['Poppins',sans-serif] text-black text-[13px] leading-[normal]">Suministros de electricidad o gas de todo el territorio nacional, incluido Canarias.</p>
                  </div>
                  <div className="bg-[#132db8] rounded-[50px] w-full py-[12px] flex items-center justify-center shadow-[0px_4px_4px_0px_rgba(19,45,184,0.08)]">
                    <p className="font-['Poppins',sans-serif] text-white text-[15px] font-[500] leading-[normal]">Inscribirse en la compra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Piggy bank panel */}
          <div className="flex-1 bg-[#e1f8fe] h-[545px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[873px] h-[484px] max-lg:w-[600px] max-lg:h-[333px] max-md:w-[400px] max-md:h-[222px]" style={{ marginLeft: "87px", marginTop: "31px" }}>
              <img
                alt="Piggy bank"
                className="w-full h-full object-cover"
                src={imgPiggyBank}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. REDUCTION TEXT — Title + body, two columns
   ============================================================ */
function ReductionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0 whitespace-pre-line">
            {t("pages.spock.reductionTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            {t("pages.spock.reductionBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. GROUP POWER — Text + iMac mockup
   ============================================================ */
function GroupPowerSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] items-center max-lg:flex-col max-lg:gap-[48px]">
          {/* Text column */}
          <div className="flex-1 flex flex-col gap-[24px] min-w-0">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] max-lg:text-[32px] max-lg:leading-[40px] max-md:text-[24px] max-md:leading-[32px] whitespace-pre-line">
              {t("pages.spock.groupTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full">
              {t("pages.spock.groupBody")}
            </p>
          </div>
          {/* iMac mockup */}
          <div className="flex-1 h-[520px] max-lg:h-[400px] max-md:h-[300px] relative overflow-hidden min-w-0">
            <div className="absolute left-[90px] top-[90px] w-[921px] h-[777px] max-lg:left-[50px] max-lg:top-[50px] max-lg:w-[650px] max-lg:h-[549px] max-md:left-[20px] max-md:top-[30px] max-md:w-[450px] max-md:h-[380px]">
              
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[568px] h-[525px] max-lg:w-[400px] max-lg:h-[370px] max-md:w-[280px] max-md:h-[259px]">
              <img alt="People group" className="w-full h-full object-cover" src={imgPeopleGroup} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. RELATED PROJECTS
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.spock.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="idermapp"
              image={imgRelatedIdermapp}
              image2={imgRelatedIdermapp2}
              tag={t("work.projects.idermapp.tag")}
              name={t("work.projects.idermapp.name")}
              description={t("work.projects.idermapp.description")}
            />
            <RelatedProjectCard
              slug="navilens"
              image={imgRelatedNavilens}
              tag={t("work.projects.navilens.tag")}
              name={t("work.projects.navilens.name")}
              description={t("work.projects.navilens.description")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE EXPORT
   ============================================================ */
export function ProjectDetailSpock() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <LogoSection />
      </RevealAfterTransition>
      <ScrollRevealSection><VisionSection /></ScrollRevealSection>
      <ScrollRevealSection><MockupSection /></ScrollRevealSection>
      <ScrollRevealSection><TransparencySection /></ScrollRevealSection>
      <ScrollRevealSection><PriceCirclesSection /></ScrollRevealSection>
      <ScrollRevealSection><CardsPiggySection /></ScrollRevealSection>
      <ScrollRevealSection><ReductionSection /></ScrollRevealSection>
      <ScrollRevealSection><GroupPowerSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}