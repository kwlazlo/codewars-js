function encryptThis(text) {
  if (!text) return "";

  const words = text.split(" ");
  let solution = "";

  for (const str of words) {
    solution += encryptWord(str) + " ";
  }

  return solution.trim();
}

function encryptWord(word) {
  if (word.length === 1) {
    return word.charCodeAt(0);
  }

  if (word.length === 2) {
    return word.charCodeAt(0) + word[1];
  }

  return (
    word.charCodeAt(0) +
    word[word.length - 1] +
    word.slice(2, word.length - 1) +
    word[1]
  );
}
