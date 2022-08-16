

//Approach 1: Two Pointers
var removeElement = function (nums, val) {
    var i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++
        }
    }
    return i;
};
removeElement([3, 2, 2, 3], 3)
/*The Time Complexity of Approach 1 is O(n). Assume the array has a total of n elements, both i and j traverse at most n steps, n+n=2n, which is just n time complexity.
/*The Space Complexity of Approach 1 is O(1). Array is modified in-place. */