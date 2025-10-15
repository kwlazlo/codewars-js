function maskify(cc) {
  solution = "";
  for (let i = 0; i < cc.length - 4; i++) {
    solution += "#";
  }

  let lastfour = cc.slice(-4);
  return solution + lastfour;
}

console.log(maskify("123456789012345678"));
