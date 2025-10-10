function findDigit(num, nth) {
  if (nth <= 0) {
    return -1;
  }

  const str = Math.abs(num).toString();
  const indexFromRight = str.length - nth;

  if (indexFromRight < 0) {
    return 0;
  }

  return Number(str[indexFromRight]);
}

console.log(findDigit(5673, 4));
