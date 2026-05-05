import "./i18n/config";
import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ProjectTransitionProvider } from "./components/ProjectTransitionContext";
const faviconUrl = "/favicon.ico";

export default function App() {
  useEffect(() => {
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  return (
    <ProjectTransitionProvider>
      <RouterProvider router={router} />
    </ProjectTransitionProvider>
  );
}