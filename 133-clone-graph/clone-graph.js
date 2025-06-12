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
var cloneGraph = function (node) {
    if(!node) return null
    let newNode = new Node(node.val)
    let queue = [node]
    let visited = new Map()
    visited.set(node, newNode)
    while(queue.length > 0) {
        let currentN = queue.shift()
        for(let neighbor of currentN.neighbors) {
            if(!visited.has(neighbor)){
                let newNeighbor = new Node(neighbor.val)
                visited.set(neighbor, newNeighbor)
                queue.push(neighbor)
            }
            visited.get(currentN).neighbors.push(visited.get(neighbor))
        }
    }
    return newNode
}