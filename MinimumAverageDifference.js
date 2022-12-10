

//Approach: Prefix Sum Optimized
var minimumAverageDifference = function(nums) {
    let nL=nums.length;
    let leftSum = 0;
    let rightSum = nums.reduce((p,n)=>{return p+n},0);

    let minimum = Infinity;
    let ans = Infinity;
    for (let i=0; i<nL; i++){
        leftSum += nums[i];
        rightSum -= nums[i];
        let res = Math.abs(Math.floor(((leftSum)/(i+1))) - Math.floor(((rightSum)/Math.max(1,(nL-1-i)))));
        if(res < minimum){
            minimum = res;
            ans = i;
        }
    }
    return ans;
};
var nums = [2,5,3,9,5,3]
minimumAverageDifference(nums)
/* Time Complexity: O(n), where n is length of nums. We iterate over each index of the nums array and at each index, we calculate averages of two parts in constant time using leftSum and rightSum variables.
Thus, for finding the difference of averages at n indices, it will take O(n) time.*/
// Space Complexity: O(1), we have only used some integer variables. Thus, the space used is constant.