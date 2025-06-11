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
var maxPathSum = function (root) {
    let maxPath = -Infinity

    function getMaxGain(node) {
        if(node === null) return 0
        const gainOnLeft = Math.max(getMaxGain(node.left), 0)
        const gainOnRight = Math.max(getMaxGain(node.right), 0)

        const currentMaxPath = node.val + gainOnLeft + gainOnRight
        maxPath = Math.max(maxPath, currentMaxPath)

        return node.val + Math.max(gainOnLeft, gainOnRight)
    }

    getMaxGain(root)
    return maxPath
}