/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
   if(!s || s.length === 0) return 0
   let count = 0
    function expandAndCount (s, left, right) {
        while(left >=0 && right < s.length && s[left] === s[right]){
            count++
            left--
            right++
        }
    }
    for(let i=0; i<s.length; i++) {
        expandAndCount(s, i, i+1)
        expandAndCount(s, i, i)
    }
    return count
};