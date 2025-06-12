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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const allPaths = []
    function findPaths (node, remainingSum, currentPath) {
        if(!node) return
        currentPath.push(node.val)
        const newRemainingSum = remainingSum - node.val

        if(!node.left && !node.right && newRemainingSum === 0) {
            allPaths.push([...currentPath])
        }
        findPaths(node.left, newRemainingSum, currentPath)
        findPaths(node.right, newRemainingSum, currentPath)
        currentPath.pop()
    }
    findPaths(root, targetSum, [])
    return allPaths
};