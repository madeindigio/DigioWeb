import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";
import { ContactSection } from "../components/ContactSection";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  ScrollRevealSectionPreset,
  ScrollParallaxMedia,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";

/* ─── Assets ─── */
import imgIdermappHero from "/images/projects/idermapp/iDermApp hero section IMG.jpg";
import imgIdermBg from "/images/projects/idermapp/iDerm Section small mobile.jpg";
import imgIdermCreme from "/images/projects/idermapp/iDerm Section creme.jpeg";
import imgDermAppScreens from "/images/projects/idermapp/iDermApp Screens.jpg";
import imgBgSpecialists from "/images/projects/idermapp/bg specialists.jpg";
import imgDoctorMariaRuiz from "/images/projects/idermapp/doctor-maria-ruiz.png";
import imgDoctorElenaOrtiz from "/images/projects/idermapp/doctor-elena-ortiz.png";
import imgDoctorCarlosVega from "/images/projects/idermapp/doctor-carlos-vega.png";
import imgCardCentered from "/images/projects/idermapp/Card centered.svg";
import imgIdermMobileSection from "/images/projects/idermapp/iDerm APP mobile section.jpg";
import imgIdermResume from "/images/projects/idermapp/iDermApp Resume IMG.jpg";
import imgAvatarPatient from "/images/projects/idermapp/usuario-idermapp.jpg";
// Image placeholders - replace with actual assets in /public/images/
const imgChangeThis1 = "/images/placeholder-gray.svg";
const imgShadow = "/images/placeholder-gray.svg";
const imgReflection = "/images/placeholder-gray.svg";
const imgShadow1 = "/images/placeholder-gray.svg";
const imgChangeThis3 = "/images/placeholder-gray.svg";
const imgShadow2 = "/images/placeholder-gray.svg";
const imgReflection1 = "/images/placeholder-gray.svg";
const imgRelatedRoomonitor = "/images/projects/roomonitor/Roomheadersection.jpg";
const imgRelatedNavilens = "/images/placeholder-gray.svg";
import { imgChangeThis, imgChangeThis2 } from "../../imports/svg-f2917";
import svgPaths from "../../imports/svg-aeu4f9zq8x";

const EASE = [0.22, 1, 0.36, 1];

type HangingSpecialistCardData = {
  id: string;
  name: string;
  role: string;
  image: string;
  backgroundColor: string;
  baseAngle: number;
  tapeColor: string;
  positionClass: string;
  touchDirection: number;
};

const hangingSpecialists: HangingSpecialistCardData[] = [
  {
    id: "specialist-left",
    name: "Dra. Maria Ruiz",
    role: "Dermatologia clinica",
    image: imgDoctorMariaRuiz,
    backgroundColor: "#cfe8ff",
    baseAngle: -9,
    tapeColor: "#e3653e",
    positionClass:
      "left-[8%] top-[112px] max-lg:left-[3%] max-lg:top-[126px] max-md:left-auto max-md:top-auto",
    touchDirection: -1,
  },
  {
    id: "specialist-center",
    name: "Dra. Elena Ortiz",
    role: "Teledermatologia",
    image: imgDoctorElenaOrtiz,
    backgroundColor: "#d8f1ea",
    baseAngle: 0,
    tapeColor: "#ec6b3d",
    positionClass:
      "left-1/2 -translate-x-1/2 top-[54px] max-lg:top-[74px] max-md:left-auto max-md:top-auto max-md:translate-x-0",
    touchDirection: 0,
  },
  {
    id: "specialist-right",
    name: "Dr. Carlos Vega",
    role: "Diagnostico preventivo",
    image: imgDoctorCarlosVega,
    backgroundColor: "#e6defa",
    baseAngle: 10,
    tapeColor: "#e3653e",
    positionClass:
      "right-[8%] top-[112px] max-lg:right-[3%] max-lg:top-[126px] max-md:right-auto max-md:top-auto",
    touchDirection: 1,
  },
];

const DEFAULT_CARD_TILT = {
  rotateX: 0,
  rotateY: 0,
  glowX: 50,
  glowY: 28,
  lift: 0,
};

const PENDULUM_MAX_OFFSET = 22;
const PENDULUM_GRAVITY = 34;
const PENDULUM_DAMPING = 5.2;
const PENDULUM_GRAB_STIFFNESS = 44;
const PENDULUM_GRAB_DAMPING = 11;

/* ============================================================
   1. HERO — Clean full-width image
   ============================================================ */
function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <img
        alt="iDermApp"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgIdermappHero}
      />
    </section>
  );
}

/* ============================================================
   2. INTRO — 3-column
   ============================================================ */
function IntroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
            iDermApp
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.idermapp.introSubtitle")}
            </LangText>
            <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.idermapp.introBody")}
            </LangText>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={2} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.idermapp.performanceLabel")}
              </LangText>
              <div className="flex flex-col gap-[8px]">
                <LangText as="p" stagger={3} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue1")}</LangText>
                <LangText as="p" stagger={4} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue2")}</LangText>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue3")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.idermapp.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.idermapp.platformValue")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. iD LOGO — Centered logo on bg with decorative lines
   ============================================================ */
function LogoSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div 
            className="w-full h-[600px] max-lg:h-[420px] max-md:h-[300px] relative overflow-hidden"
            style={{
              backgroundImage: 'url("/images/projects/idermapp/iDLogo.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4. VISION — Big statement
   ============================================================ */
function VisionSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          <div className="max-w-[1200px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.idermapp.visionText")}
            </p>
          </div>
          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.idermapp.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.idermapp.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.idermapp.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.idermapp.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   5. TWO PANELS — Phone mockup + Specialist grid
   ============================================================ */
function PhoneSpecialistPanels() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
          {/* Phone mockup with consultation */}
          <motion.div
            className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgIdermBg})`, backgroundSize: 'cover', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat' }}
            whileInView={{ backgroundPosition: ["50% 50%", "54% 50%", "50% 50%"] }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Specialist grid */}
          <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgIdermCreme})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   6. ACCESSIBILITY — Right-aligned text
   ============================================================ */
function AccessibilitySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex justify-end">
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.idermapp.accessibilityTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.idermapp.accessibilityBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   7. SCREENS SECTION — Full-width gradient with screens
   ============================================================ */
function ScreensSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Gradient screen area */}
          <ScrollParallaxMedia className="w-full h-[800px] max-lg:h-[560px] max-md:h-[380px] relative overflow-hidden" distance={22}>
            <div className="w-full h-[800px] max-lg:h-[560px] max-md:h-[380px] relative overflow-hidden"
              style={{ backgroundImage: `url(${imgDermAppScreens})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            />
          </ScrollParallaxMedia>
          {/* Text: Sistema de valoraciones */}
          <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.idermapp.valorationsTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.idermapp.valorationsBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   8. PROFESSIONALS — Specialist photos grid + User/Resume panels
   ============================================================ */
function ProfessionalsSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] max-md:px-[24px] max-md:pt-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div
            className="w-full h-[740px] max-lg:h-[520px] max-md:h-[400px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${imgBgSpecialists})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <img
                alt="Tarjeta central iDermApp"
                className="w-[560px] max-lg:w-[420px] max-md:w-[260px] h-auto drop-shadow-[0_24px_60px_rgba(25,30,37,0.16)]"
                src={imgCardCentered}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HangingSpecialistCard({
  specialist,
  reducedMotion,
}: {
  specialist: HangingSpecialistCardData;
  reducedMotion: boolean;
}) {
  const [tilt, setTilt] = useState({
    ...DEFAULT_CARD_TILT,
    offset: 0,
    grabbing: false,
  });
  const tiltRef = useRef(tilt);
  const boundsRef = useRef<DOMRect | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const physicsRef = useRef({
    offset: 0,
    velocity: 0,
    targetOffset: 0,
    dragging: false,
    pointerId: null as number | null,
    lastTs: 0,
  });

  useEffect(() => {
    tiltRef.current = tilt;
  }, [tilt]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const setTiltSafe = (patch: Partial<typeof tilt>) => {
    setTilt((current) => {
      const next = { ...current, ...patch };
      if (
        Math.abs(next.rotateX - current.rotateX) < 0.05 &&
        Math.abs(next.rotateY - current.rotateY) < 0.05 &&
        Math.abs(next.glowX - current.glowX) < 0.05 &&
        Math.abs(next.glowY - current.glowY) < 0.05 &&
        Math.abs(next.lift - current.lift) < 0.05 &&
        Math.abs(next.offset - current.offset) < 0.05 &&
        next.grabbing === current.grabbing
      ) {
        return current;
      }
      return next;
    });
  };

  const stopPhysicsLoop = () => {
    if (rafRef.current !== null) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  const startPhysicsLoop = () => {
    if (rafRef.current !== null) {
      return;
    }

    const tick = (ts: number) => {
      const physics = physicsRef.current;
      const dt = physics.lastTs === 0 ? 1 / 60 : Math.min((ts - physics.lastTs) / 1000, 0.033);
      physics.lastTs = ts;

      const baseAcceleration = reducedMotion ? 22 : PENDULUM_GRAVITY;
      const baseDamping = reducedMotion ? 8 : PENDULUM_DAMPING;

      let acceleration = 0;
      if (physics.dragging) {
        acceleration =
          (physics.targetOffset - physics.offset) * PENDULUM_GRAB_STIFFNESS -
          physics.velocity * PENDULUM_GRAB_DAMPING;
      } else {
        acceleration = -baseAcceleration * Math.sin((physics.offset * Math.PI) / 180) - physics.velocity * baseDamping;
      }

      physics.velocity += acceleration * dt;
      physics.offset += physics.velocity * dt;

      if (physics.offset > PENDULUM_MAX_OFFSET) {
        physics.offset = PENDULUM_MAX_OFFSET;
        physics.velocity *= -0.34;
      }
      if (physics.offset < -PENDULUM_MAX_OFFSET) {
        physics.offset = -PENDULUM_MAX_OFFSET;
        physics.velocity *= -0.34;
      }

      const swingLift = -Math.min(12, Math.abs(physics.offset) * 0.44);
      setTiltSafe({ offset: physics.offset, lift: swingLift });

      const atRest =
        !physics.dragging &&
        Math.abs(physics.offset) < 0.04 &&
        Math.abs(physics.velocity) < 0.04;

      if (atRest) {
        physics.offset = 0;
        physics.velocity = 0;
        physics.targetOffset = 0;
        physics.lastTs = 0;
        setTiltSafe({ offset: 0, lift: 0 });
        stopPhysicsLoop();
        return;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);
  };

  const updateHoverTilt = (event: React.PointerEvent<HTMLButtonElement>) => {
    const bounds = boundsRef.current ?? event.currentTarget.getBoundingClientRect();
    boundsRef.current = bounds;

    const nx = (event.clientX - bounds.left) / bounds.width;
    const ny = (event.clientY - bounds.top) / bounds.height;
    const clampedX = Math.min(1, Math.max(0, nx));
    const clampedY = Math.min(1, Math.max(0, ny));

    setTiltSafe({
      rotateY: (clampedX - 0.5) * 14,
      rotateX: (0.5 - clampedY) * 12,
      glowX: clampedX * 100,
      glowY: clampedY * 100,
    });
  };

  const computeTargetOffset = (clientX: number, clientY: number) => {
    const wrapperBounds = wrapperRef.current?.getBoundingClientRect();
    if (!wrapperBounds) {
      return 0;
    }

    const anchorX = wrapperBounds.left + wrapperBounds.width / 2;
    const anchorY = wrapperBounds.top + 8;
    const dx = clientX - anchorX;
    const dy = Math.max(80, clientY - anchorY);
    const absoluteAngle = (Math.atan2(dx, dy) * 180) / Math.PI;
    return Math.max(-PENDULUM_MAX_OFFSET, Math.min(PENDULUM_MAX_OFFSET, absoluteAngle - specialist.baseAngle));
  };

  const releaseDrag = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (physicsRef.current.pointerId !== event.pointerId) {
      return;
    }

    physicsRef.current.dragging = false;
    physicsRef.current.pointerId = null;
    physicsRef.current.targetOffset = 0;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setTiltSafe({ grabbing: false, rotateX: 0, rotateY: 0, glowX: 50, glowY: 28 });
    startPhysicsLoop();
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") {
      const touchDirection = specialist.touchDirection === 0 ? 1 : specialist.touchDirection;
      physicsRef.current.velocity += touchDirection * 1.4;
      setTiltSafe({
        rotateX: -6,
        rotateY: touchDirection * 4,
        glowX: 50 + touchDirection * 14,
        glowY: 24,
      });
      startPhysicsLoop();
      return;
    }

    boundsRef.current = event.currentTarget.getBoundingClientRect();
    physicsRef.current.dragging = true;
    physicsRef.current.pointerId = event.pointerId;
    physicsRef.current.targetOffset = computeTargetOffset(event.clientX, event.clientY);
    event.currentTarget.setPointerCapture(event.pointerId);

    setTiltSafe({ grabbing: true });
    updateHoverTilt(event);
    startPhysicsLoop();
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    updateHoverTilt(event);

    if (!physicsRef.current.dragging || physicsRef.current.pointerId !== event.pointerId) {
      return;
    }

    physicsRef.current.targetOffset = computeTargetOffset(event.clientX, event.clientY);
    startPhysicsLoop();
  };

  const handlePointerEnter = (event: React.PointerEvent<HTMLButtonElement>) => {
    boundsRef.current = event.currentTarget.getBoundingClientRect();
  };

  const handlePointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (physicsRef.current.dragging && physicsRef.current.pointerId === event.pointerId) {
      return;
    }

    setTiltSafe({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 28, grabbing: false });
  };

  const totalRotation = specialist.baseAngle + tilt.offset;

  return (
    <motion.div
      className={`absolute max-md:relative max-md:w-[248px] max-md:h-[390px] ${specialist.positionClass}`}
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div
        ref={wrapperRef}
        className="relative w-[252px] h-[430px] max-md:w-[232px] max-md:h-[390px]"
        style={{
          transformOrigin: "center top",
          transform: `rotate(${totalRotation}deg)`,
          willChange: "transform",
        }}
      >
        <div className="absolute left-1/2 top-[4px] -translate-x-1/2 pointer-events-none">
          <div className="h-[70px] w-[2px] bg-gradient-to-b from-[#c2c7cf] to-[#9ea4ae]" />
          <div
            className="absolute left-1/2 top-[58px] h-[18px] w-[86px] -translate-x-1/2 rounded-[4px]"
            style={{
              backgroundColor: specialist.tapeColor,
              transform: `rotate(${specialist.baseAngle * -0.35}deg)`,
            }}
          />
        </div>

        <motion.div
          className="absolute bottom-[8px] left-1/2 h-[26px] w-[66%] -translate-x-1/2 rounded-full bg-[rgba(25,30,37,0.34)] blur-[14px]"
          animate={{
            scale: 1 + Math.abs(tilt.offset) * 0.017,
            opacity: 0.22 + Math.min(0.2, Math.abs(tilt.offset) * 0.006),
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />

        <motion.button
          type="button"
          aria-label={`${specialist.name}, ${specialist.role}`}
          className={`relative mt-[72px] h-[332px] w-[252px] max-md:h-[304px] max-md:w-[232px] overflow-hidden rounded-[28px] border-[6px] border-white bg-[#191e25] text-left shadow-[0_28px_44px_rgba(25,30,37,0.26)] outline-none ${tilt.grabbing ? "cursor-grabbing" : "cursor-grab"}`}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            backgroundColor: specialist.backgroundColor,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={releaseDrag}
          onPointerCancel={releaseDrag}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          animate={{
            rotateX: tilt.rotateX,
            rotateY: tilt.rotateY,
            y: tilt.lift,
            scale: tilt.grabbing ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22, mass: 0.6 }}
        >
          <img
            alt={specialist.name}
            className="absolute inset-0 h-full w-full object-cover"
            src={specialist.image}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(255,255,255,0.08)] via-transparent to-[rgba(10,15,24,0.75)]" />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.16) 18%, rgba(255,255,255,0) 54%)`,
            }}
          />

          <div className="pointer-events-none absolute inset-x-[20px] bottom-[20px] flex flex-col gap-[4px] text-white">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[28px] leading-[1.06] tracking-[-0.03em]">
              {specialist.name}
            </p>
            <p className="font-['Manrope',sans-serif] text-[14px] uppercase tracking-[0.12em] text-white/84">
              {specialist.role}
            </p>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ============================================================
   9. HANGING SPECIALISTS — Interactive 3D cards
   ============================================================ */
function HangingSpecialistsSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[56px] max-md:px-[24px] max-md:pb-[32px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative w-full h-[646px] max-lg:h-[592px] max-md:h-auto max-md:pt-[24px] max-md:pb-[40px] bg-[#edeff3] overflow-hidden">
            <div className="pointer-events-none absolute -top-[142px] left-[-86px] h-[316px] w-[58%] rounded-[50%] border-t-[22px] border-t-[#e3653e] border-r-[22px] border-r-transparent border-l-[22px] border-l-transparent border-b-0 rotate-[-7deg] max-md:hidden" />
            <div className="pointer-events-none absolute -top-[174px] left-[28%] h-[322px] w-[46%] rounded-[50%] border-t-[18px] border-t-[#f2a1b2] border-r-[18px] border-r-transparent border-l-[18px] border-l-transparent border-b-0 rotate-[4deg] max-md:hidden" />
            <div className="pointer-events-none absolute -top-[160px] right-[-82px] h-[300px] w-[50%] rounded-[50%] border-t-[22px] border-t-[#e9cb5c] border-r-[22px] border-r-transparent border-l-[22px] border-l-transparent border-b-0 rotate-[10deg] max-md:hidden" />

            <div className="relative h-full max-md:h-auto max-md:flex max-md:flex-col max-md:items-center max-md:gap-[18px]">
              {hangingSpecialists.map((specialist) => (
                <HangingSpecialistCard
                  key={specialist.id}
                  specialist={specialist}
                  reducedMotion={reducedMotion}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. QUALITY — Calidad de Atención
   ============================================================ */
function QualitySection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[56px] max-md:px-[24px] max-md:py-[32px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0">
            {t("pages.idermapp.qualityTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            {t("pages.idermapp.qualityBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
  11. MOBILE APP — Full-width image
   ============================================================ */
function NotificationStackCard() {
  return (
    <motion.div
      className="relative w-full h-full bg-[#f8f9fa] flex items-center justify-center p-[30px] max-lg:p-[24px] max-md:p-[18px]"
      style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="relative w-full max-w-[560px]">
        <div className="absolute inset-x-[18px] top-[18px] h-[158px] max-md:h-[124px] rounded-[20px] bg-[#f5f6f7] shadow-[0px_12px_22px_rgba(17,24,39,0.07)]" />
        <div className="absolute inset-x-[9px] top-[9px] h-[158px] max-md:h-[124px] rounded-[20px] bg-[#f6f7f8] shadow-[0px_8px_16px_rgba(17,24,39,0.06)]" />

        <motion.div
          className="relative z-10 h-[158px] max-md:h-[124px] rounded-[20px] bg-[#f8f9fa] shadow-[0px_12px_28px_rgba(17,24,39,0.10)] px-[20px] max-md:px-[14px] flex items-center gap-[16px] max-md:gap-[10px] transition-transform duration-300"
          whileHover={{ y: -6 }}
        >
          <img alt="Avatar paciente" className="w-[88px] h-[88px] max-md:w-[56px] max-md:h-[56px] rounded-full object-cover shrink-0" src={imgAvatarPatient} />

          <div className="min-w-0 flex-1">
            <p className="text-[#0b0d11] text-[28px] leading-[1.1] max-lg:text-[24px] max-md:text-[18px] font-[700] tracking-[-0.02em] truncate">
              Roberto Jimenez
            </p>
            <p className="text-[#8a9098] text-[20px] max-lg:text-[18px] max-md:text-[14px] mt-[8px] max-md:mt-[4px] font-[400]">
              14/12/1982
            </p>
          </div>

          <motion.span
            className="absolute -top-[16px] -right-[16px] w-[54px] h-[54px] max-md:-top-[10px] max-md:-right-[10px] max-md:w-[34px] max-md:h-[34px] rounded-full bg-[#ff4d57] text-white flex items-center justify-center font-[800] text-[24px] max-md:text-[16px] shadow-[0px_10px_18px_rgba(255,77,87,0.35)]"
            whileInView={{ scale: [1, 1.08, 1] }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            1
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MobileAppSection() {
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[24px] max-md:gap-[16px]">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[24px] max-md:gap-[16px]">
            <div className="relative w-full aspect-square overflow-hidden">
              <img alt="iDermApp resume" className="absolute inset-0 w-full h-full object-cover" src={imgIdermResume} />
            </div>
            <div className="relative w-full aspect-square overflow-hidden">
              <NotificationStackCard />
            </div>
          </div>
          <div
            className="w-full h-[670px] max-lg:h-[470px] max-md:h-[320px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${imgIdermMobileSection})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================
  12. SKIN CARE — Text section
   ============================================================ */
function SkinCareSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[40px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[24px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] w-[435px] max-lg:w-full max-md:text-[28px] max-md:leading-[36px] shrink-0 whitespace-pre-line">
            {t("pages.idermapp.skinCareTitle")}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[368px] max-lg:w-full shrink-0 max-lg:shrink">
            {t("pages.idermapp.skinCareBody")}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
  13. RELATED PROJECTS
   ============================================================ */
function RelatedProjects() {
  const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-b from-white to-[#f7f7f7] w-full relative">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.idermapp.relatedTitle")}
          </p>
          <div className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <RelatedProjectCard
              slug="roomonitor"
              image={imgRelatedRoomonitor}
              tag={t("work.projects.roomonitor.tag")}
              name={t("work.projects.roomonitor.name")}
              description={t("work.projects.roomonitor.description")}
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
export function ProjectDetailIDermApp() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.05}>
        <IntroSection />
      </RevealAfterTransition>
      <RevealAfterTransition delay={0.18}>
        <LogoSection />
      </RevealAfterTransition>
      <ScrollRevealSectionPreset preset="chapter"><VisionSection /></ScrollRevealSectionPreset>
      <ScrollRevealSectionPreset preset="feature"><PhoneSpecialistPanels /></ScrollRevealSectionPreset>
      <ScrollRevealSection><AccessibilitySection /></ScrollRevealSection>
      <ScrollRevealSectionPreset preset="feature"><ScreensSection /></ScrollRevealSectionPreset>
      <ScrollRevealSectionPreset preset="feature"><ProfessionalsSection /></ScrollRevealSectionPreset>
      <ScrollRevealSectionPreset preset="feature"><HangingSpecialistsSection /></ScrollRevealSectionPreset>
      <ScrollRevealSection><QualitySection /></ScrollRevealSection>
      <ScrollRevealSectionPreset preset="feature"><MobileAppSection /></ScrollRevealSectionPreset>
      <ScrollRevealSection><SkinCareSection /></ScrollRevealSection>
      <ScrollRevealSectionPreset preset="chapter"><RelatedProjects /></ScrollRevealSectionPreset>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}