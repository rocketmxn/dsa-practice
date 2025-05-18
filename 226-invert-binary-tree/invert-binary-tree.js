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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // Base case: if the tree is empty or we reach a leaf
    if (!root) return null;
    
    // Swap the left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert the left and right subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    // Return the inverted tree
    return root;
};