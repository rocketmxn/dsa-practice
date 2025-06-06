/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length < t.length) return "";

    const charCount = new Map();
    for (let char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let left = 0;
    let charsNeeded = t.length;
    let minLength = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        if(charCount.get(rightChar) > 0) {
            charsNeeded--
        }
        charCount.set(rightChar, (charCount.get(rightChar) || 0) - 1)
        while(charsNeeded === 0) {
            let currentLength = right - left + 1
            if(currentLength < minLength) {
                minLength = currentLength
                minStart = left
            }
            let leftChar = s[left]
            charCount.set(leftChar, (charCount.get(leftChar) || 0) + 1)
            if(charCount.get(leftChar) > 0) {
                charsNeeded++
            }
            left++
        }
    }
    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength)
};