"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { markRead } from "@/lib/read-progress";

/** Marks the current article as read once the reader gets near the end of the page. */
export function MarkAsRead() {
  const path = usePathname();
  useEffect(() => {
    const check = () => {
      const { scrollY, innerHeight } = window;
      const total = document.documentElement.scrollHeight;
      if (scrollY + innerHeight >= total - 200) {
        markRead(path);
        window.removeEventListener("scroll", check);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [path]);
  return null;
}
