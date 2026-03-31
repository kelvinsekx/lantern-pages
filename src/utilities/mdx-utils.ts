import fs from "fs";
import path from "path";
// import { getFrontmatter } from "next-mdx-remote-client/utils";

type Metadata = {
  title: string;
  short_title: string;
  description: string;
  published_date: string;
  last_updated_date: string;
  syllabus_code: string;
  authors: string;
  status: string;
};

export interface TPost {
  metadata: Metadata;
  slug: string;
  content: string;
  id: string;
}

export const getSource = async (
  filename: string,
): Promise<string | undefined> => {
  const sourcePath = path.join(process.cwd(), "data", filename);
  if (!fs.existsSync(sourcePath)) return;
  return await fs.promises.readFile(sourcePath, "utf8");
};

export function getMarkdownExtension(
  fileName: `${string}.md` | `${string}.mdx`,
): "md" | "mdx" {
  console.log({ fileName });
  const match = fileName.match(/\.mdx?$/);

  return match![0].substring(1) as "md" | "mdx";
}

export const getMarkdownFromSlug = async (
  slug: string,
): Promise<
  | {
      source: string;
      format: "md" | "mdx";
    }
  | undefined
> => {
  if (!/-mdx?$/.test(slug)) return;

  // replace the last dash with dot in the slug for filename
  const filename = slug.replace(/-(?=[^-]*$)/, ".") as
    | `${string}.md`
    | `${string}.mdx`;

  const fullPath = path.join(process.cwd(), "data", filename);

  if (fs.existsSync(fullPath)) {
    const source = await getSource(filename);

    if (!source) return;

    return {
      source,
      format: getMarkdownExtension(filename),
    };
  }
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");

    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes

    //metadata[key.trim() as keyof Metadata] = value;
    metadata[key as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content, status: metadata.status };
}

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export function readMDXFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parseFrontmatter(rawContent);
  } else {
    return { content: "", metadata: {} as Metadata, status: "" };
  }
}

function getMDXData(dir: string, whichPost: string) {
  const mdxFiles = getMDXFiles(dir);

  const data = [];
  for (let i = 0; i < mdxFiles.length; i++) {
    const file = mdxFiles[i];
    const { metadata, content, status } = readMDXFile(path.join(dir, file));
    if (
      process.env.NODE_ENV !== "development" &&
      (status == "in-progress" || status == "un-published")
    )
      continue;
    const slug =
      "/learn/backend/" +
      whichPost +
      "/" +
      path.basename(file, path.extname(file));

    data.push({
      metadata,
      slug,
      content,
      id: path.basename(file, path.extname(file)),
    });
  }

  return data;
}

export function getBlogPosts(slug: string) {
  return getMDXData(
    path.join(process.cwd(), "src", "articles", "backend", slug, "contents"),
    slug,
  );
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

export const getSourceSync = (filename: string): string | undefined => {
  const sourcePath = path.join(
    process.cwd(),
    "src",
    "articles",
    "backend",
    "node",
    "contents",
    filename + ".mdx",
  );
  if (!fs.existsSync(sourcePath)) return;
  return sourcePath;
};

export const getPostInformation = async (
  filename: `${string}.md` | `${string}.mdx`,
): Promise<{
  content: {
    metadata: Metadata;
    content: string;
  };
  format: "md" | "mdx" | "detect" | null | undefined;
}> => {
  const source = getSourceSync(filename);

  if (!source)
    return {
      content: { metadata: {} as Metadata, content: "" },
      format: null,
    };
  const content = await readMDXFile(source);
  return {
    content,
    format: "mdx",
  };
};
