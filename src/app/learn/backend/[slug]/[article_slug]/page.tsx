import { MDXRemote, type MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import Link from "next/link";
import { getBlogPosts, getPostInformation } from "@/utilities/mdx-utils";
import { plugins } from "@/utilities/mdx-plugins";

import { NavigationTop } from "@/components/nav";
import { ArticleSideBar } from "./components/sidebar";
import { AsideNote } from "@/components/aside-note";
import { LongAside } from "@/components/long-aside";
import { RefN } from "@/components/ref-num";
import { LessonObjectives } from "@/components/lesson-objectives";
import { Nudge } from "@/components/nudge";

type Params = Promise<{ slug: string; article_slug: string }>;

export default async function BlogPage({ params }: { params: Params }) {
  const { slug, article_slug } = await params;
  const { metadata, content } = await getPostInformation(
    (
      await params
    ).article_slug
  );

  const posts = await getBlogPosts(slug);
  const relatedPosts = posts.filter(
    (p) => p.metadata.syllabus_code == metadata.syllabus_code
  );

  const options: MDXRemoteOptions = {
    disableImports: true, // import statements in MDX don't work in pages router
    parseFrontmatter: true,
    scope: {
      // readingTime: readingTime(source, 100).text,
      props: { foo: "props in scope is working" },
    },
    // vfileDataIntoScope: "toc", // the "remark-flexible-toc" plugin produces vfile.data.toc
    mdxOptions: {
      ...plugins,
    },
  };

  return (
    <div>
      <NavigationTop fixed />
      <div className="flex gap-4 relative">
        <ArticleSideBar
          content={relatedPosts}
          activeSlug={article_slug}
          category={metadata.syllabus_code}
        />

        <div className="space-y-10 md:mr-10 pt-0 pb-10 w-full md:w-[calc(100%-25%-10%)] absolute right-0 top-[10px] md:top-[30px]">
          <article className="prose prose-slate prose-h2:text-center prose-h2:mt-8 prose-h2:mb-2 prose-h2:font-medium prose-h2:text-xl prose-h2:leading-20 prose-h2:tracking-tight prose-h3:text-lg  prose-h3:text-center prose-h3:font-medium prose-strong:text-black prose-strong:font-semibold shadow-inner border border-muted-200 rounded-3xl p-5 md:p-10 space-y-5 block max-w-[82ch] prose-hr:border-black-50 prose-code:text-black-200 prose-code:text-base prose-pre:bg-[#838570]/30 prose-pre:[&_code]:text-black-500 prose-pre:[&_code]:text-sm">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight text-center">
              {metadata.title}
            </h1>
            <MDXRemote
              source={content}
              options={options}
              components={{
                AsideNote,
                LongAside,
                RefN,
                LessonObjectives,
                Nudge,
              }}
            />
          </article>
          <div className="text-black-200 pl-2.5 md:p-0 [&_span]:text-black">
            <p>
              <span>Published on</span> {metadata.published_date},{" "}
              <span>Last updated on</span> {metadata.last_updated_date}
            </p>
            <p>
              This page was contributed to by{" "}
              <a href="https://github.com/kelvinsekx">kelvinsekx</a>,{" "}
            </p>
          </div>
          <footer className="mt-8 text-center text-base text-gray-500">
            <Link href="/learn/guide" className="underline hover:text-blue-600">
              Go to Guide
            </Link>
          </footer>
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
