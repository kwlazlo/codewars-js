reverse = function (array) {
  solution = [];
  for (let i = array.length - 1; i >= 0; i--) {
    solution.push(array[i]);
  }

  return solution;
};

console.log(reverse([1, 2, 3]));
