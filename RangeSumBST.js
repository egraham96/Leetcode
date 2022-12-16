

//Approach: Iterative DFS
var rangeSumBST = function(root, low, high) {
    var sum=0
    let stack = [root];
    while(stack.length){
        let node = stack.pop();
        sum+=node.val >=low && node.val<=high ? node.val: 0;
        if(node.left)
            stack.push(node.left);
        if(node.right)
            stack.push(node.right);
    }
    return sum;
};
var root = [10,5,15,3,7,13,18,1,null,6];
var low = 6; 
var high = 10
rangeSumBST(root, low, high)
// Time Complexity: O(n), where n is the number of nodes in the tree.
/* Space Complexity: O(n). For the recursive and iterative implementations, we are performing a DFS (Depth-First Search) traversal. The recursive solution requries additional space to maintain the function call stack while the iterative solution requires additional space to maintain the stack. 
In both implementations, the worst-case scenario occurs when the tree is of chain shape, and we will reach all the way down to the leaf node. In this case, the space required for the stack is O(n). */