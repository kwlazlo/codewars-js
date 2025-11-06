function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}

console.log(twoHighest([1, 2, 3, 4, 5]));
