

//Approach: Binary Search
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let middle;
    
    while(left <= right){
        middle = Math.floor((left + right) / 2);
        if(nums[middle] === target) return middle;
        else if(nums[middle] < target){
            left = middle + 1;
        } else{
            right = middle - 1;
        }
    }
    
    return left;
};
var nums = [1,3,5,6], target = 5;
searchInsert(nums)
// Time Complexity: O(log n), solution requires binary search to achieve O(log n) time.
// Space Complexity: O(1), constant space solution.