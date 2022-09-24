

var reverseString = function(s) {
    var left=0;
    var right= s.length -1
    while (left <=right){
        var temp =s[left];
        s[left]=s[right];
        s[right]=temp;
        right--;
        left++;    
    }
    return s;
    
};
var s = ["h","e","l","l","o"];
reverseString(s)
//Time Complexity: O(n), to swap n/2 element.
//Space Complexity: O(1), constant space solution.