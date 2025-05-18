/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc] === newColor) {
        return image
    }
    const rowLength = image.length
    const colLength = image[0].length
    const originalColor = image[sr][sc]
    function DFS(r, c) {
        if(r>=rowLength || c>=colLength || r<0 || c<0 || image[r][c] !== originalColor) return
        image[r][c] = newColor
        DFS(r+1, c)
        DFS(r-1, c)
        DFS(r, c+1)
        DFS(r, c-1)
    }
    DFS(sr, sc)
    return image
};