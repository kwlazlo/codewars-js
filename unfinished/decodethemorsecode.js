const morseToLetter = new Map([
  [".-", "a"],
  ["-...", "b"],
  ["-.-.", "c"],
  ["-..", "d"],
  [".", "e"],
  ["..-.", "f"],
  ["--.", "g"],
  ["....", "h"],
  ["..", "i"],
  [".---", "j"],
  ["-.-", "k"],
  [".-..", "l"],
  ["--", "m"],
  ["-.", "n"],
  ["---", "o"],
  [".--.", "p"],
  ["--.-", "q"],
  [".-.", "r"],
  ["...", "s"],
  ["-", "t"],
  ["..-", "u"],
  ["...-", "v"],
  [".--", "w"],
  ["-..-", "x"],
  ["-.--", "y"],
  ["--..", "z"],
]);

function decodeMorse(morseStr) {
  return morseStr
    .trim()
    .split(" ")
    .map((symbol) => morseToLetter.get(symbol) || "")
    .join("")
    .toUpperCase();
}
