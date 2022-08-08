

//Approach 1: Left and Right Sides
var minOperations = function(boxes) {
    let output = [];
    // Left to right
    let oneCount = 0, total = 0;
    for (let l = 0; l < boxes.length; l++) {
        output[l] = total;
        if (boxes[l] === '1') oneCount++;
        total += oneCount;
    }
    // Right to left
    oneCount = 0, total = 0;
    for (let r = boxes.length - 1; r >= 0; r--) {
        output[r] += total;
        if (boxes[r] === '1') oneCount++;
        total += oneCount;
    }
    return output;
};
var boxes = "001011";
minOperations(boxes);
// Time Complexity: O(n), where n is the length of boxes.
// Space Complexity: O(1), number of variables is constant regardless of size of n.