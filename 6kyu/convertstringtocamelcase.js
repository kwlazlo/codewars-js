function toCamelCase(str) {
  if (str.includes("-")) {
    words = str.split("-");
  }

  if (str.includes("_")) {
    words = str.split("_");
  }

  if (str.includes("-") && str.includes("_")) {
    words = str.split(/[-_]/);
  }

  if (str === "") {
    return "";
  }

  solution = "";
  solution += words[0];
  for (let i = 1; i < words.length; i++) {
    solution += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return solution;
}

console.log(toCamelCase("kebab-case"));
console.log(toCamelCase("kebab_case"));
console.log(toCamelCase("random_case-case"));
