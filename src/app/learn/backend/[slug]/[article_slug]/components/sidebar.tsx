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
        <div className="border-muted-500 border-b px-5 py-2 text-black-250 w-full text-base text-center flex">
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-6 bg-accent rounded-full" />
              <h2 className="font-bold text-foreground uppercase tracking-widest">
                {category}
              </h2>
            </div>
            <p className="text-foreground/60 font-medium uppercase tracking-wide">
              Articles in Category
            </p>
          </div>
        </div>
        <div className="text-base mt-5 px-5 space-y-3 text-black-350">
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
                    },
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
