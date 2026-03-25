import svgPaths from "./svg-0193fyzoz5";

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="text content">
      <p className="font-['GT_Ultra_Median:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#191e25] text-[32px] tracking-[-1.28px] w-[680px]">Frontend web</p>
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col h-[66px] items-center justify-center relative shrink-0 w-[180px]" data-name="text content">
      <div className="flex flex-[1_0_0] flex-col font-['Manrope',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#191e25] text-[16px] w-full">
        <p className="leading-[normal]">Desarrollo, Remoto</p>
      </div>
    </div>
  );
}

function ArrowSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-center justify-center min-h-px min-w-px relative" data-name="arrow section">
      <div className="relative shrink-0 size-[32px]" data-name="Icons">
        <div className="absolute inset-[24.22%_0]" data-name="Dropdown arrow icon">
          <div className="absolute inset-[-8.44%_-4.49%_-17.41%_-4.49%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.8716 20.7653">
              <path d={svgPaths.p3b669500} id="Dropdown arrow icon" stroke="var(--stroke-0, #191E25)" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="card content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[40px] items-center px-[120px] relative w-full">
          <TextContent />
          <TextContent1 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <ArrowSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobOfferCard() {
  return (
    <div className="bg-[#f6f5f3] content-stretch flex flex-col gap-[40px] items-start pt-[48px] relative size-full" data-name="Job offer card">
      <CardContent />
      <div className="h-0 relative shrink-0 w-full" data-name="separator">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 1">
            <line id="separator" stroke="var(--stroke-0, #E2DFDA)" x2="1440" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+288px)] overflow-clip shadow-[0px_1px_1.8px_0px_rgba(0,0,0,0.65)] size-[24px] top-[calc(50%+51px)]" data-name="Cursors">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[17.578px] left-[calc(50%+0.71px)] top-[calc(50%-0.21px)] w-[11.414px]" data-name="arrow border">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4142 17.5785">
            <path d={svgPaths.p2deb2570} fill="var(--fill-0, white)" id="arrow border" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14.096px] left-1/2 top-[calc(50%+0.46px)] w-[8px]" data-name="arrow">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14.0959">
            <path clipRule="evenodd" d={svgPaths.p3f078900} fill="var(--fill-0, black)" fillRule="evenodd" id="arrow" />
          </svg>
        </div>
      </div>
    </div>
  );
}