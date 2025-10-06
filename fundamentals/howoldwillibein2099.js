function calculateAge(year1, year2) {
  if (year1 === year2) {
    return "You were born this very year!";
  }

  let solution = year2 - year1;
  if (solution > 1) {
    return `You are ${solution} years old.`;
  } else if (solution === 1) {
    return `You are 1 year old.`;
  }

  solution *= -1;
  if (solution === 1) {
    return `You will be born in 1 year.`;
  }
  return `You will be born in ${solution} years.`;
}
