import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-muted-200 pt-8 tracking-tight">
      <div className="flex flex-col md:gap-20 items-start md:flex-row gap-6 py-8 text-black px-2 md:px-10">
        <div className="w-4/6 md:w-1/3">
          <div className="mb-2">
            <b className="text-lg tracking-widest">Lantern Pages</b>
          </div>
          <p>
            The classrooms on auto-pilot. We leverage AI, custom and rewarding
            experiences to empower you to learn at your pace for free.
          </p>
        </div>
        <div className="flex flex-wrap justify-between gap-x-2.5 gap-y-5 w-5/6 md:w-2/3 ">
          <LinkGroup>
            <>
              <LinkGroupTitle>Lantern Tracks</LinkGroupTitle>
              <div className="space-y-2">
                <LinkGroup>
                  <LinkGroupSubTitle>Backend development</LinkGroupSubTitle>
                  <ul>
                    <li>
                      <GroupLinkItem href="/learn/backend">Node</GroupLinkItem>
                    </li>
                  </ul>
                </LinkGroup>

                <div>
                  <GroupLinkItem>Product management</GroupLinkItem>
                </div>

                <LinkGroup>
                  <LinkGroupSubTitle>Languages</LinkGroupSubTitle>
                  <GroupLinkItem>Itsekiri</GroupLinkItem>
                </LinkGroup>
              </div>
            </>
          </LinkGroup>

          <LinkGroup>
            <>
              <LinkGroupTitle>Education</LinkGroupTitle>
              <ul>
                <li>
                  <GroupLinkItem>Mathematics</GroupLinkItem>
                </li>
                <li>
                  <GroupLinkItem>Unilag, economics edu</GroupLinkItem>
                </li>
              </ul>
            </>
          </LinkGroup>

          <LinkGroup>
            <>
              <LinkGroupTitle>Others</LinkGroupTitle>
              <ul>
                <li>
                  <GroupLinkItem>Lantern roadmap</GroupLinkItem>
                </li>
                <li>
                  <GroupLinkItem>Premium subscriptions</GroupLinkItem>
                </li>
              </ul>
            </>
          </LinkGroup>
        </div>
      </div>

      <div className=" text-green-500 flex gap-6 text-sm pl-4 py-6 bg-black-0">
        <p>&copy; Lantern Pages, Inc</p>
        <p>&copy; Privacy (latest, 2025)</p>
      </div>
    </footer>
  );
};

const LinkGroup = ({ children }: React.ComponentPropsWithoutRef<"section">) => (
  <section className="tracking-tighter">{children}</section>
);

const LinkGroupTitle = ({
  children,
}: React.ComponentPropsWithoutRef<"header">) => (
  <header className="mb-1 md:mb-2 text-green">
    <b className="font-semibold text-lg tracking-wider">{children}</b>
  </header>
);

const LinkGroupSubTitle = ({
  children,
}: React.ComponentPropsWithoutRef<"header">) => (
  <header>
    <b className="font-medium md:font-semibold text-[15px] tracking-wide">
      {children}
    </b>
  </header>
);

const GroupLinkItem = ({
  children,
  href = "/",
}: React.ComponentPropsWithoutRef<"a">) => (
  <Link href={href} className="text-sm tracking-normal">
    {children}
  </Link>
);
