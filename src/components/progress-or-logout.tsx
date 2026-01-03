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
  return (
    <div className="border bg-[#fff] border-muted rounded-2xl w-80 px-5 py-10 lg:mr-20 mx-auto">
      <div className="text-black-400 font-semibold text-xl">
        <span className="text-black">0%</span> Completed
      </div>
      <p className="text-black-250">
        {!user ? (
          <>
            <span className="text-green-350 font-semibold">sign in</span> to
            save your progress
          </>
        ) : (
          <LogoutButton />
        )}
      </p>
    </div>
  );
};

export { ShowProgressOrLogout };
