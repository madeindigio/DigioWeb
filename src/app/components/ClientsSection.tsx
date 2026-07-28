import svgPaths from "../../imports/svg-5maq4jyelf";
import newMeridaPaths from "../../imports/svg-rlgk16hava";
import { useTranslation } from "react-i18next";
import { LangText } from "./LangText";
import { Link } from "react-router";
import {
  type ComponentType,
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

type LogoBoxProps = {
  className?: string;
  style?: CSSProperties;
};

function OrangeLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 60 60">
        <path d="M60 60H0V0H60V60Z" fill="#191E25" />
        <path d={svgPaths.p8cc5040} fill="white" />
      </svg>
    </div>
  );
}

function SantanderLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 198.758 34.7826">
        <g clipPath="url(#clip_sant)">
          <path d={svgPaths.p3c765000} fill="#191E25" />
        </g>
        <defs>
          <clipPath id="clip_sant">
            <rect fill="white" height="34.7826" width="198.758" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AtrapaloLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 170.01 48">
        <path d={svgPaths.p967c380} fill="#191E25" />
      </svg>
    </div>
  );
}

function FinsaLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 overflow-clip ${className}`} style={style}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 130.166 39.8207">
        <path d={svgPaths.p296fc00} fill="#191E25" />
        <path d={svgPaths.p26992400} fill="#191E25" />
        <path d={svgPaths.pa571900} fill="#191E25" />
        <path d={svgPaths.p2053deb2} fill="#191E25" />
        <path d={svgPaths.p14397080} fill="#191E25" />
        <path d={svgPaths.p2f40ed80} fill="#191E25" />
      </svg>
    </div>
  );
}

function GrupoPlanetaLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 overflow-clip ${className}`} style={style}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 217.98 39.6723">
        <path d={svgPaths.p1ab6b900} fill="#191E25" />
        <path d={svgPaths.p244e3100} fill="#191E25" />
        <path d={svgPaths.p250ca280} fill="#191E25" />
      </svg>
    </div>
  );
}

function ElecnorLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 overflow-clip ${className}`} style={style}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 106.963 39.9999">
        <path d={svgPaths.p18df2040} fill="#191E25" />
        <path d={svgPaths.p20906b00} fill="#191E25" />
        <path d={svgPaths.p2bb0c400} fill="#191E25" />
        <path d={svgPaths.p141d6e00} fill="#191E25" />
        <path d={svgPaths.p3bb32800} fill="#191E25" />
        <path d={svgPaths.p6938500} fill="#191E25" />
        <path d={svgPaths.p3a13b00} fill="#191E25" />
        <path d={svgPaths.p36b0b120} fill="#191E25" />
      </svg>
    </div>
  );
}

function TefalLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 189.66 26.7841">
        <g clipPath="url(#clip_tefal)">
          <path d={svgPaths.pb4d24f0} fill="#191E25" />
        </g>
        <defs>
          <clipPath id="clip_tefal">
            <rect fill="white" height="26.7841" width="189.66" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PCcomLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 overflow-clip ${className}`} style={style}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 114.286 39.5918">
        <path d={svgPaths.p397aba80} fill="#191E25" />
        <path d={svgPaths.pe1ba000} fill="#191E25" />
        <path d={svgPaths.p337d1600} fill="#191E25" />
        <path d={svgPaths.p27089000} fill="#191E25" />
        <path d={svgPaths.p1b593e00} fill="#191E25" />
        <path d={svgPaths.p35b0c280} fill="#191E25" />
      </svg>
    </div>
  );
}

function YoigoLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 154.597 48">
        <g clipPath="url(#clip_yoigo)">
          <path d={svgPaths.pad41300} fill="#191E25" />
        </g>
        <defs>
          <clipPath id="clip_yoigo">
            <rect fill="white" height="48" width="154.597" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function EmagisterLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 137.6 40">
        <g clipPath="url(#clip_emag)">
          <path d={svgPaths.p2ddbb3f0} fill="#191E25" />
        </g>
        <defs>
          <clipPath id="clip_emag">
            <rect fill="white" height="40" width="137.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MeridaLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 199.715 27.286">
        <g transform="translate(0, 6.69) scale(1, 1)">
          <svg width="155.365" height="13.6691" viewBox="0 0 155.365 13.6691" x="0" y="0">
            <path d={newMeridaPaths.p227f5a00} fill="#191E25" />
            <path d={newMeridaPaths.pcec8400} fill="#191E25" />
            <path d={newMeridaPaths.p28827d00} fill="#191E25" />
            <path d={newMeridaPaths.p3f3162f0} fill="#191E25" />
            <path d={newMeridaPaths.p3717b100} fill="#191E25" />
            <path d={newMeridaPaths.pc2b4800} fill="#191E25" />
          </svg>
        </g>
        <svg width="44.3496" height="27.286" viewBox="0 0 44.3496 27.286" x="155.365" y="0">
          <path clipRule="evenodd" d={newMeridaPaths.p30830200} fill="#191E25" fillRule="evenodd" />
          <path clipRule="evenodd" d={newMeridaPaths.p2ab7bb00} fill="#191E25" fillRule="evenodd" />
        </svg>
      </svg>
    </div>
  );
}

function BBVALogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 133.081 40">
        <g clipPath="url(#clip_bbva)">
          <path d={svgPaths.p131d7080} fill="#191E25" />
        </g>
        <defs>
          <clipPath id="clip_bbva">
            <rect fill="white" height="40" width="133.081" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SoderbergLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 overflow-clip ${className}`} style={style}>
      <svg className="absolute block size-full" fill="none" viewBox="0 0 161.777 48">
        <path clipRule="evenodd" d={svgPaths.p307d8400} fill="black" fillRule="evenodd" />
        <path d={svgPaths.p3e8cd700} fill="black" />
        <path d={svgPaths.p2d916380} fill="black" />
        <path d={svgPaths.p1ba7ed40} fill="black" />
        <path d={svgPaths.p5d09800} fill="black" />
        <path d={svgPaths.pb7982f0} fill="black" />
        <path d={svgPaths.p381d0c80} fill="black" />
        <path d={svgPaths.pcf9def0} fill="black" />
        <path d={svgPaths.p3ec36900} fill="black" />
        <path d={svgPaths.p5fcd480} fill="black" />
      </svg>
    </div>
  );
}

function NavilensLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 overflow-clip ${className}`} style={style}>
      <div className="absolute inset-[23.55%_0.67%_43.2%_34.64%]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 106.12 19.9517">
          <path d={svgPaths.p26419680} fill="black" />
          <path d={svgPaths.p131ace00} fill="black" />
          <path d={svgPaths.p30ba9e80} fill="black" />
          <path d={svgPaths.pea7600} fill="black" />
          <path d={svgPaths.p1f5da900} fill="black" />
          <path d={svgPaths.pf819300} fill="black" />
          <path d={svgPaths.p260b7600} fill="black" />
          <path d={svgPaths.p3cd08430} fill="black" />
          <path d={svgPaths.p1377fc10} fill="black" />
        </svg>
      </div>
      <div className="absolute inset-[0.75%_68.35%_0.48%_0.18%]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 51.6072 59.2648">
          <path d={svgPaths.p1da45c80} fill="black" fillOpacity="0.156277" />
          <path d={svgPaths.p20203080} fill="black" />
          <path d={svgPaths.pcbd9d80} fill="black" />
          <path d={svgPaths.p1c012400} fill="white" />
          <path d={svgPaths.p3f30d980} fill="black" />
          <path d={svgPaths.p8798a00} fill="black" />
        </svg>
      </div>
    </div>
  );
}

function IVooxLogo({ className = "", style }: LogoBoxProps) {
  return (
    <div className={`relative shrink-0 ${className}`} style={style}>
      <svg className="block size-full" fill="none" viewBox="0 0 150.886 40">
        <g clipPath="url(#clip_ivoox)">
          <path d={svgPaths.pbe6fb80} fill="black" />
        </g>
        <defs>
          <clipPath id="clip_ivoox">
            <rect fill="white" height="40" width="150.886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

type ClientLogo = {
  key: string;
  render: ComponentType<LogoBoxProps>;
  width: number;
  height: number;
};

const CLIENT_LOGOS: ClientLogo[] = [
  { key: "orange", render: OrangeLogo, width: 60, height: 60 },
  { key: "santander", render: SantanderLogo, width: 199, height: 35 },
  { key: "atrapalo", render: AtrapaloLogo, width: 171, height: 48 },
  { key: "finsa", render: FinsaLogo, width: 131, height: 40 },
  { key: "grupoplaneta", render: GrupoPlanetaLogo, width: 220, height: 40 },
  { key: "elecnor", render: ElecnorLogo, width: 107, height: 41 },
  { key: "tefal", render: TefalLogo, width: 190, height: 27 },
  { key: "pccom", render: PCcomLogo, width: 116, height: 40 },
  { key: "yoigo", render: YoigoLogo, width: 155, height: 48 },
  { key: "emagister", render: EmagisterLogo, width: 138, height: 40 },
  { key: "soderberg", render: SoderbergLogo, width: 163, height: 48 },
  { key: "merida", render: MeridaLogo, width: 200, height: 29 },
  { key: "bbva", render: BBVALogo, width: 134, height: 40 },
  { key: "navilens", render: NavilensLogo, width: 164, height: 60 },
  { key: "ivoox", render: IVooxLogo, width: 151, height: 40 },
];

function useViewportWidth() {
  const [width, setWidth] = useState(() => (typeof window === "undefined" ? 0 : window.innerWidth));

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

function chunkItems<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function splitInHalf<T>(items: T[]) {
  const midpoint = Math.ceil(items.length / 2);
  return [items.slice(0, midpoint), items.slice(midpoint)];
}

function chooseColumnCount(width: number, logos: ClientLogo[]) {
  const scale = width > 0 ? Math.max(0.32, Math.min(1, width / 1100)) : 1;
  const idealColumns = Math.max(1, Math.min(5, Math.round(width / 190)));
  let columns = idealColumns;

  while (columns > 1) {
    const remainder = logos.length % columns;
    if (remainder === 0 || remainder >= 3) break;
    columns -= 1;
  }

  return { columns, scale };
}

function BalancedClientsGrid() {
  const width = useViewportWidth();
  const { columns, scale } = useMemo(() => chooseColumnCount(width, CLIENT_LOGOS), [width]);
  const rows = useMemo(() => chunkItems(CLIENT_LOGOS, columns), [columns]);
  const spreadRows = width >= 900;

  return (
    <div className="flex flex-col gap-[44px] opacity-75">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex w-full flex-wrap items-center gap-y-[18px] ${spreadRows ? "justify-between" : "justify-center gap-x-[24px]"}`}
        >
          {row.map((logo) => {
            const itemWidth = Math.max(1, Math.round(logo.width * scale));
            const itemHeight = Math.max(1, Math.round(logo.height * scale));
            const LogoComponent = logo.render;

            return (
              <LogoComponent
                key={logo.key}
                className="flex-none"
                style={{ width: itemWidth, height: itemHeight }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function MobileClientsCarouselRow({ logos, reverse, duration }: { logos: ClientLogo[]; reverse?: boolean; duration: number }) {
  const repeatLogos = [...logos, ...logos];
  const mobileHeight = 26;

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max items-center gap-[32px]"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
          animationIterationCount: "infinite",
          animationName: "logo-marquee",
          animationTimingFunction: "linear",
          willChange: "transform",
        }}
      >
        {repeatLogos.map((logo, index) => {
          const LogoComponent = logo.render;
          const itemWidth = Math.min(120, Math.max(1, Math.round((logo.width / logo.height) * mobileHeight)));

          return <LogoComponent key={`${logo.key}-${index}`} className="flex-none" style={{ width: itemWidth, height: mobileHeight }} />;
        })}
      </div>
    </div>
  );
}

function MobileClientsCarousel() {
  const [topRow, bottomRow] = useMemo(() => splitInHalf(CLIENT_LOGOS), []);

  return (
    <div className="relative -mx-[24px] overflow-hidden bg-white py-[6px]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[72px] bg-gradient-to-r from-white via-white/95 to-transparent max-md:w-[56px]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[72px] bg-gradient-to-l from-white via-white/95 to-transparent max-md:w-[56px]" />
      <div className="flex flex-col gap-[54px] px-[24px] opacity-75">
        <MobileClientsCarouselRow logos={topRow} duration={44} />
        <MobileClientsCarouselRow logos={bottomRow} duration={50} reverse />
      </div>
    </div>
  );
}

export function ClientsSection() {
  const { t } = useTranslation();
  const width = useViewportWidth();
  const useMobileCarousel = width > 0 && width < 768;

  return (
    <section className="bg-white w-full px-[56px] py-[100px] relative max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(25,30,37,0.25)]" />
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
        <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
          {t("clients.title")}
        </LangText>

        <div className="flex flex-col gap-[80px] max-md:gap-[40px]">
          {useMobileCarousel ? <MobileClientsCarousel /> : <BalancedClientsGrid />}

          {/* VER TODOS button */}
          <Link to="/trabajo" className="w-full relative px-[48px] py-[16px] border border-[#191e25] bg-transparent max-md:py-[12px] cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group block text-center">
            <LangText as="span" stagger={1} className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] group-hover:text-white max-md:text-[16px]">
              {t("clients.viewAll")}
            </LangText>
          </Link>
        </div>
      </div>
    </section>
  );
}