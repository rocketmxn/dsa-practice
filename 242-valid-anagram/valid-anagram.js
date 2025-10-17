/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false

    const count = new Map()

    for(let ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1)
    }

    for(let ch of t) {
        if(!count.has(ch)) return false
        count.set(ch, count.get(ch) - 1)
        if(count.get(ch) < 0) return false
    }
    return true
};