function solution(nums) {
  if (nums === undefined || nums === null) {
    return [];
  }

  return nums.sort((a, b) => a - b);
}
