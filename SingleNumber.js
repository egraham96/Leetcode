

/*Approach 1: Sorting the Array. Revisit this problem when you learn bit
manipulation. As the bit manipulation approach is the only one that achieves
 linear runtime complexity and use only constant extra space.*/
 var singleNumber = function(nums) {
    var sorted=nums.sort(function(a, b){return a-b});
    for (let i=0; i<sorted.length; i+=2){
        if (sorted[i]!=sorted[i+1]){
            return sorted[i];
        }
    }
    
};
nums = [4,1,2,1,2]
singleNumber(nums)
// Time Complexity: O(n), where n is length of nums. We iterate the entire length of nums in the sort method (O (n)) then do it again with the for-loop. Ends up being O(n) + O(n)= O(2n)=O(n).
// Space Complexity: O(n). The size of the sorted array increases as more elements are added.