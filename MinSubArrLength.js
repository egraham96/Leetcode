

//Approach 1: Sliding Window (Two Pointers)
var minSubArrayLen = function (target, nums) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if (total < target && end < nums.length) {
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if (total >= target) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
var target = 7;
var nums = [2, 3, 1, 2, 4, 3]
minSubArrayLen(target, nums)
// Time Complexity: O(n), Single iteration of O(n). Each element can be visited at most twice, once by right pointer and once by left pointer.
// Space Complexity: O(1)