import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { useEffect, Suspense } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
import { ProjectTransitionOverlay } from "./ProjectTransitionOverlay";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

export function Layout() {
  const location = useLocation();

  /* Block right-click context menu on images/videos globally */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG" || target.tagName === "VIDEO" || target.tagName === "CANVAS") {
        e.preventDefault();
      }
    };
    document.addEventListener("contextmenu", handler);
    return () => document.removeEventListener("contextmenu", handler);
  }, []);

  /* Block copy/cut/paste of selected content */
  useEffect(() => {
    const handler = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement;
      const tag = target.tagName;
      if (tag !== "INPUT" && tag !== "TEXTAREA") {
        e.preventDefault();
      }
    };
    document.addEventListener("copy", handler);
    document.addEventListener("cut", handler);
    return () => {
      document.removeEventListener("copy", handler);
      document.removeEventListener("cut", handler);
    };
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="w-full min-h-screen bg-white overflow-x-clip">
        <Header />
        <AnimatePresence mode="sync">
          <PageTransition key={location.pathname}>
            <Suspense fallback={<div className="min-h-screen" />}>
              <Outlet />
            </Suspense>
          </PageTransition>
        </AnimatePresence>
        <Footer />
        <ProjectTransitionOverlay />
      </div>
    </SmoothScrollProvider>
  );
}