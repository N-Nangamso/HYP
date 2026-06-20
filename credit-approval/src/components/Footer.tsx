import { Link } from "react-router-dom";
import {
  LOGO,
  COMPANY,
  CONTACT_EMAIL,
  NAV_LINKS,
  ROLE_LINKS,
} from "../constants/branding";
import { Tricolor } from "./UI";

/* ============================================================
   Footer — identity, quick links, contact, tricolor close.
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-[#0A0A0A]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        {/* Identity */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO}
              alt={`${COMPANY.name} logo`}
              className="h-9 w-auto"
            />
            <p className="text-base font-bold text-[#6D28D9]">{COMPANY.name}</p>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {COMPANY.tagline} · {COMPANY.institution}
          </p>
          <p className="mt-4 max-w-xs text-xs text-gray-500 dark:text-gray-500">
            {COMPANY.motto}
          </p>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">
            By {COMPANY.author} · {COMPANY.ref}
          </p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-widest text-[#111111] dark:text-gray-100">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm text-gray-600 hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] dark:text-gray-400 dark:hover:text-[#6D28D9]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#111111] dark:text-gray-100">
            The roles
          </p>
          <ul className="mt-3 space-y-2">
            {ROLE_LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.href}
                  className="text-sm text-gray-600 hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] dark:text-gray-400 dark:hover:text-[#6D28D9]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#111111] dark:text-gray-100">
            Contact
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm font-semibold text-[#6D28D9] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
            A research project on symbolic regression for explainable, fair
            lending decisions.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            © {year} {COMPANY.name} · {COMPANY.author} ({COMPANY.ref}).
          </p>
          <div className="flex gap-4">
            <Link
              to="/about"
              className="text-xs text-gray-500 hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] dark:text-gray-500"
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="text-xs text-gray-500 hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] dark:text-gray-500"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <Tricolor />
    </footer>
  );
}