function stringy(size) {
  solution = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      solution += "1";
    } else {
      solution += "0";
    }
  }

  return solution;
}

console.log(stringy(6));
