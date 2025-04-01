import Link from "next/link";

export const NavigationTop = () => {
  return (
    <nav id="nav__top" className="px-10 bg-muted-50 border-b border-muted-200">
      <h2 className="sr-only">Navigation Menu</h2>
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-4xl font-semibold">Latern Pages</span>
          </Link>
        </div>
        <div>
          <button className="bg-red-350 text-muted-0 font-medium rounded-md px-4 py-1">
            sign in
          </button>
        </div>
      </div>
    </nav>
  );
};
