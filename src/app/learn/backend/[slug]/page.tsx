import fs from "node:fs";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote-client/rsc";

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  const markdown = fs.readFileSync(
    `${path.join(
      process.cwd()
    )}/src/articles/backend/${slug}/contents/chap1_introduction_to_development.mdx`,
    "utf-8"
  );

  return (
    <article className="prose ">
      <h1></h1>
      <MDXRemote source={markdown} />
    </article>
  );
}
