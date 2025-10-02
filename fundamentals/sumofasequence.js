const sequenceSum = (begin, end, step) => {
  var sum = 0,
    current = begin;

  if (begin > end) {
    return 0;
  }

  while (current <= end) {
    sum += current;
    current += step;
  }

  return sum;
};

console.log(sequenceSum(2, 6, 2));
console.log(sequenceSum(1, 5, 1));
