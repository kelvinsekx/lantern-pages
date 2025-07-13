export const LongAside = ({
  subject,
  children,
}: {
  subject?: string;
  children?: React.ReactNode;
}) => {
  return (
    <details role="note" className="bg-red-50/30 p-3">
      <summary className="text-lg font-medium mb-2">{subject}</summary>
      <div className="text-gray-600">{children}</div>
    </details>
  );
};
