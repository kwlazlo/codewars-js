function evaporator(content, evapPerDay, threshold) {
  let leftDosage = (evapPerDay / 100) * content;
  let finalDosage = content,
    days = 0;
  while (finalDosage > threshold) {
    finalDosage -= leftDosage;
    days++;
  }
  return days;
}
