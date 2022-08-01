

//Approach 1: 
var containsNearbyDuplicate = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};
var nums = [1, 2, 3, 1, 2, 3];
var k = 2
containsNearbyDuplicate(nums, k)
// Time Complexity: O(n). We do O(n) operations of search, delete and insert, each with constant time complexity.
// Space Complexity: O(min (n, k)).  The extra space required depends on the number of items stored in the hash table, which is the size of the sliding window, min(n,k).