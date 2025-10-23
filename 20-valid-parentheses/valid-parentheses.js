/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
   const openFor = {")":"(", "}":"{", "]":"["}
   const stack = []
   for(const ch of s) {
    if(ch === "(" || ch === "{" || ch === "[") {
        stack.push(ch)
    }
    if(ch === ")" || ch === "}" || ch === "]") {
        if(stack.pop() !== openFor[ch]) return false
    }
   }
   return stack.length === 0
};