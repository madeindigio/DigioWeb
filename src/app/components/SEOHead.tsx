import { useEffect } from "react";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const SITE_NAME = "Digio";
const BASE_URL = "https://digio.es";

interface SEOHeadProps {
  /** i18n key for <title>. Falls back to "Digio" when empty. */
  titleKey?: string;
  /** Hard-coded title override (skips i18n). */
  title?: string;
  /** i18n key for meta description. */
  descriptionKey?: string;
  /** Hard-coded description override. */
  description?: string;
  /** Override canonical path (defaults to current pathname). */
  canonicalPath?: string;
  /** OG image URL. */
  ogImage?: string;
  /** OG type — defaults to "website". */
  ogType?: string;
  /** JSON-LD structured data objects to inject. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  /** Do not append " | Digio" to the title. */
  noSuffix?: boolean;
  /** Add noindex,nofollow robots directives for deprecated/private pages. */
  noIndex?: boolean;
}

/* ─── Helpers ─── */
function setMeta(name: string, content: string, attr = "name") {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function removeMeta(name: string, attr = "name") {
  document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`)?.remove();
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

const JSONLD_ID = "seo-jsonld";
function setJsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  let el = document.getElementById(JSONLD_ID) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = JSONLD_ID;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(data) ? data : [data]);
}

function removeJsonLd() {
  document.getElementById(JSONLD_ID)?.remove();
}

/* ─── Component ─── */
export function SEOHead({
  titleKey,
  title: titleOverride,
  descriptionKey,
  description: descOverride,
  canonicalPath,
  ogImage,
  ogType = "website",
  jsonLd,
  noSuffix = false,
  noIndex = false,
}: SEOHeadProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    /* Title */
    const rawTitle = titleOverride || (titleKey ? t(titleKey) : "");
    const pageTitle = rawTitle
      ? noSuffix
        ? rawTitle
        : `${rawTitle} | ${SITE_NAME}`
      : SITE_NAME;
    document.title = pageTitle;

    /* Meta description */
    const desc = descOverride || (descriptionKey ? t(descriptionKey) : "");
    if (desc) {
      setMeta("description", desc);
      setMeta("og:description", desc, "property");
      setMeta("twitter:description", desc, "name");
    } else {
      removeMeta("description");
    }

    /* Canonical */
    const path = canonicalPath ?? location.pathname;
    const canonical = `${BASE_URL}${path === "/" ? "" : path}`;
    setCanonical(canonical);

    /* Open Graph */
    setMeta("og:title", pageTitle, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:site_name", SITE_NAME, "property");
    if (ogImage) {
      setMeta("og:image", ogImage, "property");
    } else {
      setMeta("og:image", `${BASE_URL}/og-image.jpg`, "property");
    }

    /* Twitter Card */
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", pageTitle, "name");

    if (noIndex) {
      setMeta("robots", "noindex, nofollow", "name");
      setMeta("googlebot", "noindex, nofollow", "name");
    } else {
      removeMeta("robots", "name");
      removeMeta("googlebot", "name");
    }

    /* Language */
    document.documentElement.lang = i18n.language || "es";

    /* JSON-LD */
    if (jsonLd) {
      setJsonLd(jsonLd);
    } else {
      removeJsonLd();
    }

    return () => {
      removeJsonLd();
    };
  }, [
    titleOverride,
    titleKey,
    descriptionKey,
    descOverride,
    canonicalPath,
    ogImage,
    ogType,
    jsonLd,
    noSuffix,
    noIndex,
    t,
    i18n.language,
    location.pathname,
  ]);

  return null;
}

/* ─── Pre-built JSON-LD generators ─── */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digio",
    legalName: "Digio Soluciones Digitales S.L.",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    foundingDate: "2007",
    description:
      "Digio es una empresa de soluciones digitales especializada en diseno, desarrollo web y movil, Cloud & DevOps, y consultoria tecnologica.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Murcia",
      addressCountry: "ES",
    },
    sameAs: [
      "https://www.linkedin.com/company/digio-soluciones-digitales/",
      "https://x.com/diikioo",
      "https://www.instagram.com/digio.es/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${BASE_URL}/contacto`,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function articleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image: opts.image,
    datePublished: opts.datePublished,
    author: {
      "@type": "Organization",
      name: opts.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Digio",
      url: BASE_URL,
    },
    mainEntityOfPage: opts.url,
  };
}

export function projectJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    ...(opts.image ? { image: opts.image } : {}),
    creator: {
      "@type": "Organization",
      name: "Digio",
      url: BASE_URL,
    },
  };
}
