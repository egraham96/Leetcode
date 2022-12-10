

//Approach
var halvesAreAlike = function(s) {
    var vowels=new Set(['a','e','i','o','u', 'A', 'E','I','O','U'])
    var length=s.length
    var leftCount=0
    var rightCount=0
    
    var i=0
    var j=length-1
    while(i<=j){
        if(vowels.has(s.charAt(i))){
            leftCount++
        }if(vowels.has(s.charAt(j))){
            rightCount++
        }
        i++
        j--
    }
    return leftCount===rightCount
};
var s = "textbook"
halvesAreAlike(s)
// Time Complexity: O(n), where n is the length of s. We need to iterate substring a and b, a+b=s.
// Space Complexity: O(1), since we do not need extra space. Here we do not take the input s into consideration.