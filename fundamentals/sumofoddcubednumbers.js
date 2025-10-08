function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
  }

  let powOf3 = [],
    sumOfOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    powOf3.push(arr[i] ** 3);
  }

  for (let i = 0; i < powOf3.length; i++) {
    if (powOf3[i] % 2 != 0) {
      sumOfOdd += powOf3[i];
    }
  }

  return sumOfOdd;
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([-3, -2, 2, 3]));
console.log(cubeOdd(["a", 12, 9, "z", 42]));

// smart
// let cubeOdd = a => {
//   var isNumeric = a.every(x=>!isNaN(x))
//   return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
// }
