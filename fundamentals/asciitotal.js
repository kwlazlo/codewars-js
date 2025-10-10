function uniTotal(string) {
  if (string === "") {
    return 0;
  }

  if (string.length === 0) {
    return string.charCodeAt(0);
  }

  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i);
  }

  return sum;
}

console.log(uniTotal("a"));
console.log(uniTotal("Mary Had A Little Lamb"));
