function multiplyAll(arr) {
  return function (num) {
    return arr.map((el) => el * num);
  };
}

console.log(multiplyAll([1, 2, 3], 2));
