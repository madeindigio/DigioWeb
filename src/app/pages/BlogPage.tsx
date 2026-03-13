import { useState, useEffect, useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import svgPaths from "../../imports/svg-hrq2igur1m";
import { LangText } from "../components/LangText";
import { ContactSection } from "../components/ContactSection";
import { SEOHead, breadcrumbJsonLd } from "../components/SEOHead";
import {
  getPaginatedPosts,
  sortedBlogPosts,
  POSTS_PER_PAGE,
  type BlogPost,
} from "../components/blogData";

/* ─── Date formatter (locale-aware) ─── */
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

/* ─── Hero BG pattern from Figma ─── */
function BlogHeroPattern() {
  return (
    <div className="absolute inset-0 flex justify-center px-[56px] max-md:px-[24px] pointer-events-none overflow-hidden">
      <div className="relative w-full max-w-[1400px]">
        <div className="absolute top-0 left-0 w-[1253px] h-[653px] max-md:w-[700px] max-md:h-[380px] opacity-[0.12]">
          <svg
            className="absolute block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1253 653.078"
          >
            <path d={svgPaths.p2431bf70} fill="#E2DFDA" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Single blog card in list ─── */
function BlogPostCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  const { t } = useTranslation();
  const formattedDate = useFormattedDate(post.date);

  return (
    <article
      className="group"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <Link
        to={`/blog/${post.slug}`}
        className="flex items-center justify-between gap-[40px] py-[40px] max-md:py-[32px] max-md:gap-[24px] transition-colors hover:bg-[#f0efec]"
        aria-label={t(`blog.posts.${post.i18nKey}.title`)}
      >
        <div className="flex flex-col gap-[24px] items-start max-md:gap-[16px] flex-1 min-w-0">
          <LangText
            as="h2"
            stagger={index}
            className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[1.05] max-lg:text-[36px] max-md:text-[24px]"
          >
            <span itemProp="headline">
              {t(`blog.posts.${post.i18nKey}.title`)}
            </span>
          </LangText>
          <div className="flex gap-[24px] items-center max-md:gap-[16px]">
            <time
              dateTime={post.date}
              itemProp="datePublished"
              className="font-['Manrope',sans-serif] font-[600] text-[#716e6a] text-[16px] leading-[normal] whitespace-nowrap max-md:text-[13px]"
            >
              {formattedDate}
            </time>
            <span className="font-['GT_Ultra_Median',sans-serif] text-[#716e6a] text-[16px] leading-[normal] whitespace-nowrap max-md:text-[13px]">
              {t(`blog.categories.${post.categoryKey}`)}
            </span>
          </div>
          <meta
            itemProp="description"
            content={t(`blog.posts.${post.i18nKey}.metaDescription`)}
          />
          <meta itemProp="author" content={post.author} />
        </div>
        <div className="w-[200px] h-[206px] shrink-0 relative overflow-hidden max-md:w-[120px] max-md:h-[124px]">
          <img
            alt={t(`blog.posts.${post.i18nKey}.title`)}
            src={post.image}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            loading="lazy"
            itemProp="image"
          />
        </div>
      </Link>
      {/* separator */}
      <div className="w-full h-[1px] bg-[#e2dfda]" />
    </article>
  );
}

/* ─── Pagination controls ─── */
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (p: number) => void;
}) {
  const { t } = useTranslation();

  const btnBase =
    "w-[96px] h-[96px] max-md:w-[56px] max-md:h-[56px] border border-[#e9e7e3] flex items-center justify-center transition-colors cursor-pointer shrink-0";
  const numClass =
    "font-['GT_Ultra_Median',sans-serif] text-[20px] tracking-[-0.8px] leading-[27px] max-md:text-[16px]";

  return (
    <nav
      aria-label={t("blog.pagination.page")}
      className="flex items-stretch px-[56px] pt-[56px] pb-[120px] max-lg:px-[32px] max-md:px-[24px] max-md:pt-[32px] max-md:pb-[64px]"
    >
      {/* Prev */}
      <button
        className={`${btnBase} ${
          currentPage <= 1
            ? "opacity-30 pointer-events-none"
            : "hover:bg-[#f0efec]"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label={t("blog.pagination.prev")}
      >
        <svg
          width="16"
          height="32"
          viewBox="0 0 16 32"
          fill="none"
          className="max-md:w-[12px] max-md:h-[24px]"
        >
          <path
            d="M14 2L4 16L14 30"
            stroke="#E2DFDA"
            strokeWidth="4"
          />
        </svg>
      </button>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          className={`${btnBase} -ml-[1px] ${
            p === currentPage ? "bg-[#bbffe8]" : "hover:bg-[#f0efec]"
          }`}
          onClick={() => onPageChange(p)}
          aria-label={`${t("blog.pagination.page")} ${p}`}
          aria-current={p === currentPage ? "page" : undefined}
        >
          <span
            className={`${numClass} ${
              p === currentPage ? "text-[#191e25]" : "text-[#191e25]"
            }`}
          >
            {p}
          </span>
        </button>
      ))}

      {/* Next */}
      <button
        className={`${btnBase} -ml-[1px] ${
          currentPage >= totalPages
            ? "opacity-30 pointer-events-none"
            : "hover:bg-[#f0efec]"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label={t("blog.pagination.next")}
      >
        <svg
          width="16"
          height="32"
          viewBox="0 0 16 32"
          fill="none"
          className="max-md:w-[12px] max-md:h-[24px]"
        >
          <path
            d="M2 2L12 16L2 30"
            stroke="#191E25"
            strokeWidth="4"
          />
        </svg>
      </button>
    </nav>
  );
}

/* ─── Blog Page (exported) ─── */
export function BlogPage() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = useState(isNaN(pageParam) ? 1 : pageParam);

  const totalPages = Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE);
  const { posts, currentPage } = getPaginatedPosts(page);

  const handlePageChange = (p: number) => {
    const safePage = Math.max(1, Math.min(p, totalPages));
    setPage(safePage);
    setSearchParams(safePage === 1 ? {} : { page: String(safePage) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Sync URL param changes
  useEffect(() => {
    const p = parseInt(searchParams.get("page") || "1", 10);
    if (!isNaN(p) && p !== page) setPage(p);
  }, [searchParams]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SEOHead
        titleKey="seo.blog.title"
        descriptionKey="seo.blog.description"
        canonicalPath="/blog"
        jsonLd={breadcrumbJsonLd([
          { name: t("seo.home.title"), path: "/" },
          { name: t("seo.blog.title"), path: "/blog" },
        ])}
      />

      {/* JSON-LD structured data for blog listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: t("blog.title"),
            description: t("pages.blog.metaDescription"),
            publisher: {
              "@type": "Organization",
              name: "Digio Soluciones Digitales",
              url: "https://digio.es",
            },
            blogPost: sortedBlogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: t(`blog.posts.${post.i18nKey}.title`),
              description: t(`blog.posts.${post.i18nKey}.metaDescription`),
              datePublished: post.date,
              author: {
                "@type": "Organization",
                name: post.author,
              },
              image: post.image,
              url: `https://digio.es/blog/${post.slug}`,
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-[#191e25] w-full relative overflow-hidden">
        <BlogHeroPattern />
        <div className="relative flex flex-col justify-end min-h-[744px] max-lg:min-h-[500px] max-md:min-h-[400px] pb-[56px] px-[56px] max-md:px-[24px] max-md:pb-[40px]">
          <div className="relative z-10 max-w-[1400px] w-full mx-auto">
            <LangText
              as="h1"
              stagger={0}
              className="font-['GT_Ultra_Median',sans-serif] text-[#e2dfda] text-[140px] tracking-[-5.6px] leading-[0.9] max-lg:text-[96px] max-md:text-[56px]"
            >
              {t("blog.title")}
            </LangText>
          </div>
        </div>
      </section>

      {/* Post list */}
      <section className="w-full bg-white" itemScope itemType="https://schema.org/Blog">
        <div className="max-w-[1400px] mx-auto px-[56px] max-md:px-[24px]">
          {/* top separator */}
          <div className="w-full h-[1px] bg-[#e2dfda]" />

          {posts.map((post, idx) => (
            <BlogPostCard key={post.slug} post={post} index={idx} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="max-w-[1400px] mx-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>

      {/* CTA */}
      <ContactSection />
    </>
  );
}