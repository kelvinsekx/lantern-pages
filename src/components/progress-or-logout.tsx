"use client";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase-client";
import LogoutButton from "./logout";

const ShowProgressOrLogout = function () {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase().auth.getSession();
      setUser(session?.user ?? null);
    };

    checkUser();

    // Listen for changes (e.g., when the user comes back from Google)
    const {
      data: { subscription },
    } = supabase().auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignIn = async () => {
    // 2. This simply initiates the redirect.
    // The code below this await mostly won't run because the browser leaves the page.
    const { error } = await supabase().auth.signInWithOAuth({
      provider: "google",
      options: {
        // Redirect back to your app after Google is done
        redirectTo: `${window.location.origin}/auth/callback?next=${window.location.pathname}`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    if (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="border bg-[#fff] border-muted rounded-2xl w-80 px-5 py-10 lg:mr-20 mx-auto">
      <div className="text-black-400 font-semibold text-xl">
        <span className="text-black">0%</span> Completed
      </div>
      <p className="text-black-250">
        {!user ? (
          <>
            <span
              onClick={handleSignIn}
              className="text-green-350 font-semibold cursor-pointer"
            >
              sign in
            </span>{" "}
            to save your progress
          </>
        ) : (
          <LogoutButton />
        )}
      </p>
    </div>
  );
};

export { ShowProgressOrLogout };
