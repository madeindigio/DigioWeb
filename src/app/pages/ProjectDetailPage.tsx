import { lazy } from "react";
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { getProjectBySlug } from "../components/projectData";
import { ContactSection } from "../components/ContactSection";
import { SEOHead, breadcrumbJsonLd, projectJsonLd } from "../components/SEOHead";
import {
  RevealAfterTransition,
  ScrollRevealSection,
} from "../components/project-detail-shared";

const ProjectDetailRoomonitor = lazy(() => import("./ProjectDetailRoomonitor").then((m) => ({ default: m.ProjectDetailRoomonitor })));
const ProjectDetailFinsa = lazy(() => import("./ProjectDetailFinsa").then((m) => ({ default: m.ProjectDetailFinsa })));
const ProjectDetailSymposium = lazy(() => import("./ProjectDetailSymposium").then((m) => ({ default: m.ProjectDetailSymposium })));
const ProjectDetailSpock = lazy(() => import("./ProjectDetailSpock").then((m) => ({ default: m.ProjectDetailSpock })));
const ProjectDetailIVoox = lazy(() => import("./ProjectDetailIVoox").then((m) => ({ default: m.ProjectDetailIVoox })));
const ProjectDetailIDermApp = lazy(() => import("./ProjectDetailIDermApp").then((m) => ({ default: m.ProjectDetailIDermApp })));
const ProjectDetailNavilens = lazy(() => import("./ProjectDetailNavilens").then((m) => ({ default: m.ProjectDetailNavilens })));
const ProjectDetailVivla = lazy(() => import("./ProjectDetailVivla").then((m) => ({ default: m.ProjectDetailVivla })));
const ProjectDetailEkhilur = lazy(() => import("./ProjectDetailEkhilur").then((m) => ({ default: m.ProjectDetailEkhilur })));

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  /* Ekhilur has its own dedicated page */
  if (slug === "ekhilur") {
    return <ProjectDetailEkhilur />;
  }

  if (slug === "nm") {
    return (
      <>
        <SEOHead title="Proyecto no disponible" description="Este proyecto está deprecado." noSuffix noIndex />
        <div className="w-full min-h-screen flex items-center justify-center">
          <p className="text-[24px] font-['GT_Ultra_Median',sans-serif] text-[#191e25]">
            Proyecto no encontrado
          </p>
        </div>
      </>
    );
  }

  /* Roomonitor has its own dedicated page */
  if (slug === "roomonitor") {
    return <ProjectDetailRoomonitor />;
  }

  /* Finsa has its own dedicated page */
  if (slug === "finsa") {
    return <ProjectDetailFinsa />;
  }

  /* Symposium has its own dedicated page */
  if (slug === "symposium") {
    return <ProjectDetailSymposium />;
  }

  /* Spock has its own dedicated page */
  if (slug === "spock") {
    return <ProjectDetailSpock />;
  }

  /* IVoox has its own dedicated page */
  if (slug === "ivoox") {
    return <ProjectDetailIVoox />;
  }

  /* IDermApp has its own dedicated page */
  if (slug === "idermapp") {
    return <ProjectDetailIDermApp />;
  }

  /* Navilens has its own dedicated page */
  if (slug === "navilens") {
    return <ProjectDetailNavilens />;
  }

  /* Vivla has its own dedicated page */
  if (slug === "vivla") {
    return <ProjectDetailVivla />;
  }

  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-[24px] font-['GT_Ultra_Median',sans-serif] text-[#191e25]">
          Proyecto no encontrado
        </p>
      </div>
    );
  }

  const tag = t(`work.projects.${project.i18nKey}.tag`);
  const name = t(`work.projects.${project.i18nKey}.name`);
  const description = t(`work.projects.${project.i18nKey}.description`);

  return (
    <>
      <SEOHead
        title={name}
        description={description}
        canonicalPath={`/proyecto/${project.slug}`}
        ogType="article"
        ogImage={project.image}
        jsonLd={[
          breadcrumbJsonLd([
            { name: t("seo.home.title"), path: "/" },
            { name: t("seo.trabajo.title"), path: "/trabajo" },
            { name, path: `/proyecto/${project.slug}` },
          ]),
          projectJsonLd({
            name,
            description,
            url: `https://digio.es/proyecto/${project.slug}`,
            image: project.image,
          }),
        ]}
      />

      {/* ── Hero — clean image, fixed height ── */}
      <section className="relative w-full h-[70vh] max-md:h-[360px]">
        <div className="absolute inset-0 bg-[#d8d8d8]" />
        {project.image && (
          <img
            alt={name}
            className="absolute inset-0 w-full h-full object-cover"
            src={project.image}
          />
        )}
      </section>

      {/* ── Intro — 3 column layout ── */}
      <RevealAfterTransition delay={0.05}>
        <section className="bg-white w-full">
          <div className="px-[56px] py-[120px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
            <div className="max-w-[1400px] mx-auto flex items-start justify-between gap-[40px] max-lg:flex-col max-lg:gap-[32px]">
              {/* Col 1: Project name */}
              <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[40px] tracking-[-1.6px] leading-[48px] shrink-0 max-lg:w-auto max-md:text-[28px] max-md:leading-[36px]">
                {name}
              </p>
              {/* Col 2: Description */}
              <div className="flex flex-col gap-[16px] w-[550px] max-lg:w-full shrink-0 max-lg:shrink">
                <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                  {description}
                </p>
              </div>
              {/* Col 3: Services / Tag */}
              <div className="flex flex-col gap-[16px] w-[264px] max-lg:w-full shrink-0 max-lg:shrink">
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[normal] font-[700]">
                  {t("pages.proyecto.servicesLabel", "SERVICIOS")}
                </p>
                <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[14px] leading-[20px]">
                  {tag}
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealAfterTransition>

      {/* ── Additional content ── */}
      <RevealAfterTransition delay={0.18}>
        <section className="bg-white w-full">
          <div className="px-[56px] pb-[120px] max-lg:pb-[80px] max-md:px-[24px] max-md:pb-[48px]">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-[80px] max-md:gap-[48px]">
              {/* Repeated hero image as content block */}
              {project.image && (
                <div className="w-full h-[500px] max-lg:h-[350px] max-md:h-[250px] relative overflow-hidden">
                  <img alt={name} className="absolute inset-0 w-full h-full object-cover" src={project.image} />
                </div>
              )}

              {/* Challenge & Solution */}
              <div className="flex gap-[56px] items-start max-md:flex-col max-md:gap-[40px]">
                <div className="flex-1 flex flex-col gap-[24px] min-w-0">
                  <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                    {t("pages.proyecto.challengeTitle")}
                  </p>
                  <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                    {t("pages.proyecto.challengeBody")}
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-[24px] min-w-0">
                  <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
                    {t("pages.proyecto.solutionTitle")}
                  </p>
                  <p className="font-['Manrope',sans-serif] text-[#191e25] text-[16px] leading-[normal]">
                    {t("pages.proyecto.solutionBody")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealAfterTransition>

      <ScrollRevealSection><ContactSection /></ScrollRevealSection>
    </>
  );
}