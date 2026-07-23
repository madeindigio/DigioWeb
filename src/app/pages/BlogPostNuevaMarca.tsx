import { useEffect } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";
import { getRelatedPosts, getPostDetailUrl } from "../components/blogData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { resizeSmoothScroll } from "../components/SmoothScrollProvider";

/* ─── Local assets (exported from Figma) ─── */
import imgPortada from "/images/blog/renovacion-marca-digio/00-ipad-portada-digio.png";
import imgMobileHome from "/images/blog/renovacion-marca-digio/03-mobile-home.png";
import imgColorPalette from "/images/blog/renovacion-marca-digio/05-color-palette.png";
import imgAvatar from "/images/blog/renovacion-marca-digio/07-avatar.png";
import imgIpadCeroUno from "/images/blog/renovacion-marca-digio/08-ipad-cero-a-uno.png";
import imgDigioOoh from "/images/blog/renovacion-marca-digio/09-digio-ooh.png";
import imgIconLibrary from "/images/blog/renovacion-marca-digio/11-icon-library.png";
import imgWebsiteBlog from "/images/blog/renovacion-marca-digio/13-website-blog.png";
import imgPosters from "/images/blog/renovacion-marca-digio/14-posters.png";
import imgCamiseta from "/images/blog/renovacion-marca-digio/15-camiseta-digio.png";
import imgBolsaAgenda from "/images/blog/renovacion-marca-digio/16-bolsa-agenda.png";
import imgTarjetas from "/images/blog/renovacion-marca-digio/17-tarjetas-personales.png";
import imgOficina from "/images/blog/renovacion-marca-digio/18-oficina.png";
import imgTotebag from "/images/blog/renovacion-marca-digio/19-totebag-digio.png";
import imgAgenda from "/images/blog/renovacion-marca-digio/20-agenda.png";

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
        {/* Full-width dark brand video */}
        <div className="w-full relative overflow-hidden" style={{ aspectRatio: "1920/1020" }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://dthpinvq4u09v.cloudfront.net/images/Digio/1.-LOGOTIPO-DIGIO.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

        {/* Quote: Transformation is our code */}
        <QuoteBlock>
          La combinación de la experiencia de nuestro equipo y la búsqueda de soluciones impactantes para los retos de nuestros clientes establecieron la "Transformación" como la piedra angular de nuestra narrativa. <em className="font-['GT_Ultra_Median',sans-serif] italic">Transformation is our code_</em> refleja nuestro compromiso de impulsar el cambio como objetivo compartido en cada desafío digital que abordamos.
        </QuoteBlock>

        {/* Transformation video */}
        <div className="w-full relative overflow-hidden" style={{ aspectRatio: "1485/835" }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://dthpinvq4u09v.cloudfront.net/images/Digio/3.-Transformation-is-our-code.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

        {/* Two-col: Mobile Home + Instagram scroll */}
        <div className="pt-[48px]">
          <div className="grid grid-cols-2 gap-[40px] max-md:grid-cols-1 max-md:gap-[24px]">
            <div className="aspect-square relative overflow-hidden">
              <img alt="Mobile home" className="absolute inset-0 w-full h-full object-cover" src={imgMobileHome} loading="lazy" />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://dthpinvq4u09v.cloudfront.net/images/Digio/5.-SCROLL-DIGIO-INSTA.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
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

        {/* Avatar zero to one video */}
        <div className="w-full relative overflow-hidden" style={{ aspectRatio: "1485/835" }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://dthpinvq4u09v.cloudfront.net/images/Digio/7.1-Si%CC%81mbolo-De-cero-a-uno.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

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
          <div className="grid grid-cols-2 gap-[40px] max-md:grid-cols-1 max-md:gap-[24px]">
            <div className="aspect-square relative overflow-hidden">
              <img alt="Digio OOH" className="absolute inset-0 w-full h-full object-cover" src={imgDigioOoh} loading="lazy" />
            </div>
            <div className="aspect-square relative overflow-hidden">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="https://dthpinvq4u09v.cloudfront.net/images/Digio/11.1-ICON-SET-ANIMATION.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>

        {/* Icon Library full-width */}
        <FullWidthImage src={imgIconLibrary} alt="Icon library" aspect="1485/990" />

        {/* Quote: Visual language */}
        <QuoteBlock>
          Basado en los valores de la empresa, el lenguaje visual se amplía para crear un sistema sencillo y completo que brinda una apariencia cohesiva que pasa de sólida a flexible en un abrir y cerrar de ojos.
        </QuoteBlock>

        {/* Visual language behavior video */}
        <div className="w-full relative overflow-hidden" style={{ aspectRatio: "1485/835" }}>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://dthpinvq4u09v.cloudfront.net/images/Digio/13.-VISUAL-LANGUAGE-BEHAVIOUR.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>

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
    // Trigger one immediate recalculation after paint and one delayed
    // recalculation for late image/font layout changes.
    let raf1 = 0;
    let raf2 = 0;
    const delayed = window.setTimeout(() => resizeSmoothScroll(), 900);

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        resizeSmoothScroll();
      });
    });

    return () => {
      if (raf1) cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
      window.clearTimeout(delayed);
    };
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