/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // If there are no numbers, return null (no tree)
    if (nums.length === 0) {
        return null;
    }
    
    // Find the middle of the array
    const middle = Math.floor(nums.length / 2);
    
    // Create a new tree node with the middle value
    const root = new TreeNode(nums[middle]);
    
    // Build the left subtree with numbers before the middle
    root.left = sortedArrayToBST(nums.slice(0, middle));
    
    // Build the right subtree with numbers after the middle
    root.right = sortedArrayToBST(nums.slice(middle + 1));
    
    // Return the root of our new tree
    return root;
};