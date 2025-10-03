function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return "Hello, World!";
  }
  const solution = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${solution}!`;
}

console.log(hello("john"));

// smart
// const hello = s =>
//   `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;
