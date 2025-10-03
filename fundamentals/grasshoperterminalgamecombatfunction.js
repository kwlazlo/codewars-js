function combat(health, damage) {
  var total = health - damage;
  if (total < 0) {
    return 0;
  }

  return total;
}
