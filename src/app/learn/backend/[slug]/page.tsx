import path from "node:path";
import { MDXRemote, type MDXRemoteOptions } from "next-mdx-remote-client/rsc";
import { readMDXFile } from "@/utilities/mdx-utils";
import { plugins } from "@/utilities/mdx-plugins";

import { notFound } from "next/navigation";
import { AsideNote } from "@/components/aside-note";

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  const { content } = await readMDXFile(
    `${path.join(
      process.cwd(),
      "src",
      "articles",
      "backend",
      slug,
      "contents",
      "000-welcome.mdx"
    )}`
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

  if (!content) {
    return notFound();
  }

  return (
    <article className="prose px-2 py-10">
      <MDXRemote
        source={content}
        options={options}
        components={{
          AsideNote,
        }}
      />
    </article>
  );
}
