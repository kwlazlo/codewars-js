function remove(string) {
  return string.replace(/!+$/, "");
}

console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));

//  remove all exclamation
// function remove(string) {
//   let solution = string[0];
//   for (let i = 1; i < string.length; i++) {
//     if (string[i] !== "!") {
//       solution += string[i];
//     }
//   }
//   return solution;
// }
