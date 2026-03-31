import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "next-mdx-remote-client/rsc";

import { default as pre } from "./pre";
import BlockQuote, { default as blockquote } from "./block-quote";

import { AsideNote } from "@/components/aside-note";
import { LongAside } from "@/components/long-aside";
import { RefN } from "@/components/ref-num";
import { LessonObjectives } from "@/components/lesson-objectives";
import { Nudge } from "@/components/nudge";
import { TryThis } from "@/components/try-this";

export const mdx_components: MDXComponents = {
  Image,
  Link,
  pre,
  blockquote,
  BlockQuote,
  AsideNote,
  LongAside,
  RefN,
  LessonObjectives,
  Nudge,
  TryThis,
};
