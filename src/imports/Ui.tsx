import svgPaths from "./svg-t0r270z3oc";
import imgRectangle from "figma:asset/7a93632d01396aaeb116675c2c12c3e8d87dbeac.png";
import imgRectangle1 from "figma:asset/a73d9ed7d58297211c427a6abd40547dda6c4f79.png";
import imgRectangle2 from "figma:asset/3da4185df7dad6147b3cbea712dbdb048b56e256.png";
import imgRectangle3 from "figma:asset/136b542261afa712670248a0cc0cf6d1ad3ad35e.png";

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[9.046px] relative shrink-0 w-full" data-name="header content">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px] whitespace-nowrap" data-name="Welcome name">
        <p className="font-['Gabarito:SemiBold',sans-serif] font-semibold leading-[20.353px] relative shrink-0 text-[#212529] text-[13.57px]">Hola de nuevo, Miguel</p>
        <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[11.873px] relative shrink-0 text-[#868e96] text-[7.92px]">Último acceso, hoy a las 10:30h</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_0.13%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2922 11.3074">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p200e2580} fill="var(--fill-0, #6140EC)" fillRule="evenodd" id="Rectangle" />
          <path clipRule="evenodd" d={svgPaths.p2bb27900} fill="var(--fill-0, #6140EC)" fillRule="evenodd" id="Rectangle-Copy" />
        </g>
      </svg>
    </div>
  );
}

function Artboard() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Artboard">
      <Group />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Page-1">
      <Artboard />
    </div>
  );
}

function ButtonsSection() {
  return (
    <div className="content-stretch flex gap-[4.523px] items-center justify-end relative shrink-0" data-name="Buttons section">
      <div className="bg-white content-stretch flex gap-[4.523px] items-center justify-center px-[9.046px] py-[4.523px] relative rounded-[28.269px] shrink-0" data-name="Dropdown button / Web">
        <div aria-hidden="true" className="absolute border-[#6140ec] border-[0.565px] border-solid inset-0 pointer-events-none rounded-[28.269px]" />
        <div className="relative shrink-0 size-[13.569px]" data-name="B&W icons">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[11.307px] top-1/2" data-name="Neom Logo">
            <Page />
          </div>
        </div>
        <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[13.569px] relative shrink-0 text-[#343a40] text-[9.05px] whitespace-nowrap">Mi cuenta</p>
      </div>
      <div className="bg-white content-stretch flex gap-[4.523px] items-center justify-center px-[9.046px] py-[4.523px] relative rounded-[50px] shrink-0" data-name="Dropdown button / Web">
        <div aria-hidden="true" className="absolute border-[#dee2e6] border-[0.565px] border-solid inset-0 pointer-events-none rounded-[50px]" />
        <div className="relative shrink-0 size-[13.569px]" data-name="B&W icons">
          <div className="absolute left-0 size-[13.569px] top-0" data-name="credit-card">
            <div className="absolute inset-[20%_10%]" data-name="Subtract">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8551 8.14135">
                <g id="Subtract">
                  <path d={svgPaths.p143e280} fill="var(--fill-0, #343A40)" />
                  <path clipRule="evenodd" d={svgPaths.p2a66f700} fill="var(--fill-0, #343A40)" fillRule="evenodd" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[13.569px] relative shrink-0 text-[#343a40] text-[9.05px] whitespace-nowrap">Mi tarjeta</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="font-['Gabarito:SemiBold',sans-serif] font-semibold leading-[13.569px] relative shrink-0 text-[#212529] text-[9.046px] whitespace-nowrap">Saldo total</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[30.53px] not-italic relative shrink-0 text-[#212529] text-[20.353px] w-full">21.465,40 €</p>
    </div>
  );
}

function Balance() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Balance">
      <Frame />
      <div className="bg-[#eee8ff] content-stretch flex items-center justify-center px-[13.569px] py-[9.046px] relative rounded-[30px] shrink-0 w-[31.661px]" data-name="Button / Add">
        <div className="overflow-clip relative shrink-0 size-[13.569px]" data-name="B&W icons">
          <div className="absolute left-0 size-[13.569px] top-0" data-name="plus">
            <div className="absolute inset-[22.5%]" data-name="_plus">
              <div className="absolute inset-[0_0.54%_0_-0.54%]" data-name="__symbol-+">
                <div className="absolute bottom-1/2 left-0 right-0 top-1/2" data-name="Line">
                  <div className="absolute inset-[-0.51px_-6.82%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48057 1.01767">
                      <path d={svgPaths.p39f1ee00} id="Line" stroke="var(--stroke-0, #6140EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.01767" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 flex items-center justify-center left-1/2 right-1/2 top-0">
                  <div className="flex-none h-px rotate-90 w-[4.071px]">
                    <div className="relative size-full" data-name="Line">
                      <div className="absolute inset-[-0.51px_-6.82%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48057 1.01767">
                          <path d={svgPaths.p39f1ee00} id="Line" stroke="var(--stroke-0, #6140EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.01767" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="title">
      <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[13.569px] relative shrink-0 text-[#212529] text-[9.046px] text-center whitespace-nowrap">Datos de la cuenta</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4.523px] items-start relative shrink-0">
      <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[13.569px] relative shrink-0 text-[#868e96] text-[9.046px] whitespace-nowrap">ES61 1234 3456 42 0456323532</p>
      <div className="overflow-clip relative shrink-0 size-[13.569px]" data-name="B&W icons">
        <div className="absolute left-0 size-[13.569px] top-0" data-name="copy">
          <div className="absolute inset-[16.25%_22.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4629 9.15906">
              <g id="Vector">
                <path d={svgPaths.p3e19e400} fill="var(--fill-0, #343A40)" />
                <path d={svgPaths.p5f57400} fill="var(--fill-0, #343A40)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IbanData() {
  return (
    <div className="content-stretch flex gap-[9.046px] items-start relative shrink-0 w-full" data-name="IBAN data">
      <Frame1 />
    </div>
  );
}

function BWIconsTransfer() {
  return (
    <div className="overflow-clip relative shrink-0 size-[13.569px]" data-name="B&W icons/Transfer">
      <div className="absolute inset-[20%_19.16%_20%_58.34%]" data-name="__arrow-adjust">
        <div className="absolute h-[4.749px] left-0 top-0 w-[3.059px]" data-name="Subtract">
          <div className="absolute inset-[-4.93%_33.26%_-6.36%_33.48%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01767 8.90304">
              <path d={svgPaths.p5a0c400} fill="var(--stroke-0, #6140EC)" id="Subtract" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[1.527px] left-0 right-0 top-0" data-name="__arrow-top">
          <div className="absolute inset-[-8.42%_-0.79%_-22.22%_-0.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.10141 1.99418">
              <path d={svgPaths.p110edeb1} fill="var(--fill-0, #6140EC)" id="Triangle" stroke="var(--stroke-0, #6140EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.678445" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[20%_58.34%_20%_19.16%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[8.141px] w-[3.053px]">
          <div className="relative size-full" data-name="__arrow-adjust">
            <div className="absolute h-[4.749px] left-0 top-0 w-[3.059px]" data-name="Subtract">
              <div className="absolute inset-[-4.93%_33.26%_-6.36%_33.48%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01767 8.90304">
                  <path d={svgPaths.p5a0c400} fill="var(--stroke-0, #6140EC)" id="Subtract" />
                </svg>
              </div>
            </div>
            <div className="absolute h-[1.527px] left-0 right-0 top-0" data-name="__arrow-top">
              <div className="absolute inset-[-8.42%_-0.79%_-22.22%_-0.79%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.10141 1.99418">
                  <path d={svgPaths.p110edeb1} fill="var(--fill-0, #6140EC)" id="Triangle" stroke="var(--stroke-0, #6140EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.678445" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmallButton() {
  return (
    <div className="bg-white col-1 content-stretch flex gap-[4.523px] items-center justify-center ml-0 mt-0 px-[9.046px] py-[6.784px] relative rounded-[4.523px] row-1" data-name="small button">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-[0.565px] border-solid inset-0 pointer-events-none rounded-[4.523px]" />
      <BWIconsTransfer />
      <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[13.569px] relative shrink-0 text-[#6140ec] text-[9.046px] text-center whitespace-nowrap">Realizar transferencia</p>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <SmallButton />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-start pt-[9.046px] relative shrink-0 w-full" data-name="Buttons">
      <Group15 />
    </div>
  );
}

function AccountData() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Account data">
      <Title />
      <IbanData />
      <Buttons />
    </div>
  );
}

function BalanceCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[9.046px] relative rounded-[9.046px] shrink-0 w-[301.908px]" data-name="Balance card">
      <Balance />
      <AccountData />
    </div>
  );
}

function CardContent() {
  return (
    <div className="bg-white relative rounded-[9.046px] shrink-0 w-full" data-name="card content">
      <div aria-hidden="true" className="absolute border-[#f1f3f5] border-[0.565px] border-solid inset-0 pointer-events-none rounded-[9.046px]" />
      <div className="content-stretch flex flex-col items-start p-[9.046px] relative w-full">
        <BalanceCard />
      </div>
    </div>
  );
}

function Frame2() {
  return <div className="content-stretch flex gap-[2.261px] h-[13.569px] items-center shrink-0" />;
}

function Title1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="title">
      <p className="font-['Gabarito:SemiBold',sans-serif] font-semibold leading-[13.569px] relative shrink-0 text-[#212529] text-[9.05px] whitespace-nowrap">Últimos movimientos</p>
      <Frame2 />
    </div>
  );
}

function IconBg() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon + BG">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[22.615px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6148 22.6148">
          <circle cx="11.3074" cy="11.3074" fill="var(--fill-0, #F8F9FA)" id="Ellipse 3" r="11.3074" />
        </svg>
      </div>
      <div className="col-1 ml-[4.52px] mt-[4.52px] overflow-clip relative row-1 size-[13.569px]" data-name="Transaction icons">
        <div className="absolute inset-[12.5%_17.62%_12.5%_16.18%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.98364 10.1767">
            <path d={svgPaths.p17f7b00} fill="var(--fill-0, #343A40)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionData() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gabarito:Regular',sans-serif] font-normal h-full items-start min-h-px min-w-px relative text-ellipsis whitespace-nowrap" data-name="transaction data">
      <p className="leading-[13.569px] overflow-hidden relative shrink-0 text-[#333] text-[9.05px] w-full">Transferencia recibida</p>
      <p className="flex-[1_0_0] leading-[11.873px] min-h-px min-w-px overflow-hidden relative text-[#868e96] text-[7.92px] w-full">Tipo de transacción</p>
    </div>
  );
}

function Transaction() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[9.046px] items-center min-h-px min-w-px relative" data-name="transaction">
      <IconBg />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TransactionData />
      </div>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.569px] not-italic relative shrink-0 text-[#212529] text-[9.05px] text-right whitespace-nowrap">+60,00 €</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[9.046px] h-[22.615px] items-center relative shrink-0 w-full" data-name="content">
      <Transaction />
      <Amount />
    </div>
  );
}

function IconBg1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon + BG">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[22.615px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6148 22.6148">
          <circle cx="11.3074" cy="11.3074" fill="var(--fill-0, #F8F9FA)" id="Ellipse 3" r="11.3074" />
        </svg>
      </div>
      <div className="col-1 ml-[4.52px] mt-[4.52px] overflow-clip relative row-1 size-[13.569px]" data-name="Transaction icons">
        <div className="absolute inset-[20%_10%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8555 8.1416">
            <path d={svgPaths.p7451780} fill="var(--fill-0, #343A40)" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionData1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gabarito:Regular',sans-serif] font-normal h-full items-start min-h-px min-w-px relative text-ellipsis whitespace-nowrap" data-name="transaction data">
      <p className="leading-[13.569px] overflow-hidden relative shrink-0 text-[#333] text-[9.05px] w-full">Cafetería La Malaka-SL-CP478323</p>
      <p className="flex-[1_0_0] leading-[11.873px] min-h-px min-w-px overflow-hidden relative text-[#868e96] text-[7.92px] w-full">Tipo de transacción</p>
    </div>
  );
}

function Transaction1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[9.046px] items-center min-h-px min-w-px relative" data-name="transaction">
      <IconBg1 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TransactionData1 />
      </div>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[7.671px] not-italic relative shrink-0 text-[#333] text-[5.11px] text-right whitespace-nowrap">-20,00 €</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[9.046px] h-[22.615px] items-center relative shrink-0 w-full" data-name="content">
      <Transaction1 />
      <Amount1 />
    </div>
  );
}

function MovementList() {
  return (
    <div className="content-stretch flex flex-col gap-[0.565px] items-start relative shrink-0 w-full" data-name="movement list">
      <div className="bg-white content-stretch flex gap-[5.654px] items-center pb-[2.261px] pt-[4.523px] px-[4.523px] relative rounded-[4px] shrink-0 w-[283.816px]" data-name="Header">
        <p className="flex-[1_0_0] font-['Gabarito:Regular',sans-serif] font-normal leading-[11.873px] min-h-px min-w-px relative text-[#333] text-[7.92px]">15 Noviembre</p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[9.046px] items-start pt-[9.046px] px-[4.523px] relative rounded-[4.523px] shrink-0 w-[283.816px]" data-name="List">
        <Content />
        <div className="h-0 relative shrink-0 w-full" data-name="separator">
          <div className="absolute inset-[-0.28px_-0.15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.336 0.565371">
              <path d="M0.282686 0.282686H275.053" id="separator" stroke="var(--stroke-0, #F1F3F5)" strokeLinecap="round" strokeWidth="0.565371" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[9.046px] items-start pt-[9.046px] px-[4.523px] relative shrink-0 w-[283.816px]" data-name="List">
        <Content1 />
        <div className="h-0 relative shrink-0 w-full" data-name="separator">
          <div className="absolute inset-[-0.28px_-0.15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.336 0.565371">
              <path d="M0.282686 0.282686H275.053" id="separator" stroke="var(--stroke-0, #F1F3F5)" strokeLinecap="round" strokeWidth="0.565371" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconBg2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon + BG">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[22.615px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6148 22.6148">
          <circle cx="11.3074" cy="11.3074" fill="var(--fill-0, #F8F9FA)" id="Ellipse 3" r="11.3074" />
        </svg>
      </div>
      <div className="col-1 ml-[4.52px] mt-[4.52px] overflow-clip relative row-1 size-[13.569px]" data-name="Transaction icons">
        <div className="absolute inset-[12.5%_17.62%_12.5%_16.18%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.98364 10.1767">
            <path d={svgPaths.p17f7b00} fill="var(--fill-0, #343A40)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionData2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gabarito:Regular',sans-serif] font-normal h-full items-start min-h-px min-w-px relative text-ellipsis whitespace-nowrap" data-name="transaction data">
      <p className="leading-[13.569px] overflow-hidden relative shrink-0 text-[#333] text-[9.05px] w-full">Transferencia</p>
      <p className="flex-[1_0_0] leading-[11.873px] min-h-px min-w-px overflow-hidden relative text-[#868e96] text-[7.92px] w-full">Tipo de transacción</p>
    </div>
  );
}

function Transaction2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[9.046px] items-center min-h-px min-w-px relative" data-name="transaction">
      <IconBg2 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TransactionData2 />
      </div>
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[7.671px] not-italic relative shrink-0 text-[#212529] text-[5.11px] text-right whitespace-nowrap">+465,00 €</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[9.046px] h-[22.615px] items-center relative shrink-0 w-full" data-name="content">
      <Transaction2 />
      <Amount2 />
    </div>
  );
}

function IconBg3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon + BG">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[22.615px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6148 22.6148">
          <circle cx="11.3074" cy="11.3074" fill="var(--fill-0, #F8F9FA)" id="Ellipse 3" r="11.3074" />
        </svg>
      </div>
      <div className="col-1 ml-[4.52px] mt-[4.52px] overflow-clip relative row-1 size-[13.569px]" data-name="Transaction icons">
        <div className="absolute inset-[20%_10%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8555 8.1416">
            <path d={svgPaths.p7451780} fill="var(--fill-0, #343A40)" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionData3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gabarito:Regular',sans-serif] font-normal h-full items-start min-h-px min-w-px relative text-ellipsis whitespace-nowrap" data-name="transaction data">
      <p className="leading-[13.569px] overflow-hidden relative shrink-0 text-[#333] text-[9.05px] w-full">Amazon KD12376 Electronics</p>
      <p className="flex-[1_0_0] leading-[11.873px] min-h-px min-w-px overflow-hidden relative text-[#868e96] text-[7.92px] w-full">Tipo de transacción</p>
    </div>
  );
}

function Transaction3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[9.046px] items-center min-h-px min-w-px relative" data-name="transaction">
      <IconBg3 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TransactionData3 />
      </div>
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13.569px] not-italic relative shrink-0 text-[#333] text-[9.05px] text-right whitespace-nowrap">-11,50 €</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[9.046px] h-[22.615px] items-center relative shrink-0 w-full" data-name="content">
      <Transaction3 />
      <Amount3 />
    </div>
  );
}

function MovementList1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.565px] items-start relative shrink-0 w-full" data-name="movement list">
      <div className="bg-white content-stretch flex gap-[5.654px] items-center pb-[2.261px] pt-[4.523px] px-[4.523px] relative rounded-[4px] shrink-0 w-[283.816px]" data-name="Header">
        <p className="flex-[1_0_0] font-['Gabarito:Regular',sans-serif] font-normal leading-[11.873px] min-h-px min-w-px relative text-[#333] text-[7.92px]">14 Noviembre</p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[9.046px] items-start pt-[9.046px] px-[4.523px] relative shrink-0 w-[283.816px]" data-name="List">
        <Content2 />
        <div className="h-0 relative shrink-0 w-full" data-name="separator">
          <div className="absolute inset-[-0.28px_-0.15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.336 0.565371">
              <path d="M0.282686 0.282686H275.053" id="separator" stroke="var(--stroke-0, #F1F3F5)" strokeLinecap="round" strokeWidth="0.565371" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[9.046px] items-start px-[4.523px] py-[9.046px] relative shrink-0 w-[283.816px]" data-name="List">
        <Content3 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="bg-white relative rounded-[9.046px] shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[9.046px] items-start p-[9.046px] relative w-full">
        <div className="content-center flex flex-wrap gap-y-[4.5229692459106445px] items-center justify-between relative shrink-0 w-[283.816px]" data-name="Header - Movement">
          <Title1 />
        </div>
        <MovementList />
        <MovementList1 />
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="bg-white relative rounded-[9.046px] shrink-0 w-full" data-name="card content">
      <div aria-hidden="true" className="absolute border-[#f1f3f5] border-[0.565px] border-solid inset-0 pointer-events-none rounded-[9.046px]" />
      <div className="content-stretch flex flex-col items-start p-[9.046px] relative w-full">
        <List />
      </div>
    </div>
  );
}

function BodyContent() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[9.046px] items-start left-[calc(50%-0.46px)] top-[77.5px] w-[320px]" data-name="body content">
      <HeaderContent />
      <ButtonsSection />
      <CardContent />
      <CardContent1 />
    </div>
  );
}

function Chevron() {
  return (
    <div className="absolute left-0 size-[12.263px] top-0" data-name="chevron">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.263 12.263">
        <g id="chevron">
          <path d={svgPaths.p31677780} id="Triangle" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.37958" />
        </g>
      </svg>
    </div>
  );
}

function DashboardListDetail() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f9fa] border-[#f8f9fa] border-[0.833px] border-solid h-[500px] left-[calc(50%-47.54px)] overflow-clip rounded-[6.667px] shadow-[0px_3.333px_46.667px_0px_rgba(0,0,0,0.04)] top-1/2 w-[735.778px]" data-name="Dashboard - List - Detail">
      <BodyContent />
      <div className="absolute bg-white content-stretch flex items-center justify-between left-[-0.83px] px-[24px] py-[12.263px] shadow-[0px_2.044px_8.175px_0px_rgba(0,0,0,0.08)] top-[-0.83px] w-[735.778px]" data-name="header">
        <div className="h-[20.438px] relative shrink-0 w-[76.768px]" data-name="Logo N Black">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76.7682 20.4383">
            <g clipPath="url(#clip0_43_5062)" id="Group 8">
              <path d={svgPaths.p23dc7c80} fill="var(--fill-0, #212529)" id="Neom Logo" />
            </g>
            <defs>
              <clipPath id="clip0_43_5062">
                <rect fill="white" height="20.4383" width="76.7682" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="bg-white content-stretch flex gap-[4.088px] items-center justify-center px-[8.175px] py-[4.088px] relative rounded-[50px] shrink-0" data-name="Dropdown button / Web">
          <div aria-hidden="true" className="absolute border-[#dee2e6] border-[0.511px] border-solid inset-0 pointer-events-none rounded-[50px]" />
          <div className="relative shrink-0 size-[12.263px]" data-name="B&W icons">
            <div className="absolute inset-[12.5%_20%]" data-name="_user">
              <div className="absolute inset-[60%_0_0_0]" data-name="__user-body">
                <div className="absolute inset-[0.02%_0_0_0]" data-name="Rectangle">
                  <div className="absolute inset-[1.72%_-4.17%_-8.34%_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.97093 3.92133">
                      <path d={svgPaths.p3f0d5600} fill="var(--fill-0, #343A40)" id="Rectangle" stroke="var(--stroke-0, #343A40)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="0.613149" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-[0_18.75%_46.67%_18.75%]" data-name="__person-head">
                <div className="absolute flex inset-0 items-center justify-center">
                  <div className="-scale-y-100 flex-none h-[4.905px] w-[4.599px]">
                    <div className="relative size-full" data-name="Polygon">
                      <div className="absolute inset-[-1.07%_-1.96%_-1.3%_-1.96%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.77932 5.02131">
                          <path d={svgPaths.pb785480} fill="var(--fill-0, #343A40)" id="Polygon" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.613149" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[12.263px] relative shrink-0 text-[#343a40] text-[8.18px] whitespace-nowrap">Nombre usuario</p>
          <div className="overflow-clip relative shrink-0 size-[12.263px]" data-name="B&W icons">
            <Chevron />
          </div>
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="-translate-y-1/2 absolute h-[26.423px] left-0 right-[64.25%] top-1/2" data-name="Time">
      <p className="absolute font-['SF_Pro_Text:Bold',sans-serif] inset-[33.96%_36.71%_25.3%_36.96%] leading-[5.268px] not-italic text-[4.07px] text-black text-center whitespace-nowrap">9:41</p>
    </div>
  );
}

function Battery() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[33.33%] contents left-[calc(50%+11.95px)] top-[42.59%]" data-name="Battery">
      <div className="-translate-x-1/2 absolute border-[0.489px] border-black border-solid bottom-[33.33%] left-[calc(50%+11.38px)] opacity-35 rounded-[4.3px] top-[42.59%] w-[12.233px]" data-name="Border" />
      <div className="-translate-x-1/2 absolute bottom-[41.01%] left-[calc(50%+18.31px)] top-[51.45%] w-[0.65px]" data-name="Cap">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.649836 1.99421">
          <path d={svgPaths.p1645c800} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-black bottom-[37.04%] left-[calc(50%+11.38px)] rounded-[2.5px] top-[46.3%] w-[10.276px]" data-name="Capacity" />
    </div>
  );
}

function Levels() {
  return (
    <div className="-translate-y-1/2 absolute h-[26.423px] left-[64.25%] right-0 top-1/2" data-name="Levels">
      <Battery />
      <div className="-translate-x-1/2 absolute bottom-[33.4%] left-[calc(50%-2.44px)] top-[43.77%] w-[8.388px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.38776 6.03249">
          <path clipRule="evenodd" d={svgPaths.pc036a00} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[33.77%] left-[calc(50%-15px)] top-[43.58%] w-[9.395px]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.39495 5.98263">
          <path clipRule="evenodd" d={svgPaths.p1dba4980} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
    </div>
  );
}

function TitleAndControls() {
  return (
    <div className="h-[21.53px] relative shrink-0 w-full" data-name="Title and Controls">
      <p className="absolute bottom-1/4 font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[10.765px] left-[45.29%] right-[45.04%] text-[8.32px] text-black text-center top-1/4 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mi tarjeta
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-[-0.83px] top-[-0.83px]" data-name="Header">
      <div className="absolute h-[26.423px] right-0 top-0 w-[192.303px]" data-name="Status Bar - iPhone">
        <Time />
        <Levels />
      </div>
      <div className="absolute backdrop-blur-[12.233px] content-stretch flex flex-col items-center left-0 top-[26.42px] w-[192.303px]" data-name="Navigation Bar - iPad - Multitasking (Compact Size Class)">
        <TitleAndControls />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_0.13%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.7732 9.7864">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p2d43fc00} fill="var(--fill-0, #868E96)" fillRule="evenodd" id="Rectangle" />
          <path clipRule="evenodd" d={svgPaths.p18115b00} fill="var(--fill-0, #868E96)" fillRule="evenodd" id="Rectangle-Copy" />
        </g>
      </svg>
    </div>
  );
}

function Artboard1() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Artboard">
      <Group1 />
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Page-1">
      <Artboard1 />
    </div>
  );
}

function Tab() {
  return (
    <div className="h-[19.573px] relative shrink-0 w-[23.487px]" data-name="Tab 1">
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] inset-[70%_-13.54%_-10%_-15.63%] leading-[normal] text-[#868e96] text-[6.36px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mi cuenta
      </p>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.16px)] size-[11.744px] top-0" data-name="B&W icons">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[9.786px] top-1/2" data-name="Neom Logo">
          <Page1 />
        </div>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="h-[19.573px] relative shrink-0 w-[23.487px]" data-name="Tab 4">
      <p className="absolute font-['SF_Pro:Medium',sans-serif] font-[510] inset-[70%_-13.54%_-10%_-15.63%] leading-[normal] text-[#6140ec] text-[6.36px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mi Tarjeta
      </p>
      <div className="-translate-x-1/2 absolute left-[calc(50%+0.16px)] size-[11.744px] top-0" data-name="B&W icons">
        <div className="absolute left-0 size-[11.744px] top-0" data-name="credit-card">
          <div className="absolute inset-[20%_10%]" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.39495 7.04621">
              <g id="Subtract">
                <path d={svgPaths.p23e51d00} fill="var(--fill-0, #6140EC)" />
                <path clipRule="evenodd" d={svgPaths.p20c1a900} fill="var(--fill-0, #6140EC)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabBarButtons() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-0 px-[32.131px] right-[-0.49px] top-[3.43px]" data-name="Tab Bar Buttons">
      <Tab />
      <Tab1 />
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute bottom-[-0.83px] contents left-[-0.83px]" data-name="tab bar">
      <div className="absolute bottom-[11.74px] h-[10.276px] left-0 w-[192.303px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[3.91px] flex h-[2.447px] items-center justify-center left-1/2 w-[68.016px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-black h-[2.447px] rounded-[100px] w-[68.016px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 h-[40.614px] left-0 shadow-[0px_-0.161px_0px_0px_rgba(0,0,0,0.3)] w-[192.303px]" data-name="Tab Bar - iPhone">
        <div aria-hidden="true" className="absolute backdrop-blur-[12.233px] bg-[rgba(255,255,255,0.75)] inset-0 mix-blend-hard-light pointer-events-none" />
        <div className="absolute bottom-0 h-[10.276px] left-0 w-[192.303px]" data-name="Home Indicator">
          <div className="-translate-x-1/2 absolute bottom-[3.91px] flex h-[2.447px] items-center justify-center left-1/2 w-[68.016px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="bg-black h-[2.447px] rounded-[100px] w-[68.016px]" data-name="Home Indicator" />
            </div>
          </div>
        </div>
        <TabBarButtons />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[0_0.13%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107.017 104.715">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p283a5200} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle" />
          <path clipRule="evenodd" d={svgPaths.p163f7680} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle-Copy" />
        </g>
      </svg>
    </div>
  );
}

function Artboard2() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Artboard">
      <Group2 />
    </div>
  );
}

function Page2() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Page-1">
      <Artboard2 />
    </div>
  );
}

function NeomLogo() {
  return (
    <div className="-translate-y-1/2 absolute h-[104.715px] left-[0.98px] opacity-4 overflow-clip top-[calc(50%+0.02px)] w-[107.161px]" data-name="Neom Logo">
      <Page2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0_0.13%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0804 17.6155">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p1178f700} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle" />
          <path clipRule="evenodd" d={svgPaths.p29ab7900} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle-Copy" />
        </g>
      </svg>
    </div>
  );
}

function Artboard3() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Artboard">
      <Group3 />
    </div>
  );
}

function Page3() {
  return (
    <div className="absolute contents inset-[0_0.13%_0_0]" data-name="Page-1">
      <Artboard3 />
    </div>
  );
}

function NeomLogo1() {
  return (
    <div className="absolute bottom-[12.13px] h-[17.616px] overflow-clip right-[11.74px] w-[18.105px]" data-name="Neom Logo">
      <Page3 />
    </div>
  );
}

function Group13() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+67.53px)] top-[76.89px]">
      <NeomLogo1 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute backdrop-blur-[5.872px] h-[106.638px] left-0 rounded-[15px] top-0 w-[176.645px]" />
      <NeomLogo />
      <Group13 />
    </div>
  );
}

function Settings() {
  return (
    <div className="absolute backdrop-blur-[0.979px] bg-[rgba(0,0,0,0.08)] content-stretch flex items-center p-[3.915px] right-[7.83px] rounded-[32px] top-[7.83px]" data-name="Settings">
      <div className="overflow-clip relative shrink-0 size-[11.744px]" data-name="B&W icons">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.7437 11.7437">
          <g id="cog-1">
            <path d={svgPaths.p1af18c00} fill="var(--fill-0, white)" id="Subtract" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents right-[7.83px] top-[7.83px]">
      <Settings />
    </div>
  );
}

function ShowHideButton() {
  return (
    <div className="absolute backdrop-blur-[0.979px] bg-[rgba(0,0,0,0.08)] content-stretch flex gap-[1.957px] items-center left-[7.83px] p-[3.915px] rounded-[8px] top-[7.9px]" data-name="Show / Hide button">
      <div className="overflow-clip relative shrink-0 size-[11.744px]" data-name="B&W icons">
        <div className="absolute left-0 size-[11.744px] top-0" data-name="eye">
          <div className="absolute bottom-[25.66%] left-[11.25%] right-[11.21%] top-1/4" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.10576 5.79457">
              <g id="Subtract">
                <path d={svgPaths.p30d1b980} fill="var(--fill-0, white)" />
                <path clipRule="evenodd" d={svgPaths.p3bf2040} fill="var(--fill-0, white)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Gabarito:Regular',sans-serif] font-normal justify-end leading-[0] relative shrink-0 text-[6.85px] text-white whitespace-nowrap">
        <p className="leading-[10.276px]">Mostrar datos</p>
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[7.83px] top-[7.9px]">
      <ShowHideButton />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[24.79%_9.81%_40.78%_9.05%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7056 5.39088">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p29a1f200} fill="var(--fill-0, #FFB003)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[19.73%_4.96%_37.29%_4.96%]" data-name="Group">
      <div className="absolute inset-[19.73%_4.96%_37.29%_4.96%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle} />
        </div>
      </div>
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[32.17%_9.81%_33.41%_9.05%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7056 5.39088">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.pe32cbf0} fill="var(--fill-0, #40C740)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[27.17%_4.96%_29.86%_4.96%]" data-name="Group">
      <div className="absolute inset-[27.17%_4.96%_29.86%_4.96%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
        </div>
      </div>
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[39.54%_9.81%_26.03%_9.05%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7056 5.39088">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p15d56a80} fill="var(--fill-0, #F26D5F)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[34.61%_4.96%_22.42%_4.96%]" data-name="Group">
      <div className="absolute inset-[34.61%_4.96%_22.42%_4.96%]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle2} />
        </div>
      </div>
      <Group10 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute inset-[46.92%_4.89%_18.65%_4.13%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2456 5.3898">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p28941200} fill="var(--fill-0, #DEDBCE)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents inset-[41.22%_0_14.98%_0]" data-name="Group">
      <div className="absolute inset-[41.22%_0_14.98%_0]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle3} />
        </div>
      </div>
      <Group12 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[12.5%_0_14.98%_0]" data-name="Group">
      <div className="absolute inset-[16.5%_8.93%_25.72%_8.08%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9941 9.0477">
          <path d={svgPaths.p356558f0} fill="var(--fill-0, #DEDBCE)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.42%_9.81%_48.16%_9.04%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7056 5.39034">
          <path d={svgPaths.p33e97400} fill="var(--fill-0, #40A5D9)" id="Vector" />
        </svg>
      </div>
      <Group5 />
      <Group7 />
      <Group9 />
      <div className="absolute inset-[12.5%_4.9%_49.38%_4.13%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2456 5.9689">
          <path clipRule="evenodd" d={svgPaths.p86a800} fill="var(--fill-0, #D9D6CC)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <Group11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[3.915px] items-center relative shrink-0">
      <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[11.744px] relative shrink-0 text-[#333] text-[7.83px] whitespace-nowrap">Tarjeta activa</p>
      <div className="relative shrink-0 size-[11.744px]" data-name="B&W icons">
        <div className="absolute inset-[14.58%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.31844 8.31844">
            <path clipRule="evenodd" d={svgPaths.p1e304e00} fill="var(--fill-0, #ADB5BD)" fillRule="evenodd" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex gap-[7.829px] items-center relative shrink-0" data-name="Option">
      <Frame3 />
    </div>
  );
}

function Knob() {
  return <div className="-translate-y-1/2 absolute bg-white right-[0.98px] rounded-[100px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.04),0px_1.468px_3.915px_0px_rgba(0,0,0,0.15),0px_1.468px_0.489px_0px_rgba(0,0,0,0.06)] size-[13.212px] top-1/2" data-name="Knob" />;
}

function CreditCard() {
  return (
    <div className="content-stretch flex flex-col gap-[7.829px] items-center relative shrink-0 w-full" data-name="Credit card">
      <div className="bg-gradient-to-t from-[#795bf9] h-[106.638px] overflow-clip relative rounded-[16px] shrink-0 to-[#7a86f4] w-[176.645px]" data-name="Credit Card">
        <Group14 />
        <Group16 />
        <Group17 />
      </div>
      <div className="bg-[#333] content-stretch flex gap-[3.915px] items-center justify-center px-[11.744px] py-[5.872px] relative rounded-[30px] shrink-0 w-[176.645px]" data-name="Button / Primary Icons">
        <div className="relative shrink-0 size-[7.662px]" data-name="Color icons">
          <Group4 />
        </div>
        <p className="font-['Gabarito:SemiBold',sans-serif] font-semibold leading-[11.744px] relative shrink-0 text-[7.83px] text-white whitespace-nowrap">Añadir a Cartera</p>
      </div>
      <div className="bg-white content-stretch flex items-center justify-between p-[7.829px] relative rounded-[16px] shrink-0 w-[176.645px]" data-name="Settings">
        <Option />
        <div className="bg-[#30d158] h-[15.169px] overflow-clip relative rounded-[100px] shrink-0 w-[24.955px]" data-name="Toggle [iOS]">
          <Knob />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[1.957px] h-[11.744px] items-center relative shrink-0">
      <p className="font-['Gabarito:Regular',sans-serif] font-normal leading-[11.744px] relative shrink-0 text-[#dee2e6] text-[7.83px] text-right whitespace-nowrap">Ver todos</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative" data-name="title">
      <p className="font-['Gabarito:SemiBold',sans-serif] font-semibold leading-[11.744px] relative shrink-0 text-[#212529] text-[7.83px] whitespace-nowrap">Últimos movimientos</p>
      <Frame4 />
    </div>
  );
}

function IconBg4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon + BG">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[19.573px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5728 19.5728">
          <circle cx="9.7864" cy="9.7864" fill="var(--fill-0, #F8F9FA)" id="Ellipse 3" r="9.7864" />
        </svg>
      </div>
      <div className="col-1 ml-[3.91px] mt-[3.91px] overflow-clip relative row-1 size-[11.744px]" data-name="Transaction icons">
        <div className="absolute inset-[20%_10%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.39453 7.0459">
            <path d={svgPaths.p23b8ac80} fill="var(--fill-0, #343A40)" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionData4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gabarito:Regular',sans-serif] font-normal h-full items-start min-h-px min-w-px relative text-ellipsis whitespace-nowrap" data-name="transaction data">
      <p className="leading-[11.744px] overflow-hidden relative shrink-0 text-[#333] text-[7.83px] w-full">Parking Nueva Condomina 89</p>
      <p className="flex-[1_0_0] leading-[10.276px] min-h-px min-w-px overflow-hidden relative text-[#868e96] text-[6.85px] w-full">Tipo de transacción</p>
    </div>
  );
}

function Transaction4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7.829px] items-center min-h-px min-w-px relative" data-name="transaction">
      <IconBg4 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TransactionData4 />
      </div>
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[11.744px] not-italic relative shrink-0 text-[#333] text-[7.83px] text-right whitespace-nowrap">-16,50 €</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[7.829px] h-[19.573px] items-center relative shrink-0 w-full" data-name="content">
      <Transaction4 />
      <Amount4 />
    </div>
  );
}

function MovementList2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="movement list">
      <div className="bg-white content-stretch flex gap-[4.893px] items-center pb-[1.957px] pt-[3.915px] px-[3.915px] relative rounded-[4px] shrink-0 w-[160.986px]" data-name="List">
        <p className="flex-[1_0_0] font-['Gabarito:Regular',sans-serif] font-normal leading-[10.276px] min-h-px min-w-px relative text-[#333] text-[6.85px]">14 Noviembre</p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[7.829px] items-start pt-[7.829px] relative shrink-0 w-[160.986px]" data-name="List">
        <Content4 />
      </div>
    </div>
  );
}

function IconBg5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon + BG">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[19.573px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5728 19.5728">
          <circle cx="9.7864" cy="9.7864" fill="var(--fill-0, #F8F9FA)" id="Ellipse 3" r="9.7864" />
        </svg>
      </div>
      <div className="col-1 ml-[3.91px] mt-[3.91px] overflow-clip relative row-1 size-[11.744px]" data-name="Transaction icons">
        <div className="absolute inset-[20%_10%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.39453 7.0459">
            <path d={svgPaths.p23b8ac80} fill="var(--fill-0, #343A40)" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TransactionData5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Gabarito:Regular',sans-serif] font-normal h-full items-start min-h-px min-w-px relative text-ellipsis whitespace-nowrap" data-name="transaction data">
      <p className="leading-[11.744px] overflow-hidden relative shrink-0 text-[#333] text-[7.83px] w-full">Restaurante La Malaka-SL-87236453</p>
      <p className="flex-[1_0_0] leading-[10.276px] min-h-px min-w-px overflow-hidden relative text-[#868e96] text-[6.85px] w-full">Tipo de transacción</p>
    </div>
  );
}

function Transaction5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7.829px] items-center min-h-px min-w-px relative" data-name="transaction">
      <IconBg5 />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TransactionData5 />
      </div>
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="amount">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[11.744px] not-italic relative shrink-0 text-[#333] text-[7.83px] text-right whitespace-nowrap">-20,00 €</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[7.829px] h-[19.573px] items-center relative shrink-0 w-full" data-name="content">
      <Transaction5 />
      <Amount5 />
    </div>
  );
}

function MovementList3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="movement list">
      <div className="bg-white content-stretch flex gap-[4.893px] items-center pb-[1.957px] pt-[3.915px] px-[3.915px] relative rounded-[4px] shrink-0 w-[160.986px]" data-name="List">
        <p className="flex-[1_0_0] font-['Gabarito:Regular',sans-serif] font-normal leading-[10.276px] min-h-px min-w-px relative text-[#333] text-[6.85px]">13 Noviembre</p>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[7.829px] items-start pt-[7.829px] relative shrink-0 w-[160.986px]" data-name="List">
        <Content5 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="bg-white relative rounded-[7.829px] shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col gap-[7.829px] items-start p-[7.829px] relative w-full">
        <div className="content-center flex flex-wrap gap-y-[3.9145615100860596px] items-center justify-between relative shrink-0 w-[160.986px]" data-name="Header - Movement">
          <Title2 />
        </div>
        <MovementList2 />
        <MovementList3 />
      </div>
    </div>
  );
}

function BodyContent1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[7.829px] items-center left-1/2 top-[54.95px]" data-name="Body Content">
      <CreditCard />
      <List1 />
    </div>
  );
}

function MisTarjetasDashboardList() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f8f9fa] border-[#f8f9fa] border-[0.833px] border-solid h-[416.901px] left-[calc(50%+319.28px)] overflow-clip rounded-[6.667px] shadow-[0px_6.948px_41.69px_0px_rgba(0,0,0,0.08)] top-[calc(50%+0.45px)] w-[192.303px]" data-name="Mis tarjetas - Dashboard - List">
      <Header />
      <TabBar />
      <BodyContent1 />
    </div>
  );
}

export default function Ui() {
  return (
    <div className="relative size-full" data-name="UI">
      <DashboardListDetail />
      <MisTarjetasDashboardList />
    </div>
  );
}