import { useEffect, useMemo } from "react";
import { useParams, Link, Navigate } from "react-router";
import { useTranslation } from "react-i18next";
import { LangText } from "../components/LangText";
import {
  getPostBySlug,
  getRelatedPosts,
  type BlogPost,
} from "../components/blogData";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

/* ─── Date formatter ─── */
function useFormattedDate(iso: string) {
  const { i18n } = useTranslation();
  return useMemo(() => {
    const d = new Date(iso);
    return d
      .toLocaleDateString(i18n.language === "es" ? "es-ES" : "en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  }, [iso, i18n.language]);
}

/* ─── SEO ─── */
function PostSEO({ post }: { post: BlogPost }) {
  const { t, i18n } = useTranslation();
  const title = t(`blog.posts.${post.i18nKey}.title`);
  const desc = t(`blog.posts.${post.i18nKey}.metaDescription`);

  useEffect(() => {
    document.title = `${title} — Digio Blog`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": desc,
      "og:type": "article",
      "og:locale": i18n.language === "es" ? "es_ES" : "en_US",
      "og:site_name": "Digio",
      "og:image": post.image,
      "og:url": `https://digio.es/blog/${post.slug}`,
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // article-specific meta
    const articleMeta: Record<string, string> = {
      "article:published_time": post.date,
      "article:author": post.author,
    };
    Object.entries(articleMeta).forEach(([prop, content]) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    return () => {
      document.title = "Digio";
    };
  }, [title, desc, post, i18n.language]);

  return null;
}

/* ─── Article body – uses body.* keys if present, falls back to excerpt ─── */
function ArticleBody({ post }: { post: BlogPost }) {
  const { t, i18n } = useTranslation();
  const prefix = `blog.posts.${post.i18nKey}.body`;

  // Check if body content exists by testing the lead key
  const hasBody = t(`${prefix}.lead`) !== `${prefix}.lead`;

  if (!hasBody) {
    // Fallback: render excerpt as the full body
    return (
      <div className="flex flex-col gap-[24px]">
        <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
          {t(`blog.posts.${post.i18nKey}.excerpt`)}
        </p>
        <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
          {t(`blog.posts.${post.i18nKey}.excerpt`)}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[24px]">
      {/* Lead */}
      <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-md:text-[24px] max-md:leading-[32px]">
        {t(`${prefix}.lead`)}
      </p>
      {/* Intro */}
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.intro`)}
      </p>

      {/* H2 #1 */}
      <h2 className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] mt-[16px] max-md:text-[24px] max-md:leading-[32px]">
        {t(`${prefix}.h2_1`)}
      </h2>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p1`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p2`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p3`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p4`)}
      </p>

      {/* H2 #2 */}
      <h2 className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] mt-[16px] max-md:text-[24px] max-md:leading-[32px]">
        {t(`${prefix}.h2_2`)}
      </h2>

      {/* Inline content image */}
      {post.contentImage && (
        <div className="w-full h-[400px] max-md:h-[240px] relative">
          <ImageWithFallback
            alt={t(`blog.posts.${post.i18nKey}.title`)}
            src={post.contentImage}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p5`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p6`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p7`)}
      </p>

      {/* H2 #3 */}
      <h2 className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] mt-[16px] max-md:text-[24px] max-md:leading-[32px]">
        {t(`${prefix}.h2_3`)}
      </h2>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p8`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p9`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p10`)}
      </p>
      <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[1.6] max-md:text-[15px]">
        {t(`${prefix}.p11`)}
      </p>
    </div>
  );
}

/* ─── Related post card ─── */
function RelatedPostCard({ post }: { post: BlogPost }) {
  const { t } = useTranslation();
  return (
    <article className="flex flex-col gap-[24px] items-start flex-1 min-w-0 max-md:w-full max-md:flex-none group">
      <Link
        to={`/blog/${post.slug}`}
        className="block h-[400px] w-full relative shrink-0 max-md:h-[240px] overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ImageWithFallback
          alt={t(`blog.posts.${post.i18nKey}.title`)}
          src={post.image}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex flex-col gap-[24px] max-md:gap-[16px]">
          <Link to={`/blog/${post.slug}`}>
            <p className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px] hover:opacity-70 transition-opacity">
              {t(`blog.posts.${post.i18nKey}.title`)}
            </p>
          </Link>
          <p className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[normal] max-md:text-[14px]">
            {t(`blog.posts.${post.i18nKey}.excerpt`)}
          </p>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="relative px-[48px] py-[16px] border border-[#191e25] bg-transparent mt-[8px] max-md:px-[32px] max-md:py-[12px] cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group/btn inline-block"
        >
          <span className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] whitespace-nowrap group-hover/btn:text-white max-md:text-[16px]">
            {t("blog.readMore")}
          </span>
        </Link>
      </div>
    </article>
  );
}

/* ─── Main Page ─── */
export function BlogPostDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];
  const formattedDate = useFormattedDate(post?.date || "2025-01-01");

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const title = t(`blog.posts.${post.i18nKey}.title`);
  const category = t(`blog.categories.${post.categoryKey}`);

  return (
    <>
      <PostSEO post={post} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: t(`blog.posts.${post.i18nKey}.metaDescription`),
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: {
              "@type": "Organization",
              name: "Digio Soluciones Digitales",
              url: "https://digio.es",
            },
            image: post.image,
            url: `https://digio.es/blog/${post.slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://digio.es/blog/${post.slug}`,
            },
          }),
        }}
      />

      {/* ─── Body content section ─── */}
      <article
        className="bg-white w-full"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* Title + Hero image */}
        <div className="w-full shadow-[0px_1px_0px_0px_#e2dfda]">
          <div className="max-w-[1200px] mx-auto px-[56px] pt-[120px] pb-[56px] max-lg:px-[32px] max-lg:pt-[80px] max-md:px-[24px] max-md:pt-[48px] max-md:pb-[32px]">
            <div className="max-w-[680px] pl-[48px] max-lg:pl-0 max-md:max-w-full">
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
                className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[1.05] max-lg:text-[40px] max-md:text-[32px]"
              >
                <span itemProp="headline">{title}</span>
              </LangText>
            </div>
          </div>

          {/* Full-width hero image */}
          <div className="w-full h-[744px] relative max-lg:h-[500px] max-md:h-[300px]">
            <ImageWithFallback
              alt={title}
              src={post.image}
              className="absolute inset-0 w-full h-full object-cover"
              itemProp="image"
            />
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-[1200px] mx-auto px-[56px] py-[120px] max-lg:px-[32px] max-lg:py-[80px] max-md:px-[24px] max-md:py-[48px]">
          <div className="max-w-[680px] pl-[48px] max-lg:pl-0 max-md:max-w-full">
            <ArticleBody post={post} />

            {/* Meta info */}
            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="author" content={post.author} />
            <meta
              itemProp="description"
              content={t(`blog.posts.${post.i18nKey}.metaDescription`)}
            />
          </div>
        </div>
      </article>

      {/* ─── Related posts section ─── */}
      <section className="w-full bg-gradient-to-b from-white to-[#f7f7f7] px-[56px] py-[100px] relative max-lg:py-[64px] max-lg:px-[32px] max-md:px-[24px] max-md:py-[48px]">
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_#e2dfda]" />
        <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
          <LangText
            as="h2"
            stagger={0}
            className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]"
          >
            {t("blog.relatedPosts")}
          </LangText>

          <div className="flex gap-[32px] max-lg:flex-col max-lg:gap-[40px]">
            {relatedPosts.map((rp) => (
              <RelatedPostCard key={rp.slug} post={rp} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}