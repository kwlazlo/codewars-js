function lowestTemp(t) {
  if (t === "") {
    return null;
  }

  nums = t.split(" ").map(Number);
  let lowestNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (lowestNum > nums[i]) {
      lowestNum = nums[i];
    }
  }

  return lowestNum;
}

console.log(lowestTemp("18 27 -42 16 17 -43 36 45 -25 -24 19 -14"));
