

var firstUniqChar = function(s) {
    var myMap= new Map();
    for (let i=0; i<s.length; i++){
        if (myMap.has(s[i])){
            myMap.set(s[i], (myMap.get(s[i])+ 1));
        } 
        else {
            myMap.set(s[i], 1)
    }}
    for (let i=0; i<s.length; i++){
        if(myMap.get(s[i])===1){
            return i;
        }
    }
        return -1;
    }
    var s = "leetcode";
    firstUniqChar(s);
    /*The Time Complexity of Approach 1 is O(n), we iterate through the array 2 times. n+n=2n, which is O(n) time.
    /*The Space Complexity of Approach 1 is O(1), the alphabet only contains 26 letters. */