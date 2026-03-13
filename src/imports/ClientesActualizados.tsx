import svgPaths from "./svg-rlgk16hava";

function Group1() {
  return (
    <div className="absolute inset-[24.5%_21.89%_26.47%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155.365 13.6691">
        <g id="Group">
          <path d={svgPaths.p227f5a00} fill="var(--fill-0, #191E25)" id="Vector" />
          <path d={svgPaths.pcec8400} fill="var(--fill-0, #191E25)" id="Vector_2" />
          <path d={svgPaths.p28827d00} fill="var(--fill-0, #191E25)" id="Vector_3" />
          <path d={svgPaths.p3f3162f0} fill="var(--fill-0, #191E25)" id="Vector_4" />
          <path d={svgPaths.p3717b100} fill="var(--fill-0, #191E25)" id="Vector_5" />
          <path d={svgPaths.pc2b4800} fill="var(--fill-0, #191E25)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_-0.12%_2.12%_77.82%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.3496 27.286">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p30830200} fill="var(--fill-0, #191E25)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p2ab7bb00} fill="var(--fill-0, #191E25)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_-0.12%_2.12%_0]" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function MeridaBikesNegro() {
  return (
    <div className="absolute inset-[1.48%_0.28%] overflow-clip" data-name="Merida bikes negro 1">
      <Group />
    </div>
  );
}

export default function ClientesActualizados() {
  return (
    <div className="relative size-full" data-name="Clientes actualizados">
      <MeridaBikesNegro />
    </div>
  );
}