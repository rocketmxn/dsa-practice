/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stackOfOpenBrackets = [] // closing Brackets
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (const char of s) {
      if(Object.values(mapping).includes(char)) { // if open bracket
        stackOfOpenBrackets.push(char)
      } else if (mapping.hasOwnProperty(char)) { // if close bracket
        if(!stackOfOpenBrackets.length || mapping[char] !== stackOfOpenBrackets.pop()) {
            return false
        }
      }
    }

    // If the stack is empty at the end, all brackets were matched correctly.
    return stackOfOpenBrackets.length === 0;
};