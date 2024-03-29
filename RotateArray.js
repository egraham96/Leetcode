

//Approach 1: Using Reverse
var rotate = function(nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
     
    let reverse = function(i, j){
     while(i < j){
         let temp = nums[i]
         nums[i] = nums[j]
         nums[j] = temp
         i++
         j--
     }
    } // suppose  ----->---> 
     reverse(0, nums.length-1); // reverse   <--<------
      reverse(0, k-1) // reverse first part ---><----
    reverse(k, nums.length-1)// reverse second part --->----->
     
 };
/*The Time Complexity of Approach 1 is O(n)
/*The Space Complexity of Approach 1 is O(1), array is reversed in place*/