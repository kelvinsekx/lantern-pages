import { NavigationTop } from "@/components/nav";
import { ArticleSideBar } from "./components/sidebar";

export default function BlogPage() {
  return (
    <div>
      <NavigationTop fixed />
      <div className="flex pr-3 gap-4 relative">
        <ArticleSideBar />

        <div className="blog__main space-y-10 mr-10 py-10 w-[calc(100%-25%-10%)] absolute right-0 top-[50px]">
          <div className="blog__content shadow-inner border border-muted-500 rounded-3xl p-10 space-y-5">
            <h1 className="text-5xl font-black tracking-tight py-10 text-black-500">
              Data Structures & Types
            </h1>
            <p>
              Primitives are the simplest types of data in JavaScript. A
              primitive literal is a value, with no wrapper or properties of its
              own. Primitive literals are immutable, meaning the be changed to
              represent other values in the same way that more complex
              object-based data structures can. .
            </p>
            <p>
              Primitive literals are immutable, meaning the be changed to
              represent other values in the same way that more complex
              object-based data structures can. For example, while the value of
              a variable named theTruth can be reassigned a value of false, the
              boolean literal true can never represent any value other than
              true, in the same way the number literal 5 can never represent the
              value of another number.
            </p>
            <p>
              object-based data structures can. For example, while the value of
              a variable named theTruth can be reassigned a value of false, the
              boolean literal true can never represent any value other than
              true, in the same way the number literal 5 can never represent the
              value of another number.
            </p>
            <p>
              Primitives are the simplest types of data in JavaScript. A
              primitive literal is a value, with no wrapper or properties of its
              own. Primitive literals are immutable, meaning the be changed to
              represent other values in the same way that more complex
              object-based data structures can. For example, while the value of
              a variable named theTruth can be reassigned a value of false, the
              boolean literal true can never represent any value other than
              true, in the same way the number literal 5 can never represent the
              value of another number.
            </p>
          </div>
          <hr />
          <div className="text-black-100">
            <p>Last update 2024-0-34</p>
            <p>
              This page was contributed to by{" "}
              <a
                className="text-[#1875f2]"
                href="https://github.com/kelvinsekx"
              >
                kelvinsekx
              </a>
              ,{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
