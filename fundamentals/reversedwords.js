function reverseWords(str) {
  solution = "";
  words = str.split(" ");
  for (let i = words.length - 1; i >= 0; i--) {
    solution += words[i] + " ";
  }
  solution = solution.trim();
  return solution;
}

console.log(reverseWords("hello world!"));
