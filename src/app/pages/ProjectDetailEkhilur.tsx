import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";
import { ContactSection } from "../components/ContactSection";
import {
  RelatedProjectCard,
  RelatedProjectsSection,
  RevealAfterTransition,
  ScrollRevealSection,
} from "../components/project-detail-shared";
const imgEkhilurHero = "/images/projects/ekhilur/ekhilur-hero-section.jpg";
const imgEkhilurLogo = "/images/projects/ekhilur/logo%20ekhilur.svg";
const imgEkhilurIsotipo = "/images/projects/ekhilur/isotipo.svg";
const imgEkhilurTipografia = "/images/projects/ekhilur/tipografia.svg";
const imgEkhilurScreens = "/images/projects/ekhilur/ekhiscreens.jpg";
const imgEkhilurBig = "/images/projects/ekhilur/ekhibigimg.jpg";
const imgEkhilurPhoneHand = "/images/projects/ekhilur/ekhi-phone-hand.png";
const imgEkhilurMobile01 = "/images/projects/ekhilur/Ekhi_mobile_01.jpg";
const imgEkhilurMobile02 = "/images/projects/ekhilur/Ekhi_mobile_02.jpg";
const imgEkhilurDashLeft = "/images/projects/ekhilur/Ekhi_dash_left.jpg";
const imgEkhilurDashRight = "/images/projects/ekhilur/Ekhi_dash_right.jpg";
const ekhilurBusinessImages = [
  { src: "/images/projects/ekhilur/ekhi-sites/site_1.jpeg", alt: "Negocio 1" },
  { src: "/images/projects/ekhilur/ekhi-sites/site_2.jpeg", alt: "Negocio 2" },
  { src: "/images/projects/ekhilur/ekhi-sites/site_3.jpeg", alt: "Negocio 3" },
  { src: "/images/projects/ekhilur/ekhi-sites/site_4.jpeg", alt: "Negocio 4" },
];
const ekhilurIllustrations = [
  "/images/projects/ekhilur/ekhillustrations/ekhi_01.svg",
  "/images/projects/ekhilur/ekhillustrations/ekhi_02.svg",
  "/images/projects/ekhilur/ekhillustrations/ekhi_03.svg",
  "/images/projects/ekhilur/ekhillustrations/ekhi_04.svg",
  "/images/projects/ekhilur/ekhillustrations/ekhi_05.svg",
];
const ekhilurPicks = [
  "/images/projects/ekhilur/picks/pick01.svg",
  "/images/projects/ekhilur/picks/pick02.svg",
  "/images/projects/ekhilur/picks/pick03.svg",
  "/images/projects/ekhilur/picks/pick04.svg",
  "/images/projects/ekhilur/picks/pick05.svg",
  "/images/projects/ekhilur/picks/pick06.svg",
  "/images/projects/ekhilur/picks/pick07.svg",
  "/images/projects/ekhilur/picks/pick08.svg",
  "/images/projects/ekhilur/picks/pick09.svg",
];

const imgRelatedVivla = "/images/placeholder-gray.svg";
const imgRelatedNavilens = "/images/placeholder-gray.svg";

function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] max-md:h-[360px] overflow-hidden">
      <img alt="ekhilur hero" className="absolute inset-0 w-full h-full object-cover" src={imgEkhilurHero} />
    </section>
  );
}

function IntroSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] shrink-0 w-[160px] max-lg:w-auto max-md:text-[24px] max-md:leading-[32px]">
            Ekhilur
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[520px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ekhilur.introSubtitle")}
            </LangText>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={1} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.ekhilur.performanceLabel")}
              </LangText>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {(t("pages.ekhilur.performanceItems", { returnObjects: true }) as string[]).map((item, idx) => (
                  <LangText as="p" key={item} stagger={2 + idx}>{item}</LangText>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <LangText as="p" stagger={5} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.ekhilur.platformLabel")}
              </LangText>
              <LangText as="p" stagger={6} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.ekhilur.platformValue")}
              </LangText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoSection() {
  return (
    <section className="bg-white w-full">
      <style>
        {`@keyframes ekhiIsotipoMove {
          0%, 5%    { transform: translateX(0); }
          12%, 86%  { transform: translateX(-60px); }
          93%, 100% { transform: translateX(0); }
        }
        @keyframes ekhiTipografiaMove {
          0%, 5%    { transform: translateX(0); }
          12%, 86%  { transform: translateX(60px); }
          93%, 100% { transform: translateX(0); }
        }
        @keyframes ekhiWindowReveal {
          0%, 5%    { opacity: 0; width: 0px; }
          12%, 86%  { opacity: 1; width: 220px; }
          93%, 100% { opacity: 0; width: 0px; }
        }
        @keyframes ekhiBizImageSwap {
          0%, 24.999% { opacity: 1; }
          25%, 100%   { opacity: 0; }
        }
        @media (max-width: 1024px) {
          @keyframes ekhiIsotipoMove  { 0%,5%{transform:translateX(0)} 12%,86%{transform:translateX(-44px)} 93%,100%{transform:translateX(0)} }
          @keyframes ekhiTipografiaMove { 0%,5%{transform:translateX(0)} 12%,86%{transform:translateX(44px)} 93%,100%{transform:translateX(0)} }
          @keyframes ekhiWindowReveal { 0%,5%{opacity:0;width:0px} 12%,86%{opacity:1;width:160px} 93%,100%{opacity:0;width:0px} }
        }
        @media (max-width: 768px) {
          @keyframes ekhiIsotipoMove  { 0%,5%{transform:translateX(0)} 12%,86%{transform:translateX(-32px)} 93%,100%{transform:translateX(0)} }
          @keyframes ekhiTipografiaMove { 0%,5%{transform:translateX(0)} 12%,86%{transform:translateX(32px)} 93%,100%{transform:translateX(0)} }
          @keyframes ekhiWindowReveal { 0%,5%{opacity:0;width:0px} 12%,86%{opacity:1;width:96px} 93%,100%{opacity:0;width:0px} }
        }`}
      </style>
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[600px] max-xl:h-[520px] max-lg:h-[440px] max-md:h-[320px] rounded-[4px] bg-[#F8F9FA] flex items-center justify-center px-[24px] overflow-hidden">
            <div className="flex items-center gap-[12px] max-lg:gap-[8px] max-md:gap-[6px]" aria-label="Animacion logo Ekhilur">

              {/* Isotipo naranja — se mueve a la izquierda */}
              <img
                src={imgEkhilurIsotipo}
                alt="Isotipo Ekhilur"
                className="h-[160px] max-lg:h-[116px] max-md:h-[80px] w-auto shrink-0 relative z-20 pointer-events-none"
                style={{ animation: "ekhiIsotipoMove 6s ease-in-out infinite", willChange: "transform" }}
                draggable={false}
              />

              {/* Ventana central cuadrada con imágenes de negocios */}
              <div
                className="shrink-0 overflow-hidden relative z-10 rounded-[10px] shadow-[0_6px_24px_rgba(25,30,37,0.16)]"
                style={{
                  height: "220px",
                  animation: "ekhiWindowReveal 6s ease-in-out infinite",
                  willChange: "opacity, width",
                }}
              >
                <div className="relative h-full w-[220px] max-lg:w-[160px] max-md:w-[96px]">
                  {ekhilurBusinessImages.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{
                        animation: "ekhiBizImageSwap 6s steps(1, end) infinite",
                        animationDelay: `${index * -1.5}s`,
                        willChange: "opacity",
                      }}
                      draggable={false}
                    />
                  ))}
                </div>
              </div>

              {/* Tipografía — se mueve a la derecha */}
              <img
                src={imgEkhilurTipografia}
                alt="ekhilur"
                className="h-[88px] max-lg:h-[66px] max-md:h-[46px] w-auto shrink-0 relative z-20 pointer-events-none"
                style={{ animation: "ekhiTipografiaMove 6s ease-in-out infinite", willChange: "transform" }}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatementSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
          <div className="max-w-[1120px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.ekhilur.statement")}
            </p>
          </div>

          <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.ekhilur.challengeTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.ekhilur.challengeBody")}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-[24px] min-w-0">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.ekhilur.workTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.ekhilur.workBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TwinPanelsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            <div className="flex-1 h-[460px] max-lg:h-[340px] max-md:h-[240px] overflow-hidden rounded-[8px]">
              <img src={imgEkhilurMobile01} alt="Ekhilur mobile screen 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 h-[460px] max-lg:h-[340px] max-md:h-[240px] overflow-hidden rounded-[8px]">
              <img src={imgEkhilurMobile02} alt="Ekhilur mobile screen 2" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.ekhilur.panelTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.ekhilur.panelBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[32px]">
          <div className="w-full h-[704px] max-h-[704px] max-xl:h-[620px] max-lg:h-[520px] max-md:h-[340px] overflow-hidden bg-[#f8efc8]">
            <img alt="Ekhilur screens" className="w-full h-full object-cover" src={imgEkhilurScreens} />
          </div>
          <div className="max-w-[640px] flex flex-col gap-[16px]">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ekhilur.dataTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.ekhilur.dataBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HousesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    const section = sectionRef.current;
    if (!track || !group || !section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId = 0;
    let lastTime = performance.now();
    let offset = 0;
    let groupWidth = group.getBoundingClientRect().width;
    const speed = 38;
    let isVisible = true;
    let isDocumentVisible = document.visibilityState !== "hidden";

    const resizeObserver = new ResizeObserver(() => {
      groupWidth = group.getBoundingClientRect().width;
      if (groupWidth > 0) {
        offset = offset % groupWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
    });

    resizeObserver.observe(group);

    const stopLoop = () => {
      if (!animationFrameId) return;
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    };

    const step = (now: number) => {
      if (!isVisible || !isDocumentVisible) {
        animationFrameId = 0;
        return;
      }

      if (groupWidth > 0) {
        const deltaSeconds = (now - lastTime) / 1000;
        offset = (offset + speed * deltaSeconds) % groupWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      lastTime = now;
      animationFrameId = window.requestAnimationFrame(step);
    };

    const startLoop = () => {
      if (animationFrameId || !isVisible || !isDocumentVisible) return;
      lastTime = performance.now();
      animationFrameId = window.requestAnimationFrame(step);
    };

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.1 },
    );

    const handleVisibilityChange = () => {
      isDocumentVisible = document.visibilityState !== "hidden";
      if (isDocumentVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };

    visibilityObserver.observe(section);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    startLoop();

    return () => {
      stopLoop();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="relative w-full h-[570px] max-lg:h-[320px] max-md:h-[400px] overflow-hidden bg-[#FFFBF0] rounded-[8px]">
            <div className="absolute inset-0 flex items-center">
              <div ref={trackRef} className="flex w-max items-center will-change-transform">
                {[0, 1].map((groupIndex) => (
                  <div
                    key={groupIndex}
                    ref={groupIndex === 0 ? groupRef : undefined}
                    className="flex shrink-0 items-center gap-[72px] pr-[72px] max-md:gap-[40px] max-md:pr-[40px]"
                  >
                    {ekhilurIllustrations.map((src) => (
                      <img
                        key={`${groupIndex}-${src}`}
                        src={src}
                        alt="Ilustracion Ekhilur"
                        className="h-[240px] max-lg:h-[180px] max-md:h-[200px] w-auto shrink-0 object-contain pointer-events-none select-none"
                        draggable={false}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-[48px] items-start max-lg:flex-col">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[460px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ekhilur.housesTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[520px]">
              {t("pages.ekhilur.housesBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InnovationSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    const section = sectionRef.current;
    if (!track || !group || !section) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId = 0;
    let lastTime = performance.now();
    let offset = 0;
    let groupWidth = group.getBoundingClientRect().width;
    const speed = 18;
    let isVisible = true;
    let isDocumentVisible = document.visibilityState !== "hidden";

    const resizeObserver = new ResizeObserver(() => {
      groupWidth = group.getBoundingClientRect().width;
      if (groupWidth > 0) {
        offset = offset % groupWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
    });

    resizeObserver.observe(group);

    const stopLoop = () => {
      if (!animationFrameId) return;
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = 0;
    };

    const step = (now: number) => {
      if (!isVisible || !isDocumentVisible) {
        animationFrameId = 0;
        return;
      }

      if (groupWidth > 0) {
        const deltaSeconds = (now - lastTime) / 1000;
        offset = (offset + speed * deltaSeconds) % groupWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      lastTime = now;
      animationFrameId = window.requestAnimationFrame(step);
    };

    const startLoop = () => {
      if (animationFrameId || !isVisible || !isDocumentVisible) return;
      lastTime = performance.now();
      animationFrameId = window.requestAnimationFrame(step);
    };

    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.1 },
    );

    const handleVisibilityChange = () => {
      isDocumentVisible = document.visibilityState !== "hidden";
      if (isDocumentVisible) {
        startLoop();
      } else {
        stopLoop();
      }
    };

    visibilityObserver.observe(section);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    startLoop();

    return () => {
      stopLoop();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[32px]">
          <div className="relative w-full h-[740px] max-lg:h-[320px] max-md:h-[400px] overflow-hidden bg-[#F8EFC8] rounded-[8px]">
            <div className="absolute inset-0 flex items-center pointer-events-none select-none z-0 opacity-45">
              <div ref={trackRef} className="flex w-max items-center will-change-transform">
                {[0, 1].map((groupIndex) => (
                  <div
                    key={groupIndex}
                    ref={groupIndex === 0 ? groupRef : undefined}
                    className="flex shrink-0 items-center gap-[72px] pr-[72px] max-lg:gap-[48px] max-lg:pr-[48px] max-md:gap-[28px] max-md:pr-[28px]"
                  >
                    {ekhilurPicks.map((src) => (
                      <img
                        key={`${groupIndex}-${src}`}
                        src={src}
                        alt="Icono Ekhilur"
                        className="h-[180px] max-lg:h-[110px] max-md:h-[78px] w-auto shrink-0 object-contain"
                        draggable={false}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
              <img
                src={imgEkhilurPhoneHand}
                alt="Vista de la app Ekhilur"
                className="h-full w-auto object-contain"
                draggable={false}
              />
            </div>
          </div>
          <div className="flex justify-between gap-[48px] items-start max-lg:flex-col">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[420px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ekhilur.accessibilityTitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[520px]">
              {t("pages.ekhilur.accessibilityBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="flex gap-[40px] max-md:flex-col max-md:gap-[24px]">
            <div className="flex-1 h-[545px] max-lg:h-[340px] max-md:h-[240px] overflow-hidden rounded-[8px]">
              <img src={imgEkhilurDashLeft} alt="Panel de usuarios Ekhilur" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 h-[545px] max-lg:h-[340px] max-md:h-[240px] overflow-hidden rounded-[8px]">
              <img src={imgEkhilurDashRight} alt="Panel de saldo Ekhilur" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="w-[580px] max-lg:w-full flex flex-col gap-[24px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                {t("pages.ekhilur.dashboardTitle")}
              </p>
              <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                {t("pages.ekhilur.dashboardBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedProjects() {
  const { t } = useTranslation();

  return (
    <RelatedProjectsSection title={t("pages.ekhilur.relatedTitle")}>
      <RelatedProjectCard
        image={imgRelatedVivla}
        tag={t("work.projects.vivla.tag")}
        name={t("work.projects.vivla.name")}
        description={t("work.projects.vivla.description")}
        slug="vivla"
      />
      <RelatedProjectCard
        image={imgRelatedNavilens}
        tag={t("work.projects.navilens.tag")}
        name={t("work.projects.navilens.name")}
        description={t("work.projects.navilens.description")}
        slug="navilens"
      />
    </RelatedProjectsSection>
  );
}

export function ProjectDetailEkhilur() {
  return (
    <>
      <HeroSection />
      <RevealAfterTransition delay={0.04}><IntroSection /></RevealAfterTransition>
      <RevealAfterTransition delay={0.08}><LogoSection /></RevealAfterTransition>
      <ScrollRevealSection><StatementSection /></ScrollRevealSection>
      <ScrollRevealSection><TwinPanelsSection /></ScrollRevealSection>
      <ScrollRevealSection><DataSection /></ScrollRevealSection>
      <ScrollRevealSection><HousesSection /></ScrollRevealSection>
      <ScrollRevealSection><DashboardSection /></ScrollRevealSection>
      <ScrollRevealSection><InnovationSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}