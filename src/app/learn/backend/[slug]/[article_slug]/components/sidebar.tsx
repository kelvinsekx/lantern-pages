import { cn } from "@/utilities/cn";
import { TPost } from "@/utilities/mdx-utils";
import { truncate } from "@/utilities/str-mani";
import Link from "next/link";

export const ArticleSideBar = async ({
  content,
  category,
  activeSlug = "",
}: {
  content: TPost[];
  category: string;
  activeSlug: string;
}) => {
  return (
    <div className="blog__sidebar hidden md:block w-3/11 fixed left-0 bottom-0 top-[60px] shadow-inner border-r border border-muted-500 h-lvh">
      <div>
        <div className="border-muted-500 border-b py-2 text-black-250 w-full text-base text-center flex">
          <div className="rounded-sm w-3/7 py-2 text-[#fff] mx-auto bg-green-200">
            Articles
          </div>
          <div className="rounded-sm w-3/7 py-2 text-muted-500 mx-auto bg-muted-100">
            Contents
          </div>
        </div>
        <div className="text-base mt-5 px-5 space-y-3 text-black-350">
          <p className="text-xl font-normal text-black-350 tracking-tight">
            {" "}
            Articles in {category}
          </p>
          <div>
            {content.map((post) => {
              const t = post.metadata.short_title || post.metadata.title;
              return (
                <Link
                  href={post.slug}
                  key={post.slug}
                  className={cn(
                    "block hover:text-black-150 hover:bg-green-50 active:text-black rounded-sm py-0.5",
                    {
                      "text-green-400 bg-green-50/50 font-medium":
                        activeSlug === post.id,
                    }
                  )}
                >
                  {truncate(t, 60)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
