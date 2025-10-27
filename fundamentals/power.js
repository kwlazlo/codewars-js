function numberToPower(number, power) {
  if (power === 0) {
    return 1;
  }
  let solution = number;
  for (let i = 1; i <= power - 1; i++) {
    solution *= number;
  }

  return solution;
}

console.log(numberToPower(4, 2));
console.log(numberToPower(10, 4));
console.log(numberToPower(10, 0));
