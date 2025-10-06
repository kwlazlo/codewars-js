function sayHello(name, city, state) {
  str = "Hello, ";
  for (let i = 0; i < name.length; i++) {
    str += name[i];
    if (i !== name.length - 1) {
      str += " ";
    }
  }
  str += `! Welcome to ${city}, ${state}!`;
  return str;
}

// smart
// function sayHello( name, city, state ) {
// return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
// }
