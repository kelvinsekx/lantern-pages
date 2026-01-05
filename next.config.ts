import type { NextConfig } from "next";
import createMdx from "@next/mdx";

const nextConfigOptions: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", ".md"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
};

const withMDX = createMdx({
  options: {
    // optional remark and rehype plugins
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfigOptions);
