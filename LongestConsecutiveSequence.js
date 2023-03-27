

//Approach: HashSet and Intelligence Sequence Building
var longestConsecutive = function(nums) {
    let set = new Set();
    for(const n of nums) {
        set.add(n);
    }
    let max = 0;
    for(let n of set) {
        if(!set.has(n-1)) {
            let count = 0;
            while(set.has(n++)) {
                count++;
            }
            max = Math.max(count, max);
        }
    }
    return max;
};
/*The Time Complexity is O(n), Although the time complexity appears to be quadratic due to the while loop nested within the for loop, closer inspection reveals it to be linear. Because the while loop is reached only when the current number (n) marks the beginning of a sequence (i.e. n-1 is not present in the set), the while loop can only run for n iterations throughout the entire runtime of the algorithm. This means that despite looking like O(n^2) complexity, the nested loops actually run in O(n+n)=O(n)O(n + n) = O(n)O(n+n)=O(n) time. All other computations occur in constant time, so the overall runtime is linear.
/*The Space Complexity is O(n), In order to set up O(1) containment lookups, we allocate linear space for a hash table to store the O(n) numbers in nums. Other than that, the space complexity is identical to that of the brute force solution.*/