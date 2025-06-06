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

        // If the character is one we need, decrement charsNeeded
        // The check charCount.get(rightChar) > 0 ensures we only decrement
        // for required characters, not for surplus ones.
        if (charCount.get(rightChar) > 0) {
            charsNeeded--;
        }
        // Decrement the character's count in the map.
        // If it's not a required character, its count will become negative.
        charCount.set(rightChar, (charCount.get(rightChar) || 0) - 1);


        // When charsNeeded is 0, we have a valid window. Now, try to shrink it.
        while (charsNeeded === 0) {
            // Update our minimum window if the current one is smaller
            let currentLength = right - left + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
                minStart = left;
            }

            // Move the left pointer to shrink the window
            let leftChar = s[left];

            // Increment the count of the character leaving the window
            charCount.set(leftChar, charCount.get(leftChar) + 1);

            // If the character leaving was a required one (its count is now > 0),
            // then our window is no longer valid, so increment charsNeeded.
            if (charCount.get(leftChar) > 0) {
                charsNeeded++;
            }
            left++; // Shrink the window
        }
    }

    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
};