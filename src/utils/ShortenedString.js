export const ShortenedString = (string) => {
  if (string.length < 234) return string;
  return `${string.slice(0, 233).trim()}...`;
};
