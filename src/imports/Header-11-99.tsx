import svgPaths from "./svg-pfn2klht0n";

export default function Header() {
  return (
    <div className="bg-[#191e25] content-stretch flex items-start justify-between px-[56px] py-[24px] relative size-full" data-name="header">
      <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0" data-name="logo section">
        <div className="h-[80px] overflow-clip relative shrink-0 w-[154px]" data-name="Digio logo">
          <div className="absolute inset-[28.19%_0_22.5%_74.64%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0522 39.449">
              <path d={svgPaths.p32758d80} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[28.19%_37.45%_22.5%_37.19%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0522 39.449">
              <path d={svgPaths.p2cce1d00} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[28.19%_74.64%_22.5%_0]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.0522 39.449">
              <path d={svgPaths.p32758d80} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[29.22%_28.6%_23.54%_66.38%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73722 37.7961">
              <path d={svgPaths.p1fcbd200} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[29.22%_65.81%_23.54%_29.16%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73722 37.7961">
              <path d={svgPaths.p1fcbd200} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[29.22%_37.46%_9.63%_57.52%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73722 48.9256">
              <path d={svgPaths.p2129880} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[90.37%_42.48%_0_40.47%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2504 7.70125">
              <path d={svgPaths.p39ddf100} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_74.69%_23.54%_20.29%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.73722 61.1693">
              <path d={svgPaths.p92f9800} fill="var(--fill-0, #E2DFDA)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="font-['GT_Ultra_Median:Regular',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[#e5e1dc] whitespace-nowrap" data-name="Menu">
        <div className="col-1 content-stretch flex flex-col gap-[5px] items-start leading-[normal] ml-0 mt-0 relative row-1 text-[16px]" data-name="Menu">
          <p className="relative shrink-0">Nuestro trabajo</p>
          <p className="relative shrink-0">Sobre Digio</p>
          <p className="relative shrink-0">Únete</p>
          <p className="relative shrink-0">Blog</p>
          <p className="relative shrink-0">Contacto</p>
        </div>
        <p className="col-1 ml-[368px] mt-0 relative row-1 text-[17px] tracking-[0.17px]">
          <span className="font-['GT_Ultra_Median:Bold',sans-serif] leading-[normal]">ES</span>
          <span className="leading-[normal]">{` / `}</span>
          <span className="leading-[normal] text-[rgba(229,225,220,0.68)]">EN</span>
        </p>
      </div>
    </div>
  );
}