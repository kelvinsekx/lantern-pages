"use client";
import { useReadArticles } from "@/lib/read-progress";

/** `paths` are the hrefs of every article in the track. */
export function ProgressCard({ paths }: { paths: string[] }) {
  const read = useReadArticles();
  const done = paths.filter((p) => read[p]).length;
  const pct = paths.length ? Math.round((done / paths.length) * 100) : 0;

  return (
    <div className="border bg-[#fff] border-muted rounded-2xl w-80 px-5 py-10 lg:mr-20 mx-auto">
      <div className="text-black-400 font-semibold text-xl">
        <span className="text-black">{pct}%</span> Completed
      </div>
      <p className="text-black-250">
        {done} of {paths.length} articles read
      </p>
    </div>
  );
}
