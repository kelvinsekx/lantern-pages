export const LongAside = ({
  subject,
  children,
}: {
  subject?: string;
  children?: React.ReactNode;
}) => {
  return (
    <details role="note" className="bg-red-50/30 p-3">
      <summary className="text-base md:text-lg font-medium mb-2 text-[#a3427b]">
        {subject}
      </summary>
      <div className="text-gray-600 text-[#3c1a2e] text-sm md:text-base">
        {children}
      </div>
    </details>
  );
};
