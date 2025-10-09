function isVow(a) {
  let solution = [];

  for (let i = 0; i < a.length; i++) {
    let char = String.fromCharCode(a[i]);
    if ("aeiou".includes(char)) {
      solution.push(char);
    } else {
      solution.push(a[i]);
    }
  }

  return solution;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
