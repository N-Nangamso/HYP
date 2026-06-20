import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/* ============================================================
   Layout — wraps every route with Header + Footer, and handles
   scrolling: jump to #hash targets after navigation, otherwise
   scroll to top on each route change.
   ============================================================ */

function useScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the route render first, then scroll to the section.
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function Layout() {
  useScrollManager();

  return (
    <div className="min-h-screen bg-white font-sans text-[#222222] antialiased dark:bg-[#161616] dark:text-gray-100">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}