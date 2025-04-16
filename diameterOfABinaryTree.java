

//Approach: PostOrder Depth First Search.
public class diameterOfABinaryTree {
    int diameter = 0;

    public int computeDiameter(TreeNode root) {
        dfs(root);
        return diameter;
    }

    private int dfs(TreeNode node) {
        if (node == null) return 0;

        int left = dfs(node.left);
        int right = dfs(node.right);

        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }

    public static void main(String[] args) {
        System.out.println("Run computeDiameter(TreeNode root) with your own tree.");
    }
}
// Time Complexity: O(n), where n is the number of nodes in the tree. When performing either DFS or BFS, each node in the tree is visited. 
/* Space Complexity: O(h), where h is the height of the tree. The height is the number of edges on the longest path from a node down
   to a leaf. For a tree with just one node (root), the height is 0. The space comes from the recursive call stack. 
   In the worst case (an unbalanced tree like a linked list), the height h = n, so space is O(n). In the best case (a balanced tree), 
   height h = log n, so space is O(log n)*/