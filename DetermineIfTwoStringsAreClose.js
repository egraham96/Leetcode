

//Approach: Using Frequency Array Map
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length)  return false;
    
    const chars = new Array(26).fill(0),
          used = new Array(26).fill(false),
          a = 'a'.charCodeAt(0);
    
    for (let i = 0; i < word1.length; i++) {
        chars[word1.charCodeAt(i)-a]++;
        used[word1.charCodeAt(i)-a] = true;
    }
    
    let countMap = {};
    
    for (let n of chars) {
        if (countMap[n] === undefined)
            countMap[n] = 0;
        countMap[n]++;
    }
    
    chars.fill(0);
    for (let i = 0; i < word2.length; i++) {
        if (!used[word2.charCodeAt(i)-a])  // if there is new char not used in word1, return false
            return false;
        chars[word2.charCodeAt(i)-a]++;
    }
    
    for (let n of chars) {
        if (countMap[n] === undefined)   // if one char has the frequency unused in word1, return false
            return false;
        countMap[n]--;
        if (countMap[n] < 0)
            return false;
    }
    
    return true;
};
closeStrings("cabbba", "abbccc")
/*Time Complexity : O(n), where n is the length of word. We iterate over words of size n
 to build the frequency map which takes O(n). To check if both words have the same characters and frequency, we iterate over a fixed-size array of size 26 which takes constant time.
The sort operation on the array also takes constant time, as the array is of size 26.
This gives us time complexity of O(n)+O(1)+O(1)=O(n)*/
/*Space Complexity: O(1), as we use constant extra space of size 26 to store the frequency map.*/
