function solution(number) {
  if (number <= 0) {
    return 0;
  }

  let counter3 = 0,
    counter5 = 0;
  let multipleBy3 = [],
    multipleBy5 = [];

  while (counter3 < number - 3) {
    counter3 += 3;
    multipleBy3.push(counter3);
  }

  while (counter5 < number - 5) {
    counter5 += 5;
    multipleBy5.push(counter5);
  }

  let total3 = 0,
    total5 = 0,
    total15 = 0,
    counter15 = 0,
    multipleBy15 = [];

  while (counter15 < number - 15) {
    counter15 += 15;
    multipleBy15.push(counter15);
  }

  const filtered3 = multipleBy3.filter((num) => !multipleBy15.includes(num));
  const filtered5 = multipleBy5.filter((num) => !multipleBy15.includes(num));

  for (const num of filtered3) {
    total3 += num;
  }

  for (const num of filtered5) {
    total5 += num;
  }

  for (const num of multipleBy15) {
    total15 += num;
  }

  return total3 + total5 + total15;
}

console.log(solution(20));


// smart
// function solution(number){
//   var sum = 0;
  
//   for(var i = 1;i< number; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//       sum += i
//     }
//   }
//   return sum;
// }