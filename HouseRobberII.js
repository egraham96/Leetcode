

//Approach: Dynamic Programming
var rob = function(nums) {
    if (nums.length < 2) {
        return nums[0] || 0;
    }
    
    const memo1 = [nums[0]];
    const memo2 = [0, nums[1]];
    
    for (let i=1; i<nums.length - 1; i++) {
        memo1[i] = Math.max(nums[i] + (memo1[i - 2] || 0), memo1[i - 1]);
    }
    
    for (let i=2; i<nums.length; i++) {
        memo2[i] = Math.max(nums[i] + memo2[i - 2], memo2[i - 1]);
    }
    
    return Math.max(memo1.pop(), memo2.pop());
};
var nums = [1,2,3,1]
rob(nums)
/*Time Complexity: O(n) where n is the size of nums. We are accumulating results as we are scanning nums.*/
/*Space Complexity: O(1) since we are not consuming additional space other than variables for two previous results and a temporary variable to hold one of the previous results.*/