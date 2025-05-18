/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // If there's no tree (null), the depth is 0
    if (root === null) {
        return 0;
    }
    
    // Find the maximum depth of the left subtree
    const leftDepth = maxDepth(root.left);
    
    // Find the maximum depth of the right subtree
    const rightDepth = maxDepth(root.right);
    
    // The maximum depth is the maximum of left and right depths, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
};