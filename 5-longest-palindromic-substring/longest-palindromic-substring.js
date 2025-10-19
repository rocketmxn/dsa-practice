/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(!s) return ""

    function expandAroundCenter(s, left, right) {
        while(left >=0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.slice(left+1, right)
    }
    let maxStr = s[0]
    for(let i=0; i<s.length; i++) {
        const odd = expandAroundCenter(s, i, i)
        const even = expandAroundCenter(s, i, i+1)
        if(odd.length > maxStr.length) {
            maxStr = odd
        }
        if(even.length > maxStr.length) {
            maxStr = even
        }
    }
    return maxStr
};