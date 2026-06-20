import { useCallback, useEffect, useState } from "react";
import { SLIDES } from "../constants/branding";

/* ============================================================
   BannerSlider — the hero carousel.
   Content comes from SLIDES in src/branding.ts; each slide's
   `accent` drives its eyebrow, side bar and CTA.
   Flat colours, no gradients. Auto-advances, pauses on hover /
   focus, and honours prefers-reduced-motion.
   ============================================================ */

const INTERVAL_MS = 6000;

export default function BannerSlider() {
  const count = SLIDES.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count],
  );

  // Auto-advance, unless paused, single-slide, or reduced motion.
  useEffect(() => {
    if (paused || count <= 1) return;
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % count),
      INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [paused, count]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(index - 1);
    if (e.key === "ArrowRight") go(index + 1);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className="relative flex min-h-[30rem] items-center overflow-hidden border-b border-gray-200 bg-white md:min-h-[34rem] dark:border-gray-800 dark:bg-[#0A0A0A]"
    >
      {SLIDES.map((s, i) => {
        const active = i === index;
        return (
          <div
            key={s.title}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={!active}
            className={`absolute inset-0 flex items-center transition-opacity duration-700 motion-reduce:transition-none ${
              active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-6xl px-5 py-16">
              <div className="flex max-w-2xl gap-5">
                {/* Accent bar */}
                <span
                  className="hidden w-1.5 shrink-0 self-stretch sm:block"
                  style={{ backgroundColor: s.accent }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: s.accent }}
                  >
                    {s.eyebrow}
                  </p>
                  <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#111111] md:text-6xl dark:text-gray-100">
                    {s.title}
                  </h1>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-400">
                    {s.body}
                  </p>
                  <a
                    href={s.cta.href}
                    className="mt-8 inline-block px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] dark:focus-visible:ring-white"
                    style={{ backgroundColor: s.accent }}
                  >
                    {s.cta.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Arrows */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-gray-300 bg-white/80 text-[#111111] backdrop-blur hover:border-[#6D28D9] hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] md:left-5 dark:border-gray-700 dark:bg-[#0A0A0A]/70 dark:text-gray-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-gray-300 bg-white/80 text-[#111111] backdrop-blur hover:border-[#6D28D9] hover:text-[#6D28D9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] md:right-5 dark:border-gray-700 dark:bg-[#0A0A0A]/70 dark:text-gray-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {count > 1 && (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {SLIDES.map((s, i) => {
            const active = i === index;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={active}
                className="h-2 w-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]"
                style={{
                  backgroundColor: active ? s.accent : "#d1d5db",
                }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}