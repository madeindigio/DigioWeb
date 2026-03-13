import { useTranslation } from "react-i18next";
import { LangText } from "../LangText";

const categoryKeys = ["design", "webMobile", "cloud", "qa", "delivery", "consulting"] as const;

function ServiceBlock({ categoryKey, staggerBase }: { categoryKey: string; staggerBase: number }) {
  const { t } = useTranslation();
  const items = t(`services.categories.${categoryKey}.items`, { returnObjects: true }) as string[];
  return (
    <div className="flex flex-col gap-[16px] items-start w-full">
      <div className="w-full h-[1px] bg-white/[0.24]" />
      <div className="flex flex-col gap-[24px] text-[#e2dfda] w-full">
        <LangText as="p" stagger={staggerBase} className="font-['GT_Ultra_Median',sans-serif] font-[700] text-[20px] tracking-[-0.8px] leading-[normal] max-md:text-[16px]">
          {t(`services.categories.${categoryKey}.title`)}
        </LangText>
        <div className="flex flex-col gap-[8px] font-['GT_Ultra_Median',sans-serif] text-[14px] leading-[20px] max-md:text-[13px]">
          {items.map((item, i) => (
            <LangText as="p" key={i} stagger={staggerBase + 1 + i}>
              {item}
            </LangText>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutServices() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#191e25] w-full px-[56px] py-[100px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[48px]">
        <LangText as="p" stagger={0} className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]">
          {t("services.title")}
        </LangText>

        {/* Row 1: Design, Web/Mobile, Cloud */}
        <div className="grid grid-cols-3 gap-[43px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[32px]">
          {categoryKeys.slice(0, 3).map((key, i) => (
            <ServiceBlock key={key} categoryKey={key} staggerBase={1 + i * 7} />
          ))}
        </div>

        {/* Row 2: QA, Delivery, Consulting */}
        <div className="grid grid-cols-3 gap-[43px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-[32px]">
          {categoryKeys.slice(3, 6).map((key, i) => (
            <ServiceBlock key={key} categoryKey={key} staggerBase={22 + i * 7} />
          ))}
        </div>
      </div>
    </section>
  );
}
