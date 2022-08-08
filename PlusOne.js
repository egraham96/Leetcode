

//Approach 1: 
var plusOne = function(digits) {
    for(var i = digits.length - 1; i >= 0; i--){
         digits[i]++; 
        if(digits[i] > 9){
            digits[i] = 0;
        }else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
    };
var digits = 
[9, 9, 9, 9]
plusOne(digits)
// Time Complexity: O(n). The for-loop has a time complexity of O(n). The unshift function has time complexity of O(n) as well. Total time complexity of the function= O(n)+O(n)= O(2n)= O(n)=Linear Time.
// Space Complexity: O(1). I don't think this function stores anything, as it changes array values in place? Not sure on this ?. 
