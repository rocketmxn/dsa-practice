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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    // Base case: if the node is null
    if (!root) return 0;
    
    let sum = 0;
    
    // If current node's value is in range, add it to sum
    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }
    
    // If current value is greater than low, search left subtree
    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }
    
    // If current value is less than high, search right subtree
    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }
    
    return sum;
};