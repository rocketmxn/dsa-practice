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
var diameterOfBinaryTree = function(root) {
    // If tree is empty
    if (!root) return 0;
    
    // Keep track of the maximum diameter found
    let maxDiameter = 0;
    
    // Helper function to find the height and update diameter
    function findHeight(node) {
        // Base case: empty node has height 0
        if (!node) return 0;
        
        // Find height of left and right subtrees
        const leftHeight = findHeight(node.left);
        const rightHeight = findHeight(node.right);
        
        // Update maximum diameter if the path through current node is longer
        // (left height + right height = path through current node)
        maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
        
        // Return height of current subtree
        // (max of left or right height + 1 for current node)
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    // Start the recursive height calculation from root
    findHeight(root);
    
    // Return the maximum diameter found
    return maxDiameter;
};