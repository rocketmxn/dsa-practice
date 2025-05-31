/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (!s || s.length === 0) {
        return 0;
    }

    const n = s.length;
    let count = 0;

    // dp[i][j] will be true if the string from index i to j is a palindrome.
    const dp = Array(n).fill(null).map(() => Array(n).fill(false));

    // All single characters are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        count++;
    }

    // Check for two-character palindromes
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i+1]) {
            dp[i][i+1] = true;
            count++;
        }
    }

    // Check for palindromes of length 3 or more
    // len is the length of the substring
    for (let len = 3; len <= n; len++) {
        // i is the starting index of the substring
        for (let i = 0; i <= n - len; i++) {
            // j is the ending index of the substring
            const j = i + len - 1;

            // Check if the outer characters match and the inner substring is a palindrome
            if (s[i] === s[j] && dp[i+1][j-1]) {
                dp[i][j] = true;
                count++;
            }
        }
    }
    return count;
};