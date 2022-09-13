

//Approach 1: Using Hash Map
var wordPattern = function(pattern, str) {
    const words = str.split(/\s+/);
    const map = new Map();
    
    if(words.length !== pattern.length) return false;
    if(new Set(words).size !== new Set(pattern).size) return false;
    
    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i]) && 
           map.get(pattern[i]) !== words[i]) return false;
        map.set(pattern[i], words[i]);
    }
    return true;
};
var pattern = "abba";
var s = "dog cat cat dog";
wordPattern(pattern, s)
// Time Complexity: O(n), where N represents the number of words in the str or the number of characters in the pattern.
// Space Complexity: O(m) where m is the number of unique characters in pattern and words in s.