export const AsideNote = ({
  note,
  children,
}: {
  note?: string;
  children?: React.ReactNode;
}) => {
  console.log(children);
  return (
    <section role="note" className="bg-red-50/30 p-3 space-y-0">
      {note && (
        <header className="text-base md:text-lg font-semibold text-[#a3427b]">
          {note}
        </header>
      )}
      <div className="text-sm md:text-base text-gray-600 text-[#3c1a2e]">
        {children}
      </div>
    </section>
  );
};
