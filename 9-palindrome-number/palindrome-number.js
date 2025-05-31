/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if (x < 0) {
        return false;
    }

    const s = String(x);
    let start = 0
    let end = s.length - 1
    while(start < end) {
        if(s[start] === s[end]) {
            start++
            end--
        } else {
            return false
        }
    }
    return true
};