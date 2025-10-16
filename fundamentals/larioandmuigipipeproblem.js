function pipeFix(numbers) {
  let lastNum = numbers[numbers.length - 1];
  let solution = [],
    counter = 1;

  for (let i = numbers[0]; i < lastNum; i++) {
    solution.push(i);
  }
  solution.push(lastNum);
  return solution.sort((a, b) => a - b);
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([-1, 4]));
