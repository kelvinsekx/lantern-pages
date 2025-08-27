"use client";

import * as React from "react";
import { Footer } from "@/components/footer";
import { Plus } from "lucide-react";
import { cn } from "@/utilities/cn";
import Link from "next/link";

const { useState, useRef, useEffect } = React;
export default function Home() {
  return (
    <div>
      <Home.Main />
      <Footer />
    </div>
  );
}

Home.Main = function Main() {
  const [inputText, setInputText] = useState("");
  const [focused, setFocused] = useState(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [unanimateOut, setUnanimateOut] = useState(false);

  const tooltipRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (document.body.clientWidth < 768) {
        setUnanimateOut(true);
      }
    }, 2000);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timeoutID);
    };
  }, []);

  const handleClick = () => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsTooltipVisible(false);
    }
  };

  const languages = ["Backend"];

  const tooltip_list_style =
    "hover:bg-muted-100 cursor-pointer text-left block text-black-200 hover:text-black-500 rounded-t-md py-2.5 pl-2.5";
  return (
    <div className="py-10">
      <div className="w-full px-4 md:p-0 md:w-2/3 mx-auto py-4 text-center space-y-6">
        <h1 className="text-3xl font-extrabold lg:text-6xl  text-balance tracking-tight">
          Don&apos;t Just Learn, Understand.
          <br /> Explore mastery.
        </h1>
        <p className="text-balance text-black-250 lg:text-lg">
          Join the world&apos;s modern, open source, one stop learning platform
        </p>
        <div className="flex md:flex-row h-12 md:h-15 w-full items-center gap-2 md:gap-4 justify-center mt-10 transition-all duration-300 ease-in-out">
          <div className="flex w-full md:w-90 h-full border-1 rounded-md p-1 bg-muted-50 justify-between">
            <div
              className={cn(
                "flex rounded-md w-full relative border-black sekx__signup_cta--form-wrapper px-2",
                {
                  "sekx__signup_cta--form-wrapper--on-blur":
                    !focused && inputText,
                }
              )}
            >
              <label
                htmlFor="inputSignup"
                className="absolute w-full left-0 top-[50%] -translate-y-1/2 scale-[1]"
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
            <button className="bg-green px-2 md:px-8 text-muted-0 h-full flex items-center justify-center font-semibold rounded-md py-2 text-base md:text-lg text-nowrap">
              Sign up
            </button>
          </div>
          <button
            ref={buttonRef}
            onClick={handleClick}
            className="bg-black-500 font-semibold text-sm md:text-lg text-muted-0 border-2 border-black-250 px-1 md:px-4 h-full flex items-center rounded-md relative"
          >
            {!unanimateOut && (
              <span className="w-fit text-nowrap">Test your skills</span>
            )}{" "}
            <Plus className="text-muted-0 size-6 md:size-8" />
            {isTooltipVisible && (
              <div
                ref={tooltipRef}
                className="absolute top-full bg-muted-50 right-0 mt-2 rounded-md shadow-md z-10 border border-muted-200 w-[15rem] md:w-[20rem]"
              >
                <ul className="rounded-md w-full">
                  {languages.map((lang) => (
                    <li key={lang} className={tooltip_list_style}>
                      <Link
                        href={"/test/backend"}
                        className="text-sm md:text-lg font-medium inline-block"
                      >
                        {lang}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <div className="h-[0.5px] bg-muted w-full" />
                  </li>
                  <li className={tooltip_list_style}>
                    <Link
                      href={"/test/backend"}
                      className="text-sm md:text-lg font-medium  inline-block text-nowrap"
                    >
                      Others coming soon
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
