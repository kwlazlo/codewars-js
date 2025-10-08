function rowSumOddNumbers(n) {
  let oddNumbersInTheRow = [];
  let firstElement = n ** 2 - n + 1;
  oddNumbersInTheRow.push(firstElement);
  for (let i = 0; i < n - 1; i++) {
    oddNumbersInTheRow.push((firstElement += 2));
  }

  let solution = 0;
  for (let i = 0; i < oddNumbersInTheRow.length; i++) {
    solution += oddNumbersInTheRow[i];
  }

  return solution;
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
