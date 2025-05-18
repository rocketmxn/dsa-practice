/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // Process both strings and compare the results
    return processString(s) === processString(t);
}

function processString(str) {
    // Use a stack to keep track of characters
    const stack = [];
    
    // Process each character in the string
    for (let char of str) {
        if (char === '#') {
            // If it's a backspace, remove the last character (if any)
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Otherwise, add the character to our stack
            stack.push(char);
        }
    }
    
    // Join the stack characters back into a string
    return stack.join('');
};