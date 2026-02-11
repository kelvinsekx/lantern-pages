import cuid2 from "@paralleldrive/cuid2";

import syllabus from "./syllabus.json";
import { getBlogPosts } from "@/utilities/mdx-utils";
import Link from "next/link";
import { ShowProgressOrLogout } from "@/components/progress-or-logout";

export default async function ListSyllabusPage() {
  const posts = await getBlogPosts("node");
  const sortedPosts = posts.sort((a, b) => {
    const extractParts = (str: string) => {
      const slice = str.match(/[^/]+$/);
      if (!slice) {
        throw new Error("Invalid path to slice");
      }
      const m = slice[0].match(/^(\d+)([a-z]?)-/i);
      if (!m) {
        throw new Error("Invalid string format to match");
      }
      return {
        num: parseInt(m[1], 10),
        letter: m[2] || "",
      };
    };

    const partA = extractParts(a.slug);
    const partB = extractParts(b.slug);

    if (partA.num !== partB.num) {
      return partA.num - partB.num;
    }

    return partA.letter.localeCompare(partB.letter);
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-accent/5 to-accent/10 border-b border-border px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-green">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 ">
          <div className="space-y-4 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/12 rounded-full text-xs font-semibold uppercase tracking-wide">
              Learning Path Node
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Backend Development
              </h1>
              <p className="text-lg md:text-xl text-foreground/70">
                Master Node.js with our comprehensive, production-ready guide
              </p>
            </div>
          </div>
          <div>
            <ShowProgressOrLogout />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="space-y-6">
          <div className="group">
            <div className="bg-white border border-border rounded-lg p-6 md:p-8 hover:border-accent/50 transition-colors duration-200">
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                  <span className="text-lg md:text-2xl font-bold">0</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    Start here
                  </h2>
                  <p className="text-foreground/70 text-sm md:text-base mb-6">
                    Begin your journey into backend development with Node.js
                    fundamentals
                  </p>

                  {/* Links */}
                  <div className="space-y-2">
                    <Link
                      href="/learn/backend/node/000-welcome"
                      className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-200 group/link"
                    >
                      Welcome to Lantern!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stage Sections */}
          {syllabus.map((stage, index) => {
            const stageContent = sortedPosts.filter(
              (p) => p.metadata.syllabus_code === stage.code,
            );

            return (
              <div key={cuid2.createId()} className="group">
                <div className="bg-white border border-border rounded-lg p-4 md:p-8 hover:border-accent/50 transition-colors duration-200">
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <span className="text-lg md:text-2xl font-bold">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {stage.title}
                      </h2>
                      <p className="text-foreground/70 text-sm md:text-base mb-6">
                        {stage.description}
                      </p>

                      {/* Links */}
                      <div className="space-y-2">
                        {stageContent.length > 0 ? (
                          stageContent.map((post) => (
                            <Link
                              key={post.slug}
                              href={post.slug}
                              className="items-center gap-2 font-medium hover:gap-3 transition-all duration-200 group/link block"
                            >
                              {post.metadata.short_title || post.metadata.title}
                            </Link>
                          ))
                        ) : (
                          <p className="text-foreground/50 text-sm italic">
                            No articles available yet
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-accent/8 border border-accent/20 rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to get started?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Start with the fundamentals and progress through each stage to
            master backend development with Node.js
          </p>
          <Link
            href="/learn/backend/node/000-welcome"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-foreground rounded-lg text-[#fff] font-semibold hover:bg-accent/90 hover:text-black transition-colors"
          >
            Begin Learning
          </Link>
        </div>
      </div>
    </div>
  );
}
