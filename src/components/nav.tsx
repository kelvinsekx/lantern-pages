import Link from "next/link";

export const NavigationTop = ({ fixed = false }: { fixed?: boolean }) => {
  return (
    <nav
      id="nav__top"
      className={`px-2 md:px-10 grid my-auto h-15 bg-muted-50 border-b border-muted-200 w-full ${
        fixed && "fixed top-0 z-50"
      }`}
    >
      {/* <h2 className="sr-only">Navigation Menu</h2> */}
      <div className="flex justify-between items-center  place-self-center w-full">
        <div>
          <Link href="/">
            <span className="text-xl md:text-3xl tracking-wide font-semibold text-black-350">
              Latern Pages
            </span>
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
