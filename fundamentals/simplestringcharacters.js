function solve(s) {
  let sumOfUpperCase = 0,
      sumOfLowerCase = 0,
      sumOfNum = 0,
      sumOfSpecial = 0;

  for (let i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(s[i])) {
      sumOfUpperCase++;
    } else if (/[a-z]/.test(s[i])) {
      sumOfLowerCase++;
    } else if (/[0-9]/.test(s[i])) {
      sumOfNum++;
    } else {
      sumOfSpecial++;
    }
  }

  return [sumOfUpperCase, sumOfLowerCase, sumOfNum, sumOfSpecial];
}
