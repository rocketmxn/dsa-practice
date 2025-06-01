/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(!matrix || matrix.length === 0) {
        return []
    }
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let bottom = matrix.length - 1
    let direction = 0
    const result = []
    while(left <= right && top <= bottom) {
        if(direction === 0) {
            for(let i=left; i<=right; i++) {
                result.push(matrix[top][i])
            }
            top++
        }
        if(direction === 1) {
            for(let i=top; i<=bottom; i++) {
                result.push(matrix[i][right])
            }
            right--
        }
        if(direction === 2) {
            for(let i=right; i>=left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--
        }
        if(direction === 3) {
            for(let i=bottom; i>= top; i--) {
                result.push(matrix[i][left])
            }
            left++
        }
        direction = (direction+1) % 4
    }
    return result
};