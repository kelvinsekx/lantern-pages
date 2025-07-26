import { type PluggableList } from "unified";
import remarkGfm from "remark-gfm";

const remarkPlugins: PluggableList = [remarkGfm];

export const plugins = {
  remarkPlugins,
};
