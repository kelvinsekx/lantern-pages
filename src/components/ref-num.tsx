export const RefN = ({ children }: { children?: React.ReactNode }) => {
  console.log(children);
  return (
    <span role="note" className="">
      <span
        className="relative border-2 border-black bottom-1.5 text-[10px] -left-1 font-medium px-[1px] py-0 bg-black-250 text-muted
      "
      >
        {children}
      </span>
    </span>
  );
};
