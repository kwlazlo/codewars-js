function parseF(s) {
  const parsed = parseFloat(s);
  return isNaN(parsed) ? null : parsed;
}

console.log(parseF(3.14));
