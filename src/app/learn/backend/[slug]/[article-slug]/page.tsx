import path from "node:path";
import { NavigationTop } from "@/components/nav";
import { ArticleSideBar } from "./components/sidebar";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { readMDXFile } from "@/utilities/mdx-utils";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata, content } = await readMDXFile(
    `${path.join(
      process.cwd(),
      "src",
      "articles",
      "backend",
      slug,
      "contents",
      "001_introduction_to_development.mdx"
    )}`
  );
  return (
    <div>
      <NavigationTop fixed />
      <div className="flex pr-3 gap-4 relative">
        <ArticleSideBar />

        <div className="space-y-10 mr-10 py-10 w-[calc(100%-25%-10%)] absolute right-0 top-[50px]">
          <article className="prose shadow-inner border border-muted-500 rounded-3xl p-10 space-y-5 block max-w-[80ch]">
            <h1 className="text-5xl font-black tracking-tight py-10 text-black-500">
              {metadata.title}
            </h1>
            <MDXRemote source={content} />
          </article>
          <hr />
          <div className="text-black-100">
            <p>Last update 2024-0-34</p>
            <p>
              This page was contributed to by{" "}
              <a
                className="text-[#1875f2]"
                href="https://github.com/kelvinsekx"
              >
                kelvinsekx
              </a>
              ,{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "about" }];
}

export const dynamicParams = false;
