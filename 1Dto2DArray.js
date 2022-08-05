

//Approach:
var construct2DArray = function(original, m, n) {
    if (original.length !== (m*n)) return []
    let result = []
    let arr = []
    for (let i = 0; i < original.length; i++){
        arr.push(original[i])
        if (arr.length === n){
            result.push(arr)
            arr = []
        }
    }
    return result
};
/*The Time Complexity of Approach 1 should be O(N). Assume that N is the length of the one dimensional array. The length of the one-dimensional array is equal to m*n.
/*The Space Complexity of Approach 1 is ?*/
