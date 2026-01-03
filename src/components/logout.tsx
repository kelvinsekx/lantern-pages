"use client";

import { supabase } from "../lib/supabase-client";

export default function LogoutButton() {
  const handleLogout = async () => {
    const { error } = await supabase().auth.signOut();

    if (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-450 border border-red-400 font-semibold rounded-md pr-4 py-1 cursor-pointer bg-slate-200 hover:bg-slate-300 transition"
    >
      Log out
    </button>
  );
}
