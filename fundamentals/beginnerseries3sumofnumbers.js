function getSum(a, b) {
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  let sumBetween = 0;

  for (let i = start; i <= end; i++) {
    sumBetween += i;
  }

  return sumBetween;
}

console.log(getSum(0, 1));
console.log(getSum(2, 2));
