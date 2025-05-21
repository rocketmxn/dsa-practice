/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim(); // remove leading/trailing spaces
    let seenDigit = false;
    let seenDot = false;
    let seenE = false;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (isDigit(char)) {
            seenDigit = true;

        } else if (char === '+' || char === '-') {
            // sign is only allowed at the start or just after 'e'
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }

        } else if (char === '.') {
            // dot is not allowed after an exponent or if already seen
            if (seenDot || seenE) return false;
            seenDot = true;

        } else if (char === 'e' || char === 'E') {
            // 'e' must come after at least one digit and only once
            if (seenE || !seenDigit) return false;
            seenE = true;
            seenDigit = false; // reset because we now need digits after 'e'

        } else {
            return false; // invalid character
        }
    }

    return seenDigit; // must end with at least one digit
};

function isDigit(c) {
    return c >= '0' && c <= '9';
}
