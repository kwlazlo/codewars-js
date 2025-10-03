function array(str) {
  let solution = str.split(",");
  if (solution.length < 3) {
    return null;
  }
  solution = solution.slice(1, -1);

  return solution.join(" ");
}

// not working
// function array(string) {
//   if (string.length < 3) {
//     return null;
//   }

//   var string = string.replaceAll(",", ""),
//     solution = "";

//   for (let i = 1; i < string.length - 1; i++) {
//     solution += string[i];
//     if (i !== string.length - 2) {
//       solution += " ";
//     }
//   }

//   return solution;
// }

console.log(array("1,2,3"));
console.log(array("1,2,3,4,5,6"));
console.log(array("A1,B2"));
console.log(array("A1,B2,C3,D4,E5"));
console.log(array("A,1,23,456,78,9,Z"));
