export const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const langColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Python: "#3572A5",
  Other: "#333333",
};

export const getLangColor = (lang: string) => {
  return langColors[lang] ?? langColors.Other;
};
