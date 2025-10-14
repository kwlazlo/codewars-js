function pigIt(str) {
  const words = str.split(" ");
  let solution = "";

  for (const word of words) {
    if (/^[\p{P}]+$/u.test(word)) {
      solution += word + " ";
    } else {
      solution += word.slice(1) + word[0] + "ay" + " ";
    }
  }

  return solution.trimEnd();
}

console.log(pigIt("Hello world !"));
