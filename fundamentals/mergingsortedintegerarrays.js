function mergeArrays(a, b) {
  const total = a.concat(b);
  const unique = [...new Set(total)];
  return unique.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
