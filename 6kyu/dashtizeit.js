function dashatize(num) {
  num = Math.abs(num);

  if (num < 10) {
    return num.toString();
  }

  const temp = String(num);
  let solution = "";

  for (let i = 0; i < temp.length; i++) {
    const digit = Number(temp[i]);

    if (digit % 2 !== 0) {
      solution += "-" + temp[i] + "-";
    } else {
      solution += temp[i];
    }
  }

  solution = solution.replace(/-+/g, "-").replace(/^-|-$/g, "");

  return solution;
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));
console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
console.log(dashatize(-58));
