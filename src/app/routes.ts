import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import { Layout } from "./components/Layout";

/* ── Lazy-loaded pages (code-split into separate chunks) ── */
const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage").then((m) => ({ default: m.ProjectDetailPage })));
const TrabajoPage = lazy(() => import("./pages/TrabajoPage").then((m) => ({ default: m.TrabajoPage })));
const SobreDigioPage = lazy(() => import("./pages/SobreDigioPage").then((m) => ({ default: m.SobreDigioPage })));
const UnetePage = lazy(() => import("./pages/UnetePage").then((m) => ({ default: m.UnetePage })));
const BlogPage = lazy(() => import("./pages/BlogPage").then((m) => ({ default: m.BlogPage })));
const ContactoPage = lazy(() => import("./pages/ContactoPage").then((m) => ({ default: m.ContactoPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));
const PrivacidadPage = lazy(() => import("./pages/PrivacidadPage").then((m) => ({ default: m.PrivacidadPage })));
const CookiesPage = lazy(() => import("./pages/CookiesPage").then((m) => ({ default: m.CookiesPage })));
const BlogPostDetailPage = lazy(() => import("./pages/BlogPostDetailPage").then((m) => ({ default: m.BlogPostDetailPage })));
const BlogPostNuevaMarca = lazy(() => import("./pages/BlogPostNuevaMarca").then((m) => ({ default: m.BlogPostNuevaMarca })));
const IALandingPage = lazy(() => import("./pages/IALandingPage").then((m) => ({ default: m.IALandingPage })));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "trabajo", Component: TrabajoPage },
      {
        path: "proyecto/:slug",
        Component: ProjectDetailPage,
      },
      { path: "sobre-digio", Component: SobreDigioPage },
      { path: "unete", Component: UnetePage },
      { path: "ia", Component: IALandingPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/renovacion-marca-digio", Component: BlogPostNuevaMarca },
      { path: "blog/:slug", Component: BlogPostDetailPage },
      { path: "contacto", Component: ContactoPage },
      { path: "privacidad", Component: PrivacidadPage },
      { path: "cookies", Component: CookiesPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);