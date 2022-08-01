

var missingNumber = function (nums) {
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i];
    }

    return sum;
};
var nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
missingNumber(nums)
// Time Complexity: O(n), where n is the length of nums.
// Space Complexity: O(1)