import { truncate } from "@/utilities/str-mani";
import { Book, BookOpen } from "lucide-react";

const articles = [
  {
    id: "1",
    title: "Data Structures & Types",
    slug: "data-structures-types",
    excerpt: "Primitives are the simplest types of data in JavaScript...",
    category: "intro",
    isActive: true,
  },
  {
    id: "2",
    title: "Variables and Constants",
    slug: "variables-constants",
    excerpt: "Learn how to declare variables using let, const, and var...",
    category: "intro",
  },
  {
    id: "3",
    title: "Functions and Scope",
    slug: "functions-scope",
    excerpt: "Understanding function declarations, expressions, and scope...",
    category: "intro",
  },
  {
    id: "4",
    title: "Arrays and Array Methods",
    slug: "arrays-methods",
    excerpt: "Working with arrays and built-in array methods in JavaScript...",
    category: "intro",
  },
  {
    id: "5",
    title: "Objects and Properties",
    slug: "objects-properties",
    excerpt: "Creating and manipulating objects in JavaScript...",
    category: "intro",
  },
  {
    id: "6",
    title: "Promises and Async/Await",
    slug: "promises-async-await",
    excerpt: "Handling asynchronous operations in modern JavaScript...",
    category: "advanced",
  },
  {
    id: "7",
    title: "ES6+ Features",
    slug: "es6-features",
    excerpt: "Modern JavaScript features introduced in ES6 and beyond...",
    category: "advanced",
  },
];

export const ArticleSideBar = () => {
  return (
    <div className="blog__sidebar w-1/4 fixed left-0 bottom-0 top-[60px] shadow-inner border-r border border-muted-500 h-lvh">
      <div className="flex flex-col items-center">
        <div className="border-muted-500 border-b py-5 text-black-250 w-full text-base text-center flex">
          <div className="rounded-sm w-3/7 py-1 text-[#fff] mx-auto bg-green">
            Articles
          </div>
          <div className="rounded-sm w-3/7 py-1 text-muted-500 mx-auto bg-muted-100">
            Contents
          </div>
        </div>
        <div className="text-sm mt-5 space-y-3 text-black-250">
          <p className="text-base font-semibold text-center text-black-200">
            {" "}
            <BookOpen className=" inline-block" /> Other articles in intro
          </p>
          {articles.map(({ title, id }) => (
            <div key={id} className="flex items-center gap-2">
              {truncate(title)} <Book className="inline-block" size={10} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
