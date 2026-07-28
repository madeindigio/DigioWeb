export interface BlogPost {
  slug: string;
  legacySlugs?: string[];
  /** i18n key inside blog.posts.<key> */
  i18nKey: string;
  date: string; // ISO date for sorting
  categoryKey: string; // i18n key inside blog.categories.<key>
  image: string;
  /** Secondary image for article body */
  contentImage?: string;
  /** If true, this post has a dedicated custom page instead of the generic template */
  customDetailPath?: string;
  /** Structured data helpers */
  author: string;
}

export const POSTS_PER_PAGE = 6;
const BLOG_FALLBACK_IMAGE = "/images/placeholder-gray.svg";

export const blogPosts: BlogPost[] = [
  {
    slug: "las-herramientas-ia-que-nos-gustaria-haber-tenido-antes",
    legacySlugs: ["herramientas-ia-nos-gustaria-haber-tenido-antes"],
    i18nKey: "aiToolsWantedBefore",
    date: "2026-03-12",
    categoryKey: "innovacionDigital",
    image: "/images/blog/herramientas-ia-hero-blog.jpg",
    contentImage: "/images/blog/herramientas-ia-hero-blog.jpg",
    author: "Digio",
  },
  {
    slug: "renovacion-marca-digio",
    i18nKey: "brandRenewal",
    date: "2024-07-02",
    categoryKey: "marca",
    image: "/images/blog/renovacion-marca-digio/00-ipad-portada-digio.png",
    customDetailPath: "/blog/digio-la-renovacion-de-nuestra-marca",
    author: "Digio",
  },
  {
    slug: "creamos-plataformas-innovadoras-sector-energetico",
    legacySlugs: ["plataformas-innovadoras-sector-energetico"],
    i18nKey: "energyPlatforms",
    date: "2024-04-24",
    categoryKey: "innovacionDigital",
    image: "/images/blog/plat-innovadoras.jpg",
    contentImage: "/images/blog/plat-innovadoras.jpg",
    author: "Digio",
  },
  {
    slug: "thd",
    legacySlugs: ["huella-rf-deteccion-ocupacion"],
    i18nKey: "rfOccupancy",
    date: "2024-06-27",
    categoryKey: "desarrollo",
    image: "/images/blog/deteccion-espacios.webp",
    contentImage: "/images/blog/deteccion-espacios.webp",
    author: "Digio",
  },
  {
    slug: "que-es-un-sdk-descubre-su-funcion",
    i18nKey: "sdkFunction",
    date: "2024-10-30",
    categoryKey: "desarrollo",
    image: "/images/blog/sdk_0.webp",
    contentImage: "/images/blog/sdk_0.webp",
    author: "Digio",
  },
];

/** Posts sorted newest-first (immutable) */
export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/** Returns the N latest posts */
export function getLatestPosts(n: number) {
  return sortedBlogPosts.slice(0, n);
}

/** Returns a page of posts (1-indexed) and total page count */
export function getPaginatedPosts(page: number, perPage = POSTS_PER_PAGE) {
  const total = sortedBlogPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * perPage;
  return {
    posts: sortedBlogPosts.slice(start, start + perPage),
    currentPage: safePage,
    totalPages,
  };
}

/** Returns the detail URL for a post (custom path or default /blog/:slug) */
export function getPostDetailUrl(post: BlogPost) {
  return post.customDetailPath || `/blog/${post.slug}`;
}

/** Returns a post by slug, or undefined */
export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug || p.legacySlugs?.includes(slug));
}

/** Returns N related posts (excluding the given slug) */
export function getRelatedPosts(slug: string, n = 3) {
  const post = getPostBySlug(slug);
  if (!post) return sortedBlogPosts.slice(0, n);
  // Prefer same category, then most recent
  const sameCategory = sortedBlogPosts.filter(
    (p) => p.slug !== post.slug && p.categoryKey === post.categoryKey
  );
  const others = sortedBlogPosts.filter(
    (p) => p.slug !== post.slug && p.categoryKey !== post.categoryKey
  );
  return [...sameCategory, ...others].slice(0, n);
}