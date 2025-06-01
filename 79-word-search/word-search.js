/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(let r=0; r<board.length; r++) {
        for(let c=0; c< board[0].length; c++) {
            if(board[r][c] === word[0] && findPath(r,c,0)) {
                return true
            }
        }
    }
    function findPath (r, c, k) {
        if(r<0 || r>=board.length || c<0 || c>board[0].length) return false
        if(board[r][c] !== word[k]) return false
        if(k === word.length - 1) return true
        const originalChar = board[r][c]
        board[r][c]= "#"
        const found = findPath(r+1, c, k+1) || findPath(r-1, c, k+1) || findPath(r, c+1, k+1) || findPath(r, c-1, k+1)
        board[r][c] = originalChar
        return found
    }
    return false
};