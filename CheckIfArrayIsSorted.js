

//Approach: Find If There is More than One Break Point (and the special case)
var check = function (nums) {
    let count = 0;
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
        }
    }
    if (count > 1 || (count == 1 && nums[0] < nums[len])) {
        return false;
    }
    return true;
};
var nums = [3,4,5,1,2];
check(nums);
    /*The Time Complexity of Approach 1 is O(n), we iterate through the array once.
    /*The Space Complexity of Approach 1 is O(1), the alphabet only contains 26 letters. */