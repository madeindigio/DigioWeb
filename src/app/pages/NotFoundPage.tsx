import { Link } from "react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";

/* ─── Binary decode animation for "404" ─── */
const TARGET = "404";
const TOTAL_DURATION = 1800; // ms – full animation window
const CHAR_STAGGER = 220;   // ms delay between each character settling

function BinaryDecode() {
  const [display, setDisplay] = useState("000");
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const animate = useCallback((now: number) => {
    if (!startRef.current) startRef.current = now;
    const elapsed = now - startRef.current;

    let result = "";
    for (let i = 0; i < TARGET.length; i++) {
      // Each character settles at its own time (stagger)
      const charDeadline = TOTAL_DURATION - (TARGET.length - 1 - i) * CHAR_STAGGER;
      const charProgress = Math.min(elapsed / charDeadline, 1);

      if (charProgress >= 1) {
        // Character has settled – show final digit
        result += TARGET[i];
      } else {
        // Still "decoding" – show random 0/1
        // As progress increases, bias towards the correct digit
        const settleChance = charProgress * charProgress * charProgress; // cubic ease-in
        if (Math.random() < settleChance) {
          result += TARGET[i];
        } else {
          result += Math.random() < 0.5 ? "0" : "1";
        }
      }
    }

    setDisplay(result);

    if (elapsed < TOTAL_DURATION) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setDisplay(TARGET);
    }
  }, []);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <p className="font-['GT_Ultra_Median',sans-serif] text-[#e5e1dc]/30 text-[160px] tracking-[-6.4px] leading-[1] max-md:text-[100px] tabular-nums">
      {display.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block transition-opacity duration-300"
          style={{ opacity: char === TARGET[i] ? 0.3 : 0.12 }}
        >
          {char}
        </span>
      ))}
    </p>
  );
}

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#191e25] w-full min-h-[80vh] flex items-center justify-center px-[24px]">
      <div className="max-w-[600px] text-center flex flex-col gap-[24px] items-center">
        <BinaryDecode />
        <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#e5e1dc] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
          {t("pages.notFound.title")}
        </LangText>
        <LangText as="p" stagger={1} className="font-['Manrope',sans-serif] text-[#e5e1dc]/60 text-[18px] leading-[1.5]">
          {t("pages.notFound.body")}
        </LangText>
        <Link
          to="/"
          className="mt-[8px] font-['GT_Ultra_Median',sans-serif] text-[#191e25] bg-[#e5e1dc] text-[16px] tracking-[-0.32px] rounded-full px-[32px] py-[14px] hover:bg-white transition-colors"
        >
          {t("pages.notFound.cta")}
        </Link>
      </div>
    </section>
  );
}