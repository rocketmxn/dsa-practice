/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [-1]
    let maxarea = 0
    for(let i=0; i< heights.length; i++) {
        while(stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()]
            let width = i - stack[stack.length - 1] - 1
            maxarea = Math.max(maxarea, height * width)
        }
        stack.push(i)
    }
    while(stack[stack.length - 1] !== -1) {
        const height = heights[stack.pop()]
        const width = heights.length - stack[stack.length - 1] - 1
        maxarea = Math.max(maxarea, width*height)
    }
    return maxarea
};