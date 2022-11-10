

var shortestDistance = function(words, word1, word2) {
    let index1 = null
    let index2 = null
    let currMin = Number.MAX_SAFE_INTEGER
    words.forEach(function(word, index){
	 // we will store most recent occurence of word1 in index1 and word2 in index2
        if(word.length == word1.length && word === word1){
            index1 = index
        }
        else if(word.length == word2.length && word === word2){
            index2 = index
        }
        // and when we get both, we will keep updating our currMin
		// Think :)
        if(index1!==null && index2!==null){
            currMin = Math.min(currMin, Math.abs(index2-index1))
        }
    })
    // if currMin wasnt changed at all return -1 else the answer
    return currMin === Number.MAX_SAFE_INTEGER ? -1:currMin
    
};
var wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
var word1 = "coding";
var word2 = "practice";
shortestDistance(wordsDict, word1, word2)
/*Time Complexity : O(n*m) where n is the length of wordsDict and m is word1.length + word2.length. Since comparing two strings might take O(m) time in the worst case and O(1) time on average. This all depends upon the implementation of string comparison in the programming language*/
/*Space Complexity : O(1), constant space solution.*/