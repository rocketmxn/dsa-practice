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
 * @return {number[][]}
 */
var levelOrder = function(root) {
   let res = []
   if(!root) return res
   let q = [root]
   while(q.length > 0) {
    let sameLevel = []
    let levelSize = q.length
    for(let i=0; i<levelSize; i++) {
        const node = q.shift()
        sameLevel.push(node.val)
        if(node.left) q.push(node.left)
        if(node.right) q.push(node.right)
    }
        res.push(sameLevel)
   }
    return res
};