function uefaEuro(teams, scores) {
  if (scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`;
  } else if (scores[0] === scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
  } else {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`;
  }
}

console.log(uefaEuro(["Germany", "Ukraine"], [2, 0]));
console.log(uefaEuro(["Belgium", "Italy"], [0, 2]));
console.log(uefaEuro(["Portugal", "Iceland"], [1, 1]));
