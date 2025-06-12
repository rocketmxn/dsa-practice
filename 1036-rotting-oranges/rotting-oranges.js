/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const totalrows = grid.length
    const totalcols = grid[0].length
    const rottenQueue = []
    let freshoranges = 0

    for(let r=0; r<totalrows; r++) {
        for(let c=0; c<totalcols; c++) {
            if(grid[r][c] === 2){
                rottenQueue.push([r,c,0])
            } else if(grid[r][c] === 1) {
                freshoranges++
            }
        }
    }
    let minutes = 0
    let directions = [[0,1],[0,-1],[1,0],[-1,0]]

    while(rottenQueue.length > 0) {
        const [r,c,time] = rottenQueue.shift()
        minutes = Math.max(minutes, time)
        for(let [dr,dc] of directions){
            const newRowIndex = r+dr
            const newColIndex = c+dc
            if(newRowIndex>=0 && newRowIndex<totalrows && newColIndex>=0 && newColIndex<totalcols && grid[newRowIndex][newColIndex]===1) {
                grid[newRowIndex][newColIndex] = 2
                freshoranges--
                rottenQueue.push([newRowIndex,newColIndex,time+1])
            }
        }
    }
    return freshoranges === 0 ? minutes : -1
};