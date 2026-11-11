import { notFound } from "next/navigation";
import { getTrack } from "@/utilities/mdx-utils";
import { TrackIndex } from "../track-index";

type Params = Promise<{ slug: string }>;

export default async function Page(props: { params: Params }) {
  const { slug } = await props.params;
  const track = getTrack(slug);
  if (!track) return notFound();

  return <TrackIndex track={track} />;
}
