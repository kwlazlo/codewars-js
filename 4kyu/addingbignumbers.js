function add(a, b) {
  let result = "";
  let solution = 0;

  while (a.length < b.length) a = "0" + a;
  while (b.length < a.length) b = "0" + b;

  for (let i = a.length - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + solution;
    result = (sum % 10) + result;
    solution = Math.floor(sum / 10);
  }

  if (solution > 0) {
    result = solution + result;
  }

  return result;
}

console.log(add("2", "2"));
