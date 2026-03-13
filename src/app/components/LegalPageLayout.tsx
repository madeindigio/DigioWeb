import { useEffect, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { smoothScrollTo } from "./SmoothScrollProvider";
import { ContactSection } from "./ContactSection";

const EASE = [0.22, 1, 0.36, 1];

export interface TocItem {
  id: string;
  label: string;
}

/* ── Sticky TOC sidebar (xl+ only) ── */
function TableOfContents({
  items,
  activeId,
}: {
  items: TocItem[];
  activeId: string;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector("header");
    const headerH = header ? header.getBoundingClientRect().height : 0;
    const top =
      el.getBoundingClientRect().top + window.scrollY - headerH - 24;
    smoothScrollTo(Math.max(0, top), 1000);
  }

  return (
    <motion.nav
      className="hidden xl:flex flex-col gap-[2px] sticky top-[120px] self-start w-[220px] shrink-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
    >
      <p className="font-['Satoshi',sans-serif] text-[#191e25] text-[12px] tracking-[1.2px] mb-[12px] uppercase opacity-50">
        Contenido
      </p>
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`
              relative pl-[16px] py-[6px] text-[14px] leading-[20px] font-['Satoshi',sans-serif]
              transition-all duration-300 ease-out
              before:content-[''] before:absolute before:left-0 before:top-[4px] before:bottom-[4px]
              before:w-[2px] before:rounded-full before:transition-all before:duration-300
              ${
                isActive
                  ? "text-[#191e25] before:bg-[#191e25] before:opacity-100"
                  : "text-[#191e25]/40 before:bg-[#191e25]/10 before:opacity-100 hover:text-[#191e25]/70"
              }
            `}
          >
            {item.label}
          </a>
        );
      })}
    </motion.nav>
  );
}

/* ── Shared section wrapper with id ── */
export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div id={id} className="flex flex-col gap-[24px] scroll-mt-[100px]">
      <div className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
        {title}
      </div>
      {children}
    </div>
  );
}

export function LegalBody({ children }: { children: ReactNode }) {
  return (
    <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] font-[600]">
      {children}
    </p>
  );
}

export function LegalBulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-[24px] flex flex-col gap-0 font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal] font-[600]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/* ── Main layout ── */
export function LegalPageLayout({
  title,
  tocItems,
  children,
}: {
  title: string;
  tocItems: TocItem[];
  children: ReactNode;
}) {
  const { i18n } = useTranslation();
  const [activeId, setActiveId] = useState(tocItems[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    /* Reset active on lang change */
    setActiveId(tocItems[0]?.id ?? "");
  }, [i18n.language, tocItems]);

  useEffect(() => {
    const ids = tocItems.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        /* Pick the topmost visible section */
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observerRef.current!.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [tocItems]);

  return (
    <>
      <section className="bg-[rgba(255,255,255,0.16)] w-full shadow-[0px_1px_0px_0px_#e2dfda]">
        <div className="px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[48px]">
          <div className="max-w-[1400px] mx-auto flex gap-[64px] xl:justify-center">
            {/* TOC sidebar */}
            <TableOfContents items={tocItems} activeId={activeId} />

            {/* Content */}
            <motion.div
              className="max-w-[784px] w-full flex flex-col gap-[56px] max-md:gap-[40px]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <h1 className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] max-md:text-[28px] max-md:leading-[36px]">
                {title}
              </h1>

              <div className="flex flex-col gap-[24px]">{children}</div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
