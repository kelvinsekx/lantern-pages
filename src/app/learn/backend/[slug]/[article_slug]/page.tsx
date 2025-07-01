import path from "node:path";
import { NavigationTop } from "@/components/nav";
import { ArticleSideBar } from "./components/sidebar";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getBlogPosts, readMDXFile } from "@/utilities/mdx-utils";

type Params = Promise<{ slug: string; article_slug: string }>;

export default async function BlogPage({ params }: { params: Params }) {
  const { slug, article_slug } = await params;
  const { metadata, content } = await readMDXFile(
    `${path.join(
      process.cwd(),
      "articles",
      "backend",
      slug,
      "contents",
      article_slug + ".mdx"
    )}`
  );

  const posts = await getBlogPosts(slug);
  const relatedPosts = posts.filter(
    (p) => p.metadata.syllabus_code == metadata.syllabus_code
  );
  return (
    <div>
      <NavigationTop fixed />
      <div className="flex gap-4 relative">
        <ArticleSideBar
          content={relatedPosts}
          activeSlug={article_slug}
          category={metadata.syllabus_code}
        />

        <div className="space-y-10 md:mr-10 py-10 w-full md:w-[calc(100%-25%-10%)] absolute right-0 top-[50px]">
          <article className="prose prose-slate prose-h2:mt-8 prose-h2:mb-2 prose-h2:tracking-tight prose-strong:text-black-250 shadow-inner border border-muted-200 rounded-3xl p-5 md:p-10 space-y-5 block max-w-[69ch]">
            <h1 className="text-5xl font-black tracking-tight py-10">
              {metadata.title}
            </h1>
            <MDXRemote source={content} />
          </article>
          <hr />
          <div className="text-black-100 font-normal pl-1 md:p-0">
            <p>Last update {metadata.last_updated_date}</p>
            <p>
              This page was contributed to by{" "}
              <a href="https://github.com/kelvinsekx">kelvinsekx</a>,{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function generateStaticParams() {
//   const posts = await getBlogPosts("node");
//   return posts.map((p) => ({ slug: p.slug }));
// }

// export const dynamicParams = false;
