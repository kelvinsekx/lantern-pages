export const Footer = () => {
  return (
    <footer className="bg-green-0 pt-8 tracking-tight">
      <div className="flex gap-6 py-8 font-medium text-black">
        <div className="w-1/3 self-center pl-4">
          <div>
            <b className="text-lg tracking-widest">Lantern Pages</b>
          </div>
          <p>
            The University on auto-pilot. We leverage AI, custom and rewarding
            experiences to empower you to learn at your pace for free.
          </p>
        </div>
        <hr className="opacity-0" />
        <section className="space-y-1">
          <header className="mb-2">
            <b className="font-medium text-lg tracking-wide">Lantern Tracks</b>
          </header>
          <hr className="opacity-0" />
          <section>
            <header>
              <b className="font-medium">Backend Development</b>
            </header>
            <ul>
              <li className="text-sm tracking-normal">Node</li>
            </ul>
          </section>
          <hr className="opacity-0" />
          <section>
            <header>
              <b className="font-medium">Product Management</b>
            </header>
          </section>
          <hr className="opacity-0" />
          <section>
            <header>
              <b className="font-medium">Languages</b>
            </header>
            <p className="text-sm tracking-normal">Itsekiri</p>
          </section>
        </section>
        <hr className="opacity-0" />
        <section className="space-y-1">
          <header className="mb-2">
            <b className="font-medium text-lg tracking-wide">Education</b>
          </header>
          <ul>
            <li>Mathematics</li>
            <li>Unilag, Economics Edu</li>
          </ul>
        </section>
        <hr className="opacity-0" />
        <section>
          <header className="mb-2">
            <b className="font-medium text-lg tracking-wide">Others</b>
          </header>
          <p>Lantern Roadmap</p>
          <p>Premium subscriptions</p>
        </section>
      </div>
      <hr className="opacity-0" />
      <div className=" text-green-500 flex gap-6 text-sm pl-4 py-6 bg-black-0">
        <p>&copy; Lantern Pages, Inc</p>
        <p>&copy; Privacy (latest, 2025)</p>
      </div>
    </footer>
  );
};
