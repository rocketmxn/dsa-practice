/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroInFirstCol = false;
    let rows = matrix.length;
    let cols = matrix[0].length;

    // First pass: use matrix itself to mark
    for (let row = 0; row < rows; row++) {
        if (matrix[row][0] === 0) zeroInFirstCol = true;

        for (let col = 1; col < cols; col++) {
            if (matrix[row][col] === 0) {
                matrix[row][0] = 0;
                matrix[0][col] = 0;
            }
        }
    }

    // Second pass: go in reverse so we don't overwrite flags early
    for (let row = rows - 1; row >= 0; row--) {
        for (let col = cols - 1; col >= 1; col--) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0;
            }
        }
        if (zeroInFirstCol) {
            matrix[row][0] = 0;
        }
    }
};
