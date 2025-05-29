/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if(!node) return null
    let dfs = (node, visited) => {
        if(visited.has(node)) return visited.get(node)
        let newNode = new Node(node.val)
        visited.set(node, newNode)
        for(let neighbor of node.neighbors) {
            newNode.neighbors.push(dfs(neighbor, visited))
        }
        return newNode
    }
    return dfs(node, new Map())
};