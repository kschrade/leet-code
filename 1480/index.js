function runningSum(nums) {
    var counter = 0;
    return nums.map(function (val) {
        counter += val;
        return counter;
    });
}
