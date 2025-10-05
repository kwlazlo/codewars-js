function warnTheSheep(queue) {
  let indexOfWolf = 0;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      indexOfWolf = i;
    }
  }

  indexOfSheep = queue.length - indexOfWolf - 1;
  if (indexOfSheep === 0) {
    return "Pls go away and stop eating my sheep";
  }
  return `Oi! Sheep number ${indexOfSheep}! You are about to be eaten by a wolf!`;
}
