

//Approach: Use Hash-Map to count number of Unique Elements in the Array that are not equal to zero
var minimumOperations = function(nums) {
    
    let count = 0;
    let hash = {};
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0 && !hash[nums[i]]){
            hash[nums[i]] = 1;
            count++;
        }
    }
    
    return count;
};
/*The Time Complexity of Approach 1 is O(n) where n is length of nums. Only traverse nums once.*
/*The Space Complexity of Approach 1 is O(n) where n is length of nums, as hash map increases in size with each unique element in nums*/
        
