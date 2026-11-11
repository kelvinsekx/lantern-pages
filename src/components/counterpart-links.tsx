import Link from "next/link";
import type { Counterpart } from "@/utilities/mdx-utils";

export function CounterpartLinks({ items }: { items: Counterpart[] }) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Same topic in other tracks"
      className="not-prose flex flex-wrap items-center justify-center gap-2 text-sm text-foreground/70"
    >
      <span>Same topic in:</span>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-full border border-border px-3 py-1 font-medium text-foreground hover:bg-accent/10"
        >
          {item.trackTitle}
        </Link>
      ))}
    </nav>
  );
}
