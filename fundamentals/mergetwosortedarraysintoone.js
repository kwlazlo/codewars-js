function mergeArrays(arr1, arr2) {
  arr1 = arr1.concat(arr2).sort((a, b) => a - b);
  const unique = [...new Set(arr1)];
  return unique;
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
