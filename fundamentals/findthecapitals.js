var capitals = function (word) {
  var capitalsLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    solution = [];
  for (let i = 0; i < word.length; i++) {
    if (capitalsLetters.includes(word[i])) {
      solution.push(i);
    }
  }

  return solution;
};
