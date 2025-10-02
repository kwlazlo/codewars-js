function remove(String) {
  if (String.charAt(String.length - 1) === "!") {
    return String.substr(0, String.length - 1);
  }
  return String;
}

console.log(remove("Hi!"));

// smart
// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }
