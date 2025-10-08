function solve(arr) {
  const seen = new Set();
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      result.push(arr[i]);
    }
  }

  return result.reverse();
}

console.log(solve([3, 4, 4, 3, 6, 3]));
console.log(solve([1, 2, 1, 2, 1, 2, 3]));
console.log(solve([1, 2, 3, 4]));

// before changes
// function solve(arr) {
//   return [...new Set(arr)];
// }
