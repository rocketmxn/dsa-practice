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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const res = []
    if(!root) return res
    const stack = [[root, `${root.val}`]]
    while(stack.length > 0) {
        const [node, path] = stack.pop()
        if(!node.left && !node.right) res.push(path)
        if(node.left) stack.push([node.left, `${path}->${node.left.val}`])
        if(node.right) stack.push([node.right, `${path}->${node.right.val}`])
    }
        return res
};