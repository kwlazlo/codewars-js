function kebabize(str) {
  solution = "";
  str = str.replace(/\d/g, "");
  for (char of str) {
    if (char === char.toUpperCase()) {
      solution += "-" + char;
    } else {
      solution += char;
    }
  }
  solution = solution.toLowerCase();
  solution = solution.replace(/^-|-$/g, "");

  return solution;
}

console.log(kebabize("camelsHaveThreeHumps"));
console.log(kebabize("myCamelCasedString"));
console.log(kebabize("CAMEL"));
console.log(kebabize("cAMEL"));
console.log(kebabize("MyCamelHas3Humps"));
console.log(kebabize("myCamelHas3Humps"));
