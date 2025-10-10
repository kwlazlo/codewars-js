function capitalize(string, indices) {
  let chars = string.split("");

  for (let i = 0; i < indices.length; i++) {
    let idx = indices[i];
    if (idx >= 0 && idx < chars.length) {
      chars[idx] = chars[idx].toUpperCase();
    }
  }
  return chars.join("");
}

console.log(capitalize("abcdef", [1, 2, 5]));
console.log(capitalize("abcdef", [1, 2, 5, 100]));
console.log(capitalize("codewars", [1, 3, 5, 50]));
console.log(capitalize("abracadabra", [2, 6, 9, 10]));
