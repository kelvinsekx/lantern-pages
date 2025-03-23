import Link from "next/link";

export const NavigationTop = () => {
  return (
    <nav id="nav__top" className="px-10">
      <div className="flex justify-between">
        <Link href="/">Latern Pages</Link>
        <button>sign in</button>
      </div>
    </nav>
  );
};
