

//Approach 1
var removeDuplicates = function (nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i])
            nums[++i] = nums[j];
    }
    return ++i;
};
removeDuplicates([1, 1, 2])
/*The Time Complexity of Approach 1 should be O(N). Assume that N is the length of array. Each of i and j traverses at most N steps. 
/*The Space Complexity of Approach 1 is given by the problem description, O(1).*/

