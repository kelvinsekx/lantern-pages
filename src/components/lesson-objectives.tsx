"use client";

import * as React from "react";
import { CheckCircle2, ListChecks, Target } from "lucide-react";

export function LessonObjectives({
  ctaLabel = "View all objective",
  contents,
}: {
  ctaLabel: string;
  contents: Array<string>;
} & React.ComponentPropsWithoutRef<"section">) {
  const [defaultOpen, setState] = React.useState(false);
  const onShowAll = () => {
    setState((prev) => !prev);
  };

  return (
    <section className="bg-muted-200 rounded-2xl p-8">
      <header>
        <div className="flex items-center gap-x-4">
          <div className="p-2 rounded-xl bg-black-0/70">
            <Target className="h-5 w-5 stroke-green" />
          </div>
          <div className="text-lg font-semibold text-green-500">
            Learning Objectives
          </div>
          <button
            onClick={() => {
              onShowAll?.();
            }}
          >
            <div className="flex">
              <ListChecks />
              <span>{ctaLabel}</span>
            </div>
          </button>
        </div>
      </header>
      <div>
        <Collapsible isOpen={defaultOpen}>
          <div>
            <p>By the end of this lesson, you should be able to:</p>
            <ul className="space-y-3 p-0">
              {contents.map((s: string, i: number) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 stroke-green" />
                  <span className="text-black-250">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </Collapsible>
      </div>
    </section>
  );
}

const Collapsible = ({
  children,
  isOpen,
}: React.ComponentPropsWithoutRef<"div"> & { isOpen: boolean }) => {
  return <div>{isOpen && <div>{children}</div>}</div>;
};
