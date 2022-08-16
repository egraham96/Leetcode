

//Approach 1:
var restoreString = function(s, indices) {
    var len = indices.length;
    var str = new Array(len);     
    for(let i=0; i<len;i++){
        str[indices[i]] = s[i];
    }
    return str.join("");  
};
var s = "codeleet";
var indices = [4,5,6,7,0,2,1,3];
restoreString(s, indices)
// Time Complexity: O(n), where n=length of indices. 
// Space Complexity: O(n) where maximum space taken up is length of indices.