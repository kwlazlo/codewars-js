function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let allBalls = blueStart - bluePulled + (redStart - redPulled);
  return (blueStart - bluePulled) / allBalls;
}
