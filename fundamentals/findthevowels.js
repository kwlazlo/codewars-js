function vowelIndices(word) {
  const vowels = "aeiouy";
  let solution = [];

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      solution.push(i + 1);
    }
  }

  return solution;
}
