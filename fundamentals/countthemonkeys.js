function monkeyCount(n) {
  solution = [];
  for (let i = 1; i <= n; i++) {
    solution.push(i);
  }

  return solution;
}

console.log(monkeyCount(10));
