function count(string) {
  let solution = {};

  for (let char of string) {
    if (char === " ") continue;

    const currentNum = solution[char] || 0;
    solution[char] = currentNum + 1;
  }

  return solution;
}

// map
// function count(string) {
//   string = string.toLowerCase();
//   let solution = new Map();
//   for (char of string) {
//     if (char === " ") {
//       continue;
//     }

//     const currentNum = solution.get(char) || 0;
//     solution.set(char, currentNum + 1);
//   }

//   return solution;
// }

console.log(count("abcd"));
