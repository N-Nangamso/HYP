import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  COLORS,
  COMPANY,
  PILLARS,
  SERVICES,
  ROLES,
  EVALUATION,
} from "../constants/branding";
import BannerSlider from "../components/BannerSlider";
import { Tricolor, Eyebrow, MarkBadge } from "../components/UI";

/* ============================================================
   MASR — Landing page
   Composes: Header · BannerSlider · Demo · Principles ·
   Pipeline · Roles · Evaluation · Contact · Footer
   Edit content in src/branding.ts. Theme lives in src/theme.tsx.
   Brand colours: Black · Purple · Red (flat, no gradients).
   ============================================================ */

/* ---------- The decision you can read ---------- */

type DemoState = "idle" | "upheld" | "overridden";

function DecisionDemo() {
  const [state, setState] = useState<DemoState>("idle");

  return (
    <div className="border-2 border-[#111111] bg-white dark:border-gray-100 dark:bg-[#111111]">
      {/* Card header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3 dark:border-gray-800">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Applicant #4471
        </span>
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          <span className="h-2 w-2 bg-[#6D28D9]" aria-hidden="true" />
          <span className="h-2 w-2 bg-[#E11D2E]" aria-hidden="true" />
          <span className="h-2 w-2 bg-[#0A0A0A] dark:bg-white" aria-hidden="true" />
          Symbolic model
        </span>
      </div>

      <div className="px-5 py-5">
        <div className="flex items-baseline justify-between">
          <p className="text-lg font-bold text-[#111111] dark:text-gray-100">
            Decision: Reject
          </p>
          <p className="text-sm font-semibold text-[#E11D2E]">
            score 0.44 / 0.50
          </p>
        </div>

        {/* The model is the explanation */}
        <pre className="mt-4 overflow-x-auto border border-gray-200 bg-gray-50 px-3 py-2 text-xs leading-relaxed text-[#111111] dark:border-gray-800 dark:bg-[#0A0A0A] dark:text-gray-200">
{`score = 0.71·savings_ratio
      + 0.34·months_employed
      − 0.62·debt_load − 0.18`}
        </pre>

        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-[#6D28D9]">
          Why — the reasoning
        </p>
        <ul className="mt-2 space-y-2 text-sm text-[#111111] dark:text-gray-300">
          {[
            "Debt load is the dominant factor (−0.62).",
            "Savings ratio sits below the approval band.",
            "Score 0.38 — under the 0.50 threshold.",
          ].map((reason) => (
            <li key={reason} className="flex gap-2">
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#6D28D9]"
                aria-hidden="true"
              />
              {reason}
            </li>
          ))}
        </ul>

        {/* Outcome / actions */}
        {state === "idle" && (
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setState("upheld")}
              className="flex-1 bg-[#6D28D9] px-4 py-3 text-sm font-semibold text-white hover:bg-[#5B21B6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] dark:focus-visible:ring-white"
            >
              Uphold decision
            </button>
            <button
              type="button"
              onClick={() => setState("overridden")}
              className="flex-1 border-2 border-[#E11D2E] px-4 py-3 text-sm font-semibold text-[#E11D2E] hover:bg-[#E11D2E] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] dark:focus-visible:ring-white"
            >
              Override
            </button>
          </div>
        )}

        {state === "upheld" && (
          <div className="mt-6 border-l-4 border-[#6D28D9] bg-gray-50 px-4 py-3 dark:bg-[#1a1a1a]">
            <p className="text-sm font-semibold text-[#111111] dark:text-gray-100">
              Upheld — and the reasoning travels with it.
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              The decision, the equation and the inputs are written to the audit
              log with a timestamp.
            </p>
          </div>
        )}

        {state === "overridden" && (
          <div className="mt-6 border-l-4 border-[#E11D2E] bg-gray-50 px-4 py-3 dark:bg-[#1a1a1a]">
            <p className="text-sm font-semibold text-[#111111] dark:text-gray-100">
              Overridden — the human stays in control.
            </p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Maybe the model misread this case. The override is logged with its
              reason and feeds the next retraining run.
            </p>
          </div>
        )}

        {state !== "idle" && (
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-3 text-xs font-semibold text-[#6D28D9] underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]"
          >
            Try the other choice
          </button>
        )}
      </div>
    </div>
  );
}

function DemoSection() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <Eyebrow color={COLORS.purple}>See a decision</Eyebrow>
          <h2 className="text-3xl font-bold text-[#111111] dark:text-gray-100">
            Every decision is an equation you can read.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600 dark:text-gray-400">
            This is what an officer sees: the model's verdict, the equation
            behind it, the factor that drove it — and the power to override.
            Try both.
          </p>
        </div>
        <div>
          <DecisionDemo />
          <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-500">
            A sample decision — click the buttons.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Principles ---------- */

function Principles() {
  return (
    <section
      id="principles"
      className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#111111]"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Eyebrow color={COLORS.ink} className="dark:!text-gray-100">
          Principles
        </Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold text-[#111111] dark:text-gray-100">
          Three guarantees. Every model must pass them.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PILLARS.map((p) => (
            <article key={p.title} className="bg-white dark:bg-[#1a1a1a]">
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: p.color }}
              />
              <div className="p-6">
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: p.color }}
                >
                  {p.sub}
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#111111] dark:text-gray-100">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works (the pipeline) ---------- */

function Pipeline() {
  return (
    <section id="pipeline" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <Eyebrow color={COLORS.purple}>How it works</Eyebrow>
      <h2 className="max-w-2xl text-3xl font-bold text-[#111111] dark:text-gray-100">
        Six agents. One transparent model.
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="flex flex-col border border-gray-200 p-6 dark:border-gray-800 dark:bg-[#111111]"
          >
            <span
              className="inline-block h-3 w-3"
              style={{ backgroundColor: s.color }}
              aria-hidden="true"
            />
            <h3 className="mt-4 text-xl font-bold text-[#111111] dark:text-gray-100">
              {s.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {s.body}
            </p>
            <p
              className="mt-5 text-xs font-bold uppercase tracking-widest"
              style={{ color: s.color }}
            >
              {s.mark}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- The two roles ---------- */

function Roles() {
  return (
    <section
      id="roles"
      className="border-y border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#111111]"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Eyebrow color={COLORS.red}>Who uses it</Eyebrow>
        <h2 className="max-w-2xl text-3xl font-bold text-[#111111] dark:text-gray-100">
          Two roles. Two views.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ROLES.map((r) => (
            <article key={r.label} className="bg-white p-8 dark:bg-[#1a1a1a]">
              <MarkBadge label={r.label} />
              <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {r.body}
              </p>
              <a
                href={r.href}
                className="mt-5 inline-block text-sm font-semibold text-[#6D28D9] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]"
              >
                See it decide →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Evaluation ---------- */

function Evaluation() {
  return (
    <section id="evaluation" className="bg-[#0A0A0A]">
      <Tricolor />
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <Eyebrow color={COLORS.red}>Evaluation</Eyebrow>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {EVALUATION.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-300">
              {EVALUATION.body}
            </p>
            <a
              href={EVALUATION.ctaHref}
              className="mt-8 inline-block border-2 border-white px-6 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-[#0A0A0A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9]"
            >
              {EVALUATION.ctaLabel}
            </a>
          </div>

          <ul className="space-y-4">
            {EVALUATION.points.map(([title, body]) => (
              <li key={title} className="border-l-4 border-[#6D28D9] pl-4">
                <p className="text-sm font-bold text-white">{title}</p>
                <p className="mt-0.5 text-sm text-gray-400">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

export default function LandingPage() {
  return (
    <>
      <BannerSlider />
      <DemoSection />
      <Principles />
      <Pipeline />
      <Roles />
    </>
  );
}