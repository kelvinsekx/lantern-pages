import { MDXRemote, type MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import Link from "next/link";
import { getBlogPosts, getPostInformation } from "@/utilities/mdx-utils";
import { plugins, remarkRehypeOptions } from "@/utilities/mdx-plugins";

import { NavigationTop } from "@/components/nav";
import { ArticleSideBar } from "./components/sidebar";
import { mdx_components } from "@/components/mdxComponents";

type Params = Promise<{
  slug: string;
  article_slug: `${string}.md` | `${string}.mdx`;
}>;

type Props = {
  error: Error | string;
};

function ErrorComponent({ error }: Props) {
  return (
    <div id="mdx-error">
      <pre style={{ color: "var(--error)" }}>
        <code>{typeof error === "string" ? error : error.message}</code>
      </pre>
    </div>
  );
}

export default async function BlogPage({ params }: { params: Params }) {
  const { slug, article_slug } = await params;
  const {
    content: { metadata, content },
    format,
  } = await getPostInformation((await params).article_slug);

  const posts = await getBlogPosts(slug);
  const relatedPosts = posts.filter(
    (p) => p.metadata.syllabus_code == metadata.syllabus_code,
  );

  if (!content) {
    return <ErrorComponent error="The source could not found !" />;
  }

  //const { format } = result;

  const options: MDXRemoteOptions = {
    disableImports: true, // import statements in MDX don't work in pages router
    parseFrontmatter: true,
    // scope: {
    //   readingTime: readingTime(source, { wordsPerMinute: 100 }).text,
    //   props: { foo: "props in scope is working" },
    // },
    vfileDataIntoScope: "toc",
    mdxOptions: {
      format,
      ...plugins,
      remarkRehypeOptions: format === "md" ? remarkRehypeOptions : undefined,
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

        <div className="space-y-10 md:mr-10 pt-0 pb-10 px-5 md:px-0 w-full md:w-[calc(100%-25%-10%)] absolute right-0 top-[10px] md:top-[30px]">
          <article
            className={
              "prose max-w-none mb-12 prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-foreground prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/80 prose-p:leading-7 prose-p:my-4 prose-strong:text-foreground prose-strong:font-semibold prose-pre:bg-slate-950 prose-pre:border prose-pre:border-border prose-pre:rounded-lg prose-pre:overflow-x-auto prose-blockquote:border-l-4 prose-blockquote:border-black-50/15 prose-blockquote:pl-4 prose-blockquote:not-italic prose-blockquote:text-foreground/70 prose-blockquote:bg-accent/5 prose-blockquote:py-2 prose-blockquote:pr-4 prose-li:marker:text-black prose-li:my-2 prose-hr:border-border prose-hr:my-8  prose-a:no-underline prose-a:font-medium hover:prose-a:underline "
            }
          >
            <h1 className="text-2xl my-2 md:text-4xl font-normal tracking-tight text-center scroll-m-8">
              {metadata.title}
            </h1>
            <MDXRemote
              source={content}
              options={options}
              components={mdx_components}
            />
          </article>
          <div className="text-black-200 pl-2.5 md:p-0 [&_span]:text-black ">
            <p>
              This page was published on {metadata.published_date}, last updated
              on <span>{metadata.last_updated_date}.</span> Contributed to by{" "}
              <a
                href="https://github.com/kelvinsekx"
                className="text-black font-medium"
              >
                kelvinsekx
              </a>
              .{" "}
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
