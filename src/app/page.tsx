"use client";

import * as React from "react";
import { Footer } from "@/components/footer";
import { NavigationTop } from "@/components/nav";
import { Plus } from "lucide-react";
import { cn } from "@/utilities/cn";
import Link from "next/link";

const { useState } = React;
export default function Home() {
  return (
    <div>
      <NavigationTop />
      <Home.Main />
      <Footer />
    </div>
  );
}

Home.Main = function Main() {
  const [inputText, setInputText] = useState("");
  const [focused, setFocused] = useState(0);

  return (
    <div>
      <div className="w-2/3 mx-auto py-4 text-center space-y-6">
        <h1 className="text-3xl font-extrabold lg:text-5xl text-balance">
          Learn and build your skills into world renowned in a battle tested,
          fun and collaborative platform
        </h1>
        <p className="text-balance text-black-250 lg:text-lg">
          Join the world&apos;s modern, open source, one stop learning platform
        </p>
        <div className="flex h-15 mx-auto w-fit items-center space-x-1.5">
          <div className="flex h-full border-1 rounded-md p-1 bg-muted-50">
            <div
              className={cn(
                "flex rounded-md w-80 relative border-black sekx__signup_cta--form-wrapper px-2",
                {
                  "sekx__signup_cta--form-wrapper--on-blur":
                    !focused && inputText,
                }
              )}
            >
              <label
                htmlFor="inputSignup"
                className="absolute top-[50%] -translate-y-1/2 scale-[1]"
              >
                Enter your email
              </label>
              <span className="w-full h-full absolute">
                <input
                  id="inputSignup"
                  type="text"
                  value={inputText}
                  onFocus={() => setFocused(1)}
                  onBlur={() => setFocused(0)}
                  onChange={(e) => setInputText(e.target.value)}
                  className="rounded-md w-full h-full outline-none border-0"
                />
              </span>
            </div>
            <button className="bg-green px-8 text-muted-0 font-semibold rounded-md py-2 text-lg">
              Sign up for latern
            </button>
          </div>
          <Link
            href={"/test/backend"}
            className="bg-black-500 font-semibold text-lg text-muted-0 border-2 border-black-250 px-4 h-full flex items-center rounded-md"
          >
            Test your skills <Plus size={32} className="text-muted-0" />
          </Link>
        </div>
      </div>
    </div>
  );
};
