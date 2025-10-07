function remove(s, n) {
  let result = "";
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "!" && counter < n) {
      counter++;
    } else {
      result += s[i];
    }
  }

  return result;
}

console.log(remove("Hi!", 1));
