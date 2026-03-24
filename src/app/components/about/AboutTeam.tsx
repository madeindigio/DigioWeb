import { useTranslation } from "react-i18next";
import { LangText } from "../LangText";
import { WebGLHoverImage } from "./WebGLHoverImage";

const memberKeys = ["juan", "javier", "jose", "pablo"] as const;
const advisorKeys = ["aguirre", "falgueras", "vivancos"] as const;

function MemberCard({
  memberKey,
  stagger,
}: {
  memberKey: string;
  stagger: number;
}) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      {/* Separator */}
      <div className="w-full h-[1px] bg-white/[0.24]" />

      {/* Photo */}
      <div className="w-full aspect-[330/410] bg-[#e5e1dc]/10 overflow-hidden relative mb-[8px]">
        <WebGLHoverImage
          src={`/images/${memberKey}.jpeg`}
          fallbackText={memberKey}
          alt={t(`pages.sobreDigio.team.members.${memberKey}.name`)}
          className="w-full h-full cursor-pointer"
        />
      </div>

      {/* Name & Role */}
      <div className="flex flex-col gap-[8px] text-[#e2dfda] w-full">
        <LangText as="p" stagger={stagger} className="font-['GT_Ultra_Median',sans-serif] font-[700] text-[20px] tracking-[-0.8px] leading-[normal]">
          {t(`pages.sobreDigio.team.members.${memberKey}.name`)}
        </LangText>
        <LangText as="p" stagger={stagger + 1} className="font-['GT_Ultra_Median',sans-serif] text-[14px] leading-[20px]">
          {t(`pages.sobreDigio.team.members.${memberKey}.role`)}
        </LangText>
      </div>

      {/* Description */}
      <LangText as="p" stagger={stagger + 2} className="font-['Manrope',sans-serif] font-[600] text-[#e2dfda] text-[16px] leading-[normal] max-md:text-[14px]">
        {t(`pages.sobreDigio.team.members.${memberKey}.desc`)}
      </LangText>
    </div>
  );
}

function AdvisorCard({
  advisorKey,
  stagger,
}: {
  advisorKey: string;
  stagger: number;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      {/* Separator */}
      <div className="w-full h-[1px] bg-white/[0.24]" />



      <LangText as="p" stagger={stagger} className="font-['GT_Ultra_Median',sans-serif] font-[700] text-[#e2dfda] text-[20px] tracking-[-0.8px] leading-[normal]">
        {t(`pages.sobreDigio.team.advisors.${advisorKey}.name`)}
      </LangText>

      <LangText as="p" stagger={stagger + 1} className="font-['Manrope',sans-serif] font-[600] text-[#e2dfda] text-[16px] leading-[normal] max-md:text-[14px]">
        {t(`pages.sobreDigio.team.advisors.${advisorKey}.desc`)}
      </LangText>
    </div>
  );
}

export function AboutTeam() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#583bff] w-full px-[56px] py-[100px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px]">
        <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
          {t("pages.sobreDigio.team.title")}
        </LangText>

        {/* Members row */}
        <div className="grid grid-cols-4 gap-[40px] w-full max-xl:gap-[24px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {memberKeys.map((key, idx) => (
            <MemberCard key={key} memberKey={key} stagger={1 + idx * 3} />
          ))}
        </div>

        {/* Advisors row */}
        <div className="grid grid-cols-3 gap-[40px] w-full max-xl:gap-[24px] max-lg:grid-cols-2 max-md:grid-cols-1 mt-[16px]">
          {advisorKeys.map((key, idx) => (
            <AdvisorCard key={key} advisorKey={key} stagger={13 + idx * 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
