/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict)
    let maxLength = 0
    for(let word of wordDict) {
        maxLength = Math.max(maxLength, word.length)
    }
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    for(let i=1; i<=s.length; i++){
        for(let j = i-1; j>=Math.max(0, i-maxLength); j--) {
            if(dp[j] && wordSet.has(s.substring(j, i))){
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
};