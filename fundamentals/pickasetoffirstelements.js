function first(arr, n = 1) {
  if (n > arr.length) {
    return arr;
  }

  solution = [];
  for (let i = 0; i < n; i++) {
    solution.push(arr[i]);
  }

  return solution;
}

console.log(first(["a", "b", "c", "d", "e"], 2));
console.log(first(["a", "b", "c", "d", "e"], 1));
console.log(first(["a", "b", "c", "d", "e"], 0));
console.log(first(["a", "b", "c", "d", "e"]));
