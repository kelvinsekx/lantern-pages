import { ArrowUpRight, Lightbulb } from "lucide-react";

export function Nudge({ text }: { text: string }) {
  return (
    <div className="flex border border-green/40 px-5 py-2.5 rounded-3xl text-green-450 bg-green/5 items-center">
      <Lightbulb className="mr-1" />
      <span>{text}</span>
      <ArrowUpRight className="ml-auto" />
    </div>
  );
}
