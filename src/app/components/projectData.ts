import imgNm from "figma:asset/38015c2e2c4415a16cea0ceea3ff9541757288a4.png";
import imgRectangle3 from "figma:asset/2fbb29b05a2e172d48b3873c17f761d3c2317ef5.png";
import imgRectangle4 from "figma:asset/9df4b0260f9f37c4401ad84e556ad9e573c8702b.png";
import imgBgImg1 from "figma:asset/4372bc2c881ed32f89039f0e0dfa1bfa882f228a.png";
import imgRectangle5 from "figma:asset/a1910742e185dcdfa1bd4e5e8356e39259500eba.png";
import imgRectangle7 from "figma:asset/8ea4e58ef8895b1cc70f7cc7edb3e7033bf3c223.png";
import imgBgImg2 from "figma:asset/2214d58f15337db66ff6aba0f5e9cef891db63d8.png";
import imgRectangle8 from "figma:asset/703c1bbb0750e4d852aeb246e01ec3e480282103.png";
import imgVivla from "figma:asset/43cdb3e72f58cd88be954c02c14019a69bab0bb8.png";

export interface ProjectData {
  slug: string;
  i18nKey: string;
  image: string;
  tagBg?: string;
  layout: "full" | "half";
}

export const PROJECTS: ProjectData[] = [
  { slug: "nm", i18nKey: "nm", image: imgNm, layout: "full" },
  { slug: "roomonitor", i18nKey: "roomonitor", image: imgRectangle3, layout: "half" },
  { slug: "finsa", i18nKey: "finsa", image: imgRectangle4, layout: "half" },
  { slug: "symposium", i18nKey: "symposium", image: imgBgImg1, layout: "full", tagBg: "bg-[rgba(163,163,163,0.24)]" },
  { slug: "spock", i18nKey: "spock", image: imgRectangle5, layout: "half", tagBg: "bg-[rgba(146,146,146,0.24)]" },
  { slug: "idermapp", i18nKey: "idermapp", image: imgRectangle7, layout: "half" },
  { slug: "ivoox", i18nKey: "ivoox", image: imgBgImg2, layout: "full" },
  { slug: "navilens", i18nKey: "navilens", image: imgRectangle8, layout: "half" },
  { slug: "vivla", i18nKey: "vivla", image: imgVivla, layout: "half" },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}