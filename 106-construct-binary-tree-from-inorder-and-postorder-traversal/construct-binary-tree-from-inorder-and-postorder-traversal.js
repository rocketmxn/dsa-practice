/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inorderIndexMap = new Map()
    for(let i=0; i<inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i)
    }
    let postOrderIndex = postorder.length - 1

    function helper(left, right) {
        if(left > right) return null
        const rootVal = postorder[postOrderIndex]
        const rootNode = new TreeNode(rootVal)
        postOrderIndex--
        const inorderRootIndex = inorderIndexMap.get(rootVal)

        rootNode.right = helper(inorderRootIndex + 1, right)
        rootNode.left = helper(left, inorderRootIndex - 1)
        return rootNode
    }
    return helper(0, inorder.length - 1)
};