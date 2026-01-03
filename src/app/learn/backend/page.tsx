import cuid2 from "@paralleldrive/cuid2";
import { LibraryBig, LinkIcon } from "lucide-react";

import syllabus from "./syllabus.json";
import { getBlogPosts } from "@/utilities/mdx-utils";
import Link from "next/link";
import { ShowProgressOrLogout } from "@/components/progress-or-logout";

export default async function ListSyllabusPage() {
  const posts = await getBlogPosts("node");
  const sortedPosts = posts.sort((a, b) => {
    const extractParts = (str: string) => {
      const slice = str.match(/[^/]+$/);
      if (!slice) {
        throw new Error("Invalid path to slice");
      }
      const m = slice[0].match(/^(\d+)([a-z]?)-/i);
      if (!m) {
        throw new Error("Invalid string format to match");
      }
      return {
        num: parseInt(m[1], 10),
        letter: m[2] || "",
      };
    };

    const partA = extractParts(a.slug);
    const partB = extractParts(b.slug);

    if (partA.num !== partB.num) {
      return partA.num - partB.num;
    }

    return partA.letter.localeCompare(partB.letter);
  });
  return (
    <div>
      <div className="sekx__banner bg-green flex flex-col md:flex-row justify-between gap-y-10 py-10 px-4 md:p-10 lg:p-20">
        <div className="space-y-5 text-[#fff] tracking-tight md:max-w-2/3">
          <div>
            <p className="font-extrabold text-5xl md:leading-16">
              Learn backend Development{" "}
              <span className="text-lg md:text-xl">Node</span>
            </p>
          </div>
          <div>An indepth and production ready guide</div>
        </div>
        <ShowProgressOrLogout />
      </div>
      <div className="sekx__list-stages">
        <ul>
          {syllabus.map((stage, index) => (
            <li
              key={cuid2.createId()}
              className="bg-muted-200 pt-10 flex flex-col"
            >
              <div className="flex px-3.5 md:px-12">
                <div className="w-10 h-10 md:w-20 md:h-20 text-muted-0 rounded-full bg-black border-2 border-black">
                  <div className="flex w-full h-full justify-center items-center text-xl md:text-4xl">
                    {index + 1}
                  </div>
                </div>
                <section className="pl-2 md:pl-10 space-y-1 flex-1">
                  <header className="text-black-400 text-2xl md:text-3xl font-semibold tracking-tight">
                    {stage.title}
                  </header>
                  <p className="text-black-150 text-base md:text-lg font-medium">
                    {stage.description}
                  </p>
                  <p className="text-black-250 mt-8 flex items-baseline gap-2">
                    <LibraryBig />
                  </p>
                  {sortedPosts
                    .filter((p) => p.metadata.syllabus_code === stage.code)
                    .sort()
                    .map((p) => (
                      <Link
                        href={p.slug}
                        key={p.slug}
                        className="block mt-2 hover:text-black-150 active:text-black md:text-lg w-fit group"
                      >
                        {p.metadata.short_title || p.metadata.title}{" "}
                        <LinkIcon className="inline stroke-muted group-hover:stroke-black w-4 h-4" />
                      </Link>
                    ))}
                </section>
              </div>
              <div className="h-[1px] w-full bg-black mt-10"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
