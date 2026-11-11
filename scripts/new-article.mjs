#!/usr/bin/env node
// Usage: npm run new:article -- <track> <number> <slug> <syllabus_code> [--title "..."] [--node <node-article-id>]
// Example: npm run new:article -- dotnet 003 async-concepts BAC001 --title "Async and Await" --node 003-async-concepts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const flags = {};
const positional = [];
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith("--")) flags[args[i].slice(2)] = args[++i];
  else positional.push(args[i]);
}
const [track, number, slug, code] = positional;

function fail(msg) {
  console.error(`Error: ${msg}`);
  console.error(
    "Usage: npm run new:article -- <track> <number> <slug> <syllabus_code> [--title ...] [--node <id>]",
  );
  process.exit(1);
}

if (!track || !number || !slug || !code) fail("missing arguments");
if (!/^[a-z0-9-]+$/i.test(track)) fail("invalid track");
if (!/^\d+[a-z]?$/i.test(number)) fail("number must look like 003 or 002b");
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) fail("slug must be kebab-case");
if (!/^(BAC\d{3}|000)$/.test(code)) fail("syllabus_code must look like BAC001");

const backend = path.join(root, "src", "articles", "backend");
const trackDir = path.join(backend, track);
if (!fs.existsSync(path.join(trackDir, "track.json")))
  fail(`no such track "${track}" (missing track.json)`);

const syllabus = JSON.parse(
  fs.readFileSync(path.join(trackDir, "syllabus.json"), "utf8"),
);
if (code !== "000" && !syllabus.some((s) => s.code === code))
  fail(`${code} is not in ${track}/syllabus.json`);

const nodeId = flags.node;
if (
  nodeId &&
  !fs.existsSync(path.join(backend, "node", "contents", `${nodeId}.mdx`))
)
  fail(`node article "${nodeId}" does not exist`);

const contentsDir = path.join(trackDir, "contents");
fs.mkdirSync(contentsDir, { recursive: true });
const file = path.join(contentsDir, `${number}-${slug}.mdx`);
if (fs.existsSync(file)) fail(`${path.relative(root, file)} already exists`);

const today = new Date();
const date = [today.getDate(), today.getMonth() + 1, today.getFullYear()]
  .map((n, i) => String(n).padStart(i < 2 ? 2 : 4, "0"))
  .join("/");
// the frontmatter parser does not understand escapes, so avoid double quotes
const esc = (s) => s.replace(/"/g, "'");
const title =
  flags.title ?? slug.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase());

let src = fs.readFileSync(
  path.join(backend, "..", "_templates", "learning-note.mdx"),
  "utf8",
);
src = src
  .replace("TITLE", esc(title))
  .replace(/DD\/MM\/YYYY/g, date)
  .replace("BAC000", code);
src = nodeId
  ? src.replace("NODE-ARTICLE-ID", nodeId)
  : src.replace(/node_equivalent: .*\n/, "");

fs.writeFileSync(file, src);
console.log(`Created ${path.relative(root, file)}`);
