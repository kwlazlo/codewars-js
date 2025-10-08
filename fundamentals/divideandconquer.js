function divCon(x) {
  let sumOfStrings = 0,
    sumInt = 0;
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] === "string") {
      sumOfStrings += Number(x[i]);
    } else {
      sumInt += x[i];
    }
  }

  return sumInt - sumOfStrings;
}

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
