import svgPaths from "../../../imports/svg-x3n48l5gru";
import { useTranslation } from "react-i18next";
import { LangText } from "../LangText";
import type { ReactNode } from "react";

/* ─── Sector Icons ─── */
function FintechIcon() {
  return (
    <svg className="w-[154px] h-[167px] max-md:w-[120px] max-md:h-[130px]" fill="none" viewBox="0 0 154.643 167.24">
      <path d={svgPaths.p348ab3f1} fill="#583BFF" />
    </svg>
  );
}

function EnergyIcon() {
  return (
    <svg className="w-[136px] h-[164px] max-md:w-[106px] max-md:h-[128px]" fill="none" viewBox="0 0 136.249 163.601">
      <path d={svgPaths.pf6fc100} fill="#583BFF" />
    </svg>
  );
}

function LogisticsIcon() {
  return (
    <svg className="w-[166px] h-[124px] max-md:w-[130px] max-md:h-[96px]" fill="none" viewBox="0 0 166.455 123.634">
      <path d={svgPaths.p3f310600} fill="#583BFF" />
    </svg>
  );
}

function IndustryIcon() {
  return (
    <svg className="w-[151px] h-[120px] max-md:w-[118px] max-md:h-[94px]" fill="none" viewBox="0 0 151.388 119.831">
      <clipPath id="clip_industry"><rect fill="white" height="119.831" width="151.388" /></clipPath>
      <g clipPath="url(#clip_industry)">
        <path clipRule="evenodd" d={svgPaths.p20d37c00} fill="#583BFF" fillRule="evenodd" />
      </g>
    </svg>
  );
}

function TelcoIcon() {
  return (
    <svg className="w-[161px] h-[122px] max-md:w-[126px] max-md:h-[95px]" fill="none" viewBox="0 0 161.481 121.531">
      <clipPath id="clip_telco"><rect fill="white" height="121.531" width="161.481" /></clipPath>
      <g clipPath="url(#clip_telco)">
        <path d={svgPaths.p10e56800} fill="#583BFF" />
      </g>
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg className="w-[172px] h-[88px] max-md:w-[134px] max-md:h-[69px]" fill="none" viewBox="0 0 172.414 87.8893">
      <path d={svgPaths.p191a1580} fill="#583BFF" />
    </svg>
  );
}

function PortalsIcon() {
  return (
    <svg className="w-[205px] h-[139px] max-md:w-[160px] max-md:h-[108px]" fill="none" viewBox="0 0 205.215 138.545">
      <clipPath id="clip_portals"><rect fill="white" height="138.545" width="205.215" /></clipPath>
      <g clipPath="url(#clip_portals)">
        <path d={svgPaths.p3e8de271} fill="#583BFF" />
      </g>
    </svg>
  );
}

function PharmaIcon() {
  return (
    <svg className="w-[168px] h-[126px] max-md:w-[131px] max-md:h-[99px]" fill="none" viewBox="0 0 168.222 126.456">
      <path d={svgPaths.p1d108440} fill="#583BFF" />
    </svg>
  );
}

/* ─── Sector Card ─── */
function SectorCard({
  icon,
  sectorKey,
  staggerBase,
}: {
  icon: ReactNode;
  sectorKey: string;
  staggerBase: number;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col flex-1 min-w-0 rounded-[32px] border border-[#583bff] overflow-hidden max-md:rounded-[24px]">
      {/* Header */}
      <div className="p-[24px] border-b border-[#583bff]">
        <LangText as="p" stagger={staggerBase} className="font-['GT_Ultra_Median',sans-serif] font-[700] text-[#e5e1dc] text-[20px] tracking-[-0.8px] leading-[normal] max-md:text-[16px]">
          {t(`pages.sobreDigio.sectors.${sectorKey}.title`)}
        </LangText>
      </div>
      {/* Icon area */}
      <div className="h-[300px] flex items-center justify-center border-b border-[#583bff] max-md:h-[200px]">
        {icon}
      </div>
      {/* Description */}
      <div className="flex-1 p-[48px] max-md:p-[24px]">
        <LangText as="p" stagger={staggerBase + 1} className="font-['Manrope',sans-serif] font-[600] text-white text-[16px] leading-[normal] max-md:text-[14px]">
          {t(`pages.sobreDigio.sectors.${sectorKey}.desc`)}
        </LangText>
      </div>
    </div>
  );
}

const sectorPairs: Array<{ key: string; icon: ReactNode }[]> = [
  [
    { key: "fintech", icon: <FintechIcon /> },
    { key: "energy", icon: <EnergyIcon /> },
  ],
  [
    { key: "logistics", icon: <LogisticsIcon /> },
    { key: "industry", icon: <IndustryIcon /> },
  ],
  [
    { key: "telco", icon: <TelcoIcon /> },
    { key: "education", icon: <EducationIcon /> },
  ],
  [
    { key: "portals", icon: <PortalsIcon /> },
    { key: "pharma", icon: <PharmaIcon /> },
  ],
];

export function AboutSectors() {
  return (
    <section className="bg-[#191e25] w-full px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px]">
        {sectorPairs.map((pair, rowIdx) => (
          <div key={rowIdx} className="flex gap-[56px] max-md:flex-col max-md:gap-[32px]">
            {pair.map((sector, colIdx) => (
              <SectorCard
                key={sector.key}
                icon={sector.icon}
                sectorKey={sector.key}
                staggerBase={rowIdx * 4 + colIdx * 2}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
