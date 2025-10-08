// function nthSmallest(arr) {
//   let smallestElement = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (smallestElement > arr[i]) {
//       smallestElement = arr[i];
//     }
//   }

//   return smallestElement;
// }

function nthSmallest(arr, pos) {
  arr = arr.sort((a, b) => a - b);
  return arr[pos - 1];
}
