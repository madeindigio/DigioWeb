import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import {
  RelatedProjectCard,
  RelatedProjectsSection,
  RevealAfterTransition,
  ScrollRevealSection,
} from "../components/project-detail-shared";
const imgEkhilurHero = "/images/projects/ekhilur/ekhilur-hero-section.jpg";
const imgEkhilurLogo = "/images/projects/ekhilur/logo%20ekhilur.svg";
const imgEkhilurScreens = "/images/projects/ekhilur/ekhiscreens.jpg";
const imgEkhilurMobile01 = "/images/projects/ekhilur/Ekhi_mobile_01.jpg";
const imgEkhilurMobile02 = "/images/projects/ekhilur/Ekhi_mobile_02.jpg";
const ekhilurIllustrations = [
  "/images/projects/ekhilur/ekhillustrations/ekhi_01.svg",
  "/images/projects/ekhilur/ekhillustrations/ekhi_02.svg",
  "/images/projects/ekhilur/ekhillustrations/ekhi_03.svg",
  "/images/projects/ekhilur/ekhillustrations/ekhi_04.svg",
];

const imgRelatedVivla = "/images/placeholder-gray.svg";
const imgRelatedNavilens = "/images/placeholder-gray.svg";

function MockPanel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#ececec] ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0))]" />
      <div className="absolute inset-[24px] rounded-[16px] border border-[#d6d6d6] border-dashed max-md:inset-[12px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#9b9b9b] text-[24px] tracking-[-0.96px] max-md:text-[16px]">
          {label}
        </p>
      </div>
    </div>
  );
}

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
            ekhilur
          </p>
          <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[520px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.ekhilur.introSubtitle")}
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.ekhilur.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {(t("pages.ekhilur.performanceItems", { returnObjects: true }) as string[]).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.ekhilur.platformLabel")}
              </p>
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                {t("pages.ekhilur.platformValue")}
              </p>
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
      <div className="px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full h-[600px] max-xl:h-[520px] max-lg:h-[440px] max-md:h-[320px] rounded-[4px] bg-[#F8F9FA] flex items-center justify-center px-[24px]">
            <img
              alt="Logo Ekhilur"
              className="w-[460px] max-xl:w-[400px] max-lg:w-[320px] max-md:w-[220px] h-auto"
              src={imgEkhilurLogo}
            />
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
  const trackRef = useRef<HTMLDivElement | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let animationFrameId = 0;
    let lastTime = performance.now();
    let offset = 0;
    let groupWidth = group.getBoundingClientRect().width;
    const speed = 38;

    const resizeObserver = new ResizeObserver(() => {
      groupWidth = group.getBoundingClientRect().width;
      if (groupWidth > 0) {
        offset = offset % groupWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }
    });

    resizeObserver.observe(group);

    const step = (now: number) => {
      if (groupWidth > 0) {
        const deltaSeconds = (now - lastTime) / 1000;
        offset = (offset + speed * deltaSeconds) % groupWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      lastTime = now;
      animationFrameId = window.requestAnimationFrame(step);
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          <div className="relative w-full h-[570px] max-lg:h-[320px] max-md:h-[240px] overflow-hidden bg-[#FFFBF0] rounded-[8px]">
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
                        className="h-[240px] max-lg:h-[180px] max-md:h-[130px] w-auto shrink-0 object-contain pointer-events-none select-none"
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

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pb-[100px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[32px]">
          <MockPanel label="Mock bloque final" className="w-full h-[420px] max-lg:h-[320px] max-md:h-[220px]" />
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
      <ScrollRevealSection><InnovationSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}