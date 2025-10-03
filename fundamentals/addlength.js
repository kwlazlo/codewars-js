function addLength(str) {
  var temp = str.split(" ");
  var solution = [];
  for (const element of temp) {
    solution.push(element + " " + element.length);
  }

  return solution;
}

console.log(addLength("apple ban"));
