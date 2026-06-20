/* ============================================================
   MASR — Branding & content tokens
   Multi-Agent Symbolic Regression for explainable loan decisions.
   One file to edit colours, logo, contact details, and copy.
   Brand colours: Black · Purple · Red  (flat, no gradients)
   ============================================================ */

/* ---------- Identity ----------
   CONFIRM THESE THREE:
   1. LOGO path (file lives in /public, served from the root).
   2. COMPANY.name — short title used in the nav and footer.
   3. CONTACT_EMAIL — the author's address. */

export const LOGO = "/logooan.png";

export const COMPANY = {
  name: "MASR",
  fullName:
    "Multi-Agent Symbolic Regression Framework for Explainable AI in Loan Decision Systems",
  tagline: "Explainable AI for loan decisions",
  institution: "University of Johannesburg",
  author: "Ndamase N",
  ref: "219033822",
  motto: "Symbolic models you can read, question, and audit.",
} as const;

export const CONTACT_EMAIL = "219033822@student.uj.ac.za";

// ← Leave empty to hide WhatsApp buttons.
export const WHATSAPP_NUMBER: string = "";

/* ---------- Colors ----------
   Purple → the model and everything you can act on
   Red    → attention, override, fairness flags
   Black  → structure, text, the surfaces that frame it
   Static utility classes use the literal hex (e.g. bg-[#6D28D9]);
   use these exports for dynamic styles. */

export const COLORS = {
  purple: "#6D28D9",
  purpleHover: "#5B21B6",
  red: "#E11D2E",
  redHover: "#B91C1C",
  black: "#0A0A0A",
  ink: "#111111", // body text (light) / surfaces (dark)
} as const;

/* ---------- Navigation ---------- */

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/loan-officer", label: "Loan Officer" },
  { href: "/compliance-auditor", label: "Compliance Auditor" },
] as const;

/** Footer shortcuts to the two user roles. */
export const ROLE_LINKS = [
  { href: "/#roles", label: "Loan Officer" },
  { href: "/#roles", label: "Compliance Auditor" },
] as const;

/* ---------- Banner slider ---------- */

export type Slide = {
  accent: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export const SLIDES: Slide[] = [
  {
    accent: COLORS.purple,
    eyebrow: "Explainable by design",
    title: "Loan decisions you can read.",
    body: "A symbolic equation, not a black box — every approve or reject comes with reasoning a person can follow.",
    cta: { label: "See a decision", href: "#demo" },
  },
  {
    accent: COLORS.red,
    eyebrow: "Fair and auditable",
    title: "Built to be questioned.",
    body: "Fairness checks across gender, age and race, and an audit trail for every decision — ready for the EU AI Act.",
    cta: { label: "See the principles", href: "#principles" },
  },
  {
    accent: COLORS.black,
    eyebrow: "How it works",
    title: "Six agents, one transparent model.",
    body: "Cooperating agents evolve and prune symbolic equations, then governance picks the best trade-off of accuracy, fairness and simplicity.",
    cta: { label: "See the pipeline", href: "#pipeline" },
  },
];

/* ---------- Principles (the three guarantees) ---------- */

export const PILLARS = [
  {
    color: COLORS.purple,
    title: "Explainable, not approximated",
    sub: "Why decisions are clear",
    body: "The model is a symbolic equation, so its reasoning is the model itself — not a SHAP or LIME guess layered over a black box.",
  },
  {
    color: COLORS.red,
    title: "Fair across groups",
    sub: "How bias is caught",
    body: "Equal-opportunity and demographic-parity checks run per protected attribute, and a fairness agent constrains every model that gets promoted.",
  },
  {
    color: COLORS.black,
    title: "Auditable end to end",
    sub: "How it stays accountable",
    body: "Every decision, explanation and input is stored with a timestamp, so an auditor can reconstruct and defend any outcome.",
  },
] as const;

/* ---------- The pipeline (six agents in three stages) ---------- */

export const SERVICES = [
  {
    color: COLORS.purple,
    title: "Generate",
    body: "Two generator agents evolve candidate equations — one tree-based, one chromosome-based — across a shared candidate pool.",
    mark: "GP · GEP",
  },
  {
    color: COLORS.red,
    title: "Refine",
    body: "The Optimiser tunes constants and scores fit; the Simplifier reduces each equation with SymPy and caps its complexity.",
    mark: "Optimiser · Simplifier",
  },
  {
    color: COLORS.black,
    title: "Govern",
    body: "The Fairness agent enforces equity as a hard constraint; Governance picks the Pareto-best model and versions it for rollback.",
    mark: "Fairness · Governance",
  },
] as const;

/* ---------- The two roles ---------- */

export const ROLES = [
  {
    label: "Loan Officer",
    href: "#demo",
    body: "Uploads one applicant or a batch and reads back an approve / reject decision with its symbolic reasoning and the dominant adverse-action factor.",
  },
  {
    label: "Compliance Auditor",
    href: "#demo",
    body: "Inspects explanations, reviews approval rates by gender, age and race, flags discrimination, exports reports, and triggers retraining.",
  },
] as const;

/* ---------- Evaluation / case study ---------- */

export const EVALUATION = {
  ctaLabel: "See a sample decision",
  ctaHref: "#demo",
  title: "Validated against the black boxes it replaces.",
  body: "Trained and tested on standard credit-scoring data, then compared head-to-head with the opaque models it aims to replace — on accuracy, fairness and explanation stability.",
  points: [
    ["German Credit dataset", "A standard benchmark, with Give Me Some Credit as a secondary set."],
    ["Measured against black boxes", "Compared to Logistic Regression and XGBoost with SHAP and LIME."],
    ["Scored on more than accuracy", "AUC-ROC, F1 and Brier score, plus equal-opportunity difference."],
    ["Reproducible", "Identical input yields an identical decision and explanation across runs."],
  ],
} as const;