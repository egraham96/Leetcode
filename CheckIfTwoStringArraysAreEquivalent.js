

//Approach 1: Concatenate and Compare
var arrayStringsAreEqual = function(word1, word2) {
    if (word1.join("") === word2.join("")){
        return true;
    } else {return false;}
    
};
var word1 = ["ab", "c"]
var word2 = ["a", "bc"]
arrayStringsAreEqual(word1, word2)
/*The Time Complexity of Approach 1 is O(n * k), where n is the number of strings in the list and k is the maximum length of a string in it. We iterate over each string in the arrays to append them. This cost us O(n * k) as we traversed over each character of the string to perform an append operation.*/
/*The Space Complexity of Approach 1 is O(n * k), we need to have two strings to store the strings represented by the arrays. Therefore, the total space complexity is equal to O(n*k).*/


//Approach 1: Two Pointers 
var arrayStringsAreEqualTwo = function(word1, word2) {
    let wordIdx1 = 0, wordIdx2 = 0;
    let idx1 = 0, idx2 = 0;
    while(wordIdx1 < word1.length && wordIdx2 < word2.length){
        if(word1[wordIdx1][idx1] !== word2[wordIdx2][idx2]) return false;
        idx1++, idx2++;
        if(idx1 == word1[wordIdx1].length){
            idx1 = 0;
            wordIdx1++;
        }
        if(idx2 == word2[wordIdx2].length){
            idx2 = 0;
            wordIdx2++;
        }
    }
    return wordIdx1 === word1.length && wordIdx2 === word2.length;
}
var word1 = ["ab", "c"]
var word2 = ["a", "bc"]
arrayStringsAreEqualTwo(word1, word2)
/*The Time Complexity of Approach 1 is O(n * k), where n is the number of strings in the list and k is the maximum length of a string in it. We iterate over each string in the arrays to append them. This cost us O(n * k) as we traversed over each character of the string to perform an append operation.*/
/*The Space Complexity of Approach 1 is O(1). We don't require any extra space as we are not building any string as we did in the previous approach and therefore the total space complexity is equal to O(1).*/