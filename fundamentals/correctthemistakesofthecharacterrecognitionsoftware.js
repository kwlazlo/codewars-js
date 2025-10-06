function correct(string) {
  solution = "";
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "0":
        solution += "O";
        break;
      case "5":
        solution += "S";
        break;
      case "1":
        solution += "I";
        break;
      default:
        solution += string[i];
    }
  }

  return solution;
}

console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
console.log(correct("BUDAPE5T"));
console.log(correct("PAR15"));
