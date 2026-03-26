import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { ContactSection } from "../components/ContactSection";
import {
  RevealAfterTransition,
  ScrollRevealSection,
  RelatedProjectCard,
  RelatedProjectsSection,
} from "../components/project-detail-shared";

/* ─── Figma Assets ─── */
import imgIdermappHero from "/images/idermapp/iDermApp hero section IMG.jpg";
import imgIdLogo from "/images/idermapp/iD Logo.jpg";
import imgIdermBg from "/images/idermapp/iDerm Section small mobile.svg";
import imgIdermCreme from "/images/idermapp/iDerm Section creme.jpeg";
import imgDermAppScreens from "/images/idermapp/iDermApp Screens.jpg";
import imgIdermMobileSection from "/images/idermapp/iDerm APP mobile section.jpg";
import imgIdermResume from "/images/idermapp/iDermApp Resume IMG.jpg";
import imgIdermUser from "/images/idermapp/iDermApp User IMG.jpg";
import imgAvatarPatient from "/images/idermapp/usuario-idermapp.jpg";
import imgChangeThis1 from "figma:asset/af57cfdcb86aed762c8a6b3c477ef348ad6f2a8b.png";
import imgShadow from "figma:asset/0e574b340d591487fd4f938ab54f1795774692f9.png";
import imgReflection from "figma:asset/e112cd78c1cd95b303446e0e110c9d0a9f9069ab.png";
import imgShadow1 from "figma:asset/cf242ff9a2d9085d35108e511edcea9a29ea5729.png";
import imgChangeThis3 from "figma:asset/62c14272d7b1b6797a139627839f1aef7fa8f410.png";
import imgShadow2 from "figma:asset/8f2321113c61d9c781dbec59f631ad1340396f15.png";
import imgReflection1 from "figma:asset/7299a1c8400b155f522aeab52d8df4a31de242e5.png";
import imgRectangle from "figma:asset/586c0ce3d1a80221215ae04074caaef793ecccca.png";
import imgIDermSlider from "figma:asset/b91f06f27caaa434dac39a7317b48928dd38c4ee.png";
import imgBgImg from "figma:asset/629ab9435a15ff8977689debec5177909435096d.png";
import imgSpecialist1 from "figma:asset/1eb8762b1aefff04ba6a8807183288ed88bba7cb.png";
import imgSpecialist2 from "figma:asset/208255154bad2997b238349e733c82a6d904b677.png";
import imgSpecialist3 from "figma:asset/58570655c8c6856d80de4f4bc3dfd1242d34d858.png";
import imgSpecialist4 from "figma:asset/e76bb89dba2dff28764ac10504b15994e8e28074.png";
import imgSpecialist5 from "figma:asset/ac94a2ccc0128e254b7df2300894f976e2918ce4.png";
import imgDoctorBg from "figma:asset/fedd8b8a1376de87fe4f4c4be91e8eb744d9b2d8.png";
import imgSpecialist6 from "figma:asset/2a15dbc8d3b4f838af6d2bc881c52286a576d809.png";
import imgSpecialist7 from "figma:asset/7846df17dc692d2a0d48025b3fb410e07c702819.png";
import imgSpecialist8 from "figma:asset/94764661a7ad565b9559c1d107c28f10d278995d.png";
import imgSpecialist9 from "figma:asset/e69471e67ec124e980846cfe4fd536379b074a95.png";
import imgSpecialist10 from "figma:asset/92073aa164052f6930d07585d71805c037eb3b90.png";
import imgSpecialist11 from "figma:asset/04df2abfc07c4d6920ed98aef43835d447dbf84a.png";
import imgSpecialist12 from "figma:asset/eea520e15969cc36cfbbd938c37927050c82784a.png";
import imgSpecialist13 from "figma:asset/69b4616642b8fe99b098f259cfa7604ec2e4e290.png";
import imgRelatedRoomonitor from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";
import imgRelatedNavilens from "figma:asset/703c1bbb0750e4d852aeb246e01ec3e480282103.png";
import imgIPhone15Pro from "figma:asset/6c3fa3d2a87e60f389f86dc1c5503e4b69f06ec8.png";
import imgMore from "figma:asset/7d0f8cb44063907f7befe3440f5f9d72bff8e579.png";
import { imgChangeThis, imgChangeThis2 } from "../../imports/svg-f2917";
import svgPaths from "../../imports/svg-aeu4f9zq8x";

const EASE = [0.22, 1, 0.36, 1];

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
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-w-[472px] max-md:text-[24px] max-md:leading-[32px]">
              {t("pages.idermapp.introSubtitle")}
            </p>
            <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
              {t("pages.idermapp.introBody")}
            </p>
          </div>
          <div className="flex flex-col gap-[24px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
            <div className="flex flex-col gap-[16px]">
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                {t("pages.idermapp.performanceLabel")}
              </p>
              <div className="flex flex-col gap-[8px]">
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue1")}</p>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">{t("pages.idermapp.performanceValue2")}</p>
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
            className="w-full h-[600px] max-lg:h-[420px] max-md:h-[300px] relative overflow-hidden flex items-center justify-center"
            style={{
              backgroundImage: `url(${imgIdLogo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <img
              alt="iDermApp logo"
              className="w-[444px] h-[444px] max-lg:w-[320px] max-lg:h-[320px] max-md:w-[220px] max-md:h-[220px] object-cover"
              src={imgRectangle}
            />
          </div>
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
          <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgIdermBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute left-1/2 -translate-x-1/2 top-[100px] max-lg:top-[60px] max-md:top-[40px]">
              <div className="relative w-[296px] h-[642px] max-lg:w-[220px] max-lg:h-[477px] max-md:w-[200px] max-md:h-[434px]">
                {/* Consultation screen content */}
                <div className="absolute inset-0 bg-[#f9fafc] rounded-[36px] max-lg:rounded-[27px] max-md:rounded-[24px] overflow-hidden">
                  <div className="p-[12px] pt-[80px] max-lg:p-[9px] max-lg:pt-[60px]">
                    <div className="flex gap-[6px] items-start">
                      <img alt="" className="w-[24px] h-[24px] max-lg:w-[18px] max-lg:h-[18px] rounded-full border border-[#c6cfdf] object-cover shrink-0" src={imgMore} />
                      <div className="bg-white rounded-t-[12px] rounded-b-[3px] border border-[#e1e3e8] p-[12px] max-lg:p-[8px] flex-1">
                        <p className="text-[12px] max-lg:text-[10px] text-black leading-[18px] max-lg:leading-[15px]">
                          ¡Hola María! Parece que estás experimentando sarpullidos en tus brazos y manos. Te recomendaría utilizar una crema de hidrocortisona al 1%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Phone bezel */}
                <div className="absolute -inset-[30px] max-lg:-inset-[22px] max-md:-inset-[20px] pointer-events-none">
                  <img alt="" className="w-full h-full object-cover" src={imgIPhone15Pro} />
                </div>
              </div>
            </div>
          </div>
          {/* Specialist grid */}
          <div className="flex-1 h-[545px] max-lg:h-[400px] max-md:h-[350px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgIdermCreme})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <img alt="iDermApp specialists" className="absolute inset-0 w-full h-full object-cover" src={imgIDermSlider} />
          </div>
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
          <div className="w-full h-[800px] max-lg:h-[560px] max-md:h-[380px] relative overflow-hidden"
            style={{ backgroundImage: `url(${imgDermAppScreens})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            {/* Display app screens as images from Figma */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img alt="iDermApp screens" className="h-full object-contain" src={imgBgImg} />
            </div>
          </div>
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
  const specialists = [
    imgSpecialist1, imgSpecialist2, imgSpecialist3, imgSpecialist4,
    imgSpecialist5, imgSpecialist6, imgSpecialist7, imgSpecialist8,
    imgSpecialist9, imgSpecialist10, imgSpecialist11, imgSpecialist12,
    imgSpecialist13,
  ];

  return (
    <section className="bg-white w-full">
      <div className="px-[56px] pt-[40px] max-md:px-[24px] max-md:pt-[24px]">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[40px]">
          {/* Specialist grid panel */}
          <div className="w-full h-[740px] max-lg:h-[520px] max-md:h-[400px] bg-[#f8f9fa] relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-[636px] h-[636px] max-lg:w-[450px] max-lg:h-[450px] max-md:w-[300px] max-md:h-[300px]" fill="none" viewBox="0 0 636 636">
                <circle cx="318" cy="318" r="317" stroke="#EBF3F5" strokeOpacity="0.72" />
                <circle cx="318" cy="318" r="254" stroke="#EBF3F5" strokeOpacity="0.8" />
                <circle cx="318" cy="318" r="187" stroke="#EBF3F5" strokeOpacity="0.72" />
              </svg>
            </div>
            {/* Specialist photos scattered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[580px] h-[580px] max-lg:w-[420px] max-lg:h-[420px] max-md:w-[300px] max-md:h-[300px]">
                {specialists.map((img, i) => {
                  const angle = (i / specialists.length) * 2 * Math.PI - Math.PI / 2;
                  const radiusPercent = i % 3 === 0 ? 38 : i % 3 === 1 ? 28 : 18;
                  const left = 50 + radiusPercent * Math.cos(angle);
                  const top = 50 + radiusPercent * Math.sin(angle);
                  const size = i === 0 ? "w-[64px] h-[64px] max-lg:w-[48px] max-lg:h-[48px] max-md:w-[36px] max-md:h-[36px]"
                    : i < 5 ? "w-[56px] h-[56px] max-lg:w-[42px] max-lg:h-[42px] max-md:w-[32px] max-md:h-[32px]"
                    : "w-[48px] h-[48px] max-lg:w-[36px] max-lg:h-[36px] max-md:w-[28px] max-md:h-[28px]";
                  return (
                    <img
                      key={i}
                      alt=""
                      className={`absolute rounded-full object-cover border-2 border-white shadow-sm ${size}`}
                      style={{ left: `${left}%`, top: `${top}%`, transform: "translate(-50%, -50%)" }}
                      src={img}
                    />
                  );
                })}
                {/* Central doctor image */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] max-lg:w-[72px] max-lg:h-[72px] max-md:w-[56px] max-md:h-[56px] rounded-full overflow-hidden border-3 border-white shadow-lg">
                  <img alt="Doctor" className="w-full h-full object-cover" src={imgDoctorBg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   9. QUALITY — Calidad de Atención
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
   10. MOBILE APP — Full-width image
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
            animate={{ scale: [1, 1.08, 1] }}
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
   11. SKIN CARE — Text section
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
   12. RELATED PROJECTS
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
      <ScrollRevealSection><VisionSection /></ScrollRevealSection>
      <ScrollRevealSection><PhoneSpecialistPanels /></ScrollRevealSection>
      <ScrollRevealSection><AccessibilitySection /></ScrollRevealSection>
      <ScrollRevealSection><ScreensSection /></ScrollRevealSection>
      <ScrollRevealSection><ProfessionalsSection /></ScrollRevealSection>
      <ScrollRevealSection><QualitySection /></ScrollRevealSection>
      <ScrollRevealSection><MobileAppSection /></ScrollRevealSection>
      <ScrollRevealSection><SkinCareSection /></ScrollRevealSection>
      <ScrollRevealSection><RelatedProjects /></ScrollRevealSection>
      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}