

//Approach: Kadane's Algorithm
var maxSubArray = function(nums) {
    var max= nums[0];
    var currentSum= max;
    for(let i=1; i<nums.length; i++){
        currentSum=Math.max(nums[i], currentSum + nums[i]);
        max= Math.max(currentSum, max)
    }
    return max;
}
var nums = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(nums)
// Time Complexity: O(n), where n is the length of nums.
// Space Complexity: O(1), No matter how long the input is, we are only ever using 2 variables.