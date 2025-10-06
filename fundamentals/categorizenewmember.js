function openOrSenior(data) {
  let solution = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      solution.push("Senior");
    } else {
      solution.push("Open");
    }
  }

  return solution;
}
