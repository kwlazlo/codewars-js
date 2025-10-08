const orderedCount = function (text) {
  const counts = new Map();

  for (const char of text) {
    if (counts.has(char)) {
      counts.set(char, counts.get(char) + 1);
    } else {
      counts.set(char, 1);
    }
  }

  return Array.from(counts);
};
