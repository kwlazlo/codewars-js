function flattenAndSort(array) {
  if (array === undefined || array.length == 0) {
    return [];
  }

  const solution = array.flat();
  return solution.sort((a, b) => a - b);
}

console.log(flattenAndSort([]));

console.log(flattenAndSort([[], []]), []);

console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ])
);

console.log();
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
