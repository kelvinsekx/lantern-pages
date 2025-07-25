import { MDXRemote, type MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { getBlogPosts, getPostInformation } from "@/utilities/mdx-utils";
import { plugins } from "@/utilities/mdx-plugins";

import { NavigationTop } from "@/components/nav";
import { ArticleSideBar } from "./components/sidebar";
import { AsideNote } from "@/components/aside-note";
import { LongAside } from "@/components/long-aside";

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

        <div className="space-y-10 md:mr-10 py-10 w-full md:w-[calc(100%-25%-10%)] absolute right-0 top-[50px]">
          <article className="prose prose-slate prose-h2:mt-8 prose-h2:mb-2 prose-h2:font-semibold prose-h2:text-lg prose-h2:tracking-tight prose-h3:text-base prose-strong:text-[#000] prose-strong:font-semibold shadow-inner border border-muted-200 rounded-3xl p-5 md:p-10 space-y-5 block max-w-[82ch] prose-hr:border-black-50 ">
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight">
              {metadata.title}
            </h1>
            <MDXRemote
              source={content}
              options={options}
              components={{
                AsideNote,
                LongAside,
              }}
            />
          </article>
          <div className="text-black-200 pl-2.5 md:p-0">
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
