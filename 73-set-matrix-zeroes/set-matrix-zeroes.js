/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // First pass: mark rows and columns using 'x'
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                // Mark row
                for (let col = 0; col < cols; col++) {
                    if (matrix[i][col] !== 0) {
                        matrix[i][col] = matrix[i][col] === 'x' ? 'x' : 'x';
                    }
                }
                // Mark column
                for (let row = 0; row < rows; row++) {
                    if (matrix[row][j] !== 0) {
                        matrix[row][j] = matrix[row][j] === 'x' ? 'x' : 'x';
                    }
                }
            }
        }
    }

    // Second pass: set all 'x' to 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 'x') {
                matrix[i][j] = 0;
            }
        }
    }
};

