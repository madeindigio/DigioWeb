import svgPaths from "./svg-vcptndkw97";
import imgLogoFderTransparente1 from "figma:asset/e5dabf104c5abe32475f6bcaae852ddc54fc749b.png";

function Group2Copy() {
  return (
    <div className="absolute inset-[1.92%_0.71%_3.07%_1.02%]" data-name="Group-2-Copy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.7556 26.6007">
        <g id="Group-2-Copy">
          <path clipRule="evenodd" d={svgPaths.pefbfc80} fill="var(--fill-0, white)" fillRule="evenodd" id="Combined-Shape" />
          <path d={svgPaths.p2ea15f00} fill="var(--fill-0, #CFCFCF)" id="red.es" />
        </g>
      </svg>
    </div>
  );
}

function NavColapsadoReducido() {
  return (
    <div className="absolute contents inset-[1.92%_0.71%_3.07%_1.02%]" data-name="nav/colapsado/reducido">
      <Group2Copy />
    </div>
  );
}

function Symbols() {
  return (
    <div className="absolute contents inset-[1.92%_0.71%_3.07%_1.02%]" data-name="Symbols">
      <NavColapsadoReducido />
    </div>
  );
}

function LogoRedEs() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-[84.215px]" data-name="Logo_Red.es">
      <Symbols />
    </div>
  );
}

export default function UeRed() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative size-full" data-name="UE RED">
      <div className="h-[48px] relative shrink-0 w-[191.562px]" data-name="LOGO_FDER_transparente_1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgLogoFderTransparente1} />
          <div className="absolute bg-white inset-0 mix-blend-color" />
        </div>
      </div>
      <LogoRedEs />
    </div>
  );
}