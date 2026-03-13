import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TrabajoPage } from "./pages/TrabajoPage";
import { SobreDigioPage } from "./pages/SobreDigioPage";
import { UnetePage } from "./pages/UnetePage";
import { BlogPage } from "./pages/BlogPage";
import { ContactoPage } from "./pages/ContactoPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { PrivacidadPage } from "./pages/PrivacidadPage";
import { CookiesPage } from "./pages/CookiesPage";
import { BlogPostDetailPage } from "./pages/BlogPostDetailPage";
import { IALandingPage } from "./pages/IALandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "trabajo", Component: TrabajoPage },
      { path: "proyecto/:slug", Component: ProjectDetailPage },
      { path: "sobre-digio", Component: SobreDigioPage },
      { path: "unete", Component: UnetePage },
      { path: "ia", Component: IALandingPage },
      { path: "blog", Component: BlogPage },
      { path: "blog/:slug", Component: BlogPostDetailPage },
      { path: "contacto", Component: ContactoPage },
      { path: "privacidad", Component: PrivacidadPage },
      { path: "cookies", Component: CookiesPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);