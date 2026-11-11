import Link from "next/link";
import { getTracks } from "@/utilities/mdx-utils";

export default function BackendTracksPage() {
  const tracks = getTracks();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Backend Development
          </h1>
          <p className="text-lg text-foreground/70">
            Same syllabus, pick your stack.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <Link
              key={track.slug}
              href={`/learn/backend/${track.slug}`}
              className="block bg-white border border-border rounded-lg p-6 hover:border-accent/50 transition-colors duration-200"
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {track.title}
              </h2>
              <p className="text-foreground/70">{track.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
