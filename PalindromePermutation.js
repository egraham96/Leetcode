

//Approach 1: Using Hashmap
var canPermutePalindrome = function(s) {
    const charset = {};
    
    // maintain a set of charactors that occur odd number of times
    for (var c of s) {
        if (charset[c]) delete charset[c];
        else charset[c] = 1;
    }
    
    // return true if zero or one charactor that occur odd number of times
    return Object.keys(charset).length <= 1 ? true : false;
};
var s= "carerac";
canPermutePalindrome(s);
// Time Complexity: O(n), we traverse over the string s of length n once only.
// Space Complexity: O(1). The \text{set}set can grow up to a maximum number of all distinct elements. However, the number of distinct characters are bounded, so as the space complexity.