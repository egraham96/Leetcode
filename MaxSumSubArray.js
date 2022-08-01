

//Approach 1: Sliding Window (Fixed Window Size)
var maxSumSubArray = function (nums, k) {
    var currentSum = 0;
    var maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        currentSum = arr[i];
        if (i <= k - 1) {
            maxSum = Math.max(currentSum, maxSum);
            currentSum -= nums[i - (k - 2)]
        }
    }
    return maxSum;
};
var nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
var k = 3
maxSumSubArray(nums, k)
// Time Complexity: O(n), where n is the length of nums.
// Space Complexity: O(1)