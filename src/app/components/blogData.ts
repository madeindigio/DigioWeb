export interface BlogPost {
  slug: string;
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

export const blogPosts: BlogPost[] = [
  {
    slug: "herramientas-ia-nos-gustaria-haber-tenido-antes",
    i18nKey: "aiToolsWantedBefore",
    date: "2026-03-25",
    categoryKey: "innovacionDigital",
    image: "/images/blog/herramientas-ia-hero-blog.jpg",
    contentImage: "/images/blog/herramientas-ia-hero-blog.jpg",
    author: "Digio",
  },
  {
    slug: "renovacion-marca-digio",
    i18nKey: "brandRenewal",
    date: "2025-09-10",
    categoryKey: "marca",
    image: "/images/blog/renovacion-marca-digio/00-ipad-portada-digio.png",
    customDetailPath: "/blog/renovacion-marca-digio",
    author: "Digio",
  },
  {
    slug: "aplicaciones-moviles-hibridas-o-nativas",
    i18nKey: "mobileApps",
    date: "2025-05-18",
    categoryKey: "desarrollo",
    image: "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczMzI2MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    contentImage: "https://images.unsplash.com/photo-1755372740351-8d7d0fcd582c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwcyUyMHNjcmVlbiUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MzMyNjk5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "plataformas-innovadoras-sector-energetico",
    i18nKey: "energyPlatforms",
    date: "2025-07-16",
    categoryKey: "innovacionDigital",
    image: "https://images.unsplash.com/photo-1764092183895-13931e9fd84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBkaWdpdGFsJTIwcGxhdGZvcm18ZW58MXx8fHwxNzczMzI2MDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "mision-comercial-suecia",
    i18nKey: "swedenMission",
    date: "2024-09-12",
    categoryKey: "innovacionDigital",
    image: "https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWRlJTIwZGVsZWdhdGlvbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzczMzI2MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "primer-mvp-iop",
    i18nKey: "mvpIoP",
    date: "2024-08-13",
    categoryKey: "disenoProducto",
    image: "https://images.unsplash.com/photo-1730818876628-4c2ecc6ed9e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGRldmljZXMlMjBwcm90b3R5cGV8ZW58MXx8fHwxNzczMzI2MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "huella-rf-deteccion-ocupacion",
    i18nKey: "rfOccupancy",
    date: "2024-01-16",
    categoryKey: "desarrollo",
    image: "https://images.unsplash.com/photo-1765736717011-ed3dc50951f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWRpbyUyMGZyZXF1ZW5jeSUyMHNlbnNvciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzczMzI2MDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "mision-comercial-israel-2020",
    i18nKey: "israelMission",
    date: "2023-02-16",
    categoryKey: "innovacionDigital",
    image: "https://images.unsplash.com/photo-1583611219326-eb5a5204cd32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwdHJhZGUlMjBtaXNzaW9uJTIwSXNyYWVsfGVufDF8fHx8MTc3MzMyNjA4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "inteligencia-artificial-transformacion-negocio",
    i18nKey: "aiTransform",
    date: "2022-11-05",
    categoryKey: "innovacionDigital",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbWFjaGluZSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3MzI0MzAzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "estrategia-digital-empresas-2023",
    i18nKey: "digitalStrategy",
    date: "2022-06-20",
    categoryKey: "innovacionDigital",
    image: "https://images.unsplash.com/photo-1769798643630-194a0fcfa367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzcyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc3MzI4MTU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "diseno-ux-centrado-usuario",
    i18nKey: "uxDesign",
    date: "2022-03-14",
    categoryKey: "disenoProducto",
    image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHByb2R1Y3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzczMzI2MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "cloud-computing-infraestructura-escalable",
    i18nKey: "cloudComputing",
    date: "2021-12-08",
    categoryKey: "desarrollo",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwc2VydmVyc3xlbnwxfHx8fDE3NzMzMjYwODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "ciberseguridad-proteccion-datos",
    i18nKey: "cybersecurity",
    date: "2021-09-22",
    categoryKey: "desarrollo",
    image: "https://images.unsplash.com/photo-1768839720936-87ce3adf2d08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YSUyMHByb3RlY3Rpb24lMjBkaWdpdGFsfGVufDF8fHx8MTc3MzIzNjYxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Digio",
  },
  {
    slug: "metodologias-agiles-equipos-software",
    i18nKey: "agileTeams",
    date: "2021-05-10",
    categoryKey: "disenoProducto",
    image: "https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMHRlYW0lMjBzb2Z0d2FyZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzczMzI2MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
  return blogPosts.find((p) => p.slug === slug);
}

/** Returns N related posts (excluding the given slug) */
export function getRelatedPosts(slug: string, n = 3) {
  const post = getPostBySlug(slug);
  if (!post) return sortedBlogPosts.slice(0, n);
  // Prefer same category, then most recent
  const sameCategory = sortedBlogPosts.filter(
    (p) => p.slug !== slug && p.categoryKey === post.categoryKey
  );
  const others = sortedBlogPosts.filter(
    (p) => p.slug !== slug && p.categoryKey !== post.categoryKey
  );
  return [...sameCategory, ...others].slice(0, n);
}