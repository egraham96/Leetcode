

//Approach 1: Using Map
function findTheDifference(s, t) {
    const map = {};

    for (let i = 0; i < original.length; i++) {
        if(!map[original[i]]) {
            map[original[i]] = 0;
        }

        map[original[i]]++;
    }

    for (let i = 0; i < modified.length; i++) {
        if(!map[modified[i]]) {
            return modified[i];
        }

        map[modified[i]]--;
    }

    return "";
}
var s = "abcd";
var t = "abcde";
findTheDifference(s, t);
// Time Complexity: O(n), where n is length of the strings combined (length of s + length of t). Since, we iterate through both the strings once.
// Space Complexity: O(1). The problem states string s and string t have lowercase letters. Thus, the total number of unique characters and eventually buckets in the hash map possible are just 26.