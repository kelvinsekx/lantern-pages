export const AsideNote = ({
  note,
  children,
}: {
  note?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section role="note" className="bg-red-50/30 p-2.5 space-y-0">
      {note && (
        <header className="text-base md:text-lg font-semibold text-[#a3427b] py-1">
          {note}
        </header>
      )}
      <div className="text-gray-600 text-[#3c1a2e]">{children}</div>
    </section>
  );
};
