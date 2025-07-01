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
        <div className="flex flex-wrap justify-between gap-y-5 w-5/6 md:w-2/3 ">
          <section className="tracking-tighter">
            <header className="mb-1 md:mb-2">
              <b className="font-medium text-lg tracking-wider">
                Lantern Tracks
              </b>
            </header>
            <div className="space-y-1">
              <section>
                <header>
                  <b className="font-medium tracking-wide">
                    Backend development
                  </b>
                </header>
                <ul>
                  <li className="text-sm tracking-normal">Node</li>
                </ul>
              </section>
              <hr className="opacity-0" />

              <p>Product management</p>

              <section>
                <header>
                  <b className="font-medium tracking-wide">Languages</b>
                </header>
                <p className="text-sm tracking-normal">Itsekiri</p>
              </section>
            </div>
          </section>

          <section className="tracking-tighter">
            <header className="mb-1 md:mb-2">
              <b className="font-medium text-lg tracking-wider">Education</b>
            </header>
            <ul>
              <li>Mathematics</li>
              <li>Unilag, economics edu</li>
            </ul>
          </section>

          <section className="tracking-tighter">
            <header className="mb-1 md:mb-2">
              <b className="font-medium text-lg tracking-wider">Others</b>
            </header>
            <p>Lantern roadmap</p>
            <p>Premium subscriptions</p>
          </section>
        </div>
      </div>

      <div className=" text-green-500 flex gap-6 text-sm pl-4 py-6 bg-black-0">
        <p>&copy; Lantern Pages, Inc</p>
        <p>&copy; Privacy (latest, 2025)</p>
      </div>
    </footer>
  );
};
