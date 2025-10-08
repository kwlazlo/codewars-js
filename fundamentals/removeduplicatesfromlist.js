function distinct(a) {
  const solution = [...new Set(a)];
  return solution;
}

console.log(distinct([1, 1, 1, 2, 3, 4, 5]));
