import { useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";
import { getRelatedPosts, getPostDetailUrl } from "../components/blogData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { resizeSmoothScroll } from "../components/SmoothScrollProvider";

/* ─── Figma assets ─── */
import imgPortada from "figma:asset/8da87fe55774d4cd8a422bdb522d7629961cc2a3.png";
import imgContainer from "figma:asset/d8de8c187502780b50bd628257d612bef413b890.png";
import imgTransformation from "figma:asset/70480ee5328b06319e8915c57b84e5b3d67d6821.png";
import imgMobileHome from "figma:asset/4db3f3354af971eb1431eaace159c557ca6ea236.png";
import imgScrollInsta from "figma:asset/cd677e7b5265f0e81fdc515619be1204d3b55163.png";
import imgColorPalette from "figma:asset/507d8bc7edfab7f5e4c4a01dc11b7c2fe22a525c.png";
import imgAvatarCeroUno from "figma:asset/af4deaf57ad05fe129e694f76e61856cd65546fa.png";
import imgAvatar from "figma:asset/f29add34d3270b3517aa70e68d3391e0435c60a1.png";
import imgIpadCeroUno from "figma:asset/0182a37521e72aa65b314e3bdfc3483c9f0075a0.png";
import imgDigioOoh from "figma:asset/4ea9bf490e9f376a1bd3e3afb763cc442b12578d.png";
import imgIconSetAnimation from "figma:asset/4d1d33c96be7e75572bf8ac55c1e87f38b2b345a.png";
import imgIconLibrary from "figma:asset/8543476f1080bc702ba2dc1d2ddbd0824df34217.png";
import imgVisualLanguage from "figma:asset/955c446351b1217ff5d282fde6bf46a2715cc7e3.png";
import imgWebsiteBlog from "figma:asset/586801db5b5955c47b6f15f68e2daaf1fafdf7d4.png";
import imgPosters from "figma:asset/d16a16ccf2374b67ece9aafe431c85c442ed66d9.png";
import imgCamiseta from "figma:asset/cb2ba9e8d40b4093bb3c812a8018a280629ad70c.png";
import imgBolsaAgenda from "figma:asset/3290b65c13b344550e0cb48c4d911243e7591874.png";
import imgTarjetas from "figma:asset/9c3dd6bbdb3b3cd85aa88b314f672baf600961d6.png";
import imgOficina from "figma:asset/b3c5c93cad9211f2f2b808371f45181411379acc.png";
import imgTotebag from "figma:asset/75fb4b01c43129a40e825b3abb85515a9453f4d1.png";
import imgAgenda from "figma:asset/84aa8e8e48ae91ec5f6ac55f4308516802cae1dc.png";

/* ─── Reusable components ─── */

/** Full-width image with aspect ratio */
function FullWidthImage({ src, alt, aspect = "16/9" }: { src: string; alt: string; aspect?: string }) {
  return (
    <div className="w-full relative overflow-hidden" style={{ aspectRatio: aspect }}>
      <img alt={alt} className="absolute inset-0 w-full h-full object-cover" src={src} loading="lazy" />
    </div>
  );
}

/** Two-column image grid */
function TwoColImages({ left, right, alt1 = "", alt2 = "" }: { left: string; right: string; alt1?: string; alt2?: string }) {
  return (
    <div className="grid grid-cols-2 gap-[40px] max-md:grid-cols-1 max-md:gap-[24px]">
      <div className="aspect-square relative overflow-hidden">
        <img alt={alt1} className="absolute inset-0 w-full h-full object-cover" src={left} loading="lazy" />
      </div>
      <div className="aspect-square relative overflow-hidden">
        <img alt={alt2} className="absolute inset-0 w-full h-full object-cover" src={right} loading="lazy" />
      </div>
    </div>
  );
}

/** Quote block aligned to the right half of a 2-col grid */
function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-[40px] py-[56px] max-lg:grid-cols-1 max-md:py-[32px]">
      <div className="max-lg:hidden" />
      <div className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[32px] tracking-[-1.6px] leading-[40px] max-lg:text-[28px] max-lg:leading-[36px] max-md:text-[24px] max-md:leading-[32px]">
        {children}
      </div>
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] pt-[120px] pb-[56px] max-lg:px-[32px] max-lg:pt-[80px] max-md:px-[24px] max-md:pt-[48px] max-md:pb-[32px]">
        <div className="max-w-[680px] pl-[48px] max-lg:pl-0">
          <Link
            to="/blog"
            className="inline-flex items-center gap-[8px] mb-[24px] max-md:mb-[16px] group"
          >
            <svg
              className="w-[20px] h-[20px] text-[#191e25] transition-transform group-hover:-translate-x-[4px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[16px] tracking-[-0.64px] max-md:text-[14px]">
              Blog
            </span>
          </Link>
          <LangText
            as="h1"
            stagger={0}
            className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[40px] tracking-[-2px] leading-[48px] max-lg:text-[36px] max-lg:leading-[44px] max-md:text-[28px] max-md:leading-[36px]"
          >
            {t("blog.posts.brandRenewal.title")}
          </LangText>
        </div>
      </div>

      {/* Hero image — iPad Portada */}
      <div className="max-w-[1400px] mx-auto px-[56px] max-lg:px-[32px] max-md:px-[24px]">
        <FullWidthImage src={imgPortada} alt="iPad con la nueva marca de Digio" aspect="1485/883" />
      </div>
    </section>
  );
}

/* ─── Intro + sidebar section ─── */
function IntroSection() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] py-[0px] max-lg:px-[32px] max-md:px-[24px]">
        <div className="flex items-start justify-between gap-[48px] py-[48px] max-lg:flex-col max-lg:gap-[32px]">
          {/* Left: Lead text */}
          <div className="max-w-[742px] shrink-0 max-lg:max-w-full">
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[32px] tracking-[-1.6px] leading-[40px] max-lg:text-[28px] max-lg:leading-[36px] max-md:text-[24px] max-md:leading-[32px]">
              Tras una trayectoria que se remonta a 2007, en Digio hemos decidido abordar el rediseño completo de nuestra marca con el objetivo de dotarnos de una narrativa y de un lenguaje visual propios y absolutamente diferenciados, en línea con nuestros valores, capacidades y relevancia en el sector.
            </p>
          </div>

          {/* Right: Work areas */}
          <div className="flex flex-col gap-[16px] shrink-0 min-w-[200px] max-lg:min-w-0 max-lg:w-full">
            <p className="font-['Manrope',sans-serif] font-[700] text-[#232429] text-[16px] leading-[20.8px]">
              ¿En qué hemos trabajado?
            </p>
            <div className="flex flex-col gap-[0px]">
              {["Estrategia", "Narrativa", "Identidad de marca", "Lenguaje visual", "Digital"].map((item) => (
                <p key={item} className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Text sections: El reto, La estrategia, La solución ─── */
function TextSections() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] py-[96px] max-lg:px-[32px] max-lg:py-[64px] max-md:px-[24px] max-md:py-[48px]">
        <div className="flex flex-col gap-[48px]">
          {/* El reto */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[32px] tracking-[-1.6px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              El reto
            </h2>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              En los últimos 17 años Digio se ha caracterizado por su capacidad para crear plataformas y productos digitales en una amplia variedad de verticales y tecnologías. Hemos abordado retos singulares y complejos, siendo pioneros en la adopción de las tecnologías mas disruptivas en cada momento, desde el desarrollo sobre plataformas móviles, que abordamos en sus inicios, hasta la inteligencia artificial generativa, el IoT o el fintech, más recientemente.
            </p>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              Tras esta trayectoria, decidimos que era el momento de actualizar nuestra marca para recoger todos los valores distintivos acumulados durante años y estar a la altura de nuestro desempeño y capacidades, fusionando nuestra experiencia acumulada con un enfoque integral en la creación de soluciones digitales.
            </p>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              En un universo de marcas tan saturado, decidimos que para abordar este reto era fundamental ir de la mano de una compañía líder en el sector, por ello confiamos en MUCHO, una de las agencias de branding más reputadas del mundo, que ha creado proyectos y marcas icónicas para compañías tan relevantes como Visa, Apple, Paypal o Movistar.
            </p>
          </div>

          {/* La estrategia */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[32px] tracking-[-1.6px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              La estrategia
            </h2>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              La combinación de la experiencia de nuestro equipo y la búsqueda de soluciones impactantes y transformadoras para nuestros clientes, fijaron la Transformación como piedra angular de nuestra narrativa.
            </p>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              Este equilibrio cristalizó en el lema <span className="font-[700]">Transformation is our code_</span> (en inglés), lo que refleja nuestro firme compromiso como impulsores del cambio en cada desafío que abordamos. El uso de la palabra code_, en su doble referencia al desarrollo de software y al código de conducta, nos permitió establecer un mensaje abierto, distintivo y memorable.
            </p>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              Al mismo tiempo, recuperamos el significado simbólico de los dígitos binarios que conforman nuestro nombre (Dig10), y los usamos como inspiración para crear la identidad visual y la narrativa de la marca, reflejando la contribución de Digio como un actor que opera entre el 0 y el 1, esto es, en un universo lleno de incertidumbre, pero también de posibilidades, que logramos hacer realidad gracias a nuestra experiencia, flexibilidad, ingenio y rigor.
            </p>
          </div>

          {/* La solución */}
          <div className="flex flex-col gap-[20px]">
            <h2 className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[32px] tracking-[-1.6px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
              La solución
            </h2>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              El resultado es un logotipo y un lenguaje visual que juegan con el concepto de transformación y con el código binario de diversas formas.
            </p>
            <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
              Desde un conjunto de iconos creado únicamente a partir de ceros y unos, hasta el estiramiento del símbolo y la creación de un lenguaje visual extendido, nuestra marca respira una esencia digital a través de todos sus puntos de contacto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Visual gallery sections ─── */
function VisualGallery() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-[56px] max-lg:px-[32px] max-md:px-[24px]">
        {/* Full-width dark brand image */}
        <FullWidthImage src={imgContainer} alt="Digio brand identity showcase" aspect="1920/1020" />

        {/* Quote: Transformation is our code */}
        <QuoteBlock>
          La combinación de la experiencia de nuestro equipo y la búsqueda de soluciones impactantes para los retos de nuestros clientes establecieron la "Transformación" como la piedra angular de nuestra narrativa. <em className="font-['GT_Ultra_Median',sans-serif] italic">Transformation is our code_</em> refleja nuestro compromiso de impulsar el cambio como objetivo compartido en cada desafío digital que abordamos.
        </QuoteBlock>

        {/* Transformation video/image */}
        <FullWidthImage src={imgTransformation} alt="Transformation is our code" aspect="1485/835" />

        {/* Two-col: Mobile Home + Instagram scroll */}
        <div className="pt-[48px]">
          <TwoColImages left={imgMobileHome} right={imgScrollInsta} alt1="Mobile home" alt2="Instagram scroll" />
        </div>

        {/* Quote: Color palette */}
        <QuoteBlock>
          La paleta de colores elegida utiliza el blanco y el negro como colores principales y el gris como tono intermedio. En un segundo nivel jerárquico, se eligieron un verde suave y un violeta para abrazar la naturaleza digital de Digio.
        </QuoteBlock>

        {/* Color palette image */}
        <FullWidthImage src={imgColorPalette} alt="Paleta de colores Digio" aspect="1485/835" />

        {/* Quote: Symbol / zero to one */}
        <QuoteBlock>
          El símbolo es una síntesis del concepto de código binario. Digio vive en el espacio entre estas dos figuras, lleno de incertidumbre y posibilidades. En ese espacio intermedio entre visión y creación. Entre la no existencia y la existencia.
        </QuoteBlock>

        {/* Avatar zero to one video/image */}
        <FullWidthImage src={imgAvatarCeroUno} alt="Avatar de cero a uno" aspect="1485/835" />

        {/* Two-col: Avatar + iPad */}
        <div className="pt-[48px]">
          <TwoColImages left={imgAvatar} right={imgIpadCeroUno} alt1="Avatar Digio" alt2="iPad cero a uno" />
        </div>

        {/* Quote: Icon system */}
        <QuoteBlock>
          El sistema de iconos refuerza aún más esta idea llevándola un paso más allá. La creación de una biblioteca de iconos versátil basada en unos y ceros fue el primer paso en el desarrollo de un lenguaje visual completo.
        </QuoteBlock>

        {/* Two-col: OOH + Icon Set Animation */}
        <div className="pb-[56px] max-md:pb-[24px]">
          <TwoColImages left={imgDigioOoh} right={imgIconSetAnimation} alt1="Digio OOH" alt2="Icon set animation" />
        </div>

        {/* Icon Library full-width */}
        <FullWidthImage src={imgIconLibrary} alt="Icon library" aspect="1485/990" />

        {/* Quote: Visual language */}
        <QuoteBlock>
          Basado en los valores de la empresa, el lenguaje visual se amplía para crear un sistema sencillo y completo que brinda una apariencia cohesiva que pasa de sólida a flexible en un abrir y cerrar de ojos.
        </QuoteBlock>

        {/* Visual language behavior video/image */}
        <FullWidthImage src={imgVisualLanguage} alt="Visual language behaviour" aspect="1485/835" />

        {/* Website blog image */}
        <div className="pt-[48px]">
          <FullWidthImage src={imgWebsiteBlog} alt="Website blog" aspect="1485/835" />
        </div>

        {/* Posters */}
        <div className="pt-[48px] pb-[56px] max-md:pb-[24px]">
          <FullWidthImage src={imgPosters} alt="Posters con ilustraciones de Digio" aspect="1485/834" />
        </div>

        {/* Two-col: Camiseta + Bolsa Agenda */}
        <div className="pb-[56px] max-md:pb-[24px]">
          <TwoColImages left={imgCamiseta} right={imgBolsaAgenda} alt1="Camiseta Digio" alt2="Bolsa y agenda" />
        </div>

        {/* Tarjetas personales full-width */}
        <FullWidthImage src={imgTarjetas} alt="Tarjetas personales" aspect="1485/990" />

        {/* Oficina */}
        <div className="pt-[48px] pb-[56px] max-md:pt-[24px] max-md:pb-[24px]">
          <FullWidthImage src={imgOficina} alt="Oficina Digio" aspect="1485/835" />
        </div>

        {/* Two-col: Totebag (tall) + Agenda (square) */}
        <div className="grid grid-cols-2 gap-[40px] pb-[96px] max-md:grid-cols-1 max-md:gap-[24px] max-md:pb-[48px]">
          <div className="relative overflow-hidden" style={{ aspectRatio: "722/1286" }}>
            <img alt="Totebag Digio" className="absolute inset-0 w-full h-full object-cover" src={imgTotebag} loading="lazy" />
          </div>
          <div className="aspect-square relative overflow-hidden self-end">
            <img alt="Agenda Digio" className="absolute inset-0 w-full h-full object-cover" src={imgAgenda} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Related posts ─── */
function RelatedPosts() {
  const { t } = useTranslation();
  const related = getRelatedPosts("renovacion-marca-digio", 3);

  // Fallback to latest posts if slug doesn't exist in blogData
  const posts = related.length > 0 ? related : getRelatedPosts("", 3);

  return (
    <section className="w-full bg-white px-[56px] py-[96px] relative max-lg:py-[64px] max-lg:px-[32px] max-md:px-[24px] max-md:py-[48px]">
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_#e5e7eb]" />
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
        <LangText
          as="h2"
          stagger={0}
          className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[48px] tracking-[-2.4px] leading-[52.8px] max-lg:text-[36px] max-lg:leading-[44px] max-md:text-[28px] max-md:leading-[36px]"
        >
          {t("blog.relatedPosts")}
        </LangText>

        <div className="grid grid-cols-3 gap-[32px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col items-start group">
              <Link
                to={getPostDetailUrl(post)}
                className="block w-full aspect-square relative overflow-hidden mb-[24px]"
              >
                <ImageWithFallback
                  alt={t(`blog.posts.${post.i18nKey}.title`)}
                  src={post.image}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  loading="lazy"
                />
              </Link>
              <div className="flex flex-col gap-[24px] max-md:gap-[16px]">
                <Link to={getPostDetailUrl(post)}>
                  <p className="font-['GT_Ultra_Median',sans-serif] text-[#232429] text-[32px] tracking-[-1.6px] leading-[40px] max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px] hover:opacity-70 transition-opacity">
                    {t(`blog.posts.${post.i18nKey}.title`)}
                  </p>
                </Link>
                <p className="font-['Manrope',sans-serif] text-[#232429] text-[16px] leading-[22px]">
                  {t(`blog.posts.${post.i18nKey}.excerpt`)}
                </p>
                <Link
                  to={getPostDetailUrl(post)}
                  className="relative px-[25px] py-[17px] border border-[#191e25] bg-white cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group/btn inline-block self-start"
                >
                  <span className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.5px] leading-[22px] whitespace-nowrap group-hover/btn:text-white max-md:text-[16px]">
                    {t("blog.readMore")}
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export function BlogPostNuevaMarca() {
  const { t } = useTranslation();

  useEffect(() => {
    // Trigger Lenis resize after all content has mounted to ensure
    // the full page height is scrollable (covers lazy images, fonts, etc.)
    const timers = [
      setTimeout(() => resizeSmoothScroll(), 100),
      setTimeout(() => resizeSmoothScroll(), 500),
      setTimeout(() => resizeSmoothScroll(), 1200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const title = t("blog.posts.brandRenewal.title");
    document.title = `${title} — Digio Blog`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", t("blog.posts.brandRenewal.metaDescription"));
    return () => { document.title = "Digio"; };
  }, [t]);

  return (
    <>
      <HeroSection />
      <IntroSection />
      <TextSections />
      <VisualGallery />
      <RelatedPosts />
    </>
  );
}