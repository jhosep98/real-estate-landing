export const Capitalize = (str?: string | null, separator?: string) => {
  if (!str) return "";

  let words;

  if (separator) words = str?.trim().replaceAll(separator, " ").split(" ");
  if (!separator) words = str?.trim().split(" ");

  return (
    words
      ?.map(
        (word) =>
          `${word?.[0]?.toUpperCase()}${word?.substring(1)?.toLowerCase()}`
      )
      .join(" ") || ""
  );
};