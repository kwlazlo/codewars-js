function alphabetWar(fight) {
  const leftSide = new Map([
    ["w", 4],
    ["p", 3],
    ["b", 2],
    ["s", 1],
  ]);

  const rightSide = new Map([
    ["m", 4],
    ["q", 3],
    ["d", 2],
    ["z", 1],
  ]);

  let leftSideScore = 0;
  let rightSideScore = 0;

  for (let i = 0; i < fight.length; i++) {
    const char = fight[i];
    if (leftSide.has(char)) {
      leftSideScore += leftSide.get(char);
    } else if (rightSide.has(char)) {
      rightSideScore += rightSide.get(char);
    }
  }

  if (leftSideScore > rightSideScore) return "Left side wins!";
  if (rightSideScore > leftSideScore) return "Right side wins!";
  return "Let's fight again!";
}
