import path from "node:path";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { readMDXFile } from "@/utilities/mdx-utils";

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

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
    <article className="prose ">
      <h1>{metadata.title}</h1>
      <MDXRemote source={content} />
    </article>
  );
}
