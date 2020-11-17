function runningSum(nums: number[]): number[] {
  let counter = 0;
  return nums.map((val) => {
    counter += val;
    return counter;
  });
}
