const LABELS: Record<string, { label: string; className: string }> = {
  stub: { label: "Stub", className: "bg-muted text-foreground/60" },
  "in-progress": { label: "Draft", className: "bg-amber-100 text-amber-900" },
  "un-published": {
    label: "Unpublished",
    className: "bg-red-100 text-red-900",
  },
};

/** Writer's aid: only non-published statuses render, and those only appear in dev. */
export function StatusBadge({ status }: { status?: string }) {
  const entry = status ? LABELS[status] : undefined;
  if (!entry) return null;

  return (
    <span
      className={`ml-2 rounded-full px-2 py-0.5 align-middle text-xs font-medium ${entry.className}`}
    >
      {entry.label}
    </span>
  );
}
