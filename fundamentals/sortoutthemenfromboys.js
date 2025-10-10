function menFromBoys(arr) {
  let evenNums = [],
    oddNums = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num % 2 === 0) {
      if (!evenNums.includes(num)) {
        evenNums.push(num);
      }
    } else {
      if (!oddNums.includes(num)) {
        oddNums.push(num);
      }
    }
  }

  evenNums.sort((a, b) => a - b);
  oddNums.sort((a, b) => b - a);

  return evenNums.concat(oddNums);
}

console.log(menFromBoys([7, 3, 14, 17]));
