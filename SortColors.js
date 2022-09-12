

//Approach 1: One-Pass Approach utilizing Dutch National Flag Algorithm
var sortColors = function (nums) {
    let i = 0;
  
    let left = 0,
      right = nums.length - 1;
  
    while (i <= right && left < right) {
      if (nums[i] === 0) {
        [nums[i], nums[left]] = [nums[left], nums[i]];
        left++;
        i++;
      } else if (nums[i] === 2) {
        [nums[i], nums[right]] = [nums[right], nums[i]];
        right--;
      } else {
        i++;
      }
    }
  };
var nums = [2,0,2,1,1,0]
sortColors(nums)
// Time Complexity: O(n), we traverse over nums once.
// Space Complexity: O(1). Variables used do not increase as size of nums increase.