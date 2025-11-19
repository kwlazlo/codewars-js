function differenceOfSquares(n) {
  let sum = (n * (n + 1)) / 2;
  let sumSquares = (n * (n + 1) * (2 * n + 1)) / 6;

  return sum * sum - sumSquares;
}


console.log(differenceOfSquares(10));
