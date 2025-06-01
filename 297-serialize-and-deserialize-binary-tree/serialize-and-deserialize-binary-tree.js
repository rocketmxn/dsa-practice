/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const vals = []
    function preOrderTraversal(node) {
        if(node === null) {
            vals.push('#')
            return
        }
        vals.push(node.val)
        preOrderTraversal(node.left)
        preOrderTraversal(node.right)
    }
    preOrderTraversal(root)
    return vals.join(',')

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data) return null
    const vals = data.split(',')
    let index = 0
    function buildTree() {
        if(index >= vals.length) {
            return null
        }
        const val = vals[index]
        index++
        if(val === '#') return null
        const node = new ListNode(Number(val))
        node.left = buildTree()
        node.right = buildTree()
        return node
    }
    return buildTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */