export const AsideNote = ({
  note,
  children,
}: {
  note?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section role="note" className="bg-red-50/30 p-3">
      {note && <h2 className="text-lg font-semibold mb-2">{note}</h2>}
      <div className="text-gray-600">{children}</div>
    </section>
  );
};
