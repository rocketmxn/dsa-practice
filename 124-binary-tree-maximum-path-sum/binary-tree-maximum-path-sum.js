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
var maxPathSum = function(root) {
    let maxPath = -Infinity; // Initialize with negative infinity

    function getMaxGain(node) {
        if (node === null) {
            return 0;
        }

        // Recursively get the maximum gain from left and right subtrees
        // If a gain is negative, we don't include it (hence max with 0)
        const gainOnLeft = Math.max(getMaxGain(node.left), 0);
        const gainOnRight = Math.max(getMaxGain(node.right), 0);

        // Calculate the path sum with the current node as the highest point
        const currentMaxPath = node.val + gainOnLeft + gainOnRight;

        // Update the overall maximum path sum found so far
        maxPath = Math.max(maxPath, currentMaxPath);

        // For the recursion up, return the max gain if we extend the path
        // from the current node upwards (either through left or right child)
        return node.val + Math.max(gainOnLeft, gainOnRight);
    }

    getMaxGain(root); // Start the recursion
    return maxPath;
};