import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";
import { ProjectTransitionOverlay } from "./ProjectTransitionOverlay";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

export function Layout() {
  const location = useLocation();

  return (
    <SmoothScrollProvider>
      <div className="w-full min-h-screen bg-white overflow-x-clip">
        <Header />
        <AnimatePresence mode="sync">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
        <Footer />
        <ProjectTransitionOverlay />
      </div>
    </SmoothScrollProvider>
  );
}