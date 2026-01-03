"use client";
import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase-client";

export default function Signin() {
  const [user, setUser] = useState<User | null>(null);
  // const router = useRouter();

  // 1. Check for an existing session when the component mounts
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

  if (user) {
    return <div>Signed in as {user.email}</div>;
  }

  return (
    <button
      onClick={handleSignIn}
      className="text-black-250 font-medium rounded-md px-4 py-1 cursor-pointer bg-slate-200 hover:bg-slate-300 transition"
    >
      Sign in
    </button>
  );
}
