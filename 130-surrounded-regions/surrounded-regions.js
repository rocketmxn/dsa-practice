/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(!board || !board.length) return
    const rows = board.length
    const cols = board[0].length

    function dfs(r, c) {
        if(r<0 || r>=rows || c<0 || c>=cols || board[r][c] !== "O") return
        board[r][c] = "S"
        dfs(r,c+1)
        dfs(r,c-1)
        dfs(r+1,c)
        dfs(r-1,c)
    }

    for(let r=0;r<rows;r++) {
        for(let c=0;c<cols;c++){
            const isBorder = r === 0 || c === 0 || r === rows-1 || c === cols-1
            if(isBorder && board[r][c] === "O") {
                dfs(r,c)
            }
        }
    }

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(board[r][c] === "O") {
                board[r][c] = "X"
            } else if(board[r][c] === "S"){
                board[r][c] = "O"
            }
        }
    }
};