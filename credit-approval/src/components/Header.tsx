import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO, COMPANY, NAV_LINKS } from "../constants/branding";
import { useTheme } from "../constants/theme";
import { Tricolor } from "./UI";

/* ============================================================
   Header — sticky nav with mobile menu and theme toggle.
   ============================================================ */

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center border border-gray-300 text-[#111111] hover:border-[#6D28D9] hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] dark:border-gray-700 dark:text-gray-100 dark:hover:border-[#6D28D9] dark:hover:text-[#6D28D9]"
    >
      {isDark ? (
        /* Sun icon */
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        /* Moon icon */
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-[#0A0A0A]">
      <Tricolor />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]"
        >
          <img src={LOGO} alt={`${COMPANY.name} logo`} className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-wide text-[#6D28D9]">
            {COMPANY.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="text-sm font-medium text-[#111111] hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] dark:text-gray-200 dark:hover:text-[#6D28D9]"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]"
          >
            <span className="h-0.5 w-6 bg-[#111111] dark:bg-gray-100" />
            <span className="h-0.5 w-6 bg-[#111111] dark:bg-gray-100" />
            <span className="h-0.5 w-6 bg-[#111111] dark:bg-gray-100" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-5 pb-5 md:hidden dark:border-gray-800 dark:bg-[#0A0A0A]">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-gray-100 py-3 text-sm font-medium text-[#111111] dark:border-gray-800 dark:text-gray-200"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}