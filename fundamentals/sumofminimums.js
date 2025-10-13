function sumOfMinimums(arr) {
  let sumOfMinimum = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => a - b);
    sumOfMinimum += arr[i][0];
  }
  return sumOfMinimum;
}

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
);

// smart
// function sumOfMinimums(arr) {
//   return arr.reduce((p, c) => p + Math.min(...c), 0);
// }
