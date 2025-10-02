function strCount(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      counter++;
    }
  }

  return counter;
}

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
