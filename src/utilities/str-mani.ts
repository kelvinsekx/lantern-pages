const truncate = (str: string, length: number = 40): string => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};

export { truncate };
