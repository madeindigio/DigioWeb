export const imgEkhilurPlaceholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect width='1600' height='900' fill='%23e7e7e7'/%3E%3Crect x='80' y='80' width='1440' height='740' rx='24' fill='%23efefef' stroke='%23d8d8d8' stroke-width='8'/%3E%3C/svg%3E";
const imgEkhilurHeader = "/images/projects/ekhilur/ekhilur-hero-section.jpg";
const imgRoomonitorHeader = "/images/projects/roomonitor/Roomheadersection.jpg";
const imgFinsaHeader = "/images/projects/finsa/finsa-bg-hero.jpg";
const imgSpockHeader = "/images/projects/spock/spock-hero-img.jpg";
const imgIvooxHeader = "/images/projects/ivoox/ivoox-hero-section.jpg";
const imgNavilensHeader = "/images/projects/navilens/navilens-hero-section.jpg";
const imgVivlaHeader = "/images/projects/vivla/vivla-hero-section.jpg";

const imgSymposiumHeader = "/images/projects/symposium/Big SYM IMG section.jpg";
const imgIdermappHeader = "/images/projects/idermapp/iDermApp hero section IMG.jpg";

export interface ProjectData {
  slug: string;
  i18nKey: string;
  image: string;
  tagBg?: string;
  layout: "full" | "half";
}

export const PROJECTS: ProjectData[] = [
  { slug: "ekhilur", i18nKey: "ekhilur", image: imgEkhilurHeader, layout: "full", tagBg: "bg-[rgba(25,30,37,0.18)]" },
  { slug: "roomonitor", i18nKey: "roomonitor", image: imgRoomonitorHeader, layout: "half" },
  { slug: "finsa", i18nKey: "finsa", image: imgFinsaHeader, layout: "half" },
  { slug: "symposium", i18nKey: "symposium", image: imgSymposiumHeader, layout: "full", tagBg: "bg-[rgba(163,163,163,0.24)]" },
  { slug: "spock", i18nKey: "spock", image: imgSpockHeader, layout: "half", tagBg: "bg-[rgba(146,146,146,0.24)]" },
  { slug: "idermapp", i18nKey: "idermapp", image: imgIdermappHeader, layout: "half" },
  { slug: "ivoox", i18nKey: "ivoox", image: imgIvooxHeader, layout: "full" },
  { slug: "navilens", i18nKey: "navilens", image: imgNavilensHeader, layout: "half" },
  { slug: "vivla", i18nKey: "vivla", image: imgVivlaHeader, layout: "half" },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug) ?? null;
}