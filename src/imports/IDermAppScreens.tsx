import svgPaths from "./svg-ufyeptj0u5";
import imgStatBackground from "figma:asset/577358e58d2c796fbd710a434f58e1adf694d85e.png";
import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";

/* ─── Visibility context for scroll-triggered animations ─── */
const DashVisibleContext = createContext(false);

/* ─── Dashboard chart entry animations ─── */
const ANIM_DURATION = 1400;
const ANIM_DELAY = 400;
const ANIM_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

const dashboardAnimStyles = `
  .vivla-dash [data-name="Mask"] {
    clip-path: inset(0 100% 0 0);
    animation: vRevealLeft ${ANIM_DURATION}ms ${ANIM_EASE} ${ANIM_DELAY}ms both;
    animation-play-state: paused;
  }
  .vivla-dash [data-name="Reliability Container"] {
    clip-path: inset(0 100% 0 0);
    animation: vRevealLeft ${ANIM_DURATION}ms ${ANIM_EASE} ${ANIM_DELAY + 100}ms both;
    animation-play-state: paused;
  }
  .vivla-dash [data-name="Score Container circle"] {
    clip-path: circle(0% at 50% 50%);
    animation: vRevealCircle ${ANIM_DURATION}ms ${ANIM_EASE} ${ANIM_DELAY + 200}ms both;
    animation-play-state: paused;
  }
  .vivla-dash [data-name="bg color"] {
    clip-path: inset(0 100% 0 0);
    animation: vRevealLeft ${ANIM_DURATION}ms ${ANIM_EASE} ${ANIM_DELAY + 100}ms both;
    animation-play-state: paused;
  }
  .vivla-dash--visible [data-name="Mask"],
  .vivla-dash--visible [data-name="Reliability Container"],
  .vivla-dash--visible [data-name="Score Container circle"],
  .vivla-dash--visible [data-name="bg color"] {
    animation-play-state: running;
  }
  @keyframes vRevealLeft {
    from { clip-path: inset(0 100% 0 0); }
    to   { clip-path: inset(0 0% 0 0); }
  }
  @keyframes vRevealCircle {
    from { clip-path: circle(0% at 50% 50%); }
    to   { clip-path: circle(60% at 50% 50%); }
  }
`;

function AnimatedCounter({
  target,
  decimals = 1,
  duration = ANIM_DURATION,
  delay = ANIM_DELAY,
}: {
  target: number;
  decimals?: number;
  duration?: number;
  delay?: number;
}) {
  const visible = useContext(DashVisibleContext);
  const [display, setDisplay] = useState("0" + (decimals > 0 ? "," + "0".repeat(decimals) : ""));
  const rafRef = useRef(0);

  const format = useCallback(
    (v: number) => v.toFixed(decimals).replace(".", ","),
    [decimals],
  );

  useEffect(() => {
    if (!visible) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(format(eased * target));
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [visible, target, duration, delay, format]);

  return <>{display}</>;
}

function SidebarIcon() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[21.841px]" data-name="Sidebar Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.8412 21.8411">
        <g id="Sidebar Icon">
          <path d={svgPaths.p1e1bb400} fill="var(--fill-0, #020202)" id="Vector" />
          <path d={svgPaths.p3a8dd080} fill="var(--fill-0, #020202)" id="Vector_2" />
          <path d={svgPaths.p1e394600} fill="var(--fill-0, #020202)" id="Vector_3" />
          <path d={svgPaths.p3e7518f0} fill="var(--fill-0, #020202)" id="Vector_4" />
          <path d={svgPaths.p1cc63280} fill="var(--fill-0, #020202)" id="Vector_5" />
          <path d={svgPaths.p30b5b4a0} fill="var(--fill-0, #020202)" id="Vector_6" />
          <path d={svgPaths.p38fa6080} fill="var(--fill-0, #020202)" id="Vector_7" />
          <path d={svgPaths.p21a57f40} fill="var(--fill-0, #020202)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="logo">
      <SidebarIcon />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[22.546px] relative w-full">
          <Logo />
          <div className="relative shrink-0 size-[14.091px]" data-name="double-chevron-left">
            <div className="-translate-y-1/2 absolute aspect-[3.5/7] flex items-center justify-center left-[17.86%] right-1/2 top-1/2">
              <div className="flex-none h-[8.052px] rotate-180 w-[4.529px]">
                <div className="relative size-full" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.52925 9.0585">
                    <path clipRule="evenodd" d={svgPaths.p2125cb00} fill="var(--fill-0, #020202)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 absolute aspect-[3.5/7] flex items-center justify-center left-[53.57%] right-[14.29%] top-1/2">
              <div className="flex-none h-[8.052px] rotate-180 w-[4.529px]">
                <div className="relative size-full" data-name="Vector (Stroke)">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.52925 9.0585">
                    <path clipRule="evenodd" d={svgPaths.p2125cb00} fill="var(--fill-0, #020202)" fillRule="evenodd" id="Vector (Stroke)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavTabs() {
  return (
    <div className="content-stretch flex flex-col gap-[11.273px] items-start relative shrink-0 w-full" data-name="Nav tabs">
      <div className="bg-[#fbfbf9] h-[35.228px] relative shrink-0 w-full" data-name="Container">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8.455px] items-center px-[14.091px] py-[5.636px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16.909px]" data-name="NPS Panel Icon">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.2px)] size-[13.684px] top-[calc(50%-0.4px)]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6844 13.6844">
                  <g id="Vector">
                    <path d={svgPaths.p565100} fill="var(--fill-0, black)" />
                    <path d={svgPaths.p171c3670} fill="var(--fill-0, black)" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Sneak:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#020202] text-[11.98px]">
              <p className="leading-[15.686px]">Home Excellent</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[35.228px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8.455px] items-center px-[14.091px] py-[5.636px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16.909px]" data-name="Actions Icon">
              <div className="absolute inset-[0.6%_13.1%_4.76%_13.1%]" data-name="Vector (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4806 16.0034">
                  <path clipRule="evenodd" d={svgPaths.p2d067400} fill="var(--fill-0, #020202)" fillRule="evenodd" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Sneak:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#020202] text-[11.98px]">
              <p className="leading-[15.686px]">Acciones</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[35.228px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8.455px] items-center px-[14.091px] py-[5.636px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16.909px]" data-name="Actions Icon">
              <div className="absolute inset-[9.22%_4.76%_8.93%_4.76%]" data-name="Vector (Stroke)">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2991 13.8398">
                  <path clipRule="evenodd" d={svgPaths.p13fdc500} fill="var(--fill-0, #020202)" fillRule="evenodd" id="Vector (Stroke)" />
                </svg>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Sneak:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#020202] text-[11.98px]">
              <p className="leading-[15.686px]">Finanzas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileDropdown() {
  return (
    <div className="bg-white content-stretch flex gap-[5.636px] items-center pl-[11.273px] pr-[5.636px] py-[5.636px] relative rounded-[100px] shrink-0" data-name="Profile Dropdown">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="overflow-clip relative shrink-0 size-[16.909px]" data-name="menu">
        <div className="absolute inset-[23.96%_19.79%_76.04%_19.79%]" data-name="Vector">
          <div className="absolute inset-[-0.53px_-5.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2728 1.05683">
              <path d="M0.528413 0.528413H10.7444" id="Vector" stroke="var(--stroke-0, #020202)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05683" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[76.04%_19.79%_23.96%_19.79%]" data-name="Vector">
          <div className="absolute inset-[-0.53px_-5.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2728 1.05683">
              <path d="M0.528413 0.528413H10.7444" id="Vector" stroke="var(--stroke-0, #020202)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05683" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[19.79%] right-[19.79%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-0.53px_-5.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2728 1.05683">
              <path d="M0.528413 0.528413H10.7444" id="Vector" stroke="var(--stroke-0, #020202)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05683" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-[22.546px]" data-name="Avatar">
        <div className="absolute bg-[#f3f4f6] inset-0 overflow-clip rounded-[1000px]" data-name="Avatar Base">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5456 22.5456">
            <g id="Icon">
              <mask height="23" id="mask0_64_8641" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="23" x="0" y="0">
                <circle cx="11.2728" cy="11.2728" fill="var(--fill-0, #F3F4F6)" id="Ellipse 1" r="11.2728" />
              </mask>
              <g mask="url(#mask0_64_8641)">
                <path d={svgPaths.p3c0ab600} fill="var(--fill-0, #C8C8C8)" id="Profile Icon" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16.909px] items-center justify-end min-h-px min-w-px relative" data-name="Right">
      <ProfileDropdown />
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-white relative shrink-0 w-[879.279px]" data-name="Nav">
      <div className="content-stretch flex items-center overflow-clip px-[42.273px] py-[16.909px] relative rounded-[inherit] w-full">
        <Right />
      </div>
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-b-[0.705px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Title">
      <div className="flex flex-col font-['Teodor:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#020202] text-[33.82px] whitespace-nowrap">
        <p className="leading-[normal]">Home Excellent</p>
      </div>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex gap-[11.273px] items-center relative shrink-0" data-name="Filter Bar">
      <div className="bg-white content-stretch flex gap-[5.636px] items-center p-[8.455px] relative rounded-[4px] shrink-0 w-[140.91px]" data-name="dropdown">
        <div aria-hidden="true" className="absolute border-[#c8c8c8] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="flex-[1_0_0] font-['Sneak:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic overflow-hidden relative text-[11.27px] text-black text-ellipsis whitespace-nowrap">Último mes</p>
        <div className="overflow-clip relative shrink-0 size-[11.273px]" data-name="Dropdown Icon">
          <div className="-translate-y-1/2 absolute aspect-[5.636400840496947/2.8182004202484734] flex items-center justify-center left-1/4 right-1/4 top-1/2">
            <div className="flex-none h-[5.636px] rotate-90 w-[2.818px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.6234 6.4416">
                    <path d={svgPaths.pb2cda00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8052" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[5.636px] items-center p-[8.455px] relative rounded-[4px] shrink-0 w-[140.91px]" data-name="dropdown">
        <div aria-hidden="true" className="absolute border-[#c8c8c8] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="flex-[1_0_0] font-['Sneak:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic overflow-hidden relative text-[11.27px] text-black text-ellipsis whitespace-nowrap">Formentera</p>
        <div className="overflow-clip relative shrink-0 size-[11.273px]" data-name="Dropdown Icon">
          <div className="-translate-y-1/2 absolute aspect-[5.636400840496947/2.8182004202484734] flex items-center justify-center left-1/4 right-1/4 top-1/2">
            <div className="flex-none h-[5.636px] rotate-90 w-[2.818px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.6234 6.4416">
                    <path d={svgPaths.pb2cda00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8052" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between p-[8.455px] relative rounded-[4px] shrink-0 w-[140.91px]" data-name="dropdown">
        <div aria-hidden="true" className="absolute border-[#c8c8c8] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="flex-[1_0_0] font-['Sneak:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic overflow-hidden relative text-[11.27px] text-black text-ellipsis whitespace-nowrap">Casa Saona</p>
        <div className="overflow-clip relative shrink-0 size-[11.273px]" data-name="Dropdown Icon">
          <div className="-translate-y-1/2 absolute aspect-[5.636400840496947/2.8182004202484734] flex items-center justify-center left-1/4 right-1/4 top-1/2">
            <div className="flex-none h-[5.636px] rotate-90 w-[2.818px]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-7.14%_-14.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.6234 6.4416">
                    <path d={svgPaths.pb2cda00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.8052" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Filters1() {
  return (
    <div className="content-stretch flex gap-[11.273px] items-center relative shrink-0" data-name="filters">
      <p className="font-['Sneak:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5b5b67] text-[11.98px] whitespace-nowrap">Filtrar por</p>
      <FilterBar />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="filters">
      <Filters1 />
      <div className="bg-white content-stretch flex gap-[5.636px] items-center p-[8.455px] relative rounded-[4px] shrink-0" data-name="dropdown">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Sneak:Regular',sans-serif] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[#7e7e7e] text-[11.27px] text-ellipsis whitespace-nowrap">Exportar CSV</p>
        <div className="overflow-clip relative shrink-0 size-[11.273px]" data-name="Dropdown Icon">
          <div className="absolute inset-[3.57%_10.71%]" data-name="Vector">
            <div className="absolute inset-[-3.37%_-3.98%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.56175 11.1722">
                <path d={svgPaths.pf803100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
              </svg>
            </div>
          </div>
          <div className="absolute flex inset-[57.14%_35.71%_28.57%_35.71%] items-center justify-center">
            <div className="flex-none h-[1.61px] rotate-180 w-[3.221px]">
              <div className="relative size-full" data-name="vector 377">
                <div className="absolute inset-[-21.87%_-10.94%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.92535 2.31495">
                    <path d={svgPaths.pd3c3b80} id="vector 377" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[28.57%] flex items-center justify-center left-1/2 right-1/2 top-[32.14%]">
            <div className="flex-none h-[4.429px] rotate-180 w-0">
              <div className="relative size-full" data-name="vector 378">
                <div className="absolute inset-[-7.95%_-0.35px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.70455 5.13315">
                    <path d={svgPaths.p2e17ecc0} id="vector 378" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[22.546px] items-start relative shrink-0 w-full" data-name="tabs">
      <div className="absolute bottom-0 h-0 left-0 right-0" data-name="separator">
        <div className="absolute inset-[-0.7px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 795 0.70455">
            <line id="separator" stroke="var(--stroke-0, #E4E4E4)" strokeWidth="0.70455" x2="795" y1="0.352275" y2="0.352275" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12.682px] items-center relative shrink-0 w-[113.433px]" data-name="tabs">
        <p className="font-['Sneak:Medium',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#020202] text-[11.27px] text-center w-full">Vista General NPS</p>
        <div className="bg-[#020202] h-[4.227px] shrink-0 w-full" data-name="Filter Background" />
      </div>
      <div className="content-stretch flex flex-col gap-[12.682px] h-[29.591px] items-center relative shrink-0" data-name="tabs">
        <p className="font-['Sneak:Regular',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#020202] text-[11.27px] text-center whitespace-nowrap">Heatmap</p>
        <div className="bg-[#020202] h-[2.818px] opacity-0 shrink-0 w-full" data-name="Filter Background" />
      </div>
      <div className="content-stretch flex flex-col gap-[12.682px] h-[31px] items-center relative shrink-0 w-[113.433px]" data-name="tabs">
        <p className="font-['Sneak:Regular',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#020202] text-[11.27px] text-center w-full">Historial de Reviews</p>
        <div className="bg-[#020202] h-[2.818px] opacity-0 shrink-0 w-full" data-name="Filter Background" />
      </div>
      <div className="content-stretch flex flex-col gap-[12.682px] h-[31px] items-center relative shrink-0" data-name="tabs">
        <p className="font-['Sneak:Regular',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#020202] text-[11.27px] text-center whitespace-nowrap">Calidad y Tickets</p>
        <div className="bg-[#020202] h-[2.818px] opacity-0 shrink-0 w-full" data-name="Filter Background" />
      </div>
      <div className="content-stretch flex flex-col gap-[12.682px] h-[29.591px] items-center relative shrink-0" data-name="tabs">
        <p className="font-['Sneak:Regular',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#020202] text-[11.27px] text-center whitespace-nowrap">Histórico de valoraciones</p>
        <div className="bg-[#020202] h-[2.818px] opacity-0 shrink-0 w-full" data-name="Filter Background" />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[71.13%_48.21%_25.3%_48.21%]">
      <div className="absolute inset-[-100%_-100.2%_-100%_-100.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05683 1.05683">
          <g id="Group 2567">
            <path d={svgPaths.p183ef700} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            <path d={svgPaths.p151ba000} id="Vector_2" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0" data-name="title">
      <p className="font-['Teodor:Light',sans-serif] leading-[33.818px] not-italic relative shrink-0 text-[#020202] text-[22.55px] whitespace-nowrap">Indicadores Clave</p>
      <div className="relative shrink-0 size-[9.864px]" data-name="help-question-1--circle-faq-frame-help-info-mark-more-query-question">
        <div className="absolute inset-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8637 9.8637">
              <path d={svgPaths.pe720880} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[37.48%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17272 3.99244">
              <path d={svgPaths.p20e59c00} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <Group />
      </div>
    </div>
  );
}

function SelectedHouse() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0" data-name="selected house">
      <div className="relative rounded-[4px] shrink-0 size-[28.182px]" data-name="Stat Background">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgStatBackground} />
      </div>
      <p className="font-['Teodor:Light',sans-serif] leading-[33.818px] not-italic relative shrink-0 text-[#1d686c] text-[22.55px] whitespace-nowrap">Casa Saona</p>
    </div>
  );
}

function TilteContent() {
  return (
    <div className="content-stretch flex gap-[11.273px] items-center relative shrink-0" data-name="tilte content">
      <Title1 />
      <SelectedHouse />
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="section header">
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="title">
        <TilteContent />
        <p className="font-['Sneak:Medium',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#9c9c9c] text-[11.27px] whitespace-nowrap">Último mes (Marzo 2025)</p>
      </div>
      <div className="bg-white content-stretch flex items-start px-[3.523px] py-[2.818px] relative rounded-[4px] shrink-0" data-name="menubar">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="bg-[#fbfbf9] content-stretch flex items-start px-[8.455px] py-[5.636px] relative rounded-[3px] shrink-0" data-name="menubar items">
          <div aria-hidden="true" className="absolute border-[#c8c8c8] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[3px]" />
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] whitespace-nowrap">Indicadores clave</p>
        </div>
        <div className="bg-white content-stretch flex items-start px-[8.455px] py-[5.636px] relative rounded-[3px] shrink-0" data-name="menubar items">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] whitespace-nowrap">Evolución NPS</p>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[71.13%_48.21%_25.3%_48.21%]">
      <div className="absolute inset-[-100%_-100.2%_-100%_-100.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05683 1.05683">
          <g id="Group 2567">
            <path d={svgPaths.p183ef700} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            <path d={svgPaths.p151ba000} id="Vector_2" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap">NPS Global</p>
      <div className="relative shrink-0 size-[9.864px]" data-name="help-question-1--circle-faq-frame-help-info-mark-more-query-question">
        <div className="absolute inset-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8637 9.8637">
              <path d={svgPaths.pe720880} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[37.48%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17272 3.99244">
              <path d={svgPaths.p20e59c00} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <Group1 />
      </div>
    </div>
  );
}

function HeaderInfo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container />
    </div>
  );
}

function Graph() {
  return (
    <div className="absolute left-0 size-[140.575px] top-0" data-name="graph">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140.575 140.575">
        <g id="graph">
          <mask height="71" id="mask0_64_8600" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="141" x="0" y="0">
            <path d={svgPaths.p1e10e000} fill="var(--fill-0, #110000)" id="mask" />
          </mask>
          <g mask="url(#mask0_64_8600)">
            <path d={svgPaths.p872ae80} fill="var(--fill-0, #F0F0F0)" id="bg graph" />
            <path d={svgPaths.p256751f0} fill="var(--fill-0, #E5E044)" id="active" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-0">
      <Graph />
    </div>
  );
}

function Mask() {
  return (
    <div className="h-[64.275px] overflow-clip relative shrink-0 w-[140.91px]" data-name="Mask">
      <Group7 />
    </div>
  );
}

function PromotersContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Promoters Container">
      <p className="font-['Sneak:Regular',sans-serif] leading-[9.864px] relative shrink-0 text-[#020202] text-[8.45px]">Promotores</p>
      <p className="font-['Sneak:Medium',sans-serif] leading-[13.739px] relative shrink-0 text-[#66b44e] text-[9.16px]">80%</p>
    </div>
  );
}

function PassivesContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Passives Container">
      <p className="font-['Sneak:Regular',sans-serif] leading-[9.864px] relative shrink-0 text-[#020202] text-[8.45px]">Pasivos</p>
      <p className="font-['Sneak:Medium',sans-serif] leading-[13.739px] relative shrink-0 text-[#f6a726] text-[9.16px]">15%</p>
    </div>
  );
}

function DetractorsContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Detractors Container">
      <p className="font-['Sneak:Regular',sans-serif] leading-[9.864px] relative shrink-0 text-[#020202] text-[8.45px]">Detractores</p>
      <p className="font-['Sneak:Medium',sans-serif] leading-[13.739px] relative shrink-0 text-[#e95223] text-[9.16px]">5%</p>
    </div>
  );
}

function ScoreContainer() {
  return (
    <div className="bg-[#fbfbf9] relative rounded-[3px] shrink-0 w-full" data-name="Score Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8.455px] items-center justify-center not-italic px-[5.636px] py-[2.818px] relative text-center w-full whitespace-nowrap">
          <PromotersContainer />
          <PassivesContainer />
          <DetractorsContainer />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16.909px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[17.305px] items-center relative shrink-0" data-name="NSP Graph semi-circle">
        <Mask />
        <div className="absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-0 not-italic text-[#020202] top-[34.36px] w-[140.91px]" data-name="data">
          <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[26.37px] text-center whitespace-nowrap">
            <p className="leading-[34.609px]"><AnimatedCounter target={6.3} /></p>
          </div>
          <p className="h-[34.609px] leading-[34.609px] relative shrink-0 text-[26.37px] text-center w-[13.185px]">/</p>
          <p className="h-[34.609px] leading-[42.85px] relative shrink-0 text-[16.48px] w-[19.777px]">10</p>
        </div>
      </div>
      <ScoreContainer />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[71.13%_48.21%_25.3%_48.21%]">
      <div className="absolute inset-[-100%_-100.2%_-100%_-100.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05683 1.05683">
          <g id="Group 2567">
            <path d={svgPaths.p183ef700} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            <path d={svgPaths.p151ba000} id="Vector_2" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap">NPS Estancias</p>
      <div className="relative shrink-0 size-[9.864px]" data-name="help-question-1--circle-faq-frame-help-info-mark-more-query-question">
        <div className="absolute inset-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8637 9.8637">
              <path d={svgPaths.pe720880} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[37.48%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17272 3.99244">
              <path d={svgPaths.p20e59c00} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <Group2 />
      </div>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[5.636px] items-start relative shrink-0 w-full" data-name="title">
      <Container2 />
      <div className="content-stretch flex font-['Sneak:Medium',sans-serif] items-end not-italic relative shrink-0 text-[#0c2425] w-full" data-name="data">
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[22.55px] text-center whitespace-nowrap">
          <p className="leading-[29.591px]"><AnimatedCounter target={9.2} /></p>
        </div>
        <p className="leading-[29.591px] relative shrink-0 text-[22.55px] text-center whitespace-nowrap">/</p>
        <p className="h-[29.591px] leading-[36.637px] relative shrink-0 text-[14.09px] w-[16.909px]">10</p>
      </div>
    </div>
  );
}

function Separators() {
  return (
    <div className="absolute h-[45.796px] left-[-0.7px] top-0 w-[178.956px]" data-name="separators">
      <div className="absolute inset-[0_0_0_-0.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.307 45.7959">
          <g id="separators">
            <line id="Line 1" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="0.176138" x2="0.17614" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 12" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="17.0863" x2="17.0863" y1="45.7959" y2="0.000137337" />
            <line id="Line 2" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="33.2894" x2="33.2894" y1="45.7959" y2="0.000137337" />
            <line id="Line 11" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="49.4946" x2="49.4947" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 3" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="65.6996" x2="65.6996" y1="45.7959" y2="0.000137337" />
            <line id="Line 4" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="81.9047" x2="81.9047" y1="45.7959" y2="0.000137337" />
            <line id="Line 10" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="98.1078" x2="98.1078" y1="45.7959" y2="0.000137337" />
            <line id="Line 5" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="114.313" x2="114.313" y1="45.7959" y2="0.000137337" />
            <line id="Line 6" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="130.518" x2="130.518" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 7" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="146.723" x2="146.723" y1="45.7959" y2="0.000137337" />
            <line id="Line 8" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="162.928" x2="162.928" y1="45.7959" y2="0.000137337" />
            <line id="Line 9" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="179.131" x2="179.131" y1="45.7959" y2="0.000137337" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Graph1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="graph">
      <div className="content-stretch flex flex-col gap-[5.636px] items-center justify-center relative shrink-0 w-full" data-name="Stat Container">
        <div className="bg-[rgba(102,180,78,0.12)] content-stretch flex gap-[5.636px] items-center px-[2.818px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="Stat Container">
          <div aria-hidden="true" className="absolute border-[0.705px] border-[rgba(102,180,78,0.16)] border-solid inset-0 pointer-events-none rounded-[3px]" />
          <div className="relative shrink-0 size-[14.091px]" data-name="Stat Icon">
            <div className="absolute bottom-[46.43%] left-[67.86%] right-[3.57%] top-1/4" data-name="Vector">
              <div className="absolute inset-[-10.94%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90669 4.90669">
                  <path d={svgPaths.p11a2c300} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Vector">
              <div className="absolute inset-[-6.25%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9652 7.92619">
                  <path d={svgPaths.p22436e00} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Sneak:Medium',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#66b44e] text-[9.86px] whitespace-nowrap">{`+0.5 `}</p>
        </div>
        <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[9.86px] whitespace-nowrap">Respecto al mes anterior</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[71.13%_48.21%_25.3%_48.21%]">
      <div className="absolute inset-[-100%_-100.2%_-100%_-100.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05683 1.05683">
          <g id="Group 2567">
            <path d={svgPaths.p183ef700} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            <path d={svgPaths.p151ba000} id="Vector_2" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap">NPS Experiencias</p>
      <div className="relative shrink-0 size-[9.864px]" data-name="help-question-1--circle-faq-frame-help-info-mark-more-query-question">
        <div className="absolute inset-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8637 9.8637">
              <path d={svgPaths.pe720880} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[37.48%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17272 3.99244">
              <path d={svgPaths.p20e59c00} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <Group3 />
      </div>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex flex-col gap-[5.636px] items-start relative shrink-0 w-full" data-name="title">
      <Container3 />
      <div className="content-stretch flex font-['Sneak:Medium',sans-serif] items-end not-italic relative shrink-0 text-[#0c2425] w-full" data-name="data">
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[22.55px] text-center whitespace-nowrap">
          <p className="leading-[29.591px]"><AnimatedCounter target={6.3} /></p>
        </div>
        <p className="leading-[29.591px] relative shrink-0 text-[22.55px] text-center whitespace-nowrap">/</p>
        <p className="h-[29.591px] leading-[36.637px] relative shrink-0 text-[14.09px] w-[16.909px]">10</p>
      </div>
    </div>
  );
}

function BgColor() {
  return (
    <div className="absolute h-[28.182px] left-[-0.7px] top-[17.61px] w-[178.956px]" data-name="bg color">
      <div className="absolute inset-[-1.31%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157.092 28.5547">
          <g id="bg color">
            <path d={svgPaths.pa4cb080} fill="url(#paint0_linear_64_8500)" fillOpacity="0.32" id="bg color gradient" />
            <path d={svgPaths.p10334900} id="bg color bar" stroke="var(--stroke-0, #66B44E)" strokeWidth="0.70455" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_64_8500" x1="86.0294" x2="86.0294" y1="1.42948" y2="27.4978">
              <stop stopColor="#66B44E" />
              <stop offset="1" stopColor="#66B44E" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Separators1() {
  return (
    <div className="absolute h-[45.796px] left-[-0.7px] top-0 w-[178.956px]" data-name="separators">
      <div className="absolute inset-[0_0_0_-0.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.307 45.7959">
          <g id="separators">
            <line id="Line 1" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="0.176138" x2="0.17614" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 12" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="17.0863" x2="17.0863" y1="45.7959" y2="0.000137337" />
            <line id="Line 2" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="33.2894" x2="33.2894" y1="45.7959" y2="0.000137337" />
            <line id="Line 11" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="49.4946" x2="49.4947" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 3" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="65.6996" x2="65.6996" y1="45.7959" y2="0.000137337" />
            <line id="Line 4" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="81.9047" x2="81.9047" y1="45.7959" y2="0.000137337" />
            <line id="Line 10" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="98.1078" x2="98.1078" y1="45.7959" y2="0.000137337" />
            <line id="Line 5" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="114.313" x2="114.313" y1="45.7959" y2="0.000137337" />
            <line id="Line 6" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="130.518" x2="130.518" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 7" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="146.723" x2="146.723" y1="45.7959" y2="0.000137337" />
            <line id="Line 8" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="162.928" x2="162.928" y1="45.7959" y2="0.000137337" />
            <line id="Line 9" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="179.131" x2="179.131" y1="45.7959" y2="0.000137337" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Graph2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="graph">
      <div className="content-stretch flex flex-col gap-[5.636px] items-center justify-center relative shrink-0 w-full" data-name="Stat Container">
        <div className="bg-[rgba(102,180,78,0.12)] content-stretch flex gap-[5.636px] items-center px-[2.818px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="Stat Container">
          <div aria-hidden="true" className="absolute border-[0.705px] border-[rgba(102,180,78,0.16)] border-solid inset-0 pointer-events-none rounded-[3px]" />
          <div className="relative shrink-0 size-[14.091px]" data-name="Stat Icon">
            <div className="absolute bottom-1/4 left-[67.86%] right-[3.57%] top-[46.43%]" data-name="Vector">
              <div className="absolute inset-[-10.94%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90669 4.90669">
                  <path d={svgPaths.pe632480} id="Vector" stroke="var(--stroke-0, #DB4B4C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Vector">
              <div className="absolute inset-[-6.25%_-3.37%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9652 7.92619">
                  <path d={svgPaths.p2273f200} id="Vector" stroke="var(--stroke-0, #DB4B4C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Sneak:Medium',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#db4b4c] text-[9.86px] whitespace-nowrap">{`-0.5 `}</p>
        </div>
        <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[9.86px] whitespace-nowrap">Respecto al mes anterior</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[71.13%_48.21%_25.3%_48.21%]">
      <div className="absolute inset-[-100%_-100.2%_-100%_-100.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05683 1.05683">
          <g id="Group 2567">
            <path d={svgPaths.p183ef700} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            <path d={svgPaths.p151ba000} id="Vector_2" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap">NPS Diseño</p>
      <div className="relative shrink-0 size-[9.864px]" data-name="help-question-1--circle-faq-frame-help-info-mark-more-query-question">
        <div className="absolute inset-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8637 9.8637">
              <path d={svgPaths.pe720880} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[37.48%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17272 3.99244">
              <path d={svgPaths.p20e59c00} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <Group4 />
      </div>
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col gap-[5.636px] items-start relative shrink-0 w-full" data-name="title">
      <Container4 />
      <div className="content-stretch flex font-['Sneak:Medium',sans-serif] items-end not-italic relative shrink-0 text-[#0c2425] w-full" data-name="data">
        <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[22.55px] text-center whitespace-nowrap">
          <p className="leading-[29.591px]"><AnimatedCounter target={6.3} /></p>
        </div>
        <p className="leading-[29.591px] relative shrink-0 text-[22.55px] text-center whitespace-nowrap">/</p>
        <p className="h-[29.591px] leading-[36.637px] relative shrink-0 text-[14.09px] w-[16.909px]">10</p>
      </div>
    </div>
  );
}

function Separators2() {
  return (
    <div className="absolute h-[45.796px] left-[-0.7px] top-0 w-[178.956px]" data-name="separators">
      <div className="absolute inset-[0_0_0_-0.2%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.307 45.7959">
          <g id="separators">
            <line id="Line 1" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="0.176138" x2="0.17614" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 12" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="17.0863" x2="17.0863" y1="45.7959" y2="0.000137337" />
            <line id="Line 2" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="33.2894" x2="33.2894" y1="45.7959" y2="0.000137337" />
            <line id="Line 11" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="49.4946" x2="49.4947" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 3" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="65.6996" x2="65.6996" y1="45.7959" y2="0.000137337" />
            <line id="Line 4" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="81.9047" x2="81.9047" y1="45.7959" y2="0.000137337" />
            <line id="Line 10" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="98.1078" x2="98.1078" y1="45.7959" y2="0.000137337" />
            <line id="Line 5" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="114.313" x2="114.313" y1="45.7959" y2="0.000137337" />
            <line id="Line 6" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="130.518" x2="130.518" y1="45.7958" y2="7.69922e-09" />
            <line id="Line 7" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="146.723" x2="146.723" y1="45.7959" y2="0.000137337" />
            <line id="Line 8" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="162.928" x2="162.928" y1="45.7959" y2="0.000137337" />
            <line id="Line 9" opacity="0.5" stroke="var(--stroke-0, black)" strokeDasharray="0.7 0.7" strokeOpacity="0.16" strokeWidth="0.352275" x1="179.131" x2="179.131" y1="45.7959" y2="0.000137337" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Graph3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="graph">
      <div className="content-stretch flex flex-col gap-[5.636px] items-center justify-center relative shrink-0 w-full" data-name="Stat Container">
        <div className="bg-[rgba(102,180,78,0.12)] content-stretch flex gap-[5.636px] items-center px-[2.818px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="Stat Container">
          <div aria-hidden="true" className="absolute border-[0.705px] border-[rgba(102,180,78,0.16)] border-solid inset-0 pointer-events-none rounded-[3px]" />
          <div className="relative shrink-0 size-[14.091px]" data-name="equal-sign--interface-math-equal-sign-mathematics">
            <div className="absolute inset-[32.14%_5.36%_67.86%_5.36%]">
              <div className="absolute inset-[-0.5px_-4%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5878 1.0065">
                  <path d="M0.50325 0.50325H13.0845" id="Vector 267" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0065" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[67.86%_5.36%_32.14%_5.36%]">
              <div className="absolute inset-[-0.5px_-4%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5878 1.0065">
                  <path d="M0.50325 0.50325H13.0845" id="Vector 267" stroke="var(--stroke-0, #828282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0065" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Sneak:Medium',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#828282] text-[9.86px] whitespace-nowrap">0.0</p>
        </div>
        <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[9.86px] whitespace-nowrap">Respecto al mes anterior</p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex gap-[11.273px] items-center relative shrink-0 w-[794.733px]" data-name="cards">
      <div className="bg-white content-stretch flex flex-col h-[256.874px] items-center justify-between p-[16.909px] relative rounded-[8.455px] shrink-0 w-[190.229px]" data-name="NPS Global">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[8.455px]" />
        <HeaderInfo />
        <Container1 />
        <div className="content-stretch flex flex-col gap-[5.636px] items-center justify-center relative shrink-0 w-full" data-name="Stat Container">
          <div className="bg-[rgba(102,180,78,0.12)] content-stretch flex gap-[5.636px] items-center px-[2.818px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="Stat Container">
            <div aria-hidden="true" className="absolute border-[0.705px] border-[rgba(102,180,78,0.16)] border-solid inset-0 pointer-events-none rounded-[3px]" />
            <div className="relative shrink-0 size-[14.091px]" data-name="Stat Icon">
              <div className="absolute bottom-[46.43%] left-[67.86%] right-[3.57%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-10.94%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90669 4.90669">
                    <path d={svgPaths.p11a2c300} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Vector">
                <div className="absolute inset-[-6.25%_-3.37%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9652 7.92619">
                    <path d={svgPaths.p22436e00} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Sneak:Medium',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#66b44e] text-[9.86px] whitespace-nowrap">{`+0.5 `}</p>
          </div>
          <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[9.86px] whitespace-nowrap">Respecto al mes anterior</p>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col h-[256.874px] items-center justify-between p-[16.909px] relative rounded-[12px] shrink-0 w-[190.229px]" data-name="Cards">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Title2 />
        <div className="content-stretch flex flex-col h-[45.796px] items-center justify-end overflow-clip relative shrink-0 w-full" data-name="Reliability Container">
          <div className="absolute bottom-0 h-[27.918px] left-[-0.7px] right-[-0.7px]" data-name="bg color">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157.409 27.9178">
              <path d={svgPaths.p17421140} fill="url(#paint0_linear_64_8584)" fillOpacity="0.32" id="bg color" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_64_8584" x1="86.1412" x2="86.1412" y1="0.792618" y2="26.861">
                  <stop stopColor="#66B44E" />
                  <stop offset="1" stopColor="#66B44E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute h-[12.77px] left-[-0.7px] right-[-0.7px] top-[17.79px]" data-name="bg color">
            <div className="absolute inset-[-2.88%_0_-2.93%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157.545 13.5228">
                <path d={svgPaths.p11502480} id="bg color" stroke="var(--stroke-0, #66B44E)" strokeWidth="0.70455" />
              </svg>
            </div>
          </div>
          <Separators />
        </div>
        <Graph1 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[256.874px] items-center justify-between p-[16.909px] relative rounded-[12px] shrink-0 w-[190.229px]" data-name="Cards">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Title3 />
        <div className="content-stretch flex flex-col h-[45.796px] items-center justify-end overflow-clip relative shrink-0 w-full" data-name="Reliability Container">
          <BgColor />
          <Separators1 />
        </div>
        <Graph2 />
      </div>
      <div className="bg-white content-stretch flex flex-col h-[256.874px] items-center justify-between p-[16.909px] relative rounded-[12px] shrink-0 w-[190.229px]" data-name="Cards">
        <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <Title4 />
        <div className="content-stretch flex flex-col h-[45.796px] items-center justify-end overflow-clip relative shrink-0 w-full" data-name="Reliability Container">
          <div className="absolute bottom-0 h-[27.918px] left-[-0.7px] right-[-0.7px]" data-name="bg color">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157.409 27.9178">
              <path d={svgPaths.p17421140} fill="url(#paint0_linear_64_8584)" fillOpacity="0.32" id="bg color" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_64_8584" x1="86.1412" x2="86.1412" y1="0.792618" y2="26.861">
                  <stop stopColor="#66B44E" />
                  <stop offset="1" stopColor="#66B44E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute h-[12.77px] left-[-0.7px] right-[-0.7px] top-[17.79px]" data-name="bg color">
            <div className="absolute inset-[-2.88%_0_-2.93%_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157.545 13.5228">
                <path d={svgPaths.p11502480} id="bg color" stroke="var(--stroke-0, #66B44E)" strokeWidth="0.70455" />
              </svg>
            </div>
          </div>
          <Separators2 />
        </div>
        <Graph3 />
      </div>
    </div>
  );
}

function Indicadores() {
  return (
    <div className="content-stretch flex flex-col gap-[11.273px] items-start relative shrink-0" data-name="indicadores">
      <SectionHeader />
      <Cards />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[71.13%_48.21%_25.3%_48.21%]">
      <div className="absolute inset-[-100%_-100.2%_-100%_-100.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05683 1.05683">
          <g id="Group 2567">
            <path d={svgPaths.p183ef700} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            <path d={svgPaths.p151ba000} id="Vector_2" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0" data-name="title">
      <p className="font-['Teodor:Light',sans-serif] leading-[33.818px] not-italic relative shrink-0 text-[#020202] text-[22.55px] whitespace-nowrap">Factores principales</p>
      <div className="relative shrink-0 size-[9.864px]" data-name="help-question-1--circle-faq-frame-help-info-mark-more-query-question">
        <div className="absolute inset-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8637 9.8637">
              <path d={svgPaths.pe720880} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[37.48%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17272 3.99244">
              <path d={svgPaths.p20e59c00} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <Group5 />
      </div>
    </div>
  );
}

function SectionHeader1() {
  return (
    <div className="content-stretch flex gap-[11.273px] items-center relative shrink-0 w-full" data-name="section header">
      <div className="content-stretch flex gap-[11.273px] items-center relative shrink-0" data-name="title">
        <Title5 />
      </div>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center leading-[16.909px] not-italic relative shrink-0 text-[11.273px] whitespace-nowrap" data-name="Title Container">
      <p className="font-['Sneak:Regular',sans-serif] relative shrink-0 text-black">Factores</p>
      <p className="font-['Sneak:Medium',sans-serif] relative shrink-0 text-[#9c9c9c]">Último mes (Marzo 2025)</p>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Header Content">
      <TitleContainer />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex gap-[22.546px] h-[31px] items-center relative rounded-[2.114px] shrink-0" data-name="Header Container">
      <HeaderContent />
    </div>
  );
}

function ScoreContainer1() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p18f02ec0} fill="var(--fill-0, #F6A726)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Sneak:Medium',sans-serif] leading-[19.023px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1d686c] text-[12.68px] text-ellipsis whitespace-nowrap">Limpieza y olores</p>
      <div className="bg-[#f0f0f0] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Media</p>
      </div>
    </div>
  );
}

function HeaderInfo1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container7 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo1 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Estado de suelos, baños y textiles. Ventilación y calidad del aire.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreContainer2() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p16bbfc80} fill="var(--fill-0, #66B44E)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[19.023px] not-italic relative shrink-0 text-[#1d686c] text-[12.68px] whitespace-nowrap">Estilismo</p>
      <div className="bg-[#c2ffb6] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[2.114px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Alta</p>
      </div>
    </div>
  );
}

function HeaderInfo2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container8 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo2 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Decoración alineada con la guía de estilismo y armonía visual.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[56.364px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-start px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer1 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={4.2} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content1 />
      </div>
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-center justify-center px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer2 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={8.1} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content2 />
      </div>
    </div>
  );
}

function ScoreContainer3() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p35a0db00} fill="var(--fill-0, #D52029)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[19.023px] not-italic relative shrink-0 text-[#1d686c] text-[12.68px] whitespace-nowrap">Daños e Incidencias</p>
      <div className="bg-[#f0f0f0] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Media</p>
      </div>
    </div>
  );
}

function HeaderInfo3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container10 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo3 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Funcionamiento de puertas, ventanas y desperfectos.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreContainer4() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p16bbfc80} fill="var(--fill-0, #66B44E)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[19.023px] not-italic relative shrink-0 text-[#1d686c] text-[12.68px] whitespace-nowrap">Confort</p>
      <div className="bg-[#c2ffb6] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[2.114px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Alta</p>
      </div>
    </div>
  );
}

function HeaderInfo4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container11 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo4 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Calidad del mobiliario y climatización.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[56.364px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-start px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer3 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={3.2} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content3 />
      </div>
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-center justify-center px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer4 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={8.1} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content4 />
      </div>
    </div>
  );
}

function ScoreContainer5() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p16bbfc80} fill="var(--fill-0, #66B44E)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[19.023px] not-italic relative shrink-0 text-[#1d686c] text-[12.68px] whitespace-nowrap">Iluminación</p>
      <div className="bg-[#c2ffb6] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[2.114px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Alta</p>
      </div>
    </div>
  );
}

function HeaderInfo5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container13 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo5 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Funcionamiento y distribución adecuada de luz.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreContainer6() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p39a23d40} fill="var(--fill-0, #EBDB0A)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[19.023px] not-italic relative shrink-0 text-[#1d686c] text-[12.68px] whitespace-nowrap">Fontanería</p>
      <div className="bg-[#f0f0f0] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Media</p>
      </div>
    </div>
  );
}

function HeaderInfo6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container14 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo6 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Presión y temperatura del agua, desagües.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[56.364px] items-center justify-center relative shrink-0 w-[749.641px]" data-name="Container">
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-center justify-center px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer5 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={8.1} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content5 />
      </div>
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-start px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer6 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={6.2} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content6 />
      </div>
    </div>
  );
}

function ScoreContainer7() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p18f02ec0} fill="var(--fill-0, #F6A726)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Sneak:Medium',sans-serif] leading-[19.023px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1d686c] text-[12.68px] text-ellipsis whitespace-nowrap">Inventario y Amenities</p>
      <div className="bg-[#f0f0f0] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Media</p>
      </div>
    </div>
  );
}

function HeaderInfo7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container16 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo7 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Disponibilidad de elementos y productos esenciales.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreContainer8() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p16bbfc80} fill="var(--fill-0, #66B44E)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[19.023px] not-italic relative shrink-0 text-[#1d686c] text-[12.68px] whitespace-nowrap">Wifi</p>
      <div className="bg-[#c2ffb6] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[2.114px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Alta</p>
      </div>
    </div>
  );
}

function HeaderInfo8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container17 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo8 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Velocidad y cobertura.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[56.364px] items-center justify-center px-[71.864px] relative shrink-0 w-[749.641px]" data-name="Container">
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-start px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer7 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={4.2} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content7 />
      </div>
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-center justify-center px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer8 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={8.1} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content8 />
      </div>
    </div>
  );
}

function ScoreContainer9() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p18f02ec0} fill="var(--fill-0, #F6A726)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Sneak:Medium',sans-serif] leading-[19.023px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1d686c] text-[12.68px] text-ellipsis whitespace-nowrap">Equip. Electrónico</p>
      <div className="bg-[#f0f0f0] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Media</p>
      </div>
    </div>
  );
}

function HeaderInfo9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container19 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo9 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Funcionamiento adecuado.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreContainer10() {
  return (
    <div className="absolute contents inset-0" data-name="Score Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84.252 84.252">
        <g id="Score Container">
          <path d={svgPaths.p3423a500} fill="var(--fill-0, #F0F0F0)" id="bg" />
          <path d={svgPaths.p16bbfc80} fill="var(--fill-0, #66B44E)" id="active" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[8.455px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[19.023px] not-italic relative shrink-0 text-[#1d686c] text-[12.68px] whitespace-nowrap">Llaves y Acceso</p>
      <div className="bg-[#c2ffb6] content-stretch flex gap-[2.818px] items-center justify-center px-[5.636px] py-[1.409px] relative rounded-[2.114px] shrink-0" data-name="tag reliability">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Fiabilidad Alta</p>
      </div>
    </div>
  );
}

function HeaderInfo10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container20 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2.818px] items-start min-h-px min-w-px relative" data-name="content">
      <HeaderInfo10 />
      <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] min-w-full not-italic relative shrink-0 text-[#020202] text-[9.86px] w-[min-content]">Seguridad en cerraduras.</p>
      <div className="content-stretch flex gap-[5.636px] items-center py-[2.818px] relative rounded-[3px] shrink-0" data-name="ghost buttons">
        <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver comentarios</p>
        <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
          <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
            <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[56.364px] items-center justify-center relative shrink-0 w-[749.641px]" data-name="Container">
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-start px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer9 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={4.2} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content9 />
      </div>
      <div className="content-stretch flex gap-[16.909px] items-center relative shrink-0 w-[274.775px]" data-name="graph spec content">
        <div className="content-stretch flex flex-col gap-[4.956px] items-center justify-center px-[21.311px] py-[36.674px] relative shrink-0 size-[84.252px]" data-name="Score Container circle">
          <ScoreContainer10 />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex font-['Sneak:Medium',sans-serif] items-end justify-center left-1/2 not-italic text-[#0c2425] top-[calc(50%-0.09px)]" data-name="data">
            <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[15.86px] text-center whitespace-nowrap">
              <p className="leading-[20.815px]"><AnimatedCounter target={8.1} delay={600} /></p>
            </div>
            <p className="h-[20.815px] leading-[20.815px] relative shrink-0 text-[15.86px] text-center w-[7.93px]">/</p>
            <p className="h-[20.815px] leading-[25.771px] relative shrink-0 text-[9.91px] w-[11.894px]">10</p>
          </div>
        </div>
        <Content10 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[39.455px] items-start relative shrink-0 w-[749.641px]" data-name="content">
      <Container6 />
      <Container9 />
      <Container12 />
      <Container15 />
      <Container18 />
    </div>
  );
}

function Desglose() {
  return (
    <div className="content-stretch flex flex-col gap-[11.273px] items-start relative shrink-0" data-name="desglose">
      <HeaderContainer />
      <Content />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[28.182px] items-start p-[22.546px] relative rounded-[8.455px] shrink-0 w-[794.733px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[8.455px]" />
      <Desglose />
    </div>
  );
}

function Factores() {
  return (
    <div className="content-stretch flex flex-col gap-[11.273px] items-start relative shrink-0" data-name="factores">
      <SectionHeader1 />
      <Container5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[71.13%_48.21%_25.3%_48.21%]">
      <div className="absolute inset-[-100%_-100.2%_-100%_-100.1%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.05683 1.05683">
          <g id="Group 2567">
            <path d={svgPaths.p183ef700} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            <path d={svgPaths.p151ba000} id="Vector_2" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Sneak:Medium',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap">Estado general</p>
      <div className="relative shrink-0 size-[9.864px]" data-name="Help Icon">
        <div className="absolute inset-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-3.85%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.8637 9.8637">
              <path d={svgPaths.pe720880} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-[37.5%] right-[37.48%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-10.71%_-14.27%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.17272 3.99244">
              <path d={svgPaths.p20e59c00} id="Vector" stroke="var(--stroke-0, #9C9C9C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.70455" />
            </svg>
          </div>
        </div>
        <Group6 />
      </div>
    </div>
  );
}

function HeaderInfo11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="header info">
      <Container22 />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex flex-col gap-[8.455px] items-center relative shrink-0" data-name="Status">
      <HeaderInfo11 />
      <div className="relative shrink-0 size-[28.182px]" data-name="trophy--reward-rating-trophy-social-award-media">
        <div className="absolute bottom-[3.57%] left-1/2 right-1/2 top-[67.86%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-1.01px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.013 10.065">
              <path d="M1.0065 1.0065L1.0065 9.0585" id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.013" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[3.57%] left-1/4 right-1/4 top-[96.43%]" data-name="Vector">
          <div className="absolute inset-[-1.01px_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.104 2.013">
              <path d={svgPaths.p30b9d620} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.013" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[53.57%] left-[3.57%] right-3/4 top-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.052 14.091">
              <path d={svgPaths.p378ed1f2} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.013" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[53.57%] flex items-center justify-center left-3/4 right-[3.57%] top-[3.57%]">
          <div className="-scale-y-100 flex-none h-[12.078px] rotate-180 w-[6.039px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-8.33%_-16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.052 14.091">
                  <path d={svgPaths.p378ed1f2} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.013" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[32.14%] left-1/4 right-1/4 top-[3.57%]" data-name="Vector">
          <div className="absolute inset-[-5.56%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.104 20.13">
              <path d={svgPaths.p3631c800} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.013" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Sneak:Medium',sans-serif] leading-[28.182px] not-italic relative shrink-0 text-[#66b44e] text-[22.55px] text-center whitespace-nowrap">Excelente</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium','Noto_Sans:Medium',sans-serif] leading-[14.796px] relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Nº tickets totales
      </p>
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col gap-[5.636px] items-start relative shrink-0 w-full" data-name="title">
      <Container23 />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data">
        <div className="flex flex-col font-['Sneak:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0c2425] text-[22.55px] whitespace-nowrap">
          <p className="leading-[29.591px]">12</p>
        </div>
      </div>
    </div>
  );
}

function TagList() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-start relative shrink-0 w-full" data-name="tag list">
      <div className="bg-[#c5f6fa] content-stretch flex items-start px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Limpieza</p>
      </div>
      <div className="bg-[#c5f6fa] content-stretch flex items-start px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Orden</p>
      </div>
      <div className="bg-[#c5f6fa] content-stretch flex items-start px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">+4</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[2.818px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[8.45px] text-black whitespace-nowrap">Topics asociados:</p>
      <TagList />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium','Noto_Sans:Medium',sans-serif] leading-[14.796px] relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Nº tickets en curso
      </p>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col gap-[5.636px] items-start relative shrink-0 w-full" data-name="title">
      <Container25 />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data">
        <div className="flex flex-col font-['Sneak:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0c2425] text-[22.55px] whitespace-nowrap">
          <p className="leading-[29.591px]">4</p>
        </div>
      </div>
    </div>
  );
}

function TagList1() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-start relative shrink-0 w-full" data-name="tag list">
      <div className="bg-[#c5f6fa] content-stretch flex items-start px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Olores</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[2.818px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[8.45px] text-black whitespace-nowrap">Topics asociados:</p>
      <TagList1 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Medium','Noto_Sans:Medium',sans-serif] leading-[14.796px] relative shrink-0 text-[#020202] text-[11.98px] whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        Nº tickets resueltos
      </p>
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col gap-[5.636px] items-start relative shrink-0 w-full" data-name="title">
      <Container27 />
      <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="data">
        <div className="flex flex-col font-['Sneak:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0c2425] text-[22.55px] whitespace-nowrap">
          <p className="leading-[29.591px]">8</p>
        </div>
      </div>
    </div>
  );
}

function TagList2() {
  return (
    <div className="content-stretch flex gap-[5.636px] items-start relative shrink-0 w-full" data-name="tag list">
      <div className="bg-[#c5f6fa] content-stretch flex items-start px-[5.636px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="tag">
        <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[#020202] text-[8.45px] whitespace-nowrap">Olores</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[2.818px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Sneak:Regular',sans-serif] leading-[12.682px] not-italic relative shrink-0 text-[8.45px] text-black whitespace-nowrap">Topics asociados:</p>
      <TagList2 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex gap-[21.137px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-gradient-to-b flex-[1_0_0] from-[#efffec] min-h-px min-w-px relative rounded-[12px] to-white" data-name="Status cards">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[11.273px] items-center justify-center px-[25.364px] py-[19.727px] relative w-full">
            <Status />
            <div className="content-stretch flex flex-col gap-[5.636px] items-center justify-center relative shrink-0 w-full" data-name="Stat Container">
              <div className="bg-[rgba(102,180,78,0.12)] content-stretch flex gap-[5.636px] items-center px-[2.818px] py-[1.409px] relative rounded-[3px] shrink-0" data-name="Stat Container">
                <div aria-hidden="true" className="absolute border-[0.705px] border-[rgba(102,180,78,0.16)] border-solid inset-0 pointer-events-none rounded-[3px]" />
                <div className="relative shrink-0 size-[14.091px]" data-name="Stat Icon">
                  <div className="absolute bottom-[46.43%] left-[67.86%] right-[3.57%] top-1/4" data-name="Vector">
                    <div className="absolute inset-[-10.94%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90669 4.90669">
                        <path d={svgPaths.p11a2c300} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-1/4 left-[3.57%] right-[3.57%] top-1/4" data-name="Vector">
                    <div className="absolute inset-[-6.25%_-3.37%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9652 7.92619">
                        <path d={svgPaths.p22436e00} id="Vector" stroke="var(--stroke-0, #66B44E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.880688" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Sneak:Medium',sans-serif] leading-[16.909px] not-italic relative shrink-0 text-[#66b44e] text-[9.86px] whitespace-nowrap">{`+0.5 `}</p>
              </div>
              <p className="font-['Sneak:Regular',sans-serif] leading-[14.796px] not-italic relative shrink-0 text-[#020202] text-[9.86px] whitespace-nowrap">Respecto al mes anterior</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[2.114px]" data-name="Ticket cards">
        <div className="content-stretch flex flex-col gap-[11.273px] items-start p-[16.909px] relative w-full">
          <Title6 />
          <Container24 />
          <div className="content-stretch flex items-center justify-between py-[2.818px] relative rounded-[3px] shrink-0 w-full" data-name="ghost buttons">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver tickets totales</p>
            <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
              <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
                <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                    <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[178.956px]">
              <div className="absolute inset-[-0.7px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.273 0.70455">
                  <line id="Line 49" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="0.70455" x2="180.273" y1="0.352275" y2="0.352275" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[2.114px]" data-name="Ticket cards">
        <div className="content-stretch flex flex-col gap-[11.273px] items-start p-[16.909px] relative w-full">
          <Title7 />
          <Container26 />
          <div className="content-stretch flex items-center justify-between py-[2.818px] relative rounded-[3px] shrink-0 w-full" data-name="ghost buttons">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver tickets en curso</p>
            <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
              <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
                <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                    <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
          <div className="flex-none h-full rotate-90">
            <div className="h-full relative w-[178.956px]">
              <div className="absolute inset-[-0.7px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.273 0.70455">
                  <line id="Line 49" stroke="var(--stroke-0, #F0F0F0)" strokeWidth="0.70455" x2="180.273" y1="0.352275" y2="0.352275" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[2.114px]" data-name="Ticket cards">
        <div className="content-stretch flex flex-col gap-[11.273px] items-start p-[16.909px] relative w-full">
          <Title8 />
          <Container28 />
          <div className="content-stretch flex items-center justify-between py-[2.818px] relative rounded-[3px] shrink-0 w-full" data-name="ghost buttons">
            <p className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Medium',sans-serif] font-medium leading-[14.091px] not-italic relative shrink-0 text-[#020202] text-[9.16px] underline whitespace-nowrap">Ver tickets resueltos</p>
            <div className="relative shrink-0 size-[10.521px]" data-name="chevron-right">
              <div className="-translate-x-1/2 absolute aspect-[3.5/7] bottom-1/4 left-[calc(50%-0.13px)] top-1/4" data-name="Vector">
                <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.61669 6.24701">
                    <path d={svgPaths.p32a7bc00} id="Vector" stroke="var(--stroke-0, #333333)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.98637" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EstadoDeMantenimientoGeneral() {
  return (
    <div className="content-stretch flex flex-col gap-[11.273px] items-start relative shrink-0" data-name="Estado de mantenimiento general">
      <p className="font-['Teodor:Light',sans-serif] leading-[33.818px] not-italic relative shrink-0 text-[#020202] text-[22.546px] whitespace-nowrap">Estado de mantenimiento general</p>
      <div className="bg-white content-stretch flex flex-col items-start p-[22.546px] relative rounded-[8.455px] shrink-0 w-[794.733px]" data-name="Maintenance Status">
        <div aria-hidden="true" className="absolute border-[#ececec] border-[0.705px] border-solid inset-0 pointer-events-none rounded-[8.455px]" />
        <Container21 />
      </div>
    </div>
  );
}

function InfoContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="info content">
      <div className="content-stretch flex flex-col gap-[22.546px] items-start px-[42.273px] relative w-full">
        <div className="content-stretch flex flex-col gap-[22.546px] items-start relative shrink-0 w-[794.733px]" data-name="head">
          <Title />
          <Filters />
          <Tabs />
        </div>
        <Indicadores />
        <Factores />
        <EstadoDeMantenimientoGeneral />
      </div>
    </div>
  );
}

function BodyContent() {
  return (
    <div className="content-stretch flex flex-col gap-[22.546px] items-center justify-center pb-[28.182px] relative shrink-0 w-[879.279px]" data-name="body content">
      <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-[879.279px]" data-name="Top bar Nav">
        <Nav />
      </div>
      <InfoContent />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="bg-[#020202] content-stretch flex items-center justify-center overflow-clip px-[5.636px] py-[2.818px] relative rounded-[2.818px] shrink-0" data-name="Tooltip">
      <div className="flex flex-col font-['Sneak:Regular',sans-serif] justify-center leading-[1.2] not-italic relative shrink-0 text-[9.86px] text-center text-white whitespace-nowrap">
        <p className="mb-0">Fiabilidad de los datos</p>
        <p>en base al Nº de valoraciones</p>
      </div>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="bg-[#020202] content-stretch flex items-center justify-center overflow-clip px-[5.636px] py-[2.818px] relative rounded-[2.818px] shrink-0" data-name="Tooltip">
      <div className="flex flex-col font-['Sneak:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.86px] text-center text-white whitespace-nowrap">
        <p className="leading-[1.2]">Inventario y Amenities</p>
      </div>
    </div>
  );
}

function PanelNpsDetalleDeCasa() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#fbfbf9] content-stretch flex h-[733px] items-start left-1/2 overflow-clip top-[67px] w-[1066px]" data-name="Panel NPS - Detalle de casa">
      <div className="bg-white h-[1632.095px] min-h-[422.73008823394775px] relative shrink-0 w-[186.706px]" data-name="Sidebar NPS">
        <div className="content-stretch flex flex-col gap-[22.546px] items-center min-h-[inherit] overflow-clip py-[22.546px] relative rounded-[inherit] size-full">
          <Header />
          <NavTabs />
          <div className="bg-white h-[35.228px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8.455px] items-center px-[14.091px] py-[5.636px] relative size-full">
                <div className="overflow-clip relative shrink-0 size-[16.909px]" data-name="Actions Icon">
                  <div className="absolute inset-[4.76%]" data-name="Vector (Stroke)">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2988 15.2988">
                      <path clipRule="evenodd" d={svgPaths.p2fdd8940} fill="var(--fill-0, #020202)" fillRule="evenodd" id="Vector (Stroke)" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-[1_0_0] flex-col font-['Sneak:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#020202] text-[11.98px]">
                  <p className="leading-[15.686px]">Ajustes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#ececec] border-[0.705px] border-solid inset-0 pointer-events-none" />
      </div>
      <BodyContent />
      <div className="absolute backdrop-blur-[1.409px] content-stretch flex items-end left-[462.18px] opacity-82 top-[930.01px]" data-name="tooltip sm">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="<Tooltip>">
          <Tooltip />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="h-[4.227px] relative w-[8.455px]" data-name="Arrow">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4546 4.2273">
                  <path d={svgPaths.p2ebf3400} fill="var(--fill-0, #020202)" id="Arrow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute backdrop-blur-[1.409px] content-stretch flex items-end left-[412.87px] opacity-82 top-[1065.98px]" data-name="tooltip sm">
        <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="<Tooltip>">
          <Tooltip1 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-180">
              <div className="h-[4.227px] relative w-[8.455px]" data-name="Arrow">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.4546 4.2273">
                  <path d={svgPaths.p2ebf3400} fill="var(--fill-0, #020202)" id="Arrow" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpockInformes() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <DashVisibleContext.Provider value={visible}>
      <div
        ref={wrapRef}
        className={`vivla-dash content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip relative shrink-0 w-[1200px]${visible ? " vivla-dash--visible" : ""}`}
        data-name="Spock informes"
      >
        <style>{dashboardAnimStyles}</style>
        <div className="bg-[#f8f7f0] h-[800px] shrink-0 w-full" data-name="BG IMG" />
        <PanelNpsDetalleDeCasa />
      </div>
    </DashVisibleContext.Provider>
  );
}

export default function IDermAppScreens() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative size-full" data-name="iDermApp Screens">
      <SpockInformes />
    </div>
  );
}