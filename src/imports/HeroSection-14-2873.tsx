import svgPaths from "./svg-xh98wxf28c";

function TextContent() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1328px]" data-name="text content">
      <div className="flex flex-col font-['GT_Ultra_Median:Regular',sans-serif] justify-center leading-[0.9] not-italic relative shrink-0 text-[#e2dfda] text-[140px] tracking-[-5.6px] w-[952px] whitespace-pre-wrap">
        <p className="mb-0">{`Transformation `}</p>
        <p>is our code</p>
      </div>
      <p className="font-['Manrope',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[#e2dfda] text-[24px] tracking-[0.48px] w-[242px]">Vivimos en ese lugar intermedio entre la visión y la creación.</p>
      <div className="absolute h-[6px] left-[664px] right-[600px] top-[234px]" data-name="Dash">
        <div className="absolute bg-[#d9d9d9] inset-0" />
      </div>
    </div>
  );
}

function SvgBgHeroImg() {
  return (
    <div className="absolute h-[362px] right-0 top-0 w-[1064px]" data-name="svg bg hero img">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1064 362">
        <g id="svg bg hero img">
          <path clipRule="evenodd" d={svgPaths.p1b396280} fill="var(--fill-0, #E2DFDA)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p9bd7b00} fill="var(--fill-0, #E2DFDA)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1a21aa00} fill="var(--fill-0, #E2DFDA)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p1bef4e00} fill="var(--fill-0, #E2DFDA)" fillRule="evenodd" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p9634180} fill="var(--fill-0, #E2DFDA)" fillRule="evenodd" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p1ec04200} fill="var(--fill-0, #E2DFDA)" fillRule="evenodd" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-[#191e25] content-stretch flex flex-col gap-[56px] items-center justify-end pb-[56px] relative size-full" data-name="hero section">
      <TextContent />
      <SvgBgHeroImg />
    </div>
  );
}