function pillars(numberOfPillars, distance, width) {
  if (numberOfPillars <= 1) return 0;

  const betweenDistance = (numberOfPillars - 1) * distance * 100;
  const middlePillarsWidth = (numberOfPillars - 2) * width;

  return betweenDistance + middlePillarsWidth;
}
