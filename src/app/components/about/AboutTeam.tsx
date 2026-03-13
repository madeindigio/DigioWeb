import imgImg from "figma:asset/4472aa2ce5e749af973dbbee422f2fc2c8595a83.png";
import { useTranslation } from "react-i18next";
import { LangText } from "../LangText";

const memberKeys = ["juan", "javier", "jose", "pablo"] as const;
const advisorKeys = ["aguirre", "falgueras", "vivancos"] as const;

/* Member photos: only Javier has a real photo from the Figma import */
const memberPhotos: Record<string, string | null> = {
  juan: null,
  javier: imgImg,
  jose: null,
  pablo: null,
};

function MemberCard({
  memberKey,
  stagger,
  showPhoto = true,
}: {
  memberKey: string;
  stagger: number;
  showPhoto?: boolean;
}) {
  const { t } = useTranslation();
  const photo = memberPhotos[memberKey];

  return (
    <div className="flex flex-col gap-[16px] items-start w-[270px] max-md:w-full">
      {/* Separator */}
      <div className="w-full h-[1px] bg-white/[0.24]" />

      {/* Photo placeholder */}
      {showPhoto && (
        <div className="h-[220px] w-[180px] relative shrink-0 max-md:h-[180px] max-md:w-[150px]">
          {photo ? (
            <>
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={photo} />
              <div className="absolute inset-0 bg-black mix-blend-color" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-[#e2dfda]" />
              <div className="absolute inset-0 bg-black mix-blend-color" />
            </>
          )}
        </div>
      )}

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
    <div className="flex flex-col gap-[16px] items-start w-[270px] max-md:w-full">
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
        <div className="flex gap-[40px] flex-wrap max-md:flex-col max-md:gap-[32px]">
          {memberKeys.map((key, idx) => (
            <MemberCard key={key} memberKey={key} stagger={1 + idx * 3} />
          ))}
        </div>

        {/* Advisors row */}
        <div className="flex gap-[40px] flex-wrap max-md:flex-col max-md:gap-[32px] mt-[16px]">
          {advisorKeys.map((key, idx) => (
            <AdvisorCard key={key} advisorKey={key} stagger={13 + idx * 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
