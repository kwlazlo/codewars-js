function uniqueSum(lst) {
  if (lst.length === 0) {
    return null;
  }

  const set = new Set(lst);
  let total = 0;
  for (const num of set) {
    total += num;
  }

  return total;
}

console.log(uniqueSum([1, 2, 3]));
console.log(uniqueSum([]));
