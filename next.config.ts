import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfigOptions: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", ".md"],
};

const withMDX = createMdx({
  options: {
    // optional remark and rehype plugins
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfigOptions);
