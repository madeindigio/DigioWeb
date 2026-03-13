import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { LangText } from "../components/LangText";
import { ContactSection } from "../components/ContactSection";

import svgPaths from "../../imports/svg-ws9geozil5";
import svgArrow from "../../imports/svg-0193fyzoz5";
import imgBgImg4 from "figma:asset/8212896e6a60fb7b1b52ab2f32566ba0c7b8603e.png";
import imgBgImg5 from "figma:asset/d98435baf92859ef828633f7a5affa80246aad9d.png";
import imgBgImg2 from "figma:asset/a731754f2b62b4e67b1191130818f67104f0d42a.png";
import imgBgImg from "figma:asset/fed975d4171deac24b90e8520b6be34b7d0e512b.png";
import imgBgImg6 from "figma:asset/102eaa9b04d8efe5a345951a0cb8223d13efbf8e.png";
import imgBgImg1 from "figma:asset/2c7b4bcead3f083cb8f55f216893a62053cf893a.png";
import imgBgImg3 from "figma:asset/76106ad2f358c802282da63e46b0920bb73038ac.png";
import imgBgImg7 from "figma:asset/f54413152b0707aab69826d5c7f56ff019ea170f.png";

const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

/* ─── Dropdown Arrow SVG (from Figma) ─── */
function DropdownArrow({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.div
      className="w-[32px] h-[32px] flex items-center justify-center"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.35, ease: EASE_SMOOTH }}
    >
      <svg width="35" height="21" viewBox="0 0 34.8716 20.7653" fill="none">
        <path d={svgArrow.p3b669500} stroke="#191E25" strokeWidth="4" />
      </svg>
    </motion.div>
  );
}

/* ─── Person SVG illustration ─── */
function PersonIllustration() {
  return (
    <div className="relative w-[497px] h-[457px] max-lg:w-[300px] max-lg:h-[276px] max-md:w-[200px] max-md:h-[184px] shrink-0">
      <div className="absolute inset-[0%_19%_0%_19%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308.46 456.91">
          <path d={svgPaths.p1526e00} fill="#E2DFDA" />
        </svg>
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#191e25] w-full relative overflow-hidden">
      <div className="min-h-[744px] max-lg:min-h-[600px] max-md:min-h-[auto] flex items-center px-[56px] max-md:px-[24px] py-[120px] max-md:py-[80px]">
        <div className="max-w-[1400px] mx-auto w-full flex items-center justify-between gap-[48px] max-lg:gap-[32px] max-md:flex-col max-md:items-start">
          <div className="flex flex-col gap-[32px] max-w-[578px] max-md:max-w-full shrink-0">
            <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[20px] tracking-[-0.8px] whitespace-nowrap">
              {t("pages.unete.label")}
            </LangText>
            <LangText as="p" stagger={1} className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
              {t("pages.unete.title")}
            </LangText>
          </div>
          <PersonIllustration />
        </div>
      </div>
    </section>
  );
}

/* ─── Talent / Photos Section ─── */
function TalentSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[120px] max-lg:gap-[80px] max-md:gap-[48px]">
        <div className="flex items-end justify-between gap-[48px] max-lg:flex-col max-lg:items-start max-lg:gap-[24px]">
          <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[680px] max-lg:text-[36px] max-md:text-[28px] whitespace-pre-line">
            {t("pages.unete.talentTitle")}
          </LangText>
          <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[264px] max-lg:max-w-full">
            {t("pages.unete.talentBody")}
          </LangText>
        </div>

        <div className="flex flex-col gap-[48px] max-md:gap-[24px]">
          {/* Row 1: 3 columns */}
          <div className="flex gap-[48px] max-md:gap-[16px] max-md:flex-col">
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] relative overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg4} />
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg5} />
              <div className="absolute inset-0 bg-black mix-blend-color" />
            </div>
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] bg-white" />
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] relative overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg2} />
              <div className="absolute inset-0 bg-black mix-blend-color" />
            </div>
          </div>

          {/* Row 2: Full width */}
          <div className="w-full h-[600px] max-lg:h-[400px] max-md:h-[250px] relative overflow-hidden">
            <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg} />
          </div>

          {/* Row 3: 3 columns */}
          <div className="flex gap-[48px] max-md:gap-[16px] max-md:flex-col">
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] bg-white" />
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] relative overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg6} />
            </div>
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg1} />
              </div>
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg3} />
              </div>
            </div>
          </div>

          {/* Row 4: 2 columns */}
          <div className="flex gap-[48px] max-md:gap-[16px] max-md:flex-col">
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] relative overflow-hidden">
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgBgImg7} />
            </div>
            <div className="flex-1 h-[400px] max-lg:h-[280px] max-md:h-[220px] bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Benefit Card ─── */
function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col gap-[24px] flex-1 min-w-0">
      <div className="h-px w-full bg-[#716E6A]" />
      <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px]">
        {title}
      </p>
      <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-md:text-[14px]">
        {desc}
      </p>
    </div>
  );
}

/* ─── Benefits Section ─── */
function BenefitsSection() {
  const { t } = useTranslation();
  const benefitKeys = ["projects", "flexibility", "retribution", "methodologies", "wellness", "training"] as const;

  return (
    <section className="bg-[#bbffe8] w-full px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[48px] max-md:gap-[32px]">
        <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[576px] max-lg:text-[36px] max-md:text-[28px] whitespace-pre-line">
          {t("pages.unete.benefitsTitle")}
        </LangText>

        {[0, 1, 2].map((row) => (
          <div key={row} className="flex gap-[48px] max-md:flex-col max-md:gap-[32px]">
            <BenefitCard
              title={t(`pages.unete.benefits.${benefitKeys[row * 2]}.title`)}
              desc={t(`pages.unete.benefits.${benefitKeys[row * 2]}.desc`)}
            />
            <BenefitCard
              title={t(`pages.unete.benefits.${benefitKeys[row * 2 + 1]}.title`)}
              desc={t(`pages.unete.benefits.${benefitKeys[row * 2 + 1]}.desc`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Expanded job details (PHP Backend) ─── */
function JobDetails({ jobKey }: { jobKey: string }) {
  const { t } = useTranslation();
  const sections = [
    { titleKey: "tech", listKey: "techList" },
    { titleKey: "valued", listKey: "valuedList" },
    { titleKey: "environments", listKey: "environmentsList" },
    { titleKey: "offer", listKey: "offerList" },
  ];

  return (
    <div className="px-[56px] pb-[48px] max-md:px-[24px] max-md:pb-[32px]">
      <div className="max-w-[1400px] mx-auto flex gap-[40px] items-start max-lg:flex-col max-lg:gap-[32px]">
        {/* Left: details */}
        <div className="flex flex-col gap-[16px] max-w-[680px] max-md:max-w-full">
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
            {t(`pages.unete.jobs.${jobKey}.intro`)}
          </p>
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px]">
            {t(`pages.unete.jobs.${jobKey}.requirements`)}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
            {t(`pages.unete.jobs.${jobKey}.requirementsBody`)}
          </p>
          {sections.map((s) => (
            <div key={s.titleKey} className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px]">
                {t(`pages.unete.jobs.${jobKey}.${s.titleKey}`)}
              </p>
              <ul className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] list-disc ml-[24px]">
                {(t(`pages.unete.jobs.${jobKey}.${s.listKey}`, { returnObjects: true }) as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex-1 flex justify-center items-center max-lg:w-full max-lg:justify-start">
          <div className="border-l border-[#f1f0ed] pl-[48px] h-full flex items-center justify-center max-lg:border-l-0 max-lg:pl-0 max-lg:pt-[24px] max-lg:border-t max-lg:border-[#f1f0ed] max-lg:w-full">
            <button className="relative px-[48px] py-[16px] border border-[#191e25] bg-transparent cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group max-md:w-full">
              <span className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] whitespace-nowrap text-center group-hover:text-white max-md:text-[16px]">
                {t("pages.unete.sendCv")}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Job Offer Card (accordion) ─── */
function JobOfferCard({
  jobKey,
  isOpen,
  onToggle,
  hasDetails,
}: {
  jobKey: string;
  isOpen: boolean;
  onToggle: () => void;
  hasDetails: boolean;
}) {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Separator */}
      <div className="h-px w-full bg-[#E2DFDA]" />

      {/* Header row — hover bg matches Figma #f6f5f3 */}
      <div
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onToggle(); }}
        className={`w-full flex items-center pt-[48px] pb-[48px] px-[56px] max-md:px-[24px] max-md:pt-[32px] max-md:pb-[32px] cursor-pointer transition-colors duration-200 hover:bg-[#f6f5f3] ${isOpen ? "bg-[#f6f5f3]" : ""}`}
      >
        <div className="max-w-[1400px] mx-auto w-full flex items-center gap-[40px] max-md:gap-[16px]">
          <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] text-left flex-1 min-w-0 max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px]">
            {t(`pages.unete.jobs.${jobKey}.title`)}
          </p>
          <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] w-[180px] shrink-0 text-left max-md:hidden">
            {t(`pages.unete.jobs.${jobKey}.area`)}
          </p>
          <div className="shrink-0 flex items-center justify-center">
            <DropdownArrow isOpen={isOpen} />
          </div>
        </div>
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && hasDetails && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH }}
            className="overflow-hidden"
          >
            <JobDetails jobKey={jobKey} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Job Offers Section ─── */
function OffersSection() {
  const { t } = useTranslation();
  const [openJob, setOpenJob] = useState<string | null>(null);

  const jobs = [
    { key: "node", hasDetails: false },
    { key: "php", hasDetails: true },
    { key: "frontend", hasDetails: false },
    { key: "mobile", hasDetails: false },
  ];

  return (
    <section className="bg-white w-full py-[120px] max-lg:py-[80px] max-md:py-[48px]">
      {/* Title area */}
      <div className="px-[56px] pb-[56px] max-md:px-[24px] max-md:pb-[32px]">
        <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[48px] max-lg:flex-col max-lg:gap-[24px]">
          <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-w-[680px] max-lg:text-[36px] max-md:text-[28px]">
            {t("pages.unete.offersTitle")}
          </LangText>
          <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] max-w-[368px] max-lg:max-w-full">
            {t("pages.unete.offersBody")}
          </LangText>
        </div>
      </div>

      {/* Job cards */}
      <div className="flex flex-col">
        {jobs.map((job) => (
          <JobOfferCard
            key={job.key}
            jobKey={job.key}
            isOpen={openJob === job.key}
            onToggle={() => setOpenJob(openJob === job.key ? null : job.key)}
            hasDetails={job.hasDetails}
          />
        ))}
        {/* Bottom separator */}
        <div className="h-px w-full bg-[#E2DFDA]" />
      </div>
    </section>
  );
}

/* ─── Page ─── */
export function UnetePage() {
  return (
    <>
      <HeroSection />
      <TalentSection />
      <BenefitsSection />
      <OffersSection />
      <ContactSection />
    </>
  );
}
