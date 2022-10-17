

//Approach: Find Total Sum then Traverse Array starting from Left while collecting Left Sum
var pivotIndex = function(nums) { //TC: O(n) SC: O(1)
    //calculate total sum
    let total = 0
    for(let j=0;j<nums.length;j++) total+=nums[j]
    //traverse the array from left to right searching for the pivot
    let leftsum = 0
    for(let i=0;i<nums.length;i++){
        if(leftsum===(total-nums[i]-leftsum)) return i
        leftsum+=nums[i]
    }
    return -1
};
var nums = [1,7,3,6,5,6];
findPivotIndex(nums)
// Time Complexity: O(n), where n is length of nums. The reduce function takes O(n) time. Traversing the array from the left while calculating left sum also takes O(n) time. O(n) + O(n) so O(2n), which simplifies to O(n).
// Space Complexity: O(1), only variables are leftsum and total.