/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid || grid.length === 0) return 0
    const numRows = grid.length
    const numCols = grid[0].length
    let islandCount = 0
    function dfs (r, c) {
        if(r<0 || r >= numRows) return
        if(c<0 || c >= numCols) return
        if(grid[r][c] !== "1") return
        grid[r][c] = "#"
        dfs(r-1, c)
        dfs(r+1, c)
        dfs(r, c+1)
        dfs(r, c-1)
    }
    for(let i=0; i<numRows; i++) {
        for(let j=0; j<numCols; j++) {
            if(grid[i][j] === "1") {
                dfs(i, j)
                islandCount++
            }
        }
    }
    return islandCount
};