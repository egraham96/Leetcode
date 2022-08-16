

//Approach 2: Sorting
var majorityElement = function(nums) {
    if (nums.length <=2){
        return nums[0];
    }
    nums.sort(function(a,b){return a-b});
    return nums[Math.floor((nums.length-1)/2)];
    
};
// Time Complexity: O(n log n), Chrome browser uses Timsort which has a time complexity lower bounded by O(n) and upper-bounded by O(n log n). Would not take longer than O(n log n)
// Space Complexity: O(1) if sorting nums in place is allowed. O(n) if we have to return a new array.