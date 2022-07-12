

//Approach 1: Using Binary Search
var mySqrt = function(x) {
    var value= Math.sqrt(x)
    var myString= value.toString()
    if (myString.indexOf(".") != -1){
    var myNum=myString.toString().indexOf(".")
    var myStringSplit=myString.substring(0, myNum)
    return parseInt(myStringSplit);
    } else return value;
    
};
mySqrt(8)
// Time Complexity: O(n). The for-loop has a time complexity of O(n). The unshift function has time complexity of O(n) as well. Total time complexity of the function= O(n)+O(n)= O(2n)= O(n)=Linear Time.
// Space Complexity: O(1). I don't think this function stores anything, as it changes array values in place? Not sure on this ?. 


//Approach 2: Using Built-In Methods
var mySqrtTwo = function(x) {
    var value= Math.sqrt(x)
    var myString= value.toString()
    if (myString.indexOf(".") != -1){
    var myNum=myString.toString().indexOf(".")
    var myStringSplit=myString.substring(0, myNum)
    return parseInt(myStringSplit);
    } else return value;
    
};
mySqrtTwo(8)
// Time Complexity: O(n). The for-loop has a time complexity of O(n). The unshift function has time complexity of O(n) as well. Total time complexity of the function= O(n)+O(n)= O(2n)= O(n)=Linear Time.
// Space Complexity: O(1). I don't think this function stores anything, as it changes array values in place? Not sure on this ?. 