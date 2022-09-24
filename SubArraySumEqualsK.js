

//Approach: Using Hash Map to Record Every Cumulative Sum While Iterating Over Nums in For-Loop
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);
    for (let i=0;i<nums.length;i++) {
        sum += nums[i];
        if (map.has(sum-k)) count += map.get(sum-k);
        if (map.has(sum)) map.set(sum, map.get(sum)+1);
        else map.set(sum, 1);
    }
    return count;
}
var nums = [1,1,1];
var k = 2;
subarraySum(nums,k)
// Time Complexity: O(n), where n is the length of nums.
// Space Complexity: O(n), where n is the length of hash map that could be maximum size n, where n is length nums.