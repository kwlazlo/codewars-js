function cookie(x) {
  let str = "Who ate the last cookie? It was ";
  if (typeof x === "string") {
    return str + "Zach!";
  }

  if (typeof x === "number") {
    return str + "Monica!";
  }

  return str + "the dog!";
}
