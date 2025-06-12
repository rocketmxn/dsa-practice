/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if(image[sr][sc] === newColor) return image
    const rows = image.length
    const cols = image[0].length
    const originalColor = image[sr][sc]

    function dfs(r,c){
        if(r<0 || r>=rows || c>=cols || c<0 || image[r][c] !== originalColor ) return
        image[r][c] = newColor
        dfs(r, c+1)
        dfs(r, c-1)
        dfs(r+1, c)
        dfs(r-1, c)
    }

    dfs(sr, sc)
    return image
}