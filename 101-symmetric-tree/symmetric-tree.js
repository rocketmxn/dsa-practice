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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // Empty tree is symmetric
    if (!root) return true;
    
    // Check if left and right subtrees are mirrors of each other
    return isMirror(root.left, root.right);
}

// Helper function to check if two subtrees are mirrors
function isMirror(leftNode, rightNode) {
    // If both nodes are null, they're mirror images
    if (!leftNode && !rightNode) return true;
    
    // If one is null but the other isn't, they're not mirrors
    if (!leftNode || !rightNode) return false;
    
    // For two nodes to be mirrors:
    // 1. They must have the same value
    // 2. Left's left must mirror Right's right
    // 3. Left's right must mirror Right's left
    return (
        leftNode.val === rightNode.val &&
        isMirror(leftNode.left, rightNode.right) &&
        isMirror(leftNode.right, rightNode.left)
    );
};