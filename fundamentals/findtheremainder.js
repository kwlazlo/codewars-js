function remainder(n, m) {
  const bigger = Math.max(n, m);
  const smaller = Math.min(n, m);

  if (smaller === 0) {
    return NaN;
  }

  return bigger % smaller;
}

// smart
// function remainder(a, b){
//   return a > b ? a % b : b % a;
// }
