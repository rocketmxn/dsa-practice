/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // If one of the trees is empty, return the other tree
    if (root1 === null) {
        return root2;
    }
    if (root2 === null) {
        return root1;
    }
    
    // Create a new node with the combined values
    const newRoot = new TreeNode(root1.val + root2.val);
    
    // Recursively merge the left subtrees
    newRoot.left = mergeTrees(root1.left, root2.left);
    
    // Recursively merge the right subtrees
    newRoot.right = mergeTrees(root1.right, root2.right);
    
    // Return the merged tree
    return newRoot;
};