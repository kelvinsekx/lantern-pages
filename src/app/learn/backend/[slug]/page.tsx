import path from "node:path";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { readMDXFile } from "@/utilities/mdx-utils";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  const { metadata, content } = await readMDXFile(
    `${path.join(
      process.cwd(),
      "articles",
      "backend",
      slug,
      "contents",
      "001-introduction-to-development.mdx"
    )}`
  );

  if (!content) {
    return notFound();
  }

  return (
    <article className="prose ">
      <h1>{metadata?.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}
