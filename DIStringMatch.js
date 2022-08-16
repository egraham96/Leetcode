

//Approach 1: "Ad-Hoc"
var diStringMatch = function(S) {
    let max = S.length
    let min = 0
    const result = []
    for (let s of S){
        if (s === 'D'){
            result.push(max)
            max--
        }
        else if (s === 'I'){
            result.push(min)
            min++
        }
    }
    result.push(max)
    return result
};
s = "IDID";
diStringMatch(s)
// Time Complexity: O(n), where n=length of given string, S. 
// Space Complexity: O(n) where maximum space taken up is length of given string S.
