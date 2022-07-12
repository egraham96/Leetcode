

//Approach 1: Does not use Built-In Methods
var strStr = function(haystack, needle) {
    if (needle.length == 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        let k = i, j = 0;
        while (haystack[k] == needle[j] && j < needle.length) {
            k++, j++;
        }
        if (j == needle.length) return i;
    }
    return -1; // Returns -1 if needle does not exist within haystack. 
};
strStr(haystack, needle)
// Time Complexity: O(M * N), where M is the length of haystack and N is the length of needle.
// Space Complexity: O(1). 


//Approach 2: Uses Built-In Methods
var strStrTwo = function(haystack, needle) {
return haystack.search(needle)
};
strStrTwo(haystack, needle)
// Time Complexity: O(M * N), where M is the length of haystack and N is the length of needle ?.
// Space Complexity: O(1) because not storing any variables or data, regardless of size of haystack or needle?. 