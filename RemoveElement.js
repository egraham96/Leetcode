

var removeElement = function (nums, val) {
    var length= nums.length
    for (let i = 0; i < length; i++) {
        if (nums[i] === val) {
            console.log(nums.splice(nums[i], 1))
            length++
        }
    }
    console.log(nums)
    return nums;
};
removeElement([3, 2, 2, 3], 3)