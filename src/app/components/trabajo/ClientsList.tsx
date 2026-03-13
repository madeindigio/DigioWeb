import { useTranslation } from "react-i18next";
import { type ReactNode } from "react";
import {
  LogoMijngeldzaken,
  LogoLevler,
  LogoCreditoh,
  LogoVolkswagen,
  LogoSpock,
  LogoSoltec,
  LogoTurningTables,
  LogoPccom,
  LogoElCorteIngles,
  LogoNektria,
} from "./ClientLogos";

/* ─── Client data keys (mapped to i18n) ─── */
const CLIENT_KEYS = [
  "mijngeldzaken",
  "levler",
  "creditoh",
  "volkswagen",
  "spock",
  "soltec",
  "turningtables",
  "pccom",
  "elcorteingles",
  "nektria",
] as const;

/* ─── Logo components keyed by client ─── */
const LOGOS: Record<string, () => ReactNode> = {
  mijngeldzaken: LogoMijngeldzaken,
  levler: LogoLevler,
  creditoh: LogoCreditoh,
  volkswagen: LogoVolkswagen,
  spock: LogoSpock,
  soltec: LogoSoltec,
  turningtables: LogoTurningTables,
  pccom: LogoPccom,
  elcorteingles: LogoElCorteIngles,
  nektria: LogoNektria,
};

/* ─── Single client card ─── */
function ClientCard({
  clientKey,
  isLast,
}: {
  clientKey: string;
  isLast: boolean;
}) {
  const { t } = useTranslation();
  const LogoComponent = LOGOS[clientKey];
  const desc = t(`pages.trabajo.clients.${clientKey}.desc`);
  const services = t(`pages.trabajo.clients.${clientKey}.services`, {
    returnObjects: true,
  }) as string[];

  return (
    <div className="w-full">
      {/* Top separator */}
      <div className="w-full h-[1px] bg-[#e2dfda]" />

      {/* Card content */}
      <div className="w-full transition-colors duration-300 hover:bg-[#f6f5f3] pt-[48px] pb-[40px] max-md:pt-[32px] max-md:pb-[28px] px-[56px] max-md:px-[24px]">
        <div className="max-w-[1400px] mx-auto flex gap-[40px] items-start max-lg:flex-col max-lg:gap-[24px]">
          {/* Logo */}
          <div className="flex flex-col h-[40px] items-start shrink-0 w-[180px] max-md:w-[140px]">
            <div className="flex items-start shrink-0">
              {LogoComponent && <LogoComponent />}
            </div>
          </div>

          {/* Description */}
          <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[normal] w-[700px] shrink-0 max-lg:w-full max-lg:max-w-[700px] max-md:text-[14px]">
            {desc}
          </p>

          {/* Services */}
          <div className="flex flex-col gap-[8px] flex-1 min-w-[180px] max-lg:min-w-0">
            {Array.isArray(services) &&
              services.map((service: string) => (
                <p
                  key={service}
                  className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[normal] max-md:text-[14px]"
                >
                  {service}
                </p>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom separator (only for last item) */}
      {isLast && <div className="w-full h-[1px] bg-[#e2dfda]" />}
    </div>
  );
}

/* ─── Clients list section ─── */
export function ClientsList() {
  return (
    <section className="bg-white w-full pb-[120px] max-md:pb-[64px]">
      <div className="w-full flex flex-col">
        {CLIENT_KEYS.map((key, i) => (
          <ClientCard
            key={key}
            clientKey={key}
            isLast={i === CLIENT_KEYS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}