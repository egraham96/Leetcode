

//Approach: Using Two Sets
var intersection = function(nums1, nums2) {
    const num1Set = new Set(nums1);
    const num2Set = new Set(nums2);
    
    const result = [];
    
    for (var value of num1Set) {
      if (num2Set.has(value)) {
        result.push(value);
      }
    }
    
    return result;
  };
 var nums1 = [1,2,2,1];
 var nums2 = [2,2];
 intersection(nums1, nums2);
// Time Complexity: O (n + m), where n and m are the respective arrays' lengths. O(n) time is used to convert nums1 into set, O(m) time is used to convert nums2 into a set. Contains/in operations using Sets are O(1) in the average case.
// Space Complexity: O(m+n) in the worst case when all elements in the arrays are different.