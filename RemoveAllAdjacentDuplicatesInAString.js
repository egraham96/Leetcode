

//Approach: Using a Stack
var removeDuplicates = function(S) {
    let res = [];
    for(let i=0; i<S.length; i++){
        if(S[i] !== res[res.length-1]) {
            res.push(S[i]);
        } else {
            res.pop();
        }
    }
    return res.join("");
};
var s= "azxxzy"
removeDuplicates(s)
// Time Complexity: O(n), where n is the length of the string.
// Space Complexity: O(n−d) where d is a total length for all duplicates in the string.