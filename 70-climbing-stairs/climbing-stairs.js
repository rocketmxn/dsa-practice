/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let secondLast = 1
    let last = 1
    for(let i=1; i<n; i++) {
        const temp = secondLast
        secondLast = secondLast + last
        last = temp
    }
    return secondLast
};