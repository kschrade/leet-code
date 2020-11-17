function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let max = 0;

  candies.forEach((val) => {
    if (val > max) {
      max = val;
    }
  });

  return candies.map((val) => val + extraCandies >= max);
}
