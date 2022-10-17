

//Approach: Same Approach as Find Pivot Index Problem
var findMiddleIndex = function(nums) {
    let leftSum = 0;
    const total = nums.reduce((a,i)=>a+i);
    
    for(let i=0; i<nums.length; i++){
        const rightSum = total - leftSum - nums[i];
        if(rightSum === leftSum){
            return i;
        }
        leftSum +=nums[i];
    }
    return -1;
};
var nums = [2,3,-1,8,4];
findMiddleIndex(nums)
// Time Complexity: O(n), where n is length of nums. The reduce function takes O(n) time. Traversing the array from the left while calculating left sum also takes O(n) time. O(n) + O(n) so O(2n), which simplifies to O(n).
// Space Complexity: O(1), only variables are leftsum and total.