function solve(s) {
  let sumOfUpperCase = 0,
    sumOfLowerCase = 0,
    sumOfNum = 0,
    sumOfSpecial = 0;

  for (let i = 0; i < s.length; i++) {
    if (/A-Z/.test(s[i])) {
      sumOfUpperCase + 1;
    } else if (/a-z/.test(s[i])) {
      sumOfLowerCase + 1;
    } else if (/[0-9]/.test(s[i])) {
      sumOfNum + 1;
    } else {
      sumOfSpecial + 1;
    }
  }
}
