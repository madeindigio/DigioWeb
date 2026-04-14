import svgPaths from "./svg-ro6oo4s0ax";
// Image placeholders - replace with actual assets in /public/images/
const img65F04D016Da2E3540E4044E4CostaBlanca1 = "/images/placeholder-gray.svg";
const img65Eb03A09E811290E6582930CostaDelSol1 = "/images/placeholder-gray.svg";
const img65Ca4C591D754Cb3Fb6A6485Ibiza1 = "/images/placeholder-gray.svg";
const img65Ca4670F46654A8F774Ca51Menorca1 = "/images/placeholder-gray.svg";
const img65Ca4670F46654A8F774Ca51Menorca2 = "/images/placeholder-gray.svg";
const img65Ca4670F46654A8F774Ca51Menorca3 = "/images/placeholder-gray.svg";

function Group() {
  return (
    <div className="absolute inset-[43.34%_38.91%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.135 133.134">
        <g id="Group 5">
          <path d={svgPaths.p3fbebe80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p13e49280} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3cfffd00} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.pfd8db80} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p1d2cbe00} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.p13e74680} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p13091240} fill="var(--fill-0, black)" id="Vector_7" />
          <path d={svgPaths.p10232e70} fill="var(--fill-0, black)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f7f0] h-[1000px] left-1/2 overflow-clip top-1/2 w-[600px]">
      <Group />
      <div className="absolute h-[124.802px] left-[320.86px] rounded-[2.644px] top-[195.92px] w-[147.293px]" data-name="65f04d016da2e3540e4044e4_costa blanca 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.644px] size-full" src={img65F04D016Da2E3540E4044E4CostaBlanca1} />
      </div>
      <div className="absolute h-[150.342px] left-[125.91px] rounded-[2.644px] top-[653.74px] w-[130.81px]" data-name="65eb03a09e811290e6582930_costa del sol 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.644px] size-full" src={img65Eb03A09E811290E6582930CostaDelSol1} />
      </div>
      <div className="absolute h-[139.689px] left-[351.65px] rounded-[2.644px] top-[636.78px] w-[116.321px]" data-name="65ca4c591d754cb3fb6a6485_ibiza 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.644px] size-full" src={img65Ca4C591D754Cb3Fb6A6485Ibiza1} />
      </div>
      <div className="absolute h-[121.589px] left-[119.56px] rounded-[2.644px] top-[224.67px] w-[143.5px]" data-name="65ca4670f46654a8f774ca51_menorca 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.644px] size-full" src={img65Ca4670F46654A8F774Ca51Menorca1} />
      </div>
      <div className="absolute h-[121.589px] left-[-8.04px] rounded-[2.644px] top-[439.39px] w-[175px]" data-name="65ca4670f46654a8f774ca51_menorca 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.644px] size-full" src={img65Ca4670F46654A8F774Ca51Menorca2} />
      </div>
      <div className="absolute h-[121.589px] left-[433.01px] rounded-[2.644px] top-[439.39px] w-[175px]" data-name="65ca4670f46654a8f774ca51_menorca 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.644px] size-full" src={img65Ca4670F46654A8F774Ca51Menorca3} />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-1/2">
      <Frame />
    </div>
  );
}

export default function NaviLensSectionSmallMobile() {
  return (
    <div className="bg-[#f8f9fa] relative size-full" data-name="NaviLens Section small mobile">
      <Group1 />
    </div>
  );
}