import Link from "next/link";

export const NavigationTop = ({ fixed = false }: { fixed?: boolean }) => {
  return (
    <nav
      id="nav__top"
      className={`px-2 md:px-10 grid my-auto h-12 bg-muted-100 border-b border-muted-200 w-full shadow-black-200 ${
        fixed && "fixed top-0 z-50"
      }`}
    >
      {/* <h2 className="sr-only">Navigation Menu</h2> */}
      <div className="text-black flex justify-between items-center place-self-center w-full">
        <div>
          <Link href="/">
            <b className="text-xl tracking-widest">Lantern Pages</b>
          </Link>
        </div>
        <div>
          <button className="text-black-250 font-medium rounded-md px-4 py-1 cursor-pointer">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};
