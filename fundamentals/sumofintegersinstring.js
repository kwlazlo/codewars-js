function sumOfIntegersInString(s) {
  let sum = 0;
  let current = "";

  for (const ch of s) {
    if (!isNaN(ch) && ch !== " ") {
      current += ch;
    } else {
      if (current.length > 0) {
        sum += Number(current);
        current = ""; // reset
      }
    }
  }

  if (current.length > 0) {
    sum += Number(current);
  }

  return sum;
}

console.log(sumOfIntegersInString("123"));
