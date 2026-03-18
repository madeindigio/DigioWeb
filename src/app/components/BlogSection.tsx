import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { LangText } from "./LangText";
import { getLatestPosts, getPostDetailUrl } from "./blogData";

const latestPosts = getLatestPosts(3);

export function BlogSection() {
  const { t } = useTranslation();
  return (
    <section
      id="blog"
      className="w-full bg-gradient-to-b from-white to-[#f7f7f7] px-[56px] py-[100px] relative max-lg:py-[64px] max-md:px-[24px] max-md:py-[40px]"
      aria-labelledby="blog-heading"
    >
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_#e2dfda]" />
      <div className="max-w-[1400px] mx-auto flex flex-col gap-[56px] max-md:gap-[32px]">
        <div className="flex items-end justify-between gap-[24px] max-md:flex-col max-md:items-start">
          <LangText
            as="h2"
            stagger={0}
            className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[48px] tracking-[-1.92px] leading-[normal] max-lg:text-[36px] max-md:text-[28px]"
          >
            <span id="blog-heading">{t("blog.title")}</span>
          </LangText>
          <Link
            to="/blog"
            className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[16px] tracking-[-0.64px] leading-[normal] whitespace-nowrap border-b border-[#191e25]/30 pb-[2px] hover:border-[#191e25] transition-colors"
          >
            {t("blog.seeAllPosts")}
          </Link>
        </div>

        <div className="flex gap-[32px] max-lg:flex-col max-lg:gap-[40px]">
          {latestPosts.map((post, idx) => (
            <article
              key={post.slug}
              className="flex flex-col gap-[24px] items-start flex-1 min-w-0 max-lg:flex-row max-lg:gap-[24px] max-md:flex-col group"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Link
                to={getPostDetailUrl(post)}
                className="block h-[400px] w-full relative shrink-0 max-lg:w-[280px] max-lg:h-[280px] max-md:w-full max-md:h-[240px] overflow-hidden"
                tabIndex={-1}
                aria-hidden="true"
              >
                <img
                  alt={t(`blog.posts.${post.i18nKey}.title`)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  src={post.image}
                  loading="lazy"
                  itemProp="image"
                />
              </Link>
              <div className="flex flex-col gap-[16px] items-start w-full">
                <div className="flex flex-col gap-[24px] max-md:gap-[16px]">
                  <Link to={getPostDetailUrl(post)}>
                    <LangText
                      as="h3"
                      stagger={1 + idx * 3}
                      className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[32px] tracking-[-1.28px] leading-[40px] max-lg:text-[24px] max-lg:leading-[32px] max-md:text-[20px] max-md:leading-[28px] hover:opacity-70 transition-opacity"
                    >
                      <span itemProp="headline">
                        {t(`blog.posts.${post.i18nKey}.title`)}
                      </span>
                    </LangText>
                  </Link>
                  <LangText
                    as="p"
                    stagger={2 + idx * 3}
                    className="font-['Manrope',sans-serif] font-[600] text-[#191e25] text-[16px] leading-[normal] max-md:text-[14px]"
                  >
                    <span itemProp="description">
                      {t(`blog.posts.${post.i18nKey}.excerpt`)}
                    </span>
                  </LangText>
                </div>
                <Link
                  to={getPostDetailUrl(post)}
                  className="relative px-[48px] py-[16px] border border-[#191e25] bg-transparent mt-[8px] max-md:px-[32px] max-md:py-[12px] cursor-pointer hover:bg-[#191e25] hover:text-white transition-colors group/btn inline-block"
                >
                  <LangText
                    as="span"
                    stagger={3 + idx * 3}
                    className="font-['GT_Ultra_Median',sans-serif] text-[#191e25] text-[20px] tracking-[-0.8px] leading-[27px] whitespace-nowrap group-hover/btn:text-white max-md:text-[16px]"
                  >
                    {t("blog.readMore")}
                  </LangText>
                </Link>
                <meta itemProp="datePublished" content={post.date} />
                <meta itemProp="author" content={post.author} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}