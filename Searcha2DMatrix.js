

//Approach: Binary Search
var searchMatrix = function(matrix, target) {
    let colEnd=matrix[0].length-1;
    let rowStart=0;let rowEnd=matrix.length-1;
    while(rowStart<=rowEnd){
        if(matrix[rowStart][colEnd]>=target){
            if(matrix[rowStart][colEnd]===target){
                return true
            }else {
                colEnd--;
            }
        }else{
            rowStart++;
        }
    }
    return false;
};
var matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
var target = 13
// Time Complexity: O(log(m*n)), where m is length of rows and n is length of columns.
// Space Complexity: O(1). 