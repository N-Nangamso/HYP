import type { ReactNode } from "react";

/* ============================================================
   Shared UI primitives — Tricolor bar, Eyebrow, MarkBadge.
   Brand order is always Purple · Red · Black.
   (Reconstructed from usage — reconcile with your original.)
   ============================================================ */

/** The brand bar: three flat segments, purple → red → black. */
export function Tricolor() {
  return (
    <div className="flex h-1 w-full" aria-hidden="true">
      <span className="flex-1 bg-[#6D28D9]" />
      <span className="flex-1 bg-[#E11D2E]" />
      <span className="flex-1 bg-[#0A0A0A] dark:bg-white" />
    </div>
  );
}

/** Small uppercase label that opens a section. */
export function Eyebrow({
  color,
  children,
  className = "",
}: {
  color: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mb-3 text-xs font-bold uppercase tracking-widest ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  );
}

/** The "Powered / Managed by ROGOBOA" lockup. */
export function MarkBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#111111] dark:text-gray-100">
      <span className="flex gap-1" aria-hidden="true">
        <span className="h-2.5 w-2.5 bg-[#6D28D9]" />
        <span className="h-2.5 w-2.5 bg-[#E11D2E]" />
        <span className="h-2.5 w-2.5 bg-[#0A0A0A] dark:bg-white" />
      </span>
      {label}
    </span>
  );
}